import React, { useEffect, useRef, useState } from 'react';
import { NBAPlayer } from '../types/nba';
import { sounds } from '../utils/audio';
import { Volume2, VolumeX, X, Trophy, Flame } from 'lucide-react';

interface CourtArcadeGameProps {
  player: NBAPlayer;
  onClose: () => void;
  onSwitchPlayer?: (p: NBAPlayer) => void;
}

type GameState = 'TITLE' | 'PLAYING' | 'PAUSED' | 'GAMEOVER';

interface Ball {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number; // height above court
  vz: number;
  inAir: boolean;
  isDunk: boolean;
  isGreen: boolean;
  shotPoints: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

export const CourtArcadeGame: React.FC<CourtArcadeGameProps> = ({ player, onClose }) => {
  const [gameState, setGameState] = useState<GameState>('TITLE');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(() => {
    return parseInt(localStorage.getItem('courtside_arcade_highscore') || '0', 10);
  });
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [streak, setStreak] = useState<number>(0);
  const [feedbackText, setFeedbackText] = useState<{ text: string; color: string; time: number } | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(sounds.isMuted());

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // References for pure 60fps simulation outside React render tree
  const simRef = useRef({
    gameState: 'TITLE' as GameState,
    keys: {} as Record<string, boolean>,
    justPressed: {} as Record<string, boolean>,
    playerX: 450,
    playerY: 420,
    playerVx: 0,
    playerVy: 0,
    facingAngle: -Math.PI / 2,
    isDribbling: true,
    dribbleTimer: 0,
    isChargingShot: false,
    shotMeter: 0, // 0 to 1
    shotMeterSpeed: 1.8,
    greenWindowStart: 0.72,
    greenWindowEnd: 0.88,
    // Defender
    defenderX: 450,
    defenderY: 250,
    defenderSpeed: 110,
    defenderContest: 0,
    // Ball
    ball: {
      x: 450,
      y: 420,
      vx: 0,
      vy: 0,
      z: 0,
      vz: 0,
      inAir: false,
      isDunk: false,
      isGreen: false,
      shotPoints: 2,
    } as Ball,
    // Effects
    particles: [] as Particle[],
    shake: 0,
    hitstop: 0,
    // Score & Timer
    score: 0,
    timeLeft: 30,
    streak: 0,
    lastDribbleSound: 0,
  });

  const toggleMute = () => {
    const next = !isMuted;
    sounds.setMuted(next);
    setIsMuted(next);
  };

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const code = e.code;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD'].includes(code)) {
        e.preventDefault();
      }

      if (code === 'Escape' || code === 'KeyP') {
        if (simRef.current.gameState === 'PLAYING') {
          simRef.current.gameState = 'PAUSED';
          setGameState('PAUSED');
        } else if (simRef.current.gameState === 'PAUSED') {
          simRef.current.gameState = 'PLAYING';
          setGameState('PLAYING');
        }
        return;
      }

      if ((code === 'Space' || code === 'Enter') && simRef.current.gameState === 'TITLE') {
        startGame();
        return;
      }

      if ((code === 'Space' || code === 'Enter') && simRef.current.gameState === 'GAMEOVER') {
        startGame();
        return;
      }

