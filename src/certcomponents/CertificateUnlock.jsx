import { useEffect, useRef, useState } from 'react'
import BackgroundEffects from "../components/BackgroundEffects.jsx";
import BootScreen from './BootScreen.jsx'
import TerminalLines from './TerminalLines.jsx'
import SkillScan from './SkillScan.jsx'
import AIVerdict from './AIVerdict.jsx'
import MissionSuccess from './MissionSuccess.jsx'
import ClosingQuote from './ClosingQuote.jsx'
import CertificateReveal from './CertificateReveal.jsx'
import ConfettiBurst from './ConfettiBurst.jsx'
import { useAuth } from "../context/AuthContext";
import { getCertificateData } from "../utils/getCertificateData";
import { generateCertificate } from "../utils/generateCertificate";
import { useNavigate } from "react-router-dom";
// Phase order + how long each one stays on screen (ms).
// Matches the 10-second story: boot -> typing -> analysis -> verdict -> success,
// plus a closing-quote beat before the certificate itself (which just waits).
const PHASES = [
  { name: 'boot', duration: 2000 },
  { name: 'typing', duration: 2000 },
  { name: 'analysis', duration: 2000 },
  { name: 'verdict', duration: 3500 },
  { name: 'success', duration: 2000 },
  { name: 'quote', duration: 3000 },
  { name: 'certificate', duration: null }, // waits for the user
]


export default function CertificateUnlock({
  userName = 'Analyst',
  courseName = 'CyberShield Human Firewall Training',
  scores,
  onClose,
}) {
  const [phaseIndex, setPhaseIndex] = useState(0)
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [bootPercent, setBootPercent] = useState(2)
  const elapsedRef = useRef(0)

  const phase = PHASES[phaseIndex].name

  // Advance through phases automatically.
  useEffect(() => {
    const { duration } = PHASES[phaseIndex]
    if (duration == null) return undefined // 'certificate' phase — no auto-advance
    const t = setTimeout(() => setPhaseIndex((i) => i + 1), duration)
    return () => clearTimeout(t)
  }, [phaseIndex])

  // Drive the progress percentage smoothly across the boot + typing phases (0 -> 4s ~= 0 -> 60%).
  useEffect(() => {
    if (phase !== 'boot' && phase !== 'typing') return undefined
    const interval = setInterval(() => {
      elapsedRef.current += 100
      const pct = Math.min(60, Math.round((elapsedRef.current / 4000) * 60))
      setBootPercent(Math.max(2, pct))
    }, 100)
    return () => clearInterval(interval)
  }, [phase])

    function handleClose() {

  if (onClose) {

    onClose();

  }

  navigate("/home", { replace: true });

}

  async function handleDownload() {

  try {

    const certificate = await getCertificateData(currentUser);

    await generateCertificate({

      name: currentUser.displayName,

      certificateId: certificate.certificateId,

      issueDate: certificate.certificateDate,

    });

  }

  catch (err) {

    console.error(err);

    alert("Certificate download failed.");

  }

}

  return (
    <div className="fixed inset-0 z-[60] bg-[#000814] overflow-hidden">
      <BackgroundEffects />

      {phase === 'success' && <ConfettiBurst duration={2200} />}

      {phase === 'certificate' && (
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-5 right-5 md:top-8 md:right-8 z-[80] w-9 h-9 rounded-full border border-[#00E5FF]/30 text-[#8FB4C9] hover:text-[#00E5FF] hover:border-[#00E5FF]/70 flex items-center justify-center transition-colors duration-200"
        >
          ✕
        </button>
      )}

      <div className="relative z-[10] min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {phase === 'boot' && <BootScreen percent={bootPercent} />}
        {phase === 'typing' && <TerminalLines percent={bootPercent} />}
        {phase === 'analysis' && <SkillScan scores={scores} />}
        {phase === 'verdict' && <AIVerdict userName={userName} />}
        {phase === 'success' && <MissionSuccess />}
        {phase === 'quote' && <ClosingQuote />}
        {phase === 'certificate' && (
          <CertificateReveal
                userName={currentUser.displayName}
                courseName={courseName}
                onDownload={handleDownload}
            />
        )}
      </div>
    </div>
  )
}
