import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CyberContext } from "../../context/CyberContext";

export default function SocialEngineering() {
  const scenarios = [
    {
      id: 1,
      title: "Bank Verification ",
      scenario:
        "You receive a call from someone claiming to be from your bank. They say there's a problem with your account and ask for your OTP to verify your identity.",

      options: [
        "Share the OTP",
        "Refuse and hang up",
        "Ask for more details",
        "Call the bank official number",
      ],

      correct: [1, 3],
      multiple: true,
      explanation:
        "Banks never ask for OTPs or passwords over phone calls. Always contact the bank using their official customer care number.",

      risk: "High",
    },

    {
      id: 2,
      title: "Tech Support ",
      scenario:
        "You receive a pop-up saying your computer is infected and a support agent calls asking for remote access.",

      options: [
        "Give remote access",
        "Close the popup",
        "Install their software",
        "Run antivirus yourself",
      ],

      correct: [1, 3],
      multiple: true,
      explanation:
        "Legitimate companies don't call users unexpectedly to fix computers.",

      risk: "High",
    },

    {
      id: 3,
      title: "CEO Email Request",
      scenario:
        "You receive an urgent email from your CEO asking you to transfer money to a vendor immediately.",

      options: [
        "Transfer immediately",
        "Verify through another channel",
        "Reply asking details",
        "Ignore the email",
      ],

      correct: [1],

      explanation:
        "Always verify financial requests through phone or internal communication channels.",

      risk: "Critical",
    },

    {
      id: 4,
      title: "Delivery Message",
      scenario:
        "You receive an SMS claiming your package delivery failed and asking you to click a link.",

      options: [
        "Click the link",
        "Delete the message",
        "Verify on official website",
        "Share with friends",
      ],

      correct: [1, 2],
      multiple: true,
      explanation: "Delivery scams often use fake links to steal credentials.",

      risk: "Medium",
    },

    {
      id: 5,
      title: "HR Interview",
      scenario:
        "You receive a job interview offer asking you to pay ₹5000 for processing fees.",

      options: [
        "Pay immediately",
        "Verify company details",
        "Report the scam",
        "Send personal documents",
      ],

      correct: [1, 2],
      multiple: true,
      explanation:
        "Legitimate employers never ask candidates to pay for interviews.",

      risk: "High",
    },
  ];

  const { stats, setStats } = useContext(CyberContext);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (index) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;

    const isCorrect =
      selected.length === data.correct.length &&
      selected.every((item) => data.correct.includes(item));

    setStats((prev) => ({
      ...prev,

     

      socialCorrect: isCorrect ? prev.socialCorrect + 1 : prev.socialCorrect,

      xp: isCorrect ? prev.xp + 20 : prev.xp,
    }));

    setShow(true);
  };

  const data = scenarios[current];

  const isCorrect =
    selected.length === data.correct.length &&
    selected.every((item) => data.correct.includes(item));

  const nextQuestion = () => {

    if (current === scenarios.length - 1) {

        setStats(prev => ({

            ...prev,

            socialCompleted: scenarios.length

        }));

        setQuizCompleted(true);

        return;

    }

    setCurrent(prev => prev + 1);

    setSelected([]);

    setShow(false);

};
  if (quizCompleted) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[#000814] flex justify-center items-center px-5">
          <div className="max-w-2xl w-full bg-[#001d3d] rounded-3xl p-10 border border-slate-700 shadow-2xl text-center">
            <div className="text-8xl mb-6">🎉</div>

            <h1 className="text-4xl md:text-5xl font-bold text-green-400">
              Congratulations!
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              You have successfully completed the
              <br />
              <p className="

              mt-6

              text-2xl

              text-cyan-400">

                  Score:

                  {stats.socialCorrect} / {scenarios.length}

              </p>

              <p className="

              mt-3

              text-xl">

                  Percentage:

                  {

                  Math.round(

                      (stats.socialCorrect /

                      scenarios.length)

                      *100

                  )

                  }%

              </p>
              <br />
              {

              Math.round(

              (stats.socialCorrect /

              scenarios.length)

              *100

              )>=80

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
              <br />
              <span className="text-cyan-400 font-bold">
                Social Engineering Awareness Training
              </span>
            </p>

            <div className="mt-10 bg-[#001233] rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-white">
                🛡️ Skills Learned
              </h2>

              <ul className="mt-5 text-left text-gray-300 space-y-3">
                <li>✔ Detect phishing attempts</li>
                <li>✔ Identify social engineering attacks</li>
                <li>✔ Verify suspicious requests</li>
                <li>✔ Protect sensitive information</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
              <button
                onClick={() => {
                  setQuizCompleted(false);
                  setCurrent(0);
                  setSelected([]);
                  setShow(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
              >
                🔄 Restart Quiz
              </button>

              <button
                onClick={() => navigate("/training-center")}
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
              >
                🏠 Back To Training Center
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#000814] p-5 md:p-10">
        <div className="max-w-6xl mx-auto bg-[#001d3d] rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-8">
            Social Engineering Simulator
          </h1>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Scenario */}
            <div className="bg-[#001233] rounded-xl p-6">
              <h2 className="text-cyan-400 font-bold mb-5">Scenario</h2>

              <p className="text-white leading-8">{data.scenario}</p>
            </div>

            {/* Illustration */}
            <div className="bg-[#001233] rounded-xl p-6 flex justify-center items-center">
              <div className="text-center">
                <div className="text-8xl">📞</div>

                <h3 className="text-white mt-5">{data.title}</h3>
              </div>
            </div>

            {/* Options */}
            <div className="bg-[#001233] rounded-xl p-6">
              <h2 className="text-cyan-400 font-bold mb-5">
                Choose Your Action
              </h2>

              {data.multiple && (
                <p className="text-pink-500 mb-4">Select multiple answers</p>
              )}

              <div className="space-y-4 text-white">
                {data.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={show}
                    className={`w-full text-left p-4 rounded-lg border transition
                    ${
                      show
                        ? data.correct.includes(index)
                          ? "bg-green-700 border-green-400"
                          : selected.includes(index)
                            ? "bg-red-700 border-red-400"
                            : "bg-[#001d3d]"
                        : selected.includes(index)
                          ? "bg-blue-700 border-blue-400"
                          : "bg-[#001d3d] hover:bg-[#002855]"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </button>
                ))}
              </div>

              {!show && (
                <button
                  onClick={handleSubmit}
                  className="
                        mt-6
                        bg-blue-600
                        hover:bg-blue-700
                        px-6
                        py-3
                        rounded-lg
                        font-semibold
                        transition"
                >
                  Analyze
                </button>
              )}
            </div>
          </div>

          {show && (
            <div className="mt-8 bg-[#001233] p-6 rounded-xl">
              <h2
                className={`text-2xl font-bold ${
                  isCorrect ? "text-green-400" : "text-red-400"
                }`}
              >
                {isCorrect ? "✓ Correct Choice" : "✗ Wrong Choice"}
              </h2>

              <h3 className="mt-4 text-[#00b4d8]">Risk Level: {data.risk}</h3>

              <p className="text-white mt-4">{data.explanation}</p>

              <button
                onClick={nextQuestion}
                className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                {current === scenarios.length - 1
                  ? "🏁 Finish Training"
                  : "Next Question →"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
