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
        <div
          className="
                        min-h-[70vh]
                        flex
                        items-center
                        justify-center"
        >
          <div
            className="
                                bg-[#001233]
                                p-5
                                sm:p-8
                                md:p-10
                                rounded-3xl
                                max-w-3xl
                                w-full
                                mx-auto"
          >
            <h1
              className="
                                text-3xl
                                sm:text-4xl
                                md:text-5xl
                                lg:text-6xl
                                font-bold
                                text-green-400"
            >
              🎉 Congratulations
            </h1>

            <h2
              className="
                                text-3xl
                                mt-8
                                text-white"
            >
              Human Firewall Simulator Completed
            </h2>

            <p
              className="
                                mt-8
                                text-xl
                                text-gray-300"
            >
              You are now eligible for the
              <span
                className="
                                    text-cyan-400
                                    font-bold"
              >
                {" "}
                FINAL ASSESSMENT
              </span>
            </p>

            <div
              className="
                                mt-8
                                bg-[#000814]
                                p-6
                                rounded-xl"
            >
              <h2
                className="
                                    text-cyan-400"
              >
                Investigation Score
              </h2>

              <h1
                className="
                                            text-5xl
                                            mt-3"
              >
                {rank}
              </h1>
              <p
                className="
                                            mt-5
                                            text-2xl"
              >
                Score:
                {report.initial === "invoice_update.xlsm"}+ ...
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard")}
              className="
                                    mt-10
                                    w-full
                                    sm:w-auto
                                    bg-cyan-600
                                    hover:bg-cyan-700
                                    px-8
                                    py-4
                                    rounded-xl
                                    font-bold
                                    transition
                                    hover:scale-105"
            >
              📊 Back To Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
