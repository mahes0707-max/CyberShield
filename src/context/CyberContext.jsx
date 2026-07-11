import { createContext, useState } from "react";

export const CyberContext = createContext();

export const CyberProvider = ({ children }) => {
  const [stats, setStats] = useState({
    emailCompleted: 0,
    emailCorrect: 0,

    urlCompleted: 0,
    urlCorrect: 0,

    socialCompleted: 0,
    socialCorrect: 0,

    threatsViewed: 0,

    securityLabCompleted: 0,

    quizCompleted: 0,
    quizCorrect: 0,

    passwordChecks: 0,
    passwordScore: 0,
    passwordCompleted: 0,

    humanFirewallCompleted: 0,

    humanFirewallScore: 0,

    finalAssessmentUnlocked: false,

    overallProgress: 0,

    threatCompleted: false,

    badges: [],

    certificates: [],

    level: 1,

    xp: 0,
  });

  return (
    <CyberContext.Provider value={{ stats, setStats }}>
      {children}
    </CyberContext.Provider>
  );
};
