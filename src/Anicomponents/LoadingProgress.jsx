export default function LoadingProgress({ percent = 0 }) {
  const clamped = Math.max(0, Math.min(100, percent))

  return (
    <div className="w-full max-w-[360px]">
      <div className="relative h-[10px] w-full rounded-full bg-[#001D3D]/70 border border-[#00E5FF]/20 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] shadow-[0_0_16px_rgba(0,229,255,.8)] transition-[width] duration-500 ease-out"
          style={{ width: `${clamped}%` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent)] w-[40%] animate-[progressShine_1.6s_ease-in-out_infinite]" />
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] tracking-[2px] text-[#8FB4C9] font-poppins">
        <span>SYSTEM BOOT</span>
        <span className="text-[#00E5FF] font-semibold drop-shadow-[0_0_8px_rgba(0,229,255,.6)] tabular-nums">
          {Math.round(clamped)}%
        </span>
      </div>

      <style>{`
        @keyframes progressShine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(320%); }
        }
      `}</style>
    </div>
  )
}
