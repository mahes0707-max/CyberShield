export default function LoadingStatus({ label, done, granted }) {
  return (
    <div className="h-6 flex items-center justify-center overflow-hidden">
      <p
        key={label}
        className={`font-poppins text-[13px] md:text-sm tracking-[1px] animate-[statusIn_0.4s_ease-out] ${
          granted
            ? 'text-[#5CFFB1] font-semibold drop-shadow-[0_0_10px_rgba(92,255,177,.8)] tracking-[3px]'
            : 'text-[#8FB4C9]'
        }`}
      >
        {done && !granted && <span className="text-[#00E5FF] mr-2">&#10003;</span>}
        {label}
      </p>

      <style>{`
        @keyframes statusIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
