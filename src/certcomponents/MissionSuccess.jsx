import { useEffect } from 'react'

export default function MissionSuccess() {
  useEffect(() => {
    if (navigator.vibrate) {
      navigator.vibrate([40, 30, 40])
    }
  }, [])

  return (
    <div className="flex flex-col items-center gap-5 cs-success-shake">
      <div className="text-[#00FF9C] text-[11px] md:text-xs tracking-[6px] opacity-80">
        ██████████████████
      </div>

      <div
        className="font-['Orbitron'] font-black text-[34px] md:text-[54px] tracking-[3px] text-[#00FF9C]"
        style={{ animation: 'bigGlowPulse 1.6s ease-in-out infinite' }}
      >
        MISSION SUCCESS
      </div>

      <div className="text-[#00FF9C] text-[11px] md:text-xs tracking-[6px] opacity-80">
        ██████████████████
      </div>

      <div className="mt-3 flex flex-col items-center gap-1">
        <div className="text-white font-['Orbitron'] tracking-[4px] text-sm">HUMAN FIREWALL</div>
        <div className="text-[#8FB4C9] tracking-[3px] text-xs">STATUS</div>
        <div className="text-[#00FF9C] font-bold tracking-[3px] text-lg">ACTIVE</div>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-full border border-[#00FF9C]/50 bg-[#00FF9C]/10 px-5 py-2 text-[#00FF9C] font-semibold text-sm tracking-wide">
        <span>✔</span> VERIFIED
      </div>
    </div>
  )
}
