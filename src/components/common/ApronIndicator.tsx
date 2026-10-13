import React from 'react';
import { CapRules, FinancialStatus } from '../../types/nba';
import { formatCurrency } from '../../utils/capCalculations';

interface ApronIndicatorProps {
  payroll: number;
  rules: CapRules;
  status: FinancialStatus;
  showLabels?: boolean;
}

export const ApronIndicator: React.FC<ApronIndicatorProps> = ({
  payroll,
  rules,
  status,
  showLabels = true
}) => {
  // Normalize scale from $120M to $230M
  const minScale = Math.min(rules.minimumFloor * 0.9, 120000000);
  const maxScale = Math.max(rules.secondApron * 1.12, 230000000);
  const totalRange = maxScale - minScale;

  const getPercent = (val: number) => {
    const clamped = Math.max(minScale, Math.min(maxScale, val));
    return ((clamped - minScale) / totalRange) * 100;
  };

  const currentPercent = getPercent(payroll);
  const capPercent = getPercent(rules.salaryCap);
  const taxPercent = getPercent(rules.luxuryTax);
  const apron1Percent = getPercent(rules.firstApron);
  const apron2Percent = getPercent(rules.secondApron);

  const getStatusColor = () => {
    switch (status) {
      case 'Under Cap':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Over Cap / Below Tax':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/30';
      case 'In Luxury Tax':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'First Apron':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      case 'Second Apron':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      default:
        return 'text-neutral-300 bg-neutral-800 border-neutral-700';
    }
  };

  return (
    <div className="w-full">
      {showLabels && (
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400 font-medium">Cap Status:</span>
            <span className={`px-2 py-0.5 text-xs font-semibold rounded border ${getStatusColor()}`}>
              {status}
            </span>
          </div>
          <span className="text-neutral-400 font-mono tabular-nums">
            {formatCurrency(payroll, false)}
          </span>
        </div>
      )}

      {/* Threshold Track */}
      <div className="relative h-4 bg-neutral-900 rounded border border-neutral-800 overflow-visible mb-5">
        {/* Under Cap Region */}
        <div
          className="absolute top-0 bottom-0 left-0 bg-emerald-950/40 rounded-l"
          style={{ width: `${capPercent}%` }}
        />
        {/* Cap to Tax Region */}
        <div
          className="absolute top-0 bottom-0 bg-sky-950/40"
          style={{ left: `${capPercent}%`, width: `${taxPercent - capPercent}%` }}
        />
        {/* Tax to 1st Apron Region */}
        <div
          className="absolute top-0 bottom-0 bg-amber-950/40"
          style={{ left: `${taxPercent}%`, width: `${apron1Percent - taxPercent}%` }}
        />
        {/* 1st to 2nd Apron Region */}
        <div
          className="absolute top-0 bottom-0 bg-orange-950/50"
          style={{ left: `${apron1Percent}%`, width: `${apron2Percent - apron1Percent}%` }}
        />
        {/* Above 2nd Apron Region */}
        <div
          className="absolute top-0 bottom-0 bg-rose-950/60 rounded-r"
          style={{ left: `${apron2Percent}%`, right: 0 }}
        />

        {/* Threshold Markers */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-sky-400 z-10"
          style={{ left: `${capPercent}%` }}
          title={`Salary Cap: ${formatCurrency(rules.salaryCap)}`}
        />
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-amber-400 z-10"
          style={{ left: `${taxPercent}%` }}
          title={`Luxury Tax: ${formatCurrency(rules.luxuryTax)}`}
        />
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-orange-400 z-10"
          style={{ left: `${apron1Percent}%` }}
          title={`First Apron: ${formatCurrency(rules.firstApron)}`}
        />
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-rose-500 z-10"
          style={{ left: `${apron2Percent}%` }}
          title={`Second Apron: ${formatCurrency(rules.secondApron)}`}
        />

        {/* Current Payroll Indicator Needle */}
        <div
          className="absolute top-[-4px] bottom-[-4px] w-2.5 -ml-1.25 bg-white border border-neutral-900 rounded-sm shadow-md z-20 transition-all duration-300"
          style={{ left: `${currentPercent}%` }}
          title={`Current Payroll: ${formatCurrency(payroll)}`}
        />
      </div>

      {/* Threshold Labels Below */}
      {showLabels && (
        <div className="relative text-[11px] text-neutral-400 font-mono flex justify-between h-4">
          <div style={{ position: 'absolute', left: `${capPercent}%`, transform: 'translateX(-50%)' }}>
            <span className="text-sky-300">Cap</span>{' '}
            <span className="hidden sm:inline text-neutral-500">{formatCurrency(rules.salaryCap)}</span>
          </div>
          <div style={{ position: 'absolute', left: `${taxPercent}%`, transform: 'translateX(-50%)' }}>
            <span className="text-amber-300">Tax</span>{' '}
            <span className="hidden sm:inline text-neutral-500">{formatCurrency(rules.luxuryTax)}</span>
          </div>
          <div style={{ position: 'absolute', left: `${apron1Percent}%`, transform: 'translateX(-50%)' }}>
            <span className="text-orange-400">1st</span>{' '}
            <span className="hidden sm:inline text-neutral-500">{formatCurrency(rules.firstApron)}</span>
          </div>
          <div style={{ position: 'absolute', left: `${apron2Percent}%`, transform: 'translateX(-50%)' }}>
            <span className="text-rose-400">2nd</span>{' '}
            <span className="hidden sm:inline text-neutral-500">{formatCurrency(rules.secondApron)}</span>
          </div>
        </div>
      )}
    </div>
  );
};