      if (!simRef.current.keys[code]) {
        simRef.current.justPressed[code] = true;
      }
      simRef.current.keys[code] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      simRef.current.keys[e.code] = false;
    };

    const handleBlur = () => {
      simRef.current.keys = {};
      simRef.current.justPressed = {};
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', handleBlur);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', handleBlur);
    };
  }, []);

  const startGame = () => {
    simRef.current.gameState = 'PLAYING';
    simRef.current.score = 0;
    simRef.current.streak = 0;
    simRef.current.timeLeft = 30;
    simRef.current.playerX = 450;
    simRef.current.playerY = 460;
    simRef.current.defenderX = 450;
    simRef.current.defenderY = 260;
    simRef.current.particles = [];
    simRef.current.ball.inAir = false;
    simRef.current.isChargingShot = false;
    simRef.current.shotMeter = 0;
    setScore(0);
    setStreak(0);
    setTimeLeft(30);
    setFeedbackText(null);
    setGameState('PLAYING');
  };

  // 60FPS Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();

    // Adjust attributes based on current player
    const threeRating = player.arcadeStats?.threePoint ?? 85;
    const dunkRating = player.arcadeStats?.dunk ?? 85;
    const speedRating = player.arcadeStats?.speed ?? 90;

    // Green window size scales with 3PT / Mid-range
    const baseGreenWidth = 0.08 + (threeRating / 100) * 0.12;
    simRef.current.greenWindowStart = 0.80 - baseGreenWidth / 2;
    simRef.current.greenWindowEnd = 0.80 + baseGreenWidth / 2;

    const hoopX = 450;
    const hoopY = 85;

    const loop = (now: number) => {
      const rawDt = (now - lastTime) / 1000;
      lastTime = now;
      const dt = Math.min(rawDt, 0.05);

      const sim = simRef.current;

      // Handle Hitstop (freeze-frame on big dunk or buzzer)
      if (sim.hitstop > 0) {
        sim.hitstop -= dt;
      } else if (sim.gameState === 'PLAYING') {
        // --- 1. GAME TIMER ---
        sim.timeLeft -= dt;
        if (sim.timeLeft <= 0) {
          sim.timeLeft = 0;
          sim.gameState = 'GAMEOVER';
          setGameState('GAMEOVER');
          sounds.playBuzzer();
          if (sim.score > highScore) {
            setHighScore(sim.score);
            localStorage.setItem('courtside_arcade_highscore', sim.score.toString());
          }
        }
        // Update React HUD state every 0.2s or integer change
        setTimeLeft(Math.ceil(sim.timeLeft));
        setScore(sim.score);
        setStreak(sim.streak);

        // --- 2. PLAYER MOVEMENT ---
        const moveSpeed = 160 + (speedRating / 100) * 110;
        let dx = 0;
        let dy = 0;

        if (sim.keys['KeyW'] || sim.keys['ArrowUp']) dy -= 1;
        if (sim.keys['KeyS'] || sim.keys['ArrowDown']) dy += 1;
        if (sim.keys['KeyA'] || sim.keys['ArrowLeft']) dx -= 1;
        if (sim.keys['KeyD'] || sim.keys['ArrowRight']) dx += 1;

        if (dx !== 0 && dy !== 0) {
          dx *= 0.7071;
          dy *= 0.7071;
        }

        // Only move if not in middle of charging shot
        if (!sim.isChargingShot && !sim.ball.isDunk) {
          sim.playerX += dx * moveSpeed * dt;
          sim.playerY += dy * moveSpeed * dt;

          if (dx !== 0 || dy !== 0) {
            sim.facingAngle = Math.atan2(hoopY - sim.playerY, hoopX - sim.playerX);
            sim.dribbleTimer += dt;
            if (sim.dribbleTimer > 0.28) {
              sim.dribbleTimer = 0;
              if (now - sim.lastDribbleSound > 200) {
                sounds.playDribble();
                sim.lastDribbleSound = now;
              }
            }
          }
        }

        // Court boundary clamping
        sim.playerX = Math.max(70, Math.min(830, sim.playerX));
        sim.playerY = Math.max(90, Math.min(550, sim.playerY));

        // Distance to hoop
        const distToHoop = Math.hypot(sim.playerX - hoopX, sim.playerY - hoopY);
        const isThreePointer = distToHoop > 260;

        // --- 3. DEFENDER AI ---
        // Defender positions between player and hoop
        const targetDefX = hoopX + (sim.playerX - hoopX) * 0.45;
        const targetDefY = hoopY + (sim.playerY - hoopY) * 0.45;

        sim.defenderX += (targetDefX - sim.defenderX) * 3.5 * dt;
        sim.defenderY += (targetDefY - sim.defenderY) * 3.5 * dt;

        // Calculate contest level (closer defender = higher contest)
        const distPlayerDef = Math.hypot(sim.playerX - sim.defenderX, sim.playerY - sim.defenderY);
        sim.defenderContest = Math.max(0, Math.min(1, 1 - distPlayerDef / 100));

        // --- 4. SHOOTING & DUNKING MECHANICS ---
        const canDunk = distToHoop < 130 && dunkRating > 75;

        if (sim.keys['Space'] && !sim.ball.inAir && !sim.ball.isDunk) {
          if (!sim.isChargingShot) {
            sim.isChargingShot = true;
            sim.shotMeter = 0;
          } else {
            // Charging meter
            sim.shotMeter += sim.shotMeterSpeed * dt;
            if (sim.shotMeter >= 1.0) {
              // Forced early release if overcharged
              releaseShot();
            }
          }
        } else if (sim.isChargingShot) {
          releaseShot();
        }

        function releaseShot() {
          sim.isChargingShot = false;
          const timing = sim.shotMeter;
          sim.shotMeter = 0;

          // Check for Dunk
          if (canDunk) {
            sim.ball.isDunk = true;
            sounds.playDunkImpact();
            sim.shake = 18;
            sim.hitstop = 0.08;
            sim.score += 2;
            sim.streak += 1;
            setFeedbackText({ text: `SLAM DUNK! +2 (${player.arcadeStats.signatureMove})`, color: '#f59e0b', time: 1.8 });

            // Dunk particles
            createBurst(hoopX, hoopY, '#f59e0b', 30);
            sounds.playCrowdCheer();

            // Reset after dunk animation
            setTimeout(() => {
              sim.ball.isDunk = false;
              sim.playerX = 450 + (Math.random() * 200 - 100);
              sim.playerY = 430;
            }, 600);
            return;
          }

          // Jump Shot
          const isGreen = timing >= sim.greenWindowStart && timing <= sim.greenWindowEnd;
          const points = isThreePointer ? 3 : 2;

          sim.ball.inAir = true;
          sim.ball.x = sim.playerX;
          sim.ball.y = sim.playerY;
          sim.ball.z = 20;
          sim.ball.isGreen = isGreen;
          sim.ball.shotPoints = points;

          // Calculate trajectory toward hoop
          const flightTime = 0.75;
          sim.ball.vx = (hoopX - sim.ball.x) / flightTime;
          sim.ball.vy = (hoopY - sim.ball.y) / flightTime;
          sim.ball.vz = 220; // gravity parabolic

          if (isGreen) {
            sounds.playGreenRelease();
            setFeedbackText({ text: `EXCELLENT RELEASE! (GREEN) +${points}`, color: '#22c55e', time: 1.8 });
          } else {
            const contestPenalty = sim.defenderContest * 0.25;
            const diff = Math.abs(timing - (sim.greenWindowStart + sim.greenWindowEnd) / 2);
            const makeChance = Math.max(0.05, 0.75 - diff * 2.5 - contestPenalty);
            const willMake = Math.random() < makeChance;

            if (willMake) {
              setFeedbackText({
                text: `${timing < sim.greenWindowStart ? 'Slightly Early' : 'Slightly Late'} - GOOD! +${points}`,
                color: '#38bdf8',
                time: 1.5,
              });
            } else {
              setFeedbackText({
                text: sim.defenderContest > 0.5 ? 'SMOTHERED BY DEFENDER! CLANK' : 'BRICK! Missed shot',
                color: '#ef4444',
                time: 1.5,
              });
              // Alter trajectory slightly so it misses
              sim.ball.vx += (Math.random() - 0.5) * 40;
            }
          }
        }

        // --- 5. BALL PHYSICS IN AIR ---
        if (sim.ball.inAir) {
          sim.ball.x += sim.ball.vx * dt;
          sim.ball.y += sim.ball.vy * dt;
          sim.ball.z += sim.ball.vz * dt;
          sim.ball.vz -= 380 * dt; // gravity

          // Reached hoop target
          if (sim.ball.y <= hoopY + 10) {
            sim.ball.inAir = false;
            const hitHoop = Math.hypot(sim.ball.x - hoopX, sim.ball.y - hoopY) < 25;

            if (hitHoop || sim.ball.isGreen) {
              // Made shot!
              sounds.playSwish();
              sounds.playCrowdCheer();
              sim.score += sim.ball.shotPoints;
              sim.streak += 1;
              sim.shake = 8;
              createBurst(hoopX, hoopY, sim.ball.isGreen ? '#22c55e' : '#38bdf8', 22);
            } else {
              // Miss!
              sounds.playRimClank();
              sim.streak = 0;
              sim.shake = 5;
            }

            // Return ball to player position
            sim.playerX = 450 + (Math.random() * 260 - 130);
            sim.playerY = 400 + (Math.random() * 80 - 40);
          }
        }

        // --- 6. PARTICLES & CAMERA SHAKE ---
        for (let i = sim.particles.length - 1; i >= 0; i--) {
          const p = sim.particles[i];
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.life -= dt;
          if (p.life <= 0) {
            sim.particles.splice(i, 1);
          }
        }

        if (sim.shake > 0) {
          sim.shake = Math.max(0, sim.shake - dt * 35);
        }
      }

      // --- 7. RENDER PASS ---
      ctx.save();

      // Screen Shake
      if (sim.shake > 0) {
        const shakeX = (Math.random() * 2 - 1) * sim.shake;
        const shakeY = (Math.random() * 2 - 1) * sim.shake;
        ctx.translate(shakeX, shakeY);
      }

      // Hardwood Court
      ctx.fillStyle = '#b45309'; // Rich polished timber
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Court wood planks texture
      ctx.fillStyle = 'rgba(0,0,0,0.04)';
      for (let y = 0; y < canvas.height; y += 18) {
        ctx.fillRect(0, y, canvas.width, 1);
      }

      // Court Lines (White / Warm Glow)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 3;

      // Half-court boundary
      ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);

      // Key / Paint area
      ctx.fillStyle = 'rgba(206, 17, 65, 0.25)'; // Team paint fill
      ctx.fillRect(360, 40, 180, 220);
      ctx.strokeRect(360, 40, 180, 220);

      // Free throw circle
      ctx.beginPath();
      ctx.arc(450, 260, 60, 0, Math.PI * 2);
      ctx.stroke();

      // Three-point arc (radius 260px)
      ctx.beginPath();
      ctx.arc(hoopX, hoopY, 260, 0.15 * Math.PI, 0.85 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(hoopX - 250, 40);
      ctx.lineTo(hoopX - 250, 100);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(hoopX + 250, 40);
      ctx.lineTo(hoopX + 250, 100);
      ctx.stroke();

      // Restricted Area Arc
      ctx.beginPath();
      ctx.arc(hoopX, hoopY, 45, 0, Math.PI);
      ctx.stroke();

      // Backboard & Hoop
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(hoopX - 35, hoopY - 15);
      ctx.lineTo(hoopX + 35, hoopY - 15);
      ctx.stroke();

      // Orange Rim
      ctx.strokeStyle = '#ea580c';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(hoopX, hoopY, 14, 0, Math.PI * 2);
      ctx.stroke();

      // Net lines
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(hoopX - 10, hoopY);
      ctx.lineTo(hoopX - 6, hoopY + 16);
      ctx.lineTo(hoopX + 6, hoopY + 16);
      ctx.lineTo(hoopX + 10, hoopY);
      ctx.stroke();

      // Center Court Decal (Player Team Primary Color Glow)
      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.beginPath();
      ctx.arc(450, 520, 90, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // --- DRAW DEFENDER ---
      ctx.save();
      ctx.translate(sim.defenderX, sim.defenderY);

      // Defender shadow
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.beginPath();
      ctx.ellipse(0, 5, 20, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // Defender Body (Dark Away Uniform)
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(0, 0, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Defender Contest Hand indicator (Red aura if heavy contest)
      if (sim.defenderContest > 0.2) {
        ctx.strokeStyle = `rgba(239, 68, 68, ${sim.defenderContest * 0.8})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 26 + sim.defenderContest * 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('DEF', 0, 4);
      ctx.restore();

      // --- DRAW PLAYER ---
      ctx.save();
      ctx.translate(sim.playerX, sim.playerY);

      // Player shadow
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.beginPath();
      ctx.ellipse(0, 7, 24, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      // Player Jersey Body (Player Team Primary Color)
      ctx.fillStyle = player.teamColorPrimary || '#CE1141';
      ctx.beginPath();
      ctx.arc(0, 0, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = player.teamColorSecondary || '#ffffff';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Player Jersey Number
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px "Barlow Condensed", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(player.jerseyNumbers[0]?.toString() || '23', 0, 4);

      // --- SHOT METER OVER HEAD ---
      if (sim.isChargingShot) {
        const meterW = 60;
        const meterH = 8;
        const meterX = -meterW / 2;
        const meterY = -34;

        // Meter background
        ctx.fillStyle = 'rgba(0,0,0,0.85)';
        ctx.fillRect(meterX, meterY, meterW, meterH);

        // Green window sweetspot
        const gwX = meterX + sim.greenWindowStart * meterW;
        const gwW = (sim.greenWindowEnd - sim.greenWindowStart) * meterW;
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(gwX, meterY, gwW, meterH);

        // Current meter ticker
        const tickX = meterX + sim.shotMeter * meterW;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(tickX - 1.5, meterY - 2, 3, meterH + 4);

        // Text label
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 9px monospace';
        ctx.fillText('RELEASE', 0, meterY - 4);
      }

      // Ball when held by player
      if (!sim.ball.inAir && !sim.ball.isDunk) {
        ctx.fillStyle = '#ea580c';
        ctx.beginPath();
        const ballOffset = 18;
        ctx.arc(ballOffset, 0, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // --- DRAW BALL IN AIR OR DUNK ---
      if (sim.ball.inAir) {
        ctx.save();
        // Shadow on court
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.beginPath();
        const shadowScale = Math.max(2, 8 - sim.ball.z * 0.02);
        ctx.ellipse(sim.ball.x, sim.ball.y, shadowScale, shadowScale / 2, 0, 0, Math.PI * 2);
        ctx.fill();

        // Ball in air with height z offset
        const drawY = sim.ball.y - sim.ball.z;
        ctx.fillStyle = sim.ball.isGreen ? '#22c55e' : '#ea580c';
        ctx.beginPath();
        ctx.arc(sim.ball.x, drawY, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      } else if (sim.ball.isDunk) {
        // Slam dunk animation at hoop!
        ctx.save();
        ctx.fillStyle = '#ea580c';
        ctx.beginPath();
        ctx.arc(hoopX, hoopY, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // --- PARTICLES ---
      for (const p of sim.particles) {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      ctx.restore();

      // Next frame
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    function createBurst(x: number, y: number, color: string, count: number) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = 60 + Math.random() * 220;
        simRef.current.particles.push({
          x,
          y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          color,
          size: 2 + Math.random() * 4,
          life: 0.4 + Math.random() * 0.4,
          maxLife: 0.8,
        });
      }
    }

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [player, highScore]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 select-none font-sans">
      {/* 85%+ Low Occlusion Viewport Container */}
      <div className="relative w-full h-full max-w-[900px] max-h-[600px] rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
        {/* Isolated Canvas Mount for 60fps simulation */}
        <canvas
          ref={canvasRef}
          width={900}
          height={600}
          className="w-full h-full block cursor-crosshair"
        />

        {/* Low-Occlusion HUD Overlay (<15% footprint) */}
        <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
          {/* Top Bar Status Clusters */}
          <div className="flex items-center justify-between">
            {/* Player Tag Cluster */}
            <div className="flex items-center gap-3 bg-neutral-950/80 px-3 py-1.5 rounded-lg border border-neutral-800/80 pointer-events-auto">
              <span className="font-condensed text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: player.teamColorPrimary }}
                />
                {player.name}
              </span>
              <span className="text-xs text-neutral-400 font-mono-numbers">
                #{player.jerseyNumbers[0]} · 3PT: {player.arcadeStats.threePoint} · DNK: {player.arcadeStats.dunk}
              </span>
            </div>

            {/* Score & Game Clock */}
            <div className="flex items-center gap-4 bg-neutral-950/90 px-4 py-2 rounded-lg border border-neutral-800 font-mono-numbers">
              <div className="flex items-center gap-2 text-amber-400">
                <Trophy className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wider uppercase text-neutral-400">PTS:</span>
                <span className="text-2xl font-black text-amber-400 tabular-nums">{score}</span>
              </div>

              <div className="h-5 w-px bg-neutral-800" />

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase text-neutral-400">CLOCK:</span>
                <span
                  className={`text-2xl font-black tabular-nums ${
                    timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-white'
                  }`}
                >
                  :{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </span>
              </div>

              {streak >= 3 && (
                <>
                  <div className="h-5 w-px bg-neutral-800" />
                  <div className="flex items-center gap-1 text-orange-500 font-bold text-xs animate-bounce">
                    <Flame className="w-4 h-4 fill-orange-500" />
                    {streak}X ON FIRE!
                  </div>
                </>
              )}
            </div>

            {/* Perimeter Audio & Close Controls */}
            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700/60 transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700/60 transition-colors"
                title="Exit Arcade"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Feedback Toast for Shot Timing */}
          {feedbackText && (
            <div className="self-center -mt-8 pointer-events-none">
              <span
                className="px-4 py-1.5 rounded-md font-condensed font-black tracking-wide text-sm border shadow-lg uppercase backdrop-blur-sm transition-all"
                style={{
                  color: feedbackText.color,
                  borderColor: feedbackText.color,
                  backgroundColor: 'rgba(10,10,10,0.85)',
                }}
              >
                {feedbackText.text}
              </span>
            </div>
          )}

          {/* Bottom Control Reminder */}
          <div className="flex items-center justify-between text-xs text-neutral-400 font-mono-numbers bg-neutral-950/70 px-3 py-1.5 rounded-lg border border-neutral-800/60 backdrop-blur-sm">
            <span>WASD / Arrow Keys: Move</span>
            <span>·</span>
            <span>Hold & Release SPACE: Jump Shot (Green Zone) / Close for Slam Dunk</span>
            <span>·</span>
            <span>ESC / P: Pause</span>
          </div>
        </div>

        {/* --- TITLE SCREEN MODAL --- */}
        {gameState === 'TITLE' && (
          <div className="absolute inset-0 bg-neutral-950/90 flex flex-col items-center justify-center p-6 text-center z-20">
            {/* Inline Bespoke SVG Title Lockup */}
            <svg className="w-24 h-24 mb-3 text-amber-500" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="6" />
              <line x1="6" y1="50" x2="94" y2="50" stroke="currentColor" strokeWidth="5" />
              <path d="M50 6 C 25 30, 25 70, 50 94" stroke="currentColor" strokeWidth="5" />
              <path d="M50 6 C 75 30, 75 70, 50 94" stroke="currentColor" strokeWidth="5" />
            </svg>

            <h1 className="font-condensed text-5xl font-black uppercase tracking-tight text-white mb-1">
              COURTSIDE CLUTCH ARCADE
            </h1>
            <p className="text-amber-400 text-sm font-medium mb-6">
              Playing as <span className="text-white font-bold">{player.name}</span> · {player.arcadeStats.signatureMove}
            </p>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 max-w-md w-full mb-6 text-left text-xs text-neutral-300 space-y-2 font-mono-numbers">
              <div className="flex justify-between">
                <span className="text-neutral-400">3PT Green Window:</span>
                <span className="font-bold text-white">{player.arcadeStats.threePoint}/99 rating</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Dunk Power:</span>
                <span className="font-bold text-white">{player.arcadeStats.dunk}/99 rating</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">High Score:</span>
                <span className="font-bold text-amber-400">{highScore} PTS</span>
              </div>
            </div>

            <button
              onClick={startGame}
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg text-lg tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
            >
              Start Shootout (Space or Enter)
            </button>
            <p className="text-xs text-neutral-500 mt-4 font-mono-numbers">
              WASD Move · Space Shoot/Dunk · Esc Pause
            </p>
          </div>
        )}

        {/* --- PAUSE MODAL --- */}
        {gameState === 'PAUSED' && (
          <div className="absolute inset-0 bg-neutral-950/85 flex flex-col items-center justify-center p-6 text-center z-20">
            <h2 className="font-condensed text-4xl font-black uppercase text-white mb-4">TIMEOUT / PAUSED</h2>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  simRef.current.gameState = 'PLAYING';
                  setGameState('PLAYING');
                }}
                className="px-6 py-2.5 bg-amber-500 text-neutral-950 font-bold rounded-lg hover:bg-amber-400 transition-colors"
              >
                Resume Game
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-neutral-800 text-neutral-300 font-bold rounded-lg hover:bg-neutral-700 transition-colors"
              >
                Quit to Archive
              </button>
            </div>
          </div>
        )}

        {/* --- GAME OVER MODAL --- */}
        {gameState === 'GAMEOVER' && (
          <div className="absolute inset-0 bg-neutral-950/90 flex flex-col items-center justify-center p-6 text-center z-20">
            <h2 className="font-condensed text-5xl font-black uppercase text-amber-500 mb-2">FINAL BUZZER</h2>
            <p className="text-neutral-400 text-sm mb-6">30-Second Shootout Complete</p>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 max-w-sm w-full mb-6">
              <div className="text-xs text-neutral-400 uppercase tracking-widest mb-1">Your Score</div>
              <div className="text-5xl font-black text-white font-mono-numbers mb-4">{score} PTS</div>

              <div className="h-px bg-neutral-800 my-3" />

              <div className="flex justify-between text-xs text-neutral-400 font-mono-numbers">
                <span>Personal Best:</span>
                <span className="font-bold text-amber-400">{Math.max(score, highScore)} PTS</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={startGame}
                className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg text-base tracking-wider uppercase transition-transform hover:scale-105 active:scale-95"
              >
                Play Again (Space)
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg text-base transition-colors"
              >
                Back to Player Vault
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
