import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  PieChart, 
  Sliders, 
  GitCompare, 
  Calendar,
  Building2,
  ChevronRight
} from 'lucide-react';
import { NavPage } from './Header';
import { SeasonYear, Team } from '../../types/nba';
import { CBA_RULES_BY_SEASON } from '../../data/cbaRules';
import { formatCurrency } from '../../utils/capCalculations';

interface SidebarProps {
  activePage: NavPage;
  onSelectPage: (page: NavPage) => void;
  currentSeason: SeasonYear;
  onSeasonChange: (season: SeasonYear) => void;
  selectedTeamId: string;
  onSelectTeam: (teamId: string) => void;
  teams: Team[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onSelectPage,
  currentSeason,
  onSeasonChange,
  selectedTeamId,
  onSelectTeam,
  teams
}) => {
  const currentRules = CBA_RULES_BY_SEASON[currentSeason];

  const navLinks = [
    { id: 'league' as NavPage, label: 'League Overview', icon: LayoutDashboard, desc: '30 Team Cap Standings' },
    { id: 'roster' as NavPage, label: 'Team Roster Ledger', icon: Users, desc: 'Contracts & Options' },
    { id: 'allocation' as NavPage, label: 'Roster Value Allocation', icon: PieChart, desc: 'Spending Tiers & ROI' },
    { id: 'simulator' as NavPage, label: 'Salary Cap Simulator', icon: Sliders, desc: 'Signings, Cuts & Aprons' },
    { id: 'comparison' as NavPage, label: 'Team Comparison', icon: GitCompare, desc: 'Multi-Franchise Benchmark' }
  ];

  return (
    <aside className="w-64 shrink-0 bg-[#0E121A] border-r border-neutral-800 flex flex-col justify-between hidden lg:flex min-h-[calc(100vh-4rem)]">
      <div className="p-4 space-y-6">
        {/* Season Selector Box */}
        <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              Active Season
            </span>
            <span className="text-[10px] text-neutral-500 font-mono">CBA 2023</span>
          </div>
          <select
            value={currentSeason}
            onChange={(e) => onSeasonChange(e.target.value as SeasonYear)}
            aria-label="Active NBA season"
            className="w-full bg-[#0E121A] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1.5 font-mono focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <option value="2026-27">2026–27 (Current Focus)</option>
            <option value="2025-26">2025–26 Baseline</option>
            <option value="2024-25">2024–25 Baseline</option>
            <option value="2027-28">2027–28 Projection</option>
          </select>
        </div>

        {/* Primary Terminal Nav */}
        <div className="space-y-1">
          <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase px-2 mb-1 block">
            Navigation Modules
          </span>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onSelectPage(link.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all group ${
                  isActive
                    ? 'bg-orange-500/10 text-orange-400 font-semibold border border-orange-500/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-orange-400' : 'text-neutral-500 group-hover:text-neutral-300'}`} />
                  <div className="min-w-0">
                    <span className="text-xs font-medium block truncate">
                      {link.label}
                    </span>
                    <span className="text-[10px] text-neutral-400 block truncate">
                      {link.desc}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100 text-orange-400' : 'text-neutral-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Franchise Quick Select */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-2">
            <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
              Quick Team Focus
            </span>
            <Building2 className="w-3 h-3 text-neutral-400" />
          </div>
          <select
            value={selectedTeamId}
            onChange={(e) => onSelectTeam(e.target.value)}
            aria-label="Quick select NBA franchise"
            className="w-full bg-[#161B22] border border-neutral-700 text-white text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <optgroup label="Eastern Conference">
              {teams.filter(t => t.conference === 'Eastern').map(t => (
                <option key={t.id} value={t.id}>
                  {t.city} {t.name} ({t.abbreviation})
                </option>
              ))}
            </optgroup>
            <optgroup label="Western Conference">
              {teams.filter(t => t.conference === 'Western').map(t => (
                <option key={t.id} value={t.id}>
                  {t.city} {t.name} ({t.abbreviation})
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      {/* Terminal Cap Telemetry Card at Bottom */}
      <div className="p-4 border-t border-neutral-800 bg-[#12161F]">
        <div className="text-[11px] text-neutral-400 mb-2 font-mono flex items-center justify-between">
          <span>{currentSeason} Cap Levels</span>
        </div>
        <div className="space-y-1.5 text-[11px] font-mono">
          <div className="flex justify-between items-center text-neutral-300">
            <span className="text-neutral-500">Cap:</span>
            <span className="text-sky-400 tabular-nums">{formatCurrency(currentRules.salaryCap)}</span>
          </div>
          <div className="flex justify-between items-center text-neutral-300">
            <span className="text-neutral-500">Tax:</span>
            <span className="text-amber-400 tabular-nums">{formatCurrency(currentRules.luxuryTax)}</span>
          </div>
          <div className="flex justify-between items-center text-neutral-300">
            <span className="text-neutral-500">1st Apron:</span>
            <span className="text-orange-400 tabular-nums">{formatCurrency(currentRules.firstApron)}</span>
          </div>
          <div className="flex justify-between items-center text-neutral-300">
            <span className="text-neutral-500">2nd Apron:</span>
            <span className="text-rose-400 tabular-nums">{formatCurrency(currentRules.secondApron)}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
