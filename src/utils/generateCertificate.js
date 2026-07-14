import { jsPDF } from "jspdf";
import certificateTemplate from "../assets/certificate/certificate-template.png";

export async function generateCertificate({
  name,
  certificateId,
  issueDate,
}) {

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [1536, 1024],
  });

  // Background
  pdf.addImage(
    certificateTemplate,
    "PNG",
    0,
    0,
    1536,
    1024
  );

  // -----------------------
  // PDF INFO
  // -----------------------

  pdf.setProperties({
    title: "CyberShield Human Firewall Certificate",
    subject: "CyberShield Certificate",
    author: "CyberShield",
    creator: "CyberShield",
    keywords: "CyberShield, Certificate",
  });

  // -----------------------
  // NAME
  // -----------------------

  let fontSize = 46;

  if (name.length > 18) {

    fontSize = 38;

  }

  if (name.length > 28) {

    fontSize = 30;

  }

  pdf.setFont("Times", "bold");

  pdf.setFontSize(fontSize);

  pdf.setTextColor(255,255,255);

  pdf.text(
    name.toUpperCase(),
    768,
    495,
    {
        align: "center"
    }
);

  // -----------------------
  // CERTIFICATE ID
  // -----------------------

  pdf.setFontSize(22);

  pdf.setTextColor(220,220,220);

 pdf.text(
    certificateId,
    1345,
    165,
    {
        align: "center"
    }
);

  // -----------------------
  // DATE
  // -----------------------

  pdf.setFontSize(24);

  pdf.text(

    issueDate,

    768,

    846,

    {

      align:"center"

    }

  );

  pdf.save(

    `CyberShield-HumanFirewall-${name}.pdf`

  );

}