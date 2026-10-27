export type HighlightCategory =
  | 'dunks'
  | 'layups'
  | 'threes'
  | 'mid_range'
  | 'blocks'
  | 'steals'
  | 'assists'
  | 'rebounds'
  | 'clutch'
  | 'handles';

export interface HighlightClip {
  id: string;
  title: string;
  category: HighlightCategory;
  opponent: string;
  year: string;
  description: string;
  youtubeVideoId: string; // YouTube video ID or search fallback
  timestamp?: number; // Start seconds
  badge?: string; // e.g. "Game 7", "Posterizer", "Buzzer Beater", "Ankle Breaker"
}

export interface BestGame {
  id: string;
  date: string;
  matchup: string; // e.g. "vs. Toronto Raptors (W 122-104)"
  pts: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  fgm: string; // e.g. "28-46 FG"
  threePm?: string; // e.g. "7-13 3PT"
  ftm?: string; // e.g. "18-20 FT"
  gameScore?: number;
  headline: string;
  significance: string;
  clutchMoments: string;
  youtubeVideoId?: string;
}

export interface Accolades {
  championships: number;
  finalsMvp: number;
  mvps: number;
  allStar: number;
  allNbaFirst: number;
  dpoy: number;
  scoringTitles: number;
  assistTitles: number;
  reboundTitles: number;
  hallOfFame: boolean;
  notableAwards: string[];
}

export interface TraditionalStats {
  gamesPlayed: number;
  ppg: number;
  rpg: number;
  apg: number;
  spg: number;
  bpg: number;
  fgPct: number;
  threePtPct: number;
  ftPct: number;
  totalPoints: number;
  totalRebounds: number;
  totalAssists: number;
}

export interface AdvancedStats {
  per: number; // Player Efficiency Rating (League avg ~ 15.0)
  tsPct: number; // True Shooting %
  eFgPct: number; // Effective Field Goal %
  winShares: number; // Total Win Shares
  wsPer48: number; // Win Shares per 48 min (League avg ~ .100)
  bpm: number; // Box Plus/Minus
  obpm: number; // Offensive BPM
  dbpm: number; // Defensive BPM
  vorp: number; // Value Over Replacement Player
  usgPct: number; // Usage Rate %
  ortg: number; // Offensive Rating (Pts scored per 100 poss)
  drtg: number; // Defensive Rating (Pts allowed per 100 poss)
  peakYear: string;
  peakNotes: string;
}

export interface ShotZoneStats {
  restrictedArea: { fgPct: number; pctOfAttempts: number };
  paintNonRA: { fgPct: number; pctOfAttempts: number };
  midRange: { fgPct: number; pctOfAttempts: number };
  cornerThree: { fgPct: number; pctOfAttempts: number };
  aboveBreakThree: { fgPct: number; pctOfAttempts: number };
}

export interface ArcadeAttributes {
  threePoint: number; // 0-99
  midRange: number; // 0-99
  dunk: number; // 0-99
  layup: number; // 0-99
  speed: number; // 0-99
  clutch: number; // 0-99
  signatureMove: string;
}

export interface NBAPlayer {
  id: string;
  name: string;
  nickname: string;
  era: '60s-70s' | '80s' | '90s' | '2000s' | '2010s' | '2020s';
  primaryPosition: 'PG' | 'SG' | 'SF' | 'PF' | 'C';
  positions: string[];
  height: string;
  weight: string;
  wingspan?: string;
  draft: string;
  yearsActive: string;
  jerseyNumbers: number[];
  teams: string[];
  teamColorPrimary: string;
  teamColorSecondary: string;
  avatarUrl: string;
  actionPhotoUrl: string;
  summaryBio: string;
  playstyle: string;
  accolades: Accolades;
  traditionalStats: TraditionalStats;
  advancedStats: AdvancedStats;
  shotZoneStats: ShotZoneStats;
  arcadeStats: ArcadeAttributes;
  bestGames: BestGame[];
  highlights: Record<HighlightCategory, HighlightClip[]>;
}

export const HIGHLIGHT_CATEGORY_META: Record<
  HighlightCategory,
  { label: string; icon: string; description: string }
> = {
  dunks: {
    label: 'Dunks',
    icon: 'Flame',
    description: 'Vicious posters, windmills, tomahawks & slam masterclasses',
  },
  layups: {
    label: 'Layups & Jelly',
    icon: 'Sparkles',
    description: 'Acrobatic english, double-clutch reverses & finger rolls',
  },
  threes: {
    label: 'Three-Pointers',
    icon: 'Target',
    description: 'Logo daggers, step-back bombs & barrage shooting streaks',
  },
  mid_range: {
    label: 'Mid-Range',
    icon: 'Crosshair',
    description: 'Pure turnaround fadeaways, pull-ups & baseline daggers',
  },
  blocks: {
    label: 'Blocks & Chasedowns',
    icon: 'Shield',
    description: 'Pinned glass rejections, chasedowns & rim protection',
  },
  steals: {
    label: 'Steals & Strips',
    icon: 'Zap',
    description: 'Lane picks, cookie jar strips & fastbreak transition finishes',
  },
  assists: {
    label: 'Dimes & Assists',
    icon: 'Eye',
    description: 'No-look passes, behind-the-back dishes & alley-oop deliveries',
  },
  rebounds: {
    label: 'Rebounds & Putbacks',
    icon: 'ArrowUpCircle',
    description: 'Skyhook glass cleaning, tip-in dunks & battle in the paint',
  },
  clutch: {
    label: 'Clutch & Game Winners',
    icon: 'Clock',
    description: 'Final buzzer daggers, playoff heroics & ice in the veins',
  },
  handles: {
    label: 'Handles & Crossovers',
    icon: 'Shuffle',
    description: 'Ankle breakers, hesitation blows & shamgod masteries',
  },
};
