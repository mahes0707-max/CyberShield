import React from "react";

function Footer() {
  return (
    <>
      <div className="quick-links p-5 text-center text-gray-400  ">
        <h1 className="font-bold text-green-200">Quick Links</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-3">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>
          <a href="/training-center" className="text-blue-500 hover:underline">
            Training Center
          </a>
          <a href="/cyberquiz" className="text-blue-500 hover:underline">
            Quiz
          </a>
          <a href="/threat-library" className="text-blue-500 hover:underline">
            Threat Library
          </a>
          <a href="/dashboard" className="text-blue-500 hover:underline">
            Dashboard
          </a>
        </div>

        <div className="features p-5 text-center text-gray-400">
          <h1 className="font-bold text-green-200">Features</h1>
          <div className="flex flex-col  md:flex-row items-center justify-center gap-5 mt-3">
            <h2> • Threat Detection</h2>
            <h2> • Phishing Email Simulator</h2>
            <h2> • Cyber Awareness Training</h2>
            <h2> • Security Analytics</h2>
            <h2> • Real-Time Monitoring</h2>
            <h2> • Gamified Learning</h2>
          </div>
        </div>
      </div>
      <div className=" p-5 text-center text-gray-400">
        <p>
          This platform is intended for educational and cybersecurity awareness
          purposes only.
        </p>
        <p>© 2026 Cyber Shield. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
