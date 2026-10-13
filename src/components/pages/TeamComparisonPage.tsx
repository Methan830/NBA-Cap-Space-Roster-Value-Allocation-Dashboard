import React, { useState, useMemo } from 'react';
import { 
  GitCompare, 
  Plus, 
  X, 
  DollarSign, 
  TrendingUp, 
  ShieldAlert, 
  Users, 
  Award,
  Layers
} from 'lucide-react';
import { CapRules, Team } from '../../types/nba';
import { calculateTeamSummary, formatCurrency, formatDeltaCurrency, formatPercent } from '../../utils/capCalculations';
import { ApronIndicator } from '../common/ApronIndicator';

interface TeamComparisonPageProps {
  teams: Team[];
  rules: CapRules;
}

export const TeamComparisonPage: React.FC<TeamComparisonPageProps> = ({
  teams,
  rules
}) => {
  // Default compare top franchises: BOS, OKC, NYK, DAL
  const [selectedTeamIds, setSelectedTeamIds] = useState<string[]>(() => {
    const defaults = ['bos', 'okc', 'nyk', 'dal'];
    return defaults.filter(id => teams.some(t => t.id === id));
  });

  const selectedTeams = useMemo(() => {
    return selectedTeamIds
      .map(id => teams.find(t => t.id === id))
      .filter((t): t is Team => Boolean(t));
  }, [teams, selectedTeamIds]);

  // Handle adding team to comparison (up to 4)
  const handleAddTeam = (teamId: string) => {
    if (selectedTeamIds.length < 4 && !selectedTeamIds.includes(teamId)) {
      setSelectedTeamIds(prev => [...prev, teamId]);
    }
  };

  // Handle removing team
  const handleRemoveTeam = (teamId: string) => {
    if (selectedTeamIds.length > 1) {
      setSelectedTeamIds(prev => prev.filter(id => id !== teamId));
    }
  };

  // Unselected teams available to add
  const availableTeams = useMemo(() => {
    return teams.filter(t => !selectedTeamIds.includes(t.id));
  }, [teams, selectedTeamIds]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold font-['Outfit'] text-white tracking-tight flex items-center gap-2">
            <GitCompare className="w-6 h-6 text-orange-400" />
            Cross-Franchise Cap & Value Benchmark
          </h1>
          <p className="text-xs text-neutral-400 mt-0.5">
            Benchmark up to 4 NBA franchises side-by-side across payroll distribution, tier spending, apron proximity, and analytics ROI.
          </p>
        </div>

        {/* Add Team Dropdown */}
        {selectedTeamIds.length < 4 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Add Team ({selectedTeamIds.length}/4):</span>
            <select
              value=""
              onChange={(e) => {
                if (e.target.value) handleAddTeam(e.target.value);
              }}
              aria-label="Add franchise to comparison"
              className="bg-[#161B22] border border-neutral-700 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
            >
              <option value="" disabled>Select Team to Add...</option>
              {availableTeams.map(t => (
                <option key={t.id} value={t.id}>
                  + {t.city} {t.name} ({t.abbreviation})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className={`grid grid-cols-1 ${
        selectedTeams.length === 2 ? 'md:grid-cols-2' :
        selectedTeams.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
      } gap-4`}>
        {selectedTeams.map((team) => {
          const summary = calculateTeamSummary(team.id, team.roster, rules, team.isRepeaterTaxpayer);
          
          // Demographics calculations
          const avgAge = (team.roster.reduce((sum, p) => sum + p.age, 0) / (team.roster.length || 1)).toFixed(1);
          const maxContractsCount = team.roster.filter(p => p.contract.contractType === 'Max' || p.contract.contractType === 'Supermax').length;
          const expiringCount = team.roster.filter(p => p.contract.isExpiring).length;
          
          const starPct = summary.activePayroll > 0 ? (summary.starSpend / summary.activePayroll) * 100 : 0;
          const starterPct = summary.activePayroll > 0 ? (summary.starterSpend / summary.activePayroll) * 100 : 0;
          const rotationPct = summary.activePayroll > 0 ? (summary.rotationSpend / summary.activePayroll) * 100 : 0;
          const devPct = summary.activePayroll > 0 ? (summary.developmentalSpend / summary.activePayroll) * 100 : 0;

          return (
            <div 
              key={team.id}
              className="bg-[#161B22] border border-neutral-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Franchise Color Top Accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: team.primaryColor }}
              />

              <div>
                {/* Team Header & Remove Button */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-mono font-bold text-xs shadow"
                      style={{ backgroundColor: team.primaryColor }}
                    >
                      {team.abbreviation}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm font-['Outfit'] leading-tight">
                        {team.city} {team.name}
                      </h3>
                      <span className="text-[10px] text-neutral-400 font-mono">
                        {team.conference} · {team.division}
                      </span>
                    </div>
                  </div>

                  {selectedTeams.length > 1 && (
                    <button
                      onClick={() => handleRemoveTeam(team.id)}
                      className="p-1 text-neutral-500 hover:text-neutral-300 rounded hover:bg-neutral-800"
                      title="Remove from comparison"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Primary Financial Metric */}
                <div className="mb-4 bg-[#0E121A] p-3 rounded-lg border border-neutral-800 font-mono">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[11px] text-neutral-400">Active Payroll</span>
                    <span className="text-base font-bold text-white tabular-nums">
                      {formatCurrency(summary.activePayroll)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500 text-[10px]">Cap Status:</span>
                    <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded border ${
                      summary.financialStatus === 'Under Cap' ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' :
                      summary.financialStatus === 'Second Apron' ? 'text-rose-400 border-rose-500/30 bg-rose-500/10' :
                      summary.financialStatus === 'In Luxury Tax' ? 'text-amber-400 border-amber-500/30 bg-amber-500/10' :
                      'text-sky-400 border-sky-500/30 bg-sky-500/10'
                    }`}>
                      {summary.financialStatus}
                    </span>
                  </div>
                </div>

                {/* Mini Apron Indicator */}
                <div className="mb-4">
                  <ApronIndicator 
                    payroll={summary.activePayroll} 
                    rules={rules} 
                    status={summary.financialStatus} 
                    showLabels={false} 
                  />
                  <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                    <span>Tax: {summary.taxRoom < 0 ? formatCurrency(summary.estimatedTaxBill) : 'None'}</span>
                    <span>2nd Apron: {summary.secondApronRoom < 0 ? `+${formatCurrency(Math.abs(summary.secondApronRoom))} over` : `${formatCurrency(summary.secondApronRoom)} rm`}</span>
                  </div>
                </div>

                {/* Spending Tier Distribution Stacked Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-[11px] text-neutral-300 font-medium mb-1">
                    <span>Tier Spending Split</span>
                    <span className="text-neutral-500 font-mono">Star: {starPct.toFixed(0)}%</span>
                  </div>
                  <div className="h-3 w-full bg-neutral-900 rounded-full flex overflow-hidden border border-neutral-800">
                    <div style={{ width: `${starPct}%`, backgroundColor: '#F59E0B' }} title={`Star: ${starPct.toFixed(1)}%`} />
                    <div style={{ width: `${starterPct}%`, backgroundColor: '#0EA5E9' }} title={`Starter: ${starterPct.toFixed(1)}%`} />
                    <div style={{ width: `${rotationPct}%`, backgroundColor: '#6366F1' }} title={`Rotation: ${rotationPct.toFixed(1)}%`} />
                    <div style={{ width: `${devPct}%`, backgroundColor: '#10B981' }} title={`Dev: ${devPct.toFixed(1)}%`} />
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[10px] text-neutral-400 mt-2 font-mono">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>Stars: {formatCurrency(summary.starSpend)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>Starters: {formatCurrency(summary.starterSpend)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>Rotation: {formatCurrency(summary.rotationSpend)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Dev/Min: {formatCurrency(summary.developmentalSpend)}</span>
                    </div>
                  </div>
                </div>

                {/* Roster Demographics Breakdown */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-800 text-xs font-mono">
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Average Roster Age:</span>
                    <span className="text-white">{avgAge} yrs</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Max / Supermax Deals:</span>
                    <span className="text-white">{maxContractsCount} players</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Expiring Contracts:</span>
                    <span className="text-white">{expiringCount} players</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Total Est. Market Value:</span>
                    <span className="text-white">{formatCurrency(summary.totalMarketValue)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-300">
                    <span className="text-neutral-500">Net Value Surplus:</span>
                    <span className={`font-semibold ${summary.netSurplusValue >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {formatDeltaCurrency(summary.netSurplusValue)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Front Office Value Multiplier Footer */}
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-500 text-[11px]">Value ROI:</span>
                <span className={`font-bold px-2 py-0.5 rounded ${
                  summary.surplusRatio >= 1.15 ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/40' :
                  summary.surplusRatio < 0.9 ? 'text-rose-400 bg-rose-950/40 border border-rose-800/40' :
                  'text-neutral-300 bg-neutral-800'
                }`}>
                  {summary.surplusRatio.toFixed(2)}x
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Insights Summary Box */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-5">
        <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
          <Layers className="w-4 h-4 text-orange-400" />
          Comparative Executive Observations
        </h3>
        <p className="text-xs text-neutral-400 leading-relaxed">
          Comparing franchise payroll compositions demonstrates divergent roster-building philosophies. Teams with heavy star allocations (e.g. Phoenix, Milwaukee, Boston) operate under immense Second Apron restrictions requiring high performance from minimum-contract contributors, whereas teams anchored by high surplus value rookie-scale extensions (e.g. Oklahoma City, San Antonio, Orlando) maintain significant flexibility under modern 2023 CBA rules.
        </p>
      </div>
    </div>
  );
};
