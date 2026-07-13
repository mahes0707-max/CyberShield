export default function CertificateReveal({
  userName = 'Analyst',
  courseName = 'CyberShield Human Firewall Training',
  date = new Date().toLocaleDateString(),
  onDownload,
}) {
  return (
    <div className="flex flex-col items-center gap-7 cs-certificate-in">
      <div className="text-center cs-line-in">
        <div className="text-[#00E5FF] font-['Orbitron'] tracking-[4px] text-sm md:text-base">
          CERTIFICATE UNLOCKED
        </div>
      </div>

      <div className="relative w-[300px] md:w-[520px] rounded-2xl border-2 border-[#00E5FF]/50 bg-gradient-to-b from-[#001D3D] to-[#000814] px-7 py-8 md:px-10 md:py-10 shadow-[0_0_50px_rgba(0,229,255,.35),0_20px_60px_rgba(0,0,0,.6)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />

        <div className="relative flex flex-col items-center text-center">
          <svg
            className="w-12 h-12 mb-3 drop-shadow-[0_0_16px_rgba(0,229,255,.8)]"
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

          <div className="text-[10.5px] md:text-xs tracking-[4px] text-[#8FB4C9]">
            CERTIFICATE OF ACHIEVEMENT
          </div>

          <div className="mt-5 text-white font-['Orbitron'] font-bold text-xl md:text-2xl tracking-wide">
            {userName}
          </div>

          <div className="mt-4 text-[12.5px] md:text-[13.5px] text-[#c9e8f5] leading-relaxed max-w-[380px]">
            has successfully completed
            <span className="block mt-1 text-[#00E5FF] font-semibold">{courseName}</span>
          </div>

          <div className="mt-6 w-full flex items-center justify-between text-[10.5px] text-[#8FB4C9] tracking-wide">
            <span>Issued {date}</span>
            <span>CyberShield AI</span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onDownload}
        className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] text-[#001220] font-['Orbitron'] font-bold text-sm md:text-[15px] tracking-[2px] shadow-[0_0_25px_rgba(0,229,255,.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(0,229,255,.8)]"
      >
        DOWNLOAD CERTIFICATE
      </button>
    </div>
  )
}
