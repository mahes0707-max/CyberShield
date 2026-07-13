import Navbar from "../../components/navbar";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CyberContext } from "../../context/CyberContext";
export default function TrainingCenter() {
  const navigate = useNavigate();
  const { stats } = useContext(CyberContext);
  const modules = [
    {
      title: "Email Phishing Simulator",
      icon: "📧",
      desc: "Identify suspicious emails.",
      path: "/email-phishing",
      color: "from-blue-600 to-cyan-600",
    },

    {
      title: " Phishing URL Detector",
      icon: "🔗",
      desc: "Detect malicious URLs.",
      path: "/phishingurl",
      color: "from-red-600 to-orange-600",
    },

    {
      title: "Social Engineering",
      icon: "👥",
      desc: "Recognize social attacks.",
      path: "/social-engineering",
      color: "from-purple-600 to-pink-600",
    },

    {
      title: "Password Checker",
      icon: "🔐",
      desc: "Test password strength.",
      path: "/password-checker",
      color: "from-green-600 to-emerald-600",
    },

    {
      title: "Cyber Quiz",
      icon: "🧠",
      desc: "Evaluate cyber knowledge.",
      path: "/cyberquiz",
      color: "from-yellow-600 to-orange-500",
    },

    {
      title: "Threat Library",
      icon: "⚠️",
      desc: "Learn cyber threats.",
      path: "/threat-library",
      color: "from-red-700 to-red-500",
    },

    {
      title: "Human Firewall Simulator",
      icon: "🛡️",
      desc: "The Real Challenge.",
      path: "/human-firewall",
      color: "from-indigo-600 to-blue-600",
    },

    {
      title: "Download Certificate",
      icon: "🏆",
      desc: "Download your CyberShield Human Firewall Certificate.",
      path: "/final-assessment",
      color: "from-amber-500 to-yellow-400",
    },
  ];

const emailPercentage =
  stats.emailCompleted === 0
    ? 0
    : Math.round(
        (stats.emailCorrect /
          stats.emailCompleted) *
          100
      );

const urlPercentage =
  stats.urlCompleted === 0
    ? 0
    : Math.round(
        (stats.urlCorrect /
          stats.urlCompleted) *
          100
      );

const socialPercentage =
  stats.socialCompleted === 0
    ? 0
    : Math.round(
        (stats.socialCorrect /
          stats.socialCompleted) *
          100
      );

const quizPercentage =
  stats.quizCompleted === 0
    ? 0
    : Math.round(
        (stats.quizCorrect /
          stats.quizCompleted) *
          100
      );

const humanFirewallUnlocked =
  emailPercentage >= 80 &&
  urlPercentage >= 80 &&
  socialPercentage >= 80 &&
  quizPercentage >= 80 &&
  stats.passwordCompleted &&
  stats.threatCompleted;

const certificateUnlocked = stats.humanFirewallCompleted;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#000814] p-5 md:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3affeb] text-center">
            Training Center
          </h1>

          <p className="text-center text-gray-400 mt-4">
            Enhance your cybersecurity skills through interactive simulations
            and quizzes.
          </p>

          
          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {modules.map((module, index) => (
              <div
                key={index}
                onClick={() => {

                  if (
                  module.title === "Human Firewall Simulator" &&
                  !humanFirewallUnlocked
                ) {
                  return;
                }

                if (
                  module.title === "Download Certificate" &&
                  !certificateUnlocked
                ) {
                  return;
                }

                navigate(module.path);

                }}
                className="cursor-pointer bg-[#001d3d]
                rounded-2xl p-8 hover:scale-105
                transition duration-300
                border border-slate-700
                hover:border-cyan-500"
              >
                <div
                  className={`w-20 h-20 rounded-full
                  flex items-center justify-center
                  text-4xl bg-gradient-to-r
                  ${module.color}`}
                >
                  {module.icon}
                </div>

                <h2 className="text-white text-xl font-bold mt-6">
                  {module.title}
                </h2>

                <p className="text-gray-400 mt-4">{module.desc}</p>

                      {/* Human Firewall Requirements */}

                    

            
                <button
                    className={`
                    mt-6
                    px-5
                    py-3
                    rounded-lg
                    text-white
                    font-semibold
                    transition

                   ${
                        module.title === "Human Firewall Simulator"

                        ?

                        humanFirewallUnlocked

                        ?

                        "bg-green-600 hover:bg-green-700"

                        :

                        "bg-gray-700 cursor-not-allowed"

                        :

                        module.title === "Download Certificate"

                        ?

                        certificateUnlocked

                        ?

                        "bg-yellow-500 hover:bg-yellow-600"

                        :

                        "bg-gray-700 cursor-not-allowed"

                        :

                        "bg-cyan-600 hover:bg-cyan-700"
                        }
                    `}
                  >
                {
                    module.title === "Human Firewall Simulator"

                    ?

                    humanFirewallUnlocked

                    ?

                    "🛡 Start Mission"

                    :

                    "🔒 Locked"

                    :

                    module.title === "Download Certificate"

                    ?

                    certificateUnlocked

                    ?

                    "Click Here"

                    :

                    "🔒 Locked"

                    :

                    "Start Training"
                    }
                </button>


                {
                module.title==="Human Firewall Simulator"
                &&
                humanFirewallUnlocked
                &&

                <p className="

                mt-4
                text-green-400
                font-bold
                text-center">

                🎉 Ready For Mission

                </p>

                }

                {
                  module.title === "Download Certificate" &&
                  !certificateUnlocked && (

                  <p className="mt-4 text-center text-red-400 text-sm font-semibold">

                  Complete the Human Firewall mission to unlock your certificate.

                  </p>

                  )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
