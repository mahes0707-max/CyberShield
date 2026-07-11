import ShieldGraphic from './ShieldGraphic.jsx'

const features = [
  { icon: '🛡️', title: 'Real-Time Protection', desc: '24/7 Threat Monitoring' },
  { icon: '🎯', title: 'Threat Detection', desc: 'AI Security Analysis' },
  { icon: '🎓', title: 'Human Firewall Training', desc: 'Interactive Simulations' },
  { icon: '📊', title: 'Security Analytics', desc: 'Performance Dashboard' },
]

export default function LeftPanel() {
  return (
    <section className="flex-none w-full md:w-[45%] md:max-w-[45%] flex flex-col items-center justify-center px-6 md:px-10 py-12 md:py-0 relative">
      <ShieldGraphic />

      <h1 className="font-orbitron font-black text-center text-white text-[32px] md:text-[46px] tracking-[2px] drop-shadow-[0_0_6px_rgba(255,255,255,.3)]">
        CYBER
        <span className="text-cyberprimary drop-shadow-[0_0_12px_rgba(0,229,255,.9)]">SHIELD</span>
      </h1>
      <p className="mt-2 text-[13.5px] tracking-[4px] text-cyberdim font-medium text-center">
        PROTECTING YOUR DIGITAL WORLD
      </p>

      <div className="mt-[22px] px-[26px] py-[10px] rounded-full border border-cyberprimary/40 bg-cyberprimary/[.06] shadow-[0_0_18px_rgba(0,229,255,.15),inset_0_0_12px_rgba(0,229,255,.08)] text-[12.5px] tracking-[2.5px] text-cyberaccent font-semibold whitespace-nowrap">
        SECURE &nbsp;•&nbsp; DETECT &nbsp;•&nbsp; PREVENT &nbsp;•&nbsp; RESPOND
      </div>

      <div className="mt-[34px] grid grid-cols-2 gap-[14px] w-full max-w-[440px]">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="bg-cybercard/50 border border-cyberprimary/[.18] rounded-2xl px-[14px] py-4 backdrop-blur-md text-left transition-all duration-300 hover:border-cyberprimary/60 hover:shadow-[0_0_24px_rgba(0,229,255,.25)] hover:-translate-y-2 animate-floatCard"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className="text-xl mb-2 drop-shadow-[0_0_8px_rgba(0,229,255,.8)]">{f.icon}</div>
            <div className="text-[13px] font-semibold text-white tracking-wide">{f.title}</div>
            <div className="text-[11.5px] text-cyberdim mt-[3px] leading-snug">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
