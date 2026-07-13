import { useEffect, useState } from 'react'

const DEFAULT_SCORES = [
  { label: 'Cyber Awareness Score', value: 96 },
  { label: 'Threat Detection', value: 92 },
  { label: 'Password Hygiene', value: 100 },
  { label: 'Social Engineering', value: 95 },
]

const SCAN_ITEMS = [
  'Email Awareness',
  'URL Detection',
  'Social Engineering',
  'Password Security',
  'Human Firewall',
]

export default function SkillScan({ scores = DEFAULT_SCORES }) {
  const [animate, setAnimate] = useState(false)
  const [visibleScans, setVisibleScans] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (visibleScans >= SCAN_ITEMS.length) return
    const t = setTimeout(() => setVisibleScans((v) => v + 1), 260)
    return () => clearTimeout(t)
  }, [visibleScans])

  return (
    <div className="w-[300px] md:w-[460px] cs-line-in">
      <div className="text-center mb-5">
        <div className="text-[#00E5FF] font-['Orbitron'] font-bold tracking-[2px] text-sm">
          SCANNING BRAIN...
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-[#001D3D] border border-[#00E5FF]/25 overflow-hidden">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] animate-[shimmer_1.4s_ease-in-out_infinite]" />
        </div>
      </div>

      <div className="space-y-3.5">
        {scores.map((s) => (
          <div key={s.label}>
            <div className="flex justify-between text-[11.5px] md:text-[12.5px] text-[#8FB4C9] mb-1">
              <span>{s.label}</span>
              <span className="text-[#00E5FF] font-semibold">{s.value}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#001D3D] border border-[#00E5FF]/20 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,.6)] transition-[width] duration-[1100ms] ease-out"
                style={{ width: animate ? `${s.value}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-[#00E5FF]/20 bg-[#000814]/60 px-4 py-3 space-y-1.5">
        {SCAN_ITEMS.slice(0, visibleScans).map((item) => (
          <div key={item} className="flex items-center justify-between text-[12px] cs-line-in">
            <span className="text-[#48CAE4]">{item}</span>
            <span className="text-[#00FF9C] font-semibold tracking-wide">PASS</span>
          </div>
        ))}
      </div>
    </div>
  )
}
