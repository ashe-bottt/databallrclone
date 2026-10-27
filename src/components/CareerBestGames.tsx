import React, { useState } from 'react';
import { BestGame, NBAPlayer } from '../types/nba';
import { Trophy, Calendar, Award, ExternalLink, Play, ChevronRight } from 'lucide-react';

interface CareerBestGamesProps {
  player: NBAPlayer;
}

export const CareerBestGames: React.FC<CareerBestGamesProps> = ({ player }) => {
  const [selectedGame, setSelectedGame] = useState<BestGame>(player.bestGames[0] || null);

  if (!player.bestGames || player.bestGames.length === 0) return null;

  return (
    <section className="mt-12 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 lg:p-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-bold mb-1">
            <span>Historical Box Scores</span>
            <span aria-hidden="true">·</span>
            <span>Masterclass Showcases</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Career Best Games
          </h2>
          <p className="text-sm text-neutral-400 mt-0.5">
            The most unforgettable single-game masterpieces and clutch heroics of {player.name}’s career.
          </p>
        </div>

        <div className="text-xs text-neutral-400 font-mono-numbers">
          Showing {player.bestGames.length} Iconic Games
        </div>
      </div>

      {/* Grid of Best Games Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {player.bestGames.map((game) => {
          const isSelected = selectedGame?.id === game.id;
          return (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={`text-left p-5 rounded-xl border transition-all relative overflow-hidden group ${
                isSelected
                  ? 'bg-neutral-900 border-amber-500/70 shadow-lg shadow-amber-500/10'
                  : 'bg-neutral-950/50 hover:bg-neutral-900/80 border-neutral-800/80 text-neutral-300'
              }`}
            >
              {/* Highlight accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                  isSelected ? 'bg-amber-500' : 'bg-transparent group-hover:bg-neutral-700'
                }`}
              />

              {/* Matchup & Date */}
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5 font-medium text-neutral-300">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  {game.date}
                </span>
                {game.gameScore && (
                  <span className="font-mono-numbers font-bold text-amber-400 text-[11px]">
                    GameScore: {game.gameScore}
                  </span>
                )}
              </div>

              {/* Headline */}
              <h3 className="font-bold text-sm lg:text-base text-white mb-2 leading-snug line-clamp-2">
                {game.headline}
              </h3>

              {/* Matchup Opponent */}
              <div className="text-xs font-medium text-neutral-400 mb-3 truncate">
                {game.matchup}
              </div>

              {/* Key Stat Badges Row */}
              <div className="grid grid-cols-4 gap-2 pt-3 border-t border-neutral-800/80 text-center font-mono-numbers">
                <div>
                  <div className="text-[10px] uppercase text-neutral-500">PTS</div>
                  <div className="text-lg font-black text-amber-400">{game.pts}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neutral-500">REB</div>
                  <div className="text-lg font-black text-white">{game.reb}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neutral-500">AST</div>
                  <div className="text-lg font-black text-white">{game.ast}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase text-neutral-500">STL/BLK</div>
                  <div className="text-lg font-black text-neutral-300">
                    {game.stl}/{game.blk}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Panel for Selected Game */}
      {selectedGame && (
        <div className="p-6 rounded-xl bg-neutral-950/80 border border-neutral-800">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-xs text-amber-500 font-bold uppercase tracking-wide">
                <Award className="w-4 h-4" />
                <span>Single-Game Spotlight</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">{selectedGame.date}</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">
                {selectedGame.headline}
              </h3>
              <div className="text-sm font-semibold text-neutral-300">{selectedGame.matchup}</div>

              <div className="pt-2 text-xs lg:text-sm text-neutral-300 leading-relaxed">
                <span className="font-bold text-white">Historical Significance: </span>
                {selectedGame.significance}
              </div>

              <div className="text-xs lg:text-sm text-neutral-300 leading-relaxed">
                <span className="font-bold text-amber-400">Clutch Moments: </span>
                {selectedGame.clutchMoments}
              </div>
            </div>

            {/* Complete Box Score Table */}
            <div className="w-full lg:w-80 shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl p-4 font-mono-numbers">
              <div className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-3 flex items-center justify-between">
                <span>Official Box Score</span>
                {selectedGame.gameScore && (
                  <span className="text-amber-400 font-bold">GameScore {selectedGame.gameScore}</span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">Points:</span>
                  <span className="font-black text-white">{selectedGame.pts}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">Rebounds:</span>
                  <span className="font-bold text-white">{selectedGame.reb}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">Assists:</span>
                  <span className="font-bold text-white">{selectedGame.ast}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">Steals:</span>
                  <span className="font-bold text-white">{selectedGame.stl}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">Blocks:</span>
                  <span className="font-bold text-white">{selectedGame.blk}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-500">Field Goals:</span>
                  <span className="font-bold text-amber-400">{selectedGame.fgm}</span>
                </div>
                {selectedGame.threePm && (
                  <div className="flex justify-between py-1 border-b border-neutral-800">
                    <span className="text-neutral-500">3-Pointers:</span>
                    <span className="font-bold text-white">{selectedGame.threePm}</span>
                  </div>
                )}
                {selectedGame.ftm && (
                  <div className="flex justify-between py-1 border-b border-neutral-800">
                    <span className="text-neutral-500">Free Throws:</span>
                    <span className="font-bold text-white">{selectedGame.ftm}</span>
                  </div>
                )}
              </div>

              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                  `${player.name} ${selectedGame.headline} ${selectedGame.date}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg text-xs transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Game Highlights</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
