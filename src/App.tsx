import React, { useState, useRef } from 'react';
import { NBAPlayer } from './types/nba';
import { PLAYERS_DB } from './data/allPlayers';
import { Header } from './components/Header';
import { PlayerProfileHero } from './components/PlayerProfileHero';
import { AdvancedStatsSection } from './components/AdvancedStatsSection';
import { CareerBestGames } from './components/CareerBestGames';
import { HighlightReelTheater } from './components/HighlightReelTheater';
import { CourtArcadeGame } from './components/CourtArcadeGame';
import { PlayerComparisonModal } from './components/PlayerComparisonModal';
import { Sparkles, Gamepad2, AlertCircle, Loader2 } from 'lucide-react';

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState<NBAPlayer>(PLAYERS_DB[0]);
  const [isArcadeOpen, setIsArcadeOpen] = useState<boolean>(false);
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(false);
  const [isLoadingPlayer, setIsLoadingPlayer] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const highlightSectionRef = useRef<HTMLDivElement>(null);

  const scrollToHighlights = () => {
    if (highlightSectionRef.current) {
      highlightSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Global Scout via Gemini API on server
  const handleSearchGlobal = async (query: string) => {
    setIsLoadingPlayer(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/player-scout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error(`Failed to scout player: ${res.statusText}`);
      }

      const data = await res.json();
      if (data.player) {
        setSelectedPlayer(data.player);
      } else {
        setErrorMessage(`Could not find records for "${query}". Showing default player.`);
      }
    } catch (err: any) {
      console.error('Error scouting player:', err);
      // Fallback: search locally for closest match
      const local = PLAYERS_DB.find((p) => p.name.toLowerCase().includes(query.toLowerCase()));
      if (local) {
        setSelectedPlayer(local);
      } else {
        setErrorMessage('Unable to connect to scouting engine. Loaded closest archive entry.');
      }
    } finally {
      setIsLoadingPlayer(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <Header
        currentPlayer={selectedPlayer}
        onSelectPlayer={(p) => {
          setSelectedPlayer(p);
          setErrorMessage(null);
        }}
        onOpenArcade={() => setIsArcadeOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        isLoadingPlayer={isLoadingPlayer}
        onSearchGlobal={handleSearchGlobal}
      />

      {/* Quick Legends Carousel Strip */}
      <div className="bg-neutral-900/60 border-b border-neutral-800/80 py-2.5 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 shrink-0 mr-1">
            Featured Icons:
          </span>
          {PLAYERS_DB.map((player) => {
            const isCurrent = player.id === selectedPlayer.id;
            return (
              <button
                key={player.id}
                onClick={() => {
                  setSelectedPlayer(player);
                  setErrorMessage(null);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isCurrent
                    ? 'bg-amber-500 text-neutral-950 border-amber-500 font-bold shadow-sm shadow-amber-500/20'
                    : 'bg-neutral-950/70 hover:bg-neutral-800 border-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: player.teamColorPrimary }}
                />
                <span>{player.name}</span>
                <span className="text-[10px] opacity-75 font-mono-numbers">#{player.jerseyNumbers[0]}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Loading Banner when scouting any custom historical player */}
        {isLoadingPlayer && (
          <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 text-amber-400 text-xs">
            <Loader2 className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
            <div>
              <span className="font-bold">Scouting Historical Vault: </span>
              Synthesizing career advanced stats, iconic games, and highlights using Gemini AI Historian...
            </div>
          </div>
        )}

        {/* Error notification if any */}
        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-800/60 flex items-center gap-3 text-red-300 text-xs">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* 1. Player Profile Hero Section */}
        <PlayerProfileHero
          player={selectedPlayer}
          onOpenArcade={() => setIsArcadeOpen(true)}
          onOpenCompare={() => setIsCompareOpen(true)}
          onScrollToHighlights={scrollToHighlights}
        />

        {/* 2. Career Advanced Statistics Section */}
        <AdvancedStatsSection player={selectedPlayer} />

        {/* 3. Career Best Games Showcase */}
        <CareerBestGames player={selectedPlayer} />

        {/* 4. Categorized Highlight Reel Theater */}
        <div ref={highlightSectionRef}>
          <HighlightReelTheater player={selectedPlayer} />
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-neutral-800/80 bg-neutral-950 py-8 text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-condensed font-black text-sm uppercase text-neutral-300 tracking-wider">
              COURTSIDE VAULT
            </span>
            <span aria-hidden="true">·</span>
            <span>Historical NBA Player & Highlight Play Encyclopedia</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400 font-mono-numbers">
            <span>Powered by Real Basketball Analytics</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setIsArcadeOpen(true)}
              className="hover:text-amber-400 text-neutral-400 flex items-center gap-1 transition-colors"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>Court Arcade</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Court Arcade Modal */}
      {isArcadeOpen && (
        <CourtArcadeGame
          player={selectedPlayer}
          onClose={() => setIsArcadeOpen(false)}
        />
      )}

      {/* Head-to-Head Comparison Modal */}
      {isCompareOpen && (
        <PlayerComparisonModal
          player1={selectedPlayer}
          onClose={() => setIsCompareOpen(false)}
          onSelectPlayer={(p) => {
            setSelectedPlayer(p);
            setErrorMessage(null);
          }}
        />
      )}
    </div>
  );
}
