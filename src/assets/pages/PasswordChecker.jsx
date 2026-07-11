import { useState, useEffect, useContext } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

import { CyberContext } from "../../context/CyberContext";

export default function PasswordChecker() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {stats, setStats } = useContext(CyberContext);
  const [confirmed, setConfirmed] = useState(false);

  const rules = {
    length: password.length >= 15,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };

  const score = Object.values(rules).filter(Boolean).length;

  const confirmPassword = () => {
    if (score !== 5) {
      alert("Please create a strong password first.");
      return;
    }

    setStats((prev) => ({
      ...prev,

      passwordChecks: prev.passwordChecks + 1,

      passwordScore: 100,
      passwordCompleted: 1,

      xp: prev.xp + 50,
    }));
    setConfirmed(true);
  };

  const getStrength = () => {
    switch (score) {
      case 0:
        return {
          text: "Very Weak",
          width: "5%",
          color: "#ef4444",
          time: "Instantly",
        };

      case 1:
        return {
          text: "Weak",
          width: "20%",
          color: "#f97316",
          time: "Few Seconds",
        };

      case 2:
        return {
          text: "Fair",
          width: "40%",
          color: "#eab308",
          time: "Few Minutes",
        };

      case 3:
        return {
          text: "Good",
          width: "60%",
          color: "#84cc16",
          time: "Several Days",
        };

      case 4:
        return {
          text: "Strong",
          width: "80%",
          color: "#22c55e",
          time: "Hundreds of Years",
        };

      case 5:
        return {
          text: "Very Strong 🔥",
          width: "100%",
          color: "#16a34a",
          time:
            password.length > 20
              ? "Practically Impossible"
              : "Billions of Years",
        };

      default:
        return {
          text: "",
          width: "0%",
          color: "#fff",
          time: "",
        };
    }
  };

  const data = getStrength();
  const copyPassword = async () => {
    if (!password) {
      alert("Please enter a password first!");
      return;
    }

    try {
      await navigator.clipboard.writeText(password);
      alert("✅ Password copied successfully!");
    } catch (err) {
      alert("Failed to copy password.");
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-20 bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">
          {" "}
          Password Strength Checker
        </h1>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter a Strong Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 bg-slate-700 border border-slate-600 rounded-xl px-4 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈 Hide" : "👁 Show"}
          </button>

          <button
            className="bg-emerald-600 hover:bg-emerald-700 px-5 py-3 rounded-xl font-semibold transition"
            onClick={copyPassword}
          >
            📋 Copy
          </button>
        </div>

        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: data.width,
              background: data.color,
            }}
          />
        </div>

        <h2
          className="text-center text-2xl font-bold mt-5"
          style={{ color: data.color }}
        >
          {data.text}
        </h2>

        <ul className="mt-8 space-y-3">
          <li
            className={`transition-all ${
              rules.length
                ? "text-green-400 font-semibold translate-x-2"
                : "text-gray-400"
            }`}
          >
            ✔ Minimum 15 Characters
          </li>

          <li
            className={`transition-all ${
              rules.upper
                ? "text-green-400 font-semibold translate-x-2"
                : "text-gray-400"
            }`}
          >
            ✔ At least One Uppercase Letter
          </li>

          <li
            className={`transition-all ${
              rules.lower
                ? "text-green-400 font-semibold translate-x-2"
                : "text-gray-400"
            }`}
          >
            ✔ At least One Lowercase Letter
          </li>

          <li
            className={`transition-all ${
              rules.number
                ? "text-green-400 font-semibold translate-x-2"
                : "text-gray-400"
            }`}
          >
            ✔ At least One Number
          </li>

          <li
            className={`transition-all ${
              rules.symbol
                ? "text-green-400 font-semibold translate-x-2"
                : "text-gray-400"
            }`}
          >
            ✔ At least One Special Symbol
          </li>
        </ul>

        <div className="mt-8 bg-slate-900 rounded-2xl p-5 text-center border border-slate-700 text-white">
          <h3>Estimated Crack Time</h3>
          <p>{data.time}</p>
        </div>

        {score === 5 && (
          <div className="mt-8 flex flex-col items-center gap-5">
            {!confirmed ? (
              <button
                onClick={confirmPassword}
                className="
        bg-cyan-600
        hover:bg-cyan-700
        px-8
        py-4
        rounded-xl
        font-bold
        transition
        duration-300
        hover:scale-105"
              >
                ✅ Confirm Password Security
              </button>
            ) : (
              <>
                <div
                  className="
          bg-green-800
          text-white
          p-4
          rounded-xl
          font-bold
          text-center"
                >
                  ✔ Password Security Training Completed
                </div>
                <p className="mt-3 text-blue-300 font-bold">

                      Password Score:

                      {stats.passwordScore}%

                  </p>
                <p className="mt-3 text-green-300">
                    Human Firewall Requirement Passed
                    </p>
                <button
                  className="
          bg-cyan-600
          hover:bg-cyan-700
          px-8
          py-4
          rounded-full
          font-bold
          transition
          duration-300
          hover:scale-105"
                  onClick={() => navigate("/training-center")}
                >
                  🏠 Go To Training Center
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
