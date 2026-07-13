const MATRIX_COLUMNS = 26

function randomChar() {
  const chars = '01'
  return chars[Math.floor(Math.random() * chars.length)]
}

function buildColumn() {
  return Array.from({ length: 18 }, randomChar).join('')
}

export default function LoadingGrid() {
  const columns = Array.from({ length: MATRIX_COLUMNS }, (_, i) => ({
    id: i,
    left: (i / MATRIX_COLUMNS) * 100,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 6,
    text: buildColumn(),
  }))

  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,64,110,.35),transparent_60%),linear-gradient(180deg,#000814,#000000)]">
      {/* Matrix rain */}
      <div className="absolute inset-0 opacity-[.16]">
        {columns.map((c) => (
          <div
            key={c.id}
            className="absolute top-[-40%] font-poppins text-[11px] leading-[14px] text-[#00E5FF] whitespace-pre animate-[matrixFall_linear_infinite]"
            style={{
              left: `${c.left}%`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
            }}
          >
            {c.text.split('').join('\n')}
          </div>
        ))}
      </div>

      {/* Moving neon grid */}
      <div
        className="absolute inset-0 opacity-[.22] animate-[gridDrift_9s_linear_infinite]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 78%)',
        }}
      />

      {/* Radar sweep */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40">
        <div
          className="absolute inset-0 rounded-full animate-[radarSpin_4s_linear_infinite]"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(0,229,255,.35), transparent 22%, transparent 100%)',
          }}
        />
        <div className="absolute inset-[10%] rounded-full border border-[#00E5FF]/10" />
        <div className="absolute inset-[30%] rounded-full border border-[#00E5FF]/10" />
        <div className="absolute inset-[50%] rounded-full border border-[#00E5FF]/10" />
      </div>

      {/* Ambient glow blobs */}
      <div className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-[#00E5FF]/10 blur-[110px] animate-[glowPulse_5s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[10%] w-[360px] h-[360px] rounded-full bg-[#00B4D8]/10 blur-[110px] animate-[glowPulse_6s_ease-in-out_infinite]" />

      {/* Screen-edge neon pulse */}
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,229,255,.12)] animate-[borderPulse_4s_ease-in-out_infinite]" />

      <style>{`
        @keyframes matrixFall {
          from { transform: translateY(-10%); }
          to { transform: translateY(140%); }
        }
        @keyframes gridDrift {
          from { background-position: 0 0; }
          to { background-position: 48px 48px; }
        }
        @keyframes radarSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: .5; }
          50% { opacity: .9; }
        }
        @keyframes borderPulse {
          0%, 100% { opacity: .5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
