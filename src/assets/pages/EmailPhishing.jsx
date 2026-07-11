import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "../../index.css";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CyberContext } from "../../context/CyberContext";
function EmailPhishing() {
  const emails = [
    {
      id: 1,
      subject: "Action Required: Verify Your Account",
      from: "security@secure-account-alerts.com",
      message:
        "Dear User,\n\nWe noticed unusual activity on your account. Please verify your account within 24 hours.\n\nhttp://secure-login-check.com \n\nFailure to verify may result in restricted access.\n\nThank you,\nSecurity Team",
      answer: "Suspicious",
      risk: "HIGH",
      analysis: [
        "Generic greeting",
        "Unknown domain",
        "Urgent language",
        "Suspicious link",
      ],
    },

    {
      id: 2,
      subject: "Congratulations! You Won ₹50,000",
      from: "reward@bonus-center.com",
      message:
        "Hello,\n\nYou have been selected to receive ₹50,000.\nClaim your reward immediately.\n\nhttp://reward-center-bonus.com \n\nOffer expires today.\n\nBest regards,\nRewards Department",
      answer: "Suspicious",
      risk: "HIGH",
      analysis: ["Unexpected reward", "Creates urgency", "Unknown website"],
    },

    {
      id: 3,
      subject: "Monthly Security Report",
      from: "notifications@cybershield.com",
      message:
        "Hello Mahes,\n\nHere is your monthly security activity summary.\n\nBlocked threats: 3\nLogin attempts: 15\n\nThank you,\nCyber Shield Team",
      answer: "Safe",
      risk: "LOW",
      analysis: ["Professional format", "Trusted domain", "No urgency"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const currentMail = emails[currentIndex];
  const { stats, setStats } = useContext(CyberContext);

  useEffect(() => {

    setStats(prev => ({

        ...prev,

        emailCorrect: 0,

        emailCompleted: 0

    }));

}, []);



  const handleSubmit = () => {
    if (!selected) {
      alert("Please select an option");
      return;
    }

    const isCorrect = selected === currentMail.answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setStats((prev) => ({
      ...prev,
        emailCorrect: score,
        emailCompleted: emails.length,
      

      emailCorrect: isCorrect ?prev.emailCorrect + 1 : prev.emailCorrect,

      xp: prev.xp + 10,
    }));

    setShowAnalysis(true);
  };

  const nextQuestion = () => {

    // Last Question
    if(currentIndex === emails.length - 1){

        setStats(prev => ({

            ...prev,

            emailCompleted: emails.length

        }));

    }

    setCurrentIndex(prev => prev + 1);

    setSelected("");

    setShowAnalysis(false);

};

  if (currentIndex === emails.length) {
    return (
      <div className="text-center text-white my-[20%] bg-[#001d3d] p-10 rounded-2xl shadow-lg max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-5">Quiz Completed 🎉</h1>

        <h2 className="text-2xl">
          Your Score : {score} / {emails.length}
        </h2>
        <p className="mt-4 text-xl text-cyan-400">
       Percentage:
      {Math.round((score / emails.length) * 100)}%

        </p>

        {
                Math.round(
                    (score / emails.length) * 100
                ) >= 80

                ?

                <p className="

                mt-4

                text-green-400

                font-bold">

                    ✅ Human Firewall Requirement Passed

                </p>

                :

                <p className="

                mt-4

                text-red-400

                font-bold">

                    ❌ Minimum 80% required

                </p>
            }
        <button
          onClick={() => navigate("/training-center")}
          className="bg-blue-600 px-5 py-2 rounded-lg mt-5 font-bold"
        >
          Back to Training Center
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#00030e] px-4 py-6 md:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-4xl bg-[#001d3d] rounded-2xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-white">
          {/* Question Number */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#b2fbb7]">
            Question {currentIndex + 1}/{emails.length}
          </h1>

          {/* Email Card */}
          <div className="bg-[#002855] rounded-2xl p-5 sm:p-6 border border-slate-700">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold break-words">
              {currentMail.subject}
            </h2>

            <p className="text-gray-300 mt-3 mb-5 text-sm sm:text-base break-all">
              <span className="font-semibold text-cyan-400">From :</span>{" "}
              {currentMail.from}
            </p>

            <hr className="border-slate-600 mb-5" />

            <p className="whitespace-pre-line leading-7 text-sm sm:text-base text-gray-200">
              {currentMail.message}
            </p>
          </div>

          {/* Options */}
          {!showAnalysis && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setSelected("Safe")}
                disabled={showAnalysis}
                className={`w-full py-3 rounded-xl font-semibold transition duration-300
                  ${
                    !showAnalysis
                      ? selected === "Safe"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-700 hover:bg-slate-600"
                      : currentMail.answer === "Safe"
                        ? "bg-green-600"
                        : selected === "Safe"
                          ? "bg-red-600"
                          : "bg-slate-700"
                  }`}
              >
                ✅ Safe
              </button>

              <button
                onClick={() => setSelected("Suspicious")}
                disabled={showAnalysis}
                className={`w-full py-3 rounded-xl font-semibold transition duration-300
                  ${
                    !showAnalysis
                      ? selected === "Suspicious"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-slate-700 hover:bg-slate-600"
                      : currentMail.answer === "Suspicious"
                        ? "bg-green-600"
                        : selected === "Suspicious"
                          ? "bg-red-600"
                          : "bg-slate-700"
                  }`}
              >
                🚨 Suspicious
              </button>
            </div>
          )}

          {/* Analyze Button */}
          {!showAnalysis && (
            <button
              disabled={!selected}
              onClick={handleSubmit}
              className="mt-6 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
            >
              Analyze Email
            </button>
          )}

          {/* Analysis */}
          {showAnalysis && (
            <div className="bg-[#001233] mt-10 p-8 rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-bold text-green-400">
                Correct Answer : {currentMail.answer}
              </h2>

              <h3 className="mt-4 text-lg font-semibold text-yellow-400">
                Risk Level : {currentMail.risk}
              </h3>

              <ul className="mt-5 space-y-3">
                {currentMail.analysis.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <span className="text-green-400">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={nextQuestion}
                className="mt-8 w-full sm:w-auto bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold transition"
              >
                Next Question →
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EmailPhishing;
