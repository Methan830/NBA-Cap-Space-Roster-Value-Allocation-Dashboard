import { Team, Player } from '../types/nba';

export const NBA_TEAMS_DATA: Team[] = [
  // ================= EASTERN CONFERENCE - ATLANTIC =================
  {
    id: 'bos',
    name: 'Celtics',
    city: 'Boston',
    abbreviation: 'BOS',
    conference: 'Eastern',
    division: 'Atlantic',
    primaryColor: '#007A33',
    secondaryColor: '#BA9653',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'bos-1',
        name: 'Jayson Tatum',
        jerseyNumber: '0',
        position: 'SF',
        age: 28,
        experienceYears: 9,
        contract: {
          currentSalary: 54126450,
          nextSalary: 58456566,
          yearsRemaining: 5,
          guaranteedAmount: 314000000,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 62000000,
        tier: 'Star',
        notes: 'Designated Veteran Supermax contract.'
      },
      {
        id: 'bos-2',
        name: 'Jaylen Brown',
        jerseyNumber: '7',
        position: 'SG',
        age: 29,
        experienceYears: 10,
        contract: {
          currentSalary: 53120000,
          nextSalary: 57369600,
          yearsRemaining: 3,
          guaranteedAmount: 168000000,
          contractType: 'Supermax',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 51000000,
        tier: 'Star'
      },
      {
        id: 'bos-3',
        name: 'Jrue Holiday',
        jerseyNumber: '4',
        position: 'PG',
        age: 36,
        experienceYears: 17,
        contract: {
          currentSalary: 32400000,
          nextSalary: 34800000,
          yearsRemaining: 2,
          guaranteedAmount: 67200000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 24500000,
        tier: 'Starter'
      },
      {
        id: 'bos-4',
        name: 'Kristaps Porzingis',
        jerseyNumber: '8',
        position: 'C',
        age: 31,
        experienceYears: 11,
        contract: {
          currentSalary: 30730000,
          yearsRemaining: 1,
          guaranteedAmount: 30730000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 28000000,
        tier: 'Starter'
      },
      {
        id: 'bos-5',
        name: 'Derrick White',
        jerseyNumber: '9',
        position: 'PG',
        age: 32,
        experienceYears: 9,
        contract: {
          currentSalary: 28100000,
          nextSalary: 30348000,
          yearsRemaining: 3,
          guaranteedAmount: 89000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 33500000,
        tier: 'Starter'
      },
      {
        id: 'bos-6',
        name: 'Payton Pritchard',
        jerseyNumber: '11',
        position: 'PG',
        age: 28,
        experienceYears: 6,
        contract: {
          currentSalary: 7700000,
          nextSalary: 8300000,
          yearsRemaining: 2,
          guaranteedAmount: 16000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 14200000,
        tier: 'Rotation'
      },
      {
        id: 'bos-7',
        name: 'Sam Hauser',
        jerseyNumber: '30',
        position: 'SF',
        age: 28,
        experienceYears: 5,
        contract: {
          currentSalary: 10000000,
          nextSalary: 10800000,
          yearsRemaining: 3,
          guaranteedAmount: 32000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 11800000,
        tier: 'Rotation'
      },
      {
        id: 'bos-8',
        name: 'Luke Kornet',
        jerseyNumber: '40',
        position: 'C',
        age: 31,
        experienceYears: 9,
        contract: {
          currentSalary: 3500000,
          yearsRemaining: 1,
          guaranteedAmount: 3500000,
          contractType: 'Veteran Minimum',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 5200000,
        tier: 'Developmental'
      },
      {
        id: 'bos-9',
        name: 'Neemias Queta',
        jerseyNumber: '88',
        position: 'C',
        age: 27,
        experienceYears: 5,
        contract: {
          currentSalary: 2350000,
          nextSalary: 2500000,
          yearsRemaining: 2,
          guaranteedAmount: 4850000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 4600000,
        tier: 'Developmental'
      },
      {
        id: 'bos-10',
        name: 'Jordan Walsh',
        jerseyNumber: '27',
        position: 'SF',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 2200000,
          yearsRemaining: 1,
          guaranteedAmount: 2200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 2800000,
        tier: 'Developmental'
      },
      {
        id: 'bos-11',
        name: 'Baylor Scheierman',
        jerseyNumber: '55',
        position: 'SG',
        age: 26,
        experienceYears: 2,
        contract: {
          currentSalary: 2650000,
          nextSalary: 2780000,
          yearsRemaining: 3,
          guaranteedAmount: 8200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 3100000,
        tier: 'Developmental'
      },
      {
        id: 'bos-12',
        name: 'Xavier Tillman Sr.',
        jerseyNumber: '26',
        position: 'PF',
        age: 27,
        experienceYears: 6,
        contract: {
          currentSalary: 2500000,
          yearsRemaining: 1,
          guaranteedAmount: 2500000,
          contractType: 'Veteran Minimum',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 4100000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'nyk',
    name: 'Knicks',
    city: 'New York',
    abbreviation: 'NYK',
    conference: 'Eastern',
    division: 'Atlantic',
    primaryColor: '#006BB6',
    secondaryColor: '#F58426',
    isRepeaterTaxpayer: false,
    roster: [
      {
        id: 'nyk-1',
        name: 'Jalen Brunson',
        jerseyNumber: '11',
        position: 'PG',
        age: 30,
        experienceYears: 8,
        contract: {
          currentSalary: 34944000,
          nextSalary: 37739520,
          yearsRemaining: 4,
          guaranteedAmount: 156500000,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 56000000,
        tier: 'Starter',
        notes: 'Extremely team-friendly extension signed July 2024.'
      },
      {
        id: 'nyk-2',
        name: 'Karl-Anthony Towns',
        jerseyNumber: '32',
        position: 'C',
        age: 30,
        experienceYears: 11,
        contract: {
          currentSalary: 53140000,
          nextSalary: 57400000,
          yearsRemaining: 2,
          guaranteedAmount: 110540000,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 48000000,
        tier: 'Star'
      },
      {
        id: 'nyk-3',
        name: 'OG Anunoby',
        jerseyNumber: '8',
        position: 'SF',
        age: 29,
        experienceYears: 9,
        contract: {
          currentSalary: 39360000,
          nextSalary: 42500000,
          yearsRemaining: 3,
          guaranteedAmount: 125000000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 36000000,
        tier: 'Star'
      },
      {
        id: 'nyk-4',
        name: 'Mikal Bridges',
        jerseyNumber: '25',
        position: 'SG',
        age: 30,
        experienceYears: 8,
        contract: {
          currentSalary: 30000000,
          nextSalary: 32400000,
          yearsRemaining: 3,
          guaranteedAmount: 95000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 32500000,
        tier: 'Starter'
      },
      {
        id: 'nyk-5',
        name: 'Josh Hart',
        jerseyNumber: '3',
        position: 'SG',
        age: 31,
        experienceYears: 9,
        contract: {
          currentSalary: 19480000,
          nextSalary: 21040000,
          yearsRemaining: 2,
          guaranteedAmount: 40520000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 18200000,
        tier: 'Starter'
      },
      {
        id: 'nyk-6',
        name: 'Mitchell Robinson',
        jerseyNumber: '23',
        position: 'C',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 13000000,
          yearsRemaining: 1,
          guaranteedAmount: 13000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 12500000,
        tier: 'Rotation'
      },
      {
        id: 'nyk-7',
        name: 'Miles McBride',
        jerseyNumber: '2',
        position: 'PG',
        age: 26,
        experienceYears: 5,
        contract: {
          currentSalary: 3900000,
          yearsRemaining: 1,
          guaranteedAmount: 3900000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 11000000,
        tier: 'Developmental'
      },
      {
        id: 'nyk-8',
        name: 'Cameron Payne',
        jerseyNumber: '1',
        position: 'PG',
        age: 32,
        experienceYears: 11,
        contract: {
          currentSalary: 3300000,
          yearsRemaining: 1,
          guaranteedAmount: 3300000,
          contractType: 'Veteran Minimum',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 4200000,
        tier: 'Developmental'
      },
      {
        id: 'nyk-9',
        name: 'Precious Achiuwa',
        jerseyNumber: '5',
        position: 'PF',
        age: 27,
        experienceYears: 6,
        contract: {
          currentSalary: 6000000,
          yearsRemaining: 1,
          guaranteedAmount: 6000000,
          contractType: 'Bi-Annual',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 7200000,
        tier: 'Rotation'
      },
      {
        id: 'nyk-10',
        name: 'Pacome Dadiet',
        jerseyNumber: '4',
        position: 'SF',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 2800000,
          nextSalary: 2950000,
          yearsRemaining: 3,
          guaranteedAmount: 8800000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 3000000,
        tier: 'Developmental'
      },
      {
        id: 'nyk-11',
        name: 'Tyler Kolek',
        jerseyNumber: '13',
        position: 'PG',
        age: 25,
        experienceYears: 2,
        contract: {
          currentSalary: 2100000,
          nextSalary: 2200000,
          yearsRemaining: 3,
          guaranteedAmount: 6500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 4500000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'phi',
    name: '76ers',
    city: 'Philadelphia',
    abbreviation: 'PHI',
    conference: 'Eastern',
    division: 'Atlantic',
    primaryColor: '#006BB6',
    secondaryColor: '#ED174C',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'phi-1',
        name: 'Joel Embiid',
        jerseyNumber: '21',
        position: 'C',
        age: 32,
        experienceYears: 12,
        contract: {
          currentSalary: 59530000,
          nextSalary: 64292400,
          yearsRemaining: 3,
          guaranteedAmount: 193000000,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 58000000,
        tier: 'Star'
      },
      {
        id: 'phi-2',
        name: 'Paul George',
        jerseyNumber: '8',
        position: 'SF',
        age: 36,
        experienceYears: 16,
        contract: {
          currentSalary: 51660000,
          nextSalary: 55430000,
          yearsRemaining: 2,
          guaranteedAmount: 107090000,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 35000000,
        tier: 'Star'
      },
      {
        id: 'phi-3',
        name: 'Tyrese Maxey',
        jerseyNumber: '0',
        position: 'PG',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 38220000,
          nextSalary: 41277600,
          yearsRemaining: 4,
          guaranteedAmount: 165000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 46000000,
        tier: 'Star'
      },
      {
        id: 'phi-4',
        name: 'Kelly Oubre Jr.',
        jerseyNumber: '9',
        position: 'SF',
        age: 30,
        experienceYears: 11,
        contract: {
          currentSalary: 8400000,
          yearsRemaining: 1,
          guaranteedAmount: 8400000,
          contractType: 'Mid-Level',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 12000000,
        tier: 'Rotation'
      },
      {
        id: 'phi-5',
        name: 'Caleb Martin',
        jerseyNumber: '16',
        position: 'SF',
        age: 31,
        experienceYears: 7,
        contract: {
          currentSalary: 8900000,
          nextSalary: 9345000,
          yearsRemaining: 3,
          guaranteedAmount: 27500000,
          contractType: 'Mid-Level',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 9500000,
        tier: 'Rotation'
      },
      {
        id: 'phi-6',
        name: 'Andre Drummond',
        jerseyNumber: '5',
        position: 'C',
        age: 33,
        experienceYears: 14,
        contract: {
          currentSalary: 5000000,
          yearsRemaining: 1,
          guaranteedAmount: 5000000,
          contractType: 'Bi-Annual',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 6000000,
        tier: 'Rotation'
      },
      {
        id: 'phi-7',
        name: 'Jared McCain',
        jerseyNumber: '20',
        position: 'PG',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 4200000,
          nextSalary: 4400000,
          yearsRemaining: 3,
          guaranteedAmount: 14200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 16500000,
        tier: 'Developmental'
      },
      {
        id: 'phi-8',
        name: 'Guerschon Yabusele',
        jerseyNumber: '28',
        position: 'PF',
        age: 30,
        experienceYears: 4,
        contract: {
          currentSalary: 3500000,
          yearsRemaining: 1,
          guaranteedAmount: 3500000,
          contractType: 'Veteran Minimum',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 7000000,
        tier: 'Developmental'
      },
      {
        id: 'phi-9',
        name: 'Eric Gordon',
        jerseyNumber: '23',
        position: 'SG',
        age: 37,
        experienceYears: 18,
        contract: {
          currentSalary: 3400000,
          yearsRemaining: 1,
          guaranteedAmount: 3400000,
          contractType: 'Veteran Minimum',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 3000000,
        tier: 'Developmental'
      },
      {
        id: 'phi-10',
        name: 'Adem Bona',
        jerseyNumber: '22',
        position: 'C',
        age: 23,
        experienceYears: 2,
        contract: {
          currentSalary: 2100000,
          nextSalary: 2250000,
          yearsRemaining: 3,
          guaranteedAmount: 6700000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 3200000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'bkn',
    name: 'Nets',
    city: 'Brooklyn',
    abbreviation: 'BKN',
    conference: 'Eastern',
    division: 'Atlantic',
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    roster: [
      {
        id: 'bkn-1',
        name: 'Cam Thomas',
        jerseyNumber: '24',
        position: 'SG',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 25000000,
          nextSalary: 27000000,
          yearsRemaining: 4,
          guaranteedAmount: 110000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 27000000,
        tier: 'Starter'
      },
      {
        id: 'bkn-2',
        name: 'Nic Claxton',
        jerseyNumber: '33',
        position: 'C',
        age: 27,
        experienceYears: 7,
        contract: {
          currentSalary: 23500000,
          nextSalary: 21500000,
          yearsRemaining: 2,
          guaranteedAmount: 45000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 24000000,
        tier: 'Starter'
      },
      {
        id: 'bkn-3',
        name: 'Cameron Johnson',
        jerseyNumber: '2',
        position: 'SF',
        age: 30,
        experienceYears: 7,
        contract: {
          currentSalary: 23625000,
          yearsRemaining: 1,
          guaranteedAmount: 23625000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 21000000,
        tier: 'Starter'
      },
      {
        id: 'bkn-4',
        name: 'Noah Clowney',
        jerseyNumber: '21',
        position: 'PF',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 3400000,
          nextSalary: 5200000,
          yearsRemaining: 2,
          guaranteedAmount: 8600000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 9500000,
        tier: 'Developmental'
      },
      {
        id: 'bkn-5',
        name: 'Day\'Ron Sharpe',
        jerseyNumber: '20',
        position: 'C',
        age: 24,
        experienceYears: 5,
        contract: {
          currentSalary: 7500000,
          nextSalary: 8100000,
          yearsRemaining: 2,
          guaranteedAmount: 15600000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 8000000,
        tier: 'Rotation'
      },
      {
        id: 'bkn-6',
        name: 'Jalen Wilson',
        jerseyNumber: '9',
        position: 'SF',
        age: 25,
        experienceYears: 3,
        contract: {
          currentSalary: 2200000,
          yearsRemaining: 1,
          guaranteedAmount: 2200000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 5500000,
        tier: 'Developmental'
      },
      {
        id: 'bkn-7',
        name: 'Dariq Whitehead',
        jerseyNumber: '0',
        position: 'SF',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 3200000,
          nextSalary: 5400000,
          yearsRemaining: 2,
          guaranteedAmount: 8600000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 4000000,
        tier: 'Developmental'
      },
      {
        id: 'bkn-8',
        name: 'Keon Johnson',
        jerseyNumber: '45',
        position: 'SG',
        age: 24,
        experienceYears: 5,
        contract: {
          currentSalary: 2400000,
          yearsRemaining: 1,
          guaranteedAmount: 2400000,
          contractType: 'Veteran Minimum',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 4200000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'tor',
    name: 'Raptors',
    city: 'Toronto',
    abbreviation: 'TOR',
    conference: 'Eastern',
    division: 'Atlantic',
    primaryColor: '#CE1141',
    secondaryColor: '#000000',
    roster: [
      {
        id: 'tor-1',
        name: 'Scottie Barnes',
        jerseyNumber: '4',
        position: 'SF',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 41800000,
          nextSalary: 45144000,
          yearsRemaining: 4,
          guaranteedAmount: 181000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 47000000,
        tier: 'Star'
      },
      {
        id: 'tor-2',
        name: 'Immanuel Quickley',
        jerseyNumber: '5',
        position: 'PG',
        age: 27,
        experienceYears: 6,
        contract: {
          currentSalary: 34500000,
          nextSalary: 37200000,
          yearsRemaining: 3,
          guaranteedAmount: 109000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 31000000,
        tier: 'Starter'
      },
      {
        id: 'tor-3',
        name: 'RJ Barrett',
        jerseyNumber: '9',
        position: 'SG',
        age: 26,
        experienceYears: 7,
        contract: {
          currentSalary: 29600000,
          yearsRemaining: 1,
          guaranteedAmount: 29600000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 27500000,
        tier: 'Starter'
      },
      {
        id: 'tor-4',
        name: 'Jakob Poeltl',
        jerseyNumber: '19',
        position: 'C',
        age: 30,
        experienceYears: 10,
        contract: {
          currentSalary: 19500000,
          yearsRemaining: 1,
          guaranteedAmount: 19500000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 18000000,
        tier: 'Starter'
      },
      {
        id: 'tor-5',
        name: 'Gradey Dick',
        jerseyNumber: '1',
        position: 'SG',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 4990000,
          nextSalary: 7100000,
          yearsRemaining: 2,
          guaranteedAmount: 12090000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 14500000,
        tier: 'Developmental'
      },
      {
        id: 'tor-6',
        name: 'Kelly Olynyk',
        jerseyNumber: '41',
        position: 'PF',
        age: 35,
        experienceYears: 13,
        contract: {
          currentSalary: 13400000,
          yearsRemaining: 1,
          guaranteedAmount: 13400000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 9000000,
        tier: 'Rotation'
      },
      {
        id: 'tor-7',
        name: 'Ja\'Kobe Walter',
        jerseyNumber: '14',
        position: 'SG',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 3700000,
          nextSalary: 3900000,
          yearsRemaining: 3,
          guaranteedAmount: 11800000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 5000000,
        tier: 'Developmental'
      },
      {
        id: 'tor-8',
        name: 'Ochai Agbaji',
        jerseyNumber: '30',
        position: 'SG',
        age: 26,
        experienceYears: 4,
        contract: {
          currentSalary: 6400000,
          yearsRemaining: 1,
          guaranteedAmount: 6400000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 6000000,
        tier: 'Rotation'
      }
    ]
  },

  // ================= EASTERN CONFERENCE - CENTRAL =================
  {
    id: 'mil',
    name: 'Bucks',
    city: 'Milwaukee',
    abbreviation: 'MIL',
    conference: 'Eastern',
    division: 'Central',
    primaryColor: '#00471B',
    secondaryColor: '#EEE1C6',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'mil-1',
        name: 'Giannis Antetokounmpo',
        jerseyNumber: '34',
        position: 'PF',
        age: 31,
        experienceYears: 13,
        contract: {
          currentSalary: 58458000,
          nextSalary: 63134640,
          yearsRemaining: 2,
          guaranteedAmount: 121592640,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 66000000,
        tier: 'Star'
      },
      {
        id: 'mil-2',
        name: 'Damian Lillard',
        jerseyNumber: '0',
        position: 'PG',
        age: 36,
        experienceYears: 14,
        contract: {
          currentSalary: 54126450,
          nextSalary: 58456566,
          yearsRemaining: 2,
          guaranteedAmount: 112583016,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 39000000,
        tier: 'Star'
      },
      {
        id: 'mil-3',
        name: 'Khris Middleton',
        jerseyNumber: '22',
        position: 'SF',
        age: 35,
        experienceYears: 14,
        contract: {
          currentSalary: 34000000,
          yearsRemaining: 1,
          guaranteedAmount: 34000000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 22000000,
        tier: 'Starter'
      },
      {
        id: 'mil-4',
        name: 'Brook Lopez',
        jerseyNumber: '11',
        position: 'C',
        age: 38,
        experienceYears: 18,
        contract: {
          currentSalary: 12000000,
          yearsRemaining: 1,
          guaranteedAmount: 12000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 13000000,
        tier: 'Rotation'
      },
      {
        id: 'mil-5',
        name: 'Bobby Portis',
        jerseyNumber: '9',
        position: 'PF',
        age: 31,
        experienceYears: 11,
        contract: {
          currentSalary: 13445754,
          yearsRemaining: 1,
          guaranteedAmount: 13445754,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 14200000,
        tier: 'Rotation'
      },
      {
        id: 'mil-6',
        name: 'Pat Connaughton',
        jerseyNumber: '24',
        position: 'SG',
        age: 33,
        experienceYears: 11,
        contract: {
          currentSalary: 9423869,
          yearsRemaining: 1,
          guaranteedAmount: 9423869,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 6000000,
        tier: 'Rotation'
      },
      {
        id: 'mil-7',
        name: 'AJ Green',
        jerseyNumber: '20',
        position: 'SG',
        age: 27,
        experienceYears: 4,
        contract: {
          currentSalary: 2300000,
          yearsRemaining: 1,
          guaranteedAmount: 2300000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 6800000,
        tier: 'Developmental'
      },
      {
        id: 'mil-8',
        name: 'Andre Jackson Jr.',
        jerseyNumber: '44',
        position: 'SF',
        age: 24,
        experienceYears: 3,
        contract: {
          currentSalary: 2200000,
          yearsRemaining: 1,
          guaranteedAmount: 2200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 4000000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'cle',
    name: 'Cavaliers',
    city: 'Cleveland',
    abbreviation: 'CLE',
    conference: 'Eastern',
    division: 'Central',
    primaryColor: '#860038',
    secondaryColor: '#FDBB30',
    roster: [
      {
        id: 'cle-1',
        name: 'Donovan Mitchell',
        jerseyNumber: '45',
        position: 'SG',
        age: 30,
        experienceYears: 9,
        contract: {
          currentSalary: 46394100,
          nextSalary: 50105628,
          yearsRemaining: 3,
          guaranteedAmount: 150000000,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 52000000,
        tier: 'Star'
      },
      {
        id: 'cle-2',
        name: 'Darius Garland',
        jerseyNumber: '10',
        position: 'PG',
        age: 26,
        experienceYears: 7,
        contract: {
          currentSalary: 39446090,
          nextSalary: 42601777,
          yearsRemaining: 2,
          guaranteedAmount: 82047867,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 38000000,
        tier: 'Star'
      },
      {
        id: 'cle-3',
        name: 'Evan Mobley',
        jerseyNumber: '4',
        position: 'PF',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 41800000,
          nextSalary: 45144000,
          yearsRemaining: 4,
          guaranteedAmount: 181000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 46500000,
        tier: 'Star'
      },
      {
        id: 'cle-4',
        name: 'Jarrett Allen',
        jerseyNumber: '31',
        position: 'C',
        age: 28,
        experienceYears: 9,
        contract: {
          currentSalary: 30000000,
          nextSalary: 32400000,
          yearsRemaining: 3,
          guaranteedAmount: 95000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 31000000,
        tier: 'Starter'
      },
      {
        id: 'cle-5',
        name: 'Caris LeVert',
        jerseyNumber: '3',
        position: 'SG',
        age: 32,
        experienceYears: 10,
        contract: {
          currentSalary: 14500000,
          yearsRemaining: 1,
          guaranteedAmount: 14500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 13800000,
        tier: 'Rotation'
      },
      {
        id: 'cle-6',
        name: 'Max Strus',
        jerseyNumber: '1',
        position: 'SF',
        age: 30,
        experienceYears: 7,
        contract: {
          currentSalary: 15200000,
          yearsRemaining: 1,
          guaranteedAmount: 15200000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 14500000,
        tier: 'Starter'
      },
      {
        id: 'cle-7',
        name: 'Isaac Okoro',
        jerseyNumber: '35',
        position: 'SF',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 11000000,
          nextSalary: 11800000,
          yearsRemaining: 2,
          guaranteedAmount: 22800000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 12200000,
        tier: 'Rotation'
      },
      {
        id: 'cle-8',
        name: 'Dean Wade',
        jerseyNumber: '32',
        position: 'PF',
        age: 29,
        experienceYears: 7,
        contract: {
          currentSalary: 6600000,
          yearsRemaining: 1,
          guaranteedAmount: 6600000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 7500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'ind',
    name: 'Pacers',
    city: 'Indiana',
    abbreviation: 'IND',
    conference: 'Eastern',
    division: 'Central',
    primaryColor: '#002D62',
    secondaryColor: '#FDBB30',
    roster: [
      {
        id: 'ind-1',
        name: 'Tyrese Haliburton',
        jerseyNumber: '0',
        position: 'PG',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 42171000,
          nextSalary: 45544680,
          yearsRemaining: 3,
          guaranteedAmount: 133260360,
          contractType: 'Supermax',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 49000000,
        tier: 'Star'
      },
      {
        id: 'ind-2',
        name: 'Pascal Siakam',
        jerseyNumber: '43',
        position: 'PF',
        age: 32,
        experienceYears: 10,
        contract: {
          currentSalary: 45695000,
          nextSalary: 49350600,
          yearsRemaining: 2,
          guaranteedAmount: 95045600,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 43000000,
        tier: 'Star'
      },
      {
        id: 'ind-3',
        name: 'Myles Turner',
        jerseyNumber: '33',
        position: 'C',
        age: 30,
        experienceYears: 11,
        contract: {
          currentSalary: 24000000,
          nextSalary: 25500000,
          yearsRemaining: 2,
          guaranteedAmount: 49500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 26000000,
        tier: 'Starter'
      },
      {
        id: 'ind-4',
        name: 'Bennedict Mathurin',
        jerseyNumber: '00',
        position: 'SG',
        age: 24,
        experienceYears: 4,
        contract: {
          currentSalary: 12500000,
          nextSalary: 18000000,
          yearsRemaining: 4,
          guaranteedAmount: 75000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 22000000,
        tier: 'Rotation'
      },
      {
        id: 'ind-5',
        name: 'Andrew Nembhard',
        jerseyNumber: '2',
        position: 'PG',
        age: 26,
        experienceYears: 4,
        contract: {
          currentSalary: 18100000,
          nextSalary: 19548000,
          yearsRemaining: 3,
          guaranteedAmount: 58000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 20500000,
        tier: 'Starter'
      },
      {
        id: 'ind-6',
        name: 'Aaron Nesmith',
        jerseyNumber: '23',
        position: 'SF',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 11000000,
          yearsRemaining: 1,
          guaranteedAmount: 11000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 14000000,
        tier: 'Rotation'
      },
      {
        id: 'ind-7',
        name: 'Obi Toppin',
        jerseyNumber: '1',
        position: 'PF',
        age: 28,
        experienceYears: 6,
        contract: {
          currentSalary: 14500000,
          nextSalary: 15600000,
          yearsRemaining: 2,
          guaranteedAmount: 30100000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 13500000,
        tier: 'Rotation'
      },
      {
        id: 'ind-8',
        name: 'T.J. McConnell',
        jerseyNumber: '9',
        position: 'PG',
        age: 34,
        experienceYears: 11,
        contract: {
          currentSalary: 10200000,
          nextSalary: 10200000,
          yearsRemaining: 2,
          guaranteedAmount: 20400000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'ind-9',
        name: 'Jarace Walker',
        jerseyNumber: '25',
        position: 'PF',
        age: 23,
        experienceYears: 3,
        contract: {
          currentSalary: 6660000,
          nextSalary: 8500000,
          yearsRemaining: 2,
          guaranteedAmount: 15160000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 9500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'chi',
    name: 'Bulls',
    city: 'Chicago',
    abbreviation: 'CHI',
    conference: 'Eastern',
    division: 'Central',
    primaryColor: '#CE1141',
    secondaryColor: '#000000',
    roster: [
      {
        id: 'chi-1',
        name: 'Zach LaVine',
        jerseyNumber: '8',
        position: 'SG',
        age: 31,
        experienceYears: 12,
        contract: {
          currentSalary: 48967380,
          yearsRemaining: 1,
          guaranteedAmount: 48967380,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 31000000,
        tier: 'Star'
      },
      {
        id: 'chi-2',
        name: 'Nikola Vucevic',
        jerseyNumber: '9',
        position: 'C',
        age: 35,
        experienceYears: 15,
        contract: {
          currentSalary: 21481481,
          yearsRemaining: 1,
          guaranteedAmount: 21481481,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 16000000,
        tier: 'Starter'
      },
      {
        id: 'chi-3',
        name: 'Coby White',
        jerseyNumber: '0',
        position: 'PG',
        age: 26,
        experienceYears: 7,
        contract: {
          currentSalary: 22000000,
          nextSalary: 24000000,
          yearsRemaining: 3,
          guaranteedAmount: 70000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 27000000,
        tier: 'Starter'
      },
      {
        id: 'chi-4',
        name: 'Josh Giddey',
        jerseyNumber: '3',
        position: 'PG',
        age: 23,
        experienceYears: 5,
        contract: {
          currentSalary: 26000000,
          nextSalary: 28000000,
          yearsRemaining: 4,
          guaranteedAmount: 112000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 25000000,
        tier: 'Starter'
      },
      {
        id: 'chi-5',
        name: 'Patrick Williams',
        jerseyNumber: '44',
        position: 'PF',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 18000000,
          nextSalary: 19440000,
          yearsRemaining: 3,
          guaranteedAmount: 58000000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 14000000,
        tier: 'Starter'
      },
      {
        id: 'chi-6',
        name: 'Ayo Dosunmu',
        jerseyNumber: '12',
        position: 'SG',
        age: 26,
        experienceYears: 5,
        contract: {
          currentSalary: 7525000,
          yearsRemaining: 1,
          guaranteedAmount: 7525000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 12500000,
        tier: 'Rotation'
      },
      {
        id: 'chi-7',
        name: 'Matas Buzelis',
        jerseyNumber: '14',
        position: 'SF',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 5400000,
          nextSalary: 5650000,
          yearsRemaining: 3,
          guaranteedAmount: 17200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'chi-8',
        name: 'Jalen Smith',
        jerseyNumber: '25',
        position: 'PF',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 9000000,
          yearsRemaining: 1,
          guaranteedAmount: 9000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 8500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'det',
    name: 'Pistons',
    city: 'Detroit',
    abbreviation: 'DET',
    conference: 'Eastern',
    division: 'Central',
    primaryColor: '#1D42BA',
    secondaryColor: '#C8102E',
    roster: [
      {
        id: 'det-1',
        name: 'Cade Cunningham',
        jerseyNumber: '2',
        position: 'PG',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 41800000,
          nextSalary: 45144000,
          yearsRemaining: 4,
          guaranteedAmount: 181000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 48000000,
        tier: 'Star'
      },
      {
        id: 'det-2',
        name: 'Jaden Ivey',
        jerseyNumber: '23',
        position: 'SG',
        age: 24,
        experienceYears: 4,
        contract: {
          currentSalary: 15500000,
          nextSalary: 22000000,
          yearsRemaining: 4,
          guaranteedAmount: 88000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 24000000,
        tier: 'Starter'
      },
      {
        id: 'det-3',
        name: 'Tobias Harris',
        jerseyNumber: '12',
        position: 'PF',
        age: 34,
        experienceYears: 15,
        contract: {
          currentSalary: 26000000,
          yearsRemaining: 1,
          guaranteedAmount: 26000000,
          contractType: 'Cap Space',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 18500000,
        tier: 'Starter'
      },
      {
        id: 'det-4',
        name: 'Jalen Duren',
        jerseyNumber: '0',
        position: 'C',
        age: 22,
        experienceYears: 4,
        contract: {
          currentSalary: 14000000,
          nextSalary: 19000000,
          yearsRemaining: 4,
          guaranteedAmount: 76000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 23000000,
        tier: 'Rotation'
      },
      {
        id: 'det-5',
        name: 'Ausar Thompson',
        jerseyNumber: '9',
        position: 'SF',
        age: 23,
        experienceYears: 3,
        contract: {
          currentSalary: 8370000,
          nextSalary: 10600000,
          yearsRemaining: 2,
          guaranteedAmount: 18970000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 15500000,
        tier: 'Rotation'
      },
      {
        id: 'det-6',
        name: 'Ron Holland II',
        jerseyNumber: '00',
        position: 'SF',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 8400000,
          nextSalary: 8800000,
          yearsRemaining: 3,
          guaranteedAmount: 26800000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'det-7',
        name: 'Isaiah Stewart',
        jerseyNumber: '28',
        position: 'C',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 15000000,
          nextSalary: 15000000,
          yearsRemaining: 2,
          guaranteedAmount: 30000000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 13500000,
        tier: 'Starter'
      },
      {
        id: 'det-8',
        name: 'Malik Beasley',
        jerseyNumber: '5',
        position: 'SG',
        age: 29,
        experienceYears: 10,
        contract: {
          currentSalary: 6000000,
          yearsRemaining: 1,
          guaranteedAmount: 6000000,
          contractType: 'Bi-Annual',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 9000000,
        tier: 'Rotation'
      }
    ]
  },

  // ================= EASTERN CONFERENCE - SOUTHEAST =================
  {
    id: 'orl',
    name: 'Magic',
    city: 'Orlando',
    abbreviation: 'ORL',
    conference: 'Eastern',
    division: 'Southeast',
    primaryColor: '#0077C0',
    secondaryColor: '#C4CED4',
    roster: [
      {
        id: 'orl-1',
        name: 'Paolo Banchero',
        jerseyNumber: '5',
        position: 'PF',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 41800000,
          nextSalary: 45144000,
          yearsRemaining: 5,
          guaranteedAmount: 224000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 54000000,
        tier: 'Star'
      },
      {
        id: 'orl-2',
        name: 'Franz Wagner',
        jerseyNumber: '22',
        position: 'SF',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 41800000,
          nextSalary: 45144000,
          yearsRemaining: 4,
          guaranteedAmount: 181000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 46000000,
        tier: 'Star'
      },
      {
        id: 'orl-3',
        name: 'Jalen Suggs',
        jerseyNumber: '4',
        position: 'PG',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 31000000,
          nextSalary: 33480000,
          yearsRemaining: 4,
          guaranteedAmount: 130000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 33000000,
        tier: 'Starter'
      },
      {
        id: 'orl-4',
        name: 'Kentavious Caldwell-Pope',
        jerseyNumber: '3',
        position: 'SG',
        age: 33,
        experienceYears: 13,
        contract: {
          currentSalary: 21630000,
          yearsRemaining: 1,
          guaranteedAmount: 21630000,
          contractType: 'Cap Space',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 17500000,
        tier: 'Starter'
      },
      {
        id: 'orl-5',
        name: 'Jonathan Isaac',
        jerseyNumber: '1',
        position: 'PF',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 15000000,
          nextSalary: 15000000,
          yearsRemaining: 3,
          guaranteedAmount: 45000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 18500000,
        tier: 'Starter'
      },
      {
        id: 'orl-6',
        name: 'Wendell Carter Jr.',
        jerseyNumber: '34',
        position: 'C',
        age: 27,
        experienceYears: 8,
        contract: {
          currentSalary: 18100000,
          nextSalary: 19500000,
          yearsRemaining: 3,
          guaranteedAmount: 58000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 19000000,
        tier: 'Starter'
      },
      {
        id: 'orl-7',
        name: 'Cole Anthony',
        jerseyNumber: '50',
        position: 'PG',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 13100000,
          yearsRemaining: 1,
          guaranteedAmount: 13100000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'orl-8',
        name: 'Anthony Black',
        jerseyNumber: '0',
        position: 'PG',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 7970000,
          nextSalary: 10100000,
          yearsRemaining: 2,
          guaranteedAmount: 18070000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 12500000,
        tier: 'Rotation'
      },
      {
        id: 'orl-9',
        name: 'Tristan da Silva',
        jerseyNumber: '23',
        position: 'PF',
        age: 25,
        experienceYears: 2,
        contract: {
          currentSalary: 3600000,
          nextSalary: 3800000,
          yearsRemaining: 3,
          guaranteedAmount: 11500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 6500000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'mia',
    name: 'Heat',
    city: 'Miami',
    abbreviation: 'MIA',
    conference: 'Eastern',
    division: 'Southeast',
    primaryColor: '#98002E',
    secondaryColor: '#F9A01B',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'mia-1',
        name: 'Bam Adebayo',
        jerseyNumber: '13',
        position: 'C',
        age: 29,
        experienceYears: 9,
        contract: {
          currentSalary: 51200000,
          nextSalary: 55300000,
          yearsRemaining: 3,
          guaranteedAmount: 166000000,
          contractType: 'Supermax',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 53000000,
        tier: 'Star'
      },
      {
        id: 'mia-2',
        name: 'Jimmy Butler',
        jerseyNumber: '22',
        position: 'SF',
        age: 37,
        experienceYears: 15,
        contract: {
          currentSalary: 42000000,
          yearsRemaining: 1,
          guaranteedAmount: 42000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 33000000,
        tier: 'Star'
      },
      {
        id: 'mia-3',
        name: 'Tyler Herro',
        jerseyNumber: '14',
        position: 'SG',
        age: 26,
        experienceYears: 7,
        contract: {
          currentSalary: 33000000,
          yearsRemaining: 1,
          guaranteedAmount: 33000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 32000000,
        tier: 'Starter'
      },
      {
        id: 'mia-4',
        name: 'Terry Rozier',
        jerseyNumber: '2',
        position: 'PG',
        age: 32,
        experienceYears: 11,
        contract: {
          currentSalary: 26600000,
          yearsRemaining: 1,
          guaranteedAmount: 26600000,
          contractType: 'Bird Exception',
          optionType: 'Partially Guaranteed',
          isExpiring: true
        },
        estimatedMarketValue: 19000000,
        tier: 'Starter'
      },
      {
        id: 'mia-5',
        name: 'Duncan Robinson',
        jerseyNumber: '55',
        position: 'SF',
        age: 32,
        experienceYears: 8,
        contract: {
          currentSalary: 20000000,
          yearsRemaining: 1,
          guaranteedAmount: 10000000,
          contractType: 'Bird Exception',
          optionType: 'Partially Guaranteed',
          isExpiring: true
        },
        estimatedMarketValue: 14000000,
        tier: 'Starter'
      },
      {
        id: 'mia-6',
        name: 'Jaime Jaquez Jr.',
        jerseyNumber: '11',
        position: 'SF',
        age: 25,
        experienceYears: 3,
        contract: {
          currentSalary: 3860000,
          nextSalary: 5900000,
          yearsRemaining: 2,
          guaranteedAmount: 9760000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 16000000,
        tier: 'Developmental'
      },
      {
        id: 'mia-7',
        name: 'Kel\'el Ware',
        jerseyNumber: '7',
        position: 'C',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 4400000,
          nextSalary: 4600000,
          yearsRemaining: 3,
          guaranteedAmount: 14000000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 9000000,
        tier: 'Developmental'
      },
      {
        id: 'mia-8',
        name: 'Nikola Jovic',
        jerseyNumber: '5',
        position: 'PF',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 11000000,
          nextSalary: 12000000,
          yearsRemaining: 3,
          guaranteedAmount: 35000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 14500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'atl',
    name: 'Hawks',
    city: 'Atlanta',
    abbreviation: 'ATL',
    conference: 'Eastern',
    division: 'Southeast',
    primaryColor: '#C8102E',
    secondaryColor: '#FDB927',
    roster: [
      {
        id: 'atl-1',
        name: 'Trae Young',
        jerseyNumber: '11',
        position: 'PG',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 48967380,
          yearsRemaining: 1,
          guaranteedAmount: 48967380,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 45000000,
        tier: 'Star'
      },
      {
        id: 'atl-2',
        name: 'Jalen Johnson',
        jerseyNumber: '1',
        position: 'PF',
        age: 24,
        experienceYears: 5,
        contract: {
          currentSalary: 30000000,
          nextSalary: 32400000,
          yearsRemaining: 4,
          guaranteedAmount: 130000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 38000000,
        tier: 'Starter'
      },
      {
        id: 'atl-3',
        name: 'Zaccharie Risacher',
        jerseyNumber: '10',
        position: 'SF',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 13200000,
          nextSalary: 13800000,
          yearsRemaining: 3,
          guaranteedAmount: 42000000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 16500000,
        tier: 'Rotation'
      },
      {
        id: 'atl-4',
        name: 'Clint Capela',
        jerseyNumber: '15',
        position: 'C',
        age: 32,
        experienceYears: 12,
        contract: {
          currentSalary: 12000000,
          yearsRemaining: 1,
          guaranteedAmount: 12000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 13000000,
        tier: 'Rotation'
      },
      {
        id: 'atl-5',
        name: 'De\'Andre Hunter',
        jerseyNumber: '12',
        position: 'SF',
        age: 28,
        experienceYears: 7,
        contract: {
          currentSalary: 23300000,
          yearsRemaining: 1,
          guaranteedAmount: 23300000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 17000000,
        tier: 'Starter'
      },
      {
        id: 'atl-6',
        name: 'Bogdan Bogdanovic',
        jerseyNumber: '13',
        position: 'SG',
        age: 34,
        experienceYears: 9,
        contract: {
          currentSalary: 16000000,
          yearsRemaining: 1,
          guaranteedAmount: 16000000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 15000000,
        tier: 'Starter'
      },
      {
        id: 'atl-7',
        name: 'Dyson Daniels',
        jerseyNumber: '5',
        position: 'PG',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 16000000,
          nextSalary: 18000000,
          yearsRemaining: 4,
          guaranteedAmount: 72000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 24000000,
        tier: 'Starter'
      },
      {
        id: 'atl-8',
        name: 'Onyeka Okongwu',
        jerseyNumber: '17',
        position: 'C',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 15000000,
          nextSalary: 15000000,
          yearsRemaining: 2,
          guaranteedAmount: 30000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 16500000,
        tier: 'Starter'
      }
    ]
  },
  {
    id: 'cha',
    name: 'Hornets',
    city: 'Charlotte',
    abbreviation: 'CHA',
    conference: 'Eastern',
    division: 'Southeast',
    primaryColor: '#1D1160',
    secondaryColor: '#00788C',
    roster: [
      {
        id: 'cha-1',
        name: 'LaMelo Ball',
        jerseyNumber: '1',
        position: 'PG',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 38220000,
          nextSalary: 41277600,
          yearsRemaining: 3,
          guaranteedAmount: 124000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 44000000,
        tier: 'Star'
      },
      {
        id: 'cha-2',
        name: 'Brandon Miller',
        jerseyNumber: '24',
        position: 'SF',
        age: 23,
        experienceYears: 3,
        contract: {
          currentSalary: 11970000,
          nextSalary: 15150000,
          yearsRemaining: 2,
          guaranteedAmount: 27120000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 31000000,
        tier: 'Rotation'
      },
      {
        id: 'cha-3',
        name: 'Miles Bridges',
        jerseyNumber: '0',
        position: 'PF',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 25000000,
          yearsRemaining: 1,
          guaranteedAmount: 25000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 23000000,
        tier: 'Starter'
      },
      {
        id: 'cha-4',
        name: 'Grant Williams',
        jerseyNumber: '2',
        position: 'PF',
        age: 27,
        experienceYears: 7,
        contract: {
          currentSalary: 13800000,
          yearsRemaining: 1,
          guaranteedAmount: 13800000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 12000000,
        tier: 'Rotation'
      },
      {
        id: 'cha-5',
        name: 'Mark Williams',
        jerseyNumber: '5',
        position: 'C',
        age: 24,
        experienceYears: 4,
        contract: {
          currentSalary: 6280000,
          yearsRemaining: 1,
          guaranteedAmount: 6280000,
          contractType: 'Rookie Scale',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 15000000,
        tier: 'Rotation'
      },
      {
        id: 'cha-6',
        name: 'Josh Green',
        jerseyNumber: '10',
        position: 'SG',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 13700000,
          yearsRemaining: 1,
          guaranteedAmount: 13700000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 12500000,
        tier: 'Rotation'
      },
      {
        id: 'cha-7',
        name: 'Tre Mann',
        jerseyNumber: '23',
        position: 'PG',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 8500000,
          nextSalary: 9100000,
          yearsRemaining: 2,
          guaranteedAmount: 17600000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 12000000,
        tier: 'Rotation'
      },
      {
        id: 'cha-8',
        name: 'Nick Smith Jr.',
        jerseyNumber: '8',
        position: 'SG',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 2710000,
          nextSalary: 4900000,
          yearsRemaining: 2,
          guaranteedAmount: 7610000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 5000000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'was',
    name: 'Wizards',
    city: 'Washington',
    abbreviation: 'WAS',
    conference: 'Eastern',
    division: 'Southeast',
    primaryColor: '#002B5C',
    secondaryColor: '#E31837',
    roster: [
      {
        id: 'was-1',
        name: 'Jordan Poole',
        jerseyNumber: '13',
        position: 'SG',
        age: 27,
        experienceYears: 7,
        contract: {
          currentSalary: 34045455,
          yearsRemaining: 1,
          guaranteedAmount: 34045455,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 24000000,
        tier: 'Starter'
      },
      {
        id: 'was-2',
        name: 'Kyle Kuzma',
        jerseyNumber: '0',
        position: 'PF',
        age: 31,
        experienceYears: 9,
        contract: {
          currentSalary: 19431818,
          yearsRemaining: 1,
          guaranteedAmount: 19431818,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 20500000,
        tier: 'Starter'
      },
      {
        id: 'was-3',
        name: 'Alex Sarr',
        jerseyNumber: '20',
        position: 'C',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 11800000,
          nextSalary: 12400000,
          yearsRemaining: 3,
          guaranteedAmount: 37500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 16000000,
        tier: 'Rotation'
      },
      {
        id: 'was-4',
        name: 'Bilal Coulibaly',
        jerseyNumber: '00',
        position: 'SF',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 7275000,
          nextSalary: 9200000,
          yearsRemaining: 2,
          guaranteedAmount: 16475000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 18500000,
        tier: 'Rotation'
      },
      {
        id: 'was-5',
        name: 'Bub Carrington',
        jerseyNumber: '8',
        position: 'PG',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 4600000,
          nextSalary: 4800000,
          yearsRemaining: 3,
          guaranteedAmount: 14600000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 12000000,
        tier: 'Developmental'
      },
      {
        id: 'was-6',
        name: 'Jonas Valanciunas',
        jerseyNumber: '17',
        position: 'C',
        age: 34,
        experienceYears: 14,
        contract: {
          currentSalary: 10000000,
          yearsRemaining: 1,
          guaranteedAmount: 10000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 11500000,
        tier: 'Rotation'
      },
      {
        id: 'was-7',
        name: 'Corey Kispert',
        jerseyNumber: '24',
        position: 'SF',
        age: 27,
        experienceYears: 5,
        contract: {
          currentSalary: 13500000,
          nextSalary: 13500000,
          yearsRemaining: 3,
          guaranteedAmount: 40500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 13000000,
        tier: 'Rotation'
      },
      {
        id: 'was-8',
        name: 'Kyshawn George',
        jerseyNumber: '18',
        position: 'SG',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 2900000,
          nextSalary: 3050000,
          yearsRemaining: 3,
          guaranteedAmount: 9200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 6000000,
        tier: 'Developmental'
      }
    ]
  },

  // ================= WESTERN CONFERENCE - NORTHWEST =================
  {
    id: 'okc',
    name: 'Thunder',
    city: 'Oklahoma City',
    abbreviation: 'OKC',
    conference: 'Western',
    division: 'Northwest',
    primaryColor: '#007AC1',
    secondaryColor: '#EF3B24',
    isRepeaterTaxpayer: false,
    roster: [
      {
        id: 'okc-1',
        name: 'Shai Gilgeous-Alexander',
        jerseyNumber: '2',
        position: 'PG',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 54126450,
          nextSalary: 58456566,
          yearsRemaining: 4,
          guaranteedAmount: 250000000,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 65000000,
        tier: 'Star'
      },
      {
        id: 'okc-2',
        name: 'Chet Holmgren',
        jerseyNumber: '7',
        position: 'C',
        age: 24,
        experienceYears: 4,
        contract: {
          currentSalary: 38220000,
          nextSalary: 41277600,
          yearsRemaining: 5,
          guaranteedAmount: 205000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 47000000,
        tier: 'Star'
      },
      {
        id: 'okc-3',
        name: 'Jalen Williams',
        jerseyNumber: '8',
        position: 'SF',
        age: 25,
        experienceYears: 4,
        contract: {
          currentSalary: 38220000,
          nextSalary: 41277600,
          yearsRemaining: 5,
          guaranteedAmount: 205000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 44000000,
        tier: 'Star'
      },
      {
        id: 'okc-4',
        name: 'Isaiah Hartenstein',
        jerseyNumber: '55',
        position: 'C',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 28500000,
          yearsRemaining: 1,
          guaranteedAmount: 28500000,
          contractType: 'Cap Space',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 27000000,
        tier: 'Starter'
      },
      {
        id: 'okc-5',
        name: 'Alex Caruso',
        jerseyNumber: '9',
        position: 'SG',
        age: 32,
        experienceYears: 9,
        contract: {
          currentSalary: 20000000,
          nextSalary: 21600000,
          yearsRemaining: 3,
          guaranteedAmount: 64000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 23000000,
        tier: 'Starter'
      },
      {
        id: 'okc-6',
        name: 'Luguentz Dort',
        jerseyNumber: '5',
        position: 'SG',
        age: 27,
        experienceYears: 7,
        contract: {
          currentSalary: 17722222,
          yearsRemaining: 1,
          guaranteedAmount: 17722222,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 19500000,
        tier: 'Starter'
      },
      {
        id: 'okc-7',
        name: 'Cason Wallace',
        jerseyNumber: '22',
        position: 'PG',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 5820000,
          nextSalary: 7420000,
          yearsRemaining: 2,
          guaranteedAmount: 13240000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 15500000,
        tier: 'Rotation'
      },
      {
        id: 'okc-8',
        name: 'Aaron Wiggins',
        jerseyNumber: '21',
        position: 'SG',
        age: 27,
        experienceYears: 5,
        contract: {
          currentSalary: 11000000,
          nextSalary: 11880000,
          yearsRemaining: 3,
          guaranteedAmount: 35000000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 13800000,
        tier: 'Rotation'
      },
      {
        id: 'okc-9',
        name: 'Isaiah Joe',
        jerseyNumber: '11',
        position: 'SG',
        age: 27,
        experienceYears: 6,
        contract: {
          currentSalary: 12000000,
          nextSalary: 12960000,
          yearsRemaining: 3,
          guaranteedAmount: 38000000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 13500000,
        tier: 'Rotation'
      },
      {
        id: 'okc-10',
        name: 'Jaylin Williams',
        jerseyNumber: '6',
        position: 'C',
        age: 24,
        experienceYears: 4,
        contract: {
          currentSalary: 2300000,
          yearsRemaining: 1,
          guaranteedAmount: 2300000,
          contractType: 'Bird Exception',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 6500000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'den',
    name: 'Nuggets',
    city: 'Denver',
    abbreviation: 'DEN',
    conference: 'Western',
    division: 'Northwest',
    primaryColor: '#0E2240',
    secondaryColor: '#FEC524',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'den-1',
        name: 'Nikola Jokic',
        jerseyNumber: '15',
        position: 'C',
        age: 31,
        experienceYears: 11,
        contract: {
          currentSalary: 55224526,
          nextSalary: 59642488,
          yearsRemaining: 2,
          guaranteedAmount: 114867014,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 70000000,
        tier: 'Star'
      },
      {
        id: 'den-2',
        name: 'Jamal Murray',
        jerseyNumber: '27',
        position: 'PG',
        age: 29,
        experienceYears: 10,
        contract: {
          currentSalary: 46400000,
          nextSalary: 50112000,
          yearsRemaining: 3,
          guaranteedAmount: 150000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 40000000,
        tier: 'Star'
      },
      {
        id: 'den-3',
        name: 'Michael Porter Jr.',
        jerseyNumber: '1',
        position: 'SF',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 38332976,
          yearsRemaining: 1,
          guaranteedAmount: 38332976,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 29000000,
        tier: 'Star'
      },
      {
        id: 'den-4',
        name: 'Aaron Gordon',
        jerseyNumber: '32',
        position: 'PF',
        age: 31,
        experienceYears: 12,
        contract: {
          currentSalary: 33000000,
          nextSalary: 35640000,
          yearsRemaining: 3,
          guaranteedAmount: 105000000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 31000000,
        tier: 'Starter'
      },
      {
        id: 'den-5',
        name: 'Christian Braun',
        jerseyNumber: '0',
        position: 'SG',
        age: 25,
        experienceYears: 4,
        contract: {
          currentSalary: 14000000,
          nextSalary: 15500000,
          yearsRemaining: 4,
          guaranteedAmount: 62000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 20000000,
        tier: 'Rotation'
      },
      {
        id: 'den-6',
        name: 'Peyton Watson',
        jerseyNumber: '8',
        position: 'SF',
        age: 24,
        experienceYears: 4,
        contract: {
          currentSalary: 9500000,
          nextSalary: 10200000,
          yearsRemaining: 3,
          guaranteedAmount: 31000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 13000000,
        tier: 'Rotation'
      },
      {
        id: 'den-7',
        name: 'Julian Strawther',
        jerseyNumber: '3',
        position: 'SG',
        age: 24,
        experienceYears: 3,
        contract: {
          currentSalary: 2600000,
          nextSalary: 4800000,
          yearsRemaining: 2,
          guaranteedAmount: 7400000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 7500000,
        tier: 'Developmental'
      },
      {
        id: 'den-8',
        name: 'Dario Saric',
        jerseyNumber: '9',
        position: 'PF',
        age: 32,
        experienceYears: 10,
        contract: {
          currentSalary: 5400000,
          yearsRemaining: 1,
          guaranteedAmount: 5400000,
          contractType: 'Mid-Level',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 4800000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'min',
    name: 'Timberwolves',
    city: 'Minnesota',
    abbreviation: 'MIN',
    conference: 'Western',
    division: 'Northwest',
    primaryColor: '#0C2340',
    secondaryColor: '#236192',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'min-1',
        name: 'Anthony Edwards',
        jerseyNumber: '5',
        position: 'SG',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 41800000,
          nextSalary: 45144000,
          yearsRemaining: 4,
          guaranteedAmount: 181000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 62000000,
        tier: 'Star'
      },
      {
        id: 'min-2',
        name: 'Rudy Gobert',
        jerseyNumber: '27',
        position: 'C',
        age: 34,
        experienceYears: 13,
        contract: {
          currentSalary: 35000000,
          nextSalary: 37800000,
          yearsRemaining: 3,
          guaranteedAmount: 110000000,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 33000000,
        tier: 'Star'
      },
      {
        id: 'min-3',
        name: 'Julius Randle',
        jerseyNumber: '30',
        position: 'PF',
        age: 31,
        experienceYears: 12,
        contract: {
          currentSalary: 30935520,
          yearsRemaining: 1,
          guaranteedAmount: 30935520,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 28000000,
        tier: 'Starter'
      },
      {
        id: 'min-4',
        name: 'Jaden McDaniels',
        jerseyNumber: '3',
        position: 'SF',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 26000000,
          nextSalary: 28080000,
          yearsRemaining: 3,
          guaranteedAmount: 84000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 27500000,
        tier: 'Starter'
      },
      {
        id: 'min-5',
        name: 'Donte DiVincenzo',
        jerseyNumber: '0',
        position: 'SG',
        age: 29,
        experienceYears: 8,
        contract: {
          currentSalary: 11990000,
          yearsRemaining: 1,
          guaranteedAmount: 11990000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 18000000,
        tier: 'Rotation'
      },
      {
        id: 'min-6',
        name: 'Naz Reid',
        jerseyNumber: '11',
        position: 'C',
        age: 27,
        experienceYears: 7,
        contract: {
          currentSalary: 24000000,
          nextSalary: 25920000,
          yearsRemaining: 4,
          guaranteedAmount: 105000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 25000000,
        tier: 'Starter'
      },
      {
        id: 'min-7',
        name: 'Rob Dillingham',
        jerseyNumber: '4',
        position: 'PG',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 6500000,
          nextSalary: 6800000,
          yearsRemaining: 3,
          guaranteedAmount: 20600000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'min-8',
        name: 'Mike Conley',
        jerseyNumber: '10',
        position: 'PG',
        age: 39,
        experienceYears: 19,
        contract: {
          currentSalary: 10750000,
          yearsRemaining: 1,
          guaranteedAmount: 10750000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 8000000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'por',
    name: 'Trail Blazers',
    city: 'Portland',
    abbreviation: 'POR',
    conference: 'Western',
    division: 'Northwest',
    primaryColor: '#E03A3E',
    secondaryColor: '#000000',
    roster: [
      {
        id: 'por-1',
        name: 'Jerami Grant',
        jerseyNumber: '9',
        position: 'PF',
        age: 32,
        experienceYears: 12,
        contract: {
          currentSalary: 32000000,
          nextSalary: 34200000,
          yearsRemaining: 2,
          guaranteedAmount: 66200000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 21000000,
        tier: 'Starter'
      },
      {
        id: 'por-2',
        name: 'Deandre Ayton',
        jerseyNumber: '2',
        position: 'C',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 35550000,
          yearsRemaining: 1,
          guaranteedAmount: 35550000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 22000000,
        tier: 'Star'
      },
      {
        id: 'por-3',
        name: 'Scoot Henderson',
        jerseyNumber: '00',
        position: 'PG',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 10750000,
          nextSalary: 13600000,
          yearsRemaining: 2,
          guaranteedAmount: 24350000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 18500000,
        tier: 'Rotation'
      },
      {
        id: 'por-4',
        name: 'Shaedon Sharpe',
        jerseyNumber: '17',
        position: 'SG',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 18000000,
          nextSalary: 23000000,
          yearsRemaining: 4,
          guaranteedAmount: 95000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 25000000,
        tier: 'Starter'
      },
      {
        id: 'por-5',
        name: 'Anfernee Simons',
        jerseyNumber: '1',
        position: 'SG',
        age: 27,
        experienceYears: 8,
        contract: {
          currentSalary: 27680000,
          yearsRemaining: 1,
          guaranteedAmount: 27680000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 26000000,
        tier: 'Starter'
      },
      {
        id: 'por-6',
        name: 'Donovan Clingan',
        jerseyNumber: '23',
        position: 'C',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 7300000,
          nextSalary: 7600000,
          yearsRemaining: 3,
          guaranteedAmount: 23500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 14000000,
        tier: 'Rotation'
      },
      {
        id: 'por-7',
        name: 'Deni Avdija',
        jerseyNumber: '8',
        position: 'SF',
        age: 25,
        experienceYears: 6,
        contract: {
          currentSalary: 14375000,
          nextSalary: 13000000,
          yearsRemaining: 2,
          guaranteedAmount: 27375000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 17500000,
        tier: 'Rotation'
      },
      {
        id: 'por-8',
        name: 'Toumani Camara',
        jerseyNumber: '33',
        position: 'SF',
        age: 26,
        experienceYears: 3,
        contract: {
          currentSalary: 2200000,
          yearsRemaining: 1,
          guaranteedAmount: 2200000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 8000000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'uta',
    name: 'Jazz',
    city: 'Utah',
    abbreviation: 'UTA',
    conference: 'Western',
    division: 'Northwest',
    primaryColor: '#002B5C',
    secondaryColor: '#00471B',
    roster: [
      {
        id: 'uta-1',
        name: 'Lauri Markkanen',
        jerseyNumber: '23',
        position: 'PF',
        age: 29,
        experienceYears: 9,
        contract: {
          currentSalary: 46111111,
          nextSalary: 49799999,
          yearsRemaining: 3,
          guaranteedAmount: 145000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 45000000,
        tier: 'Star'
      },
      {
        id: 'uta-2',
        name: 'John Collins',
        jerseyNumber: '20',
        position: 'PF',
        age: 29,
        experienceYears: 9,
        contract: {
          currentSalary: 26580000,
          yearsRemaining: 1,
          guaranteedAmount: 26580000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 18000000,
        tier: 'Starter'
      },
      {
        id: 'uta-3',
        name: 'Collin Sexton',
        jerseyNumber: '2',
        position: 'SG',
        age: 27,
        experienceYears: 8,
        contract: {
          currentSalary: 19175000,
          yearsRemaining: 1,
          guaranteedAmount: 19175000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 21500000,
        tier: 'Starter'
      },
      {
        id: 'uta-4',
        name: 'Keyonte George',
        jerseyNumber: '3',
        position: 'PG',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 4270000,
          nextSalary: 6500000,
          yearsRemaining: 2,
          guaranteedAmount: 10770000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 16000000,
        tier: 'Developmental'
      },
      {
        id: 'uta-5',
        name: 'Walker Kessler',
        jerseyNumber: '24',
        position: 'C',
        age: 25,
        experienceYears: 4,
        contract: {
          currentSalary: 15000000,
          nextSalary: 18000000,
          yearsRemaining: 4,
          guaranteedAmount: 75000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 22000000,
        tier: 'Starter'
      },
      {
        id: 'uta-6',
        name: 'Taylor Hendricks',
        jerseyNumber: '0',
        position: 'PF',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 6130000,
          nextSalary: 7800000,
          yearsRemaining: 2,
          guaranteedAmount: 13930000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 8500000,
        tier: 'Rotation'
      },
      {
        id: 'uta-7',
        name: 'Cody Williams',
        jerseyNumber: '5',
        position: 'SF',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 5600000,
          nextSalary: 5900000,
          yearsRemaining: 3,
          guaranteedAmount: 17800000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 8000000,
        tier: 'Rotation'
      },
      {
        id: 'uta-8',
        name: 'Jordan Clarkson',
        jerseyNumber: '00',
        position: 'SG',
        age: 34,
        experienceYears: 12,
        contract: {
          currentSalary: 14300000,
          yearsRemaining: 1,
          guaranteedAmount: 14300000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 10500000,
        tier: 'Rotation'
      }
    ]
  },

  // ================= WESTERN CONFERENCE - PACIFIC =================
  {
    id: 'phx',
    name: 'Suns',
    city: 'Phoenix',
    abbreviation: 'PHX',
    conference: 'Western',
    division: 'Pacific',
    primaryColor: '#1D1160',
    secondaryColor: '#E56020',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'phx-1',
        name: 'Devin Booker',
        jerseyNumber: '1',
        position: 'SG',
        age: 29,
        experienceYears: 11,
        contract: {
          currentSalary: 57000000,
          nextSalary: 61560000,
          yearsRemaining: 2,
          guaranteedAmount: 118560000,
          contractType: 'Supermax',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 56000000,
        tier: 'Star'
      },
      {
        id: 'phx-2',
        name: 'Kevin Durant',
        jerseyNumber: '35',
        position: 'PF',
        age: 38,
        experienceYears: 18,
        contract: {
          currentSalary: 53280000,
          yearsRemaining: 1,
          guaranteedAmount: 53280000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 46000000,
        tier: 'Star'
      },
      {
        id: 'phx-3',
        name: 'Bradley Beal',
        jerseyNumber: '3',
        position: 'SG',
        age: 33,
        experienceYears: 14,
        contract: {
          currentSalary: 53666270,
          yearsRemaining: 1,
          guaranteedAmount: 53666270,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 27000000,
        tier: 'Star',
        notes: 'Includes full No-Trade Clause.'
      },
      {
        id: 'phx-4',
        name: 'Jusuf Nurkic',
        jerseyNumber: '20',
        position: 'C',
        age: 32,
        experienceYears: 12,
        contract: {
          currentSalary: 19375000,
          yearsRemaining: 1,
          guaranteedAmount: 19375000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 14500000,
        tier: 'Starter'
      },
      {
        id: 'phx-5',
        name: 'Grayson Allen',
        jerseyNumber: '8',
        position: 'SG',
        age: 30,
        experienceYears: 8,
        contract: {
          currentSalary: 16900000,
          nextSalary: 18252000,
          yearsRemaining: 2,
          guaranteedAmount: 35152000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 17200000,
        tier: 'Starter'
      },
      {
        id: 'phx-6',
        name: 'Royce O\'Neale',
        jerseyNumber: '00',
        position: 'SF',
        age: 33,
        experienceYears: 9,
        contract: {
          currentSalary: 10100000,
          nextSalary: 10908000,
          yearsRemaining: 2,
          guaranteedAmount: 21008000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 9500000,
        tier: 'Rotation'
      },
      {
        id: 'phx-7',
        name: 'Tyus Jones',
        jerseyNumber: '21',
        position: 'PG',
        age: 30,
        experienceYears: 11,
        contract: {
          currentSalary: 3600000,
          yearsRemaining: 1,
          guaranteedAmount: 3600000,
          contractType: 'Veteran Minimum',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 12000000,
        tier: 'Developmental'
      },
      {
        id: 'phx-8',
        name: 'Ryan Dunn',
        jerseyNumber: '0',
        position: 'SF',
        age: 23,
        experienceYears: 2,
        contract: {
          currentSalary: 2600000,
          nextSalary: 2750000,
          yearsRemaining: 3,
          guaranteedAmount: 8200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 9000000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'gsw',
    name: 'Warriors',
    city: 'Golden State',
    abbreviation: 'GSW',
    conference: 'Western',
    division: 'Pacific',
    primaryColor: '#1D428A',
    secondaryColor: '#FFC72C',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'gsw-1',
        name: 'Stephen Curry',
        jerseyNumber: '30',
        position: 'PG',
        age: 38,
        experienceYears: 17,
        contract: {
          currentSalary: 62587158,
          yearsRemaining: 1,
          guaranteedAmount: 62587158,
          contractType: 'Supermax',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 56000000,
        tier: 'Star'
      },
      {
        id: 'gsw-2',
        name: 'Andrew Wiggins',
        jerseyNumber: '22',
        position: 'SF',
        age: 31,
        experienceYears: 12,
        contract: {
          currentSalary: 28220000,
          yearsRemaining: 1,
          guaranteedAmount: 28220000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 22000000,
        tier: 'Starter'
      },
      {
        id: 'gsw-3',
        name: 'Draymond Green',
        jerseyNumber: '23',
        position: 'PF',
        age: 36,
        experienceYears: 14,
        contract: {
          currentSalary: 25890000,
          yearsRemaining: 1,
          guaranteedAmount: 25890000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 24000000,
        tier: 'Starter'
      },
      {
        id: 'gsw-4',
        name: 'Jonathan Kuminga',
        jerseyNumber: '00',
        position: 'PF',
        age: 23,
        experienceYears: 5,
        contract: {
          currentSalary: 28000000,
          nextSalary: 30240000,
          yearsRemaining: 4,
          guaranteedAmount: 125000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 30000000,
        tier: 'Starter'
      },
      {
        id: 'gsw-5',
        name: 'Buddy Hield',
        jerseyNumber: '7',
        position: 'SG',
        age: 33,
        experienceYears: 10,
        contract: {
          currentSalary: 9200000,
          nextSalary: 9800000,
          yearsRemaining: 2,
          guaranteedAmount: 19000000,
          contractType: 'Mid-Level',
          optionType: 'Partially Guaranteed',
          isExpiring: false
        },
        estimatedMarketValue: 12000000,
        tier: 'Rotation'
      },
      {
        id: 'gsw-6',
        name: 'De\'Anthony Melton',
        jerseyNumber: '8',
        position: 'SG',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 13000000,
          nextSalary: 14000000,
          yearsRemaining: 2,
          guaranteedAmount: 27000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 14500000,
        tier: 'Rotation'
      },
      {
        id: 'gsw-7',
        name: 'Brandin Podziemski',
        jerseyNumber: '2',
        position: 'SG',
        age: 23,
        experienceYears: 3,
        contract: {
          currentSalary: 3680000,
          nextSalary: 5670000,
          yearsRemaining: 2,
          guaranteedAmount: 9350000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 16500000,
        tier: 'Developmental'
      },
      {
        id: 'gsw-8',
        name: 'Moses Moody',
        jerseyNumber: '4',
        position: 'SG',
        age: 24,
        experienceYears: 5,
        contract: {
          currentSalary: 13000000,
          nextSalary: 13000000,
          yearsRemaining: 3,
          guaranteedAmount: 39000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 14000000,
        tier: 'Rotation'
      },
      {
        id: 'gsw-9',
        name: 'Trayce Jackson-Davis',
        jerseyNumber: '32',
        position: 'C',
        age: 26,
        experienceYears: 3,
        contract: {
          currentSalary: 2200000,
          yearsRemaining: 1,
          guaranteedAmount: 2200000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 8500000,
        tier: 'Developmental'
      }
    ]
  },
  {
    id: 'lal',
    name: 'Lakers',
    city: 'Los Angeles',
    abbreviation: 'LAL',
    conference: 'Western',
    division: 'Pacific',
    primaryColor: '#552583',
    secondaryColor: '#FDB927',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'lal-1',
        name: 'Anthony Davis',
        jerseyNumber: '3',
        position: 'C',
        age: 33,
        experienceYears: 14,
        contract: {
          currentSalary: 58458000,
          nextSalary: 63134640,
          yearsRemaining: 2,
          guaranteedAmount: 121592640,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 60000000,
        tier: 'Star'
      },
      {
        id: 'lal-2',
        name: 'LeBron James',
        jerseyNumber: '23',
        position: 'SF',
        age: 41,
        experienceYears: 23,
        contract: {
          currentSalary: 52627153,
          yearsRemaining: 1,
          guaranteedAmount: 52627153,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 45000000,
        tier: 'Star'
      },
      {
        id: 'lal-3',
        name: 'Austin Reaves',
        jerseyNumber: '15',
        position: 'SG',
        age: 28,
        experienceYears: 5,
        contract: {
          currentSalary: 14900000,
          yearsRemaining: 1,
          guaranteedAmount: 14900000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 26000000,
        tier: 'Rotation'
      },
      {
        id: 'lal-4',
        name: 'Rui Hachimura',
        jerseyNumber: '28',
        position: 'PF',
        age: 28,
        experienceYears: 7,
        contract: {
          currentSalary: 18260000,
          yearsRemaining: 1,
          guaranteedAmount: 18260000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 17000000,
        tier: 'Starter'
      },
      {
        id: 'lal-5',
        name: 'D\'Angelo Russell',
        jerseyNumber: '1',
        position: 'PG',
        age: 30,
        experienceYears: 11,
        contract: {
          currentSalary: 19500000,
          yearsRemaining: 1,
          guaranteedAmount: 19500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 18500000,
        tier: 'Starter'
      },
      {
        id: 'lal-6',
        name: 'Dalton Knecht',
        jerseyNumber: '4',
        position: 'SG',
        age: 25,
        experienceYears: 2,
        contract: {
          currentSalary: 4000000,
          nextSalary: 4200000,
          yearsRemaining: 3,
          guaranteedAmount: 12800000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 12500000,
        tier: 'Developmental'
      },
      {
        id: 'lal-7',
        name: 'Jarred Vanderbilt',
        jerseyNumber: '2',
        position: 'PF',
        age: 27,
        experienceYears: 8,
        contract: {
          currentSalary: 12430000,
          nextSalary: 13300000,
          yearsRemaining: 2,
          guaranteedAmount: 25730000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'lal-8',
        name: 'Gabe Vincent',
        jerseyNumber: '7',
        position: 'PG',
        age: 30,
        experienceYears: 7,
        contract: {
          currentSalary: 11500000,
          yearsRemaining: 1,
          guaranteedAmount: 11500000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 7000000,
        tier: 'Rotation'
      },
      {
        id: 'lal-9',
        name: 'Max Christie',
        jerseyNumber: '10',
        position: 'SG',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 7800000,
          nextSalary: 8300000,
          yearsRemaining: 2,
          guaranteedAmount: 16100000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 8500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'lac',
    name: 'Clippers',
    city: 'LA',
    abbreviation: 'LAC',
    conference: 'Western',
    division: 'Pacific',
    primaryColor: '#C8102E',
    secondaryColor: '#1D428A',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'lac-1',
        name: 'Kawhi Leonard',
        jerseyNumber: '2',
        position: 'SF',
        age: 35,
        experienceYears: 15,
        contract: {
          currentSalary: 50300000,
          yearsRemaining: 1,
          guaranteedAmount: 50300000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 42000000,
        tier: 'Star'
      },
      {
        id: 'lac-2',
        name: 'James Harden',
        jerseyNumber: '1',
        position: 'PG',
        age: 37,
        experienceYears: 17,
        contract: {
          currentSalary: 36000000,
          yearsRemaining: 1,
          guaranteedAmount: 36000000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 33000000,
        tier: 'Star'
      },
      {
        id: 'lac-3',
        name: 'Norman Powell',
        jerseyNumber: '24',
        position: 'SG',
        age: 33,
        experienceYears: 11,
        contract: {
          currentSalary: 20480000,
          yearsRemaining: 1,
          guaranteedAmount: 20480000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 22000000,
        tier: 'Starter'
      },
      {
        id: 'lac-4',
        name: 'Ivica Zubac',
        jerseyNumber: '40',
        position: 'C',
        age: 29,
        experienceYears: 10,
        contract: {
          currentSalary: 21000000,
          nextSalary: 22680000,
          yearsRemaining: 3,
          guaranteedAmount: 66000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 24500000,
        tier: 'Starter'
      },
      {
        id: 'lac-5',
        name: 'Terance Mann',
        jerseyNumber: '14',
        position: 'SG',
        age: 29,
        experienceYears: 7,
        contract: {
          currentSalary: 15500000,
          nextSalary: 15500000,
          yearsRemaining: 2,
          guaranteedAmount: 31000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 14000000,
        tier: 'Starter'
      },
      {
        id: 'lac-6',
        name: 'Derrick Jones Jr.',
        jerseyNumber: '55',
        position: 'SF',
        age: 29,
        experienceYears: 10,
        contract: {
          currentSalary: 10000000,
          nextSalary: 10000000,
          yearsRemaining: 2,
          guaranteedAmount: 20000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 11500000,
        tier: 'Rotation'
      },
      {
        id: 'lac-7',
        name: 'Kris Dunn',
        jerseyNumber: '8',
        position: 'PG',
        age: 32,
        experienceYears: 10,
        contract: {
          currentSalary: 5400000,
          nextSalary: 5400000,
          yearsRemaining: 2,
          guaranteedAmount: 10800000,
          contractType: 'Bi-Annual',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 6500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'sac',
    name: 'Kings',
    city: 'Sacramento',
    abbreviation: 'SAC',
    conference: 'Western',
    division: 'Pacific',
    primaryColor: '#5A2D81',
    secondaryColor: '#63727A',
    roster: [
      {
        id: 'sac-1',
        name: 'De\'Aaron Fox',
        jerseyNumber: '5',
        position: 'PG',
        age: 28,
        experienceYears: 9,
        contract: {
          currentSalary: 37096620,
          yearsRemaining: 1,
          guaranteedAmount: 37096620,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 47000000,
        tier: 'Star'
      },
      {
        id: 'sac-2',
        name: 'Domantas Sabonis',
        jerseyNumber: '10',
        position: 'C',
        age: 30,
        experienceYears: 10,
        contract: {
          currentSalary: 43500000,
          nextSalary: 47000000,
          yearsRemaining: 2,
          guaranteedAmount: 90500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 44000000,
        tier: 'Star'
      },
      {
        id: 'sac-3',
        name: 'DeMar DeRozan',
        jerseyNumber: '11',
        position: 'SF',
        age: 37,
        experienceYears: 17,
        contract: {
          currentSalary: 25000000,
          yearsRemaining: 1,
          guaranteedAmount: 10000000,
          contractType: 'Bird Exception',
          optionType: 'Partially Guaranteed',
          isExpiring: true
        },
        estimatedMarketValue: 23000000,
        tier: 'Starter'
      },
      {
        id: 'sac-4',
        name: 'Malik Monk',
        jerseyNumber: '0',
        position: 'SG',
        age: 28,
        experienceYears: 9,
        contract: {
          currentSalary: 18800000,
          nextSalary: 20300000,
          yearsRemaining: 2,
          guaranteedAmount: 39100000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 20500000,
        tier: 'Starter'
      },
      {
        id: 'sac-5',
        name: 'Keegan Murray',
        jerseyNumber: '13',
        position: 'PF',
        age: 26,
        experienceYears: 4,
        contract: {
          currentSalary: 11140000,
          yearsRemaining: 1,
          guaranteedAmount: 11140000,
          contractType: 'Rookie Scale',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 25000000,
        tier: 'Rotation'
      },
      {
        id: 'sac-6',
        name: 'Kevin Huerter',
        jerseyNumber: '9',
        position: 'SG',
        age: 28,
        experienceYears: 8,
        contract: {
          currentSalary: 17990000,
          yearsRemaining: 1,
          guaranteedAmount: 17990000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 14000000,
        tier: 'Starter'
      },
      {
        id: 'sac-7',
        name: 'Keon Ellis',
        jerseyNumber: '23',
        position: 'SG',
        age: 26,
        experienceYears: 4,
        contract: {
          currentSalary: 2300000,
          yearsRemaining: 1,
          guaranteedAmount: 2300000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 8000000,
        tier: 'Developmental'
      },
      {
        id: 'sac-8',
        name: 'Trey Lyles',
        jerseyNumber: '41',
        position: 'PF',
        age: 30,
        experienceYears: 11,
        contract: {
          currentSalary: 8000000,
          yearsRemaining: 1,
          guaranteedAmount: 8000000,
          contractType: 'Bi-Annual',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 8500000,
        tier: 'Rotation'
      }
    ]
  },

  // ================= WESTERN CONFERENCE - SOUTHWEST =================
  {
    id: 'dal',
    name: 'Mavericks',
    city: 'Dallas',
    abbreviation: 'DAL',
    conference: 'Western',
    division: 'Southwest',
    primaryColor: '#00538C',
    secondaryColor: '#002B5E',
    isRepeaterTaxpayer: true,
    roster: [
      {
        id: 'dal-1',
        name: 'Luka Doncic',
        jerseyNumber: '77',
        position: 'PG',
        age: 27,
        experienceYears: 8,
        contract: {
          currentSalary: 48967380,
          yearsRemaining: 1,
          guaranteedAmount: 48967380,
          contractType: 'Supermax',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 68000000,
        tier: 'Star',
        notes: 'Eligible for historic 5-year supermax extension.'
      },
      {
        id: 'dal-2',
        name: 'Kyrie Irving',
        jerseyNumber: '11',
        position: 'PG',
        age: 34,
        experienceYears: 15,
        contract: {
          currentSalary: 43962963,
          yearsRemaining: 1,
          guaranteedAmount: 43962963,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: true
        },
        estimatedMarketValue: 42000000,
        tier: 'Star'
      },
      {
        id: 'dal-3',
        name: 'Klay Thompson',
        jerseyNumber: '31',
        position: 'SG',
        age: 36,
        experienceYears: 15,
        contract: {
          currentSalary: 16800000,
          yearsRemaining: 1,
          guaranteedAmount: 16800000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 16000000,
        tier: 'Starter'
      },
      {
        id: 'dal-4',
        name: 'P.J. Washington',
        jerseyNumber: '25',
        position: 'PF',
        age: 28,
        experienceYears: 7,
        contract: {
          currentSalary: 14152174,
          yearsRemaining: 1,
          guaranteedAmount: 14152174,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 18000000,
        tier: 'Rotation'
      },
      {
        id: 'dal-5',
        name: 'Daniel Gafford',
        jerseyNumber: '21',
        position: 'C',
        age: 28,
        experienceYears: 7,
        contract: {
          currentSalary: 14385652,
          yearsRemaining: 1,
          guaranteedAmount: 14385652,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 17500000,
        tier: 'Rotation'
      },
      {
        id: 'dal-6',
        name: 'Dereck Lively II',
        jerseyNumber: '2',
        position: 'C',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 5300000,
          nextSalary: 7200000,
          yearsRemaining: 2,
          guaranteedAmount: 12500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 24000000,
        tier: 'Rotation'
      },
      {
        id: 'dal-7',
        name: 'Naji Marshall',
        jerseyNumber: '13',
        position: 'SF',
        age: 28,
        experienceYears: 6,
        contract: {
          currentSalary: 9000000,
          yearsRemaining: 1,
          guaranteedAmount: 9000000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      },
      {
        id: 'dal-8',
        name: 'Maxi Kleber',
        jerseyNumber: '42',
        position: 'PF',
        age: 34,
        experienceYears: 9,
        contract: {
          currentSalary: 11000000,
          yearsRemaining: 1,
          guaranteedAmount: 11000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 7000000,
        tier: 'Rotation'
      },
      {
        id: 'dal-9',
        name: 'Quentin Grimes',
        jerseyNumber: '5',
        position: 'SG',
        age: 26,
        experienceYears: 5,
        contract: {
          currentSalary: 6500000,
          nextSalary: 7000000,
          yearsRemaining: 2,
          guaranteedAmount: 13500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 9500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'hou',
    name: 'Rockets',
    city: 'Houston',
    abbreviation: 'HOU',
    conference: 'Western',
    division: 'Southwest',
    primaryColor: '#CE1141',
    secondaryColor: '#000000',
    roster: [
      {
        id: 'hou-1',
        name: 'Alperen Sengun',
        jerseyNumber: '28',
        position: 'C',
        age: 24,
        experienceYears: 5,
        contract: {
          currentSalary: 37500000,
          nextSalary: 40500000,
          yearsRemaining: 4,
          guaranteedAmount: 165000000,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 46000000,
        tier: 'Star'
      },
      {
        id: 'hou-2',
        name: 'Jalen Green',
        jerseyNumber: '4',
        position: 'SG',
        age: 24,
        experienceYears: 5,
        contract: {
          currentSalary: 36000000,
          nextSalary: 38880000,
          yearsRemaining: 2,
          guaranteedAmount: 74880000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 33000000,
        tier: 'Star'
      },
      {
        id: 'hou-3',
        name: 'Fred VanVleet',
        jerseyNumber: '5',
        position: 'PG',
        age: 32,
        experienceYears: 10,
        contract: {
          currentSalary: 25000000,
          yearsRemaining: 1,
          guaranteedAmount: 25000000,
          contractType: 'Cap Space',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 24000000,
        tier: 'Starter'
      },
      {
        id: 'hou-4',
        name: 'Amen Thompson',
        jerseyNumber: '1',
        position: 'PG',
        age: 23,
        experienceYears: 3,
        contract: {
          currentSalary: 9700000,
          nextSalary: 12250000,
          yearsRemaining: 2,
          guaranteedAmount: 21950000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 28000000,
        tier: 'Rotation'
      },
      {
        id: 'hou-5',
        name: 'Jabari Smith Jr.',
        jerseyNumber: '10',
        position: 'PF',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 16000000,
          nextSalary: 22000000,
          yearsRemaining: 4,
          guaranteedAmount: 85000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 24500000,
        tier: 'Starter'
      },
      {
        id: 'hou-6',
        name: 'Dillon Brooks',
        jerseyNumber: '9',
        position: 'SF',
        age: 30,
        experienceYears: 9,
        contract: {
          currentSalary: 21124110,
          yearsRemaining: 1,
          guaranteedAmount: 21124110,
          contractType: 'Cap Space',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 18000000,
        tier: 'Starter'
      },
      {
        id: 'hou-7',
        name: 'Tari Eason',
        jerseyNumber: '17',
        position: 'PF',
        age: 25,
        experienceYears: 4,
        contract: {
          currentSalary: 14000000,
          nextSalary: 15500000,
          yearsRemaining: 4,
          guaranteedAmount: 64000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 19500000,
        tier: 'Rotation'
      },
      {
        id: 'hou-8',
        name: 'Reed Sheppard',
        jerseyNumber: '15',
        position: 'PG',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 10100000,
          nextSalary: 10600000,
          yearsRemaining: 3,
          guaranteedAmount: 32000000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 13000000,
        tier: 'Rotation'
      },
      {
        id: 'hou-9',
        name: 'Steven Adams',
        jerseyNumber: '12',
        position: 'C',
        age: 33,
        experienceYears: 13,
        contract: {
          currentSalary: 6500000,
          yearsRemaining: 1,
          guaranteedAmount: 6500000,
          contractType: 'Bi-Annual',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 7000000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'sas',
    name: 'Spurs',
    city: 'San Antonio',
    abbreviation: 'SAS',
    conference: 'Western',
    division: 'Southwest',
    primaryColor: '#C4CED4',
    secondaryColor: '#000000',
    roster: [
      {
        id: 'sas-1',
        name: 'Victor Wembanyama',
        jerseyNumber: '1',
        position: 'C',
        age: 22,
        experienceYears: 3,
        contract: {
          currentSalary: 13380000,
          nextSalary: 16900000,
          yearsRemaining: 2,
          guaranteedAmount: 30280000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 69000000,
        tier: 'Rotation',
        notes: 'Enormous rookie-scale contract surplus value (+ $55.6M).'
      },
      {
        id: 'sas-2',
        name: 'Devin Vassell',
        jerseyNumber: '24',
        position: 'SG',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 27000000,
          nextSalary: 27000000,
          yearsRemaining: 3,
          guaranteedAmount: 81000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 27500000,
        tier: 'Starter'
      },
      {
        id: 'sas-3',
        name: 'Chris Paul',
        jerseyNumber: '3',
        position: 'PG',
        age: 41,
        experienceYears: 21,
        contract: {
          currentSalary: 11000000,
          yearsRemaining: 1,
          guaranteedAmount: 11000000,
          contractType: 'Cap Space',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 9000000,
        tier: 'Rotation'
      },
      {
        id: 'sas-4',
        name: 'Harrison Barnes',
        jerseyNumber: '40',
        position: 'SF',
        age: 34,
        experienceYears: 14,
        contract: {
          currentSalary: 18000000,
          yearsRemaining: 1,
          guaranteedAmount: 18000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 15000000,
        tier: 'Starter'
      },
      {
        id: 'sas-5',
        name: 'Stephon Castle',
        jerseyNumber: '5',
        position: 'PG',
        age: 21,
        experienceYears: 2,
        contract: {
          currentSalary: 9570000,
          nextSalary: 10000000,
          yearsRemaining: 3,
          guaranteedAmount: 30500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 19000000,
        tier: 'Rotation'
      },
      {
        id: 'sas-6',
        name: 'Jeremy Sochan',
        jerseyNumber: '10',
        position: 'PF',
        age: 23,
        experienceYears: 4,
        contract: {
          currentSalary: 18000000,
          nextSalary: 21000000,
          yearsRemaining: 4,
          guaranteedAmount: 82000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 20000000,
        tier: 'Starter'
      },
      {
        id: 'sas-7',
        name: 'Keldon Johnson',
        jerseyNumber: '0',
        position: 'SF',
        age: 26,
        experienceYears: 7,
        contract: {
          currentSalary: 17500000,
          yearsRemaining: 1,
          guaranteedAmount: 17500000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 16500000,
        tier: 'Starter'
      },
      {
        id: 'sas-8',
        name: 'Zach Collins',
        jerseyNumber: '23',
        position: 'C',
        age: 28,
        experienceYears: 9,
        contract: {
          currentSalary: 16740000,
          yearsRemaining: 1,
          guaranteedAmount: 16740000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 12000000,
        tier: 'Starter'
      },
      {
        id: 'sas-9',
        name: 'Tre Jones',
        jerseyNumber: '33',
        position: 'PG',
        age: 26,
        experienceYears: 6,
        contract: {
          currentSalary: 9500000,
          nextSalary: 10200000,
          yearsRemaining: 2,
          guaranteedAmount: 19700000,
          contractType: 'Mid-Level',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'mem',
    name: 'Grizzlies',
    city: 'Memphis',
    abbreviation: 'MEM',
    conference: 'Western',
    division: 'Southwest',
    primaryColor: '#5D76A9',
    secondaryColor: '#12173F',
    roster: [
      {
        id: 'mem-1',
        name: 'Ja Morant',
        jerseyNumber: '12',
        position: 'PG',
        age: 27,
        experienceYears: 7,
        contract: {
          currentSalary: 42171000,
          nextSalary: 45544680,
          yearsRemaining: 2,
          guaranteedAmount: 87715680,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 48000000,
        tier: 'Star'
      },
      {
        id: 'mem-2',
        name: 'Jaren Jackson Jr.',
        jerseyNumber: '13',
        position: 'PF',
        age: 27,
        experienceYears: 8,
        contract: {
          currentSalary: 35000000,
          nextSalary: 37800000,
          yearsRemaining: 3,
          guaranteedAmount: 112000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 41000000,
        tier: 'Star'
      },
      {
        id: 'mem-3',
        name: 'Desmond Bane',
        jerseyNumber: '22',
        position: 'SG',
        age: 28,
        experienceYears: 6,
        contract: {
          currentSalary: 37000000,
          nextSalary: 39960000,
          yearsRemaining: 3,
          guaranteedAmount: 119000000,
          contractType: 'Max',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 36000000,
        tier: 'Star'
      },
      {
        id: 'mem-4',
        name: 'Marcus Smart',
        jerseyNumber: '36',
        position: 'PG',
        age: 32,
        experienceYears: 12,
        contract: {
          currentSalary: 21580000,
          yearsRemaining: 1,
          guaranteedAmount: 21580000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 16500000,
        tier: 'Starter'
      },
      {
        id: 'mem-5',
        name: 'Zach Edey',
        jerseyNumber: '14',
        position: 'C',
        age: 24,
        experienceYears: 2,
        contract: {
          currentSalary: 6050000,
          nextSalary: 6350000,
          yearsRemaining: 3,
          guaranteedAmount: 19200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 15500000,
        tier: 'Rotation'
      },
      {
        id: 'mem-6',
        name: 'Vince Williams Jr.',
        jerseyNumber: '5',
        position: 'SF',
        age: 26,
        experienceYears: 4,
        contract: {
          currentSalary: 2400000,
          yearsRemaining: 1,
          guaranteedAmount: 2400000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: true
        },
        estimatedMarketValue: 12000000,
        tier: 'Developmental'
      },
      {
        id: 'mem-7',
        name: 'GG Jackson',
        jerseyNumber: '45',
        position: 'PF',
        age: 21,
        experienceYears: 3,
        contract: {
          currentSalary: 2200000,
          nextSalary: 2400000,
          yearsRemaining: 2,
          guaranteedAmount: 4600000,
          contractType: 'Veteran Minimum',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 11000000,
        tier: 'Developmental'
      },
      {
        id: 'mem-8',
        name: 'Santi Aldama',
        jerseyNumber: '7',
        position: 'PF',
        age: 25,
        experienceYears: 5,
        contract: {
          currentSalary: 12000000,
          nextSalary: 13000000,
          yearsRemaining: 3,
          guaranteedAmount: 38000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 13500000,
        tier: 'Rotation'
      }
    ]
  },
  {
    id: 'nop',
    name: 'Pelicans',
    city: 'New Orleans',
    abbreviation: 'NOP',
    conference: 'Western',
    division: 'Southwest',
    primaryColor: '#0C2340',
    secondaryColor: '#C8102E',
    roster: [
      {
        id: 'nop-1',
        name: 'Zion Williamson',
        jerseyNumber: '1',
        position: 'PF',
        age: 26,
        experienceYears: 7,
        contract: {
          currentSalary: 42171000,
          nextSalary: 45544680,
          yearsRemaining: 2,
          guaranteedAmount: 87715680,
          contractType: 'Max',
          optionType: 'Non-Guaranteed',
          isExpiring: false,
          notes: 'Contract guarantees tied to weight and games played checkpoints.'
        },
        estimatedMarketValue: 46000000,
        tier: 'Star'
      },
      {
        id: 'nop-2',
        name: 'Brandon Ingram',
        jerseyNumber: '14',
        position: 'SF',
        age: 29,
        experienceYears: 10,
        contract: {
          currentSalary: 38000000,
          nextSalary: 41000000,
          yearsRemaining: 3,
          guaranteedAmount: 122000000,
          contractType: 'Max',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 36000000,
        tier: 'Star'
      },
      {
        id: 'nop-3',
        name: 'Dejounte Murray',
        jerseyNumber: '5',
        position: 'PG',
        age: 30,
        experienceYears: 9,
        contract: {
          currentSalary: 31200000,
          nextSalary: 33700000,
          yearsRemaining: 2,
          guaranteedAmount: 64900000,
          contractType: 'Bird Exception',
          optionType: 'Player Option',
          isExpiring: false
        },
        estimatedMarketValue: 31500000,
        tier: 'Starter'
      },
      {
        id: 'nop-4',
        name: 'CJ McCollum',
        jerseyNumber: '3',
        position: 'SG',
        age: 35,
        experienceYears: 13,
        contract: {
          currentSalary: 30666666,
          yearsRemaining: 1,
          guaranteedAmount: 30666666,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 21000000,
        tier: 'Starter'
      },
      {
        id: 'nop-5',
        name: 'Trey Murphy III',
        jerseyNumber: '25',
        position: 'SF',
        age: 26,
        experienceYears: 5,
        contract: {
          currentSalary: 28000000,
          nextSalary: 30240000,
          yearsRemaining: 4,
          guaranteedAmount: 120000000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: false
        },
        estimatedMarketValue: 31000000,
        tier: 'Starter'
      },
      {
        id: 'nop-6',
        name: 'Herbert Jones',
        jerseyNumber: '2',
        position: 'SF',
        age: 28,
        experienceYears: 5,
        contract: {
          currentSalary: 13900000,
          yearsRemaining: 1,
          guaranteedAmount: 13900000,
          contractType: 'Bird Exception',
          optionType: 'None',
          isExpiring: true
        },
        estimatedMarketValue: 22000000,
        tier: 'Rotation'
      },
      {
        id: 'nop-7',
        name: 'Jordan Hawkins',
        jerseyNumber: '24',
        position: 'SG',
        age: 24,
        experienceYears: 3,
        contract: {
          currentSalary: 4500000,
          nextSalary: 6700000,
          yearsRemaining: 2,
          guaranteedAmount: 11200000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 9500000,
        tier: 'Developmental'
      },
      {
        id: 'nop-8',
        name: 'Yves Missi',
        jerseyNumber: '21',
        position: 'C',
        age: 22,
        experienceYears: 2,
        contract: {
          currentSalary: 3300000,
          nextSalary: 3500000,
          yearsRemaining: 3,
          guaranteedAmount: 10500000,
          contractType: 'Rookie Scale',
          optionType: 'Team Option',
          isExpiring: false
        },
        estimatedMarketValue: 8000000,
        tier: 'Developmental'
      }
    ]
  }
];
