import { useEffect, useRef } from 'react'

const COLORS = ['#00E5FF', '#00B4D8', '#48CAE4', '#00FF9C', '#FFFFFF']

/**
 * A short confetti burst. Mounts, runs for `duration` ms, then stops
 * drawing on its own (component can be unmounted by the parent after).
 */
export default function ConfettiBurst({ duration = 3200 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H
    let pieces = []
    let animationId
    let start = null

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function initPieces() {
      pieces = []
      const count = Math.floor(W / 6)
      for (let i = 0; i < count; i++) {
        pieces.push({
          x: Math.random() * W,
          y: -20 - Math.random() * H * 0.5,
          size: Math.random() * 6 + 3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          vy: Math.random() * 2.2 + 1.4,
          vx: (Math.random() - 0.5) * 1.6,
          rot: Math.random() * 360,
          vr: (Math.random() - 0.5) * 10,
        })
      }
    }

    function draw(ts) {
      if (start === null) start = ts
      const elapsed = ts - start

      ctx.clearRect(0, 0, W, H)
      for (const p of pieces) {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rot * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.globalAlpha = elapsed > duration - 500 ? Math.max(0, (duration - elapsed) / 500) : 1
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5)
        ctx.restore()

        p.y += p.vy
        p.x += p.vx
        p.rot += p.vr
        if (p.y > H + 20) p.y = -20
      }

      if (elapsed < duration) {
        animationId = requestAnimationFrame(draw)
      } else {
        ctx.clearRect(0, 0, W, H)
      }
    }

    resize()
    initPieces()
    animationId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [duration])

  return <canvas ref={canvasRef} className="fixed inset-0 z-[70] pointer-events-none" />
}
