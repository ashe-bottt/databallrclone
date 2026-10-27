import React, { useState, useRef, useEffect } from 'react';
import { NBAPlayer } from '../types/nba';
import { PLAYERS_DB, searchPlayersLocally } from '../data/allPlayers';
import {
  Search,
  Gamepad2,
  GitCompare,
  Sparkles,
  Shuffle,
  Loader2,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  currentPlayer: NBAPlayer;
  onSelectPlayer: (player: NBAPlayer) => void;
  onOpenArcade: () => void;
  onOpenCompare: () => void;
  isLoadingPlayer: boolean;
  onSearchGlobal: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPlayer,
  onSelectPlayer,
  onOpenArcade,
  onOpenCompare,
  isLoadingPlayer,
  onSearchGlobal,
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const localResults = searchPlayersLocally(query);
  const filteredResults =
    selectedEra === 'all'
      ? localResults
      : localResults.filter((p) => p.era.toLowerCase().includes(selectedEra.toLowerCase()));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Check if there is an exact or top local match
    if (filteredResults.length > 0) {
      onSelectPlayer(filteredResults[0]);
      setIsOpen(false);
      setQuery('');
      return;
    }

    // Otherwise trigger global AI scout for any historical NBA player
    onSearchGlobal(query);
    setIsOpen(false);
    setQuery('');
  };

  const handleRandomPlayer = () => {
    const remaining = PLAYERS_DB.filter((p) => p.id !== currentPlayer.id);
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    if (random) onSelectPlayer(random);
  };

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-neutral-950 font-black shadow-lg shadow-amber-500/20">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M12 2v20M2 12h20M19.07 4.93l-4.24 4.24M9.17 14.83l-4.24 4.24" />
                </svg>
              </div>
              <div>
                <span className="font-condensed text-2xl font-black uppercase tracking-tight text-white block leading-none">
                  COURTSIDE VAULT
                </span>
                <span className="text-[11px] text-neutral-400 font-medium">
                  All-Time NBA Archive · Advanced Stats & Highlight Theater
                </span>
              </div>
            </div>

            {/* Mobile Header Action Icons */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenArcade}
                className="p-2 rounded-lg bg-amber-500 text-neutral-950 font-bold"
                title="Court Arcade"
              >
                <Gamepad2 className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>

          {/* Search Bar with Autocomplete & Global AI Scout */}
          <div className="relative flex-1 max-w-lg" ref={dropdownRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                  }}
                  onFocus={() => setIsOpen(true)}
                  placeholder="Search any NBA player ever (e.g. Jordan, LeBron, Curry, Wemby, Scalabrine)..."
                  className="w-full bg-neutral-900 border border-neutral-700 hover:border-neutral-600 focus:border-amber-500 rounded-xl pl-10 pr-24 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-colors"
                />

                <button
                  type="submit"
                  disabled={isLoadingPlayer || !query.trim()}
                  className="absolute right-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-neutral-950 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  {isLoadingPlayer ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <span>Scout</span>
                  )}
                </button>
              </div>
            </form>

            {/* Dropdown Suggestions */}
            {isOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-50 max-h-96 overflow-y-auto">
                {/* Era Filter Selector Inside Dropdown */}
                <div className="flex items-center gap-1 p-2 bg-neutral-950 border-b border-neutral-800 text-[11px] overflow-x-auto">
                  <span className="text-neutral-500 px-1 font-mono-numbers">Era:</span>
                  {['all', '2020s', '2010s', '2000s', '90s', '80s'].map((era) => (
                    <button
                      key={era}
                      onClick={() => setSelectedEra(era)}
                      className={`px-2 py-0.5 rounded transition-colors uppercase ${
                        selectedEra === era
                          ? 'bg-amber-500 text-neutral-950 font-bold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {era}
                    </button>
                  ))}
                </div>

                {filteredResults.length > 0 ? (
                  <div className="p-1">
                    {filteredResults.slice(0, 8).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectPlayer(p);
                          setIsOpen(false);
                          setQuery('');
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left text-xs transition-colors ${
                          p.id === currentPlayer.id
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'hover:bg-neutral-800 text-neutral-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: p.teamColorPrimary }}
                          />
                          <div>
                            <div className="font-bold text-white">{p.name}</div>
                            <div className="text-[11px] text-neutral-400 font-mono-numbers">
                              {p.teams[0]} · {p.primaryPosition} · #{p.jerseyNumbers[0]}
                            </div>
                          </div>
                        </div>

                        <div className="text-right font-mono-numbers text-[11px] text-neutral-400">
                          <div>{p.traditionalStats.ppg} PPG</div>
                          <div className="text-amber-500 font-bold">{p.accolades.championships} Rings</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-xs text-neutral-300 font-medium">
                      "{query}" not in pre-indexed catalog
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-1">
                      Press "Scout" or Enter to generate advanced stats & highlight reels for ANY NBA player in history.
                    </p>
                    <button
                      onClick={handleSearchSubmit}
                      className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Scout Any Player with AI</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={handleRandomPlayer}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold border border-neutral-800 transition-colors"
              title="Surprise Me with another Legend"
            >
              <Shuffle className="w-3.5 h-3.5 text-neutral-400" />
              <span>Surprise Me</span>
            </button>

            <button
              onClick={onOpenCompare}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold border border-neutral-800 transition-colors"
            >
              <GitCompare className="w-3.5 h-3.5 text-amber-400" />
              <span>Compare</span>
            </button>

            <button
              onClick={onOpenArcade}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              <Gamepad2 className="w-4 h-4 fill-current" />
              <span>Arcade Shootout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
