import React, { useState } from "react";

export default function Stage6_ThreatHunting({
  setStage,
  score,
  setScore,
  addLog,
}) {
  const [selectedIP, setSelectedIP] = useState("");

  const huntThreat = () => {
    // Correct attacker server
    if (selectedIP === "185.12.76.43") {
      addLog("✅ Threat actor infrastructure identified.");

      addLog("🛡 Command & Control server blocked.");

      addLog("🚨 Threat hunting successful.");

      setScore((prev) => prev + 60);

      alert("THREAT HUNT SUCCESSFUL");

      setStage(7);

      return;
    }

    addLog("❌ Wrong threat attribution.");

    addLog("💀 Attacker remained active.");

    setScore((prev) => prev - 25);

    alert("THREAT HUNT FAILED PLEASE SELECT CORRECT IP");
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
            text-purple-400"
      >
        🕵 Mission 6
      </h1>

      <h2
        className="
            text-2xl
            mt-4"
      >
        Threat Hunting Operation
      </h2>

      <p
        className="
            text-gray-300
            mt-4"
      >
        Analyze network telemetry and identify the attacker's Command & Control
        server.
      </p>

      {/* Network Logs */}

      <div
        className="
            mt-8
            bg-black
            p-6
            rounded-xl
            font-mono
            space-y-3"
      >
        <div className="bg-gray-900 p-3 rounded">
          192.168.1.15 → 8.8.8.8 : DNS Query
        </div>

        <div className="bg-gray-900 p-3 rounded">
          192.168.1.15 → 172.217.160.78 : Google
        </div>

        <div className="bg-gray-900 p-3 rounded">
          192.168.1.15 → 185.12.76.43 : Unknown Traffic
        </div>

        <div className="bg-gray-900 p-3 rounded">
          192.168.1.20 → 104.26.5.2 : Cloudflare
        </div>

        <div className="bg-gray-900 p-3 rounded">
          192.168.1.22 → 151.101.1.140 : GitHub
        </div>
      </div>

      {/* Choices */}

      <div className="mt-10">
        <h2
          className="
                text-2xl
                font-bold
                mb-5"
        >
          Select the malicious IP
        </h2>

        <div
          className="
                grid
                md:grid-cols-2
                gap-5"
        >
          <button
            onClick={() => setSelectedIP("8.8.8.8")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selectedIP === "8.8.8.8"
                            ? "bg-[#9e2383]"
                            : "bg-[#002855]"
                        }`}
          >
            8.8.8.8
          </button>

          <button
            onClick={() => setSelectedIP("172.217.160.78")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selectedIP === "172.217.160.78"
                            ? "bg-[#9e2383]"
                            : "bg-[#002855]"
                        }`}
          >
            172.217.160.78
          </button>

          <button
            onClick={() => setSelectedIP("185.12.76.43")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selectedIP === "185.12.76.43"
                            ? "bg-[#9e2383]"
                            : "bg-[#002855]"
                        }`}
          >
            185.12.76.43
          </button>

          <button
            onClick={() => setSelectedIP("151.101.1.140")}
            className={`
                        p-5
                        rounded-xl
                        ${
                          selectedIP === "151.101.1.140"
                            ? "bg-[#9e2383]"
                            : "bg-[#002855]"
                        }`}
          >
            151.101.1.140
          </button>
        </div>
      </div>

      {/* Submit */}

      <button
        onClick={huntThreat}
        className="
                mt-8
                bg-purple-600
                hover:bg-purple-700
                px-8
                py-4
                rounded-xl
                font-bold"
      >
        🕵 Hunt Threat
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
                text-purple-400
                text-xl"
        >
          Threat Hunter Hint
        </h2>

        <p
          className="
                mt-3
                text-gray-300"
        >
          Look for unusual external communication patterns and suspicious
          infrastructure.
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
