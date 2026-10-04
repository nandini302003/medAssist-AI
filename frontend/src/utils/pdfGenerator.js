// src/utils/pdfGenerator.js
// Generate PDF report from prediction result

import jsPDF from "jspdf";

export function generatePDF(result, user, profile) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 20;

  const checkPageBreak = (space = 10) => {
    if (y + space > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  // ============ HEADER ============
  doc.setFillColor(99, 102, 241); // purple
  doc.rect(0, 0, pageWidth, 30, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("MedAssist AI", 15, 15);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("Health Prediction Report", 15, 23);

  // Date on right
  const date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  doc.setFontSize(9);
  doc.text(`Generated: ${date}`, pageWidth - 15, 23, { align: "right" });

  y = 45;
  doc.setTextColor(0, 0, 0);

  // ============ PATIENT INFO ============
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Patient Information", 15, y);
  y += 2;
  doc.setDrawColor(200, 200, 200);
  doc.line(15, y, pageWidth - 15, y);
  y += 8;

   doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${user?.name || "N/A"}`, 15, y);
  doc.text(`Email: ${user?.email || "N/A"}`, 100, y);
  y += 6;

  // Use profile from result, or fallback to passed profile
  const profileData = result.profile || profile || {};
  doc.text(`Age: ${profileData.age || "N/A"} years`, 15, y);
  doc.text(`BMI Category: ${profileData.bmi || "N/A"}`, 100, y);
  y += 6;
  doc.text(`Smoking: ${profileData.smoking || "N/A"}`, 15, y);
  doc.text(`Diabetes: ${profileData.diabetes || "N/A"}`, 100, y);
  y += 10;

  // ============ SYMPTOMS ============
  checkPageBreak(20);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("Reported Symptoms", 15, y);
  y += 2;
  doc.line(15, y, pageWidth - 15, y);
  y += 8;

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const symptomsText = result.input_symptoms?.join(", ") || "N/A";
  const symptomsLines = doc.splitTextToSize(symptomsText, pageWidth - 30);
  symptomsLines.forEach((line) => {
    checkPageBreak(6);
    doc.text(line, 15, y);
    y += 6;
  });
  y += 6;

  // ============ PREDICTION ============
  checkPageBreak(40);
  doc.setFillColor(240, 240, 255);
  doc.roundedRect(12, y - 3, pageWidth - 24, 35, 3, 3, "F");

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(99, 102, 241);
  doc.text("Most Likely Disease", 17, y + 5);

  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text(result.top_prediction || "N/A", 17, y + 17);

  // Confidence bar
  const conf = result.confidence || 0;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Confidence: ${conf.toFixed(1)}%`, pageWidth - 60, y + 8);

  // Bar background
  doc.setFillColor(220, 220, 220);
  doc.roundedRect(pageWidth - 60, y + 12, 45, 4, 2, 2, "F");
  // Bar fill
  doc.setFillColor(99, 102, 241);
  doc.roundedRect(pageWidth - 60, y + 12, (45 * conf) / 100, 4, 2, 2, "F");

  y += 45;
  doc.setTextColor(0, 0, 0);

  // ============ ABOUT DISEASE ============
  const topInfo = result.predictions?.[0] || {};
  if (topInfo.description) {
    checkPageBreak(30);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`About ${result.top_prediction}`, 15, y);
    y += 2;
    doc.line(15, y, pageWidth - 15, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const descLines = doc.splitTextToSize(topInfo.description, pageWidth - 30);
    descLines.forEach((line) => {
      checkPageBreak(6);
      doc.text(line, 15, y);
      y += 6;
    });
    y += 6;
  }

  // ============ PRECAUTIONS ============
  if (topInfo.precautions && topInfo.precautions.length > 0) {
    checkPageBreak(20);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 163, 74);
    doc.text("Precautions", 15, y);
    y += 2;
    doc.setDrawColor(22, 163, 74);
    doc.line(15, y, pageWidth - 15, y);
    y += 8;
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    topInfo.precautions.forEach((p) => {
      checkPageBreak(10);
      const lines = doc.splitTextToSize(`•  ${p}`, pageWidth - 30);
      lines.forEach((line) => {
        doc.text(line, 15, y);
        y += 6;
      });
    });
    y += 4;
  }

  // ============ AWARENESS ============
  if (topInfo.awareness && topInfo.awareness.length > 0) {
    checkPageBreak(20);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(202, 138, 4);
    doc.text("Awareness", 15, y);
    y += 2;
    doc.setDrawColor(202, 138, 4);
    doc.line(15, y, pageWidth - 15, y);
    y += 8;
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    topInfo.awareness.forEach((a) => {
      checkPageBreak(10);
      const lines = doc.splitTextToSize(`•  ${a}`, pageWidth - 30);
      lines.forEach((line) => {
        doc.text(line, 15, y);
        y += 6;
      });
    });
    y += 4;
  }

  // ============ OTHER DISEASES ============
  if (result.predictions && result.predictions.length > 1) {
    checkPageBreak(30);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Other Possible Diseases", 15, y);
    y += 2;
    doc.line(15, y, pageWidth - 15, y);
    y += 8;

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    result.predictions.slice(1, 5).forEach((p, i) => {
      checkPageBreak(6);
      doc.text(
        `${i + 2}. ${p.disease} — ${p.confidence.toFixed(1)}%`,
        15,
        y
      );
      y += 6;
    });
    y += 4;
  }

  // ============ DISCLAIMER ============
  checkPageBreak(20);
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(12, y, pageWidth - 24, 20, 3, 3, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(146, 64, 14);
  const disclaimer = doc.splitTextToSize(
    "Disclaimer: This report is generated by an AI-based educational tool. It is NOT a medical diagnosis. Please consult a qualified doctor for professional medical advice.",
    pageWidth - 30
  );
  disclaimer.forEach((line) => {
    doc.text(line, 17, y + 5);
    y += 5;
  });

  // ============ FOOTER ============
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.setFont("helvetica", "normal");
  doc.text(
    `MedAssist AI Report | Generated on ${date}`,
    pageWidth / 2,
    pageHeight - 10,
    { align: "center" }
  );

  // Save PDF
  const filename = `MedAssist_Report_${result.top_prediction.replace(
    /[^a-z0-9]/gi,
    "_"
  )}_${Date.now()}.pdf`;
  doc.save(filename);
}
