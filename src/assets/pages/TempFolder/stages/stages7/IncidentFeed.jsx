import React from "react";

export default function IncidentFeed({ report, setReport }) {
  return (
    <div
      className="
            bg-[#001233]
            p-3
            sm:p-4
            md:p-6
            rounded-2xl
            shadow-2xl
            overflow-hidden"
    >
      <h1
        className="
            text-3xl
            font-bold
            text-red-400
            mb-6"
      >
        🔴 LIVE INCIDENT FEED
      </h1>

      {/* ATTACK TIMELINE */}

      <div
        className="
flex
flex-col
sm:flex-row
gap-2
sm:gap-4
text-sm
md:text-base"
      >
        <h2
          className="
    text-red-400
    text-xl
    mb-5
    font-bold"
        >
          ⚠ ATTACK TIMELINE
        </h2>

        <div
          className="
        space-y-3
        text-sm
        md:text-base"
        >
          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-2
            sm:gap-4"
          >
            <span
              className="
            text-yellow-400"
            >
              [02:15]
            </span>

            <span>finance_admin opened invoice_update.xlsm</span>
          </div>

          <div
            className="
        flex
        gap-4"
          >
            <span
              className="
            text-yellow-400"
            >
              [02:16]
            </span>

            <span>powershell.exe executed</span>
          </div>

          <div
            className="
        flex
        gap-4"
          >
            <span
              className="
            text-yellow-400"
            >
              [02:17]
            </span>

            <span>Registry modified: HKCU\Run</span>
          </div>

          <div
            className="
        flex
        gap-4"
          >
            <span
              className="
            text-yellow-400"
            >
              [02:18]
            </span>

            <span>AdobeUpdater scheduled</span>
          </div>

          <div
            className="
        flex
        gap-4"
          >
            <span
              className="
            text-yellow-400"
            >
              [02:19]
            </span>

            <span>Connected to 185.12.76.43</span>
          </div>

          <div
            className="
        flex
        gap-4"
          >
            <span
              className="
            text-red-500"
            >
              [02:20]
            </span>

            <span>Ransomware execution started</span>
          </div>
        </div>
      </div>

      <div
        className="
bg-[#001d3d]
p-5
rounded-xl
mb-8"
      >
        <h2
          className="
    text-cyan-400
    text-xl
    mb-4
    font-bold"
        >
          📂 FILE ACCESS LOG
        </h2>

        <div
          className="
    space-y-3"
        >
          <div
            className="
        bg-[#002855]
        p-3
        rounded"
          >
            User: finance_admin
            <br />
            File: invoice_update.xlsm
            <br />
            Time: 02:15
          </div>

          <div
            className="
        bg-[#002855]
        p-3
        rounded"
          >
            User: finance_admin
            <br />
            File: payroll.xlsx
            <br />
            Time: 02:16
          </div>
        </div>
      </div>

      <div
        className="
bg-black
text-green-400
font-mono
p-5
rounded-xl
mb-8"
      >
        <h2
          className="
    text-yellow-400
    text-xl
    mb-4"
        >
          ⚙ PROCESS TREE
        </h2>

        <pre
          className="
overflow-x-auto
text-xs
sm:text-sm
md:text-base
whitespace-pre"
        >
          outlook.exe └── excel.exe └── powershell.exe
           └── svchost.exe └── ransomware.exe
        </pre>
      </div>

      <div
        className="
                            bg-[#002855]
                            p-3
                            rounded
                            break-words
                            overflow-hidden"
      >
        <h2
          className="
    text-green-400
    text-xl
    mb-4
    font-bold"
        >
          🌐 NETWORK TRAFFIC
        </h2>

        <div
          className="
    space-y-3"
        >
          <div
            className="
        bg-[#002855]
        p-3
        rounded"
          >
            Source: 10.0.0.10
            <br />
            Destination: 185.12.76.43
            <br />
            Port: 443
          </div>

          <div
            className="
        bg-[#002855]
        p-3
        rounded"
          >
            DNS: paypal-security.ru
          </div>
        </div>
      </div>
      <h4 className="text-yellow-500 mt-3 font-bold text-2xl">Please Select Your Options</h4>
      {/* INITIAL ACCESS */}

      <h2
        className="
            text-cyan-400
            font-bold
            mt-8
            mb-4"
      >
        Initial Access
      </h2>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
gap-3"
      >
        <button
          onClick={() =>
            setReport({
              ...report,

              initial: "invoice_update.xlsm",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    transition-all
                    w-full

                    ${
                      report.initial === "invoice_update.xlsm"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          📧 invoice_update.xlsm
        </button>

        <button
          onClick={() =>
            setReport({
              ...report,

              initial: "powershell.exe",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full

                    ${
                      report.initial === "powershell.exe"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          ⚙ powershell.exe
        </button>
      </div>

      {/* PERSISTENCE */}

      <h2
        className="
            text-cyan-400
            font-bold
            mt-8
            mb-4"
      >
        Persistence
      </h2>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
gap-3"
      >
        <button
          onClick={() =>
            setReport({
              ...report,

              persistence: "AdobeUpdater",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full

                    ${
                      report.persistence === "AdobeUpdater"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          🔄 AdobeUpdater
        </button>

        <button
          onClick={() =>
            setReport({
              ...report,

              persistence: "OneDrive",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full

                    ${
                      report.persistence === "OneDrive"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          ☁ OneDrive
        </button>
      </div>

      {/* C2 */}

      <h2
        className="
            text-cyan-400
            font-bold
            mt-8
            mb-4"
      >
        C2 Server
      </h2>

      <div
        className="
            grid
            grid-cols-2
            gap-3"
      >
        <button
          onClick={() =>
            setReport({
              ...report,

              c2: "185.12.76.43",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full

                    ${
                      report.c2 === "185.12.76.43"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          🌐 185.12.76.43
        </button>

        <button
          onClick={() =>
            setReport({
              ...report,

              c2: "8.8.8.8",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full
                    ${
                      report.c2 === "8.8.8.8"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          🌐 8.8.8.8
        </button>
      </div>

      {/* MITRE */}

      <h2
        className="
            text-cyan-400
            font-bold
            mt-8
            mb-4"
      >
        MITRE ATT&CK
      </h2>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
gap-3"
      >
        <button
          onClick={() =>
            setReport({
              ...report,

              mitre: "T1486",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full
                    ${
                      report.mitre === "T1486"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          ⚔ T1486
        </button>

        <button
          onClick={() =>
            setReport({
              ...report,

              mitre: "T1110",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full

                    ${
                      report.mitre === "T1110"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          ⚔ T1110
        </button>
      </div>

      {/* RESPONSE */}

      <h2
        className="
            text-cyan-400
            font-bold
            mt-8
            mb-4"
      >
        Response Action
      </h2>

      <div
        className="
grid
grid-cols-1
md:grid-cols-2
gap-3"
      >
        <button
          onClick={() =>
            setReport({
              ...report,

              response: "Disconnect Network",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full

                    ${
                      report.response === "Disconnect Network"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          🔌 Disconnect Network
        </button>

        <button
          onClick={() =>
            setReport({
              ...report,

              response: "Restore Backup",
            })
          }
          className={`
                    p-4
                    rounded-xl
                    w-full
                    ${
                      report.response === "Restore Backup"
                        ? "bg-[#d20de0] scale-105"
                        : "bg-[#001d3d]"
                    }
                    `}
        >
          💾 Restore Backup
        </button>
      </div>
    </div>
  );
}
