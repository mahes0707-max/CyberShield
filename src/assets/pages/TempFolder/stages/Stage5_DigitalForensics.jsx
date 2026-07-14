import React, { useState } from "react";

export default function Stage5_DigitalForensics({
  setStage,
  score,
  setScore,
  addLog,
}) {
  const [selected, setSelected] = useState("");

  const investigate = () => {
    if (selected === "08:22") {
      addLog("✅ Patient Zero identified.");

      addLog("🛡 Root cause analysis completed.");

      addLog("📄 Forensic report generated.");

      setScore((prev) => prev + 50);

      alert("FORENSIC INVESTIGATION SUCCESSFUL");

      setStage(6);

      return;
    }

    addLog("❌ Incorrect forensic conclusion.");

    addLog("💀 Root cause remains unknown.");

    setScore((prev) => prev - 20);

    alert("FORENSIC ANALYSIS FAILED PLEASE SELECT CORRECT ACTION");
  };

  return (
    <div
      className="
        bg-[#001d3d]
        p-8
        rounded-2xl
        shadow-2xl"
    >
      {/* Header */}

      <h1
        className="
            text-4xl
            font-bold
            text-cyan-400"
      >
        🔎 Mission 5
      </h1>

      <h2
        className="
            text-2xl
            mt-4"
      >
        Digital Forensics Investigation
      </h2>

      <p
        className="
            text-gray-300
            mt-4"
      >
        Analyze the attack timeline and identify Patient Zero.
      </p>

      {/* Timeline */}

      <div
        className="
            mt-8
            bg-black
            p-8
            rounded-xl
            font-mono"
      >
        <div
          className="
                mb-4
                p-3
                bg-gray-900
                rounded"
        >
          08:21 - Employee opened email
        </div>

        <div
          className="
                mb-4
                p-3
                bg-gray-900
                rounded"
        >
          08:22 - Macro executed
        </div>

        <div
          className="
                mb-4
                p-3
                bg-gray-900
                rounded"
        >
          08:23 - PowerShell launched
        </div>

        <div
          className="
                mb-4
                p-3
                bg-gray-900
                rounded"
        >
          08:24 - C2 connection established
        </div>

        <div
          className="
                mb-4
                p-3
                bg-gray-900
                rounded"
        >
          08:26 - Credentials dumped
        </div>

        <div
          className="
                mb-4
                p-3
                bg-gray-900
                rounded"
        >
          08:27 - Ransomware executed
        </div>
      </div>

      {/* Investigation */}

      <div
        className="
            mt-10"
      >
        <h2
          className="
                text-2xl
                font-bold
                mb-5"
        >
          Select Patient Zero
        </h2>

        <div
          className="
                grid
                md:grid-cols-2
                gap-5"
        >
          <button
            onClick={() => setSelected("08:21")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selected === "08:21" ? "bg-[#9e2383]" : "bg-[#002855]"
                        }`}
          >
            08:21 Email Opened
          </button>

          <button
            onClick={() => setSelected("08:22")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selected === "08:22" ? "bg-[#9e2383]" : "bg-[#002855]"
                        }`}
          >
            08:22 Macro Executed
          </button>

          <button
            onClick={() => setSelected("08:23")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selected === "08:23" ? "bg-[#9e2383]" : "bg-[#002855]"
                        }`}
          >
            08:23 PowerShell
          </button>

          <button
            onClick={() => setSelected("08:24")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selected === "08:24" ? "bg-[#9e2383]" : "bg-[#002855]"
                        }`}
          >
            08:24 C2 Server
          </button>
        </div>
      </div>

      {/* Submit */}

      <button
        onClick={investigate}
        className="
                mt-8
                bg-cyan-600
                hover:bg-cyan-700
                px-8
                py-4
                rounded-xl
                font-bold"
      >
        🔍 Investigate
      </button>

      {/* Hint */}

      <div
        className="
            mt-8
            bg-[#001233]
            p-6
            rounded-xl"
      >
        <h2
          className="
                text-cyan-400
                text-xl"
        >
          Analyst Hint
        </h2>

        <p
          className="
                mt-3
                text-gray-300"
        >
          Patient Zero is the first malicious event that started the attack
          chain.
        </p>
      </div>

      {/* Score */}

      <div
        className="
            mt-8
            bg-[#002855]
            p-5
            rounded-xl"
      >
        <h3
          className="
                text-cyan-400"
        >
          Security Score
        </h3>

        <h1
          className="
                text-5xl
                font-bold"
        >
          {score}
        </h1>
      </div>
    </div>
  );
}
