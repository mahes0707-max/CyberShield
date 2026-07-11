import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import whatsapp from "../images/whatsapp.png";
import twitter from "../images/twitter.png";
import { useContext } from "react";
import { CyberContext } from "../../context/CyberContext";
const QUIZ_DATA = [
  {
    id: 1,
    scenario:
      "Scenario 1: You receive a notification saying your Instagram account will be suspended unless you verify your identity by logging in through the link below.",
    url: "https://instagram.verify-login.net",
    image: insta,
    brandName: "Instagram Login",
    brandColor: "#3b5998",
    isReal: false,
    explanation:
      "Fake. This website is not the official Instagram login page because the main domain is verify login net instead of instagram com. Attackers use trusted names like Instagram along with words such as verify and login to trick users into entering their account details. Always check the main website address carefully before logging in and make sure it belongs to the official company.",
  },
  {
    id: 2,
    scenario:
      "Scenario 2: You want to log in to your Facebook account to check your messages. You open the official Facebook website by typing the address directly into your browser.",
    url: "https://www.facebook.com/login/",
    image: facebook,
    brandName: "Facebook",
    brandColor: "#1d9bf0",
    isReal: true,
    explanation:
      "Real. This is the official Facebook login page because it uses the trusted facebook com domain. The website uses a secure HTTPS connection and the domain name exactly matches the official Facebook website. Always verify the main domain before entering your login credentials.",
  },
  {
    id: 3,
    scenario:
      "Scenario 3: You receive a message from an unknown number inviting you to join a popular scholarship and job updates WhatsApp group. The message says the group is almost full and asks you to click the link immediately to secure your spot.",
    url: "https://chat.whatsapp-secure.net/group",
    image: whatsapp,
    brandName: "Workspace Storage Hub",
    brandColor: "#2c3e50",
    isReal: false,
    explanation:
      "Fake. This is not an official WhatsApp link because the main domain is whatsapp group invite net instead of whatsapp com or chat whatsapp com. Attackers often create fake group invitation pages to steal personal information or trick users into downloading malicious software. Always verify that WhatsApp links use the official WhatsApp domain before clicking or joining any group.",
  },
  {
    id: 4,
    scenario:
      " Scenario 4: You receive an email claiming that your Twitter account has violated community guidelines and will be suspended within 24 hours. The email asks you to log in immediately using the link below to verify your account.",
    url: "https://twitter-support-login.net",
    image: twitter,
    brandName: "ExampleNetwork",
    brandColor: "#0a66c2",
    isReal: false,
    explanation:
      "Fake. This website is not the official Twitter login page because the main domain is twitter account verify net instead of x com or twitter com. Attackers often use words like verify account login or secure to make fake websites look legitimate. Always check the main domain carefully before entering your username or password.",
  },
];

