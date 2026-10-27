import React, { useState } from 'react';
import { NBAPlayer } from '../types/nba';
import { PLAYERS_DB } from '../data/allPlayers';
import { X, Trophy, Check, ArrowRight } from 'lucide-react';

interface PlayerComparisonModalProps {
  player1: NBAPlayer;
  onClose: () => void;
  onSelectPlayer: (p: NBAPlayer) => void;
}

export const PlayerComparisonModal: React.FC<PlayerComparisonModalProps> = ({
  player1,
  onClose,
  onSelectPlayer,
}) => {
  const [selectedPlayer2Id, setSelectedPlayer2Id] = useState<string>(() => {
    // Pick an iconic counterpart by default
    if (player1.id === 'michael-jordan') return 'lebron-james';
    if (player1.id === 'lebron-james') return 'michael-jordan';
    if (player1.id === 'kobe-bryant') return 'michael-jordan';
    if (player1.id === 'stephen-curry') return 'kobe-bryant';
    if (player1.id === 'shaquille-oneal') return 'kareem-abdul-jabbar';
    return PLAYERS_DB.find((p) => p.id !== player1.id)?.id || PLAYERS_DB[0].id;
  });

  const player2 = PLAYERS_DB.find((p) => p.id === selectedPlayer2Id) || PLAYERS_DB[1];

  const compareStat = (val1: number, val2: number, higherIsBetter = true) => {
    if (val1 === val2) return 'tie';
    if (higherIsBetter) {
      return val1 > val2 ? 'p1' : 'p2';
    }
    return val1 < val2 ? 'p1' : 'p2';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto font-sans">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-bold mb-1">
            Head-to-Head Showdown
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Legendary Tale of the Tape
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Compare career advanced statistics, historical dominance, and trophy cases side-by-side.
          </p>
        </div>

        {/* Player Headers & Selectors */}
        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-800">
          {/* Player 1 */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
            <div className="text-xs text-amber-400 font-bold uppercase mb-1">Player 1 (Selected)</div>
            <h3 className="font-condensed text-2xl sm:text-3xl font-black text-white">{player1.name}</h3>
            <div className="text-xs text-neutral-400 font-mono-numbers mt-1">
              {player1.primaryPosition} · {player1.era} Era · #{player1.jerseyNumbers[0]}
            </div>
          </div>

          {/* Player 2 Selector */}
          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-center">
            <div className="text-xs text-neutral-400 font-bold uppercase mb-1">Compare Against</div>
            <select
              value={selectedPlayer2Id}
              onChange={(e) => setSelectedPlayer2Id(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-700 text-white font-bold text-sm sm:text-base rounded-lg px-3 py-2 focus:outline-none focus:border-amber-500 cursor-pointer text-center"
            >
              {PLAYERS_DB.map((p) => (
                <option key={p.id} value={p.id} disabled={p.id === player1.id}>
                  {p.name} ({p.primaryPosition}, {p.era})
                </option>
              ))}
            </select>
            <div className="text-xs text-neutral-400 font-mono-numbers mt-2">
              {player2.primaryPosition} · {player2.era} Era · #{player2.jerseyNumbers[0]}
            </div>
          </div>
        </div>

        {/* 1. Advanced Metrics Head-to-Head */}
        <div className="mt-6">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
            Advanced Analytics Showdown
          </div>
          <div className="space-y-3 font-mono-numbers text-xs">
            {/* PER */}
            <StatRow
              label="Player Efficiency Rating (PER)"
              val1={player1.advancedStats.per}
              val2={player2.advancedStats.per}
              winner={compareStat(player1.advancedStats.per, player2.advancedStats.per)}
            />
            {/* TS% */}
            <StatRow
              label="True Shooting % (TS%)"
              val1={player1.advancedStats.tsPct}
              val2={player2.advancedStats.tsPct}
              suffix="%"
              winner={compareStat(player1.advancedStats.tsPct, player2.advancedStats.tsPct)}
            />
            {/* Win Shares */}
            <StatRow
              label="Career Win Shares (WS)"
              val1={player1.advancedStats.winShares}
              val2={player2.advancedStats.winShares}
              winner={compareStat(player1.advancedStats.winShares, player2.advancedStats.winShares)}
            />
            {/* WS/48 */}
            <StatRow
              label="Win Shares Per 48 Min (WS/48)"
              val1={player1.advancedStats.wsPer48}
              val2={player2.advancedStats.wsPer48}
              formatDecimals={3}
              winner={compareStat(player1.advancedStats.wsPer48, player2.advancedStats.wsPer48)}
            />
            {/* BPM */}
            <StatRow
              label="Box Plus/Minus (BPM)"
              val1={player1.advancedStats.bpm}
              val2={player2.advancedStats.bpm}
              prefix="+"
              winner={compareStat(player1.advancedStats.bpm, player2.advancedStats.bpm)}
            />
            {/* VORP */}
            <StatRow
              label="Value Over Replacement Player (VORP)"
              val1={player1.advancedStats.vorp}
              val2={player2.advancedStats.vorp}
              winner={compareStat(player1.advancedStats.vorp, player2.advancedStats.vorp)}
            />
            {/* Usage % */}
            <StatRow
              label="Usage Rate (USG%)"
              val1={player1.advancedStats.usgPct}
              val2={player2.advancedStats.usgPct}
              suffix="%"
              winner={compareStat(player1.advancedStats.usgPct, player2.advancedStats.usgPct)}
            />
            {/* Offensive Rating */}
            <StatRow
              label="Offensive Rating (ORTG)"
              val1={player1.advancedStats.ortg}
              val2={player2.advancedStats.ortg}
              winner={compareStat(player1.advancedStats.ortg, player2.advancedStats.ortg)}
            />
          </div>
        </div>

        {/* 2. Traditional Career Per-Game Stats */}
        <div className="mt-8">
          <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
            Traditional Per-Game Stats
          </div>
          <div className="space-y-3 font-mono-numbers text-xs">
            <StatRow
              label="Points Per Game (PPG)"
              val1={player1.traditionalStats.ppg}
              val2={player2.traditionalStats.ppg}
              winner={compareStat(player1.traditionalStats.ppg, player2.traditionalStats.ppg)}
            />
            <StatRow
              label="Rebounds Per Game (RPG)"
              val1={player1.traditionalStats.rpg}
              val2={player2.traditionalStats.rpg}
              winner={compareStat(player1.traditionalStats.rpg, player2.traditionalStats.rpg)}
            />
            <StatRow
              label="Assists Per Game (APG)"
              val1={player1.traditionalStats.apg}
              val2={player2.traditionalStats.apg}
              winner={compareStat(player1.traditionalStats.apg, player2.traditionalStats.apg)}
            />
            <StatRow
              label="Steals Per Game (SPG)"
              val1={player1.traditionalStats.spg}
              val2={player2.traditionalStats.spg}
              winner={compareStat(player1.traditionalStats.spg, player2.traditionalStats.spg)}
            />
            <StatRow
              label="Blocks Per Game (BPG)"
              val1={player1.traditionalStats.bpg}
              val2={player2.traditionalStats.bpg}
              winner={compareStat(player1.traditionalStats.bpg, player2.traditionalStats.bpg)}
            />
            <StatRow
              label="Field Goal % (FG%)"
              val1={player1.traditionalStats.fgPct}
              val2={player2.traditionalStats.fgPct}
              suffix="%"
              winner={compareStat(player1.traditionalStats.fgPct, player2.traditionalStats.fgPct)}
            />
            <StatRow
              label="Total Career Points"
              val1={player1.traditionalStats.totalPoints}
              val2={player2.traditionalStats.totalPoints}
              winner={compareStat(player1.traditionalStats.totalPoints, player2.traditionalStats.totalPoints)}
            />
          </div>
        </div>

        {/* 3. Accolades & Hardware Showdown */}
        <div className="mt-8">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <span>Trophy Case & Hardware</span>
          </div>
          <div className="space-y-3 font-mono-numbers text-xs">
            <StatRow
              label="NBA Championships"
              val1={player1.accolades.championships}
              val2={player2.accolades.championships}
              winner={compareStat(player1.accolades.championships, player2.accolades.championships)}
            />
            <StatRow
              label="Finals MVPs"
              val1={player1.accolades.finalsMvp}
              val2={player2.accolades.finalsMvp}
              winner={compareStat(player1.accolades.finalsMvp, player2.accolades.finalsMvp)}
            />
            <StatRow
              label="Regular Season MVPs"
              val1={player1.accolades.mvps}
              val2={player2.accolades.mvps}
              winner={compareStat(player1.accolades.mvps, player2.accolades.mvps)}
            />
            <StatRow
              label="All-Star Selections"
              val1={player1.accolades.allStar}
              val2={player2.accolades.allStar}
              winner={compareStat(player1.accolades.allStar, player2.accolades.allStar)}
            />
            <StatRow
              label="Scoring Titles"
              val1={player1.accolades.scoringTitles}
              val2={player2.accolades.scoringTitles}
              winner={compareStat(player1.accolades.scoringTitles, player2.accolades.scoringTitles)}
            />
          </div>
        </div>

        {/* Switch Profile CTA */}
        <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-300 transition-colors"
          >
            Close Comparison
          </button>

          <button
            onClick={() => {
              onSelectPlayer(player2);
              onClose();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold transition-transform hover:scale-105 active:scale-95"
          >
            <span>Switch to {player2.name}’s Vault</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface StatRowProps {
  label: string;
  val1: number;
  val2: number;
  winner: 'p1' | 'p2' | 'tie';
  prefix?: string;
  suffix?: string;
  formatDecimals?: number;
}

const StatRow: React.FC<StatRowProps> = ({
  label,
  val1,
  val2,
  winner,
  prefix = '',
  suffix = '',
  formatDecimals,
}) => {
  const displayVal = (v: number) => {
    if (formatDecimals !== undefined) return v.toFixed(formatDecimals);
    return v.toLocaleString();
  };

  return (
    <div className="p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/80 flex items-center justify-between">
      {/* Player 1 Stat */}
      <div className={`w-28 text-left ${winner === 'p1' ? 'font-black text-amber-400' : 'text-neutral-400'}`}>
        {prefix}{displayVal(val1)}{suffix}
        {winner === 'p1' && <span className="ml-1 text-[10px] text-amber-500 font-bold">★</span>}
      </div>

      {/* Metric Label */}
      <div className="font-sans font-medium text-neutral-300 text-center flex-1 truncate px-2">
        {label}
      </div>

      {/* Player 2 Stat */}
      <div className={`w-28 text-right ${winner === 'p2' ? 'font-black text-amber-400' : 'text-neutral-400'}`}>
        {winner === 'p2' && <span className="mr-1 text-[10px] text-amber-500 font-bold">★</span>}
        {prefix}{displayVal(val2)}{suffix}
      </div>
    </div>
  );
};
