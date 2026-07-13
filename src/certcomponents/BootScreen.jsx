export default function BootScreen({ percent = 10 }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 cs-line-in">
      <div className="relative cs-logo-pulse">
        <svg
          className="w-20 h-20 drop-shadow-[0_0_25px_rgba(0,229,255,.9)]"
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 4 L188 38 V116 C188 172 152 210 100 236 C48 210 12 172 12 116 V38 Z"
            fill="#001D3D"
            stroke="#00E5FF"
            strokeWidth="8"
          />
          <rect x="78" y="112" width="44" height="36" rx="6" fill="none" stroke="#00E5FF" strokeWidth="6" />
          <path d="M86 112 V96 a14 14 0 0 1 28 0 V112" stroke="#00E5FF" strokeWidth="6" fill="none" />
        </svg>
      </div>

      <div className="text-center">
        <div className="font-['Orbitron'] font-extrabold tracking-[4px] text-white text-[22px] md:text-[28px]">
          CYBERSHIELD <span className="text-[#00E5FF]">AI</span>
        </div>
        <div className="mt-2 text-[#8FB4C9] text-xs tracking-[3px]">INITIALIZING...</div>
      </div>

      <div className="w-[240px] md:w-[300px] h-2 rounded-full bg-[#001D3D] border border-[#00E5FF]/25 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] shadow-[0_0_14px_rgba(0,229,255,.7)] transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
