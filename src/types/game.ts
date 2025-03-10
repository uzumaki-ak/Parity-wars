export interface Player {
  id: string
  name: string
  choice: 'heads' | 'tails' | null
  isEliminated: boolean
}

export interface GameResults {
  majority: 'heads' | 'tails'
  minority: 'heads' | 'tails'
}

export interface RoundData {
  round: number
  players: Player[]
}

export interface ResultsData {
  results: GameResults
  players: Player[]
}