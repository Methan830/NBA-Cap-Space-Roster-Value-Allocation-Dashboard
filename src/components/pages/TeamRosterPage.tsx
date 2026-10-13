import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  User, 
  Award,
  ChevronDown,
  Info
} from 'lucide-react';
import { CapRules, Position, RosterTier, Team } from '../../types/nba';
import { calculateTeamSummary, formatCurrency, formatDeltaCurrency, formatPercent } from '../../utils/capCalculations';
import { ApronIndicator } from '../common/ApronIndicator';

interface TeamRosterPageProps {
  teams: Team[];
  selectedTeamId: string;
  onSelectTeam: (teamId: string) => void;
  rules: CapRules;
}

export const TeamRosterPage: React.FC<TeamRosterPageProps> = ({
  teams,
  selectedTeamId,
  onSelectTeam,
  rules
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState<'All' | Position>('All');
  const [tierFilter, setTierFilter] = useState<'All' | RosterTier>('All');
  const [optionFilter, setOptionFilter] = useState<string>('All');

  // Currently selected team
  const currentTeam = useMemo(() => {
    return teams.find(t => t.id === selectedTeamId) || teams[0];
  }, [teams, selectedTeamId]);

  // Financial summary of selected team
  const summary = useMemo(() => {
    return calculateTeamSummary(currentTeam.id, currentTeam.roster, rules, currentTeam.isRepeaterTaxpayer);
  }, [currentTeam, rules]);

  // Total guaranteed money committed across all players
  const totalGuaranteed = useMemo(() => {
    return currentTeam.roster.reduce((sum, p) => sum + (p.contract?.guaranteedAmount || 0), 0);
  }, [currentTeam]);

  // Filtered roster
  const filteredRoster = useMemo(() => {
    return currentTeam.roster.filter((player) => {
      // Search
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || player.name.toLowerCase().includes(q) || player.jerseyNumber.includes(q);

      // Pos Filter
      const matchesPos = positionFilter === 'All' || player.position === positionFilter;

      // Tier Filter
      const matchesTier = tierFilter === 'All' || player.tier === tierFilter;

      // Option Filter
      const matchesOption = 
        optionFilter === 'All' || 
        (optionFilter === 'Option' && player.contract.optionType !== 'None') ||
        (optionFilter === 'Expiring' && player.contract.isExpiring);

      return matchesSearch && matchesPos && matchesTier && matchesOption;
    });
  }, [currentTeam, searchQuery, positionFilter, tierFilter, optionFilter]);

  const getTierBadge = (tier: RosterTier) => {
    switch (tier) {
      case 'Star':
        return <span className="text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-medium">Star</span>;
      case 'Starter':
        return <span className="text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded text-[11px] font-medium">Starter</span>;
      case 'Rotation':
        return <span className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-2 py-0.5 rounded text-[11px] font-medium">Rotation</span>;
      case 'Developmental':
        return <span className="text-neutral-400 bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded text-[11px] font-medium">Dev / Min</span>;
    }
  };

  const getOptionBadge = (option: string, isExpiring: boolean) => {
    if (isExpiring) {
      return (
        <span className="text-rose-300 bg-rose-950/40 border border-rose-800/40 px-1.5 py-0.5 rounded text-[10px] font-mono">
          Expiring
        </span>
      );
    }
    if (option === 'Player Option') {
      return (
        <span className="text-amber-300 bg-amber-950/40 border border-amber-800/40 px-1.5 py-0.5 rounded text-[10px] font-mono">
          Player Opt
        </span>
      );
    }
    if (option === 'Team Option') {
      return (
        <span className="text-sky-300 bg-sky-950/40 border border-sky-800/40 px-1.5 py-0.5 rounded text-[10px] font-mono">
          Team Opt
        </span>
      );
    }
    if (option === 'Partially Guaranteed') {
      return (
        <span className="text-purple-300 bg-purple-950/40 border border-purple-800/40 px-1.5 py-0.5 rounded text-[10px] font-mono">
          Partial Gtd
        </span>
      );
    }
    return (
      <span className="text-neutral-400 text-[11px]">
        Guaranteed
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Team Header & Franchise Selector */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-xl p-5 relative overflow-hidden">
        {/* Subtle accent bar matching team primary color */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: currentTeam.primaryColor }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-1">
          {/* Team Brand Info & Dropdown */}
          <div className="flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg border border-neutral-700/60 font-mono"
              style={{ backgroundColor: currentTeam.primaryColor }}
            >
              {currentTeam.abbreviation}
            </div>

            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold font-['Outfit'] text-white">
                  {currentTeam.city} {currentTeam.name}
                </h1>
                <span className="text-xs text-neutral-400 font-mono">
                  {currentTeam.conference} · {currentTeam.division} Division
                </span>
              </div>

              {/* Franchise Quick Switcher */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs text-neutral-400">Switch Franchise:</span>
                <select
                  value={selectedTeamId}
                  onChange={(e) => onSelectTeam(e.target.value)}
                  aria-label="Select NBA team roster"
                  className="bg-[#0E121A] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1 font-sans focus:outline-none focus:border-orange-500 cursor-pointer"
                >
                  {teams.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.city} {t.name} ({t.abbreviation})
                    </option>
                  ))}
                </select>
                {currentTeam.isRepeaterTaxpayer && (
                  <span className="text-[11px] font-medium text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded ml-2">
                    Repeater Tax Status
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Financial Summary Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0E121A] border border-neutral-800 p-3 rounded-lg text-xs font-mono">
            <div>
              <span className="text-neutral-400 block text-[11px]">Active Payroll</span>
              <span className="text-base font-bold text-white tabular-nums">
                {formatCurrency(summary.activePayroll)}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Cap Space Room</span>
              <span className={`text-base font-bold tabular-nums ${summary.capSpace > 0 ? 'text-emerald-400' : 'text-neutral-400'}`}>
                {summary.capSpace > 0 ? `+${formatCurrency(summary.capSpace)}` : `-${formatCurrency(Math.abs(summary.capSpace))}`}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">1st Apron Margin</span>
              <span className={`text-base font-bold tabular-nums ${summary.firstApronRoom < 0 ? 'text-orange-400' : 'text-neutral-300'}`}>
                {summary.firstApronRoom < 0 ? `+${formatCurrency(Math.abs(summary.firstApronRoom))} over` : `${formatCurrency(summary.firstApronRoom)} below`}
              </span>
            </div>
            <div>
              <span className="text-neutral-400 block text-[11px]">Total Guaranteed</span>
              <span className="text-base font-bold text-neutral-300 tabular-nums">
                {formatCurrency(totalGuaranteed)}
              </span>
            </div>
          </div>
        </div>

        {/* Apron Visualizer Gauge */}
        <div className="mt-6 pt-5 border-t border-neutral-800/80">
          <ApronIndicator 
            payroll={summary.activePayroll} 
            rules={rules} 
            status={summary.financialStatus} 
          />
        </div>
      </div>

      {/* Roster Controls: Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#161B22] p-3 rounded-lg border border-neutral-800">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search players by name or jersey #..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0E121A] border border-neutral-700 rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Position Filter */}
          <select
            value={positionFilter}
            onChange={(e) => setPositionFilter(e.target.value as 'All' | Position)}
            aria-label="Filter roster by player position"
            className="bg-[#0E121A] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <option value="All">All Positions</option>
            <option value="PG">Point Guard (PG)</option>
            <option value="SG">Shooting Guard (SG)</option>
            <option value="SF">Small Forward (SF)</option>
            <option value="PF">Power Forward (PF)</option>
            <option value="C">Center (C)</option>
          </select>

          {/* Tier Filter */}
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value as 'All' | RosterTier)}
            aria-label="Filter roster by spending tier"
            className="bg-[#0E121A] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <option value="All">All Tiers</option>
            <option value="Star">Star ($35M+)</option>
            <option value="Starter">Starter ($15M–$35M)</option>
            <option value="Rotation">Rotation ($5M–$15M)</option>
            <option value="Developmental">Dev / Min (&lt;$5M)</option>
          </select>

          {/* Contract Option Filter */}
          <select
            value={optionFilter}
            onChange={(e) => setOptionFilter(e.target.value)}
            aria-label="Filter roster by contract option"
            className="bg-[#0E121A] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <option value="All">All Contract Types</option>
            <option value="Option">Has Player/Team Option</option>
            <option value="Expiring">Expiring This Season</option>
          </select>
        </div>
      </div>

      {/* Roster Ledger Table */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0E121A] text-neutral-400 border-b border-neutral-800 font-mono">
              <tr>
                <th className="py-3 px-4 font-normal">Player</th>
                <th className="py-3 px-3 font-normal text-center">Pos</th>
                <th className="py-3 px-3 font-normal text-center">Age</th>
                <th className="py-3 px-3 font-normal text-right">Annual Salary</th>
                <th className="py-3 px-3 font-normal text-right">% Payroll</th>
                <th className="py-3 px-3 font-normal text-center">Years</th>
                <th className="py-3 px-3 font-normal">Contract Type</th>
                <th className="py-3 px-3 font-normal">Option / Status</th>
                <th className="py-3 px-3 font-normal text-right">Guaranteed</th>
                <th className="py-3 px-3 font-normal text-right">Est. Market Value</th>
                <th className="py-3 px-3 font-normal text-right">Surplus Value</th>
                <th className="py-3 px-4 font-normal text-center">Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 font-mono">
              {filteredRoster.length === 0 ? (
                <tr>
                  <td colSpan={12} className="py-8 text-center text-neutral-400">
                    No players found matching your selected filters.
                  </td>
                </tr>
              ) : (
                filteredRoster.map((player) => {
                  const salary = player.contract?.currentSalary || 0;
                  const pctOfPayroll = summary.activePayroll > 0 ? (salary / summary.activePayroll) : 0;
                  const surplus = player.estimatedMarketValue - salary;

                  return (
                    <tr key={player.id} className="hover:bg-neutral-800/40 transition-colors">
                      {/* Player Name */}
                      <td className="py-3 px-4 font-sans">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded bg-neutral-800 text-neutral-300 font-mono text-[11px] flex items-center justify-center shrink-0">
                            #{player.jerseyNumber}
                          </span>
                          <div>
                            <span className="font-semibold text-white block">
                              {player.name}
                            </span>
                            {player.notes && (
                              <span className="text-[10px] text-neutral-400 block line-clamp-1 font-mono">
                                {player.notes}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Pos */}
                      <td className="py-3 px-3 text-center text-neutral-300">
                        {player.position}
                      </td>

                      {/* Age */}
                      <td className="py-3 px-3 text-center text-neutral-400">
                        {player.age}
                      </td>

                      {/* Annual Salary */}
                      <td className="py-3 px-3 text-right font-semibold text-white tabular-nums">
                        {formatCurrency(salary, false)}
                      </td>

                      {/* % Payroll */}
                      <td className="py-3 px-3 text-right text-neutral-400 tabular-nums">
                        {formatPercent(pctOfPayroll)}
                      </td>

                      {/* Years Left */}
                      <td className="py-3 px-3 text-center text-neutral-300 tabular-nums">
                        {player.contract?.yearsRemaining} yr{player.contract?.yearsRemaining > 1 ? 's' : ''}
                      </td>

                      {/* Contract Type */}
                      <td className="py-3 px-3 text-neutral-300 text-[11px]">
                        {player.contract?.contractType}
                      </td>

                      {/* Option / Status */}
                      <td className="py-3 px-3">
                        {getOptionBadge(player.contract?.optionType, player.contract?.isExpiring)}
                      </td>

                      {/* Guaranteed Amount */}
                      <td className="py-3 px-3 text-right text-neutral-400 tabular-nums">
                        {formatCurrency(player.contract?.guaranteedAmount || 0)}
                      </td>

                      {/* Est Market Value */}
                      <td className="py-3 px-3 text-right text-neutral-200 tabular-nums">
                        {formatCurrency(player.estimatedMarketValue)}
                      </td>

                      {/* Surplus Value */}
                      <td className="py-3 px-3 text-right tabular-nums">
                        <span className={`font-semibold ${
                          surplus > 0 
                            ? 'text-emerald-400' 
                            : surplus < 0 
                            ? 'text-rose-400' 
                            : 'text-neutral-400'
                        }`}>
                          {formatDeltaCurrency(surplus)}
                        </span>
                      </td>

                      {/* Tier */}
                      <td className="py-3 px-4 text-center font-sans">
                        {getTierBadge(player.tier)}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
