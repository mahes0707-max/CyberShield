// import { useEffect, useRef } from 'react'

// export default function ParticleCanvas() {
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     let W, H
//     let particles = []
//     let animationId

//     function resize() {
//       W = canvas.width = window.innerWidth
//       H = canvas.height = window.innerHeight
//     }

//     function initParticles() {
//       particles = []
//       const count = Math.floor((W * H) / 16000)
//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * W,
//           y: Math.random() * H,
//           r: Math.random() * 1.8 + 0.4,
//           vy: Math.random() * 0.35 + 0.08,
//           vx: (Math.random() - 0.5) * 0.15,
//           a: Math.random() * 0.6 + 0.2,
//         })
//       }
//     }

//     function handleResize() {
//       resize()
//       initParticles()
//     }

//     function animate() {
//       ctx.clearRect(0, 0, W, H)
//       ctx.fillStyle = '#00E5FF'
//       for (const p of particles) {
//         ctx.globalAlpha = p.a
//         ctx.beginPath()
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
//         ctx.fill()
//         p.y -= p.vy
//         p.x += p.vx
//         if (p.y < -5) {
//           p.y = H + 5
//           p.x = Math.random() * W
//         }
//       }
//       ctx.globalAlpha = 1
//       animationId = requestAnimationFrame(animate)
//     }

//     resize()
//     initParticles()
//     animate()
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//       cancelAnimationFrame(animationId)
//     }
//   }, [])

//   return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
// }
