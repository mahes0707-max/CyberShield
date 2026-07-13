export default function HeaderShield() {
  return (
    <svg
      className="w-[44px] h-[44px] mx-auto mb-[14px] drop-shadow-[0_0_10px_rgba(0,229,255,.9)]"
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 4 L188 38 V116 C188 172 152 210 100 236 C48 210 12 172 12 116 V38 Z"
        fill="#001D3D"
        stroke="#00E5FF"
        strokeWidth="6"
      />
      <rect x="78" y="112" width="44" height="36" rx="6" fill="none" stroke="#00E5FF" strokeWidth="5" />
      <path d="M86 112 V96 a14 14 0 0 1 28 0 V112" stroke="#00E5FF" strokeWidth="5" fill="none" />
    </svg>
  )
}
