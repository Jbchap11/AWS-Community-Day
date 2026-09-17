import React, { useId } from 'react';
import './CurvedDivider.css';

/**
 * Section divider — two modes:
 *
 *  blur={false} (default) — WAVE MODE
 *    A full gradient rect (fromColor → fillColor) fills the entire divider.
 *    The wave path is overlaid in `fromColor`, carving an organic curved
 *    boundary. Above the crest = fromColor, below = fillColor. Seamless.
 *
 *  blur={true} — BLUR MODE
 *    Pure CSS gradient dissolve — no wave shape, sections just melt together.
 *
 * Props:
 *   fromColor  — current section's bg color  (default: #0B132B)
 *   fillColor  — next section's bg color     (default: #0B132B)
 *   glowColor  — crest glow: 'cyan' | 'orange' | 'purple' | 'subtle'
 *   flip       — rotate 180° for exit transition
 *   blur       — use blur-dissolve mode instead of wave
 *   type       — ignored, kept for App.jsx backward compat
 */
export default function CurvedDivider({
  blur      = false,
  fromColor = '#0B132B',
  fillColor = '#0B132B',
  glowColor = 'cyan',
  flip      = false,
}) {
  const uid = useId().replace(/:/g, '');

  /* ── BLUR MODE ───────────────────────────────────────────────────── */
  if (blur) {
    return (
      <div
        className={`curved-divider-wrapper ${flip ? 'flipped' : ''} curved-divider--blur`}
        aria-hidden="true"
        style={{ background: `linear-gradient(to bottom, ${fromColor}, ${fillColor})` }}
      />
    );
  }

  /* ── WAVE MODE ───────────────────────────────────────────────────── */

  // RescueNet "cresting foam" path — native space: 0 0 1200 120
  // This path fills the UPPER portion (from y=0 down to the wave crest).
  const wavePath =
    'M321.39,56.44c58-10.79,114.16-30.13,172-41.86,' +
    '82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,' +
    '985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35' +
    'A600.21,600.21,0,0,0,321.39,56.44Z';

  const strokePath =
    'M0,27.35 A600.21,600.21,0,0,0,321.39,56.44 ' +
    'c58-10.79,114.16-30.13,172-41.86 ' +
    'c82.39-16.72,168.19-17.73,250.45-.39 ' +
    'C823.78,31,906.67,72,985.66,92.83 ' +
    'c70.05,18.48,146.53,26.09,214.34,3';

  const glowColors = {
    cyan:   { stroke: 'rgba(56,  189, 248, 0.5)', shadow: 'rgba(56,  189, 248, 0.28)' },
    orange: { stroke: 'rgba(255, 153,   0, 0.5)', shadow: 'rgba(255, 153,   0, 0.28)' },
    purple: { stroke: 'rgba(168,  85, 247, 0.5)', shadow: 'rgba(168,  85, 247, 0.28)' },
    subtle: { stroke: 'rgba(255, 255, 255, 0.1)', shadow: 'rgba(255, 255, 255, 0.05)' },
  };
  const { stroke, shadow } = glowColors[glowColor] ?? glowColors.cyan;

  /*
   * SVG layout  (viewBox 0 0 1200 200):
   *
   *  y=0   ┌───────────────────────────────────────┐
   *        │  Full-height bg rect                  │
   *        │  gradient: fromColor (0%) → fillColor  │
   *        │  fillColor reached at 55% (y≈110)     │
   *        │                                       │
   *  y=80  ├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤
   *        │  Wave path overlaid in fromColor      │
   *        │  Covers above-crest zone → carves an  │
   *        │  organic curved boundary into the bg  │
   *  y≈136 ├ ─ ─ ─ (wave crest) ─ ─ ─ ─ ─ ─ ─ ─ ─ ┤
   *        │  bg gradient (≈fillColor) shows here  │
   *  y=200 └───────────────────────────────────────┘
   *
   *  Above crest  → fromColor  (section A color)
   *  Below crest  → fillColor  (section B color)  ← seamless blend into next section
   */
  return (
    <div
      className={`curved-divider-wrapper ${flip ? 'flipped' : ''}`}
      aria-hidden="true"
    >
      <svg
        className="curved-divider-svg"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/*
            Background gradient: fromColor → fillColor
            Reaches fillColor at 55% so the area below the wave crest
            (which sits ~at y=136/200 = 68%) is already solidly fillColor.
          */}
          <linearGradient id={`bg-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={fromColor} stopOpacity="1" />
            <stop offset="55%"  stopColor={fillColor} stopOpacity="1" />
            <stop offset="100%" stopColor={fillColor} stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ① Background: smooth fromColor → fillColor transition */}
        <rect x="0" y="0" width="1200" height="200" fill={`url(#bg-${uid})`} />

        {/*
          ② Wave shape in fromColor — carves the organic curved boundary.
             Shifted down 80 units so the gradient zone above it stays visible.
             Above the crest: fromColor (section A bleeds in organically).
             Below the crest: bg gradient (fillColor) shows through.
        */}
        <g transform="translate(0, 80)">
          <path d={wavePath} fill={fromColor} />

          {/* Glow crest line — traces the exact wave boundary */}
          <path
            d={strokePath}
            fill="none"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 6px ${shadow})` }}
          />
        </g>
      </svg>
    </div>
  );
}
