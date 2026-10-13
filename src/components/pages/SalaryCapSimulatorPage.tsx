import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sliders, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Save, 
  FolderOpen, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown, 
  Check, 
  ShieldAlert,
  ArrowRight,
  UserPlus,
  DollarSign
} from 'lucide-react';
import { CapRules, FinancialStatus, FreeAgentCandidate, Player, SavedScenario, SeasonYear, Team } from '../../types/nba';
import { calculateTeamSummary, formatCurrency, formatDeltaCurrency, formatPercent, getRosterTier } from '../../utils/capCalculations';
import { FREE_AGENTS_POOL } from '../../data/freeAgentsData';
import { ApronIndicator } from '../common/ApronIndicator';
import { APRON_RESTRICTIONS } from '../../data/cbaRules';
import { FormattedCurrencyInput } from '../common/FormattedCurrencyInput';

interface SalaryCapSimulatorPageProps {
  teams: Team[];
  selectedTeamId: string;
  onSelectTeam: (teamId: string) => void;
  rules: CapRules;
  currentSeason: SeasonYear;
}

const LOCAL_STORAGE_KEY = 'nba_cap_simulator_scenarios_v1';

export const SalaryCapSimulatorPage: React.FC<SalaryCapSimulatorPageProps> = ({
  teams,
  selectedTeamId,
  onSelectTeam,
  rules,
  currentSeason
}) => {
  // Base franchise
  const baseTeam = useMemo(() => {
    return teams.find(t => t.id === selectedTeamId) || teams[0];
  }, [teams, selectedTeamId]);

  // Working hypothetical roster
  const [simRoster, setSimRoster] = useState<Player[]>([]);
  // Free agent picker modal state
  const [showFaModal, setShowFaModal] = useState(false);
  // Custom signing form state
  const [showCustomSigningForm, setShowCustomSigningForm] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customPos, setCustomPos] = useState<'PG' | 'SG' | 'SF' | 'PF' | 'C'>('SG');
  const [customSalary, setCustomSalary] = useState(12000000);
  const [customYears, setCustomYears] = useState(3);
  const [customMarketValue, setCustomMarketValue] = useState(13000000);

  // Scenario saving state
  const [scenarioName, setScenarioName] = useState('');
  const [savedScenarios, setSavedScenarios] = useState<SavedScenario[]>([]);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);
  const [activeTab, setActiveTab] = useState<'simulation' | 'comparison' | 'saved'>('simulation');

  // Load scenarios from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setSavedScenarios(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  // Initialize simRoster when baseTeam changes
  useEffect(() => {
    setSimRoster(JSON.parse(JSON.stringify(baseTeam.roster)));
    setScenarioName(`${baseTeam.name} 2026 Sandbox`);
  }, [baseTeam]);

  // Original summary
  const originalSummary = useMemo(() => {
    return calculateTeamSummary(baseTeam.id, baseTeam.roster, rules, baseTeam.isRepeaterTaxpayer);
  }, [baseTeam, rules]);

  // Simulated summary
  const simSummary = useMemo(() => {
    return calculateTeamSummary(baseTeam.id, simRoster, rules, baseTeam.isRepeaterTaxpayer);
  }, [baseTeam, simRoster, rules]);

  // Financial Deltas
  const payrollDelta = simSummary.activePayroll - originalSummary.activePayroll;
  const capSpaceDelta = simSummary.capSpace - originalSummary.capSpace;
  const taxBillDelta = simSummary.estimatedTaxBill - originalSummary.estimatedTaxBill;

  // Reset to original roster
  const handleReset = () => {
    setSimRoster(JSON.parse(JSON.stringify(baseTeam.roster)));
  };

  // Remove player (cut/trade)
  const handleRemovePlayer = (playerId: string) => {
    setSimRoster(prev => prev.filter(p => p.id !== playerId));
  };

  // Adjust player salary
  const handleSalaryChange = (playerId: string, newSalary: number) => {
    setSimRoster(prev => prev.map(p => {
      if (p.id === playerId) {
        return {
          ...p,
          contract: {
            ...p.contract,
            currentSalary: Math.max(0, newSalary)
          },
          tier: getRosterTier(newSalary)
        };
      }
      return p;
    }));
  };

  // Toggle option exercise/decline
  const handleToggleOption = (playerId: string) => {
    setSimRoster(prev => prev.map(p => {
      if (p.id === playerId) {
        const isExpiring = !p.contract.isExpiring;
        return {
          ...p,
          contract: {
            ...p.contract,
            isExpiring
          }
        };
      }
      return p;
    }));
  };

  // Add Free Agent from Catalog
  const handleAddFreeAgent = (fa: FreeAgentCandidate) => {
    const newPlayer: Player = {
      id: `sim-fa-${Date.now()}-${fa.id}`,
      name: fa.name,
      jerseyNumber: '00',
      position: fa.position,
      age: fa.age,
      experienceYears: 5,
      contract: {
        currentSalary: fa.projectedAnnualSalary,
        yearsRemaining: fa.projectedYears,
        guaranteedAmount: fa.projectedAnnualSalary * fa.projectedYears,
        contractType: fa.contractType,
        optionType: fa.optionType,
        isExpiring: false
      },
      estimatedMarketValue: fa.estimatedMarketValue,
      tier: fa.tier,
      notes: `Hypothetical Signing via Free Agency`
    };

    setSimRoster(prev => [newPlayer, ...prev]);
    setShowFaModal(false);
  };

  // Create custom free agent signing
  const handleCreateCustomSigning = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;

    const newPlayer: Player = {
      id: `sim-custom-${Date.now()}`,
      name: customName.trim(),
      jerseyNumber: '99',
      position: customPos,
      age: 26,
      experienceYears: 4,
      contract: {
        currentSalary: Number(customSalary),
        yearsRemaining: Number(customYears),
        guaranteedAmount: Number(customSalary) * Number(customYears),
        contractType: customSalary >= 35000000 ? 'Max' : customSalary >= 14000000 ? 'Mid-Level' : 'Cap Space',
        optionType: 'None',
        isExpiring: false
      },
      estimatedMarketValue: Number(customMarketValue),
      tier: getRosterTier(Number(customSalary)),
      notes: `Custom Simulator Target`
    };

    setSimRoster(prev => [newPlayer, ...prev]);
    setCustomName('');
    setShowCustomSigningForm(false);
  };

  // Save Scenario to LocalStorage
  const handleSaveScenario = () => {
    if (!scenarioName.trim()) return;

    const newScenario: SavedScenario = {
      id: `scen-${Date.now()}`,
      name: scenarioName.trim(),
      description: `${baseTeam.city} ${baseTeam.name} with ${simRoster.length} players (${formatCurrency(simSummary.activePayroll)})`,
      baseTeamId: baseTeam.id,
      season: currentSeason,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      modifiedRoster: simRoster,
      summary: simSummary
    };

    const updated = [newScenario, ...savedScenarios.filter(s => s.name !== scenarioName)];
    setSavedScenarios(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSaveSuccessMsg(true);
    setTimeout(() => setSaveSuccessMsg(false), 2500);
  };

  // Load Saved Scenario
  const handleLoadScenario = (scenario: SavedScenario) => {
    onSelectTeam(scenario.baseTeamId);
    setSimRoster(scenario.modifiedRoster);
    setScenarioName(scenario.name);
    setActiveTab('simulation');
  };

  // Delete Scenario
  const handleDeleteScenario = (id: string) => {
    const updated = savedScenarios.filter(s => s.id !== id);
    setSavedScenarios(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Second apron warning checks
  const isSecondApronTriggered = simSummary.financialStatus === 'Second Apron';
  const crossedIntoSecondApron = isSecondApronTriggered && originalSummary.financialStatus !== 'Second Apron';
  const escapedSecondApron = !isSecondApronTriggered && originalSummary.financialStatus === 'Second Apron';

  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold font-['Outfit'] text-white tracking-tight">
            Front-Office Cap Space Simulator
          </h1>
          <p className="text-xs text-neutral-400 mt-0.5">
            Model hypothetical signings, player waivers, contract restructures, and evaluate real-time luxury tax & apron impacts.
          </p>
        </div>

        {/* Franchise Switcher */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400">Target Team:</span>
          <select
            value={selectedTeamId}
            onChange={(e) => onSelectTeam(e.target.value)}
            aria-label="Select base team for simulator"
            className="bg-[#161B22] border border-neutral-700 text-white text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            {teams.map(t => (
              <option key={t.id} value={t.id}>
                {t.city} {t.name} ({t.abbreviation})
              </option>
            ))}
          </select>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-300 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors"
            title="Reset roster to original status"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Live Financial Comparison Banner */}
      <div className="bg-[#161B22] border border-neutral-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
            Real-Time Simulation Impact Summary
          </span>
          <span className="text-xs font-mono text-neutral-400">
            {simRoster.length} Active Contracts
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-[#0E121A] border border-neutral-800 p-4 rounded-lg">
          {/* Active Payroll */}
          <div>
            <span className="text-[11px] text-neutral-400 block font-mono">Active Payroll</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-xl font-bold font-mono text-white tabular-nums">
                {formatCurrency(simSummary.activePayroll)}
              </span>
              {payrollDelta !== 0 && (
                <span className={`text-xs font-mono font-semibold ${payrollDelta > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                  {formatDeltaCurrency(payrollDelta)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-neutral-500 font-mono block mt-1">
              Orig: {formatCurrency(originalSummary.activePayroll)}
            </span>
          </div>

          {/* Cap Space */}
          <div>
            <span className="text-[11px] text-neutral-400 block font-mono">Cap Space Room</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className={`text-xl font-bold font-mono tabular-nums ${simSummary.capSpace > 0 ? 'text-emerald-400' : 'text-neutral-300'}`}>
                {simSummary.capSpace > 0 ? `+${formatCurrency(simSummary.capSpace)}` : `-${formatCurrency(Math.abs(simSummary.capSpace))}`}
              </span>
              {capSpaceDelta !== 0 && (
                <span className={`text-xs font-mono font-semibold ${capSpaceDelta > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {formatDeltaCurrency(capSpaceDelta)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-neutral-500 font-mono block mt-1">
              Cap Line: {formatCurrency(rules.salaryCap)}
            </span>
          </div>

          {/* Tax Bill */}
          <div>
            <span className="text-[11px] text-neutral-400 block font-mono">Est. Luxury Tax Penalty</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className={`text-xl font-bold font-mono tabular-nums ${simSummary.estimatedTaxBill > 0 ? 'text-amber-400' : 'text-neutral-400'}`}>
                {formatCurrency(simSummary.estimatedTaxBill)}
              </span>
              {taxBillDelta !== 0 && (
                <span className={`text-xs font-mono font-semibold ${taxBillDelta > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {formatDeltaCurrency(taxBillDelta)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-neutral-500 font-mono block mt-1">
              Orig Tax: {formatCurrency(originalSummary.estimatedTaxBill)}
            </span>
          </div>

          {/* 2nd Apron Margin */}
          <div>
            <span className="text-[11px] text-neutral-400 block font-mono">2nd Apron Proximity</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className={`text-xl font-bold font-mono tabular-nums ${simSummary.secondApronRoom < 0 ? 'text-rose-400' : 'text-neutral-300'}`}>
                {simSummary.secondApronRoom < 0 ? `+${formatCurrency(Math.abs(simSummary.secondApronRoom))} OVER` : `${formatCurrency(simSummary.secondApronRoom)} Room`}
              </span>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono block mt-1">
              2nd Line: {formatCurrency(rules.secondApron)}
            </span>
          </div>
        </div>

        {/* Apron Gauge */}
        <div className="mt-4 pt-4 border-t border-neutral-800/80">
          <ApronIndicator payroll={simSummary.activePayroll} rules={rules} status={simSummary.financialStatus} />
        </div>

        {/* Second Apron Triggered Warning Alert Banner */}
        {isSecondApronTriggered && (
          <div className="mt-4 p-3.5 bg-rose-950/30 border border-rose-900/60 rounded-lg flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-rose-300 block mb-1">
                Caution: Second Apron Hard-Cap Restrictions Triggered
              </span>
              <p className="text-rose-300/80 leading-relaxed mb-2">
                This hypothetical payroll exceeds the Second Apron ({formatCurrency(rules.secondApron)}). The franchise would incur severe operating bans:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-[11px] text-neutral-300">
                {APRON_RESTRICTIONS.secondApron.slice(0, 4).map((r, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-rose-400 font-bold shrink-0">·</span>
                    <span className="truncate">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {escapedSecondApron && (
          <div className="mt-4 p-3 bg-emerald-950/30 border border-emerald-900/50 rounded-lg flex items-center gap-2 text-xs text-emerald-300">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Success: Your roster modifications successfully trimmed payroll below the punitive Second Apron!</span>
          </div>
        )}
      </div>

      {/* Simulator Action Tabs & Scenario Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#161B22] p-3 rounded-lg border border-neutral-800">
        <div className="flex items-center gap-1 bg-[#0E121A] border border-neutral-700 p-0.5 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'simulation' ? 'bg-orange-500 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Active Sandbox
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'comparison' ? 'bg-orange-500 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Roster Diff
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'saved' ? 'bg-orange-500 text-white font-semibold' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Saved Scenarios ({savedScenarios.length})
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFaModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors shadow-sm"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Sign Free Agent</span>
          </button>

          <button
            onClick={() => setShowCustomSigningForm(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-orange-400" />
            <span>Custom Target</span>
          </button>

          {/* Save Input & Button */}
          <div className="flex items-center gap-1.5 ml-2 border-l border-neutral-700 pl-3">
            <input
              type="text"
              value={scenarioName}
              onChange={(e) => setScenarioName(e.target.value)}
              placeholder="Scenario name..."
              className="bg-[#0E121A] border border-neutral-700 rounded-md px-2.5 py-1 text-xs text-white placeholder-neutral-500 w-36 focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={handleSaveScenario}
              className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-md transition-colors"
              title="Save scenario locally"
            >
              <Save className="w-3.5 h-3.5 text-emerald-400" />
              <span>Save</span>
            </button>
            {saveSuccessMsg && (
              <span className="text-[11px] text-emerald-400 flex items-center gap-1 animate-fade-in">
                <Check className="w-3 h-3" /> Saved!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* TAB 1: ACTIVE SANDBOX */}
      {activeTab === 'simulation' && (
        <div className="bg-[#161B22] border border-neutral-800 rounded-lg overflow-hidden">
          <div className="p-3 bg-[#0E121A] border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>Modify player salary, waive contracts, or exercise options in real-time</span>
            <span className="font-mono">{simRoster.length} Players on Roster</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#0E121A] text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="py-2.5 px-4 font-normal font-sans">Player</th>
                  <th className="py-2.5 px-2 font-normal text-center">Pos</th>
                  <th className="py-2.5 px-3 font-normal text-right">Proposed Salary ($)</th>
                  <th className="py-2.5 px-3 font-normal text-right">% Payroll</th>
                  <th className="py-2.5 px-3 font-normal text-center">Option / Status</th>
                  <th className="py-2.5 px-3 font-normal text-right">Est. Market Value</th>
                  <th className="py-2.5 px-3 font-normal text-center">Tier</th>
                  <th className="py-2.5 px-3 font-normal text-center w-24">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {simRoster.map((player) => {
                  const salary = player.contract?.currentSalary || 0;
                  const pct = simSummary.activePayroll > 0 ? salary / simSummary.activePayroll : 0;

                  return (
                    <tr key={player.id} className="hover:bg-neutral-800/40 transition-colors">
                      {/* Name */}
                      <td className="py-2.5 px-4 font-sans font-medium text-white">
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-500 font-mono text-[11px]">#{player.jerseyNumber}</span>
                          <div>
                            <span>{player.name}</span>
                            {player.notes && (
                              <span className="text-[10px] text-neutral-400 block truncate max-w-[200px]">
                                {player.notes}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Pos */}
                      <td className="py-2.5 px-2 text-center text-neutral-300">
                        {player.position}
                      </td>

                      {/* Proposed Salary Input */}
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex flex-col items-end gap-1">
                          <FormattedCurrencyInput
                            value={salary}
                            onChange={(newVal) => handleSalaryChange(player.id, newVal)}
                            step={500000}
                            className="w-28"
                            showQuickAdjust={true}
                          />
                          <div className="flex items-center gap-1.5 text-[10px] font-mono">
                            <span className="text-neutral-500">
                              {formatCurrency(salary, true)}
                            </span>
                            {(() => {
                              const orig = baseTeam.roster.find(op => op.id === player.id);
                              if (orig && orig.contract.currentSalary !== salary) {
                                const delta = salary - orig.contract.currentSalary;
                                return (
                                  <span className={delta > 0 ? 'text-amber-400 font-semibold' : 'text-emerald-400 font-semibold'}>
                                    ({formatDeltaCurrency(delta)})
                                  </span>
                                );
                              }
                              return null;
                            })()}
                          </div>
                        </div>
                      </td>

                      {/* % Payroll */}
                      <td className="py-2.5 px-3 text-right text-neutral-400">
                        {formatPercent(pct)}
                      </td>

                      {/* Option Toggle */}
                      <td className="py-2.5 px-3 text-center">
                        <button
                          onClick={() => handleToggleOption(player.id)}
                          className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
                            player.contract.isExpiring
                              ? 'bg-rose-950/40 text-rose-300 border-rose-800/50'
                              : 'bg-neutral-800 text-neutral-300 border-neutral-700 hover:border-neutral-500'
                          }`}
                          title="Click to toggle expiring option status"
                        >
                          {player.contract.isExpiring ? 'Expiring (Decline Opt)' : (player.contract.optionType !== 'None' ? player.contract.optionType : 'Guaranteed')}
                        </button>
                      </td>

                      {/* Est Value */}
                      <td className="py-2.5 px-3 text-right text-neutral-300">
                        {formatCurrency(player.estimatedMarketValue)}
                      </td>

                      {/* Tier */}
                      <td className="py-2.5 px-3 text-center">
                        <span className="text-neutral-400 font-sans text-[11px]">
                          {player.tier}
                        </span>
                      </td>

                      {/* Remove/Cut Button */}
                      <td className="py-2.5 px-3 text-center">
                        <button
                          onClick={() => handleRemovePlayer(player.id)}
                          className="p-1.5 text-neutral-400 hover:text-rose-400 hover:bg-rose-950/30 rounded transition-colors"
                          title="Waive / Trade player away"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: ROSTER COMPARISON DIFF */}
      {activeTab === 'comparison' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Original Roster */}
          <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
              <div>
                <h3 className="font-semibold text-white">Original Roster Baseline</h3>
                <span className="text-xs text-neutral-400 font-mono">
                  Payroll: {formatCurrency(originalSummary.activePayroll)} · Status: {originalSummary.financialStatus}
                </span>
              </div>
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-400 rounded text-xs font-mono">
                {baseTeam.roster.length} Players
              </span>
            </div>

            <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
              {baseTeam.roster.map(p => (
                <div key={p.id} className="flex items-center justify-between p-2 rounded bg-[#0E121A] text-xs">
                  <div>
                    <span className="text-neutral-300 font-medium font-sans">#{p.jerseyNumber} {p.name}</span>
                    <span className="text-neutral-500 text-[10px] block font-mono">{p.position} · {p.contract.contractType}</span>
                  </div>
                  <span className="font-mono text-white font-medium">{formatCurrency(p.contract.currentSalary, false)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated Roster */}
          <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3">
              <div>
                <h3 className="font-semibold text-orange-400">Hypothetical Simulation Roster</h3>
                <span className="text-xs text-neutral-400 font-mono">
                  Payroll: {formatCurrency(simSummary.activePayroll)} · Status: {simSummary.financialStatus}
                </span>
              </div>
              <span className="px-2 py-0.5 bg-orange-950/40 text-orange-400 border border-orange-800/40 rounded text-xs font-mono">
                {simRoster.length} Players
              </span>
            </div>

            <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-1">
              {simRoster.map(p => {
                const originalPlayer = baseTeam.roster.find(op => op.id === p.id);
                const isNew = !originalPlayer;
                const isSalaryChanged = originalPlayer && originalPlayer.contract.currentSalary !== p.contract.currentSalary;

                return (
                  <div key={p.id} className="flex items-center justify-between p-2 rounded bg-[#0E121A] text-xs border border-transparent hover:border-neutral-700">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-neutral-300 font-medium font-sans">#{p.jerseyNumber} {p.name}</span>
                        {isNew && (
                          <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-1.5 py-0.2 rounded font-mono">
                            New Signing
                          </span>
                        )}
                        {isSalaryChanged && (
                          <span className="text-[10px] text-amber-400 bg-amber-950/50 border border-amber-800/50 px-1.5 py-0.2 rounded font-mono">
                            Modified
                          </span>
                        )}
                      </div>
                      <span className="text-neutral-500 text-[10px] block font-mono">{p.position} · {p.tier}</span>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-white font-medium block">
                        {formatCurrency(p.contract.currentSalary, false)}
                      </span>
                      {isSalaryChanged && originalPlayer && (
                        <span className="text-[10px] text-neutral-400 block">
                          Orig: {formatCurrency(originalPlayer.contract.currentSalary, false)} ({formatDeltaCurrency(p.contract.currentSalary - originalPlayer.contract.currentSalary)})
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SAVED SCENARIOS */}
      {activeTab === 'saved' && (
        <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-white mb-3">
            Stored Front-Office Simulation Scenarios
          </h3>

          {savedScenarios.length === 0 ? (
            <div className="text-center py-8 text-xs text-neutral-400">
              No scenarios saved yet. Modify a team roster above and click Save to store it in your terminal.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {savedScenarios.map(scen => (
                <div key={scen.id} className="p-4 rounded-lg bg-[#0E121A] border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white text-sm font-sans">{scen.name}</span>
                      <span className="text-[11px] text-neutral-500 font-mono">{scen.createdAt}</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-3">{scen.description}</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                      <span>Payroll: {formatCurrency(scen.summary.activePayroll)}</span>
                      <span>·</span>
                      <span className={scen.summary.capSpace > 0 ? 'text-emerald-400' : 'text-neutral-400'}>
                        Cap: {scen.summary.capSpace > 0 ? `+${formatCurrency(scen.summary.capSpace)}` : `-${formatCurrency(Math.abs(scen.summary.capSpace))}`}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-neutral-800/80">
                    <button
                      onClick={() => handleLoadScenario(scen)}
                      className="px-3 py-1 bg-orange-600 hover:bg-orange-500 text-white rounded text-xs font-medium transition-colors"
                    >
                      Load into Sandbox
                    </button>
                    <button
                      onClick={() => handleDeleteScenario(scen.id)}
                      className="text-neutral-500 hover:text-rose-400 p-1 transition-colors"
                      title="Delete scenario"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Free Agent Signing Modal */}
      {showFaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#12161F] border border-neutral-800 rounded-xl flex flex-col overflow-hidden text-neutral-200">
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-[#161B22]">
              <div className="flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-orange-400" />
                <h3 className="font-bold text-white text-sm">NBA Free Agent Candidate Catalog</h3>
              </div>
              <button
                onClick={() => setShowFaModal(false)}
                className="text-neutral-400 hover:text-white text-xs px-2 py-1"
              >
                Close
              </button>
            </div>

            <div className="p-4 overflow-y-auto space-y-2">
              {FREE_AGENTS_POOL.map((fa) => (
                <div key={fa.id} className="p-3 rounded-lg bg-[#161B22] border border-neutral-800 flex items-center justify-between gap-4 hover:border-neutral-700 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-sm">{fa.name}</span>
                      <span className="text-[11px] text-neutral-400 font-mono">({fa.position} · {fa.previousTeam})</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono mt-1">
                      <span>Projected: <strong className="text-white font-mono">{formatCurrency(fa.projectedAnnualSalary, false)}</strong> ({formatCurrency(fa.projectedAnnualSalary, true)}/yr)</span>
                      <span>·</span>
                      <span>Years: {fa.projectedYears}</span>
                      <span>·</span>
                      <span>Tier: {fa.tier}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddFreeAgent(fa)}
                    className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded text-xs font-semibold whitespace-nowrap transition-colors"
                  >
                    Add Contract
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom Player Creation Modal */}
      {showCustomSigningForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#12161F] border border-neutral-800 rounded-xl p-5 text-neutral-200">
            <h3 className="font-bold text-white text-sm mb-3">Add Custom Free Agent / Extension Target</h3>

            <form onSubmit={handleCreateCustomSigning} className="space-y-3 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Player Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Jimmy Butler, Brandon Ingram..."
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full bg-[#0E121A] border border-neutral-700 rounded p-2 text-white text-xs focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Position</label>
                  <select
                    value={customPos}
                    onChange={(e) => setCustomPos(e.target.value as any)}
                    className="w-full bg-[#0E121A] border border-neutral-700 rounded p-2 text-white text-xs focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value="PG">Point Guard (PG)</option>
                    <option value="SG">Shooting Guard (SG)</option>
                    <option value="SF">Small Forward (SF)</option>
                    <option value="PF">Power Forward (PF)</option>
                    <option value="C">Center (C)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Contract Duration</label>
                  <select
                    value={customYears}
                    onChange={(e) => setCustomYears(Number(e.target.value))}
                    className="w-full bg-[#0E121A] border border-neutral-700 rounded p-2 text-white text-xs focus:outline-none focus:border-orange-500 cursor-pointer"
                  >
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-neutral-400">Proposed Annual Salary</label>
                  <span className="text-white font-mono text-[11px] font-semibold">
                    {formatCurrency(customSalary, false)} ({formatCurrency(customSalary, true)}/yr)
                  </span>
                </div>
                <FormattedCurrencyInput
                  value={customSalary}
                  onChange={setCustomSalary}
                  step={500000}
                  className="w-full text-left pl-6"
                  showQuickAdjust={true}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-neutral-400">Estimated Analytics Value</label>
                  <span className="text-white font-mono text-[11px] font-semibold">
                    {formatCurrency(customMarketValue, false)} ({formatCurrency(customMarketValue, true)}/yr)
                  </span>
                </div>
                <FormattedCurrencyInput
                  value={customMarketValue}
                  onChange={setCustomMarketValue}
                  step={500000}
                  className="w-full text-left pl-6"
                  showQuickAdjust={true}
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowCustomSigningForm(false)}
                  className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-orange-600 hover:bg-orange-500 text-white rounded font-semibold"
                >
                  Add Player
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
