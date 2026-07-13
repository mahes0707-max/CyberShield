import { useEffect, useState } from 'react'

export default function AIVerdict({ userName = 'Analyst' }) {
  const lines = [
    { text: 'AI FINAL VERDICT', heading: true },
    { text: `Congratulations ${userName}.` },
    { text: 'You have successfully completed CyberShield Human Firewall Training.' },
    {
      text: 'You demonstrated excellent awareness against phishing, malicious URLs, social engineering and password attacks.',
    },
    { text: 'You are now capable of identifying modern cyber threats with confidence.' },
    { text: 'Continue practising to remain protected against evolving attacks.' },
  ]

  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= lines.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), 320)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return (
    <div className="w-[300px] md:w-[520px] rounded-2xl border border-[#00E5FF]/25 bg-[#001D3D]/50 backdrop-blur-md px-6 py-6">
      <div className="text-[#00E5FF] text-center text-[11px] tracking-[3px] mb-4 opacity-70">
        ━━━━━━━━━━━━━━━━━━━━━━
      </div>

      {lines.map((line, i) => {
        if (i >= visible) return null
        return (
          <p
            key={line.text}
            className={
              line.heading
                ? 'cs-line-in text-center font-[\'Orbitron\'] font-bold tracking-[3px] text-[#00E5FF] text-sm md:text-base mb-4'
                : 'cs-line-in text-[13px] md:text-[14.5px] text-[#c9e8f5] leading-relaxed text-center mb-3'
            }
          >
            {line.text}
          </p>
        )
      })}

      {visible >= lines.length && (
        <div className="text-[#00E5FF] text-center text-[11px] tracking-[3px] mt-2 opacity-70 cs-line-in">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
      )}
    </div>
  )
}
