import { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import BackgroundEffects from "../../components/BackgroundEffects";
import LeftPanel from "../../components/LeftPanel";
import HeaderShield from "../../components/HeaderShield";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [showPw, setShowPw] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const cardRef = useRef(null)


  const navigate = useNavigate()
  const location = useLocation()

  const redirectTo = location.state?.from?.pathname || '/'
  const pendingAction = location.state?.actionLabel
  const { login, currentUser } = useAuth();
  async function handleSubmit(e) {

    e.preventDefault();

    setSubmitting(true);

    setError("");

    try{

        await login(email,password);

        navigate("/home");

    }

    catch(err){

        switch(err.code){

            case "auth/user-not-found":

                setError("No account found with this email.");

                break;

            case "auth/wrong-password":

                setError("Incorrect password.");

                break;

            case "auth/invalid-email":

                setError("Please enter a valid email.");

                break;

            case "auth/invalid-credential":

                setError("Invalid email or password.");

                break;

            default:

                setError("Login failed. Please try again.");

        }

    }

    setSubmitting(false);

}
useEffect(() => {

    if(currentUser){

        navigate("/home");

    }

}, [currentUser, navigate]);
  function handleMouseMove(e) {
    const card = cardRef.current
    if (!card) return
    const r = card.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    card.style.transform = `rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div className="relative min-h-screen bg-[#000814] text-white font-poppins overflow-x-hidden">
      <BackgroundEffects />

      <div className="relative z-[2] flex flex-col md:flex-row min-h-screen w-full">
        <LeftPanel />

        {/* RIGHT PANEL */}
        <section className="flex-none w-full md:w-[55%] md:max-w-[55%] flex items-center justify-center p-6 md:p-10">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[440px] overflow-hidden bg-[#001D3D]/55 border border-[#00E5FF]/35 rounded-[30px] px-6 md:px-[42px] pt-9 md:pt-[46px] pb-9 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,229,255,.12),0_20px_60px_rgba(0,0,0,.5),inset_0_1px_0_rgba(255,255,255,.06)] transition-transform duration-150"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="pointer-events-none absolute top-0 left-[-150%] w-[80%] h-full bg-[linear-gradient(100deg,transparent,rgba(255,255,255,.06),transparent)] animate-[sweepLight_7s_ease-in-out_infinite]" />

            <div className="text-center mb-[30px]">
              <HeaderShield />
              <h2 className="font-orbitron font-extrabold text-[28px] tracking-[1.5px] text-[#00E5FF] drop-shadow-[0_0_16px_rgba(0,229,255,.6)]">
                WELCOME BACK
              </h2>
              <p className="mt-2 text-sm text-[#8FB4C9] font-light">
                {pendingAction
                  ? 'Login to continue and unlock that module.'
                  : 'Login to continue your cybersecurity journey.'}
              </p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-[13px] text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-5">
                <label className="block text-[11px] tracking-[2px] text-[#48CAE4] font-semibold mb-2">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#48CAE4] opacity-85"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 5h18v14H3z" />
                    <path d="M3 6l9 7 9-7" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[rgba(0,8,20,.55)] border border-[#00E5FF]/25 rounded-xl py-[15px] pl-[46px] pr-[46px] text-white text-[14.5px] font-poppins outline-none transition-all duration-300 placeholder:text-[#5b7d92] focus:border-[#00E5FF] focus:shadow-[0_0_0_3px_rgba(0,229,255,.12),0_0_18px_rgba(0,229,255,.35)]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-5">
                <label className="block text-[11px] tracking-[2px] text-[#48CAE4] font-semibold mb-2">
                  PASSWORD
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#48CAE4] opacity-85"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="10" width="16" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 018 0v3" />
                  </svg>
                  <input
                    type={showPw ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[rgba(0,8,20,.55)] border border-[#00E5FF]/25 rounded-xl py-[15px] pl-[46px] pr-[46px] text-white text-[14.5px] font-poppins outline-none transition-all duration-300 placeholder:text-[#5b7d92] focus:border-[#00E5FF] focus:shadow-[0_0_0_3px_rgba(0,229,255,.12),0_0_18px_rgba(0,229,255,.35)]"
                  />
                  <svg
                    onClick={() => setShowPw((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-[19px] h-[19px] text-[#8FB4C9] cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>

              <div className="flex items-center justify-between mb-[26px] text-[13px]">
                <label className="flex items-center gap-2 text-[#8FB4C9] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="appearance-none relative w-4 h-4 rounded border border-[#00E5FF]/50 bg-[rgba(0,8,20,.6)] cursor-pointer grid place-content-center checked:bg-[#00E5FF] checked:shadow-[0_0_10px_rgba(0,229,255,.7)] after:content-[''] after:hidden checked:after:block checked:after:w-[9px] checked:after:h-[5px] checked:after:border-l-2 checked:after:border-b-2 checked:after:border-l-[#001D3D] checked:after:border-b-[#001D3D] checked:after:[transform:rotate(-45deg)_translateY(-1px)]"
                  />
                  Remember Me
                </label>
                <button
                  type="button"
                  onClick={() => alert("Forgot Password feature coming soon")}
                  className="text-[#48CAE4] hover:underline hover:drop-shadow-[0_0_10px_rgba(0,229,255,.8)]"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group relative w-full py-4 rounded-2xl border-none bg-gradient-to-r from-[#00B4D8] to-[#00E5FF] text-[#001220] font-poppins font-bold text-[15px] tracking-[1.5px] cursor-pointer flex items-center justify-center gap-[10px] overflow-hidden shadow-[0_0_22px_rgba(0,229,255,.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,229,255,.7)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="pointer-events-none absolute top-0 left-[-60%] w-[40%] h-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.55),transparent)] -skew-x-[20deg] transition-[left] duration-500 group-hover:left-[130%]" />
                {submitting ? 'VERIFYING...' : 'ACCESS SYSTEM'}
                <svg
                  className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-[5px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>

            <div className="flex items-center gap-[14px] my-[26px] text-[#8FB4C9] text-[11px] tracking-[2px] before:content-[''] before:flex-1 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(0,229,255,.35),transparent)] after:content-[''] after:flex-1 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(0,229,255,.35),transparent)]">
              OR
            </div>

            <p className="text-center text-[13.5px] text-[#8FB4C9]">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                state={location.state}
                className="relative text-[#00E5FF] font-semibold drop-shadow-[0_0_10px_rgba(0,229,255,.5)] hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
