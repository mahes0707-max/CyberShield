import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { db } from "../firebase/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export const CyberContext = createContext();

const initialStats = {
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
};

export const CyberProvider = ({ children }) => {

  const { currentUser } = useAuth();

  const [stats, setStatsState] = useState(initialStats);

  // Load from Firebase after login
  useEffect(() => {

    if (!currentUser) return;

    loadStats();

  }, [currentUser]);

  async function loadStats() {

    const ref = doc(db, "users", currentUser.uid);

    const snap = await getDoc(ref);

    if (snap.exists()) {

      const data = snap.data();

      setStatsState((prev) => ({
        ...prev,
        ...data,
      }));
    }
  }

  // Custom setStats
  const setStats = async (value) => {

    let newStats;

    if (typeof value === "function") {

      newStats = value(stats);

    } else {

      newStats = value;

    }

    // Dashboard update
    setStatsState(newStats);

    // Firebase update
    if (currentUser) {

      await updateDoc(doc(db, "users", currentUser.uid), newStats);

    }

  };

  return (
    <CyberContext.Provider value={{ stats, setStats }}>
      {children}
    </CyberContext.Provider>
  );
};