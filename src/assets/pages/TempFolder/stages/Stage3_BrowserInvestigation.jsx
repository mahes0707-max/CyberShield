import React, { useState } from "react";

export default function Stage3_BrowserInvestigation({
  setStage,
  score,
  setScore,
  addLog,
}) {
  const [findings, setFindings] = useState([]);

  const checkWebsite = (item) => {
    if (findings.includes(item)) return;

    setFindings((prev) => [...prev, item]);
  };

  const submitInvestigation = () => {
    const correct =
      findings.includes("domain") &&
      findings.includes("country") &&
      findings.includes("brand");

    if (correct) {
      addLog("✅ Fake banking website detected.");

      addLog("🛡 Credential theft prevented.");

      setScore((prev) => prev + 30);

      alert("Investigation Successful!");

      setStage(4);
    } else {
      addLog("❌ Investigation failed.");

      addLog("💀 Employee credentials stolen.");

      setScore((prev) => prev - 20);

      alert("Attack Successful!  Please Select Correct Options");
    }
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
        🌐 Mission 3
      </h1>

      <h2
        className="
            text-2xl
            mt-4"
      >
        Browser Investigation
      </h2>

      <p
        className="
            text-gray-300
            mt-4"
      >
        An employee opened a suspicious banking website. Investigate the page.
      </p>

      {/* Browser */}

      <div
        className="
            mt-10
            bg-white
            rounded-xl
            overflow-hidden"
      >
        {/* Browser Header */}

        <div
          className="
                bg-gray-300
                p-3
                flex
                gap-3"
        >
          <div
            className="
                    w-4
                    h-4
                    bg-red-500
                    rounded-full"
          />

          <div
            className="
                    w-4
                    h-4
                    bg-yellow-500
                    rounded-full"
          />

          <div
            className="
                    w-4
                    h-4
                    bg-green-500
                    rounded-full"
          />
        </div>

        {/* URL */}

        <div
          className="
                bg-gray-100
                p-4"
        >
          <div
            className="
                    bg-white
                    border
                    p-3
                    rounded-lg
                    text-black"
          >
            🔒 https://paypaI-security-login.ru
          </div>
        </div>

        {/* Fake Site */}

        <div
          className="
                p-10
                text-black"
        >
          <h1
            className="
                    text-4xl
                    font-bold"
          >
            PayPal Security
          </h1>

          <p
            className="
                    mt-4"
          >
            Your account has been suspended.
          </p>

          <input
            disabled
            placeholder="Email"
            className="
                        border
                        p-3
                        mt-5
                        block
                        w-full"
          />

          <input
            disabled
            placeholder="Password"
            className="
                        border
                        p-3
                        mt-3
                        block
                        w-full"
          />
        </div>
      </div>

      {/* Investigation */}

      <div className="mt-10">
        <h2
          className="
                text-2xl
                font-bold
                mb-5"
        >
          Find suspicious indicators
        </h2>

        <div
          className="
                grid
                md:grid-cols-2
                gap-5"
        >
          <button
            onClick={() => checkWebsite("domain")}
            className={`
                            p-5
                            rounded-xl
                            transition-all
                            duration-300

                            ${
                              findings.includes("domain")
                                ? "bg-[#a057f2] scale-105"
                                : "bg-[#002855] hover:bg-cyan-700"
                            }
                            `}
          >
            Fake Domain
          </button>

          <button
            onClick={() => checkWebsite("https")}
            className={`
                            p-5
                            rounded-xl
                            transition-all
                            duration-300

                            ${
                              findings.includes("https")
                                ? "bg-[#a057f2] scale-105"
                                : "bg-[#002855] hover:bg-cyan-700"
                            }
                            `}
          >
            HTTPS Present
          </button>

          <button
            onClick={() => checkWebsite("country")}
            className={`
                        p-5
                        rounded-xl
                        transition-all
                        duration-300

                        ${
                          findings.includes("country")
                            ? "bg-[#a057f2] scale-105"
                            : "bg-[#002855] hover:bg-cyan-700"
                        }
                        `}
          >
            Suspicious TLD
          </button>

          <button
            onClick={() => checkWebsite("brand")}
            className={`
                        p-5
                        rounded-xl
                        transition-all
                        duration-300

                        ${
                          findings.includes("brand")
                            ? "bg-[#a057f2] scale-105"
                            : "bg-[#002855] hover:bg-cyan-700"
                        }
                        `}
          >
            Brand Name Typo
          </button>
        </div>
      </div>

      {/* Findings */}

      <div
        className="
            mt-8
            bg-[#001233]
            p-5
            rounded-xl"
      >
        <h2
          className="
                text-xl
                mb-4"
        >
          Findings
        </h2>

        {findings.length === 0 ? (
          <p>No indicators found.</p>
        ) : (
          findings.map((item, index) => (
            <p
              key={index}
              className="
                                mb-2"
            >
              ✅ {item}
            </p>
          ))
        )}
      </div>

      {/* Submit */}

      <button
        onClick={submitInvestigation}
        className="
                mt-8
                bg-green-600
                hover:bg-green-700
                px-8
                py-4
                rounded-xl
                font-bold"
      >
        Submit Investigation
      </button>

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
