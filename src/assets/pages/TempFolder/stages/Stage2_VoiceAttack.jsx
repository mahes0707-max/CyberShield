import React from "react";

export default function Stage2_VoiceAttack({
  setStage,
  score,
  setScore,
  addLog,
}) {
  const handleCall = (choice) => {
    // User shared information
    if (choice === "share") {
      addLog("❌ Employee shared sensitive information.");

      addLog("💀 Attacker bypassed MFA.");

      addLog("💀 Account compromised.");

      setScore((prev) => prev - 40);

      alert("SECURITY BREACH DETECTED!");

      return;
    }

    // User verified identity
    if (choice === "verify") {
      addLog("✅ Caller identity verified.");

      addLog("🛡 Vishing attack prevented.");

      setScore((prev) => prev + 20);

      setStage(3);

      return;
    }

    // User disconnected
    if (choice === "disconnect") {
      addLog("⚠ Suspicious call disconnected.");

      addLog("🛡 Potential attack avoided.");

      setScore((prev) => prev + 10);

      setStage(3);

      return;
    }

    // User reported incident
    if (choice === "report") {
      addLog("🚨 Security incident reported.");

      addLog("🛡 SOC team notified.");

      setScore((prev) => prev + 30);

      setStage(3);

      return;
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
            text-[#3affeb]"
      >
        ☎ Mission 2
      </h1>

      <h2
        className="
            text-2xl
            text-white
            mt-4
            font-bold"
      >
        Voice Social Engineering Attack
      </h2>

      <p
        className="
            text-gray-300
            mt-4"
      >
        An unknown caller claims to be from your company's IT department.
      </p>

      {/* Phone UI */}

      <div
        className="
            mt-8
            bg-[#001233]
            p-8
            rounded-xl"
      >
        <div
          className="
                flex
                justify-between
                items-center"
        >
          <h2
            className="
                    text-2xl
                    font-bold"
          >
            Incoming Call
          </h2>

          <span
            className="
                    bg-red-600
                    px-4
                    py-2
                    rounded-full"
          >
            LIVE
          </span>
        </div>

        <div
          className="
                mt-8
                bg-black
                p-6
                rounded-xl"
        >
          <p
            className="
                    text-green-400"
          >
            Caller:
          </p>

          <h2
            className="
                    text-3xl
                    font-bold
                    mt-3"
          >
            Rahul (IT Security)
          </h2>

          <p
            className="
                    mt-6
                    text-gray-300
                    leading-8"
          >
            "Hello Maheswaran, We have detected suspicious activity on your
            account. To verify your identity, please provide: • Employee ID •
            Company Email • MFA Code"
          </p>
        </div>
      </div>

      {/* Decision Buttons */}

      <div
        className="
            mt-10"
      >
        <h2
          className="
                text-2xl
                font-bold
                mb-6"
        >
          What would you do?
        </h2>

        <div
          className="
                grid
                md:grid-cols-2
                gap-5"
        >
          <button
            onClick={() => handleCall("share")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Share Information
          </button>

          <button
            onClick={() => handleCall("verify")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Verify Identity
          </button>

          <button
            onClick={() => handleCall("disconnect")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Disconnect Call
          </button>

          <button
            onClick={() => handleCall("report")}
            className="
                        bg-[#002855]
                        hover:bg-[#9e2383]
                        p-5
                        rounded-xl
                        font-bold
                        transition"
          >
            Report Incident
          </button>
        </div>
      </div>

      {/* Score */}

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
                text-5xl
                font-bold
                mt-2"
        >
          {score}
        </h1>
      </div>
    </div>
  );
}
