import { CapRules, FinancialStatus, Player, RosterTier, Team, TeamFinancialSummary } from '../types/nba';
import { NBA_TAX_BRACKETS } from '../data/cbaRules';

/**
 * Calculates progressive NBA luxury tax bill based on dollars exceeding the luxury tax threshold.
 */
export function calculateLuxuryTaxBill(
  excessAmount: number,
  isRepeater: boolean = false
): number {
  if (excessAmount <= 0) return 0;

  let totalTax = 0;
  let remaining = excessAmount;

  for (const bracket of NBA_TAX_BRACKETS) {
    if (remaining <= 0) break;
    const bracketSpan = bracket.max - bracket.min + 1;
    const taxableInBracket = Math.min(remaining, bracketSpan);
    const rate = isRepeater ? bracket.repeaterRate : bracket.standardRate;

    totalTax += taxableInBracket * rate;
    remaining -= taxableInBracket;
  }

  return Math.round(totalTax);
}

/**
 * Determines a team's financial status category relative to CBA thresholds.
 */
export function getFinancialStatus(
  payroll: number,
  rules: CapRules
): FinancialStatus {
  if (payroll <= rules.salaryCap) {
    return 'Under Cap';
  } else if (payroll <= rules.luxuryTax) {
    return 'Over Cap / Below Tax';
  } else if (payroll <= rules.firstApron) {
    return 'In Luxury Tax';
  } else if (payroll <= rules.secondApron) {
    return 'First Apron';
  } else {
    return 'Second Apron';
  }
}

/**
 * Derives roster tier based on annual salary if not explicitly assigned.
 * Star: >= $35M
 * Starter: $15M - $34.9M
 * Rotation: $5M - $14.9M
 * Developmental: < $5M
 */
export function getRosterTier(salary: number): RosterTier {
  if (salary >= 35000000) return 'Star';
  if (salary >= 15000000) return 'Starter';
  if (salary >= 5000000) return 'Rotation';
  return 'Developmental';
}

/**
 * Computes complete financial and value allocation summary for a roster.
 */
export function calculateTeamSummary(
  teamId: string,
  roster: Player[],
  rules: CapRules,
  isRepeater: boolean = false,
  deadCap: number = 0
): TeamFinancialSummary {
  const activePayroll = roster.reduce((sum, p) => sum + (p.contract?.currentSalary || 0), 0);
  const totalCapAllocations = activePayroll + deadCap;

  const capSpace = rules.salaryCap - totalCapAllocations;
  const taxRoom = rules.luxuryTax - totalCapAllocations;
  const firstApronRoom = rules.firstApron - totalCapAllocations;
  const secondApronRoom = rules.secondApron - totalCapAllocations;

  const estimatedTaxBill = taxRoom < 0 ? calculateLuxuryTaxBill(Math.abs(taxRoom), isRepeater) : 0;
  const financialStatus = getFinancialStatus(totalCapAllocations, rules);

  let starSpend = 0;
  let starterSpend = 0;
  let rotationSpend = 0;
  let developmentalSpend = 0;
  let totalMarketValue = 0;

  for (const player of roster) {
    const salary = player.contract?.currentSalary || 0;
    const tier = player.tier || getRosterTier(salary);

    if (tier === 'Star') starSpend += salary;
    else if (tier === 'Starter') starterSpend += salary;
    else if (tier === 'Rotation') rotationSpend += salary;
    else developmentalSpend += salary;

    totalMarketValue += player.estimatedMarketValue || salary;
  }

  const netSurplusValue = totalMarketValue - activePayroll;
  const surplusRatio = activePayroll > 0 ? totalMarketValue / activePayroll : 1.0;

  return {
    teamId,
    activePayroll,
    deadCap,
    totalCapAllocations,
    capSpace,
    taxRoom,
    estimatedTaxBill,
    firstApronRoom,
    secondApronRoom,
    financialStatus,
    starSpend,
    starterSpend,
    rotationSpend,
    developmentalSpend,
    totalMarketValue,
    netSurplusValue,
    surplusRatio
  };
}

/**
 * Currency formatter with compact mode ($154.2M) or detailed mode ($154,200,000).
 */
export function formatCurrency(amount: number, compact: boolean = true): string {
  if (isNaN(amount) || amount === 0) return '$0';

  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  if (compact) {
    if (absAmount >= 1000000000) {
      return `${isNegative ? '-' : ''}$${(absAmount / 1000000000).toFixed(2)}B`;
    }
    if (absAmount >= 1000000) {
      return `${isNegative ? '-' : ''}$${(absAmount / 1000000).toFixed(1)}M`;
    }
    if (absAmount >= 1000) {
      return `${isNegative ? '-' : ''}$${(absAmount / 1000).toFixed(0)}K`;
    }
    return `${isNegative ? '-' : ''}$${absAmount.toFixed(0)}`;
  }

  return `${isNegative ? '-' : ''}$${Math.round(absAmount).toLocaleString('en-US')}`;
}

/**
 * Format delta with explicit plus sign (+ $4.5M / - $2.1M).
 */
export function formatDeltaCurrency(amount: number): string {
  if (amount === 0) return '$0';
  const prefix = amount > 0 ? '+' : '-';
  const abs = Math.abs(amount);
  const formatted = abs >= 1000000 ? `$${(abs / 1000000).toFixed(1)}M` : `$${(abs / 1000).toFixed(0)}K`;
  return `${prefix} ${formatted}`;
}

export function formatPercent(value: number, decimals: number = 1): string {
  return `${(value * 100).toFixed(decimals)}%`;
}
