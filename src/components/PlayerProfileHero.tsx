import React from 'react';
import { NBAPlayer } from '../types/nba';
import { Trophy, Award, Gamepad2, ArrowDownCircle, GitCompare, Star, ShieldCheck } from 'lucide-react';

interface PlayerProfileHeroProps {
  player: NBAPlayer;
  onOpenArcade: () => void;
  onOpenCompare: () => void;
  onScrollToHighlights: () => void;
}

export const PlayerProfileHero: React.FC<PlayerProfileHeroProps> = ({
  player,
  onOpenArcade,
  onOpenCompare,
  onScrollToHighlights,
}) => {
  const acc = player.accolades;

  return (
    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl">
      {/* Background Court Lighting & Accent Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: player.teamColorPrimary || '#CE1141' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: player.teamColorSecondary || '#FDB927' }}
      />

      <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left Column: Player Bio & Identity */}
        <div className="flex-1 space-y-4">
          {/* Metadata Bar (Zero-Pill discipline: unboxed clean text separated by dots) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400 font-mono-numbers">
            <span className="font-bold text-amber-500 uppercase tracking-widest">{player.era} Era</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-300">{player.primaryPosition}</span>
            <span aria-hidden="true">·</span>
            <span>{player.height} ({player.weight})</span>
            {player.wingspan && (
              <>
                <span aria-hidden="true">·</span>
                <span>{player.wingspan} Wingspan</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{player.yearsActive}</span>
          </div>

          {/* Name & Nickname Title Lockup */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="font-condensed text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none"
              >
                {player.name}
              </span>
              <span
                className="font-condensed text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-700 select-none"
              >
                #{player.jerseyNumbers[0]}
              </span>
            </div>
            {player.nickname && (
              <p className="text-sm lg:text-base font-medium text-amber-400/90 mt-1 italic">
                "{player.nickname}"
              </p>
            )}
          </div>

          {/* Teams Active & Draft Pedigree */}
          <div className="text-xs text-neutral-400 space-y-1">
            <div>
              <span className="text-neutral-500">Franchises: </span>
              <span className="text-neutral-200 font-medium">{player.teams.join(' · ')}</span>
            </div>
            <div>
              <span className="text-neutral-500">Draft: </span>
              <span className="text-neutral-300 font-mono-numbers">{player.draft}</span>
            </div>
          </div>

          {/* Executive Summary Bio */}
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl">
            {player.summaryBio}
          </p>

          {/* Signature Playstyle */}
          <div className="p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 max-w-2xl">
            <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] block mb-1">
              Signature Playstyle & Archetype
            </span>
            <p className="leading-relaxed text-neutral-300">{player.playstyle}</p>
          </div>

          {/* Action CTAs Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenArcade}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-amber-500/20"
            >
              <Gamepad2 className="w-4 h-4 fill-current" />
              <span>Play as {player.name.split(' ')[0]} (Arcade)</span>
            </button>

            <button
              onClick={onOpenCompare}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-semibold text-xs transition-colors border border-neutral-700/60"
            >
              <GitCompare className="w-4 h-4 text-amber-400" />
              <span>Head-to-Head Compare</span>
            </button>

            <button
              onClick={onScrollToHighlights}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-medium text-xs transition-colors border border-neutral-800"
            >
              <ArrowDownCircle className="w-4 h-4 text-neutral-400" />
              <span>Watch Highlight Reel</span>
            </button>
          </div>
        </div>

        {/* Right Column: Trophy Case Showcase */}
        <div className="w-full lg:w-96 shrink-0 bg-neutral-950/80 border border-neutral-800 rounded-xl p-5 font-mono-numbers">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-neutral-300">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Accolades & Trophy Case</span>
            </div>
            {acc.hallOfFame && (
              <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                <ShieldCheck className="w-3 h-3" />
                Hall of Fame
              </span>
            )}
          </div>

          {/* Trophy Badges Grid */}
          <div className="grid grid-cols-2 gap-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-400 font-sans">NBA Championships</span>
              <span className="font-black text-amber-400 text-base">{acc.championships}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-400 font-sans">Finals MVPs</span>
              <span className="font-black text-amber-400 text-base">{acc.finalsMvp}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-400 font-sans">Regular Season MVPs</span>
              <span className="font-black text-amber-400 text-base">{acc.mvps}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-400 font-sans">All-Star Selections</span>
              <span className="font-black text-white text-base">{acc.allStar}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-400 font-sans">All-NBA 1st Team</span>
              <span className="font-black text-white text-base">{acc.allNbaFirst}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
              <span className="text-neutral-400 font-sans">Scoring Titles</span>
              <span className="font-black text-white text-base">{acc.scoringTitles}</span>
            </div>

            {acc.dpoy > 0 && (
              <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between col-span-2">
                <span className="text-neutral-400 font-sans">Defensive Player of the Year</span>
                <span className="font-black text-amber-400 text-base">{acc.dpoy}</span>
              </div>
            )}
          </div>

          {/* Notable Milestones List */}
          {acc.notableAwards && acc.notableAwards.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-neutral-800">
              <div className="text-[11px] font-sans text-neutral-500 uppercase tracking-wider mb-1.5">
                Notable Honors
              </div>
              <ul className="text-xs text-neutral-300 space-y-1 font-sans">
                {acc.notableAwards.map((award, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
