export type SeasonYear = '2024-25' | '2025-26' | '2026-27' | '2027-28';

export type Conference = 'Eastern' | 'Western';

export type Division = 
  | 'Atlantic' 
  | 'Central' 
  | 'Southeast' 
  | 'Northwest' 
  | 'Pacific' 
  | 'Southwest';

export type RosterTier = 'Star' | 'Starter' | 'Rotation' | 'Developmental';

export type Position = 'PG' | 'SG' | 'SF' | 'PF' | 'C' | 'G' | 'F';

export type ContractOption = 'None' | 'Player Option' | 'Team Option' | 'Early Termination' | 'Non-Guaranteed' | 'Partially Guaranteed' | 'Two-Way' | 'Dead Money';

export type FinancialStatus = 'Under Cap' | 'Over Cap / Below Tax' | 'In Luxury Tax' | 'First Apron' | 'Second Apron';

export interface CapRules {
  season: SeasonYear;
  salaryCap: number;
  minimumFloor: number;
  luxuryTax: number;
  firstApron: number;
  secondApron: number;
  nonTaxpayerMle: number;
  taxpayerMle: number;
  biAnnualException: number;
  minimumSalary: number;
  notes: string;
}

export interface PlayerContract {
  currentSalary: number; // in USD
  nextSalary?: number;
  yearsRemaining: number;
  guaranteedAmount: number;
  contractType: 'Supermax' | 'Max' | 'Bird Exception' | 'Mid-Level' | 'Bi-Annual' | 'Rookie Scale' | 'Veteran Minimum' | 'Two-Way' | 'Dead Money' | 'Cap Space';
  optionType: ContractOption;
  isExpiring: boolean;
  notes?: string;
}

export interface Player {
  id: string;
  name: string;
  jerseyNumber: string;
  position: Position;
  age: number;
  experienceYears: number;
  contract: PlayerContract;
  estimatedMarketValue: number; // in USD based on analytics/wins contribution
  tier: RosterTier;
  avatarUrl?: string;
  notes?: string;
}

export interface Team {
  id: string;
  name: string;
  city: string;
  abbreviation: string;
  conference: Conference;
  division: Division;
  primaryColor: string;
  secondaryColor: string;
  roster: Player[];
  isRepeaterTaxpayer?: boolean;
}

export interface TeamFinancialSummary {
  teamId: string;
  activePayroll: number;
  deadCap: number;
  totalCapAllocations: number;
  capSpace: number; // positive = room below cap, negative = over cap
  taxRoom: number; // positive = below tax, negative = in tax
  estimatedTaxBill: number;
  firstApronRoom: number; // positive = below apron, negative = above
  secondApronRoom: number; // positive = below apron, negative = above
  financialStatus: FinancialStatus;
  starSpend: number;
  starterSpend: number;
  rotationSpend: number;
  developmentalSpend: number;
  totalMarketValue: number;
  netSurplusValue: number; // totalMarketValue - activePayroll
  surplusRatio: number; // totalMarketValue / activePayroll
}

export interface FreeAgentCandidate {
  id: string;
  name: string;
  position: Position;
  age: number;
  previousTeam: string;
  projectedAnnualSalary: number;
  projectedYears: number;
  tier: RosterTier;
  estimatedMarketValue: number;
  contractType: PlayerContract['contractType'];
  optionType: ContractOption;
}

export interface SavedScenario {
  id: string;
  name: string;
  description: string;
  baseTeamId: string;
  season: SeasonYear;
  createdAt: string;
  modifiedRoster: Player[];
  summary: TeamFinancialSummary;
}
