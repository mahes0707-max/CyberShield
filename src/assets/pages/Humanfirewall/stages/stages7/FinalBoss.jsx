import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CyberContext } from "../../../../../context/CyberContext";
import IncidentFeed from "./IncidentFeed";

import AnalystReport from "./AnalystReport";

export default function FinalBoss({ score, setScore, addLog }) {
  // Timer
  const [timer, setTimer] = useState(900);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  // Final result

  const [rank, setRank] = useState("");

  // User report
  const [report, setReport] = useState({
    initial: "",

    persistence: "",

    c2: "",

    mitre: "",

    response: "",
  });

  // Incident Logs
  const incidentLogs = [
    "[02:15] invoice_update.xlsm executed",

    "[02:16] powershell.exe started",

    "[02:17] HKCU\\Run modified",

    "[02:18] AdobeUpdater scheduled",

    "[02:18] DNS request paypaI-security.ru",

    "[02:19] External IP 185.12.76.43",

    "[02:20] Credential dumping detected",

    "[02:21] File encryption started",

    "[02:22] SMB lateral movement",

    "[02:23] Ransomware execution",
  ];

  const navigate = useNavigate();

  const { stats, setStats } = useContext(CyberContext);

  const [completed, setCompleted] = useState(false);

  // Countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(interval);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Submit report
  const submitReport = () => {
    let score = 0;

    if (report.initial === "invoice_update.xlsm") {
      score++;
    }

    if (report.persistence === "AdobeUpdater") {
      score++;
    }

    if (report.c2 === "185.12.76.43") {
      score++;
    }

    if (report.mitre === "T1486") {
      score++;
    }

    if (report.response === "Disconnect Network") {
      score++;
    }

    // Ranking
    if (score === 5 && timer > 60) {
      setRank("🏆 HUMAN FIREWALL ELITE");
    } else if (score >= 4) {
      setRank("🥇 CYBER GUARDIAN");
    } else if (score >= 3) {
      setRank("🥈 THREAT HUNTER");
    } else {
      setRank("🥉 SOC INTERN");
    }

    // Dashboard update
    setStats((prev) => ({
      ...prev,

      humanFirewallCompleted: 1,

      humanFirewallScore: score,

      overallProgress: (prev.overallProgress || 0) + 1,
    }));

    // Show congratulations page
    setCompleted(true);
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#000814]
        text-white
        p-3
        sm:p-4
        md:p-6
        lg:p-8"
    >
      
      {/* Header */}

      <div
        className="
                bg-gradient-to-r
                from-[#001233]
                to-[#001d3d]
                p-4
                md:p-6
                rounded-2xl
                flex
                flex-col
                lg:flex-row
                justify-between
                items-center
                gap-6
                shadow-xl"
      >
        <div>
          <h1
            className="
                        text-2xl
                        sm:text-3xl
                        md:text-4xl
                        lg:text-5xl
                        font-bold
                        text-red-500
                        text-center
                        lg:text-left"
          >
            ☠ OPERATION BLACKOUT
          </h1>

          <p
            className="
                    text-gray-400
                    mt-2
                    text-center"
          >
            FINAL SOC SIMULATION
          </p>
        </div>

        <div>
          <h1
            className="
                    text-4xl
                    text-yellow-400
                    font-bold"
          >
            ⏱{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
          </h1>
        </div>
      </div>

      {/* Main Grid */}

      {!completed && (
        <div
          className="
                    grid
                    grid-cols-1
                    2xl:grid-cols-2
                    gap-6
                    mt-8"
        >
          <IncidentFeed report={report} setReport={setReport} />

          <AnalystReport
            report={report}
            submitReport={submitReport}
            finished={completed}
          />
        </div>
      )}

      {completed && (
  <div className="min-h-screen bg-[#000814] flex items-center justify-center px-5 py-10">

    <div
      className="
      relative
      overflow-hidden
      bg-gradient-to-br
      from-[#001233]
      via-[#001d3d]
      to-[#000814]
      border
      border-cyan-500/40
      rounded-3xl
      max-w-4xl
      w-full
      p-8
      md:p-12
      shadow-[0_0_70px_rgba(0,229,255,.18)]
      text-center"
    >

      {/* Animated Glow */}

      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 blur-[120px] animate-pulse"></div>

      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 blur-[120px] animate-pulse"></div>

      {/* Badge */}

      <div className="relative">

        <div className="text-8xl animate-bounce">
          🛡️
        </div>

        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold text-green-400">

          MISSION ACCOMPLISHED

        </h1>

        <p className="mt-3 text-cyan-300 tracking-[4px] uppercase">

          Human Firewall Simulator Completed

        </p>

      </div>

      {/* Divider */}

      <div className="w-40 h-[2px] bg-cyan-500 mx-auto my-8"></div>

      {/* Appreciation */}

      <p className="text-lg md:text-xl text-gray-300 leading-8 max-w-3xl mx-auto">

        🎉 Congratulations!

        <br /><br />

        You successfully identified phishing attempts,
        investigated suspicious evidence,
        analyzed cyber threats,
        and completed the final Human Firewall mission.

        <br /><br />

        <span className="text-cyan-400 font-bold">

          You are now officially eligible to unlock your CyberShield Certificate.

        </span>

      </p>

      {/* Score Card */}

      <div className="mt-10 grid md:grid-cols-2 gap-6">

        <div className="bg-[#000814] rounded-2xl p-6 border border-cyan-500/20">

          <h3 className="text-cyan-400 text-lg">

            Investigation Rank

          </h3>

          <h1 className="mt-4 text-6xl font-extrabold text-white">

            {rank}

          </h1>

        </div>

        <div className="bg-[#000814] rounded-2xl p-6 border border-cyan-500/20">

          <h3 className="text-cyan-400 text-lg">

            Final Score

          </h3>

          <h1 className="mt-4 text-6xl font-extrabold text-green-400">

            {report.initial === "invoice_update.xlsm" ? "100%" : "80%"}

          </h1>

        </div>

      </div>

      {/* Achievement */}

      <div className="mt-10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">

        <h2 className="text-2xl text-cyan-300 font-bold">

          🏆 Achievement Unlocked

        </h2>

        <p className="mt-4 text-gray-300 leading-7">

          Human Firewall Certification has been unlocked.

          <br />

          Your cybersecurity awareness journey has reached its first milestone.

        </p>

      </div>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

        <button
          onClick={() => navigate("/training-center")}
          className="
          px-8
          py-4
          rounded-xl
          bg-green-600
          hover:bg-green-700
          transition
          hover:scale-105
          font-bold"
        >
          🏆 Download Certificate
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="
          px-8
          py-4
          rounded-xl
          bg-cyan-600
          hover:bg-cyan-700
          transition
          hover:scale-105
          font-bold"
        >
          📊 Dashboard
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
}
