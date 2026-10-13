import React, { useState, useMemo } from 'react';
import { 
  PieChart as PieIcon, 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Award, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { CapRules, RosterTier, Team } from '../../types/nba';
import { calculateTeamSummary, formatCurrency, formatDeltaCurrency, formatPercent } from '../../utils/capCalculations';

interface RosterValueAllocationPageProps {
  teams: Team[];
  selectedTeamId: string;
  onSelectTeam: (teamId: string) => void;
  rules: CapRules;
}

export const RosterValueAllocationPage: React.FC<RosterValueAllocationPageProps> = ({
  teams,
  selectedTeamId,
  onSelectTeam,
  rules
}) => {
  const [activeTierHover, setActiveTierHover] = useState<RosterTier | null>(null);

  const currentTeam = useMemo(() => {
    return teams.find(t => t.id === selectedTeamId) || teams[0];
  }, [teams, selectedTeamId]);

  const summary = useMemo(() => {
    return calculateTeamSummary(currentTeam.id, currentTeam.roster, rules, currentTeam.isRepeaterTaxpayer);
  }, [currentTeam, rules]);

  // League averages for comparison
  const leagueAverages = useMemo(() => {
    let totalStar = 0;
    let totalStarter = 0;
    let totalRotation = 0;
    let totalDev = 0;
    let totalPayroll = 0;

    teams.forEach(t => {
      const s = calculateTeamSummary(t.id, t.roster, rules);
      totalStar += s.starSpend;
      totalStarter += s.starterSpend;
      totalRotation += s.rotationSpend;
      totalDev += s.developmentalSpend;
      totalPayroll += s.activePayroll;
    });

    return {
      starPct: totalPayroll > 0 ? totalStar / totalPayroll : 0.45,
      starterPct: totalPayroll > 0 ? totalStarter / totalPayroll : 0.32,
      rotationPct: totalPayroll > 0 ? totalRotation / totalPayroll : 0.17,
      devPct: totalPayroll > 0 ? totalDev / totalPayroll : 0.06
    };
  }, [teams, rules]);

  // Breakdown tiers with player counts and values
  const tierBreakdown = useMemo(() => {
    const total = summary.activePayroll || 1;

    const starPlayers = currentTeam.roster.filter(p => p.tier === 'Star');
    const starterPlayers = currentTeam.roster.filter(p => p.tier === 'Starter');
    const rotationPlayers = currentTeam.roster.filter(p => p.tier === 'Rotation');
    const devPlayers = currentTeam.roster.filter(p => p.tier === 'Developmental');

    const starMarket = starPlayers.reduce((sum, p) => sum + p.estimatedMarketValue, 0);
    const starterMarket = starterPlayers.reduce((sum, p) => sum + p.estimatedMarketValue, 0);
    const rotationMarket = rotationPlayers.reduce((sum, p) => sum + p.estimatedMarketValue, 0);
    const devMarket = devPlayers.reduce((sum, p) => sum + p.estimatedMarketValue, 0);

    return [
      {
        tier: 'Star' as RosterTier,
        label: 'Star Players',
        description: 'Franchise anchors & max contracts ($35M+)',
        spend: summary.starSpend,
        pct: summary.starSpend / total,
        leaguePct: leagueAverages.starPct,
        count: starPlayers.length,
        marketValue: starMarket,
        surplus: starMarket - summary.starSpend,
        color: '#F59E0B', // amber-500
        borderColor: '#B45309',
        hoverColor: '#FBBF24',
        players: starPlayers
      },
      {
        tier: 'Starter' as RosterTier,
        label: 'Starters',
        description: 'Key starting rotation players ($15M–$34.9M)',
        spend: summary.starterSpend,
        pct: summary.starterSpend / total,
        leaguePct: leagueAverages.starterPct,
        count: starterPlayers.length,
        marketValue: starterMarket,
        surplus: starterMarket - summary.starterSpend,
        color: '#0EA5E9', // sky-500
        borderColor: '#0369A1',
        hoverColor: '#38BDF8',
        players: starterPlayers
      },
      {
        tier: 'Rotation' as RosterTier,
        label: 'Rotation Players',
        description: 'Key reserves & specialist contributors ($5M–$14.9M)',
        spend: summary.rotationSpend,
        pct: summary.rotationSpend / total,
        leaguePct: leagueAverages.rotationPct,
        count: rotationPlayers.length,
        marketValue: rotationMarket,
        surplus: rotationMarket - summary.rotationSpend,
        color: '#6366F1', // indigo-500
        borderColor: '#4338CA',
        hoverColor: '#818CF8',
        players: rotationPlayers
      },
      {
        tier: 'Developmental' as RosterTier,
        label: 'Developmental / Minimums',
        description: 'Rookie scale, two-ways & vet minimums (<$5M)',
        spend: summary.developmentalSpend,
        pct: summary.developmentalSpend / total,
        leaguePct: leagueAverages.devPct,
        count: devPlayers.length,
        marketValue: devMarket,
        surplus: devMarket - summary.developmentalSpend,
        color: '#10B981', // emerald-500
        borderColor: '#047857',
        hoverColor: '#34D399',
        players: devPlayers
      }
    ];
  }, [summary, currentTeam, leagueAverages]);

  // Donut chart path math
  const donutPaths = useMemo(() => {
    let cumulative = 0;
    const size = 220;
    const center = size / 2;
    const radius = 80;
    const strokeWidth = 26;

    return tierBreakdown.map((item) => {
      const startAngle = cumulative * 2 * Math.PI - Math.PI / 2;
      const angle = item.pct * 2 * Math.PI;
      const endAngle = startAngle + angle;
      cumulative += item.pct;

      // Calculate path arc
      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);

      const largeArcFlag = angle > Math.PI ? 1 : 0;
      const d = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;

      return {
        ...item,
        d,
        strokeWidth
      };
    });
  }, [tierBreakdown]);

  // Player Value Surplus Analysis (Steals vs Inefficiencies)
  const playersBySurplus = useMemo(() => {
    return [...currentTeam.roster].sort((a, b) => {
      const surplusA = a.estimatedMarketValue - (a.contract?.currentSalary || 0);
      const surplusB = b.estimatedMarketValue - (b.contract?.currentSalary || 0);
      return surplusB - surplusA;
    });
  }, [currentTeam]);

  // Front office efficiency profile
  const allocationArchetype = useMemo(() => {
    const starPct = summary.activePayroll > 0 ? summary.starSpend / summary.activePayroll : 0;
    const devPct = summary.activePayroll > 0 ? summary.developmentalSpend / summary.activePayroll : 0;

    if (starPct >= 0.60) {
      return {
        title: 'Star Heavy / Top-Heavy Model',
        description: 'Franchise concentrates over 60% of payroll in premium max-contract stars. Reliant on minimums and rookie surplus to fill rotation.',
        accent: 'text-amber-400'
      };
    } else if (starPct < 0.35 && devPct > 0.15) {
      return {
        title: 'Rebuilding / High Youth Surplus',
        description: 'Payroll dominated by cost-controlled rookie scale deals and young core assets. Exceptional financial flexibility.',
        accent: 'text-emerald-400'
      };
    } else {
      return {
        title: 'Balanced Depth / Modern Core',
        description: 'Healthy distribution between primary options, high-level starters, and mid-tier rotation veterans.',
        accent: 'text-sky-400'
      };
    }
  }, [summary]);

  return (
    <div className="space-y-6">
      {/* Header & Team Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold font-['Outfit'] text-white tracking-tight">
            Roster Value Allocation & ROI
          </h1>
          <p className="text-xs text-neutral-400 mt-0.5">
            Spending tier breakdowns, payroll concentration curves, and estimated player market value surplus analytics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400">Team:</span>
          <select
            value={selectedTeamId}
            onChange={(e) => onSelectTeam(e.target.value)}
            aria-label="Select NBA franchise for allocation analysis"
            className="bg-[#161B22] border border-neutral-700 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            {teams.map(t => (
              <option key={t.id} value={t.id}>
                {t.city} {t.name} ({t.abbreviation})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Top Level Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Archetype Card */}
        <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
            <Award className="w-4 h-4 text-orange-400" />
            <span>Roster Spending Strategy</span>
          </div>
          <span className={`text-lg font-bold font-['Outfit'] block mt-1 ${allocationArchetype.accent}`}>
            {allocationArchetype.title}
          </span>
          <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
            {allocationArchetype.description}
          </p>
        </div>

        {/* Estimated Value ROI */}
        <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Roster Value Multiplier
            </span>
            <span className="font-mono text-[10px] text-neutral-500">Analytics Index</span>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-white tabular-nums">
              {summary.surplusRatio.toFixed(2)}x
            </span>
            <span className={`text-xs font-mono font-medium ${summary.netSurplusValue >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ({formatDeltaCurrency(summary.netSurplusValue)} Surplus)
            </span>
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            Total Market Value: <span className="font-mono text-white font-medium">{formatCurrency(summary.totalMarketValue)}</span> vs Active Salary <span className="font-mono text-white font-medium">{formatCurrency(summary.activePayroll)}</span>
          </p>
        </div>

        {/* Top Heavy Index */}
        <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span>Star Concentration</span>
            <span className="font-mono text-amber-400 text-xs">
              {formatPercent(summary.starSpend / (summary.activePayroll || 1))}
            </span>
          </div>
          <div className="text-2xl font-bold font-mono text-white tabular-nums mt-1">
            {formatCurrency(summary.starSpend)}
          </div>
          <p className="text-xs text-neutral-400 mt-2">
            Allocated across {currentTeam.roster.filter(p => p.tier === 'Star').length} max/supermax star players.
          </p>
        </div>
      </div>

      {/* Main Visual Section: Donut Chart + Stacked Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Donut Chart Card */}
        <div className="lg:col-span-5 bg-[#161B22] border border-neutral-800 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <PieIcon className="w-4 h-4 text-orange-400" />
                <h3 className="text-sm font-semibold text-white">
                  Payroll Allocation by Tier
                </h3>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                {currentTeam.city} {currentTeam.name}
              </span>
            </div>

            {/* SVG Donut */}
            <div className="relative flex items-center justify-center my-4">
              <svg width="220" height="220" viewBox="0 0 220 220" className="overflow-visible">
                {/* Background Ring */}
                <circle
                  cx="110"
                  cy="110"
                  r="80"
                  fill="transparent"
                  stroke="#1F2937"
                  strokeWidth="24"
                />

                {/* Slices */}
                {donutPaths.map((slice) => {
                  const isHovered = activeTierHover === slice.tier;
                  return (
                    <path
                      key={slice.tier}
                      d={slice.d}
                      fill="transparent"
                      stroke={isHovered ? slice.hoverColor : slice.color}
                      strokeWidth={isHovered ? 30 : 24}
                      strokeLinecap="round"
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setActiveTierHover(slice.tier)}
                      onMouseLeave={() => setActiveTierHover(null)}
                    />
                  );
                })}
              </svg>

              {/* Center Donut Hole Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xs text-neutral-400 font-mono uppercase tracking-wider">
                  {activeTierHover ? activeTierHover : 'Total Payroll'}
                </span>
                <span className="text-lg font-bold font-mono text-white tabular-nums">
                  {activeTierHover
                    ? formatCurrency(tierBreakdown.find(t => t.tier === activeTierHover)?.spend || 0)
                    : formatCurrency(summary.activePayroll)}
                </span>
                <span className="text-[11px] text-neutral-400 font-mono">
                  {activeTierHover
                    ? formatPercent(tierBreakdown.find(t => t.tier === activeTierHover)?.pct || 0)
                    : `${currentTeam.roster.length} Players`}
                </span>
              </div>
            </div>
          </div>

          {/* Donut Legend */}
          <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-800 text-xs">
            {tierBreakdown.map((item) => (
              <div
                key={item.tier}
                className={`p-2 rounded border transition-colors cursor-pointer ${
                  activeTierHover === item.tier
                    ? 'bg-neutral-800/80 border-neutral-600'
                    : 'bg-[#0E121A] border-neutral-800 hover:border-neutral-700'
                }`}
                onMouseEnter={() => setActiveTierHover(item.tier)}
                onMouseLeave={() => setActiveTierHover(null)}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="font-semibold text-white text-[11px] truncate">{item.tier}</span>
                </div>
                <div className="flex justify-between items-baseline font-mono text-[11px]">
                  <span className="text-neutral-400">{formatCurrency(item.spend)}</span>
                  <span className="text-neutral-200 font-semibold">{formatPercent(item.pct)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stacked Comparison Bar & Tier Ledger */}
        <div className="lg:col-span-7 bg-[#161B22] border border-neutral-800 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-orange-400" />
                <h3 className="text-sm font-semibold text-white">
                  Franchise Tier vs League Benchmark
                </h3>
              </div>
              <span className="text-xs text-neutral-400">NBA 30-Team Avg Comparison</span>
            </div>

            {/* Visual Stacked Bars */}
            <div className="space-y-4 mb-6">
              {/* Team Bar */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-medium text-white">{currentTeam.city} {currentTeam.name}</span>
                  <span className="font-mono text-neutral-400">{formatCurrency(summary.activePayroll)}</span>
                </div>
                <div className="h-4 bg-neutral-900 rounded-md flex overflow-hidden border border-neutral-800">
                  {tierBreakdown.map((item) => (
                    <div
                      key={item.tier}
                      style={{ width: `${item.pct * 100}%`, backgroundColor: item.color }}
                      className="h-full transition-all"
                      title={`${item.tier}: ${formatPercent(item.pct)}`}
                    />
                  ))}
                </div>
              </div>

              {/* League Average Bar */}
              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-neutral-400">League Average Baseline</span>
                  <span className="font-mono text-neutral-500">100% Normalized</span>
                </div>
                <div className="h-4 bg-neutral-900 rounded-md flex overflow-hidden border border-neutral-800">
                  <div style={{ width: `${leagueAverages.starPct * 100}%`, backgroundColor: '#F59E0B' }} title={`Star: ${formatPercent(leagueAverages.starPct)}`} />
                  <div style={{ width: `${leagueAverages.starterPct * 100}%`, backgroundColor: '#0EA5E9' }} title={`Starter: ${formatPercent(leagueAverages.starterPct)}`} />
                  <div style={{ width: `${leagueAverages.rotationPct * 100}%`, backgroundColor: '#6366F1' }} title={`Rotation: ${formatPercent(leagueAverages.rotationPct)}`} />
                  <div style={{ width: `${leagueAverages.devPct * 100}%`, backgroundColor: '#10B981' }} title={`Dev: ${formatPercent(leagueAverages.devPct)}`} />
                </div>
              </div>
            </div>

            {/* Detailed Tier Table */}
            <div className="border border-neutral-800 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#0E121A] text-neutral-400 border-b border-neutral-800">
                  <tr>
                    <th className="py-2.5 px-3 font-normal">Tier</th>
                    <th className="py-2.5 px-2 text-center font-normal">Count</th>
                    <th className="py-2.5 px-3 text-right font-normal">Payroll Spend</th>
                    <th className="py-2.5 px-2 text-right font-normal">% Payroll</th>
                    <th className="py-2.5 px-3 text-right font-normal">Est. Value</th>
                    <th className="py-2.5 px-3 text-right font-normal">Net Surplus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60">
                  {tierBreakdown.map((item) => (
                    <tr 
                      key={item.tier} 
                      className={`hover:bg-neutral-800/40 transition-colors ${activeTierHover === item.tier ? 'bg-neutral-800/30' : ''}`}
                      onMouseEnter={() => setActiveTierHover(item.tier)}
                      onMouseLeave={() => setActiveTierHover(null)}
                    >
                      <td className="py-2.5 px-3 font-sans font-medium text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <span>{item.label}</span>
                      </td>
                      <td className="py-2.5 px-2 text-center text-neutral-300">
                        {item.count}
                      </td>
                      <td className="py-2.5 px-3 text-right text-white font-semibold">
                        {formatCurrency(item.spend)}
                      </td>
                      <td className="py-2.5 px-2 text-right text-neutral-300">
                        {formatPercent(item.pct)}
                      </td>
                      <td className="py-2.5 px-3 text-right text-neutral-300">
                        {formatCurrency(item.marketValue)}
                      </td>
                      <td className="py-2.5 px-3 text-right font-semibold">
                        <span className={item.surplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                          {formatDeltaCurrency(item.surplus)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Player Value Surplus Table: Actual Salary vs Estimated Analytics Value */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Contract Surplus / Deficit Analysis
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Evaluates player production efficiency by comparing contract compensation against predictive market value.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto border border-neutral-800 rounded-lg">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-[#0E121A] text-neutral-400 border-b border-neutral-800">
              <tr>
                <th className="py-2.5 px-3 font-normal font-sans">Player</th>
                <th className="py-2.5 px-2 font-normal text-center">Pos</th>
                <th className="py-2.5 px-2 font-normal text-center">Tier</th>
                <th className="py-2.5 px-3 font-normal text-right">Actual Salary</th>
                <th className="py-2.5 px-3 font-normal text-right">Est. Market Value</th>
                <th className="py-2.5 px-3 font-normal text-right">Surplus ($)</th>
                <th className="py-2.5 px-4 font-normal font-sans">Front Office Assessment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {playersBySurplus.map((player) => {
                const salary = player.contract?.currentSalary || 0;
                const surplus = player.estimatedMarketValue - salary;
                const ratio = salary > 0 ? player.estimatedMarketValue / salary : 1;

                let assessment = 'Fair Value';
                let assessColor = 'text-neutral-400';

                if (surplus >= 15000000) {
                  assessment = 'Elite Franchise Steal (High Value)';
                  assessColor = 'text-emerald-400 font-semibold';
                } else if (surplus >= 5000000) {
                  assessment = 'Positive Value Surplus';
                  assessColor = 'text-emerald-300';
                } else if (surplus <= -15000000) {
                  assessment = 'Severe Salary Cap Anchor';
                  assessColor = 'text-rose-400 font-semibold';
                } else if (surplus <= -5000000) {
                  assessment = 'Inefficient Premium / Overpaid';
                  assessColor = 'text-rose-300';
                }

                return (
                  <tr key={player.id} className="hover:bg-neutral-800/40 transition-colors">
                    <td className="py-2.5 px-3 font-sans font-medium text-white">
                      #{player.jerseyNumber} {player.name}
                    </td>
                    <td className="py-2.5 px-2 text-center text-neutral-300">
                      {player.position}
                    </td>
                    <td className="py-2.5 px-2 text-center text-neutral-400">
                      {player.tier}
                    </td>
                    <td className="py-2.5 px-3 text-right text-white font-medium">
                      {formatCurrency(salary, false)}
                    </td>
                    <td className="py-2.5 px-3 text-right text-neutral-200">
                      {formatCurrency(player.estimatedMarketValue, false)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-semibold">
                      <span className={surplus >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                        {formatDeltaCurrency(surplus)}
                      </span>
                    </td>
                    <td className={`py-2.5 px-4 font-sans text-xs ${assessColor}`}>
                      {assessment}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
