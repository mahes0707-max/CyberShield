import React from "react";

export default function Stage1_EmailAttack({
  setStage,
  score,
  setScore,
  addLog,
}) {
  const handleEmailAction = (action) => {
    if (action === "verify") {
      addLog("✅ Employee verified sender identity.");

      addLog("🛡 Phishing attack prevented.");

      setScore((prev) => prev + 20);

      setStage(2);
    } else if (action === "report") {
      addLog("🚨 Suspicious email reported.");

      addLog("🛡 Security team notified.");

      setScore((prev) => prev + 15);

      setStage(2);
    
    } else {
      addLog("❌ Employee opened malicious attachment.");

      addLog("💀 PowerShell executed.");

      addLog("💀 Malware infection started.");

      setScore((prev) => prev - 30);

      setStage(99);
    }
  };

  return (
    <div
      className="
        bg-[#001233]
        p-8
        rounded-2xl
        shadow-2xl"
    >
      {/* Mission */}

      <div
        className="
            mb-8
            border-l-4
            border-cyan-500
            pl-5"
      >
        <h1
          className="
                text-4xl
                font-bold
                text-cyan-400"
        >
          📧 Mission 1
        </h1>

        <h2
          className="
                text-2xl
                mt-2
                text-white"
        >
          Phishing Email Investigation
        </h2>

        <p
          className="
                mt-4
                text-gray-300"
        >
          You are working as a Junior Security Analyst. Investigate the email
          and decide the safest action.
        </p>
      </div>

      {/* Email */}

      <div
        className="
            bg-white
            rounded-xl
            overflow-hidden
            shadow-xl"
      >
        {/* Email Header */}

        <div
          className="
                bg-gray-200
                p-4"
        >
          <p className="text-black">
            <strong>From:</strong> ceo@company-support.com
          </p>

          <p
            className="
                    text-black
                    mt-2"
          >
            <strong>Subject:</strong>
            Urgent Salary Update
          </p>
        </div>

        {/* Email Body */}

        <div
          className="
                p-8
                text-black"
        >
          <h1
            className="
                    text-2xl
                    font-bold"
          >
            Dear Employee,
          </h1>

          <p
            className="
                    mt-5
                    leading-8"
          >
            Due to payroll verification issues, please open the attached file
            immediately.
          </p>

          <p className="mt-5">Attachment:</p>

          <div
            className="
                    mt-3
                    bg-red-100
                    border
                    border-red-300
                    p-4
                    rounded-lg"
          >
            📎 Payroll_2026.xlsm
          </div>

          <p
            className="
                    mt-6
                    text-red-500
                    font-bold"
          >
            Response required within 30 minutes.
          </p>
        </div>
      </div>

      {/* Decision */}

      <div className="mt-10">
        <h2
          className="
                text-2xl
                font-bold
                mb-5"
        >
          What would you do?
        </h2>

        <div
          className="
                grid
                md:grid-cols-3
                gap-5"
        >
          <button
            onClick={() => handleEmailAction("open")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Open Attachment
          </button>

          <button
            onClick={() => handleEmailAction("verify")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        text[#3affeb]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Verify Sender
          </button>

          <button
            onClick={() => handleEmailAction("report")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Report Email
          </button>
        </div>
      </div>

      {/* Current Score */}

      <div
        className="
            mt-10
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
                text-4xl
                font-bold"
        >
          {score}
        </h1>
      </div>
    </div>
  );
}
