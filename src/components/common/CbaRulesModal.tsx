import React from 'react';
import { X, ShieldAlert, DollarSign, Award, BookOpen } from 'lucide-react';
import { CapRules, SeasonYear } from '../../types/nba';
import { CBA_RULES_BY_SEASON, NBA_TAX_BRACKETS, APRON_RESTRICTIONS } from '../../data/cbaRules';
import { formatCurrency } from '../../utils/capCalculations';

interface CbaRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSeason: SeasonYear;
}

export const CbaRulesModal: React.FC<CbaRulesModalProps> = ({
  isOpen,
  onClose,
  currentSeason
}) => {
  const [selectedSeason, setSelectedSeason] = React.useState<SeasonYear>(currentSeason);

  if (!isOpen) return null;

  const rules: CapRules = CBA_RULES_BY_SEASON[selectedSeason];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#12161F] border border-neutral-800 rounded-xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cba-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#161B22]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cba-modal-title" className="text-lg font-bold text-white tracking-tight">
                NBA Collective Bargaining Agreement (CBA) Reference
              </h2>
              <p className="text-xs text-neutral-400">
                Official cap rules, progressive luxury tax brackets & second apron restrictions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Season Selector Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-800/80 bg-neutral-900/40 text-xs">
          <span className="text-neutral-400">Select Cap Year:</span>
          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-lg">
            {(['2024-25', '2025-26', '2026-27', '2027-28'] as SeasonYear[]).map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedSeason(yr)}
                className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
                  selectedSeason === yr
                    ? 'bg-orange-500 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {yr} {yr === '2026-27' && '(Current)'}
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Key Thresholds Cards */}
          <div>
            <h3 className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-3">
              {selectedSeason} Financial Thresholds
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-[#161B22] border border-neutral-800 p-3 rounded-lg">
                <span className="text-xs text-neutral-400 block">Salary Cap</span>
                <span className="text-lg font-bold font-mono text-sky-400">{formatCurrency(rules.salaryCap)}</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Base cap maximum</span>
              </div>
              <div className="bg-[#161B22] border border-neutral-800 p-3 rounded-lg">
                <span className="text-xs text-neutral-400 block">Luxury Tax</span>
                <span className="text-lg font-bold font-mono text-amber-400">{formatCurrency(rules.luxuryTax)}</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Tax bill triggered</span>
              </div>
              <div className="bg-[#161B22] border border-neutral-800 p-3 rounded-lg">
                <span className="text-xs text-neutral-400 block">First Apron</span>
                <span className="text-lg font-bold font-mono text-orange-400">{formatCurrency(rules.firstApron)}</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Roster restrictions</span>
              </div>
              <div className="bg-[#161B22] border border-neutral-800 p-3 rounded-lg">
                <span className="text-xs text-neutral-400 block">Second Apron</span>
                <span className="text-lg font-bold font-mono text-rose-400">{formatCurrency(rules.secondApron)}</span>
                <span className="text-[11px] text-neutral-500 block mt-0.5">Severe roster hard cap</span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 mt-2 italic">
              {rules.notes}
            </p>
          </div>

          {/* Exceptions Row */}
          <div className="bg-[#161B22] border border-neutral-800 p-4 rounded-lg">
            <h3 className="text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-2">
              Exception Purchasing Power ({selectedSeason})
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-neutral-400 block">Non-Taxpayer MLE:</span>
                <span className="font-mono font-semibold text-white">{formatCurrency(rules.nonTaxpayerMle)}</span>
              </div>
              <div>
                <span className="text-neutral-400 block">Taxpayer MLE:</span>
                <span className="font-mono font-semibold text-white">{formatCurrency(rules.taxpayerMle)}</span>
              </div>
              <div>
                <span className="text-neutral-400 block">Bi-Annual Exception:</span>
                <span className="font-mono font-semibold text-white">{formatCurrency(rules.biAnnualException)}</span>
              </div>
              <div>
                <span className="text-neutral-400 block">Minimum Salary (10+ Yr):</span>
                <span className="font-mono font-semibold text-white">{formatCurrency(rules.minimumSalary)}</span>
              </div>
            </div>
          </div>

          {/* Second Apron Penalties Deep Dive */}
          <div className="bg-rose-950/20 border border-rose-900/40 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-rose-400 font-semibold mb-2">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>Second Apron Penalties & Trade Restrictions</span>
            </div>
            <p className="text-xs text-rose-300/80 mb-3">
              Under the 2023 CBA, crossing the Second Apron triggers the most punitive operational restrictions in modern professional sports:
            </p>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              {APRON_RESTRICTIONS.secondApron.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* First Apron Penalties */}
          <div className="bg-orange-950/20 border border-orange-900/40 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-orange-400 font-semibold mb-2">
              <Award className="w-5 h-5 shrink-0" />
              <span>First Apron Restrictions</span>
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              {APRON_RESTRICTIONS.firstApron.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Luxury Tax Bracket Table */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Progressive Luxury Tax Rate Schedule
              </h3>
            </div>
            <div className="overflow-x-auto border border-neutral-800 rounded-lg">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#161B22] text-neutral-400 border-b border-neutral-800 font-mono">
                  <tr>
                    <th className="py-2.5 px-4 font-medium">Excess Over Tax Level</th>
                    <th className="py-2.5 px-4 font-medium">Standard Rate</th>
                    <th className="py-2.5 px-4 font-medium">Repeater Rate (3 of 4 yrs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 font-mono">
                  {NBA_TAX_BRACKETS.map((b, idx) => (
                    <tr key={idx} className="hover:bg-neutral-800/40 transition-colors">
                      <td className="py-2 px-4 text-neutral-300">
                        {formatCurrency(b.min)} - {b.max === Infinity ? 'Above' : formatCurrency(b.max)}
                      </td>
                      <td className="py-2 px-4 text-amber-300">
                        ${b.standardRate.toFixed(2)} per dollar
                      </td>
                      <td className="py-2 px-4 text-rose-300">
                        ${b.repeaterRate.toFixed(2)} per dollar
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-800 bg-[#161B22] flex items-center justify-between text-xs text-neutral-500">
          <span>Sources: National Basketball Players Association & NBA Operations Memo (2023 CBA)</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md font-medium transition-colors"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};