export default function PhishingQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const navigate = useNavigate();
  const { stats, setStats } = useContext(CyberContext);
  const currentQuestion = QUIZ_DATA[currentIndex];

  const handleAnswer = (userChoice) => {
    if (isAnswered) return;

    setSelectedAnswer(userChoice);
    setIsAnswered(true);

    setStats((prev) => ({
      ...prev,

      

      urlCorrect:
        userChoice === currentQuestion.isReal
          ? prev.urlCorrect + 1
          : prev.urlCorrect,

      xp: userChoice === currentQuestion.isReal ? prev.xp + 10 : prev.xp,
    }));
  };

  const handleNext = () => {

    if(currentIndex + 1 < QUIZ_DATA.length){

        setCurrentIndex(prev => prev + 1);

        setSelectedAnswer(null);

        setIsAnswered(false);

    }

    else{

        setStats(prev => ({

            ...prev,

            urlCompleted: QUIZ_DATA.length

        }));

        setQuizComplete(true);

    }

};

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen bg-[#000814] flex justify-center items-center px-5">
          <div className="max-w-2xl w-full bg-[#001d3d] rounded-3xl p-10 border border-slate-700 shadow-2xl text-center">
            <div className="text-7xl mb-5">🎉</div>

            <h1 className="text-4xl font-bold text-white">
              Training Completed
            </h1>

            <p className="text-gray-400 mt-5 leading-8">
              Excellent work!
              <br />
              <p className="

              mt-6

              text-2xl

              text-cyan-400">

                  Score:

                  {stats.urlCorrect} / {QUIZ_DATA.length}

              </p>

              <p className="

              mt-3

              text-xl">

                  Percentage:

                  {

                  Math.round(

                      (stats.urlCorrect /

                      QUIZ_DATA.length)

                      *100

                  )

                  }%

              </p>
              {

              Math.round(

              (stats.urlCorrect /

              QUIZ_DATA.length)

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
              You have successfully completed the Cyber Shield Phishing URL
              Awareness Training.
            </p>

            <div className="mt-10 bg-slate-800 rounded-2xl p-6">
              <h2 className="text-cyan-400 text-2xl font-semibold">Remember</h2>

              <ul className="mt-5 space-y-3 text-left text-gray-300">
                <li>✔ Always check the domain name carefully.</li>

                <li>✔ Avoid clicking unknown links.</li>

                <li>✔ Verify HTTPS and official domains.</li>

                <li>✔ Never enter credentials on suspicious websites.</li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row gap-5 justify-center mt-10">
              <button
                onClick={handleRestart}
                className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
              >
                🔄 Restart Training
              </button>

              <button
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105"
                onClick={() =>navigate("/training-center")}
              >
                🏠 Back To Training Center
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.isReal;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#000814] flex justify-center items-start py-16 px-5">
        <div className="w-full max-w-4xl bg-[#001d3d] rounded-3xl shadow-2xl border border-slate-700 p-8">
          <h1 className="text-4xl font-bold text-center text-white">
            Phishing Awareness Quiz
          </h1>

          <p className="text-center text-gray-400 mt-3">
            Can you identify whether the following website is genuine or a
            phishing attempt?
          </p>

          {/* Progress */}

          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>
                Question {currentIndex + 1} / {QUIZ_DATA.length}
              </span>

              <span>Cyber Shield Training</span>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-3">
              <div
                className="bg-cyan-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / QUIZ_DATA.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Scenario */}

          <div className="mt-10 bg-slate-800 border-l-4 border-cyan-400 rounded-xl p-6">
            <h2 className="text-cyan-400 font-semibold mb-3">Scenario</h2>

            <p className="text-gray-300 leading-7">
              {currentQuestion.scenario}
            </p>
          </div>

          {/* Browser */}

          <div className="mt-8 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
            {/* Browser Header */}

            <div className="bg-slate-800 p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>

              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>

              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <div className="flex-1 bg-slate-900 rounded-lg px-4 py-2 text-sm text-gray-300 font-mono overflow-auto whitespace-nowrap">
                🔒 {currentQuestion.url}
              </div>
            </div>

            {/* Website Preview */}

            <div className="bg-white">
              <img
                src={currentQuestion.image}
                alt={currentQuestion.brandName}
                className="w-full h-72 object-contain bg-white"
              />

              <div
                className="text-center text-white text-2xl font-bold py-10"
                style={{
                  backgroundColor: currentQuestion.brandColor,
                }}
              >
                {currentQuestion.brandName}
              </div>
            </div>
          </div>

          {/* Buttons */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <button
              onClick={() => handleAnswer(true)}
              disabled={isAnswered}
              className="bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
            >
              ✅ Legitimate Website
            </button>

            <button
              onClick={() => handleAnswer(false)}
              disabled={isAnswered}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
            >
              🚨 Phishing Website
            </button>
          </div>

          {isAnswered && (
            <div
              className={`mt-8 rounded-2xl border p-6 ${
                isCorrect
                  ? "bg-green-900/40 border-green-500"
                  : "bg-red-900/40 border-red-500"
              }`}
            >
              <h2
                className={`text-2xl font-bold ${
                  isCorrect ? "text-green-400" : "text-red-400"
                }`}
              >
                {isCorrect
                  ? "✅ Great Job! Correct Answer"
                  : "❌ Incorrect Answer"}
              </h2>

              <div className="mt-5">
                <span className="text-gray-300 font-semibold">
                  Correct Classification :
                </span>

                <span
                  className={`ml-2 font-bold ${
                    currentQuestion.isReal ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {currentQuestion.isReal
                    ? "Legitimate Website"
                    : "Phishing Website"}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-cyan-400 text-lg font-semibold mb-3">
                  Why?
                </h3>

                <p className="text-gray-300 leading-8">
                  {currentQuestion.explanation}
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleNext}
                  className="bg-cyan-600 hover:bg-cyan-700 px-8 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105"
                >
                  {currentIndex + 1 === QUIZ_DATA.length
                    ? "🏁 Finish Training"
                    : "➡ Next Question"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
