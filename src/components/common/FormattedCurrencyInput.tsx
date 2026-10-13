import React, { useState, useEffect } from 'react';

interface FormattedCurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  placeholder?: string;
  showQuickAdjust?: boolean;
}

export const FormattedCurrencyInput: React.FC<FormattedCurrencyInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 120000000,
  step = 500000,
  className = '',
  placeholder = '$0',
  showQuickAdjust = true
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState(() => 
    value !== undefined && value !== null ? value.toLocaleString('en-US') : '0'
  );

  useEffect(() => {
    if (!isFocused) {
      setTextValue(value !== undefined && value !== null ? value.toLocaleString('en-US') : '0');
    }
  }, [value, isFocused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    if (raw === '') {
      setTextValue('');
      onChange(0);
      return;
    }
    const num = parseInt(raw, 10);
    const clamped = Math.max(min, Math.min(max, num));
    setTextValue(num.toLocaleString('en-US'));
    onChange(clamped);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setTextValue(value !== undefined && value !== null ? value.toLocaleString('en-US') : '0');
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    e.target.select();
  };

  const adjustValue = (delta: number) => {
    const next = Math.max(min, Math.min(max, (value || 0) + delta));
    onChange(next);
  };

  return (
    <div className="inline-flex items-center gap-1">
      <div className="relative flex items-center">
        <span className="absolute left-2.5 text-neutral-400 font-mono text-xs pointer-events-none select-none">
          $
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={textValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          aria-label="Proposed annual salary in USD"
          className={`bg-[#0E121A] border border-neutral-700 hover:border-neutral-600 focus:border-orange-500 rounded-md pl-6 pr-2.5 py-1 text-right text-white font-mono text-xs tabular-nums focus:outline-none transition-colors ${className}`}
        />
      </div>

      {showQuickAdjust && (
        <div className="flex items-center gap-0.5 shrink-0">
          <button
            type="button"
            onClick={() => adjustValue(-step)}
            className="w-5 h-6 flex items-center justify-center text-[11px] font-mono font-medium text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/80 rounded transition-colors"
            title={`Decrease by $${(step / 1000).toFixed(0)}K`}
            aria-label="Decrease salary"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => adjustValue(step)}
            className="w-5 h-6 flex items-center justify-center text-[11px] font-mono font-medium text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/80 rounded transition-colors"
            title={`Increase by $${(step / 1000).toFixed(0)}K`}
            aria-label="Increase salary"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
