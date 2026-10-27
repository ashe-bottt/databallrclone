import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { PLAYERS_DB } from './src/data/allPlayers.ts';
import { NBAPlayer } from './src/types/nba.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini client if API key is available
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// API endpoint to search for any player or retrieve an AI scout profile
app.post('/api/player-scout', async (req: Request, res: Response): Promise<void> => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string') {
      res.status(400).json({ error: 'Query is required' });
      return;
    }

    const cleanQuery = query.trim().toLowerCase();

    // 1. Check if player exists in our rich local database
    const localMatch = PLAYERS_DB.find(
      (p) =>
        p.id.toLowerCase() === cleanQuery ||
        p.name.toLowerCase() === cleanQuery ||
        p.name.toLowerCase().includes(cleanQuery) ||
        p.nickname.toLowerCase().includes(cleanQuery)
    );

    if (localMatch) {
      res.json({ player: localMatch, source: 'database' });
      return;
    }

    // 2. If not found locally and AI is available, generate complete authentic NBA player data
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: `You are the ultimate NBA historian and statistical analyst. Generate comprehensive career data, career advanced statistics, career best games, and highlight play catalog for the NBA player matching: "${query}".
If the player is not an NBA player, identify the closest historical or current NBA player.
Ensure accurate historical career numbers (traditional and advanced stats such as PER, TS%, Win Shares, BPM, VORP, ORTG/DRTG) and realistic YouTube video search tokens or real game highlights.
Categories of highlights must include: dunks, layups, threes, mid_range, blocks, steals, assists, rebounds, clutch, handles.`,
          config: {
            responseMimeType: 'application/json',
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                nickname: { type: Type.STRING },
                era: { type: Type.STRING, enum: ['60s-70s', '80s', '90s', '2000s', '2010s', '2020s'] },
                primaryPosition: { type: Type.STRING, enum: ['PG', 'SG', 'SF', 'PF', 'C'] },
                positions: { type: Type.ARRAY, items: { type: Type.STRING } },
                height: { type: Type.STRING },
                weight: { type: Type.STRING },
                wingspan: { type: Type.STRING },
                draft: { type: Type.STRING },
                yearsActive: { type: Type.STRING },
                jerseyNumbers: { type: Type.ARRAY, items: { type: Type.INTEGER } },
                teams: { type: Type.ARRAY, items: { type: Type.STRING } },
                teamColorPrimary: { type: Type.STRING },
                teamColorSecondary: { type: Type.STRING },
                avatarUrl: { type: Type.STRING },
                actionPhotoUrl: { type: Type.STRING },
                summaryBio: { type: Type.STRING },
                playstyle: { type: Type.STRING },
                accolades: {
                  type: Type.OBJECT,
                  properties: {
                    championships: { type: Type.INTEGER },
                    finalsMvp: { type: Type.INTEGER },
                    mvps: { type: Type.INTEGER },
                    allStar: { type: Type.INTEGER },
                    allNbaFirst: { type: Type.INTEGER },
                    dpoy: { type: Type.INTEGER },
                    scoringTitles: { type: Type.INTEGER },
                    assistTitles: { type: Type.INTEGER },
                    reboundTitles: { type: Type.INTEGER },
                    hallOfFame: { type: Type.BOOLEAN },
                    notableAwards: { type: Type.ARRAY, items: { type: Type.STRING } },
                  },
                  required: ['championships', 'finalsMvp', 'mvps', 'allStar', 'hallOfFame', 'notableAwards'],
                },
                traditionalStats: {
                  type: Type.OBJECT,
                  properties: {
                    gamesPlayed: { type: Type.INTEGER },
                    ppg: { type: Type.NUMBER },
                    rpg: { type: Type.NUMBER },
                    apg: { type: Type.NUMBER },
                    spg: { type: Type.NUMBER },
                    bpg: { type: Type.NUMBER },
                    fgPct: { type: Type.NUMBER },
                    threePtPct: { type: Type.NUMBER },
                    ftPct: { type: Type.NUMBER },
                    totalPoints: { type: Type.INTEGER },
                    totalRebounds: { type: Type.INTEGER },
                    totalAssists: { type: Type.INTEGER },
                  },
                  required: ['gamesPlayed', 'ppg', 'rpg', 'apg', 'fgPct', 'totalPoints'],
                },
                advancedStats: {
                  type: Type.OBJECT,
                  properties: {
                    per: { type: Type.NUMBER },
                    tsPct: { type: Type.NUMBER },
                    eFgPct: { type: Type.NUMBER },
                    winShares: { type: Type.NUMBER },
                    wsPer48: { type: Type.NUMBER },
                    bpm: { type: Type.NUMBER },
                    obpm: { type: Type.NUMBER },
                    dbpm: { type: Type.NUMBER },
                    vorp: { type: Type.NUMBER },
                    usgPct: { type: Type.NUMBER },
                    ortg: { type: Type.NUMBER },
                    drtg: { type: Type.NUMBER },
                    peakYear: { type: Type.STRING },
                    peakNotes: { type: Type.STRING },
                  },
                  required: ['per', 'tsPct', 'winShares', 'bpm', 'vorp', 'peakYear', 'peakNotes'],
                },
                shotZoneStats: {
                  type: Type.OBJECT,
                  properties: {
                    restrictedArea: {
                      type: Type.OBJECT,
                      properties: { fgPct: { type: Type.NUMBER }, pctOfAttempts: { type: Type.NUMBER } },
                    },
                    paintNonRA: {
                      type: Type.OBJECT,
                      properties: { fgPct: { type: Type.NUMBER }, pctOfAttempts: { type: Type.NUMBER } },
                    },
                    midRange: {
                      type: Type.OBJECT,
                      properties: { fgPct: { type: Type.NUMBER }, pctOfAttempts: { type: Type.NUMBER } },
                    },
                    cornerThree: {
                      type: Type.OBJECT,
                      properties: { fgPct: { type: Type.NUMBER }, pctOfAttempts: { type: Type.NUMBER } },
                    },
                    aboveBreakThree: {
                      type: Type.OBJECT,
                      properties: { fgPct: { type: Type.NUMBER }, pctOfAttempts: { type: Type.NUMBER } },
                    },
                  },
                },
                arcadeStats: {
                  type: Type.OBJECT,
                  properties: {
                    threePoint: { type: Type.INTEGER },
                    midRange: { type: Type.INTEGER },
                    dunk: { type: Type.INTEGER },
                    layup: { type: Type.INTEGER },
                    speed: { type: Type.INTEGER },
                    clutch: { type: Type.INTEGER },
                    signatureMove: { type: Type.STRING },
                  },
                  required: ['threePoint', 'midRange', 'dunk', 'layup', 'speed', 'clutch', 'signatureMove'],
                },
                bestGames: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      date: { type: Type.STRING },
                      matchup: { type: Type.STRING },
                      pts: { type: Type.INTEGER },
                      reb: { type: Type.INTEGER },
                      ast: { type: Type.INTEGER },
                      stl: { type: Type.INTEGER },
                      blk: { type: Type.INTEGER },
                      fgm: { type: Type.STRING },
                      threePm: { type: Type.STRING },
                      ftm: { type: Type.STRING },
                      gameScore: { type: Type.NUMBER },
                      headline: { type: Type.STRING },
                      significance: { type: Type.STRING },
                      clutchMoments: { type: Type.STRING },
                      youtubeVideoId: { type: Type.STRING },
                    },
                    required: ['id', 'date', 'matchup', 'pts', 'reb', 'ast', 'headline', 'significance'],
                  },
                },
                highlights: {
                  type: Type.OBJECT,
                  properties: {
                    dunks: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    layups: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    threes: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    mid_range: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    blocks: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    steals: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    assists: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    rebounds: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    clutch: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                    handles: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          id: { type: Type.STRING },
                          title: { type: Type.STRING },
                          category: { type: Type.STRING },
                          opponent: { type: Type.STRING },
                          year: { type: Type.STRING },
                          description: { type: Type.STRING },
                          youtubeVideoId: { type: Type.STRING },
                          badge: { type: Type.STRING },
                        },
                      },
                    },
                  },
                },
              },
              required: [
                'id',
                'name',
                'nickname',
                'era',
                'primaryPosition',
                'positions',
                'height',
                'weight',
                'teams',
                'summaryBio',
                'accolades',
                'traditionalStats',
                'advancedStats',
                'arcadeStats',
                'bestGames',
                'highlights',
              ],
            },
          },
        });

        const jsonText = response.text?.trim() || '{}';
        const parsedPlayer: NBAPlayer = JSON.parse(jsonText);

        // Fill in default colors and placeholders if needed
        if (!parsedPlayer.teamColorPrimary) parsedPlayer.teamColorPrimary = '#1D428A';
        if (!parsedPlayer.teamColorSecondary) parsedPlayer.teamColorSecondary = '#FFC72C';
        if (!parsedPlayer.avatarUrl) {
          parsedPlayer.avatarUrl = 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&auto=format&fit=crop&q=80';
        }
        if (!parsedPlayer.actionPhotoUrl) {
          parsedPlayer.actionPhotoUrl = 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?w=1200&auto=format&fit=crop&q=80';
        }

        res.json({ player: parsedPlayer, source: 'gemini' });
        return;
      } catch (geminiError: any) {
        console.error('Gemini scout error, falling back:', geminiError?.message || geminiError);
      }
    }

    // 3. Fallback: return closest match or partial query match from database
    const partialMatch = PLAYERS_DB.find((p) =>
      p.name.toLowerCase().split(' ').some((part) => cleanQuery.includes(part) || part.includes(cleanQuery))
    );

    if (partialMatch) {
      res.json({ player: partialMatch, source: 'database_approximate' });
      return;
    }

    // Default to Michael Jordan or first player
    res.json({ player: PLAYERS_DB[0], source: 'database_default', notFoundQuery: query });
  } catch (err: any) {
    console.error('Server error handling player scout:', err);
    res.status(500).json({ error: 'Failed to search player' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, () => {
    console.log(`Courtside Vault server listening on port ${PORT}`);
  });
}

startServer();
