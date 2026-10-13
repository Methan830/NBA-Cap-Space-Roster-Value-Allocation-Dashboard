/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, NavPage } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { LeagueOverviewPage } from './components/pages/LeagueOverviewPage';
import { TeamRosterPage } from './components/pages/TeamRosterPage';
import { RosterValueAllocationPage } from './components/pages/RosterValueAllocationPage';
import { SalaryCapSimulatorPage } from './components/pages/SalaryCapSimulatorPage';
import { TeamComparisonPage } from './components/pages/TeamComparisonPage';
import { CbaRulesModal } from './components/common/CbaRulesModal';
import { NBA_TEAMS_DATA } from './data/nbaTeamsData';
import { CBA_RULES_BY_SEASON } from './data/cbaRules';
import { SeasonYear, Team } from './types/nba';
import { Database, ShieldCheck, Info } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<NavPage>('league');
  const [currentSeason, setCurrentSeason] = useState<SeasonYear>('2026-27');
  const [selectedTeamId, setSelectedTeamId] = useState<string>('bos');
  const [cbaModalOpen, setCbaModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Teams data
  const teams: Team[] = NBA_TEAMS_DATA;
  const currentRules = CBA_RULES_BY_SEASON[currentSeason];

  return (
    <div className="min-h-screen bg-[#0B0E14] text-neutral-100 flex flex-col font-sans selection:bg-orange-500/30 selection:text-orange-200">
      {/* Executive Top Navigation adhering to Top Bar Contract */}
      <Header
        activePage={activePage}
        onSelectPage={setActivePage}
        onOpenCbaRules={() => setCbaModalOpen(true)}
        currentSeason={currentSeason}
        onSeasonChange={setCurrentSeason}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Main Layout Body */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        {/* Left-Hand Navigation Sidebar */}
        <Sidebar
          activePage={activePage}
          onSelectPage={setActivePage}
          currentSeason={currentSeason}
          onSeasonChange={setCurrentSeason}
          selectedTeamId={selectedTeamId}
          onSelectTeam={setSelectedTeamId}
          teams={teams}
        />

        {/* Dynamic Main Content Viewport */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
          {activePage === 'league' && (
            <LeagueOverviewPage
              teams={teams}
              rules={currentRules}
              currentSeason={currentSeason}
              onSeasonChange={setCurrentSeason}
              onSelectTeam={setSelectedTeamId}
              onNavigateToRoster={() => setActivePage('roster')}
            />
          )}

          {activePage === 'roster' && (
            <TeamRosterPage
              teams={teams}
              selectedTeamId={selectedTeamId}
              onSelectTeam={setSelectedTeamId}
              rules={currentRules}
            />
          )}

          {activePage === 'allocation' && (
            <RosterValueAllocationPage
              teams={teams}
              selectedTeamId={selectedTeamId}
              onSelectTeam={setSelectedTeamId}
              rules={currentRules}
            />
          )}

          {activePage === 'simulator' && (
            <SalaryCapSimulatorPage
              teams={teams}
              selectedTeamId={selectedTeamId}
              onSelectTeam={setSelectedTeamId}
              rules={currentRules}
              currentSeason={currentSeason}
            />
          )}

          {activePage === 'comparison' && (
            <TeamComparisonPage
              teams={teams}
              rules={currentRules}
            />
          )}
        </main>
      </div>

      {/* CBA Rules & Aprons Reference Modal */}
      <CbaRulesModal
        isOpen={cbaModalOpen}
        onClose={() => setCbaModalOpen(false)}
        currentSeason={currentSeason}
      />

      {/* Domain-Compliant Data Integrity Footer */}
      <footer className="border-t border-neutral-800/80 bg-[#0E121A] py-6 px-4 sm:px-6 lg:px-8 mt-auto text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-semibold text-neutral-300">
              NBA Cap Space & Roster Value Allocation Dashboard
            </span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span>Season: {currentSeason} Projections</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <span>Updated: October 2026</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-400">
            <span className="flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-orange-400" />
              Spotrac & Basketball-Reference Public CBA Disclosures
            </span>
            <span className="text-neutral-600">·</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              2023 NBA Collective Bargaining Agreement Rules
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-2 text-center sm:text-left text-[10px] text-neutral-400">
          Disclaimer: Salary figures reflect verified contracts and official CBA escalation modeling. Estimated Player Market Values are derived from quantitative wins-added and production analytics indices and are not official league compensation figures.
        </div>
      </footer>
    </div>
  );
}
