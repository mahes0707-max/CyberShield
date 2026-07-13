import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import LoadingGrid from "../Anicomponents/LoadingGrid.jsx";
import LoadingParticles from "../Anicomponents/LoadingParticles.jsx";
import LoadingProgress from "../Anicomponents/LoadingProgress.jsx";
import LoadingStatus from "../Anicomponents/LoadingStatus.jsx";
// The boot sequence timeline: when each line appears (ms from mount) and
// how far the progress bar should be at that point.
const STEPS = [
  { label: 'AUTHENTICATING...', percent: 10, time: 0, done: false },
  { label: 'Identity Verified', percent: 20, time: 500, done: true },
  { label: 'Loading User Profile', percent: 35, time: 1000, done: true },
  { label: 'Decrypting User Profile', percent: 50, time: 1500, done: true },
  { label: 'Connecting Threat Intelligence', percent: 70, time: 2000, done: true },
  { label: 'Initializing AI Threat Detection Engine', percent: 85, time: 2500, done: true },
  { label: 'Loading Cyber Dashboard', percent: 95, time: 3000, done: true },
  { label: 'ACCESS GRANTED', percent: 100, time: 3500, done: true, granted: true },
]

const GRANT_HOLD = 900 // ms the "ACCESS GRANTED" line + green flash sit before exit
const FLASH_DURATION = 1000
const EXIT_DURATION = 800

export default function SystemLoading() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [stepIndex, setStepIndex] = useState(0)
  const [phase, setPhase] = useState('booting') // booting -> flash -> exit

  const redirectTo = location.state?.redirectTo || location.state?.from?.pathname || '/home'
  const displayName =
currentUser?.displayName ||
location.state?.name ||
"AGENT";

  useEffect(() => {
    const timers = STEPS.map((step, i) => setTimeout(() => setStepIndex(i), step.time))

    const lastStepTime = STEPS[STEPS.length - 1].time
    const flashAt = lastStepTime + GRANT_HOLD
    const exitAt = flashAt + FLASH_DURATION
    const navigateAt = exitAt + EXIT_DURATION

    timers.push(setTimeout(() => setPhase('flash'), flashAt))
    timers.push(setTimeout(() => setPhase('exit'), exitAt))
    timers.push(setTimeout(() => navigate(redirectTo, { replace: true }), navigateAt))

    return () => timers.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const step = STEPS[stepIndex]
  const granted = phase !== 'booting' || step.granted

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#000814] text-white font-poppins overflow-hidden transition-opacity duration-500 ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <LoadingGrid />
      <LoadingParticles />

      <div className="relative z-[2] h-full w-full flex flex-col items-center justify-center px-6">
        {/* Center logo */}
        <div
          className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
            granted ? 'scale-110' : 'scale-100'
          }`}
        >
          <div className="relative w-[92px] h-[92px] mb-4 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-[#00E5FF]/25 animate-[bootRingSpin_6s_linear_infinite]" />
            <svg
              viewBox="0 0 200 240"
              className="relative z-[2] w-[64px] h-auto animate-[bootShieldGlow_2.2s_ease-in-out_infinite]"
              fill="none"
            >
              <defs>
                <linearGradient id="bootShieldGrad" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#48CAE4" />
                  <stop offset="1" stopColor="#023E73" />
                </linearGradient>
              </defs>
              <path
                d="M100 4 L188 38 V116 C188 172 152 210 100 236 C48 210 12 172 12 116 V38 Z"
                fill="url(#bootShieldGrad)"
                stroke="#00E5FF"
                strokeWidth="6"
              />
              <rect x="78" y="112" width="44" height="36" rx="6" fill="none" stroke="#00E5FF" strokeWidth="6" />
              <path d="M86 112 V96 a14 14 0 0 1 28 0 V112" stroke="#00E5FF" strokeWidth="6" fill="none" />
            </svg>
          </div>

          <h1 className="font-orbitron font-black tracking-[3px] text-[26px] md:text-[32px] drop-shadow-[0_0_18px_rgba(0,229,255,.7)]">
            CYBER<span className="text-[#00E5FF]">SHIELD</span>
          </h1>
          <p className="mt-1 text-[10.5px] md:text-[11px] tracking-[5px] text-[#8FB4C9] font-medium">
            SECURITY OPERATING SYSTEM
          </p>
        </div>

        {/* Status + progress */}
        <div className="mt-10 w-full flex flex-col items-center gap-5">
          <LoadingStatus label={step.label} done={step.done} granted={step.granted} />
          <LoadingProgress percent={step.percent} />
        </div>
            <div className="mt-8 text-center">

              <h2 className="text-2xl font-bold text-cyan-300">

                Welcome

              </h2>

              <h1 className="text-4xl font-extrabold text-white mt-2">

                {displayName}

              </h1>

              <p className="text-cyan-400 mt-2 tracking-widest">

                SECURITY ANALYST

              </p>

            </div>
        {/* Bottom welcome */}
        <div
          className={`mt-14 text-center transition-all duration-500 ${
            granted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p className="text-[11px] tracking-[4px] text-[#8FB4C9]">WELCOME</p>
          <p className="mt-1 font-orbitron font-bold text-[20px] md:text-[24px] tracking-[2px] text-white drop-shadow-[0_0_14px_rgba(0,229,255,.5)]">
            {displayName.toUpperCase()}
          </p>
          <p className="mt-1 text-[11px] tracking-[2px] text-[#48CAE4]">SECURITY CLEARANCE · LEVEL 1 ANALYST</p>
          <p className="mt-3 text-[11px] tracking-[3px] text-[#5b7d92] animate-[dotsFade_1.4s_ease-in-out_infinite]">
            REDIRECTING...
          </p>
        </div>
      </div>

      {/* Access-granted flash */}
      {phase !== 'booting' && (
        <div
          className={`pointer-events-none fixed inset-0 z-[3] bg-[radial-gradient(ellipse_at_center,rgba(92,255,177,.35),transparent_65%)] ${
            phase === 'flash' ? 'animate-[grantFlash_0.7s_ease-out]' : 'opacity-0'
          }`}
        />
      )}

      <style>{`
        @keyframes bootRingSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bootShieldGlow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(0,229,255,.7)) drop-shadow(0 0 24px rgba(0,180,216,.4));
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(0,229,255,1)) drop-shadow(0 0 38px rgba(0,180,216,.7));
          }
        }
        @keyframes dotsFade {
          0%, 100% { opacity: .5; }
          50% { opacity: 1; }
        }
        @keyframes grantFlash {
          0% { opacity: 0; }
          35% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
