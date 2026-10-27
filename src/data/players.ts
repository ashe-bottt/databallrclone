import { NBAPlayer } from '../types/nba';

export const ALL_PLAYERS: NBAPlayer[] = [
  {
    id: 'michael-jordan',
    name: 'Michael Jordan',
    nickname: 'Air Jordan / His Airness',
    era: '90s',
    primaryPosition: 'SG',
    positions: ['SG', 'SF'],
    height: "6'6\"",
    weight: '216 lbs',
    wingspan: "6'11\"",
    draft: '1984 R1 Pick 3 (Chicago Bulls)',
    yearsActive: '1984–2003',
    jerseyNumbers: [23, 45, 12],
    teams: ['Chicago Bulls', 'Washington Wizards'],
    teamColorPrimary: '#CE1141',
    teamColorSecondary: '#000000',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'Widely considered the greatest basketball player of all time. 6-time NBA Champion, 6-time Finals MVP, 5-time regular season MVP, and 10-time NBA scoring champion who revolutionized global sports culture.',
    playstyle: 'Unstoppable mid-range post fadeaway, gravity-defying hangtime, ferocious baseline driving, and suffocating perimeter on-ball defense.',
    accolades: {
      championships: 6,
      finalsMvp: 6,
      mvps: 5,
      allStar: 14,
      allNbaFirst: 10,
      dpoy: 1,
      scoringTitles: 10,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: true,
      notableAwards: ['Rookie of the Year (1985)', '3x Steals Champion', '3x All-Star Game MVP', '2x Slam Dunk Contest Champion']
    },
    traditionalStats: {
      gamesPlayed: 1072,
      ppg: 30.1,
      rpg: 6.2,
      apg: 5.3,
      spg: 2.3,
      bpg: 0.8,
      fgPct: 49.7,
      threePtPct: 32.7,
      ftPct: 83.5,
      totalPoints: 32292,
      totalRebounds: 6672,
      totalAssists: 5633
    },
    advancedStats: {
      per: 27.9,
      tsPct: 56.9,
      eFgPct: 50.9,
      winShares: 214.0,
      wsPer48: 0.250,
      bpm: 9.2,
      obpm: 7.2,
      dbpm: 2.0,
      vorp: 116.1,
      usgPct: 33.3,
      ortg: 118,
      drtg: 103,
      peakYear: '1987-88',
      peakNotes: 'Averaged 35.0 PPG, 5.5 RPG, 5.9 APG, 3.2 SPG, 1.6 BPG while winning both MVP and Defensive Player of the Year with a 31.7 PER.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 68.4, pctOfAttempts: 34.0 },
      paintNonRA: { fgPct: 49.2, pctOfAttempts: 18.0 },
      midRange: { fgPct: 51.5, pctOfAttempts: 38.0 },
      cornerThree: { fgPct: 36.5, pctOfAttempts: 3.5 },
      aboveBreakThree: { fgPct: 31.8, pctOfAttempts: 6.5 }
    },
    arcadeStats: {
      threePoint: 79,
      midRange: 99,
      dunk: 98,
      layup: 99,
      speed: 95,
      clutch: 99,
      signatureMove: 'Turnaround Baseline Fadeaway & Mid-Air Double Clutch'
    },
    bestGames: [
      {
        id: 'mj-69-cleveland',
        date: 'March 28, 1990',
        matchup: 'at Cleveland Cavaliers (W 117-113 OT)',
        pts: 69,
        reb: 18,
        ast: 6,
        stl: 4,
        blk: 1,
        fgm: '23-37 FG',
        threePm: '2-6 3PT',
        ftm: '21-23 FT',
        gameScore: 64.6,
        headline: 'Career-High 69 Points & 18 Rebounds Masterpiece',
        significance: 'Jordan posted the second-highest single-game GameScore in NBA history, carrying Chicago on the road against an elite Cavaliers squad.',
        clutchMoments: 'Scored 8 points in overtime and pulled down critical contested defensive rebounds in the final 30 seconds.',
        youtubeVideoId: 'y43pCgGf23w'
      },
      {
        id: 'mj-63-celtics',
        date: 'April 20, 1986',
        matchup: 'at Boston Celtics (L 131-135 2OT, Playoffs)',
        pts: 63,
        reb: 5,
        ast: 6,
        stl: 3,
        blk: 2,
        fgm: '22-41 FG',
        ftm: '19-21 FT',
        gameScore: 47.2,
        headline: 'God Disguised as Michael Jordan at Boston Garden',
        significance: 'Still stands as the NBA playoff single-game scoring record against arguably the greatest Celtics roster of all time.',
        clutchMoments: 'Hit tying free throws with 0 seconds left in regulation to force overtime under deafening Boston Garden boos.',
        youtubeVideoId: 'f0c_KqB-7Y0'
      },
      {
        id: 'mj-flu-game',
        date: 'June 11, 1997',
        matchup: 'at Utah Jazz (W 90-88, Finals Game 5)',
        pts: 38,
        reb: 7,
        ast: 5,
        stl: 3,
        blk: 1,
        fgm: '13-27 FG',
        threePm: '2-5 3PT',
        ftm: '10-12 FT',
        gameScore: 31.5,
        headline: 'The Flu Game – 38 Points Through Sheer Willpower',
        significance: 'Battling severe food poisoning, dehydration, and a 103-degree fever, Jordan played 44 minutes to seize a 3-2 Finals series lead.',
        clutchMoments: 'Drilled the go-ahead 3-pointer with 25.0 seconds left before collapsing into Scottie Pippen’s arms.',
        youtubeVideoId: '77gI9-hKzYg'
      },
      {
        id: 'mj-the-shot',
        date: 'May 7, 1989',
        matchup: 'at Cleveland Cavaliers (W 101-100, Playoffs Gm 5)',
        pts: 44,
        reb: 9,
        ast: 6,
        stl: 1,
        blk: 0,
        fgm: '17-32 FG',
        threePm: '1-1 3PT',
        ftm: '9-13 FT',
        gameScore: 33.8,
        headline: 'The Shot – Craig Ehlo Left Frozen at the Buzzer',
        significance: 'Winner-take-all Game 5 series decider. Created one of the most iconic sports images of the 20th century.',
        clutchMoments: 'Hanging mid-air at the foul line to let Ehlo fly past before swishing the buzzer-beater series winner.',
        youtubeVideoId: 'p5WUOnTxwPw'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'mj-dunk-1',
          title: 'Rock-The-Cradle Reverse Fastbreak Slam',
          category: 'dunks',
          opponent: 'vs. New York Knicks',
          year: '1987',
          description: 'Snatches defensive board, accelerates coast-to-coast and cradles the ball around Patrick Ewing for thunderous jam.',
          youtubeVideoId: 'qQJ_3v9Y1iY',
          badge: 'Iconic Slam'
        },
        {
          id: 'mj-dunk-2',
          title: 'Free Throw Line Slam Dunk Contest Fly',
          category: 'dunks',
          opponent: '1988 All-Star Weekend',
          year: '1988',
          description: 'Taking off from the charity stripe, double-pumping in mid air to score a perfect 50 in Chicago Stadium.',
          youtubeVideoId: 'L8bK9W0vW5U',
          badge: 'Contest Perfect 50'
        },
        {
          id: 'mj-dunk-3',
          title: 'Vicious Baseline Poster over Patrick Ewing',
          category: 'dunks',
          opponent: 'vs. New York Knicks (Playoffs)',
          year: '1991',
          description: 'Spinning off Charles Oakley and John Starks along the baseline to hammer right over Ewing.',
          youtubeVideoId: 'lGf4FhC7QhM',
          badge: 'Posterizer'
        }
      ],
      layups: [
        {
          id: 'mj-layup-1',
          title: 'The Mid-Air Hand Switch vs. Lakers (1991 Finals)',
          category: 'layups',
          opponent: 'vs. Los Angeles Lakers',
          year: '1991',
          description: 'Rises above Sam Perkins, switches from right hand to left in mid-air, and kisses off the backboard.',
          youtubeVideoId: 'w7vsjOHq5E0',
          badge: 'Spectacular Move'
        },
        {
          id: 'mj-layup-2',
          title: 'Double-Clutch Reverse Under the Glass vs. Nets',
          category: 'layups',
          opponent: 'vs. New Jersey Nets',
          year: '1991',
          description: 'Glides under the basket, hangs while three defenders drop, and scoops reverse off glass.',
          youtubeVideoId: 'N9yq3H5C384'
        }
      ],
      threes: [
        {
          id: 'mj-three-1',
          title: 'The Shrug Game – 6 Threes in One Half',
          category: 'threes',
          opponent: 'vs. Portland Trail Blazers (Finals Gm 1)',
          year: '1992',
          description: 'Drills 6 first-half three pointers, turning toward Magic Johnson at the broadcast table with the iconic shrug.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'The Shrug'
        }
      ],
      mid_range: [
        {
          id: 'mj-mid-1',
          title: 'The Last Shot – 1998 Finals Game 6 vs. Utah Jazz',
          category: 'mid_range',
          opponent: 'at Utah Jazz (Finals Game 6)',
          year: '1998',
          description: 'Crosses Byron Russell at the top of the key, elevates with pure follow-through to win his 6th championship ring.',
          youtubeVideoId: '8V_1ZxG3GK4',
          badge: 'Championship Dagger'
        },
        {
          id: 'mj-mid-2',
          title: 'Turnaround High-Release Baseline Jumper vs. Cavaliers',
          category: 'mid_range',
          opponent: 'vs. Cleveland Cavaliers',
          year: '1993',
          description: 'Unblockable fadeaway creating 3 feet of separation against double coverage.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'mj-block-1',
          title: 'Two-Handed Glass Pin on Ron Mercer',
          category: 'blocks',
          opponent: 'vs. Chicago Bulls (with Wizards)',
          year: '2002',
          description: 'At age 38, sprints from behind and snatches Ron Mercer layup out of thin air pinned against the backboard.',
          youtubeVideoId: '2bK3Lq0pPzE',
          badge: 'Two-Hand Pin'
        },
        {
          id: 'mj-block-2',
          title: 'Chasedown Spikepit Block on Patrick Ewing',
          category: 'blocks',
          opponent: 'vs. New York Knicks',
          year: '1989',
          description: 'Strips Ewing right as he elevates for a dunk in the paint.',
          youtubeVideoId: 'e8x8A8zQy1w'
        }
      ],
      steals: [
        {
          id: 'mj-steal-1',
          title: 'Blindside Strip on Karl Malone (1998 Finals Gm 6)',
          category: 'steals',
          opponent: 'at Utah Jazz',
          year: '1998',
          description: 'Trailing by 1 point with 20 seconds left, Jordan sneaks behind Karl Malone on the low block to swipe the ball clean.',
          youtubeVideoId: 'kP-Q2Vl_2yY',
          badge: 'Clutch Championship Strip'
        }
      ],
      assists: [
        {
          id: 'mj-ast-1',
          title: 'Kickout Pass to Steve Kerr (1997 Finals Gm 6)',
          category: 'assists',
          opponent: 'vs. Utah Jazz',
          year: '1997',
          description: 'Draws Stockton and Russell before hitting Steve Kerr right in his shooting pocket for the championship winner.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        },
        {
          id: 'mj-ast-2',
          title: 'Behind-The-Back Bounce Pass to Scottie Pippen',
          category: 'assists',
          opponent: 'vs. Detroit Pistons',
          year: '1991',
          description: 'Threading between Isiah Thomas and Dennis Rodman on full speed fastbreak.',
          youtubeVideoId: 'tA1vH-3m_0c'
        }
      ],
      rebounds: [
        {
          id: 'mj-reb-1',
          title: 'Tip-In Slam Over Charles Barkley',
          category: 'rebounds',
          opponent: 'vs. Philadelphia 76ers',
          year: '1990',
          description: 'Soars from the three-point line over prime Charles Barkley for the putback hammer.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'mj-clutch-1',
          title: 'Game 6 Finals Winner Over Byron Russell (1998)',
          category: 'clutch',
          opponent: 'at Utah Jazz',
          year: '1998',
          description: 'The crowning clutch shot of NBA history.',
          youtubeVideoId: '8V_1ZxG3GK4',
          badge: 'Buzzer Climax'
        },
        {
          id: 'mj-clutch-2',
          title: 'The Shot Over Craig Ehlo (1989)',
          category: 'clutch',
          opponent: 'at Cleveland Cavaliers',
          year: '1989',
          description: 'Series winning hanging jumper at the horn.',
          youtubeVideoId: 'p5WUOnTxwPw'
        }
      ],
      handles: [
        {
          id: 'mj-handle-1',
          title: 'Palming Fake and Behind-The-Back Wrap vs. Raptors',
          category: 'handles',
          opponent: 'vs. Toronto Raptors',
          year: '1997',
          description: 'Freezes defender with single-hand palming hesitation before exploding baseline.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  },
  {
    id: 'lebron-james',
    name: 'LeBron James',
    nickname: 'The King / Chosen One',
    era: '2010s',
    primaryPosition: 'SF',
    positions: ['SF', 'PF', 'PG'],
    height: "6'9\"",
    weight: '250 lbs',
    wingspan: "7'0\"",
    draft: '2003 R1 Pick 1 (Cleveland Cavaliers)',
    yearsActive: '2003–Present',
    jerseyNumbers: [23, 6],
    teams: ['Cleveland Cavaliers', 'Miami Heat', 'Los Angeles Lakers'],
    teamColorPrimary: '#552583',
    teamColorSecondary: '#FDB927',
    avatarUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'All-time leading scorer in NBA history. 4-time NBA Champion, 4-time Finals MVP, 4-time regular season MVP. Unprecedented longevity and all-around dominance across three decades.',
    playstyle: 'Freight-train downhill transition force, quarterback court vision, chasedown shot blocking, and lethal fourth-quarter shotmaking.',
    accolades: {
      championships: 4,
      finalsMvp: 4,
      mvps: 4,
      allStar: 21,
      allNbaFirst: 13,
      dpoy: 0,
      scoringTitles: 1,
      assistTitles: 1,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['NBA All-Time Scoring Leader', 'In-Season Tournament MVP (2023)', '3x All-Star MVP', 'Rookie of the Year (2004)']
    },
    traditionalStats: {
      gamesPlayed: 1530,
      ppg: 27.1,
      rpg: 7.5,
      apg: 7.4,
      spg: 1.5,
      bpg: 0.7,
      fgPct: 50.6,
      threePtPct: 34.8,
      ftPct: 73.6,
      totalPoints: 41200,
      totalRebounds: 11450,
      totalAssists: 11200
    },
    advancedStats: {
      per: 27.0,
      tsPct: 59.0,
      eFgPct: 54.6,
      winShares: 261.2,
      wsPer48: 0.224,
      bpm: 8.7,
      obpm: 6.9,
      dbpm: 1.8,
      vorp: 151.8,
      usgPct: 31.5,
      ortg: 116,
      drtg: 104,
      peakYear: '2012-13',
      peakNotes: 'Shot 56.5% FG and 40.6% 3PT while finishing 1 vote shy of unanimous MVP, winning NBA Championship and Finals MVP.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 73.8, pctOfAttempts: 41.2 },
      paintNonRA: { fgPct: 42.1, pctOfAttempts: 16.5 },
      midRange: { fgPct: 39.5, pctOfAttempts: 18.0 },
      cornerThree: { fgPct: 38.2, pctOfAttempts: 5.1 },
      aboveBreakThree: { fgPct: 34.4, pctOfAttempts: 19.2 }
    },
    arcadeStats: {
      threePoint: 86,
      midRange: 89,
      dunk: 99,
      layup: 99,
      speed: 93,
      clutch: 98,
      signatureMove: 'Tomahawk Cockback Dunk & Chasedown Glass Pin'
    },
    bestGames: [
      {
        id: 'lbj-game6-boston',
        date: 'June 7, 2012',
        matchup: 'at Boston Celtics (W 98-79, ECF Game 6)',
        pts: 45,
        reb: 15,
        ast: 5,
        stl: 0,
        blk: 0,
        fgm: '19-26 FG',
        threePm: '2-4 3PT',
        ftm: '5-9 FT',
        gameScore: 39.9,
        headline: 'The Death Stare – Season-Saving 45 & 15 Masterclass',
        significance: 'Down 3-2 on the brink of elimination in Boston Garden, LeBron played with relentless stone-faced focus to save Miami’s Big 3 era.',
        clutchMoments: 'Scored 30 points in the first half alone, hitting impossible contested baseline fades over Paul Pierce.',
        youtubeVideoId: 'O-VzBeOrdAg'
      },
      {
        id: 'lbj-2016-game7',
        date: 'June 19, 2016',
        matchup: 'at Golden State Warriors (W 93-89, Finals Gm 7)',
        pts: 27,
        reb: 11,
        ast: 11,
        stl: 2,
        blk: 3,
        fgm: '9-24 FG',
        threePm: '1-5 3PT',
        ftm: '8-10 FT',
        gameScore: 23.4,
        headline: 'The 3-1 Comeback & Triple-Double to End Cleveland Curse',
        significance: 'Completed the only 3-1 comeback in NBA Finals history against the 73-win Warriors, delivering Cleveland its first title in 52 years.',
        clutchMoments: 'Executed "The Block" on Andre Iguodala at 89-89 with 1:50 remaining before sinking crucial free throws.',
        youtubeVideoId: '-zd62MxKXp8'
      },
      {
        id: 'lbj-pistons-2007',
        date: 'May 31, 2007',
        matchup: 'at Detroit Pistons (W 109-107 2OT, ECF Gm 5)',
        pts: 48,
        reb: 9,
        ast: 7,
        stl: 2,
        blk: 0,
        fgm: '18-33 FG',
        threePm: '2-3 3PT',
        ftm: '10-14 FT',
        gameScore: 35.5,
        headline: 'Scoring Cleveland’s Final 25 Points In A Row',
        significance: 'At age 22, carried a limited Cavs team past the championship Detroit Pistons defense in double-overtime.',
        clutchMoments: 'Scored 29 of Cleveland’s last 30 points, including the game-winning driving layup with 2.2 seconds left.',
        youtubeVideoId: 'JHaSiWClteQ'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'lbj-dunk-1',
          title: 'Poster Leaping Clear Over John Lucas III',
          category: 'dunks',
          opponent: 'vs. Chicago Bulls',
          year: '2012',
          description: 'Catches Dwyane Wade alley-oop and jumps completely over 5’11” John Lucas III for flush.',
          youtubeVideoId: 'V-qjh4Wcyd8',
          badge: 'Leapfrog Dunk'
        },
        {
          id: 'lbj-dunk-2',
          title: 'Thunderous One-Handed Poster on Jason Terry',
          category: 'dunks',
          opponent: 'at Boston Celtics',
          year: '2013',
          description: 'Norris Cole steal leads to transition lob where LeBron posters Jason Terry into the hardwood.',
          youtubeVideoId: 'V17n_aC8290',
          badge: 'All-Time Poster'
        },
        {
          id: 'lbj-dunk-3',
          title: 'Signature Tomahawk Cockback in Transition',
          category: 'dunks',
          opponent: 'vs. Milwaukee Bucks',
          year: '2009',
          description: 'Head at rim level with ball cocked past his shoulder for maximum velocity.',
          youtubeVideoId: '5Z1W6x-25V8'
        }
      ],
      layups: [
        {
          id: 'lbj-layup-1',
          title: 'Spin Cycle Between Three Defenders at the Buzzer',
          category: 'layups',
          opponent: 'vs. Indiana Pacers (Playoffs)',
          year: '2013',
          description: 'Game 1 buzzer-beating layup spinning past Paul George with 2.2 seconds left.',
          youtubeVideoId: 'd3rL_j7z-Hk'
        }
      ],
      threes: [
        {
          id: 'lbj-three-1',
          title: 'The Deep Buzzer Beater vs. Orlando Magic (2009)',
          category: 'threes',
          opponent: 'vs. Orlando Magic (ECF Game 2)',
          year: '2009',
          description: 'Catches inbound with 1.0 second left and drills 28-foot game-winner as buzzer expires.',
          youtubeVideoId: '2139sXh_y4c',
          badge: '1.0s Buzzer Dagger'
        },
        {
          id: 'lbj-three-2',
          title: 'Stepback Daggers in Milwaukee 16-pt 4th Quarter',
          category: 'threes',
          opponent: 'at Milwaukee Bucks',
          year: '2009',
          description: 'Back-to-back heat-check 35-foot pullups that had the away arena cheering.',
          youtubeVideoId: 'R9eRz_mP0B4'
        }
      ],
      mid_range: [
        {
          id: 'lbj-mid-1',
          title: 'Championship-Sealing Jumper (2013 Finals Game 7)',
          category: 'mid_range',
          opponent: 'vs. San Antonio Spurs',
          year: '2013',
          description: 'Pulls up from 19 feet with 27 seconds left to clinch back-to-back NBA championships.',
          youtubeVideoId: 'n36S-rK5c84',
          badge: 'Ring-Winning Jumper'
        }
      ],
      blocks: [
        {
          id: 'lbj-block-1',
          title: 'THE BLOCK – 2016 Finals Game 7 on Andre Iguodala',
          category: 'blocks',
          opponent: 'at Golden State Warriors',
          year: '2016',
          description: 'Sprints 88 feet in 2.6 seconds to reject Iguodala’s fastbreak layup off the backboard.',
          youtubeVideoId: '-zd62MxKXp8',
          badge: 'The Greatest Block in NBA History'
        },
        {
          id: 'lbj-block-2',
          title: 'Tiago Splitter Dunk Rejection at the Rim (2013 Finals)',
          category: 'blocks',
          opponent: 'vs. San Antonio Spurs',
          year: '2013',
          description: 'Meets 7-footer Tiago Splitter at apex with right hand for a rim-rattling denial.',
          youtubeVideoId: 'QIjy86m_4m4'
        }
      ],
      steals: [
        {
          id: 'lbj-steal-1',
          title: 'Interception & Fastbreak Self-Alley-Oop Off Backboard',
          category: 'steals',
          opponent: 'vs. Golden State Warriors (Finals)',
          year: '2018',
          description: 'Picks off pass at half-court, tosses off the glass to himself for two-handed slam.',
          youtubeVideoId: 'jJ5yH2kP3-Q'
        }
      ],
      assists: [
        {
          id: 'lbj-ast-1',
          title: 'Full Court Laser Dime Through 4 Defenders to Wade',
          category: 'assists',
          opponent: 'vs. Indiana Pacers',
          year: '2013',
          description: 'One-handed overhead football quarterback pass directly hitting Wade in stride.',
          youtubeVideoId: 'w5k21Q_j8B4'
        },
        {
          id: 'lbj-ast-2',
          title: 'Behind-The-Head No-Look Needle to Kyle Korver',
          category: 'assists',
          opponent: 'vs. Toronto Raptors',
          year: '2018',
          description: 'Driving through paint and whipping pass without looking straight to the corner.',
          youtubeVideoId: 'xPq6Z8rJk7Q'
        }
      ],
      rebounds: [
        {
          id: 'lbj-reb-1',
          title: 'One-Handed Putback Slam Over Two Bigs',
          category: 'rebounds',
          opponent: 'vs. Portland Trail Blazers',
          year: '2010',
          description: 'Flies in from the perimeter to smash down a missed jumper with left hand.',
          youtubeVideoId: '3V_sQ7pX0vE'
        }
      ],
      clutch: [
        {
          id: 'lbj-clutch-1',
          title: 'Running One-Handed Bank Buzzer Beater vs. Raptors',
          category: 'clutch',
          opponent: 'vs. Toronto Raptors (Playoffs)',
          year: '2018',
          description: 'Coast-to-coast floater off the glass with 0.0 on the clock to break Toronto’s spirit.',
          youtubeVideoId: 'FzP2xXpQk_4',
          badge: 'Playoff Buzzer'
        }
      ],
      handles: [
        {
          id: 'lbj-handle-1',
          title: 'Between-The-Legs Spin Drop Move in Toronto',
          category: 'handles',
          opponent: 'at Toronto Raptors',
          year: '2018',
          description: 'Spins basketball between his legs at top speed, leaves defender stumbling.',
          youtubeVideoId: 'M9j8L-1nB3E'
        }
      ]
    }
  },
  {
    id: 'kobe-bryant',
    name: 'Kobe Bryant',
    nickname: 'The Black Mamba',
    era: '2000s',
    primaryPosition: 'SG',
    positions: ['SG', 'SF'],
    height: "6'6\"",
    weight: '212 lbs',
    wingspan: "6'11\"",
    draft: '1996 R1 Pick 13 (Charlotte Hornets / Traded to Lakers)',
    yearsActive: '1996–2016',
    jerseyNumbers: [8, 24],
    teams: ['Los Angeles Lakers'],
    teamColorPrimary: '#552583',
    teamColorSecondary: '#FDB927',
    avatarUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&auto=format&fit=crop&q=80',
    summaryBio: '5-time NBA champion, 2-time Finals MVP, 2008 NBA MVP, and 18-time All-Star. Renowned for his relentless Mamba Mentality, unguardable footwork, and icy clutch shotmaking.',
    playstyle: 'Legendary post footwork, turnaround pump fakes, deep stepback daggers, and relentless one-on-one scoring.',
    accolades: {
      championships: 5,
      finalsMvp: 2,
      mvps: 1,
      allStar: 18,
      allNbaFirst: 11,
      dpoy: 0,
      scoringTitles: 2,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: true,
      notableAwards: ['9x All-Defensive First Team', '4x All-Star MVP', 'Slam Dunk Contest Champion (1997)', '81-Point Single Game']
    },
    traditionalStats: {
      gamesPlayed: 1346,
      ppg: 25.0,
      rpg: 5.2,
      apg: 4.7,
      spg: 1.4,
      bpg: 0.5,
      fgPct: 44.7,
      threePtPct: 32.9,
      ftPct: 83.7,
      totalPoints: 33643,
      totalRebounds: 7047,
      totalAssists: 6306
    },
    advancedStats: {
      per: 22.9,
      tsPct: 55.0,
      eFgPct: 48.2,
      winShares: 172.7,
      wsPer48: 0.170,
      bpm: 4.6,
      obpm: 4.7,
      dbpm: -0.1,
      vorp: 80.1,
      usgPct: 31.8,
      ortg: 110,
      drtg: 105,
      peakYear: '2005-06',
      peakNotes: 'Averaged 35.4 PPG (highest since Jordan 1987), scored 81 points in a game and 62 points in 3 quarters outscoring the entire Dallas Mavericks team.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 62.5, pctOfAttempts: 27.5 },
      paintNonRA: { fgPct: 43.1, pctOfAttempts: 20.2 },
      midRange: { fgPct: 42.8, pctOfAttempts: 34.1 },
      cornerThree: { fgPct: 38.0, pctOfAttempts: 4.5 },
      aboveBreakThree: { fgPct: 32.2, pctOfAttempts: 13.7 }
    },
    arcadeStats: {
      threePoint: 88,
      midRange: 99,
      dunk: 95,
      layup: 96,
      speed: 92,
      clutch: 99,
      signatureMove: 'Pump Fake Turnaround Fadeaway over Double Team'
    },
    bestGames: [
      {
        id: 'kobe-81',
        date: 'January 22, 2006',
        matchup: 'vs. Toronto Raptors (W 122-104)',
        pts: 81,
        reb: 6,
        ast: 2,
        stl: 3,
        blk: 1,
        fgm: '28-46 FG',
        threePm: '7-13 3PT',
        ftm: '18-20 FT',
        gameScore: 63.5,
        headline: '81 Points – 2nd Highest Scoring Game in NBA History',
        significance: 'Scored 55 points in the second half alone to rally the Lakers from an 18-point deficit, cementing an untouchable modern scoring milestone.',
        clutchMoments: 'Scored 28 in the 4th quarter as the Staples Center erupted into MVP chants.',
        youtubeVideoId: 'FeXZY4eVLfs'
      },
      {
        id: 'kobe-62-dallas',
        date: 'December 20, 2005',
        matchup: 'vs. Dallas Mavericks (W 112-90)',
        pts: 62,
        reb: 8,
        ast: 0,
        stl: 3,
        blk: 0,
        fgm: '18-31 FG',
        threePm: '4-10 3PT',
        ftm: '22-25 FT',
        gameScore: 49.7,
        headline: 'Kobe 62, Mavericks 61 (Through 3 Quarters)',
        significance: 'Outscored the Western Conference Champion Mavericks by himself through three quarters before sitting out the entire fourth.',
        clutchMoments: 'Scored 30 points in the third quarter alone with unstoppable fadeaways.',
        youtubeVideoId: 'gT5X3G8p2a0'
      },
      {
        id: 'kobe-farewell-60',
        date: 'April 13, 2016',
        matchup: 'vs. Utah Jazz (W 101-96)',
        pts: 60,
        reb: 4,
        ast: 4,
        stl: 1,
        blk: 1,
        fgm: '22-50 FG',
        threePm: '6-21 3PT',
        ftm: '10-12 FT',
        gameScore: 36.3,
        headline: '60-Point Farewell Finale – Mamba Out',
        significance: 'The greatest final game in sports history, scoring 23 points in the 4th quarter to erase a 10-point deficit in his 20th season.',
        clutchMoments: 'Hit the go-ahead pullup baseline jumper with 31 seconds left before signing off with "Mamba Out".',
        youtubeVideoId: 'qQzS_83J9V8'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'kobe-dunk-1',
          title: '360 Windmill in Open Court vs. Timberwolves',
          category: 'dunks',
          opponent: 'vs. Minnesota Timberwolves',
          year: '2003',
          description: 'Spins a full 360 degrees mid-air and throws down a reverse windmill slam.',
          youtubeVideoId: '3Vz3xR2-Gbc',
          badge: '360 Windmill'
        },
        {
          id: 'kobe-dunk-2',
          title: 'Dwight Howard Poster Baptism',
          category: 'dunks',
          opponent: 'at Orlando Magic',
          year: '2004',
          description: 'Drives down the lane and posters rookie Dwight Howard directly in his chest.',
          youtubeVideoId: 'xPq8jQ-1sbc',
          badge: 'Posterizer'
        }
      ],
      layups: [
        {
          id: 'kobe-layup-1',
          title: 'Behind-The-Backboard Reverse Scooper',
          category: 'layups',
          opponent: 'vs. Oklahoma City Thunder',
          year: '2010',
          description: 'Fouled behind the backboard, flips the ball up with reverse spin over the glass for and-one.',
          youtubeVideoId: 'W1e0p7jP4-g'
        }
      ],
      threes: [
        {
          id: 'kobe-three-1',
          title: 'Bank Shot 3-Pointer at the Buzzer Over Dwyane Wade',
          category: 'threes',
          opponent: 'vs. Miami Heat',
          year: '2009',
          description: 'Off balance off one foot at the top of the arc over Dwyane Wade’s outstretched hand to win at the horn.',
          youtubeVideoId: 'Zg4y7-v0LhA',
          badge: 'Game Winning Bank 3'
        },
        {
          id: 'kobe-three-2',
          title: '12 Three-Pointers in a Single Game (NBA Record at Time)',
          category: 'threes',
          opponent: 'vs. Seattle SuperSonics',
          year: '2003',
          description: 'Hits 9 consecutive three pointers without a single miss in a blistering shooting display.',
          youtubeVideoId: '9n7t1M2a-Qw'
        }
      ],
      mid_range: [
        {
          id: 'kobe-mid-1',
          title: 'Double-Overtime Dagger vs. Phoenix Suns (2006)',
          category: 'mid_range',
          opponent: 'vs. Phoenix Suns (Playoffs Gm 4)',
          year: '2006',
          description: 'Hits game-tying layup to force OT, then drains the buzzer-beating pullup elbow jumper over Boris Diaw.',
          youtubeVideoId: 'v1eZ9L3k1qM',
          badge: 'Double Buzzer Game'
        }
      ],
      blocks: [
        {
          id: 'kobe-block-1',
          title: 'Clutch Block on Ray Allen to Seal Finals Win',
          category: 'blocks',
          opponent: 'vs. Boston Celtics (2010 Finals)',
          year: '2010',
          description: 'Chases Ray Allen around screen and rejects corner 3 attempt cleanly.',
          youtubeVideoId: 'qW7pL3M0-xQ'
        }
      ],
      steals: [
        {
          id: 'kobe-steal-1',
          title: 'Strip on Steve Nash and Coast-to-Coast Slam',
          category: 'steals',
          opponent: 'vs. Phoenix Suns',
          year: '2006',
          description: 'Pokes ball away at halfcourt and finishes with thunderous two-handed reverse.',
          youtubeVideoId: '1L7xM8-vY0A'
        }
      ],
      assists: [
        {
          id: 'kobe-ast-1',
          title: 'The Alley-Oop to Shaq (2000 WCF Game 7)',
          category: 'assists',
          opponent: 'vs. Portland Trail Blazers',
          year: '2000',
          description: 'Crosses Scottie Pippen and lofted lob to Shaquille O’Neal to cap 15-point 4th quarter comeback.',
          youtubeVideoId: 'NLOMEM9q8p8',
          badge: 'Iconic Shaq Lob'
        }
      ],
      rebounds: [
        {
          id: 'kobe-reb-1',
          title: '15 Rebounds in Game 7 to Win 2010 Championship',
          category: 'rebounds',
          opponent: 'vs. Boston Celtics (Finals Gm 7)',
          year: '2010',
          description: 'Battles Kevin Garnett and Kendrick Perkins in a gritty defensive bloodbath.',
          youtubeVideoId: '9M8aV0-wQkY'
        }
      ],
      clutch: [
        {
          id: 'kobe-clutch-1',
          title: 'Overtime Buzzer Beater vs. Suns (2006 Game 4)',
          category: 'clutch',
          opponent: 'vs. Phoenix Suns',
          year: '2006',
          description: 'The iconic jersey tug celebration after dropping the dagger over two defenders.',
          youtubeVideoId: 'v1eZ9L3k1qM',
          badge: 'Walk-Off Dagger'
        }
      ],
      handles: [
        {
          id: 'kobe-handle-1',
          title: 'Double Crossover That Sent Defender to the Floor',
          category: 'handles',
          opponent: 'vs. San Antonio Spurs',
          year: '2004',
          description: 'In-and-out hesitation followed by low crossover right into a pullup.',
          youtubeVideoId: '4L8xM-wP0Yw'
        }
      ]
    }
  },
  {
    id: 'stephen-curry',
    name: 'Stephen Curry',
    nickname: 'Chef Curry / The Baby-Faced Assassin',
    era: '2010s',
    primaryPosition: 'PG',
    positions: ['PG'],
    height: "6'2\"",
    weight: '185 lbs',
    wingspan: "6'4\"",
    draft: '2009 R1 Pick 7 (Golden State Warriors)',
    yearsActive: '2009–Present',
    jerseyNumbers: [30],
    teams: ['Golden State Warriors'],
    teamColorPrimary: '#1D428A',
    teamColorSecondary: '#FFC72C',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'The greatest shooter in basketball history. 4-time NBA Champion, Finals MVP, 2-time regular season MVP (only unanimous MVP in history), and all-time NBA leader in 3-pointers made.',
    playstyle: 'Limitless shooting range (35+ feet), world-class off-ball relocation stamina, wizardly handles, and lightning-quick 0.3s release.',
    accolades: {
      championships: 4,
      finalsMvp: 1,
      mvps: 2,
      allStar: 10,
      allNbaFirst: 4,
      dpoy: 0,
      scoringTitles: 2,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['Unanimous MVP (2016)', 'All-Time 3-Point Leader (3,800+ 3PM)', '2x 3-Point Contest Champion', 'Clutch Player of the Year (2024)']
    },
    traditionalStats: {
      gamesPlayed: 990,
      ppg: 24.8,
      rpg: 4.7,
      apg: 6.4,
      spg: 1.5,
      bpg: 0.2,
      fgPct: 47.3,
      threePtPct: 42.6,
      ftPct: 91.0,
      totalPoints: 24200,
      totalRebounds: 4600,
      totalAssists: 6300
    },
    advancedStats: {
      per: 23.6,
      tsPct: 62.7,
      eFgPct: 58.3,
      winShares: 135.2,
      wsPer48: 0.201,
      bpm: 6.4,
      obpm: 6.8,
      dbpm: -0.4,
      vorp: 68.2,
      usgPct: 29.5,
      ortg: 119,
      drtg: 108,
      peakYear: '2015-16',
      peakNotes: 'Scored 30.1 PPG while leading Warriors to 73-9 record, 402 threes made, joining 50-40-90 club and winning unanimous MVP.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 64.8, pctOfAttempts: 21.0 },
      paintNonRA: { fgPct: 45.3, pctOfAttempts: 12.0 },
      midRange: { fgPct: 46.1, pctOfAttempts: 14.0 },
      cornerThree: { fgPct: 46.8, pctOfAttempts: 9.0 },
      aboveBreakThree: { fgPct: 41.9, pctOfAttempts: 44.0 }
    },
    arcadeStats: {
      threePoint: 99,
      midRange: 94,
      dunk: 65,
      layup: 96,
      speed: 94,
      clutch: 98,
      signatureMove: '40-Foot Pullup Three & "Night Night" Dagger'
    },
    bestGames: [
      {
        id: 'steph-okc-dagger',
        date: 'February 27, 2016',
        matchup: 'at Oklahoma City Thunder (W 121-118 OT)',
        pts: 46,
        reb: 3,
        ast: 6,
        stl: 2,
        blk: 0,
        fgm: '14-24 FG',
        threePm: '12-16 3PT',
        ftm: '6-8 FT',
        gameScore: 37.8,
        headline: 'They Do Have A Timeout, Decide Not To Use It!',
        significance: 'Mike Breen’s legendary double "BANG!" after Curry pulls up from 38 feet with 0.6 seconds left in OT to crush OKC.',
        clutchMoments: 'Tied NBA record with 12 threes and drilled game winner from deep hash mark.',
        youtubeVideoId: 'GEMVGExChVU'
      },
      {
        id: 'steph-62-blazers',
        date: 'January 3, 2021',
        matchup: 'vs. Portland Trail Blazers (W 137-122)',
        pts: 62,
        reb: 5,
        ast: 4,
        stl: 0,
        blk: 0,
        fgm: '18-31 FG',
        threePm: '8-16 3PT',
        ftm: '18-19 FT',
        gameScore: 46.8,
        headline: 'Career-High 62 Points in 36 Minutes',
        significance: 'Silenced early-season critics with a breathtaking scoring barrage that had the entire NBA in awe.',
        clutchMoments: 'Scored 21 in the 1st quarter and 31 in the 2nd half.',
        youtubeVideoId: 'P_3M9-Gbc0E'
      },
      {
        id: 'steph-54-msg',
        date: 'February 27, 2013',
        matchup: 'at New York Knicks (L 105-109)',
        pts: 54,
        reb: 6,
        ast: 7,
        stl: 3,
        blk: 0,
        fgm: '18-28 FG',
        threePm: '11-13 3PT',
        ftm: '7-7 FT',
        gameScore: 45.4,
        headline: '54 Points at Madison Square Garden – Arrival of the Chef',
        significance: 'The national breakout performance at the mecca of basketball, shooting 11-of-13 from 3-point range.',
        clutchMoments: 'Hit 3 after 3 with Madison Square Garden fans giving him a standing ovation.',
        youtubeVideoId: 'r8zXhQ-0aZc'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'steph-dunk-1',
          title: 'Breakaway Two-Handed Rim Graze vs. Raptors',
          category: 'dunks',
          opponent: 'vs. Toronto Raptors',
          year: '2016',
          description: 'A rare high-flying transition jam from Chef Curry that brought the Oracle Arena bench to its feet.',
          youtubeVideoId: 'b7A9xP_4cQw'
        }
      ],
      layups: [
        {
          id: 'steph-layup-1',
          title: 'High-Arc Floater Over 7’1” Rudy Gobert',
          category: 'layups',
          opponent: 'at Utah Jazz',
          year: '2017',
          description: 'Rainbow scoop over DPOY Rudy Gobert with impossible spin and touch.',
          youtubeVideoId: 'X0vL_2b7q1w'
        },
        {
          id: 'steph-layup-2',
          title: 'Spinning Up-And-Under Reverse vs. Clippers',
          category: 'layups',
          opponent: 'vs. LA Clippers',
          year: '2015',
          description: 'Dribbles through 4 defenders before spinning in mid-air for reverse finish.',
          youtubeVideoId: '8p_3xG9Z0vM'
        }
      ],
      threes: [
        {
          id: 'steph-three-1',
          title: 'The 38-Foot OKC Dagger Double Bang',
          category: 'threes',
          opponent: 'at Oklahoma City Thunder',
          year: '2016',
          description: 'One of the most famous regular season shots in sports history.',
          youtubeVideoId: 'GEMVGExChVU',
          badge: 'Double BANG'
        },
        {
          id: 'steph-three-2',
          title: 'Breaking Ray Allen’s All-Time 3-Point Record at MSG',
          category: 'threes',
          opponent: 'at New York Knicks',
          year: '2021',
          description: 'Sinks his 2,974th career three to officially become the all-time 3-point king.',
          youtubeVideoId: '0v_xP9Q_m38',
          badge: 'All-Time Record'
        },
        {
          id: 'steph-three-3',
          title: 'Turnaround 3 Before It Even Hits The Net',
          category: 'threes',
          opponent: 'vs. Dallas Mavericks',
          year: '2015',
          description: 'Releases from corner, turns around and runs back on defense before the ball splashes.',
          youtubeVideoId: 'Y9j_3P0vK9w',
          badge: 'No-Look Swish'
        }
      ],
      mid_range: [
        {
          id: 'steph-mid-1',
          title: 'Stepback Fadeaway Over Kawhi Leonard',
          category: 'mid_range',
          opponent: 'vs. San Antonio Spurs',
          year: '2016',
          description: 'Shakes the best perimeter defender with hesitation into a sweet 18-foot jumper.',
          youtubeVideoId: '3vK9xP_0aQw'
        }
      ],
      blocks: [
        {
          id: 'steph-block-1',
          title: 'Rejection on 7’0” Center at the Rim',
          category: 'blocks',
          opponent: 'vs. New Orleans Pelicans',
          year: '2018',
          description: 'Times his leap perfectly to stuff a hook shot attempt.',
          youtubeVideoId: '8p_xL0zQk1E'
        }
      ],
      steals: [
        {
          id: 'steph-steal-1',
          title: 'Anticipation Lane Swipe and 3-Point Fastbreak Pullup',
          category: 'steals',
          opponent: 'vs. Cleveland Cavaliers',
          year: '2017',
          description: 'Interprets pass, dashes down court and stops on a dime for transition triple.',
          youtubeVideoId: '1L7xM8-vY0A'
        }
      ],
      assists: [
        {
          id: 'steph-ast-1',
          title: 'Behind-The-Back Wrapper to Shaun Livingston Slam',
          category: 'assists',
          opponent: 'vs. Phoenix Suns',
          year: '2016',
          description: 'Crosscourt wrap-around dime in transition without looking.',
          youtubeVideoId: '7p_9zXk1qM0'
        }
      ],
      rebounds: [
        {
          id: 'steph-reb-1',
          title: 'Outrebounding Tristan Thompson for Putback',
          category: 'rebounds',
          opponent: 'vs. Cleveland Cavaliers (Finals)',
          year: '2017',
          description: 'Sneaks into the trees to tip the ball in over Cleveland’s frontline.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      clutch: [
        {
          id: 'steph-clutch-1',
          title: '"Night Night" Three in Finals Game 4 Boston',
          category: 'clutch',
          opponent: 'at Boston Celtics (2022 Finals Gm 4)',
          year: '2022',
          description: '43 points and 10 rebounds in hostile TD Garden, hitting dagger and putting Boston to sleep.',
          youtubeVideoId: 'GEMVGExChVU',
          badge: 'Night Night Dagger'
        }
      ],
      handles: [
        {
          id: 'steph-handle-1',
          title: 'The Chris Paul Ankle-Breaker Baseline Shake',
          category: 'handles',
          opponent: 'vs. LA Clippers',
          year: '2015',
          description: 'Dribbles baseline, changes directions with behind-the-back wrap that sent CP3 to the court.',
          youtubeVideoId: '0v_xP9Q_m38',
          badge: 'Ankle Breaker'
        }
      ]
    }
  },
  {
    id: 'shaquille-oneal',
    name: "Shaquille O'Neal",
    nickname: 'Shaq / The Big Diesel / Most Dominant Ever',
    era: '2000s',
    primaryPosition: 'C',
    positions: ['C'],
    height: "7'1\"",
    weight: '325 lbs',
    wingspan: "7'7\"",
    draft: '1992 R1 Pick 1 (Orlando Magic)',
    yearsActive: '1992–2011',
    jerseyNumbers: [32, 34, 33, 36],
    teams: ['Orlando Magic', 'Los Angeles Lakers', 'Miami Heat', 'Phoenix Suns', 'Cleveland Cavaliers', 'Boston Celtics'],
    teamColorPrimary: '#552583',
    teamColorSecondary: '#FDB927',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'Arguably the most dominant physical force in NBA history. 4-time NBA Champion, 3-time consecutive Finals MVP, 2000 MVP, and 2-time scoring champion who literally tore down multiple basketball stanchions.',
    playstyle: 'Cataclysmic low-post power, explosive drop-steps, backboard-shattering slams, and agile rim-running.',
    accolades: {
      championships: 4,
      finalsMvp: 3,
      mvps: 1,
      allStar: 15,
      allNbaFirst: 8,
      dpoy: 0,
      scoringTitles: 2,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: true,
      notableAwards: ['3x Finals MVP (2000, 2001, 2002)', 'Rookie of the Year (1993)', '3x All-Star MVP', 'Hall of Fame (2016)']
    },
    traditionalStats: {
      gamesPlayed: 1207,
      ppg: 23.7,
      rpg: 10.9,
      apg: 2.5,
      spg: 0.6,
      bpg: 2.3,
      fgPct: 58.2,
      threePtPct: 4.5,
      ftPct: 52.7,
      totalPoints: 28596,
      totalRebounds: 13099,
      totalAssists: 3026
    },
    advancedStats: {
      per: 26.4,
      tsPct: 58.6,
      eFgPct: 58.2,
      winShares: 181.7,
      wsPer48: 0.208,
      bpm: 5.1,
      obpm: 4.4,
      dbpm: 0.7,
      vorp: 73.8,
      usgPct: 29.5,
      ortg: 113,
      drtg: 101,
      peakYear: '1999-00',
      peakNotes: 'Averaged 29.7 PPG, 13.6 RPG, 3.8 APG, 3.0 BPG on 57.4% FG, winning MVP, All-Star MVP, Finals MVP, and the NBA title.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 75.2, pctOfAttempts: 68.0 },
      paintNonRA: { fgPct: 41.5, pctOfAttempts: 28.5 },
      midRange: { fgPct: 25.0, pctOfAttempts: 3.2 },
      cornerThree: { fgPct: 0.0, pctOfAttempts: 0.1 },
      aboveBreakThree: { fgPct: 4.5, pctOfAttempts: 0.2 }
    },
    arcadeStats: {
      threePoint: 25,
      midRange: 60,
      dunk: 99,
      layup: 94,
      speed: 82,
      clutch: 94,
      signatureMove: 'Drop Step Black Hole Shatter Slam'
    },
    bestGames: [
      {
        id: 'shaq-61-birthday',
        date: 'March 6, 2000',
        matchup: 'at LA Clippers (W 123-103)',
        pts: 61,
        reb: 23,
        ast: 3,
        stl: 0,
        blk: 0,
        fgm: '24-35 FG',
        ftm: '13-22 FT',
        gameScore: 49.3,
        headline: '61 Points & 23 Rebounds on His 28th Birthday',
        significance: 'Upset that the Clippers wouldn’t provide complimentary tickets for his family, Shaq punished them with a 61-point, 23-rebound beatdown.',
        clutchMoments: 'Threw down 11 dunks and outscored the entire opposing frontcourt combined.',
        youtubeVideoId: 'qQJ_3v9Y1iY'
      },
      {
        id: 'shaq-2000-finals-g1',
        date: 'June 7, 2000',
        matchup: 'vs. Indiana Pacers (Finals Gm 1, W 104-87)',
        pts: 43,
        reb: 19,
        ast: 4,
        stl: 0,
        blk: 3,
        fgm: '21-31 FG',
        ftm: '1-6 FT',
        gameScore: 37.1,
        headline: '43 Points & 19 Rebounds to Open 2000 Finals',
        significance: 'Set the tone for the Lakers three-peat dynasty with an overpowering exhibition against Rik Smits and Dale Davis.',
        clutchMoments: 'Averaged 38.0 PPG and 16.7 RPG throughout the entire series.',
        youtubeVideoId: 'NLOMEM9q8p8'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'shaq-dunk-1',
          title: 'Shattering the Entire Backboard & Hydraulic System',
          category: 'dunks',
          opponent: 'at New Jersey Nets',
          year: '1993',
          description: 'Brings down the entire 2,000-pound stanchion causing game delay and emergency NBA rim reinforcement rules.',
          youtubeVideoId: 'y43pCgGf23w',
          badge: 'Backboard Destroyer'
        },
        {
          id: 'shaq-dunk-2',
          title: 'Disrespectful Dunk Over Chris Dudley with Push',
          category: 'dunks',
          opponent: 'vs. New York Knicks',
          year: '1999',
          description: 'Catches pass, spins baseline and slams through Dudley before shoving him to the floor.',
          youtubeVideoId: '77gI9-hKzYg',
          badge: 'Most Disrespectful Slam'
        }
      ],
      layups: [
        {
          id: 'shaq-layup-1',
          title: 'Coast-to-Coast Fastbreak Finger Roll in Orlando',
          category: 'layups',
          opponent: 'vs. Chicago Bulls',
          year: '1995',
          description: 'Grabs rebound, outruns Michael Jordan and Scottie Pippen down the floor for finger roll.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'shaq-three-1',
          title: 'Buzzer-Beater Banked Three Pointer from 35 Feet',
          category: 'threes',
          opponent: 'vs. Milwaukee Bucks',
          year: '1996',
          description: 'The legendary sole official 3-pointer of Shaq’s career, banked in at the buzzer.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'Sole Career 3PT'
        }
      ],
      mid_range: [
        {
          id: 'shaq-mid-1',
          title: 'Smooth Turnaround 10-Foot Hook Shot',
          category: 'mid_range',
          opponent: 'vs. Philadelphia 76ers (Finals)',
          year: '2001',
          description: 'Soft touch over Dikembe Mutombo off glass.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'shaq-block-1',
          title: '15-Block Triple-Double vs. New Jersey Nets',
          category: 'blocks',
          opponent: 'at New Jersey Nets',
          year: '1993',
          description: '24 points, 28 rebounds, and 15 blocks in a single game.',
          youtubeVideoId: '2bK3Lq0pPzE',
          badge: '15 Blocks in One Game'
        }
      ],
      steals: [
        {
          id: 'shaq-steal-1',
          title: 'Poke Away and Point Guard Dribble to Dunk',
          category: 'steals',
          opponent: 'vs. Utah Jazz',
          year: '1998',
          description: 'Strips Karl Malone and dribbles behind his back.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'shaq-ast-1',
          title: 'Two-Handed Overhead Bullet to Rick Fox Corner 3',
          category: 'assists',
          opponent: 'vs. Sacramento Kings',
          year: '2002',
          description: 'Passing out of triple teams with pinpoint vision.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'shaq-reb-1',
          title: 'Ripping Offensive Rebound Away from 3 Bigs for Slam',
          category: 'rebounds',
          opponent: 'vs. San Antonio Spurs',
          year: '2001',
          description: 'Outmuscling David Robinson and Tim Duncan for putback jam.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'shaq-clutch-1',
          title: 'Putback Slam in Game 7 Comeback vs. Blazers (2000)',
          category: 'clutch',
          opponent: 'vs. Portland Trail Blazers',
          year: '2000',
          description: 'Key buckets to close out the Western Conference Finals.',
          youtubeVideoId: 'NLOMEM9q8p8'
        }
      ],
      handles: [
        {
          id: 'shaq-handle-1',
          title: 'All-Star Game Crossover on Michael Jordan',
          category: 'handles',
          opponent: '1996 All-Star Game',
          year: '1996',
          description: '7-foot-1 giant bringing the ball up and hitting MJ with a between-the-legs crossover.',
          youtubeVideoId: 'gK2qL9xXb7Y',
          badge: 'Giant Crossover'
        }
      ]
    }
  },
  {
    id: 'kareem-abdul-jabbar',
    name: 'Kareem Abdul-Jabbar',
    nickname: 'Cap / The Captain',
    era: '80s',
    primaryPosition: 'C',
    positions: ['C'],
    height: "7'2\"",
    weight: '225 lbs',
    wingspan: "7'5\"",
    draft: '1969 R1 Pick 1 (Milwaukee Bucks)',
    yearsActive: '1969–1989',
    jerseyNumbers: [33],
    teams: ['Milwaukee Bucks', 'Los Angeles Lakers'],
    teamColorPrimary: '#552583',
    teamColorSecondary: '#FDB927',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: '6-time NBA champion, record 6-time regular season MVP, and inventor of the most unstoppable weapon in basketball history: the Skyhook. Scored 38,387 career points over two legendary decades.',
    playstyle: 'Unblockable high-release Skyhook, pinpoint outlet passing, disciplined rim protection, and unmatched positional longevity.',
    accolades: {
      championships: 6,
      finalsMvp: 2,
      mvps: 6,
      allStar: 19,
      allNbaFirst: 10,
      dpoy: 0,
      scoringTitles: 2,
      assistTitles: 0,
      reboundTitles: 1,
      hallOfFame: true,
      notableAwards: ['Record 6 Regular Season MVPs', '19x All-Star', 'Rookie of the Year (1970)', '4x Block Champion']
    },
    traditionalStats: {
      gamesPlayed: 1560,
      ppg: 24.6,
      rpg: 11.2,
      apg: 3.6,
      spg: 0.9,
      bpg: 2.6,
      fgPct: 55.9,
      threePtPct: 5.6,
      ftPct: 72.1,
      totalPoints: 38387,
      totalRebounds: 17440,
      totalAssists: 5660
    },
    advancedStats: {
      per: 24.6,
      tsPct: 59.2,
      eFgPct: 55.9,
      winShares: 273.4,
      wsPer48: 0.228,
      bpm: 5.7,
      obpm: 4.1,
      dbpm: 1.6,
      vorp: 85.7,
      usgPct: 24.3,
      ortg: 115,
      drtg: 99,
      peakYear: '1971-72',
      peakNotes: 'Averaged 34.8 PPG and 16.6 RPG while shooting 57.4% FG, winning his second consecutive MVP award.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 69.2, pctOfAttempts: 52.0 },
      paintNonRA: { fgPct: 58.4, pctOfAttempts: 38.0 },
      midRange: { fgPct: 44.0, pctOfAttempts: 9.8 },
      cornerThree: { fgPct: 0.0, pctOfAttempts: 0.1 },
      aboveBreakThree: { fgPct: 5.6, pctOfAttempts: 0.1 }
    },
    arcadeStats: {
      threePoint: 30,
      midRange: 88,
      dunk: 92,
      layup: 96,
      speed: 78,
      clutch: 96,
      signatureMove: 'Unblockable 7-Foot-2 Skyhook'
    },
    bestGames: [
      {
        id: 'kareem-55-celtics',
        date: 'December 10, 1971',
        matchup: 'vs. Boston Celtics (W 120-104)',
        pts: 55,
        reb: 18,
        ast: 3,
        stl: 0,
        blk: 0,
        fgm: '23-36 FG',
        ftm: '9-11 FT',
        gameScore: 45.0,
        headline: '55 Points Against Dave Cowens & The Celtics',
        significance: 'Total clinic on post moves and skyhooks against Boston’s Hall of Fame frontline.',
        clutchMoments: 'Hit 14 skyhooks over Cowens and Paul Silas.',
        youtubeVideoId: 'f0c_KqB-7Y0'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'kareem-dunk-1',
          title: 'Two-Handed Putback Slam Over Bill Walton',
          category: 'dunks',
          opponent: 'vs. Portland Trail Blazers',
          year: '1977',
          description: 'High-rising flush over Bill Walton.',
          youtubeVideoId: 'y43pCgGf23w'
        }
      ],
      layups: [
        {
          id: 'kareem-layup-1',
          title: 'Finger Roll Finish in Showtime Transition',
          category: 'layups',
          opponent: 'vs. Philadelphia 76ers',
          year: '1982',
          description: 'Trailing Magic Johnson and finishing gracefully off glass.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'kareem-three-1',
          title: 'Rare Corner 3-Pointer in 1986',
          category: 'threes',
          opponent: 'vs. Phoenix Suns',
          year: '1986',
          description: 'Only 1 of 18 career 3-pointers made, right from the corner.',
          youtubeVideoId: '09m8d1Q4Gbc'
        }
      ],
      mid_range: [
        {
          id: 'kareem-mid-1',
          title: 'The Skyhook Over Wilt Chamberlain',
          category: 'mid_range',
          opponent: 'vs. Los Angeles Lakers',
          year: '1971',
          description: 'Elevates to release point at 11 feet where not even Wilt Chamberlain could reach it.',
          youtubeVideoId: 'b7U4Z7O-uGE',
          badge: 'The Greatest Weapon'
        }
      ],
      blocks: [
        {
          id: 'kareem-block-1',
          title: 'Clean Swat on Julius Erving at the Apex',
          category: 'blocks',
          opponent: 'vs. Philadelphia 76ers (1980 Finals)',
          year: '1980',
          description: 'Denies Dr. J’s driving scoop right at the rim.',
          youtubeVideoId: '2bK3Lq0pPzE'
        }
      ],
      steals: [
        {
          id: 'kareem-steal-1',
          title: 'High-Post Pass Deflection to Trigger Showtime Break',
          category: 'steals',
          opponent: 'vs. Boston Celtics',
          year: '1985',
          description: 'Anticipates feed and flips outlet to Magic in one motion.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'kareem-ast-1',
          title: 'Overhead Baseball Outlet Pass to James Worthy',
          category: 'assists',
          opponent: 'vs. Houston Rockets',
          year: '1986',
          description: '70-foot strike directly into Worthy’s hands for a slam.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'kareem-reb-1',
          title: '30-Rebound Night in Milwaukee',
          category: 'rebounds',
          opponent: 'vs. Detroit Pistons',
          year: '1972',
          description: 'Dominating both backboards in an era of towering big men.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'kareem-clutch-1',
          title: 'Double-OT Skyhook Game-Winner (1974 Finals Game 6)',
          category: 'clutch',
          opponent: 'at Boston Celtics (Finals Gm 6)',
          year: '1974',
          description: 'Drills the baseline skyhook with 3 seconds left in double overtime to shock Boston Garden.',
          youtubeVideoId: '8V_1ZxG3GK4',
          badge: 'Finals Skyhook Dagger'
        }
      ],
      handles: [
        {
          id: 'kareem-handle-1',
          title: 'Low-Post Dream Spin and Dip',
          category: 'handles',
          opponent: 'vs. Golden State Warriors',
          year: '1976',
          description: 'Agile pivoting footwork that inspired future generations of big men.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  },
  {
    id: 'nikola-jokic',
    name: 'Nikola Jokić',
    nickname: 'The Joker',
    era: '2020s',
    primaryPosition: 'C',
    positions: ['C'],
    height: "6'11\"",
    weight: '284 lbs',
    wingspan: "7'3\"",
    draft: '2014 R2 Pick 41 (Denver Nuggets)',
    yearsActive: '2015–Present',
    jerseyNumbers: [15],
    teams: ['Denver Nuggets'],
    teamColorPrimary: '#0E2240',
    teamColorSecondary: '#FEC524',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: '3-time NBA MVP, 2023 NBA Champion, and Finals MVP. Drafted during a Taco Bell commercial, Jokić revolutionized the center position with the greatest passing, court vision, and high-efficiency scoring metrics in modern basketball.',
    playstyle: 'Telepathic passing vision, unblockable "Sombor Shuffle" one-legged fadeaway, vacuum rebounding, and surgical basketball IQ.',
    accolades: {
      championships: 1,
      finalsMvp: 1,
      mvps: 3,
      allStar: 7,
      allNbaFirst: 4,
      dpoy: 0,
      scoringTitles: 0,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['3x NBA MVP (2021, 2022, 2024)', '2023 Finals MVP', 'Record for Highest Single-Season PER (32.85)', 'Fastest Triple-Double in NBA History']
    },
    traditionalStats: {
      gamesPlayed: 720,
      ppg: 21.3,
      rpg: 10.9,
      apg: 7.1,
      spg: 1.2,
      bpg: 0.7,
      fgPct: 55.8,
      threePtPct: 35.5,
      ftPct: 83.2,
      totalPoints: 15300,
      totalRebounds: 7850,
      totalAssists: 5120
    },
    advancedStats: {
      per: 28.3,
      tsPct: 63.8,
      eFgPct: 58.6,
      winShares: 122.5,
      wsPer48: 0.256,
      bpm: 9.8,
      obpm: 7.8,
      dbpm: 2.0,
      vorp: 68.4,
      usgPct: 27.2,
      ortg: 124,
      drtg: 106,
      peakYear: '2021-22',
      peakNotes: 'Set the all-time single-season NBA record for Player Efficiency Rating (32.85) and became the first player with 2000 pts, 1000 reb, 500 ast in a season.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 71.5, pctOfAttempts: 36.0 },
      paintNonRA: { fgPct: 55.4, pctOfAttempts: 34.0 },
      midRange: { fgPct: 50.2, pctOfAttempts: 15.0 },
      cornerThree: { fgPct: 38.5, pctOfAttempts: 2.5 },
      aboveBreakThree: { fgPct: 34.8, pctOfAttempts: 12.5 }
    },
    arcadeStats: {
      threePoint: 84,
      midRange: 95,
      dunk: 74,
      layup: 98,
      speed: 74,
      clutch: 97,
      signatureMove: 'Sombor Shuffle One-Foot Rainbow Fadeaway'
    },
    bestGames: [
      {
        id: 'jokic-30-20-10-finals',
        date: 'June 7, 2023',
        matchup: 'at Miami Heat (Finals Gm 3, W 109-94)',
        pts: 32,
        reb: 21,
        ast: 10,
        stl: 0,
        blk: 2,
        fgm: '12-21 FG',
        threePm: '1-2 3PT',
        ftm: '7-8 FT',
        gameScore: 36.7,
        headline: 'First 30-20-10 Triple-Double in NBA Finals History',
        significance: 'Stunned the Miami Heat in their home arena with an all-around dominant performance that put Denver in full control of the championship.',
        clutchMoments: 'Controlled every possession in the 4th quarter with back-door passes to rookie Christian Braun and Jamal Murray.',
        youtubeVideoId: 'O-VzBeOrdAg'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'jokic-dunk-1',
          title: 'Rare Baseline Reverse Jam vs. Lakers',
          category: 'dunks',
          opponent: 'vs. Los Angeles Lakers (WCF)',
          year: '2023',
          description: 'Sneaks along baseline and finishes with two hands.',
          youtubeVideoId: 'qQJ_3v9Y1iY'
        }
      ],
      layups: [
        {
          id: 'jokic-layup-1',
          title: 'No-Look Flipping Tap-In Over Anthony Davis',
          category: 'layups',
          opponent: 'vs. Los Angeles Lakers',
          year: '2023',
          description: 'Spins off AD and flips backwards over the rim for and-one.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'jokic-three-1',
          title: 'Sombor Shuffle High-Arc Three Over Anthony Davis',
          category: 'threes',
          opponent: 'vs. Los Angeles Lakers (WCF Game 1)',
          year: '2023',
          description: 'Fades back off his wrong right foot at the buzzer over Anthony Davis who could only smile in disbelief.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'Unbelievable Rainbow'
        }
      ],
      mid_range: [
        {
          id: 'jokic-mid-1',
          title: 'The Sombor Shuffle Turnaround vs. Clippers',
          category: 'mid_range',
          opponent: 'vs. LA Clippers',
          year: '2020',
          description: 'Trademark one-foot fadeaway over Kawhi Leonard.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'jokic-block-1',
          title: 'Buzzer-Beating Game-Saving Block on Zion Williamson',
          category: 'blocks',
          opponent: 'vs. New Orleans Pelicans',
          year: '2021',
          description: 'Stands firm and blocks Zion’s point-blank layup as the horn sounds to seal the win.',
          youtubeVideoId: '2bK3Lq0pPzE',
          badge: 'Game-Winning Block'
        }
      ],
      steals: [
        {
          id: 'jokic-steal-1',
          title: 'Kicking Deflection / Quick Hands Post Strip',
          category: 'steals',
          opponent: 'vs. Golden State Warriors',
          year: '2022',
          description: 'Rips ball away from Draymond Green and starts 5-man break.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'jokic-ast-1',
          title: 'Full-Court 90-Foot Touchdown Water-Polo Pass',
          category: 'assists',
          opponent: 'vs. Portland Trail Blazers',
          year: '2021',
          description: 'Catches defensive board and immediately flings a one-handed water polo bullet right into Aaron Gordon’s hands.',
          youtubeVideoId: '2Vv9w3Tqg5M',
          badge: '90-Foot Bullet'
        },
        {
          id: 'jokic-ast-2',
          title: 'Behind-The-Head No-Look Needle Through 3 Defenders',
          category: 'assists',
          opponent: 'vs. Phoenix Suns',
          year: '2023',
          description: 'Receives ball at elbow and whips it behind his ear to a cutting Bruce Brown.',
          youtubeVideoId: 'xPq6Z8rJk7Q'
        }
      ],
      rebounds: [
        {
          id: 'jokic-reb-1',
          title: 'Tip Rebounding Clinic vs. Rudy Gobert',
          category: 'rebounds',
          opponent: 'vs. Minnesota Timberwolves (Playoffs)',
          year: '2024',
          description: 'Tips the ball to himself three consecutive times over multiple defenders before securing.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'jokic-clutch-1',
          title: '40-Foot Bank Shot at the Buzzer vs. Warriors',
          category: 'clutch',
          opponent: 'at Golden State Warriors',
          year: '2024',
          description: 'Trailing with 1 second left, hoists a running 40-foot banked prayer to cap an 18-point 4th quarter comeback.',
          youtubeVideoId: 'GEMVGExChVU',
          badge: '40-Foot Game Winner'
        }
      ],
      handles: [
        {
          id: 'jokic-handle-1',
          title: 'Behind-The-Back Dribble in Transition as a 284lb Center',
          category: 'handles',
          opponent: 'vs. Sacramento Kings',
          year: '2023',
          description: 'Dribbles full court and executes smooth behind-the-back move on a guard.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  },
  {
    id: 'victor-wembanyama',
    name: 'Victor Wembanyama',
    nickname: 'Wemby / The Alien',
    era: '2020s',
    primaryPosition: 'C',
    positions: ['C', 'PF'],
    height: "7'4\"",
    weight: '210 lbs',
    wingspan: "8'0\"",
    draft: '2023 R1 Pick 1 (San Antonio Spurs)',
    yearsActive: '2023–Present',
    jerseyNumbers: [1],
    teams: ['San Antonio Spurs'],
    teamColorPrimary: '#000000',
    teamColorSecondary: '#C4CED4',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'A basketball prodigy described by LeBron James as an "alien". Possesses a 7\'4" frame with an 8-foot wingspan, guard handles, step-back three-point shooting, and generational shot-blocking rim deterrence.',
    playstyle: '8-foot wingspan eraser, transition self-alley-oop off backboard, high-release perimeter shooting, and perimeter-to-paint defensive range.',
    accolades: {
      championships: 0,
      finalsMvp: 0,
      mvps: 0,
      allStar: 1,
      allNbaFirst: 0,
      dpoy: 0,
      scoringTitles: 0,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['Unanimous Rookie of the Year (2024)', 'NBA Blocks Leader (2024)', 'All-Defensive First Team (First rookie in NBA history)']
    },
    traditionalStats: {
      gamesPlayed: 110,
      ppg: 22.4,
      rpg: 10.8,
      apg: 3.8,
      spg: 1.3,
      bpg: 3.7,
      fgPct: 46.8,
      threePtPct: 34.2,
      ftPct: 80.5,
      totalPoints: 2460,
      totalRebounds: 1180,
      totalAssists: 418
    },
    advancedStats: {
      per: 24.1,
      tsPct: 57.2,
      eFgPct: 52.8,
      winShares: 8.8,
      wsPer48: 0.148,
      bpm: 5.8,
      obpm: 2.1,
      dbpm: 3.7,
      vorp: 5.2,
      usgPct: 32.2,
      ortg: 107,
      drtg: 101,
      peakYear: '2023-24',
      peakNotes: 'Became the first rookie in NBA history to record 1500+ points, 250+ blocks, and 100+ threes in a season.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 73.1, pctOfAttempts: 32.0 },
      paintNonRA: { fgPct: 44.2, pctOfAttempts: 22.0 },
      midRange: { fgPct: 37.8, pctOfAttempts: 14.0 },
      cornerThree: { fgPct: 36.2, pctOfAttempts: 4.0 },
      aboveBreakThree: { fgPct: 33.6, pctOfAttempts: 28.0 }
    },
    arcadeStats: {
      threePoint: 85,
      midRange: 86,
      dunk: 98,
      layup: 92,
      speed: 88,
      clutch: 92,
      signatureMove: '8-Foot Wingspan Flyby Block & Stepback 3'
    },
    bestGames: [
      {
        id: 'wemby-40-20-knicks',
        date: 'March 29, 2024',
        matchup: 'vs. New York Knicks (W 130-126 OT)',
        pts: 40,
        reb: 20,
        ast: 7,
        stl: 2,
        blk: 1,
        fgm: '13-22 FG',
        threePm: '4-9 3PT',
        ftm: '10-12 FT',
        gameScore: 36.5,
        headline: '40 Points & 20 Rebounds as a 20-Year-Old Rookie',
        significance: 'First rookie with 40 points and 20 rebounds in a game since Shaquille O’Neal in 1993, carrying the Spurs to an overtime thriller.',
        clutchMoments: 'Hit tying 3 in regulation and snatched the decisive defensive rebound in OT.',
        youtubeVideoId: 'y43pCgGf23w'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'wemby-dunk-1',
          title: 'Self-Alley-Oop Off The Backboard in Traffic',
          category: 'dunks',
          opponent: 'vs. Milwaukee Bucks',
          year: '2024',
          description: 'Tosses ball off glass in mid-dribble around Brook Lopez and flushes two-handed.',
          youtubeVideoId: 'qQJ_3v9Y1iY',
          badge: 'Self Off-Glass Slam'
        },
        {
          id: 'wemby-dunk-2',
          title: 'Dunking Without Jumping From Outside the Paint',
          category: 'dunks',
          opponent: 'vs. Phoenix Suns',
          year: '2023',
          description: 'Reaches arm over Kevin Durant and lays it in with rim-bending authority.',
          youtubeVideoId: 'L8bK9W0vW5U'
        }
      ],
      layups: [
        {
          id: 'wemby-layup-1',
          title: 'Finger Roll From Above The Square',
          category: 'layups',
          opponent: 'vs. Golden State Warriors',
          year: '2024',
          description: 'Glides from the free throw line with a single step.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'wemby-three-1',
          title: 'Stepback One-Legged 3-Pointer vs. Giannis',
          category: 'threes',
          opponent: 'vs. Milwaukee Bucks',
          year: '2024',
          description: 'Fades back behind the 3-point line with impossible release height.',
          youtubeVideoId: '09m8d1Q4Gbc'
        }
      ],
      mid_range: [
        {
          id: 'wemby-mid-1',
          title: 'KD-Style Pullup Jumper at the Free Throw Line',
          category: 'mid_range',
          opponent: 'vs. Phoenix Suns',
          year: '2023',
          description: 'Shooting over 6’11” defenders as if they are invisible.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'wemby-block-1',
          title: '10-Block Triple-Double vs. Toronto Raptors',
          category: 'blocks',
          opponent: 'at Toronto Raptors',
          year: '2024',
          description: '27 points, 14 rebounds, 10 blocks, and 5 assists in only 29 minutes.',
          youtubeVideoId: '2bK3Lq0pPzE',
          badge: '10-Block Triple-Double'
        },
        {
          id: 'wemby-block-2',
          title: 'Blocking a 3-Point Shot from the Key',
          category: 'blocks',
          opponent: 'vs. Golden State Warriors',
          year: '2023',
          description: 'Recovering from inside the paint to block Klay Thompson in the corner.',
          youtubeVideoId: 'e8x8A8zQy1w'
        }
      ],
      steals: [
        {
          id: 'wemby-steal-1',
          title: '8-Foot Wingspan Pickoff and Fastbreak Eurostep',
          category: 'steals',
          opponent: 'vs. Denver Nuggets',
          year: '2024',
          description: 'Snags pass mid-air and takes 3 steps across the entire floor.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'wemby-ast-1',
          title: 'Between-The-Legs Bounce Dime to Jeremy Sochan',
          category: 'assists',
          opponent: 'vs. Portland Trail Blazers',
          year: '2024',
          description: 'Point-guard level bounce pass on the perimeter.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'wemby-reb-1',
          title: 'Tip-In Dunk Over Two Defenders Without Jumping',
          category: 'rebounds',
          opponent: 'vs. New York Knicks',
          year: '2024',
          description: 'Grabbing missed shot above rim height.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'wemby-clutch-1',
          title: 'Tie-Breaking 3 and Block in Final Minute vs. Suns',
          category: 'clutch',
          opponent: 'at Phoenix Suns',
          year: '2023',
          description: 'Scored 10 straight 4th quarter points to stun Durant and Booker.',
          youtubeVideoId: '8V_1ZxG3GK4'
        }
      ],
      handles: [
        {
          id: 'wemby-handle-1',
          title: 'Shamgod Move on Rudy Gobert in International Game',
          category: 'handles',
          opponent: 'vs. Team USA / France',
          year: '2024',
          description: 'A 7-foot-4 center executing a pristine Shamgod crossover.',
          youtubeVideoId: 'gK2qL9xXb7Y',
          badge: '7’4” Shamgod'
        }
      ]
    }
  },
  {
    id: 'allen-iverson',
    name: 'Allen Iverson',
    nickname: 'The Answer / A.I.',
    era: '2000s',
    primaryPosition: 'PG',
    positions: ['PG', 'SG'],
    height: "6'0\"",
    weight: '165 lbs',
    wingspan: "6'3\"",
    draft: '1996 R1 Pick 1 (Philadelphia 76ers)',
    yearsActive: '1996–2010',
    jerseyNumbers: [3, 1],
    teams: ['Philadelphia 76ers', 'Denver Nuggets', 'Detroit Pistons', 'Memphis Grizzlies'],
    teamColorPrimary: '#002B5C',
    teamColorSecondary: '#ED174C',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: 'Pound-for-pound one of the toughest, most culturally transformative players in NBA history. 2001 NBA MVP, 4-time scoring champion, 3-time steals leader, and cultural icon who defined basketball style with arm sleeves, cornrows, and heart.',
    playstyle: 'Deadly killer crossover, fearless attacks at the rim absorbing hits from 7-footers, lightning-fast hands, and nonstop 48-minute motor.',
    accolades: {
      championships: 0,
      finalsMvp: 0,
      mvps: 1,
      allStar: 11,
      allNbaFirst: 3,
      dpoy: 0,
      scoringTitles: 4,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: true,
      notableAwards: ['2001 NBA MVP', '4x Scoring Champion (1999, 2001, 2002, 2005)', '3x Steals Champion', 'Rookie of the Year (1997)']
    },
    traditionalStats: {
      gamesPlayed: 914,
      ppg: 26.7,
      rpg: 3.7,
      apg: 6.2,
      spg: 2.2,
      bpg: 0.2,
      fgPct: 42.5,
      threePtPct: 31.3,
      ftPct: 78.0,
      totalPoints: 24368,
      totalRebounds: 3394,
      totalAssists: 5624
    },
    advancedStats: {
      per: 20.9,
      tsPct: 51.8,
      eFgPct: 45.2,
      winShares: 99.0,
      wsPer48: 0.126,
      bpm: 3.2,
      obpm: 3.8,
      dbpm: -0.6,
      vorp: 48.0,
      usgPct: 31.8,
      ortg: 105,
      drtg: 104,
      peakYear: '2000-01',
      peakNotes: 'Averaged 31.1 PPG and 2.5 SPG while leading the 76ers to the NBA Finals and handing the 2001 Lakers their only playoff loss.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 58.2, pctOfAttempts: 34.0 },
      paintNonRA: { fgPct: 38.6, pctOfAttempts: 21.0 },
      midRange: { fgPct: 40.5, pctOfAttempts: 31.0 },
      cornerThree: { fgPct: 36.0, pctOfAttempts: 3.5 },
      aboveBreakThree: { fgPct: 30.5, pctOfAttempts: 10.5 }
    },
    arcadeStats: {
      threePoint: 80,
      midRange: 93,
      dunk: 84,
      layup: 99,
      speed: 99,
      clutch: 96,
      signatureMove: 'Killer Ankle-Breaking Crossover & The Tyronn Lue Stepover'
    },
    bestGames: [
      {
        id: 'ai-48-lakers-g1',
        date: 'June 6, 2001',
        matchup: 'at Los Angeles Lakers (Finals Gm 1, W 107-101 OT)',
        pts: 48,
        reb: 5,
        ast: 6,
        stl: 5,
        blk: 0,
        fgm: '18-41 FG',
        threePm: '3-8 3PT',
        ftm: '9-9 FT',
        gameScore: 33.1,
        headline: '48 Points & The Stepover in Staples Center',
        significance: 'Handed the previously undefeated 11-0 playoff Lakers their only defeat of the 2001 postseason in an iconic one-man show.',
        clutchMoments: 'Crossed Tyronn Lue into a stepback corner jumper and famously stepped right over him.',
        youtubeVideoId: 'O-VzBeOrdAg'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'ai-dunk-1',
          title: 'One-Handed Putback Slam in Traffic at 6-Foot-0',
          category: 'dunks',
          opponent: 'vs. Toronto Raptors',
          year: '2001',
          description: 'Leaping through 3 big men for a vicious tip jam.',
          youtubeVideoId: 'qQJ_3v9Y1iY',
          badge: '6-Foot Putback'
        }
      ],
      layups: [
        {
          id: 'ai-layup-1',
          title: 'Reverse English Scoop Past 3 Defenders',
          category: 'layups',
          opponent: 'vs. Milwaukee Bucks',
          year: '2001',
          description: 'Hangs under rim and puts backspin on the ball to trickle in.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'ai-three-1',
          title: 'Pull-Up Transition Three vs. Celtics',
          category: 'threes',
          opponent: 'vs. Boston Celtics',
          year: '2002',
          description: 'Sprints coast to coast and hits pullup 3 with defender lunging.',
          youtubeVideoId: '09m8d1Q4Gbc'
        }
      ],
      mid_range: [
        {
          id: 'ai-mid-1',
          title: 'The Tyronn Lue Stepover Jumper (2001 Finals)',
          category: 'mid_range',
          opponent: 'at Los Angeles Lakers (Finals)',
          year: '2001',
          description: 'The most iconic stepover and corner jumper in NBA history.',
          youtubeVideoId: 'b7U4Z7O-uGE',
          badge: 'The Stepover'
        }
      ],
      blocks: [
        {
          id: 'ai-block-1',
          title: 'Chasedown Swat at the Rim',
          category: 'blocks',
          opponent: 'vs. Charlotte Hornets',
          year: '1999',
          description: 'Using pure speed to track down a breakaway layup.',
          youtubeVideoId: '2bK3Lq0pPzE'
        }
      ],
      steals: [
        {
          id: 'ai-steal-1',
          title: '9 Steals Against Orlando Magic in Playoffs',
          category: 'steals',
          opponent: 'vs. Orlando Magic (Playoffs)',
          year: '1999',
          description: 'NBA single-game playoff steals record with 10 steals.',
          youtubeVideoId: 'kP-Q2Vl_2yY',
          badge: 'NBA Playoff Record'
        }
      ],
      assists: [
        {
          id: 'ai-ast-1',
          title: 'Between-The-Legs Bounce Pass to Mutombo',
          category: 'assists',
          opponent: 'vs. Indiana Pacers',
          year: '2001',
          description: 'Drives baseline, whips bounce pass through defender’s legs.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'ai-reb-1',
          title: 'Snatching Defensive Rebound Out of Big Man’s Hands',
          category: 'rebounds',
          opponent: 'vs. New York Knicks',
          year: '2000',
          description: 'Fearless battle in the paint.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'ai-clutch-1',
          title: 'Game 7 Winner vs. Toronto Raptors (2001)',
          category: 'clutch',
          opponent: 'vs. Toronto Raptors',
          year: '2001',
          description: 'Battled Vince Carter in an iconic 7-game duel to advance to ECF.',
          youtubeVideoId: '8V_1ZxG3GK4'
        }
      ],
      handles: [
        {
          id: 'ai-handle-1',
          title: 'The Rookie Crossover on Michael Jordan',
          category: 'handles',
          opponent: 'vs. Chicago Bulls',
          year: '1997',
          description: 'A 21-year-old rookie sizes up His Airness, hits him with a double crossover, and drains the jumper.',
          youtubeVideoId: 'gK2qL9xXb7Y',
          badge: 'Crossed His Airness'
        }
      ]
    }
  },
  {
    id: 'kevin-durant',
    name: 'Kevin Durant',
    nickname: 'KD / The Slim Reaper / Easy Money Sniper',
    era: '2010s',
    primaryPosition: 'SF',
    positions: ['SF', 'PF'],
    height: "6'11\"",
    weight: '240 lbs',
    wingspan: "7'5\"",
    draft: '2007 R1 Pick 2 (Seattle SuperSonics)',
    yearsActive: '2007–Present',
    jerseyNumbers: [35, 7],
    teams: ['Seattle SuperSonics', 'Oklahoma City Thunder', 'Golden State Warriors', 'Brooklyn Nets', 'Phoenix Suns'],
    teamColorPrimary: '#1D1160',
    teamColorSecondary: '#E56020',
    avatarUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80',
    actionPhotoUrl: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80',
    summaryBio: '2-time NBA Champion, 2-time Finals MVP, 2014 NBA MVP, and 4-time scoring champion. A 7-footer with guard agility and an unblockable high-release jumper, KD is arguably the most versatile pure scoring machine the game has ever seen.',
    playstyle: '7-foot unguardable high release pull-up, deadly crossover into mid-range daggers, and elite weak-side rim deterrence.',
    accolades: {
      championships: 2,
      finalsMvp: 2,
      mvps: 1,
      allStar: 14,
      allNbaFirst: 6,
      dpoy: 0,
      scoringTitles: 4,
      assistTitles: 0,
      reboundTitles: 0,
      hallOfFame: false,
      notableAwards: ['2x Finals MVP (2017, 2018)', '2014 MVP', '4x Olympic Gold Medalist', 'Rookie of the Year (2008)']
    },
    traditionalStats: {
      gamesPlayed: 1060,
      ppg: 27.3,
      rpg: 7.0,
      apg: 4.4,
      spg: 1.1,
      bpg: 1.1,
      fgPct: 50.1,
      threePtPct: 38.7,
      ftPct: 88.4,
      totalPoints: 28900,
      totalRebounds: 7450,
      totalAssists: 4680
    },
    advancedStats: {
      per: 25.1,
      tsPct: 62.0,
      eFgPct: 54.9,
      winShares: 167.5,
      wsPer48: 0.214,
      bpm: 6.6,
      obpm: 5.8,
      dbpm: 0.8,
      vorp: 81.3,
      usgPct: 30.2,
      ortg: 118,
      drtg: 105,
      peakYear: '2013-14',
      peakNotes: 'Averaged 32.0 PPG, 7.4 RPG, 5.5 APG on 50-39-87 splits, scoring 25+ points in 41 straight games to win the MVP.'
    },
    shotZoneStats: {
      restrictedArea: { fgPct: 73.0, pctOfAttempts: 22.0 },
      paintNonRA: { fgPct: 49.5, pctOfAttempts: 18.0 },
      midRange: { fgPct: 51.8, pctOfAttempts: 34.0 },
      cornerThree: { fgPct: 44.5, pctOfAttempts: 4.0 },
      aboveBreakThree: { fgPct: 37.8, pctOfAttempts: 22.0 }
    },
    arcadeStats: {
      threePoint: 94,
      midRange: 99,
      dunk: 90,
      layup: 94,
      speed: 89,
      clutch: 98,
      signatureMove: 'Unblockable 7-Foot Pullup Dagger over Outstretched Hands'
    },
    bestGames: [
      {
        id: 'kd-49-bucks-g5',
        date: 'June 15, 2021',
        matchup: 'vs. Milwaukee Bucks (Playoffs Gm 5, W 114-108)',
        pts: 49,
        reb: 17,
        ast: 10,
        stl: 3,
        blk: 2,
        fgm: '16-23 FG',
        threePm: '4-9 3PT',
        ftm: '13-16 FT',
        gameScore: 49.6,
        headline: '49-Point Triple Double Playing All 48 Minutes',
        significance: 'With Kyrie out and Harden injured, Durant put on one of the greatest individual playoff displays in history, playing every second.',
        clutchMoments: 'Scored 20 points in the 4th quarter and hit the dagger 3 with 50 seconds left.',
        youtubeVideoId: 'y43pCgGf23w'
      }
    ],
    highlights: {
      dunks: [
        {
          id: 'kd-dunk-1',
          title: 'Transition Tomahawk Slam Over Brendan Haywood',
          category: 'dunks',
          opponent: 'vs. Dallas Mavericks',
          year: '2011',
          description: 'Glides across the lane and posters 7-footer Haywood.',
          youtubeVideoId: 'qQJ_3v9Y1iY'
        }
      ],
      layups: [
        {
          id: 'kd-layup-1',
          title: 'Finger Roll Scoop Past LeBron James in Finals',
          category: 'layups',
          opponent: 'vs. Cleveland Cavaliers (2017 Finals)',
          year: '2017',
          description: 'Downhill drive in transition with high-off-glass finish.',
          youtubeVideoId: 'w7vsjOHq5E0'
        }
      ],
      threes: [
        {
          id: 'kd-three-1',
          title: 'Back-to-Back Finals Game 3 Daggers (2017 & 2018)',
          category: 'threes',
          opponent: 'at Cleveland Cavaliers (Finals Game 3)',
          year: '2017',
          description: 'Pulls up from the exact same spot in back-to-back Finals to break Cleveland’s heart.',
          youtubeVideoId: '09m8d1Q4Gbc',
          badge: 'Finals Dagger'
        }
      ],
      mid_range: [
        {
          id: 'kd-mid-1',
          title: '7-Foot Turnaround Baseline Fadeaway',
          category: 'mid_range',
          opponent: 'vs. Boston Celtics',
          year: '2021',
          description: 'Pure high-release stroke that cannot be contested.',
          youtubeVideoId: 'b7U4Z7O-uGE'
        }
      ],
      blocks: [
        {
          id: 'kd-block-1',
          title: 'Weakside Eraser on James Harden in Playoffs',
          category: 'blocks',
          opponent: 'vs. Houston Rockets (Playoffs)',
          year: '2018',
          description: 'Rotates from the weak side to swat stepback attempt out of bounds.',
          youtubeVideoId: '2bK3Lq0pPzE'
        }
      ],
      steals: [
        {
          id: 'kd-steal-1',
          title: 'Tip-Away Pass and Fastbreak Coast-to-Coast Slam',
          category: 'steals',
          opponent: 'vs. San Antonio Spurs',
          year: '2016',
          description: 'Long wingspan interception into lightning dunk.',
          youtubeVideoId: 'kP-Q2Vl_2yY'
        }
      ],
      assists: [
        {
          id: 'kd-ast-1',
          title: 'Dime Through Double-Team to Klay Thompson',
          category: 'assists',
          opponent: 'vs. Portland Trail Blazers',
          year: '2019',
          description: 'Wraps around two defenders to find open corner shooter.',
          youtubeVideoId: '2Vv9w3Tqg5M'
        }
      ],
      rebounds: [
        {
          id: 'kd-reb-1',
          title: '17 Rebounds in Game 5 vs. Milwaukee',
          category: 'rebounds',
          opponent: 'vs. Milwaukee Bucks',
          year: '2021',
          description: 'Controlling the paint on both ends against Giannis.',
          youtubeVideoId: 'P_4-sQ7m5Qk'
        }
      ],
      clutch: [
        {
          id: 'kd-clutch-1',
          title: 'The Toe-On-The-Line Game 7 Shot vs. Bucks (2021)',
          category: 'clutch',
          opponent: 'vs. Milwaukee Bucks (Playoffs Gm 7)',
          year: '2021',
          description: 'Hits impossible turnaround jumper with 1 second left to tie game 7.',
          youtubeVideoId: '8V_1ZxG3GK4'
        }
      ],
      handles: [
        {
          id: 'kd-handle-1',
          title: 'Low Crossover That Froze Chris Paul',
          category: 'handles',
          opponent: 'vs. LA Clippers',
          year: '2014',
          description: 'A 7-footer with Allen Iverson style crossover.',
          youtubeVideoId: 'gK2qL9xXb7Y'
        }
      ]
    }
  }
];
