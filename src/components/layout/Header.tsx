import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import { SeasonYear } from '../../types/nba';

export type NavPage = 'league' | 'roster' | 'allocation' | 'simulator' | 'comparison';

interface HeaderProps {
  activePage: NavPage;
  onSelectPage: (page: NavPage) => void;
  onOpenCbaRules: () => void;
  currentSeason: SeasonYear;
  onSeasonChange: (season: SeasonYear) => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onSelectPage,
  onOpenCbaRules,
  currentSeason,
  onSeasonChange,
  mobileMenuOpen,
  onToggleMobileMenu
}) => {
  const navItems: { id: NavPage; label: string }[] = [
    { id: 'league', label: 'League Overview' },
    { id: 'roster', label: 'Team Roster' },
    { id: 'allocation', label: 'Value Allocation' },
    { id: 'simulator', label: 'Cap Simulator' },
    { id: 'comparison', label: 'Team Comparison' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E121A]/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleMobileMenu}
            className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div 
            onClick={() => onSelectPage('league')} 
            className="cursor-pointer flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold font-mono group-hover:border-orange-500 transition-colors">
              NBA
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white font-['Outfit'] leading-none">
                Cap Terminal
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-wider">
                Roster Allocation {currentSeason}
              </span>
            </div>
          </div>
        </div>

        {/* Zone 2: Concise Nav Links (Single line, whitespace-nowrap) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectPage(item.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                  isActive
                    ? 'text-orange-400 border-orange-500 font-semibold'
                    : 'text-neutral-400 border-transparent hover:text-white hover:border-neutral-600'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCbaRules}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-neutral-600 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5 text-orange-400" />
            <span>CBA Reference</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-[#0E121A] px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectPage(item.id);
                onToggleMobileMenu();
              }}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                activePage === item.id
                  ? 'bg-orange-500/10 text-orange-400 font-semibold border border-orange-500/20'
                  : 'text-neutral-300 hover:bg-neutral-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 px-3">
            <span>Season:</span>
            <select
              value={currentSeason}
              onChange={(e) => onSeasonChange(e.target.value as SeasonYear)}
              className="bg-neutral-900 border border-neutral-700 text-white text-xs rounded px-2 py-1"
            >
              <option value="2026-27">2026–27 (Current)</option>
              <option value="2025-26">2025–26</option>
              <option value="2024-25">2024–25</option>
              <option value="2027-28">2027–28</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};
