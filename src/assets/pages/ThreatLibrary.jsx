import React, { useState } from "react";
import Navbar from "../../components/navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CyberContext } from "../../context/CyberContext";

const threats = [
  // Human Attacks
  {
    id: 1,
    name: "Phishing",
    icon: "🎣",
    severity: "High",

    attackType: "Human Attack",

    difficulty: "Beginner",

    realWorldExample: "Google Docs Phishing Attack (2017)",

    impact: "Credential theft, financial loss, identity theft",

    description:
      "Attackers trick users into revealing sensitive information through fake emails, websites, or messages.",

    symptoms: [
      "Urgent messages",
      "Suspicious links",
      "Unknown sender",
      "Fake login pages",
    ],

    prevention: [
      "Verify sender",
      "Check URL",
      "Enable MFA",
      "Avoid unknown links",
    ],
  },

  {
    id: 2,
    name: "Ransomware",
    icon: "🔒",
    severity: "Critical",

    attackType: "Software Attack",

    difficulty: "Intermediate",

    realWorldExample: "WannaCry Ransomware (2017)",

    impact: "File encryption, business disruption, financial loss",

    description: "Ransomware encrypts victim files and demands payment.",

    symptoms: ["Locked files", "Ransom note", "Encryption", "Access denied"],

    prevention: [
      "Backup files",
      "Update OS",
      "Use antivirus",
      "Avoid unknown attachments",
    ],
  },

  // Malware
  {
    id: 3,
    name: "Malware",
    icon: "🦠",
    severity: "Critical",

    attackType: "Software Attack",

    difficulty: "Beginner",

    realWorldExample: "Emotet Malware",

    impact: "Data theft, system damage",

    description: "Malicious software designed to damage or steal data.",

    symptoms: ["Slow PC", "Popups", "Unknown apps", "High CPU"],

    prevention: ["Antivirus", "Software updates", "Firewall", "Safe downloads"],
  },

  {
    id: 4,
    name: "Trojan Horse",
    icon: "🐴",
    severity: "High",

    attackType: "Software Attack",

    difficulty: "Intermediate",

    realWorldExample: "Zeus Trojan",

    impact: "Credential theft, remote access",

    description: "Malware disguised as legitimate software.",

    symptoms: ["Unknown apps", "Slow PC", "Network traffic", "Crashes"],

    prevention: [
      "Trusted downloads",
      "Antivirus",
      "Avoid cracks",
      "Regular updates",
    ],
  },

  {
    id: 5,
    name: "Spyware",
    icon: "👁",
    severity: "Medium",

    attackType: "Software Attack",

    difficulty: "Beginner",

    realWorldExample: "Pegasus Spyware",

    impact: "Privacy loss, credential theft",

    description: "Software that secretly monitors users.",

    symptoms: ["Slow browser", "Ads", "Redirects", "Data theft"],

    prevention: ["Antivirus", "Firewall", "Browser protection", "Updates"],
  },

  {
    id: 6,
    name: "DDoS Attack",
    icon: "🌐",
    severity: "High",

    attackType: "Network Attack",

    difficulty: "Advanced",

    realWorldExample: "Mirai Botnet Attack",

    impact: "Website downtime, service disruption",

    description: "Attackers overwhelm servers with traffic.",

    symptoms: [
      "Website unavailable",
      "Slow response",
      "High traffic",
      "Timeouts",
    ],

    prevention: [
      "Cloud protection",
      "Firewall",
      "Traffic monitoring",
      "Rate limiting",
    ],
  },

  // Network
  {
    id: 7,
    name: "SQL Injection",
    icon: "💉",
    severity: "Critical",

    attackType: "Web Attack",

    difficulty: "Advanced",

    realWorldExample: "Sony Pictures Breach",

    impact: "Database compromise",

    description: "Attackers inject malicious SQL commands.",

    symptoms: ["Database leaks", "Unauthorized access", "Website errors"],

    prevention: [
      "Parameterized queries",
      "Input validation",
      "WAF",
      "Least privilege",
    ],
  },

  {
    id: 8,
    name: "Cross Site Scripting",
    icon: "⚡",
    severity: "High",

    attackType: "Web Attack",

    difficulty: "Intermediate",

    realWorldExample: "MySpace XSS Worm",

    impact: "Session hijacking, credential theft",

    description: "Malicious scripts injected into websites.",

    symptoms: ["Redirects", "Session theft", "Popup alerts"],

    prevention: [
      "Escape output",
      "CSP",
      "Input validation",
      "Framework updates",
    ],
  },

  // Web Attacks
  {
    id: 9,
    name: "Man in the Middle",
    icon: "🕵️",
    severity: "Critical",

    attackType: "Network Attack",

    difficulty: "Advanced",

    realWorldExample: "Public WiFi Attacks",

    impact: "Data interception",

    description: "Attackers intercept communications.",

    symptoms: ["Certificate warnings", "Slow internet", "Unexpected logouts"],

    prevention: ["HTTPS", "VPN", "MFA", "Avoid public WiFi"],
  },

  {
    id: 10,
    name: "Social Engineering",
    icon: "👥",
    severity: "High",

    attackType: "Human Attack",

    difficulty: "Beginner",

    realWorldExample: "Twitter Bitcoin Scam (2020)",

    impact: "Credential theft, financial fraud",

    description: "Psychological manipulation attacks.",

    symptoms: [
      "Urgency",
      "Fear tactics",
      "Fake authority",
      "Unexpected requests",
    ],

    prevention: [
      "Verify identity",
      "Security training",
      "Never share credentials",
    ],
  },

  // Advanced
  {
    id: 11,
    name: "Zero-Day Attack",
    icon: "💀",
    severity: "Critical",

    attackType: "Software Attack",

    difficulty: "Expert",

    realWorldExample: "Stuxnet",

    impact: "Complete system compromise",

    description: "Attack exploiting unknown vulnerabilities.",

    symptoms: ["Unexpected crashes", "Unknown activity", "Data leaks"],

    prevention: ["EDR", "Rapid patching", "Monitoring", "Zero trust"],
  },
];
export default function ThreatLibrary() {
  const [selected, setSelected] = useState(threats[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const {stats, setStats } = useContext(CyberContext);
  const [completed, setCompleted] = useState(false);

  const finishThreatLibrary = () => {
    setStats((prev) => ({
      ...prev,

      threatsViewed: 1,
      threatCompleted: true,
      xp: prev.xp + 50,
    }));

    setCompleted(true);
  };

  if (completed) {
    return (
      <>
        <Navbar />

        <div
          className="
            min-h-screen
            bg-[#000814]
            flex
            justify-center
            items-center
            p-5"
        >
          <div
            className="
                max-w-3xl
                bg-[#001d3d]
                p-10
                rounded-3xl
                text-center
                shadow-2xl"
          >
            <div className="text-8xl">🎉</div>

            <h1
              className="
                    text-5xl
                    font-bold
                    text-green-400
                    mt-6"
            >
              Congratulations!
            </h1>

            <p
              className="
                    text-gray-300
                    mt-6
                    text-xl"
            >
              You have successfully completed the Cyber Threat Library.
            </p>

            <div
              className="
                    mt-8
                    bg-[#001233]
                    p-6
                    rounded-2xl"
            >
              <h2
                className="
                        text-3xl
                        text-cyan-400"
              >
                🛡️ You are now a Cyber Aware User!
              </h2>

              <p
                className="
                        text-gray-300
                        mt-5"
              >
                ✔ Learned Phishing Attacks
                <br />
                ✔ Learned Malware
                <br />
                ✔ Learned Ransomware
                <br />
                ✔ Learned Trojans
                <br />✔ Learned Zero-Day Attacks
              </p>

              <p className="

                  mt-6

                  text-green-400

                  font-bold

                  text-xl">

                      ✅ Human Firewall Requirement Passed

                  </p>
            </div>

            <div
              className="
                    mt-8
                    bg-yellow-700
                    p-4
                    rounded-xl"
            >
              ⭐ +50 XP Awarded
            </div>

            <button
              onClick={() => navigate("/training-center")}
              className="
                        mt-8
                        bg-cyan-600
                        hover:bg-cyan-700
                        px-8
                        py-4
                        rounded-xl
                        font-bold"
            >
              Back to Training Center
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#000814] text-white flex">
        {/* Desktop Sidebar */}

        <div className="hidden md:flex w-80 bg-[#001233] border-r border-slate-700 flex-col">
          <div className="p-5">
            <h1 className="text-2xl font-bold">Threat Library</h1>

            {/* <input
              placeholder="Search threats..."
              className="w-full mt-5 bg-[#001d3d] p-3 rounded-lg"
            /> */}
          </div>

          <div className="overflow-y-auto">
            {threats.map((threat) => (
              <div
                key={threat.id}
                onClick={() => setSelected(threat)}
                className={`cursor-pointer p-5 border-b border-slate-700 hover:bg-[#002855]
                ${selected.id === threat.id ? "bg-[#002855]" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{threat.icon}</span>

                  <div>
                    <h2 className="font-bold">{threat.name}</h2>

                    <p className="text-gray-400 text-sm">{threat.severity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}

        <button
          className="md:hidden relative h-10 w-10 top-8 left-18 z-50 bg-cyan-600 p-3 rounded-lg"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMenuOpen(false)}
            />

            <div className="relative w-72 h-screen bg-[#001233] overflow-y-auto">
              <button
                className="text-3xl p-5"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              {threats.map((threat) => (
                <div
                  key={threat.id}
                  onClick={() => {
                    setSelected(threat);
                    setMenuOpen(false);
                  }}
                  className="p-5 border-b border-slate-700"
                >
                  <div className="flex gap-4">
                    <span className="text-2xl">{threat.icon}</span>

                    <div>
                      <h2>{threat.name}</h2>

                      <p className="text-sm text-gray-400">{threat.severity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}

        <div className="flex-1 p-6 md:p-10">
          <div className="bg-[#001d3d] rounded-2xl p-8">
            <div className="flex items-center gap-5">
              <div className="text-7xl">{selected.icon}</div>

              <div>
                <h1 className="text-4xl font-bold mb-2">{selected.name}</h1>

                <span className="bg-red-600 px-3 py-1 rounded-full text-sm ">
                  {selected.severity}
                </span>
              </div>
            </div>

            <p className="mt-8 text-lg text-gray-300 leading-8 mb-3">
              {selected.description}
            </p>

            <div className="space-y-5">
              <div>
                <h3 className="text-[#3affeb] font-bold text-lg">
                  Attack Type :
                </h3>
                <p>{selected.attackType}</p>
              </div>

              <div>
                <h3 className="text-cyan-400">Severity</h3>
                <p>{selected.severity}</p>
              </div>

              <div>
                <h3 className="text-cyan-400">Difficulty</h3>
                <p>{selected.difficulty}</p>
              </div>

              <div>
                <h3 className="text-cyan-400">Real World Example</h3>
                <p>{selected.realWorldExample}</p>
              </div>

              <div>
                <h3 className="text-cyan-400">Impact</h3>
                <p>{selected.impact}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
              <div>
                <h2 className="text-2xl text-cyan-400 font-bold mb-5">
                  Symptoms
                </h2>

                {selected.symptoms.map((item, index) => (
                  <p key={index} className="mb-3">
                    ⚠ {item}
                  </p>
                ))}
              </div>

              <div>
                <h2 className="text-2xl text-green-400 font-bold mb-5">
                  Prevention
                </h2>

                {selected.prevention.map((item, index) => (
                  <p key={index} className="mb-3">
                    ✓ {item}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="
                  flex
                  justify-center
                  gap-5
                  mt-10
                  flex-wrap"
            >
              {!completed && selected.name === "Zero-Day Attack" && (
                <button
                  onClick={finishThreatLibrary}
                  className="
                          bg-green-600
                          hover:bg-green-700
                          px-8
                          py-3
                          rounded-xl
                          font-bold
                          transition
                          hover:scale-105"
                >
                  🏁 Finish Training
                </button>
              )}

              {completed && (
                <>
                  <div
                    className="
                              bg-green-800
                              text-white
                              p-4
                              rounded-xl
                              font-bold"
                  >
                    🎉 You have become a Cyber Aware User!
                    <br />⭐ +50 XP Added
                  </div>

                  <button
                    onClick={() => navigate("/")}
                    className="
                              bg-cyan-600
                              hover:bg-cyan-700
                              px-8
                              py-3
                              rounded-xl
                              font-bold
                              transition"
                  >
                    🏠 Back to Home
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
