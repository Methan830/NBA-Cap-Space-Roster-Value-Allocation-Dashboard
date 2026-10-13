import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  Filter, 
  ExternalLink,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Flame,
  PieChart
} from 'lucide-react';
import { CapRules, FinancialStatus, SeasonYear, Team } from '../../types/nba';
import { calculateTeamSummary, formatCurrency, formatPercent } from '../../utils/capCalculations';
import { KpiCard } from '../common/KpiCard';

interface LeagueOverviewPageProps {
  teams: Team[];
  rules: CapRules;
  currentSeason: SeasonYear;
  onSeasonChange: (season: SeasonYear) => void;
  onSelectTeam: (teamId: string) => void;
  onNavigateToRoster: () => void;
}

type SortField = 'payroll' | 'capSpace' | 'taxRoom' | 'firstApronRoom' | 'secondApronRoom' | 'surplusRatio' | 'name';
type SortOrder = 'asc' | 'desc';

export const LeagueOverviewPage: React.FC<LeagueOverviewPageProps> = ({
  teams,
  rules,
  currentSeason,
  onSeasonChange,
  onSelectTeam,
  onNavigateToRoster
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [conferenceFilter, setConferenceFilter] = useState<'All' | 'Eastern' | 'Western'>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | FinancialStatus>('All');
  const [sortField, setSortField] = useState<SortField>('payroll');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Compute financial summaries for all teams
  const teamSummaries = useMemo(() => {
    return teams.map((team) => {
      const summary = calculateTeamSummary(team.id, team.roster, rules, team.isRepeaterTaxpayer);
      return {
        team,
        summary
      };
    });
  }, [teams, rules]);

  // Aggregate League Stats
  const leagueStats = useMemo(() => {
    const totalPayroll = teamSummaries.reduce((sum, item) => sum + item.summary.activePayroll, 0);
    const avgPayroll = totalPayroll / (teamSummaries.length || 1);
    const underCapCount = teamSummaries.filter(item => item.summary.financialStatus === 'Under Cap').length;
    const inTaxCount = teamSummaries.filter(item => item.summary.taxRoom < 0).length;
    const secondApronCount = teamSummaries.filter(item => item.summary.financialStatus === 'Second Apron').length;
    
    // Sort to find max/min
    const sorted = [...teamSummaries].sort((a, b) => b.summary.activePayroll - a.summary.activePayroll);
    const highestPayrollTeam = sorted[0];
    const lowestPayrollTeam = sorted[sorted.length - 1];

    return {
      totalPayroll,
      avgPayroll,
      underCapCount,
      inTaxCount,
      secondApronCount,
      highestPayrollTeam,
      lowestPayrollTeam
    };
  }, [teamSummaries]);

  // Handle Sort
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  // Filtered & Sorted Teams
  const filteredAndSortedTeams = useMemo(() => {
    return teamSummaries
      .filter(({ team, summary }) => {
        // Search Filter
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery = 
          !query || 
          team.name.toLowerCase().includes(query) || 
          team.city.toLowerCase().includes(query) || 
          team.abbreviation.toLowerCase().includes(query);

        // Conference Filter
        const matchesConf = conferenceFilter === 'All' || team.conference === conferenceFilter;

        // Status Filter
        const matchesStatus = statusFilter === 'All' || summary.financialStatus === statusFilter;

        return matchesQuery && matchesConf && matchesStatus;
      })
      .sort((a, b) => {
        let valA: number | string = 0;
        let valB: number | string = 0;

        switch (sortField) {
          case 'name':
            valA = `${a.team.city} ${a.team.name}`;
            valB = `${b.team.city} ${b.team.name}`;
            return sortOrder === 'asc' 
              ? (valA as string).localeCompare(valB as string) 
              : (valB as string).localeCompare(valA as string);
          case 'payroll':
            valA = a.summary.activePayroll;
            valB = b.summary.activePayroll;
            break;
          case 'capSpace':
            valA = a.summary.capSpace;
            valB = b.summary.capSpace;
            break;
          case 'taxRoom':
            valA = a.summary.taxRoom;
            valB = b.summary.taxRoom;
            break;
          case 'firstApronRoom':
            valA = a.summary.firstApronRoom;
            valB = b.summary.firstApronRoom;
            break;
          case 'secondApronRoom':
            valA = a.summary.secondApronRoom;
            valB = b.summary.secondApronRoom;
            break;
          case 'surplusRatio':
            valA = a.summary.surplusRatio;
            valB = b.summary.surplusRatio;
            break;
        }

        return sortOrder === 'asc' ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
      });
  }, [teamSummaries, searchQuery, conferenceFilter, statusFilter, sortField, sortOrder]);

  const getStatusBadge = (status: FinancialStatus) => {
    switch (status) {
      case 'Under Cap':
        return <span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] font-medium">Under Cap</span>;
      case 'Over Cap / Below Tax':
        return <span className="text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded text-[11px] font-medium">Below Tax</span>;
      case 'In Luxury Tax':
        return <span className="text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded text-[11px] font-medium">Taxpayer</span>;
      case 'First Apron':
        return <span className="text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded text-[11px] font-medium">1st Apron</span>;
      case 'Second Apron':
        return <span className="text-rose-400 bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 rounded text-[11px] font-medium">2nd Apron</span>;
    }
  };

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3 h-3 text-neutral-500 ml-1 inline opacity-60" />;
    }
    return sortOrder === 'asc' ? (
      <ArrowUp className="w-3 h-3 text-orange-400 ml-1 inline" />
    ) : (
      <ArrowDown className="w-3 h-3 text-orange-400 ml-1 inline" />
    );
  };

  return (
    <div className="space-y-6">
      {/* Page Title & Context */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold font-['Outfit'] text-white tracking-tight">
            NBA League Financial Overview
          </h1>
          <p className="text-xs text-neutral-400 mt-0.5">
            Real-time cap space, luxury tax liabilities, apron thresholds, and roster value allocations across all 30 NBA teams.
          </p>
        </div>
        
        {/* Season Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-400">Season:</span>
          <select
            value={currentSeason}
            onChange={(e) => onSeasonChange(e.target.value as SeasonYear)}
            aria-label="Filter league season"
            className="bg-[#161B22] border border-neutral-700 text-white text-xs rounded-lg px-3 py-1.5 font-mono focus:border-orange-500 focus:outline-none"
          >
            <option value="2026-27">2026–27 (Current)</option>
            <option value="2025-26">2025–26 Baseline</option>
            <option value="2024-25">2024–25 Baseline</option>
            <option value="2027-28">2027–28 Projection</option>
          </select>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          label="Total League Active Payroll"
          value={formatCurrency(leagueStats.totalPayroll)}
          subtext={`Avg $${(leagueStats.avgPayroll / 1000000).toFixed(1)}M per franchise`}
          icon={<DollarSign className="w-4 h-4" />}
          badge={{ text: `${teams.length} Teams`, variant: 'neutral' }}
        />
        <KpiCard
          label="Teams with Cap Space"
          value={`${leagueStats.underCapCount} / 30`}
          subtext={`Below ${formatCurrency(rules.salaryCap)} threshold`}
          icon={<TrendingUp className="w-4 h-4" />}
          badge={{ 
            text: leagueStats.underCapCount > 3 ? 'High Flexibility' : 'Tight Market', 
            variant: leagueStats.underCapCount > 3 ? 'positive' : 'warning' 
          }}
        />
        <KpiCard
          label="Teams in Luxury Tax"
          value={`${leagueStats.inTaxCount} Teams`}
          subtext={`Threshold: ${formatCurrency(rules.luxuryTax)}`}
          icon={<Flame className="w-4 h-4" />}
          badge={{ text: 'Tax Bracket', variant: 'warning' }}
        />
        <KpiCard
          label="Teams at Second Apron"
          value={`${leagueStats.secondApronCount} Teams`}
          subtext={`Severe roster restrictions above ${formatCurrency(rules.secondApron)}`}
          icon={<AlertTriangle className="w-4 h-4" />}
          badge={{ text: 'Hard Capped', variant: 'negative' }}
        />
      </div>

      {/* Apron Distribution Visualizer Bar */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-white">League Financial Status Distribution</span>
          <span className="text-neutral-400 font-mono text-[11px]">30 NBA Franchises</span>
        </div>
        
        {/* Multi-segmented distribution bar */}
        <div className="h-3 w-full bg-neutral-900 rounded-full flex overflow-hidden border border-neutral-800">
          <div 
            style={{ width: `${(teamSummaries.filter(t => t.summary.financialStatus === 'Under Cap').length / 30) * 100}%` }}
            className="bg-emerald-500 h-full transition-all"
            title={`Under Cap: ${teamSummaries.filter(t => t.summary.financialStatus === 'Under Cap').length} teams`}
          />
          <div 
            style={{ width: `${(teamSummaries.filter(t => t.summary.financialStatus === 'Over Cap / Below Tax').length / 30) * 100}%` }}
            className="bg-sky-500 h-full transition-all"
            title={`Below Tax: ${teamSummaries.filter(t => t.summary.financialStatus === 'Over Cap / Below Tax').length} teams`}
          />
          <div 
            style={{ width: `${(teamSummaries.filter(t => t.summary.financialStatus === 'In Luxury Tax').length / 30) * 100}%` }}
            className="bg-amber-500 h-full transition-all"
            title={`In Tax: ${teamSummaries.filter(t => t.summary.financialStatus === 'In Luxury Tax').length} teams`}
          />
          <div 
            style={{ width: `${(teamSummaries.filter(t => t.summary.financialStatus === 'First Apron').length / 30) * 100}%` }}
            className="bg-orange-500 h-full transition-all"
            title={`First Apron: ${teamSummaries.filter(t => t.summary.financialStatus === 'First Apron').length} teams`}
          />
          <div 
            style={{ width: `${(teamSummaries.filter(t => t.summary.financialStatus === 'Second Apron').length / 30) * 100}%` }}
            className="bg-rose-500 h-full transition-all"
            title={`Second Apron: ${teamSummaries.filter(t => t.summary.financialStatus === 'Second Apron').length} teams`}
          />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] text-neutral-400 mt-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Under Cap ({teamSummaries.filter(t => t.summary.financialStatus === 'Under Cap').length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span>Over Cap / Below Tax ({teamSummaries.filter(t => t.summary.financialStatus === 'Over Cap / Below Tax').length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>In Tax ({teamSummaries.filter(t => t.summary.financialStatus === 'In Luxury Tax').length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span>1st Apron ({teamSummaries.filter(t => t.summary.financialStatus === 'First Apron').length})</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>2nd Apron ({teamSummaries.filter(t => t.summary.financialStatus === 'Second Apron').length})</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-[#161B22] p-3 rounded-lg border border-neutral-800">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search teams by city or name (e.g., Celtics, Thunder, BOS)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0E121A] border border-neutral-700 rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1 bg-[#0E121A] border border-neutral-700 p-0.5 rounded-md text-xs">
            {(['All', 'Eastern', 'Western'] as const).map((conf) => (
              <button
                key={conf}
                onClick={() => setConferenceFilter(conf)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  conferenceFilter === conf
                    ? 'bg-neutral-800 text-white font-medium'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {conf}
              </button>
            ))}
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as 'All' | FinancialStatus)}
            aria-label="Filter teams by financial status"
            className="bg-[#0E121A] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <option value="All">All Cap Statuses</option>
            <option value="Under Cap">Under Cap Only</option>
            <option value="Over Cap / Below Tax">Below Tax Only</option>
            <option value="In Luxury Tax">In Luxury Tax Only</option>
            <option value="First Apron">1st Apron Only</option>
            <option value="Second Apron">2nd Apron Only</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#0E121A] text-neutral-400 border-b border-neutral-800 font-mono">
              <tr>
                <th className="py-3 px-3 w-10 text-center font-normal">#</th>
                <th 
                  className="py-3 px-4 font-normal cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('name')}
                >
                  Franchise {renderSortIcon('name')}
                </th>
                <th className="py-3 px-3 font-normal text-neutral-400">Conf</th>
                <th 
                  className="py-3 px-3 font-normal text-right cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('payroll')}
                >
                  Active Payroll {renderSortIcon('payroll')}
                </th>
                <th 
                  className="py-3 px-3 font-normal text-right cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('capSpace')}
                >
                  Cap Room {renderSortIcon('capSpace')}
                </th>
                <th 
                  className="py-3 px-3 font-normal text-right cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('taxRoom')}
                >
                  Tax Room / Bill {renderSortIcon('taxRoom')}
                </th>
                <th 
                  className="py-3 px-3 font-normal text-right cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('firstApronRoom')}
                >
                  1st Apron Margin {renderSortIcon('firstApronRoom')}
                </th>
                <th 
                  className="py-3 px-3 font-normal text-right cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('secondApronRoom')}
                >
                  2nd Apron Margin {renderSortIcon('secondApronRoom')}
                </th>
                <th 
                  className="py-3 px-3 font-normal text-right cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleSort('surplusRatio')}
                >
                  Value ROI {renderSortIcon('surplusRatio')}
                </th>
                <th className="py-3 px-4 font-normal text-center">Status</th>
                <th className="py-3 px-3 w-16 text-center font-normal">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/80 font-mono">
              {filteredAndSortedTeams.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-8 text-center text-neutral-400">
                    No NBA franchises match your selected filter criteria.
                  </td>
                </tr>
              ) : (
                filteredAndSortedTeams.map(({ team, summary }, idx) => {
                  const isUnderCap = summary.capSpace > 0;
                  const isInTax = summary.taxRoom < 0;
                  const is1stApronOver = summary.firstApronRoom < 0;
                  const is2ndApronOver = summary.secondApronRoom < 0;

                  return (
                    <tr 
                      key={team.id}
                      className="hover:bg-neutral-800/40 transition-colors group cursor-pointer"
                      onClick={() => {
                        onSelectTeam(team.id);
                        onNavigateToRoster();
                      }}
                    >
                      {/* Rank */}
                      <td className="py-3 px-3 text-center text-neutral-500 tabular-nums">
                        {idx + 1}
                      </td>

                      {/* Team Name */}
                      <td className="py-3 px-4 font-sans font-medium text-white">
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-2.5 h-2.5 rounded-full shrink-0" 
                            style={{ backgroundColor: team.primaryColor }}
                          />
                          <div>
                            <span className="font-semibold text-neutral-100 group-hover:text-orange-400 transition-colors">
                              {team.city} {team.name}
                            </span>
                            <span className="text-[11px] text-neutral-500 ml-1.5 font-mono">
                              ({team.abbreviation})
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Conf */}
                      <td className="py-3 px-3 text-neutral-400 text-[11px]">
                        {team.conference.slice(0, 4)}
                      </td>

                      {/* Active Payroll */}
                      <td className="py-3 px-3 text-right font-semibold text-white tabular-nums">
                        {formatCurrency(summary.activePayroll)}
                      </td>

                      {/* Cap Space */}
                      <td className="py-3 px-3 text-right tabular-nums">
                        {isUnderCap ? (
                          <span className="text-emerald-400 font-semibold">
                            +{formatCurrency(summary.capSpace)}
                          </span>
                        ) : (
                          <span className="text-neutral-500">
                            -{formatCurrency(Math.abs(summary.capSpace))}
                          </span>
                        )}
                      </td>

                      {/* Tax Room / Tax Bill */}
                      <td className="py-3 px-3 text-right tabular-nums">
                        {isInTax ? (
                          <span className="text-amber-400" title={`Tax Bill: ${formatCurrency(summary.estimatedTaxBill)}`}>
                            Bill: {formatCurrency(summary.estimatedTaxBill)}
                          </span>
                        ) : (
                          <span className="text-neutral-400">
                            +{formatCurrency(summary.taxRoom)} room
                          </span>
                        )}
                      </td>

                      {/* 1st Apron Room */}
                      <td className="py-3 px-3 text-right tabular-nums">
                        {is1stApronOver ? (
                          <span className="text-orange-400">
                            +{formatCurrency(Math.abs(summary.firstApronRoom))} over
                          </span>
                        ) : (
                          <span className="text-neutral-400">
                            {formatCurrency(summary.firstApronRoom)} below
                          </span>
                        )}
                      </td>

                      {/* 2nd Apron Room */}
                      <td className="py-3 px-3 text-right tabular-nums">
                        {is2ndApronOver ? (
                          <span className="text-rose-400 font-bold">
                            +{formatCurrency(Math.abs(summary.secondApronRoom))} over
                          </span>
                        ) : (
                          <span className="text-neutral-400">
                            {formatCurrency(summary.secondApronRoom)} below
                          </span>
                        )}
                      </td>

                      {/* Surplus Value Ratio */}
                      <td className="py-3 px-3 text-right tabular-nums">
                        <span className={`font-medium ${
                          summary.surplusRatio >= 1.15 
                            ? 'text-emerald-400' 
                            : summary.surplusRatio < 0.9 
                            ? 'text-rose-400' 
                            : 'text-neutral-300'
                        }`}>
                          {summary.surplusRatio.toFixed(2)}x
                        </span>
                      </td>

                      {/* Status Badge */}
                      <td className="py-3 px-4 text-center font-sans">
                        {getStatusBadge(summary.financialStatus)}
                      </td>

                      {/* Action */}
                      <td className="py-3 px-3 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTeam(team.id);
                            onNavigateToRoster();
                          }}
                          className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-700/60 rounded transition-colors"
                          title="Open team roster ledger"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
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
