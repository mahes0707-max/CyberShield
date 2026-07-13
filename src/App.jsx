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
import Login from "./assets/pages/Login.jsx"
import Register from "./assets/pages/Register.jsx"
import ProtectedRoute from "./components/ProtectedRoute";
import SystemLoading from "./Anipages/SystemLoading.jsx";
import CertificateUnlock from "./certcomponents/CertificateUnlock.jsx";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/home"
  element={
    <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
/>
<Route
  path="/about"
  element={
    <ProtectedRoute>
      <About />
    </ProtectedRoute>
  }
/>
<Route
  path="/system-loading"
  element={
    <ProtectedRoute>
      <SystemLoading />
    </ProtectedRoute>
  }
/>

      <Route
  path="/email-phishing"
  element={
    <ProtectedRoute>
      <EmailPhishing />
    </ProtectedRoute>
  }
/>
      <Route
  path="/password-checker"
  element={
    <ProtectedRoute>
      <PasswordChecker />
    </ProtectedRoute>
  }
/>

     <Route
  path="/cyberquiz"
  element={
    <ProtectedRoute>
      <CyberQuiz />
    </ProtectedRoute>
  }
/>

      <Route
  path="/phishingurl"
  element={
    <ProtectedRoute>
      <PhishingUrl />
    </ProtectedRoute>
  }
/>

      <Route
  path="/social-engineering"
  element={
    <ProtectedRoute>
      <SocialEngineering />
    </ProtectedRoute>
  }
/>
     <Route
  path="/training-center"
  element={
    <ProtectedRoute>
      <TrainingCenter />
    </ProtectedRoute>
  }
/>
      <Route
  path="/threat-library"
  element={
    <ProtectedRoute>
      <ThreatLibrary />
    </ProtectedRoute>
  }
/>
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

     <Route
  path="/human-firewall"
  element={
    <ProtectedRoute>
      <HumanFirewallHome />
    </ProtectedRoute>
  }
/>

<Route
path="/certificate-unlock"
element={
<ProtectedRoute>
<CertificateUnlock />
</ProtectedRoute>
}
/>


    </Routes>
  );
}

export default App;
