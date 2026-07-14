import React, { useState } from "react";
import Stage1_EmailAttack from "./stages/Stage1_EmailAttack";
import Stage2_VoiceAttack from "./stages/Stage2_VoiceAttack";
import Stage3_BrowserInvestigation from "./stages/Stage3_BrowserInvestigation";
import Stage4_MalwareIncident from "./stages/Stage4_MalwareIncident";
import Stage5_DigitalForensics from "./stages/Stage5_DigitalForensics";
import Stage6_ThreatHunting from "./stages/Stage6_ThreatHunting";
import FinalBoss from "./stages/stages7/FinalBoss";

export default function HumanFirewallHome() {
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(100);
  const [logs, setLogs] = useState([]);

  const addLog = (message) => {
    setLogs((prev) => [...prev, message]);
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
      {!started ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-[#001d3d] p-10 rounded-3xl text-center max-w-3xl">
            <h1 className="text-6xl font-bold text-cyan-400">
              🛡 Human Firewall Simulator
            </h1>
            <p className="mt-8 text-xl text-gray-300">
              Welcome Security Analyst. Today your mission is to protect your
              company from cyber attacks.
            </p>
            <div className="mt-10 bg-[#001233] p-6 rounded-xl">
              <h2 className="text-2xl font-bold">Mission Difficulty</h2>
              <p className="text-red-400 text-xl mt-3 font-bold">Expert Level</p>
            </div>
            <button
              onClick={() => setStarted(true)}
              className="mt-10 bg-cyan-600 hover:bg-cyan-700 px-10 py-5 rounded-xl text-xl font-bold"
            >
              🚀 Start Mission
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center p-5 gap-8">
          {logs.length > 0 && (
            <div className="w-full max-w-3xl bg-[#001233] p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-5">📜 Event Timeline</h2>
              {logs.map((item, index) => (
                <div key={index} className="bg-[#002855] p-3 rounded-lg mb-3">
                  {item}
                </div>
              ))}
            </div>
          )}

          {stage === 1 && (
            <Stage1_EmailAttack
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}

          {stage === 2 && (
            <Stage2_VoiceAttack
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}

          {stage === 3 && (
            <Stage3_BrowserInvestigation
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}

          {stage === 4 && (
            <Stage4_MalwareIncident
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}

          {stage === 5 && (
            <Stage5_DigitalForensics
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}
          {stage === 6 && (
            <Stage6_ThreatHunting
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}
          {stage === 7 && (
            <FinalBoss
              setStage={setStage}
              score={score}
              setScore={setScore}
              addLog={addLog}
            />
          )}
        </div>
      )}
    </div>
  );
}
