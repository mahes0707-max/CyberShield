export default function ShieldGraphic() {
  return (
    <div className="relative w-[280px] h-[280px] flex items-center justify-center mb-[18px]">
      {/* Outer holographic ring */}
      <div className="absolute w-[260px] h-[260px] rounded-full border border-[#00E5FF]/25 shadow-[0_0_40px_rgba(0,229,255,.15)_inset]">
        <div className="absolute -inset-px rounded-full border-t-2 border-t-[#00E5FF]/70 border-r-2 border-r-transparent border-b-2 border-b-transparent border-l-2 border-l-transparent animate-[rotateRing_14s_linear_infinite]" />
      </div>

      {/* Inner holographic ring (reverse rotation) */}
      <div className="absolute w-[220px] h-[220px] top-5 left-5 rounded-full border border-[#00E5FF]/25 shadow-[0_0_40px_rgba(0,229,255,.15)_inset] opacity-60">
        <div className="absolute -inset-px rounded-full border-t-2 border-t-[#00E5FF]/70 border-r-2 border-r-transparent border-b-2 border-b-transparent border-l-2 border-l-transparent animate-[rotateRingRev_10s_linear_infinite]" />
      </div>

      {/* Animated circuit board pattern */}
      <svg className="absolute w-[300px] h-[300px] opacity-35 animate-[pulseFade_4s_ease-in-out_infinite]" viewBox="0 0 300 300" fill="none">
        <g stroke="#00E5FF" strokeWidth="1" opacity="0.6">
          <path d="M20 150 H100 M200 150 H280 M150 20 V100 M150 200 V280 M60 60 L100 100 M240 60 L200 100 M60 240 L100 200 M240 240 L200 200" />
          <circle cx="20" cy="150" r="3" fill="#00E5FF" />
          <circle cx="280" cy="150" r="3" fill="#00E5FF" />
          <circle cx="150" cy="20" r="3" fill="#00E5FF" />
          <circle cx="150" cy="280" r="3" fill="#00E5FF" />
        </g>
      </svg>

      {/* Metallic blue shield with cyan neon edges + lock */}
      <svg
        className="relative z-[2] w-[150px] h-auto animate-[shieldPulse_3s_ease-in-out_infinite]"
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#48CAE4" />
            <stop offset="1" stopColor="#023E73" />
          </linearGradient>
        </defs>
        <path
          d="M100 4 L188 38 V116 C188 172 152 210 100 236 C48 210 12 172 12 116 V38 Z"
          fill="url(#shieldGrad)"
          fillOpacity="0.35"
          stroke="#00E5FF"
          strokeWidth="4"
        />
        <path
          d="M100 20 L172 48 V114 C172 162 142 194 100 216 C58 194 28 162 28 114 V48 Z"
          fill="none"
          stroke="#48CAE4"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <rect x="78" y="112" width="44" height="36" rx="6" fill="none" stroke="#fff" strokeWidth="4" />
        <path d="M86 112 V96 a14 14 0 0 1 28 0 V112" stroke="#fff" strokeWidth="4" fill="none" />
        <circle cx="100" cy="130" r="5" fill="#fff" />
      </svg>
    </div>
  )
}
