import React from "react";

export default function AnalystReport({ report, submitReport, finished }) {
  const completed = [
    report.initial,

    report.persistence,

    report.c2,

    report.mitre,

    report.response,
  ].filter(Boolean).length;

  return (
    <div
      className="
                bg-[#001233]
                p-3
                sm:p-4
                md:p-6
                rounded-2xl
                shadow-2xl"
    >
      {/* Header */}

      <div
        className="
            flex
            justify-between
            items-center
            mb-6"
      >
        <h1
          className="
                text-3xl
                font-bold
                text-cyan-400"
        >
          📝 Analyst Report
        </h1>

        <span
          className="
                bg-[#001d3d]
                px-4
                py-2
                rounded-lg"
        >
          {completed}/5
        </span>
      </div>

      {/* Initial Access */}

      <div
        className="
            bg-[#001d3d]
            p-4
            rounded-xl
            mb-4"
      >
        <h3
          className="
                text-red-400
                font-bold"
        >
          Initial Access
        </h3>

        <p
          className="
                mt-2
                text-white"
        >
          {report.initial || "Not Identified"}
        </p>
      </div>

      {/* Persistence */}

      <div
        className="
            bg-[#001d3d]
            p-4
            rounded-xl
            mb-4
            break-words"
      >
        <h3
          className="
                text-yellow-400
                font-bold"
        >
          Persistence
        </h3>

        <p
          className="
                mt-2
                text-white"
        >
          {report.persistence || "Not Identified"}
        </p>
      </div>

      {/* C2 */}

      <div
        className="
            bg-[#001d3d]
            p-4
            rounded-xl
            mb-4"
      >
        <h3
          className="
                text-green-400
                font-bold"
        >
          C2 Server
        </h3>

        <p
          className="
                mt-2
                text-white"
        >
          {report.c2 || "Not Identified"}
        </p>
      </div>

      {/* MITRE */}

      <div
        className="
            bg-[#001d3d]
            p-4
            rounded-xl
            mb-4"
      >
        <h3
          className="
                text-purple-400
                font-bold"
        >
          MITRE ATT&CK
        </h3>

        <p
          className="
                mt-2
                text-white"
        >
          {report.mitre || "Not Identified"}
        </p>
      </div>

      {/* Response */}

      <div
        className="
            bg-[#001d3d]
            p-4
            rounded-xl
            mb-6"
      >
        <h3
          className="
                text-cyan-400
                font-bold"
        >
          First Response
        </h3>

        <p
          className="
                mt-2
                text-white"
        >
          {report.response || "Not Identified"}
        </p>
      </div>

      {/* Progress */}

      <div
        className="
flex
flex-wrap
justify-center
gap-3"
      >
        {[
          report.initial,
          report.persistence,
          report.c2,
          report.mitre,
          report.response,
        ].map((item, index) => (
          <div
            key={index}
            className={`
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        font-bold
                        transition-all

                        ${item ? "bg-green-500" : "bg-gray-700"}

                        `}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Status */}

      <div
        className="
            bg-black
            p-5
            rounded-xl
            mb-6"
      >
        <h2
          className="
                text-green-400
                font-bold"
        >
          SOC STATUS
        </h2>

        <p
          className="
                mt-3"
        >
          Evidence Collected:
          {completed}/5
        </p>

        <p
          className="
                mt-2"
        >
          Investigation:
          {completed === 5 ? " Complete" : " In Progress"}
        </p>
      </div>

      {/* Submit */}

      <button
        disabled={completed !== 5 || finished}
        onClick={submitReport}
        className={`
                w-full
                p-4
                rounded-xl
                font-bold
                transition-all

                ${
                  completed === 5 && !finished
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 cursor-not-allowed"
                }

                `}
      >
        🚨 Submit Incident Report
      </button>
    </div>
  );
}
