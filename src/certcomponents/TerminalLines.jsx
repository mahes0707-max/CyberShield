import { useEffect, useState } from 'react'

const LINES = [
  'Loading User Profile...',
  'Connecting Firebase...',
  'Reading Training Records...',
  'Verifying Identity...',
]

/**
 * Types each line out character-by-character, one after another,
 * terminal-style, with a blinking caret on the active line.
 */
export default function TerminalLines({ percent = 35 }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (lineIndex >= LINES.length) return
    const current = LINES[lineIndex]

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setLineIndex((i) => i + 1)
      setCharIndex(0)
    }, 160)
    return () => clearTimeout(t)
  }, [lineIndex, charIndex])

  return (
    <div className="w-[280px] md:w-[420px] cs-line-in">
      <div className="rounded-xl border border-[#00E5FF]/25 bg-[#000814]/70 backdrop-blur-md px-5 py-4 font-mono text-[12.5px] md:text-[13.5px] text-[#48CAE4] min-h-[130px]">
        {LINES.map((line, i) => {
          if (i > lineIndex) return null
          const isActive = i === lineIndex
          const text = isActive ? line.slice(0, charIndex) : line
          return (
            <div key={line} className="mb-1.5 flex items-center gap-2">
              <span className="text-[#00E5FF]">$</span>
              <span>
                {text}
                {isActive && <span className="cs-caret text-[#00E5FF]">▌</span>}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-4 h-2 rounded-full bg-[#001D3D] border border-[#00E5FF]/25 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] shadow-[0_0_14px_rgba(0,229,255,.7)] transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
