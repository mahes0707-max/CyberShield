import React from "react";
import Navbar from "../components/navbar";
function About() {
  return (
          <> 
          <Navbar />
   
    <div className="min-h-screen bg-[#000814] text-white px-6 py-12">
      
      <div className="max-w-5xl mx-auto">

             
        {/* Heading */}
        <h1 className="text-5xl font-bold text-cyan-400 text-center">
          About CyberShield
        </h1>

        <p className="text-center text-gray-400 mt-5 text-lg">
          CyberShield is an interactive cybersecurity awareness platform
          designed to help users identify, analyze, and defend against modern
          cyber threats through practical simulations and assessments.
        </p>

        {/* Developer */}
        <div className="mt-12 bg-[#001233] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            👨‍💻 Meet the Developer
          </h2>

          <h3 className="text-2xl font-semibold">
            Maheswaran M
          </h3>

          <p className="text-gray-300 mt-4 leading-8">
            Artificial Intelligence and Data Science Student with a passion for
            Full Stack Development, Cybersecurity, and Cloud Computing.
            CyberShield was built to provide an engaging platform for learning
            cybersecurity through real-world simulations.
          </p>
          <br></br>

        <h1 >You Should Definitely Checkout my portfolio</h1>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://mahes0707-max.github.io/Portfolio_mahes0707/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              🌐 Portfolio
            </a>

            <a
              href="https://github.com/mahes0707-max"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 px-6 py-3 rounded-xl font-semibold transition"
            >
              💻 GitHub
            </a>

            <a
              href="https://linkedin.com/in/maheswaran-m2006"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
            >
              🔗 LinkedIn
            </a>

          </div>
        </div>

        {/* Features */}
        <div className="mt-12 bg-[#001d3d] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-cyan-300 mb-6">
            🚀 Features
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Email Phishing Simulator</li>
            <li>✅ Phishing URL Detection</li>
            <li>✅ Social Engineering Training</li>
            <li>✅ Password Strength Checker</li>
            <li>✅ Cyber Security Quiz</li>
            <li>✅ Threat Library</li>
            <li>✅ Human Firewall Simulator</li>
            <li>✅ Dashboard with Progress Tracking</li>
          </ul>
        </div>

        

      </div>
    </div>
    </>
  );
  
}

export default About;