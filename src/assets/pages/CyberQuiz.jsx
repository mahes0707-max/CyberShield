import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useContext } from "react";
import { CyberContext } from "../../context/CyberContext";

export default function CyberQuiz() {
  const navigate = useNavigate();
  const {stats, setStats } = useContext(CyberContext);
  const questions = [
    {
      question: "Which password is the strongest?",
      options: [
        "12345678",
        "Password123",
        "Welcome2025",
        "P@ssw0rd#Secure2026",
      ],
      answer: 3,
      explanation:
        "A strong password contains uppercase letters, lowercase letters, numbers, symbols, and is at least 15 characters long.",
    },

    {
      question: "Which URL is the official Instagram website?",
      options: [
        "instagram.verify-login.net",
        "instagram-login.com",
        "www.instagram.com",
        "secure-instagram.net",
      ],
      answer: 2,
      explanation: "The official Instagram domain is www.instagram.com.",
    },

    {
      question:
        "What should you do if you receive an email asking you to verify your bank account?",
      options: [
        "Click the link immediately",
        "Reply with your account details",
        "Visit the official bank website directly",
        "Ignore the URL",
      ],
      answer: 2,
      explanation:
        "Always visit the bank website directly instead of clicking links.",
    },

    {
      question: "Which is a common sign of a phishing website?",
      options: [
        "HTTPS",
        "Company Logo",
        "Misspelled Domain Name",
        "Contact Page",
      ],
      answer: 2,
      explanation: "Many phishing websites use slightly modified domain names.",
    },

    {
      question: "What is Two Factor Authentication?",
      options: [
        "Firewall",
        "Second verification step",
        "Strong Password",
        "Antivirus",
      ],
      answer: 1,
      explanation: "Two Factor Authentication adds another security layer.",
    },

    {
      question: "Which email address looks suspicious?",
      options: [
        "support@google.com",
        "security@microsoft.com",
        "google.verify.login@gmail.com",
        "help@amazon.in",
      ],
      answer: 2,
      explanation:
        "Official companies don't use free Gmail accounts for verification.",
    },

    {
      question: "Where should software be downloaded from?",
      options: [
        "Random websites",
        "Torrent sites",
        "Official website",
        "Unknown emails",
      ],
      answer: 2,
      explanation: "Always download software from official websites.",
    },

    {
      question: "Should you share your OTP?",
      options: ["Yes", "Only with friends", "Only with bank staff", "Never"],
      answer: 3,
      explanation: "Banks never ask for OTP.",
    },

    {
      question: "What is ransomware?",
      options: [
        "Browser",
        "Malware that locks files",
        "Operating System",
        "Firewall",
      ],
      answer: 1,
      explanation: "Ransomware encrypts files and demands money.",
    },

    {
      question: "Which is the safest online habit?",
      options: [
        "Reuse passwords",
        "Click every email link",
        "Enable Two Factor Authentication",
        "Share passwords",
      ],
      answer: 2,
      explanation: "Enable Two Factor Authentication and use unique passwords.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [finished, setFinished] = useState(false);

  function handleAnswer(index) {
    setSelected(index);

    const isCorrect = index === question.answer;

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    setStats((prev) => ({
      ...prev,

      

      quizCorrect: isCorrect ? prev.quizCorrect + 1 : prev.quizCorrect,

      xp: prev.xp + 15,
    }));

    setShowExplanation(true);
  }

  function nextQuestion() {

    if (current < questions.length - 1) {

        setCurrent((c) => c + 1);

        setSelected(null);

        setShowExplanation(false);

    }

    else {

        setStats(prev => ({

            ...prev,

            quizCompleted: questions.length

        }));

        setFinished(true);

    }

}

  function retryQuiz() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowExplanation(false);
    setFinished(false);
  }

  const question = questions[current];
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);

    let level = "";
    let color = "";

    if (percentage >= 90) {
      level = "Cyber Security Expert 🏆";
      color = "text-green-500";
    } else if (percentage >= 70) {
      level = "Advanced 🛡️";
      color = "text-green-400";
    } else if (percentage >= 50) {
      level = "Intermediate ⚠️";
      color = "text-yellow-400";
    } else {
      level = "Beginner 📘";
      color = "text-red-500";
    }

    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="bg-slate-800 w-full max-w-xl rounded-3xl shadow-2xl p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            🎉 Quiz Completed
          </h1>

          <div className="bg-slate-700 rounded-2xl p-6">
            <h2 className="text-xl text-gray-300">Your Score</h2>

            <h1 className="text-6xl font-bold text-cyan-400 mt-3">
              {score}/{questions.length}
            </h1>

            <h2 className="text-3xl font-bold mt-4 text-white">
              {percentage}%
            </h2>

            <h3 className="

              text-cyan-400

              text-2xl

              mt-4">

                  Correct Answers

              </h3>

              <h2 className="

              text-4xl

              font-bold

              text-white

              mt-2">

                  {stats.quizCorrect} / {questions.length}

              </h2>



            <h2 className={`text-2xl font-bold mt-4 ${color}`}>{level}</h2>

            <p className="text-gray-300 mt-5">
              {percentage >= 70
                ? "Excellent! You have good cyber security awareness."
                : "Keep learning and stay alert against cyber threats."}
            </p>

            {

            percentage >= 80

            ?

            <p className="

            mt-5

            text-green-400

            font-bold

            text-xl">

            ✅ Human Firewall Requirement Passed

            </p>

            :

            <p className="

            mt-5

            text-red-400

            font-bold

            text-xl">

            ❌ Minimum 80% required

            </p>

            }
          </div>

          <div className="flex justify-center gap-5 mt-8">
            <button
              onClick={retryQuiz}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-semibold"
            >
              🔄 Retry Quiz
            </button>

            <button
              onClick={() => navigate("/training-center")}
              className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl text-white font-semibold"
            >
              🏠 Training Center
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {" "}
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex justify-center items-center p-6">
        <div className="bg-slate-800 w-full max-w-3xl rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">
            Cyber Security Awareness Quiz
          </h1>

          <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="bg-cyan-400 h-4 transition-all duration-500"
              style={{
                width: `${((current + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>

          <p className="text-center text-gray-300 mt-3">
            Question {current + 1} of {questions.length}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {question.question}
            </h2>

            <div className="grid gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  disabled={showExplanation}
                  onClick={() => handleAnswer(index)}
                  className={`p-4 rounded-xl font-semibold transition duration-300

                ${
                  showExplanation && index === question.answer
                    ? "bg-green-600 text-white"
                    : selected === index
                      ? index === question.answer
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                      : "bg-slate-700 hover:bg-cyan-500 hover:text-black text-white"
                }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {showExplanation && (
            <div className="mt-8 bg-slate-700 rounded-2xl p-6 animate-pulse">
              <h3
                className={`text-2xl font-bold mb-3

        ${selected === question.answer ? "text-green-400" : "text-red-400"}`}
              >
                {selected === question.answer ? "✅ Correct!" : "❌ Wrong!"}
              </h3>

              <p className="text-gray-300 leading-7">{question.explanation}</p>

              <button
                onClick={nextQuestion}
                className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 transition text-black font-bold py-3 rounded-xl"
              >
                {current === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
