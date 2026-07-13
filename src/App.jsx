import React from "react";
import Home from "./assets/pages/home";
import { Routes, Route } from "react-router-dom";
import EmailPhishing from "./assets/pages/EmailPhishing.jsx";
import PasswordChecker from "./assets/pages/PasswordChecker.jsx";
import PhishingUrl from "./assets/pages/PhishingUrl.jsx";
import CyberQuiz from "./assets/pages/CyberQuiz.jsx";
import SocialEngineering from "./assets/pages/SocialEngineering.jsx";
import TrainingCenter from "./assets/pages/TrainingCenter.jsx";
import ThreatLibrary from "./assets/pages/ThreatLibrary.jsx";
import Dashboard from "./assets/pages/Dashboard";
import HumanFirewallHome from "./assets/pages/HumanFirewall/HumanFirewallHome";
import About from "./components/about.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     


      <Route path="/email-phishing" element={<EmailPhishing />} />
      <Route path="/password-checker" element={<PasswordChecker />} />
      <Route path="/about" element={<About />} />
      <Route path="/cyberquiz" element={<CyberQuiz />} />

      <Route path="/phishingurl" element={<PhishingUrl />} />

      <Route path="/social-engineering" element={<SocialEngineering />} />
      <Route path="/training-center" element={<TrainingCenter />} />
      <Route path="/threat-library" element={<ThreatLibrary />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/human-firewall" element={<HumanFirewallHome />} />
    </Routes>
  );
}

export default App;
