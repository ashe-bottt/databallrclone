import React, { useState } from 'react';
import { NBAPlayer } from '../types/nba';
import { BarChart3, HelpCircle, TrendingUp, Sparkles, Layers } from 'lucide-react';

interface AdvancedStatsSectionProps {
  player: NBAPlayer;
}

export const AdvancedStatsSection: React.FC<AdvancedStatsSectionProps> = ({ player }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const adv = player.advancedStats;
  const trad = player.traditionalStats;
  const zones = player.shotZoneStats;

  const ADVANCED_METRICS_INFO: Record<string, { label: string; desc: string; benchmark: string }> = {
    per: {
      label: 'Player Efficiency Rating (PER)',
      desc: 'John Hollinger’s per-minute rating aggregating all positive and negative accomplishments.',
      benchmark: '15.0 = League Average, 20.0 = All-Star, 25.0+ = MVP Candidate',
    },
    tsPct: {
      label: 'True Shooting Percentage (TS%)',
      desc: 'Measures shooting efficiency taking into account 2-point field goals, 3-point field goals, and free throws.',
      benchmark: '~54.0% = League Average, 60.0%+ = Elite Scoring Efficiency',
    },
    winShares: {
      label: 'Total Win Shares (WS)',
      desc: 'Estimate of the number of wins contributed by a player through offensive and defensive prowess.',
      benchmark: '100+ = Hall of Fame Contributor, 200+ = All-Time Top 10',
    },
    wsPer48: {
      label: 'Win Shares Per 48 Minutes (WS/48)',
      desc: 'Rate-adjusted win share contribution per standard 48-minute regulation game.',
      benchmark: '.100 = League Average, .200+ = Superstar Tier',
    },
    bpm: {
      label: 'Box Plus/Minus (BPM)',
      desc: 'Box score estimate of points per 100 possessions a player contributed above a league-average player.',
      benchmark: '0.0 = Average Player, +4.0 = All-Star, +8.0+ = All-Time MVP Season',
    },
    vorp: {
      label: 'Value Over Replacement Player (VORP)',
      desc: 'Estimate of points per 100 TEAM possessions that a player contributed above a replacement-level (-2.0) player.',
      benchmark: '40.0+ = Hall of Fame Career, 100+ = GOAT Tier',
    },
    usgPct: {
      label: 'Usage Percentage (USG%)',
      desc: 'Estimate of the percentage of team plays used by a player while he was on the floor.',
      benchmark: '20.0% = Average Starter, 30.0%+ = Primary Franchise Engine',
    },
    ortgDrtg: {
      label: 'Offensive & Defensive Rating (ORTG / DRTG)',
      desc: 'Individual points produced per 100 possessions (ORTG) vs. points allowed per 100 possessions (DRTG).',
      benchmark: 'Higher ORTG is better; Lower DRTG is better.',
    },
  };

  return (
    <section className="mt-12 bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 lg:p-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 font-bold mb-1">
            <span>Statistical Analysis</span>
            <span aria-hidden="true">·</span>
            <span>Career Analytics</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <BarChart3 className="w-7 h-7 text-amber-500" />
            <span>Career Advanced Statistics</span>
          </h2>
          <p className="text-sm text-neutral-400 mt-0.5">
            Holistic breakdown of rate metrics, offensive efficiency, replacement value, and court shot distribution.
          </p>
        </div>

        {/* Peak Season Highlight Pill */}
        <div className="bg-neutral-950 border border-neutral-800 px-3.5 py-2 rounded-xl flex items-center gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <div className="text-xs">
            <span className="text-neutral-500">Peak Era: </span>
            <span className="font-bold text-amber-400 font-mono-numbers">{adv.peakYear}</span>
          </div>
        </div>
      </div>

      {/* Traditional Stats Snapshot Bar */}
      <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-4 mb-6">
        <div className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3">
          Traditional Career Totals & Per-Game Averages
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center font-mono-numbers">
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">Games</div>
            <div className="text-lg font-bold text-white">{trad.gamesPlayed}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">PPG</div>
            <div className="text-lg font-black text-amber-400">{trad.ppg}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">RPG</div>
            <div className="text-lg font-bold text-white">{trad.rpg}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">APG</div>
            <div className="text-lg font-bold text-white">{trad.apg}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">SPG</div>
            <div className="text-lg font-bold text-white">{trad.spg}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">BPG</div>
            <div className="text-lg font-bold text-white">{trad.bpg}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">FG% / 3P%</div>
            <div className="text-base font-bold text-neutral-300">
              {trad.fgPct}% / {trad.threePtPct}%
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
            <div className="text-[10px] text-neutral-500 uppercase">Total Pts</div>
            <div className="text-base font-black text-amber-400">
              {trad.totalPoints.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 font-mono-numbers">
        {/* PER */}
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors relative group">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-sans font-semibold">Player Efficiency Rating</span>
            <button
              onClick={() => setActiveTooltip(activeTooltip === 'per' ? null : 'per')}
              className="text-neutral-500 hover:text-neutral-300"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-3xl font-black text-amber-400">{adv.per}</div>
          <div className="text-[11px] text-neutral-500 mt-1 font-sans">
            League baseline 15.0 ·{' '}
            {adv.per >= 25 ? 'All-Time MVP Tier' : adv.per >= 20 ? 'All-NBA Standard' : 'Solid Starter'}
          </div>
          {activeTooltip === 'per' && (
            <div className="absolute inset-x-2 bottom-full mb-2 p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-xs font-sans text-neutral-200 z-10 shadow-xl">
              <div className="font-bold text-white mb-1">{ADVANCED_METRICS_INFO.per.label}</div>
              <p className="text-neutral-400 mb-1">{ADVANCED_METRICS_INFO.per.desc}</p>
              <span className="text-amber-400 text-[10px]">{ADVANCED_METRICS_INFO.per.benchmark}</span>
            </div>
          )}
        </div>

        {/* TS% & eFG% */}
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors relative group">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-sans font-semibold">True Shooting (TS%)</span>
            <button
              onClick={() => setActiveTooltip(activeTooltip === 'ts' ? null : 'ts')}
              className="text-neutral-500 hover:text-neutral-300"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-3xl font-black text-white">{adv.tsPct}%</div>
          <div className="text-[11px] text-neutral-500 mt-1 font-sans">
            eFG%: {adv.eFgPct}% · {adv.tsPct >= 60 ? 'Hyper-Efficient' : 'Above Era Average'}
          </div>
          {activeTooltip === 'ts' && (
            <div className="absolute inset-x-2 bottom-full mb-2 p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-xs font-sans text-neutral-200 z-10 shadow-xl">
              <div className="font-bold text-white mb-1">{ADVANCED_METRICS_INFO.tsPct.label}</div>
              <p className="text-neutral-400 mb-1">{ADVANCED_METRICS_INFO.tsPct.desc}</p>
              <span className="text-amber-400 text-[10px]">{ADVANCED_METRICS_INFO.tsPct.benchmark}</span>
            </div>
          )}
        </div>

        {/* Win Shares & WS/48 */}
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors relative group">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-sans font-semibold">Total Win Shares</span>
            <button
              onClick={() => setActiveTooltip(activeTooltip === 'ws' ? null : 'ws')}
              className="text-neutral-500 hover:text-neutral-300"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-3xl font-black text-white">{adv.winShares}</div>
          <div className="text-[11px] text-neutral-500 mt-1 font-sans">
            WS/48: <span className="font-bold text-amber-400">.{Math.round(adv.wsPer48 * 1000)}</span> (.100 is avg)
          </div>
          {activeTooltip === 'ws' && (
            <div className="absolute inset-x-2 bottom-full mb-2 p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-xs font-sans text-neutral-200 z-10 shadow-xl">
              <div className="font-bold text-white mb-1">{ADVANCED_METRICS_INFO.winShares.label}</div>
              <p className="text-neutral-400 mb-1">{ADVANCED_METRICS_INFO.winShares.desc}</p>
              <span className="text-amber-400 text-[10px]">{ADVANCED_METRICS_INFO.winShares.benchmark}</span>
            </div>
          )}
        </div>

        {/* BPM & VORP */}
        <div className="p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-colors relative group">
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
            <span className="font-sans font-semibold">Box Plus/Minus (BPM)</span>
            <button
              onClick={() => setActiveTooltip(activeTooltip === 'bpm' ? null : 'bpm')}
              className="text-neutral-500 hover:text-neutral-300"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="text-3xl font-black text-amber-400">+{adv.bpm}</div>
          <div className="text-[11px] text-neutral-500 mt-1 font-sans">
            VORP: <span className="font-bold text-white">{adv.vorp}</span> · OBPM: +{adv.obpm} · DBPM: {adv.dbpm >= 0 ? `+${adv.dbpm}` : adv.dbpm}
          </div>
          {activeTooltip === 'bpm' && (
            <div className="absolute inset-x-2 bottom-full mb-2 p-3 bg-neutral-900 border border-neutral-700 rounded-lg text-xs font-sans text-neutral-200 z-10 shadow-xl">
              <div className="font-bold text-white mb-1">{ADVANCED_METRICS_INFO.bpm.label}</div>
              <p className="text-neutral-400 mb-1">{ADVANCED_METRICS_INFO.bpm.desc}</p>
              <span className="text-amber-400 text-[10px]">{ADVANCED_METRICS_INFO.bpm.benchmark}</span>
            </div>
          )}
        </div>
      </div>

      {/* Secondary Row: Usage %, ORTG, DRTG & Peak Season Note */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Usage & Efficiency Rates */}
        <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-5">
          <div className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            <span>Usage & Net Rating per 100 Possessions</span>
          </div>

          <div className="space-y-4 font-mono-numbers">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-neutral-400 font-sans">Usage Rate (USG%)</span>
                <span className="font-bold text-white">{adv.usgPct}%</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full"
                  style={{ width: `${Math.min(100, (adv.usgPct / 40) * 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-neutral-400 font-sans">Offensive Rating (ORTG)</span>
                <span className="font-bold text-emerald-400">{adv.ortg} pts / 100 poss</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: `${Math.min(100, ((adv.ortg - 90) / 40) * 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-neutral-400 font-sans">Defensive Rating (DRTG)</span>
                <span className="font-bold text-sky-400">{adv.drtg} pts allowed / 100 poss</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-sky-500 h-full rounded-full"
                  style={{ width: `${Math.min(100, Math.max(0, (120 - adv.drtg) * 3))}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Peak Season Context */}
        <div className="lg:col-span-2 bg-neutral-950/80 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-500 font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Statistical Prime & Peak Year: {adv.peakYear}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Prime Performance Context</h3>
            <p className="text-xs lg:text-sm text-neutral-300 leading-relaxed">
              {adv.peakNotes}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-4 text-xs text-neutral-400">
            <span>Primary Position: <strong className="text-white font-sans">{player.primaryPosition}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Height / Wingspan: <strong className="text-white font-mono-numbers">{player.height} / {player.wingspan || 'N/A'}</strong></span>
            <span aria-hidden="true">·</span>
            <span>Years Active: <strong className="text-white font-mono-numbers">{player.yearsActive}</strong></span>
          </div>
        </div>
      </div>

      {/* Shot Zones Distribution Visualization */}
      {zones && (
        <div className="bg-neutral-950/80 border border-neutral-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 font-bold">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>Career Shot Zone Efficiency & Frequency</span>
            </div>
            <span className="text-[11px] text-neutral-500">Based on play-by-play tracking data</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono-numbers">
            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
              <div className="text-[11px] text-neutral-400 font-sans mb-1">Restricted Area</div>
              <div className="text-xl font-black text-amber-400">{zones.restrictedArea.fgPct}%</div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {zones.restrictedArea.pctOfAttempts}% of FGA
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
              <div className="text-[11px] text-neutral-400 font-sans mb-1">Paint (Non-RA)</div>
              <div className="text-xl font-bold text-white">{zones.paintNonRA.fgPct}%</div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {zones.paintNonRA.pctOfAttempts}% of FGA
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
              <div className="text-[11px] text-neutral-400 font-sans mb-1">Mid-Range (10-23ft)</div>
              <div className="text-xl font-bold text-white">{zones.midRange.fgPct}%</div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {zones.midRange.pctOfAttempts}% of FGA
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
              <div className="text-[11px] text-neutral-400 font-sans mb-1">Corner Three</div>
              <div className="text-xl font-bold text-emerald-400">{zones.cornerThree.fgPct}%</div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {zones.cornerThree.pctOfAttempts}% of FGA
              </div>
            </div>

            <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 text-center">
              <div className="text-[11px] text-neutral-400 font-sans mb-1">Above Break 3</div>
              <div className="text-xl font-bold text-emerald-400">{zones.aboveBreakThree.fgPct}%</div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {zones.aboveBreakThree.pctOfAttempts}% of FGA
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
