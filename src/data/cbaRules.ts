import { CapRules, SeasonYear } from '../types/nba';

export const CBA_RULES_BY_SEASON: Record<SeasonYear, CapRules> = {
  '2026-27': {
    season: '2026-27',
    salaryCap: 154647000,
    minimumFloor: 139182300,
    luxuryTax: 187978000,
    firstApron: 195944000,
    secondApron: 208034000,
    nonTaxpayerMle: 14100000,
    taxpayerMle: 5600000,
    biAnnualException: 4900000,
    minimumSalary: 3600000,
    notes: '2026–27 CBA forecast reflecting 10% maximum smoothed salary cap escalation under new media rights agreements.'
  },
  '2025-26': {
    season: '2025-26',
    salaryCap: 140588000,
    minimumFloor: 126529200,
    luxuryTax: 170889000,
    firstApron: 178131000,
    secondApron: 188931000,
    nonTaxpayerMle: 12822000,
    taxpayerMle: 5183000,
    biAnnualException: 4668000,
    minimumSalary: 3300000,
    notes: '2025–26 official NBA league baseline.'
  },
  '2024-25': {
    season: '2024-25',
    salaryCap: 140588000,
    minimumFloor: 126529200,
    luxuryTax: 170814000,
    firstApron: 178132000,
    secondApron: 188931000,
    nonTaxpayerMle: 12822000,
    taxpayerMle: 5183000,
    biAnnualException: 4668000,
    minimumSalary: 3300000,
    notes: '2024–25 NBA season baseline.'
  },
  '2027-28': {
    season: '2027-28',
    salaryCap: 170111000,
    minimumFloor: 153100000,
    luxuryTax: 206775000,
    firstApron: 215538000,
    secondApron: 228837000,
    nonTaxpayerMle: 15510000,
    taxpayerMle: 6160000,
    biAnnualException: 5390000,
    minimumSalary: 3960000,
    notes: '2027–28 forward projection modeling continued television rights revenue expansion.'
  }
};

export interface TaxBracket {
  min: number;
  max: number;
  standardRate: number;
  repeaterRate: number;
}

export const NBA_TAX_BRACKETS: TaxBracket[] = [
  { min: 0, max: 4999999, standardRate: 1.50, repeaterRate: 2.50 },
  { min: 5000000, max: 9999999, standardRate: 1.75, repeaterRate: 2.75 },
  { min: 10000000, max: 14999999, standardRate: 2.50, repeaterRate: 3.50 },
  { min: 15000000, max: 19999999, standardRate: 3.25, repeaterRate: 4.25 },
  { min: 20000000, max: 24999999, standardRate: 3.75, repeaterRate: 4.75 },
  { min: 25000000, max: 29999999, standardRate: 4.25, repeaterRate: 5.25 },
  { min: 30000000, max: 34999999, standardRate: 4.75, repeaterRate: 5.75 },
  { min: 35000000, max: Infinity, standardRate: 5.25, repeaterRate: 6.25 }
];

export const APRON_RESTRICTIONS = {
  firstApron: [
    'Sign-and-Trade hard cap: Teams cannot acquire a player via sign-and-trade if resulting payroll exceeds this apron.',
    'No Bi-Annual Exception (BAE) access.',
    'Trade salary matching: Outgoing salary cannot take back more than 100% in returned player contracts (loss of 110-125% buffer).',
    'Buyout restrictions: Cannot sign players waived in-season who previously held a pre-existing salary higher than the Non-Taxpayer Mid-Level Exception.'
  ],
  secondApron: [
    'Complete elimination of the Taxpayer Mid-Level Exception (TP-MLE) — roster additions limited strictly to veteran minimum contracts.',
    'Ban on trade aggregation: Cannot package multiple players together to trade for a single higher-salaried player.',
    'Outgoing trade cash prohibition: Front office cannot send cash considerations in trades.',
    'Loss of previously generated trade exceptions (TEs).',
    'Frozen 1st-Round Draft Pick: The franchise’s first-round draft pick 7 years in the future is frozen from trade eligibility.',
    'Pick Relegation Penalty: If a team finishes in the Second Apron in two of four rolling seasons, their frozen first-round pick is automatically shifted to the end of the 1st round (pick 30).'
  ]
};
