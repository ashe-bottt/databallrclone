import { NBAPlayer } from '../types/nba';

export const ADDITIONAL_PLAYERS: NBAPlayer[] = [
  {
    id: 'giannis-antetokounmpo',
    name: 'Giannis Antetokounmpo',
    nickname: 'The Greek Freak',
    era: '2020s',
    primaryPosition: 'PF',
    positions: ['PF', 'C', 'SF'],
    height: "6'11\"",
    weight: '243 lbs',
    wingspan: "7'3\"",
    draft: '2013 R1 Pick 15 (Milwaukee Bucks)',
    yearsActive: '2013–Present',
    jerseyNumbers: [34],
    teams: ['Milwaukee Bucks'],
    teamColorPrimary: '#00471B',
    teamColorSecondary: '#EEE1C6',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: '2-time NBA MVP, 2021 NBA Champion, Finals MVP, and Defensive Player of the Year. Joined Michael Jordan as the only players in NBA history to win MVP, DPOY, and Finals MVP.',
    playstyle: 'Relentless downhill transition locomotive, Eurostep from 3-point line to the rim, and ferocious weakside shot blocking.',
    accolades: {
      championships: 1,
      finalsMvp: 1,
      mvps: 2,
      allStar: 9,
      allNbaFirst: 6,
      dpoy: 1,
      scoringTitles: 0,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['2x NBA MVP (2019, 2020)', '2021 Finals MVP', '2020 DPOY', '50-point Finals Closeout Game']
    },
    traditionalStats: {
      gamesPlayed: 800,
      ppg: 23.6,
      rpg: 9.8,
      apg: 4.9,
      spg: 1.1,
      bpg: 1.2,
      fgPct: 54.5,
      threePtPct: 28.6,
      ftPct: 70.0,
      totalPoints: 18900,
      totalRebounds: 7850,
      totalAssists: 3900
    },
    advancedStats: {
      per: 25.2,
      tsPct: 61.1,
      eFgPct: 56.4,
      winShares: 108.5,
      wsPer48: 0.220,
      bpm: 7.2,
      obpm: 5.1,
      dbpm: 2.1,
      vorp: 58.0,
      usgPct: 32.8,
      ortg: 115,
      drtg: 101,
      peakYear: '2019-20',
      peakNotes: 'Became only the third player ever to win MVP and DPOY in the same season, setting a record PER of 31.9 at the time.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 78.4, pctOfAttempts: 58.0 },
      paintNonRA: { fgPct: 41.2, pctOfAttempts: 22.0 },
      midRange: { fgPct: 36.5, pctOfAttempts: 10.0 },
      cornerThree: { fgPct: 32.0, pctOfAttempts: 2.0 },
      aboveBreakThree: { fgPct: 27.8, pctOfAttempts: 8.0 }
    },
    arcadeStats: {
      threePoint: 68,
      midRange: 82,
      dunk: 99,
      layup: 97,
      speed: 94,
      clutch: 95,
      signatureMove: 'Full-Court 2-Dribble Eurostep Dunk & Chasedown Glass Pin'
    },
    bestGames: [
      {
        id: 'giannis-50-finals-g6',
        date: 'July 20, 2021',
        matchup: 'vs. Phoenix Suns (Finals Gm 6, W 105-98)',
        pts: 50,
        reb: 14,
        ast: 2,
        stl: 0,
        blk: 5,
        fgm: '16-25 FG',
        threePm: '1-3 3PT',
        ftm: '17-19 FT',
        gameScore: 42.0,
        headline: '50-Point Finals Closeout Masterclass & 17-19 FTs',
        significance: 'Delivered Milwaukee its first championship in 50 years with one of the greatest closeout performances in NBA Finals history, shooting 17-of-19 from the foul line.',
        clutchMoments: 'Blocked Devin Booker and converted critical free throws in the final two minutes to seal the title.',
        youtubeVideoId: 'y43pCgGf23w'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'giannis-dunk-1',
          title: 'The Finals Alley-Oop from Jrue Holiday (2021 Gm 5)',
          category: 'dunks',
          opponent: 'at Phoenix Suns (Finals Game 5)',
          year: '2021',
          description: 'Catches fastbreak lob from Jrue Holiday over Chris Paul to ice Game 5 on the road.',
          youtubeVideoId: 'NLOMEM9q8p8',
          badge: 'Championship Alley-Oop'
        },
        {
          id: 'giannis-dunk-2',
          title: 'Jumping Completely Over Tim Hardaway Jr.',
          category: 'dunks',
          opponent: 'at New York Knicks',
          year: '2018',
          description: 'Takes off on the fastbreak and hurdles directly over a standing Tim Hardaway Jr. for a poster.',
          youtubeVideoId: 'V-qjh4Wcyd8',
          badge: 'Hurdle Dunk'
        }
      ],
      layups: [
        {
          id: 'giannis-layup-1',
          title: 'Three-Point Line to Rim Eurostep Scoop',
          category: 'layups',
          opponent: 'vs. Boston Celtics',
          year: '2022',
          description: 'Gathers at the 3-point line, two strides around Al Horford for finger roll.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'giannis-three-1',
          title: 'Crown Celebration 3-Pointer vs. Lakers',
          category: 'threes',
          opponent: 'vs. Los Angeles Lakers',
          year: '2019',
          description: 'Drills 5th three-pointer of the night and puts on imaginary crown.',
          youtubeVideoId: '09m8d1Q4Gbc'
        }
      ],
      mid_range: [
        {
          id: 'giannis-mid-1',
          title: 'Turnaround Baseline Fadeaway over Joel Embiid',
          category: 'mid_range',
          opponent: 'at Philadelphia 76ers',
          year: '2022',
          description: 'Elevates above Embiid’s reach for high-arching dagger.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'giannis-block-1',
          title: 'THE BLOCK on Deandre Ayton (2021 Finals Game 4)',
          category: 'blocks',
          opponent: 'vs. Phoenix Suns',
          year: '2021',
          description: 'Recovers from perimeter to the rim mid-air to stuff Ayton’s alley-oop attempt with 1:14 left in Game 4.',
          youtubeVideoId: '-zd62MxKXp8',
          badge: 'Iconic Finals Block'
        }
      ],
      steals: [
        {
          id: 'giannis-steal-1',
          title: 'Full-Court Strip and Coast-to-Coast Slam in 2 Dribbles',
          category: 'steals',
          opponent: 'vs. Toronto Raptors',
          year: '2019',
          description: 'Picks pocket, takes two dribbles from halfcourt and dunks.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'giannis-ast-1',
          title: 'Self Off-The-Backboard Pass to Himself in Playoff Game',
          category: 'assists',
          opponent: 'at Boston Celtics (Playoffs)',
          year: '2022',
          description: 'Tosses ball off glass to evade defenders and dunks his own rebound.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'giannis-reb-1',
          title: 'Vicious Putback Slam Over 2 Bigs in Playoff Clutch',
          category: 'rebounds',
          opponent: 'vs. Brooklyn Nets',
          year: '2021',
          description: 'Soars above Durant and Griffin to smash in missed floater.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'giannis-clutch-1',
          title: 'Stepback 3 to Force OT in Brooklyn (Game 7 2021)',
          category: 'clutch',
          opponent: 'at Brooklyn Nets',
          year: '2021',
          description: 'Critical fourth quarter and overtime baskets to win historic series.',
          youtubeVideoId: '8V_1ZxG3GK4'
        }
      ],
      handles: [
        {
          id: 'giannis-handle-1',
          title: 'Between-The-Legs Spin Move Leaving Defender Frozen',
          category: 'handles',
          opponent: 'vs. Detroit Pistons',
          year: '2020',
          description: 'Crossover dribble into spin move at 6-foot-11.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  },
  {
    id: 'vince-carter',
    name: 'Vince Carter',
    nickname: 'Vinsanity / Half-Man, Half-Amazing / Air Canada',
    era: '2000s',
    primaryPosition: 'SG',
    positions: ['SG', 'SF'],
    height: "6'6\"",
    weight: '220 lbs',
    wingspan: "6'11\"",
    draft: '1998 R1 Pick 5 (Golden State Warriors / Traded to Raptors)',
    yearsActive: '1998–2020',
    jerseyNumbers: [15, 25],
    teams: ['Toronto Raptors', 'New Jersey Nets', 'Orlando Magic', 'Phoenix Suns', 'Dallas Mavericks', 'Memphis Grizzlies', 'Sacramento Kings', 'Atlanta Hawks'],
    teamColorPrimary: '#CE1141',
    teamColorSecondary: '#000000',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'Universally hailed as the greatest in-game and contest dunker of all time. 8-time NBA All-Star, 2000 Slam Dunk Contest legend, and first player in NBA history to play in four different decades (22 seasons).',
    playstyle: 'Gravity-defying verticality, 360 windmills, honey-dip elbow hangs, clutch buzzer-beater shooting, and elite three-point longevity.',
    accolades: {
      championships: 0,
      finalsMvp: 0,
      mvps: 0,
      allStar: 8,
      allNbaFirst: 0,
      dpoy: 0,
      scoringTitles: 0,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: true,
      notableAwards: ['2000 Slam Dunk Contest Champion', 'Rookie of the Year (1999)', 'Over 25,000 Career Points', 'Hall of Fame (2024)']
    },
    traditionalStats: {
      gamesPlayed: 1541,
      ppg: 16.7,
      rpg: 4.3,
      apg: 3.1,
      spg: 1.0,
      bpg: 0.6,
      fgPct: 43.5,
      threePtPct: 37.1,
      ftPct: 79.8,
      totalPoints: 25728,
      totalRebounds: 6606,
      totalAssists: 4714
    },
    advancedStats: {
      per: 18.6,
      tsPct: 53.6,
      eFgPct: 49.8,
      winShares: 125.3,
      wsPer48: 0.130,
      bpm: 3.0,
      obpm: 2.9,
      dbpm: 0.1,
      vorp: 57.0,
      usgPct: 25.1,
      ortg: 108,
      drtg: 106,
      peakYear: '2000-01',
      peakNotes: 'Averaged 27.6 PPG, 5.5 RPG, 3.9 APG on 46.0% FG and 40.8% 3PT while leading Toronto to within 1 shot of the Eastern Conference Finals.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 65.4, pctOfAttempts: 28.0 },
      paintNonRA: { fgPct: 41.2, pctOfAttempts: 18.0 },
      midRange: { fgPct: 42.1, pctOfAttempts: 24.0 },
      cornerThree: { fgPct: 40.2, pctOfAttempts: 6.0 },
      aboveBreakThree: { fgPct: 36.4, pctOfAttempts: 24.0 }
    },
    arcadeStats: {
      threePoint: 88,
      midRange: 89,
      dunk: 99,
      layup: 94,
      speed: 92,
      clutch: 94,
      signatureMove: '360 Windmill Slam & "It’s Over" Elbow In The Rim'
    },
    bestGames: [
      {
        id: 'vc-50-sixers-g3',
        date: 'May 11, 2001',
        matchup: 'vs. Philadelphia 76ers (Playoffs Gm 3, W 102-78)',
        pts: 50,
        reb: 6,
        ast: 7,
        stl: 1,
        blk: 4,
        fgm: '19-29 FG',
        threePm: '9-13 3PT',
        ftm: '3-3 FT',
        gameScore: 44.8,
        headline: '50 Points & 9 Threes in Epic Playoff Duel with Iverson',
        significance: 'Set the NBA playoff record for most three-pointers in a half (8) during a historic postseason shootout with Allen Iverson.',
        clutchMoments: 'Hit 8 of 9 threes in the first half alone to blow out Philadelphia.',
        youtubeVideoId: 'f0c_KqB-7Y0'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'vc-dunk-1',
          title: 'The Dunk of Death (Le Dunk de la Mort) over 7’2” Weis',
          category: 'dunks',
          opponent: 'vs. France (2000 Olympics)',
          year: '2000',
          description: 'Steals the ball and jumps cleanly over 7-foot-2 French center Frederic Weis for the most famous dunk ever recorded.',
          youtubeVideoId: 'V-qjh4Wcyd8',
          badge: 'Le Dunk de la Mort'
        },
        {
          id: 'vc-dunk-2',
          title: '360 Reverse Windmill & "It’s Over" (2000 Dunk Contest)',
          category: 'dunks',
          opponent: '2000 All-Star Weekend',
          year: '2000',
          description: 'Put on the greatest dunk contest performance in history, capped with the honey dip elbow in the rim and "It’s Over" gesture.',
          youtubeVideoId: 'L8bK9W0vW5U',
          badge: 'Greatest Contest Ever'
        },
        {
          id: 'vc-dunk-3',
          title: 'Two-Handed Reverse Poster Over Alonzo Mourning',
          category: 'dunks',
          opponent: 'vs. Miami Heat',
          year: '2005',
          description: 'Drives down the lane and posters Hall of Fame shot-blocker Alonzo Mourning with contact.',
          youtubeVideoId: 'lGf4FhC7QhM',
          badge: 'Iconic In-Game Poster'
        }
      ],
      layups: [
        {
          id: 'vc-layup-1',
          title: 'Mid-Air Reverse Up-and-Under Scoop',
          category: 'layups',
          opponent: 'vs. Detroit Pistons',
          year: '2001',
          description: 'Changes hands around Ben Wallace for acrobatic reverse.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'vc-three-1',
          title: 'Corner Buzzer Beater vs. Spurs (2014 Playoffs Gm 3)',
          category: 'threes',
          opponent: 'vs. San Antonio Spurs (with Mavericks)',
          year: '2014',
          description: 'At age 37, catches inbounds with 1.7s left and pump-fakes Manu Ginobili for buzzer-beating corner three.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'Playoff Corner Buzzer'
        }
      ],
      mid_range: [
        {
          id: 'vc-mid-1',
          title: 'Turnaround High-Elevation Fadeaway at Air Canada Centre',
          category: 'mid_range',
          opponent: 'vs. New York Knicks',
          year: '2000',
          description: 'Classic high-release fadeaway.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'vc-block-1',
          title: 'Chasedown Two-Handed Backboard Swat',
          category: 'blocks',
          opponent: 'vs. Charlotte Hornets',
          year: '2001',
          description: 'Spikes layup attempt directly into the glass.',
          youtubeVideoId: '2bK3Lq0pPzE'
        }
      ],
      steals: [
        {
          id: 'vc-steal-1',
          title: 'Mid-Air Pass Pick to 360 Fastbreak Windmill',
          category: 'steals',
          opponent: 'vs. Cleveland Cavaliers',
          year: '2000',
          description: 'Interception into instant highlight dunk.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'vc-ast-1',
          title: 'No-Look Touchdown Alley-Oop to Richard Jefferson',
          category: 'assists',
          opponent: 'vs. Miami Heat',
          year: '2006',
          description: 'Throwing pinpoint lobs in the fast-paced New Jersey Nets offense.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'vc-reb-1',
          title: 'One-Handed Sky Rebound Putback Jam',
          category: 'rebounds',
          opponent: 'vs. Boston Celtics',
          year: '2002',
          description: 'Leaping 40 inches in the air to flush home a teammate’s miss.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'vc-clutch-1',
          title: '44-Foot Buzzer Beater Against the Toronto Raptors',
          category: 'clutch',
          opponent: 'at Toronto Raptors (with Nets)',
          year: '2008',
          description: 'Scores 39 points and sinks deep game-tying 3 before sealing the game with a reverse alley-oop in OT.',
          youtubeVideoId: '8V_1ZxG3GK4',
          badge: 'Revenge Game Winner'
        }
      ],
      handles: [
        {
          id: 'vc-handle-1',
          title: 'Between-the-Legs Hesitation Blowby',
          category: 'handles',
          opponent: 'vs. Indiana Pacers',
          year: '2000',
          description: 'Explosive first step that left defenders grabbing air.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  },
  {
    id: 'luka-doncic',
    name: 'Luka Dončić',
    nickname: 'Luka Magic / El Matador',
    era: '2020s',
    primaryPosition: 'PG',
    positions: ['PG', 'SG'],
    height: "6'7\"",
    weight: '230 lbs',
    wingspan: "6'9\"",
    draft: '2018 R1 Pick 3 (Atlanta Hawks / Traded to Mavericks)',
    yearsActive: '2018–Present',
    jerseyNumbers: [77],
    teams: ['Dallas Mavericks'],
    teamColorPrimary: '#00538C',
    teamColorSecondary: '#002B5E',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'One of the most precocious offensive savants in basketball history. 5-time All-NBA First Team selection by age 25, 2024 NBA Scoring Champion, and master of the step-back three, slow-mo pace control, and wizardly passing.',
    playstyle: 'Decelerating decelerations, unstoppable step-back 3s, bully post-ups on smaller guards, and pinpoint skip passes to corner shooters.',
    accolades: {
      championships: 0,
      finalsMvp: 0,
      mvps: 0,
      allStar: 5,
      allNbaFirst: 5,
      dpoy: 0,
      scoringTitles: 1,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['2024 NBA Scoring Champion (33.9 PPG)', '5x All-NBA First Team', 'Rookie of the Year (2019)', '60-21-10 Triple Double']
    },
    traditionalStats: {
      gamesPlayed: 420,
      ppg: 28.7,
      rpg: 8.7,
      apg: 8.3,
      spg: 1.2,
      bpg: 0.5,
      fgPct: 47.0,
      threePtPct: 34.7,
      ftPct: 74.7,
      totalPoints: 12050,
      totalRebounds: 3650,
      totalAssists: 3480
    },
    advancedStats: {
      per: 25.8,
      tsPct: 58.8,
      eFgPct: 53.8,
      winShares: 53.2,
      wsPer48: 0.176,
      bpm: 7.7,
      obpm: 7.2,
      dbpm: 0.5,
      vorp: 35.4,
      usgPct: 36.0,
      ortg: 114,
      drtg: 108,
      peakYear: '2023-24',
      peakNotes: 'Averaged 33.9 PPG, 9.2 RPG, 9.8 APG, scored 73 points in a game, and led Dallas to the NBA Finals.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 71.2, pctOfAttempts: 24.0 },
      paintNonRA: { fgPct: 48.0, pctOfAttempts: 18.0 },
      midRange: { fgPct: 45.0, pctOfAttempts: 14.0 },
      cornerThree: { fgPct: 41.5, pctOfAttempts: 3.5 },
      aboveBreakThree: { fgPct: 36.8, pctOfAttempts: 40.5 }
    },
    arcadeStats: {
      threePoint: 92,
      midRange: 93,
      dunk: 70,
      layup: 97,
      speed: 84,
      clutch: 99,
      signatureMove: 'Stepback 3 Over Outstretched Hand & "Who\'s Crying Now?"'
    },
    bestGames: [
      {
        id: 'luka-73-hawks',
        date: 'January 26, 2024',
        matchup: 'at Atlanta Hawks (W 148-143)',
        pts: 73,
        reb: 10,
        ast: 7,
        stl: 1,
        blk: 0,
        fgm: '25-33 FG',
        threePm: '8-13 3PT',
        ftm: '15-16 FT',
        gameScore: 64.0,
        headline: '73 Points on 75.8% True Shooting – Modern Masterwork',
        significance: 'Tied for the 4th highest scoring game in NBA history (and highest since Kobe 81), doing it with unprecedented hyper-efficiency (25-of-33 FG).',
        clutchMoments: 'Scored 41 in the first half and closed the game with a 3-point play and dagger jumper in the clutch.',
        youtubeVideoId: 'y43pCgGf23w'
      },
      {
        id: 'luka-60-21-10',
        date: 'December 27, 2022',
        matchup: 'vs. New York Knicks (W 126-121 OT)',
        pts: 60,
        reb: 21,
        ast: 10,
        stl: 2,
        blk: 1,
        fgm: '21-31 FG',
        threePm: '2-6 3PT',
        ftm: '16-22 FT',
        gameScore: 56.3,
        headline: 'First 60-20-10 Game in NBA History & The Recovery Miracle',
        significance: 'Down by 9 with 33 seconds left, Luka led an impossible comeback, intentionally missed a free throw, grabbed his own rebound, and tied the game at the buzzer before saying: "I need a recovery beer."',
        clutchMoments: 'The intentional missed free throw putback circus shot with 1.0 second left.',
        youtubeVideoId: 'O-VzBeOrdAg'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'luka-dunk-1',
          title: 'Rare Baseline Two-Handed Poster on Dwight Howard',
          category: 'dunks',
          opponent: 'vs. Los Angeles Lakers',
          year: '2020',
          description: 'Drives baseline and punches it with two hands.',
          youtubeVideoId: 'qQJ_3v9Y1iY'
        }
      ],
      layups: [
        {
          id: 'luka-layup-1',
          title: 'The Intentional Free Throw Miss Putback Miracle',
          category: 'layups',
          opponent: 'vs. New York Knicks',
          year: '2022',
          description: 'Intentionally clanks free throw, anticipates carom, and scoops it in at the buzzer to force OT.',
          youtubeVideoId: 'w7vsjOHq5E0',
          badge: 'Miracle Putback'
        }
      ],
      threes: [
        {
          id: 'luka-three-1',
          title: 'Game 4 Buzzer Beater Over Reggie Jackson (Bubble)',
          category: 'threes',
          opponent: 'vs. LA Clippers (Playoffs)',
          year: '2020',
          description: 'Hits 43-point triple double capped with a stepback buzzer-beating 3-pointer as time expired.',
          youtubeVideoId: 'GEMVGExChVU',
          badge: 'Playoff Game Winner'
        },
        {
          id: 'luka-three-2',
          title: 'Game 2 WCF Game-Winning Three Over Rudy Gobert',
          category: 'threes',
          opponent: 'at Minnesota Timberwolves (2024 WCF)',
          year: '2024',
          description: 'Isolates DPOY Rudy Gobert on an island, dances on the perimeter, and steps back for the winning three.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'WCF Winner Over Gobert'
        }
      ],
      mid_range: [
        {
          id: 'luka-mid-1',
          title: 'Slow-Motion Turnaround Fadeaway over Kawhi',
          category: 'mid_range',
          opponent: 'vs. LA Clippers',
          year: '2021',
          description: 'Backs down into the paint, pivots and sinks high-arching fadeaway.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'luka-block-1',
          title: 'Chasedown Swat on Devin Booker in Game 7 Blowout',
          category: 'blocks',
          opponent: 'at Phoenix Suns (2022 Playoffs Gm 7)',
          year: '2022',
          description: 'Rejects Booker in a historic 30-point Game 7 blowout in Phoenix.',
          youtubeVideoId: '2bK3Lq0pPzE'
        }
      ],
      steals: [
        {
          id: 'luka-steal-1',
          title: 'Strip on Anthony Edwards and Behind-The-Back Feed',
          category: 'steals',
          opponent: 'vs. Minnesota Timberwolves',
          year: '2024',
          description: 'Picks pocket on drive and feeds Derrick Jones Jr. in transition.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'luka-ast-1',
          title: 'Between-The-Legs Bounce Pass While Trapped in Double Team',
          category: 'assists',
          opponent: 'vs. Indiana Pacers',
          year: '2023',
          description: 'Trapped at half court, delivers a 40-foot crosscourt bounce pass right into the shooter’s hands.',
          youtubeVideoId: '2Vv9w3Tqg5M',
          badge: 'Wizard Dime'
        }
      ],
      rebounds: [
        {
          id: 'luka-reb-1',
          title: '21st Rebound in 60-20-10 Historic Night',
          category: 'rebounds',
          opponent: 'vs. New York Knicks',
          year: '2022',
          description: 'Snatching defensive board in overtime to lock up historic victory.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'luka-clutch-1',
          title: 'Stepback 3 at the Horn vs. Celtics',
          category: 'clutch',
          opponent: 'vs. Boston Celtics',
          year: '2021',
          description: 'Tie game, isolates on the left wing and hits off-balance stepback as buzzer blares.',
          youtubeVideoId: '8V_1ZxG3GK4'
        }
      ],
      handles: [
        {
          id: 'luka-handle-1',
          title: 'The Deceleration Shamgod Against Utah Jazz',
          category: 'handles',
          opponent: 'vs. Utah Jazz',
          year: '2022',
          description: 'Changes speeds at will to make defenders lean the wrong way.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  },
  {
    id: 'tim-duncan',
    name: 'Tim Duncan',
    nickname: 'The Big Fundamental',
    era: '2000s',
    primaryPosition: 'PF',
    positions: ['PF', 'C'],
    height: "6'11\"",
    weight: '250 lbs',
    wingspan: "7'3\"",
    draft: '1997 R1 Pick 1 (San Antonio Spurs)',
    yearsActive: '1997–2016',
    jerseyNumbers: [21],
    teams: ['San Antonio Spurs'],
    teamColorPrimary: '#000000',
    teamColorSecondary: '#C4CED4',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'The greatest power forward in basketball history. 5-time NBA Champion, 3-time Finals MVP, 2-time regular season MVP, and 15-time All-Defensive selection who anchored the Spurs dynasty for 19 years without ever missing the playoffs.',
    playstyle: 'Flawless mid-range bank shot, pristine low-post footwork, high-low passing, and genius positional rim deterrence without fouling.',
    accolades: {
      championships: 5,
      finalsMvp: 3,
      mvps: 2,
      allStar: 15,
      allNbaFirst: 10,
      dpoy: 0,
      scoringTitles: 0,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: true,
      notableAwards: ['15x All-Defensive Selection (NBA Record)', '2x MVP (2002, 2003)', 'Rookie of the Year (1998)', 'Near Quadruple-Double in 2003 Finals']
    },
    traditionalStats: {
      gamesPlayed: 1392,
      ppg: 19.0,
      rpg: 10.8,
      apg: 3.0,
      spg: 0.7,
      bpg: 2.2,
      fgPct: 50.6,
      threePtPct: 17.9,
      ftPct: 69.6,
      totalPoints: 26496,
      totalRebounds: 15091,
      totalAssists: 4225
    },
    advancedStats: {
      per: 24.2,
      tsPct: 55.1,
      eFgPct: 50.7,
      winShares: 206.4,
      wsPer48: 0.209,
      bpm: 5.6,
      obpm: 1.6,
      dbpm: 4.0,
      vorp: 91.1,
      usgPct: 27.0,
      ortg: 110,
      drtg: 95,
      peakYear: '2002-03',
      peakNotes: 'Averaged 23.3 PPG, 12.9 RPG, 3.9 APG, 2.9 BPG, won MVP, and completed one of the most dominant playoff runs ever with a 21-20-10-8 block Finals Game 6 masterpiece.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 68.0, pctOfAttempts: 44.0 },
      paintNonRA: { fgPct: 45.0, pctOfAttempts: 26.0 },
      midRange: { fgPct: 43.5, pctOfAttempts: 29.0 },
      cornerThree: { fgPct: 0.0, pctOfAttempts: 0.1 },
      aboveBreakThree: { fgPct: 17.9, pctOfAttempts: 0.9 }
    },
    arcadeStats: {
      threePoint: 35,
      midRange: 92,
      dunk: 88,
      layup: 95,
      speed: 76,
      clutch: 96,
      signatureMove: 'Pure 45-Degree High Glass Bank Shot'
    },
    bestGames: [
      {
        id: 'duncan-2003-finals-g6',
        date: 'June 15, 2003',
        matchup: 'vs. New Jersey Nets (Finals Gm 6, W 88-77)',
        pts: 21,
        reb: 20,
        ast: 10,
        stl: 0,
        blk: 8,
        fgm: '9-16 FG',
        ftm: '3-5 FT',
        gameScore: 32.2,
        headline: 'Near Quadruple-Double (21-20-10-8 Blk) to Clinch Championship',
        significance: 'One of the most complete all-around games in NBA Finals history; film study revealed 2 uncounted blocks, making it an unofficial quadruple-double.',
        clutchMoments: 'Dominated the 4th quarter on defense as the Spurs outscored the Nets 31-14.',
        youtubeVideoId: 'y43pCgGf23w'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'td-dunk-1',
          title: 'Two-Handed Baseline Flush Over Kenyon Martin',
          category: 'dunks',
          opponent: 'vs. New Jersey Nets (2003 Finals)',
          year: '2003',
          description: 'Spins off the block and flushes with authority.',
          youtubeVideoId: 'qQJ_3v9Y1iY'
        }
      ],
      layups: [
        {
          id: 'td-layup-1',
          title: 'Up-and-Under Scoop Over Shaquille O’Neal',
          category: 'layups',
          opponent: 'at Los Angeles Lakers',
          year: '2002',
          description: 'Fakes the jumper, ducks under Shaq, and finishes softly off glass.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'td-three-1',
          title: 'Game-Tying Double-OT Three Pointer vs. Suns (2008)',
          category: 'threes',
          opponent: 'vs. Phoenix Suns (Playoffs Gm 1)',
          year: '2008',
          description: 'Down 3 with 3 seconds left in double overtime, Duncan steps to the top of the key and nails his only three of the year to force 2OT.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'Clutch Playoff 3'
        }
      ],
      mid_range: [
        {
          id: 'td-mid-1',
          title: 'The Signature 45-Degree Angle Bank Shot',
          category: 'mid_range',
          opponent: 'vs. Detroit Pistons (2005 Finals)',
          year: '2005',
          description: 'Calculated, geometrically flawless bank shot off the top corner of the backboard square.',
          youtubeVideoId: 'b7U4Z7O-uGE',
          badge: 'The Fundamental Bank'
        }
      ],
      blocks: [
        {
          id: 'td-block-1',
          title: '8 Blocks in 2003 Finals Game 6',
          category: 'blocks',
          opponent: 'vs. New Jersey Nets',
          year: '2003',
          description: 'Denying rim attempts by Kenyon Martin, Jason Kidd, and Richard Jefferson.',
          youtubeVideoId: '2bK3Lq0pPzE'
        }
      ],
      steals: [
        {
          id: 'td-steal-1',
          title: 'Deflection of Entry Pass to David Robinson Break',
          category: 'steals',
          opponent: 'vs. New York Knicks (1999 Finals)',
          year: '1999',
          description: 'The Twin Towers combining for a defensive turnover.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'td-ast-1',
          title: 'Touch Pass to Tony Parker Cutting Baseline',
          category: 'assists',
          opponent: 'vs. Miami Heat (2014 Finals)',
          year: '2014',
          description: 'The pinnacle of Spurs "Beautiful Game" ball movement.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'td-reb-1',
          title: '20-Rebound Night in Championship Decider',
          category: 'rebounds',
          opponent: 'vs. New Jersey Nets',
          year: '2003',
          description: 'Controlling every defensive rebound.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'td-clutch-1',
          title: 'Off-Balance Jumper Over Shaq with 0.4 Seconds Left',
          category: 'clutch',
          opponent: 'at Los Angeles Lakers (2004 WCF Gm 5)',
          year: '2004',
          description: 'Fades away over Shaquille O’Neal to take the lead before Derek Fisher’s 0.4s miracle.',
          youtubeVideoId: '8V_1ZxG3GK4'
        }
      ],
      handles: [
        {
          id: 'td-handle-1',
          title: 'Fastbreak Point-Forward Dribble & Dish',
          category: 'handles',
          opponent: 'vs. Dallas Mavericks',
          year: '2001',
          description: 'Controlled dribble leading the fast break.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  }
];
