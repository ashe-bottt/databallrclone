import { ALL_PLAYERS } from './players';
import { ADDITIONAL_PLAYERS } from './morePlayers';
import { NBAPlayer } from '../types/nba';

export const PLAYERS_DB: NBAPlayer[] = [...ALL_PLAYERS, ...ADDITIONAL_PLAYERS];

export function getPlayerById(id: string): NBAPlayer | undefined {
  return PLAYERS_DB.find((p) => p.id === id || p.name.toLowerCase() === id.toLowerCase());
}

export function searchPlayersLocally(query: string): NBAPlayer[] {
  if (!query || query.trim() === '') return PLAYERS_DB;
  const q = query.toLowerCase().trim();
  return PLAYERS_DB.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nickname.toLowerCase().includes(q) ||
      p.teams.some((t) => t.toLowerCase().includes(q)) ||
      p.positions.some((pos) => pos.toLowerCase().includes(q)) ||
      p.era.toLowerCase().includes(q)
  );
}
