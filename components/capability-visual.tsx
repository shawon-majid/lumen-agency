"use client";

/**
 * Per-capability mini-visuals for the "AI-Native Interfaces" services tile.
 *
 * Each visual is a small CSS + SVG demo of what that capability looks like
 * in practice — not an icon, not an illustration. They're constrained:
 * monochrome ink-on-glass, no decorative gradients, no per-card border —
 * so they read as a cohesive set even though each is bespoke.
 *
 * All animations respect prefers-reduced-motion via the global rule in
 * globals.css that kills decorative animation.
 */

const ink = "var(--color-ink)";
const inkMuted = "var(--color-ink-muted)";

export function CapabilityVisual({ name }: { name: string }) {
  switch (name) {
    case "Streaming UI":
      return <StreamingUI />;
    case "Multimodal":
      return <Multimodal />;
    case "Editorial design":
      return <EditorialDesign />;
    case "Motion":
      return <Motion />;
    case "Tool use":
      return <ToolUse />;
    case "Memory":
      return <Memory />;
    case "Orchestration":
      return <Orchestration />;
    case "Eval harnesses":
      return <EvalHarnesses />;
    case "Embeddings":
      return <Embeddings />;
    case "Hybrid search":
      return <HybridSearch />;
    case "Reranking":
      return <Reranking />;
    case "Drift evals":
      return <DriftEvals />;
    case "Inference":
      return <Inference />;
    case "Training":
      return <Training />;
    case "Observability":
      return <Observability />;
    case "CI/CD":
      return <CICD />;
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────────
   Streaming UI — three lines that fill progressively, with a
   blinking caret at the head of the streaming line. Reads as
   "tokens arriving."
   ───────────────────────────────────────────────────────────── */
function StreamingUI() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <style>{`
        .stream-bar { transform-origin: left; animation: stream-bar 3.2s var(--ease-out-quart, cubic-bezier(0.25, 1, 0.5, 1)) infinite; }
        .stream-1 { animation-delay: 0s; }
        .stream-2 { animation-delay: 0.6s; }
        .stream-3 { animation-delay: 1.2s; }
        .stream-caret { animation: caret-blink 1.0s steps(2, end) infinite; }
        @keyframes stream-bar {
          0%, 5% { transform: scaleX(0); }
          40% { transform: scaleX(1); }
          85%, 100% { transform: scaleX(1); }
        }
        @keyframes caret-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
      <rect className="stream-bar stream-1" x="14" y="30" width="172" height="3" rx="1.5" fill={ink} opacity="0.92" />
      <rect className="stream-bar stream-2" x="14" y="46" width="148" height="3" rx="1.5" fill={ink} opacity="0.55" />
      <rect className="stream-bar stream-3" x="14" y="62" width="92" height="3" rx="1.5" fill={ink} opacity="0.35" />
      <rect className="stream-caret" x="110" y="58" width="2.5" height="11" fill={ink} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Multimodal — three offset content layers (text glyphs, an image
   swatch, an audio waveform). Reads as "different modalities, one
   surface."
   ───────────────────────────────────────────────────────────── */
function Multimodal() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {/* image card (back) */}
      <g transform="translate(48, 16) rotate(-6)">
        <rect width="56" height="40" rx="3" fill={ink} opacity="0.12" />
        <circle cx="14" cy="14" r="4" fill={ink} opacity="0.35" />
        <path d="M 4 32 L 18 22 L 28 28 L 40 18 L 52 32 Z" fill={ink} opacity="0.30" />
      </g>
      {/* text card (mid) */}
      <g transform="translate(78, 28) rotate(2)">
        <rect width="56" height="40" rx="3" fill={ink} opacity="0.18" />
        <rect x="6" y="10" width="40" height="2" rx="1" fill={ink} opacity="0.55" />
        <rect x="6" y="16" width="44" height="2" rx="1" fill={ink} opacity="0.40" />
        <rect x="6" y="22" width="32" height="2" rx="1" fill={ink} opacity="0.40" />
        <rect x="6" y="28" width="28" height="2" rx="1" fill={ink} opacity="0.40" />
      </g>
      {/* audio waveform card (front) */}
      <g transform="translate(108, 42) rotate(8)">
        <rect width="56" height="40" rx="3" fill={ink} opacity="0.30" />
        {Array.from({ length: 14 }).map((_, i) => {
          const heights = [10, 16, 22, 14, 18, 28, 12, 20, 16, 24, 18, 10, 14, 8];
          const h = heights[i];
          return (
            <rect
              key={i}
              x={5 + i * 3.5}
              y={(40 - h) / 2}
              width="2"
              height={h}
              rx="1"
              fill={ink}
              opacity="0.75"
            />
          );
        })}
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Editorial design — type specimen with leading lines + a vertical
   hairline rule. Reads as "we care about the page."
   ───────────────────────────────────────────────────────────── */
function EditorialDesign() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <text
        x="20"
        y="68"
        fill={ink}
        style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontStyle: "italic", fontSize: "52px" }}
      >
        Aa
      </text>
      <line x1="86" y1="22" x2="86" y2="80" stroke={ink} strokeOpacity="0.30" strokeWidth="0.5" />
      <g transform="translate(96, 30)">
        <text x="0" y="0" fill={inkMuted} style={{ fontFamily: "var(--font-mono)", fontSize: "7px", letterSpacing: "0.18em" }}>
          FRAUNCES · 300
        </text>
        <text x="0" y="14" fill={ink} style={{ fontFamily: "var(--font-serif)", fontSize: "13px", fontWeight: 300 }}>
          The quick brown
        </text>
        <text x="0" y="28" fill={ink} style={{ fontFamily: "var(--font-serif)", fontSize: "13px", fontWeight: 300, fontStyle: "italic" }}>
          fox jumps over
        </text>
        <text x="0" y="42" fill={inkMuted} style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}>
          the lazy dog.
        </text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Motion — a flowing path with a dot traveling along it. The
   trailing dashes give it momentum.
   ───────────────────────────────────────────────────────────── */
function Motion() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <style>{`
        @keyframes motion-travel {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .motion-dot {
          offset-path: path("M 14 70 C 50 70, 60 22, 100 22 S 160 70, 186 36");
          animation: motion-travel 3.6s var(--ease-out-quart, cubic-bezier(0.25, 1, 0.5, 1)) infinite;
        }
        @keyframes motion-dash-flow {
          to { stroke-dashoffset: -32; }
        }
        .motion-trail { animation: motion-dash-flow 2.4s linear infinite; }
      `}</style>
      <path
        d="M 14 70 C 50 70, 60 22, 100 22 S 160 70, 186 36"
        fill="none"
        stroke={ink}
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <path
        className="motion-trail"
        d="M 14 70 C 50 70, 60 22, 100 22 S 160 70, 186 36"
        fill="none"
        stroke={ink}
        strokeOpacity="0.6"
        strokeWidth="1.4"
        strokeDasharray="3 5"
      />
      <circle className="motion-dot" cx="0" cy="0" r="4" fill={ink} />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Below: agent + retrieval + infra capability visuals — kept simpler
   since they don't currently show in the home page (only the
   AI-Native Interfaces row is "full" layout). They exist so the
   component is complete for future reuse on /work/[slug] etc.
   ───────────────────────────────────────────────────────────── */

function ToolUse() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <circle cx="100" cy="50" r="12" fill="none" stroke={ink} strokeWidth="1.4" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = 32;
        const rad = (deg * Math.PI) / 180;
        const x = 100 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return <g key={deg}>
          <line x1="100" y1="50" x2={x} y2={y} stroke={ink} strokeOpacity="0.25" strokeWidth="0.8" />
          <circle cx={x} cy={y} r="3.5" fill={ink} opacity="0.7" />
        </g>;
      })}
    </svg>
  );
}

function Memory() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {[8, 14, 22, 32, 44].map((y, i) => (
        <rect
          key={i}
          x="20"
          y={20 + i * 10}
          width={160 - i * 12}
          height="3"
          rx="1.5"
          fill={ink}
          opacity={0.18 + i * 0.15}
        />
      ))}
    </svg>
  );
}

function Orchestration() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <g stroke={ink} strokeOpacity="0.4" strokeWidth="0.8" fill="none">
        <path d="M 30 50 L 70 30 L 110 50 L 70 70 Z" />
        <path d="M 90 30 L 130 50 L 90 70" />
        <path d="M 130 50 L 170 30 M 130 50 L 170 70" />
      </g>
      {[[30,50],[70,30],[110,50],[70,70],[130,50],[170,30],[170,70]].map(([x,y],i) =>
        <circle key={i} cx={x} cy={y} r="3" fill={ink} opacity="0.85" />
      )}
    </svg>
  );
}

function EvalHarnesses() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {[0,1,2,3,4,5,6].map((i) => {
        const x = 22 + i * 24;
        const h = [60, 38, 50, 22, 44, 30, 18][i];
        return <rect key={i} x={x} y={80 - h} width="14" height={h} rx="1" fill={ink} opacity={0.35 + (i % 2) * 0.25} />;
      })}
      <line x1="14" y1="80" x2="186" y2="80" stroke={ink} strokeOpacity="0.3" strokeWidth="0.5" />
    </svg>
  );
}

function Embeddings() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => {
        const x = 24 + (i % 8) * 22;
        const y = 22 + Math.floor(i / 8) * 22;
        const r = 1.5 + ((i * 7) % 11) * 0.18;
        const o = 0.15 + ((i * 13) % 17) * 0.04;
        return <circle key={i} cx={x} cy={y} r={r} fill={ink} opacity={o} />;
      })}
    </svg>
  );
}

function HybridSearch() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <circle cx="80" cy="50" r="32" fill={ink} opacity="0.15" />
      <circle cx="120" cy="50" r="32" fill={ink} opacity="0.15" />
      <circle cx="80" cy="50" r="32" fill="none" stroke={ink} strokeOpacity="0.4" strokeWidth="0.8" />
      <circle cx="120" cy="50" r="32" fill="none" stroke={ink} strokeOpacity="0.4" strokeWidth="0.8" />
    </svg>
  );
}

function Reranking() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {[1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x="24" y={14 + (i - 1) * 14} width="60" height="8" rx="1" fill={ink} opacity={0.45 - i * 0.06} />
          <rect x={120} y={14 + (5 - i) * 14} width={70 - (i - 1) * 8} height="8" rx="1" fill={ink} opacity={0.85 - i * 0.12} />
          <path d={`M 88 ${18 + (i - 1) * 14} L 116 ${18 + (5 - i) * 14}`} stroke={ink} strokeOpacity="0.2" strokeWidth="0.6" />
        </g>
      ))}
    </svg>
  );
}

function DriftEvals() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <path
        d="M 14 70 L 40 60 L 64 64 L 90 50 L 116 56 L 142 30 L 168 40 L 186 22"
        fill="none"
        stroke={ink}
        strokeWidth="1.4"
        strokeOpacity="0.85"
      />
      <line x1="14" y1="80" x2="186" y2="80" stroke={ink} strokeOpacity="0.3" strokeWidth="0.5" />
      <line x1="14" y1="44" x2="186" y2="44" stroke={ink} strokeOpacity="0.18" strokeWidth="0.5" strokeDasharray="2 3" />
    </svg>
  );
}

function Inference() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <g stroke={ink} strokeOpacity="0.5" strokeWidth="0.9" fill="none">
        {[0,1,2].map((col) => [0,1,2,3].map((row) => (
          <circle key={`${col}-${row}`} cx={50 + col * 50} cy={22 + row * 18} r="3" fill={ink} fillOpacity="0.55" />
        )))}
        {[0,1,2,3].map((from) => [0,1,2,3].map((to) => (
          <line key={`a-${from}-${to}`} x1="50" y1={22 + from * 18} x2="100" y2={22 + to * 18} strokeOpacity="0.12" />
        )))}
        {[0,1,2,3].map((from) => [0,1,2,3].map((to) => (
          <line key={`b-${from}-${to}`} x1="100" y1={22 + from * 18} x2="150" y2={22 + to * 18} strokeOpacity="0.12" />
        )))}
      </g>
    </svg>
  );
}

function Training() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <path
        d="M 14 78 C 50 78, 70 60, 100 50 S 160 26, 186 22"
        fill="none"
        stroke={ink}
        strokeWidth="1.6"
        strokeOpacity="0.9"
      />
      <line x1="14" y1="80" x2="186" y2="80" stroke={ink} strokeOpacity="0.3" strokeWidth="0.5" />
      <text x="14" y="92" fill={inkMuted} style={{ fontFamily: "var(--font-mono)", fontSize: "7px", letterSpacing: "0.18em" }}>
        STEP
      </text>
      <text x="166" y="92" fill={inkMuted} style={{ fontFamily: "var(--font-mono)", fontSize: "7px", letterSpacing: "0.18em" }}>
        LOSS↓
      </text>
    </svg>
  );
}

function Observability() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <g stroke={ink} strokeOpacity="0.5" strokeWidth="0.9" fill="none">
        <path d="M 14 60 L 30 60 L 30 40 L 50 40 L 50 60 L 70 60 L 70 30 L 90 30 L 90 60 L 110 60" />
        <path d="M 110 50 L 130 50 L 130 36 L 150 36 L 150 50 L 170 50 L 170 22 L 186 22" />
      </g>
      <line x1="14" y1="80" x2="186" y2="80" stroke={ink} strokeOpacity="0.3" strokeWidth="0.5" />
      <circle cx="186" cy="22" r="3" fill={ink} opacity="0.9" />
    </svg>
  );
}

function CICD() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {[0,1,2,3,4].map((i) => {
        const x = 22 + i * 38;
        return (
          <g key={i}>
            <circle cx={x} cy="50" r="6" fill="none" stroke={ink} strokeOpacity={0.5} strokeWidth="1" />
            <circle cx={x} cy="50" r="2.5" fill={ink} opacity={i < 4 ? 0.9 : 0.3} />
            {i < 4 && <line x1={x + 7} y1="50" x2={x + 31} y2="50" stroke={ink} strokeOpacity="0.4" strokeWidth="0.8" />}
          </g>
        );
      })}
    </svg>
  );
}
