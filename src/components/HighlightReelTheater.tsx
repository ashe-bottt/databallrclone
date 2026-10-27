import React, { useState } from 'react';
import { NBAPlayer, HighlightCategory, HighlightClip, HIGHLIGHT_CATEGORY_META } from '../types/nba';
import {
  Flame,
  Sparkles,
  Target,
  Crosshair,
  Shield,
  Zap,
  Eye,
  ArrowUpCircle,
  Clock,
  Shuffle,
  Play,
  ExternalLink,
  Info,
  Maximize2
} from 'lucide-react';

interface HighlightReelTheaterProps {
  player: NBAPlayer;
}

const CATEGORY_ICONS: Record<HighlightCategory, React.ComponentType<{ className?: string }>> = {
  dunks: Flame,
  layups: Sparkles,
  threes: Target,
  mid_range: Crosshair,
  blocks: Shield,
  steals: Zap,
  assists: Eye,
  rebounds: ArrowUpCircle,
  clutch: Clock,
  handles: Shuffle,
};

export const HighlightReelTheater: React.FC<HighlightReelTheaterProps> = ({ player }) => {
  const [activeCategory, setActiveCategory] = useState<HighlightCategory>('dunks');
  const [selectedClip, setSelectedClip] = useState<HighlightClip | null>(() => {
    return player.highlights.dunks?.[0] || null;
  });
  const [theaterMode, setTheaterMode] = useState<boolean>(false);

  // Update selected clip if category changes
  const handleCategoryChange = (cat: HighlightCategory) => {
    setActiveCategory(cat);
    const categoryClips = player.highlights[cat] || [];
    if (categoryClips.length > 0) {
      setSelectedClip(categoryClips[0]);
    } else {
      setSelectedClip(null);
    }
  };

  const currentCategoryClips = player.highlights[activeCategory] || [];
  const currentCategoryMeta = HIGHLIGHT_CATEGORY_META[activeCategory];

  // Helper to construct YouTube embed URL
  const getEmbedUrl = (clip: HighlightClip) => {
    const videoId = clip.youtubeVideoId;
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <section className="mt-12 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-bold mb-1">
            <span>Video Vault</span>
            <span aria-hidden="true">·</span>
            <span>All-Time Signature Plays</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Curated Highlight Theater
          </h2>
          <p className="text-sm text-neutral-400 mt-0.5">
            Watch {player.name}’s all-time iconic career plays categorized by play style.
          </p>
        </div>

        <button
          onClick={() => setTheaterMode(!theaterMode)}
          className="self-start md:self-auto flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 transition-colors border border-neutral-700/60"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span>{theaterMode ? 'Standard View' : 'Theater Mode'}</span>
        </button>
      </div>

      {/* Category Filter Tabs (Zero-Pill discipline: clean segmented buttons) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-neutral-800/80">
        {(Object.keys(HIGHLIGHT_CATEGORY_META) as HighlightCategory[]).map((cat) => {
          const meta = HIGHLIGHT_CATEGORY_META[cat];
          const Icon = CATEGORY_ICONS[cat];
          const count = player.highlights[cat]?.length || 0;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-500 text-neutral-950 shadow-sm shadow-amber-500/20 font-bold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{meta.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-neutral-950/20 text-neutral-900 font-bold' : 'text-neutral-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Video Theater Layout */}
      <div className={`grid gap-6 ${theaterMode ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-3'}`}>
        {/* Active Player Screen (Left 2 cols) */}
        <div className={theaterMode ? 'col-span-1' : 'lg:col-span-2'}>
          <div className="relative w-full aspect-video bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            {selectedClip ? (
              <iframe
                src={getEmbedUrl(selectedClip)}
                title={selectedClip.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-neutral-500">
                <Play className="w-12 h-12 text-neutral-700 mb-3" />
                <p className="text-sm font-medium">Select a highlight clip below to launch playback</p>
              </div>
            )}
          </div>

          {/* Video Metadata Underneath Player */}
          {selectedClip && (
            <div className="mt-4 p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="text-amber-400 font-semibold">{selectedClip.opponent}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedClip.year}</span>
                  {selectedClip.badge && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-500 font-bold">{selectedClip.badge}</span>
                    </>
                  )}
                </div>

                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                    `${player.name} ${selectedClip.title} ${selectedClip.year}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5">{selectedClip.title}</h3>
              <p className="text-xs lg:text-sm text-neutral-300 leading-relaxed">
                {selectedClip.description}
              </p>
            </div>
          )}
        </div>

        {/* Category Playlist Column (Right 1 col) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs text-neutral-400 px-1">
            <span className="font-semibold text-neutral-300">
              {currentCategoryMeta?.label} Reel ({currentCategoryClips.length})
            </span>
            <span className="text-[11px] text-neutral-500">{currentCategoryMeta?.description}</span>
          </div>

          {currentCategoryClips.length === 0 ? (
            <div className="p-8 rounded-xl bg-neutral-950/40 border border-neutral-800/60 text-center text-xs text-neutral-500">
              No clips registered in this category yet.
            </div>
          ) : (
            <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
              {currentCategoryClips.map((clip) => {
                const isSelected = selectedClip?.id === clip.id;
                return (
                  <button
                    key={clip.id}
                    onClick={() => setSelectedClip(clip)}
                    className={`w-full text-left p-3 rounded-xl transition-all border ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-sm'
                        : 'bg-neutral-950/40 hover:bg-neutral-800/60 border-neutral-800/60 text-neutral-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-0.5">
                          <span>{clip.year}</span>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{clip.opponent}</span>
                        </div>
                        <h4
                          className={`text-xs font-bold leading-snug truncate ${
                            isSelected ? 'text-amber-400' : 'text-white'
                          }`}
                        >
                          {clip.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1 leading-normal">
                          {clip.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Quick YouTube Search helper for any play */}
          <div className="mt-auto p-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-400 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-neutral-200 font-medium">Looking for another specific play?</span>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Search YouTube directly for all{' '}
                <a
                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                    `${player.name} best ${activeCategory} highlights`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 underline underline-offset-2 hover:text-amber-300 ml-1 inline-flex items-center gap-1"
                >
                  <span>{player.name} {currentCategoryMeta?.label}</span>
                  <ExternalLink className="w-3 h-3 inline" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
