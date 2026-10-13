import React from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  subtext?: string;
  badge?: {
    text: string;
    variant: 'positive' | 'negative' | 'neutral' | 'warning' | 'accent';
  };
  icon?: React.ReactNode;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  subtext,
  badge,
  icon
}) => {
  const getBadgeStyle = () => {
    switch (badge?.variant) {
      case 'positive':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'negative':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      case 'warning':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'accent':
        return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      default:
        return 'text-neutral-400 bg-neutral-800/60 border-neutral-700/60';
    }
  };

  return (
    <div className="bg-[#161B22] border border-neutral-800 rounded-lg p-4 flex flex-col justify-between hover:border-neutral-700 transition-colors">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs font-medium text-neutral-400 tracking-wide">
          {label}
        </span>
        {icon && <div className="text-neutral-500 shrink-0">{icon}</div>}
      </div>

      <div className="flex items-baseline justify-between gap-2 my-1">
        <span className="text-2xl font-bold font-mono tabular-nums text-white tracking-tight">
          {value}
        </span>
        {badge && (
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded border whitespace-nowrap ${getBadgeStyle()}`}>
            {badge.text}
          </span>
        )}
      </div>

      {subtext && (
        <span className="text-xs text-neutral-400 mt-1 line-clamp-1">
          {subtext}
        </span>
      )}
    </div>
  );
};
