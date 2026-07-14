import { db } from "../firebase/firebase";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export async function getCertificateData(currentUser) {

  const userRef = doc(db, "users", currentUser.uid);

  const snap = await getDoc(userRef);

  const data = snap.data();

  // Already generated
  if (data.certificateIssued) {

    return {

      certificateId: data.certificateId,

      certificateDate: data.certificateDate,

    };

  }

  // Generate only once

  const certificateId =
    `CS-2026-${currentUser.uid.slice(-6).toUpperCase()}`;

  const certificateDate =
    new Date().toLocaleDateString("en-GB", {

      day: "2-digit",

      month: "long",

      year: "numeric",

    }).toUpperCase();

  await updateDoc(userRef, {

    certificateIssued: true,

    certificateId,

    certificateDate,

  });

  return {

    certificateId,

    certificateDate,

  };

}