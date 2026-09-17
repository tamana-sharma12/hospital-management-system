import React from "react";
import PatientSidebar from "../components/PatientSidebar";
import "./MedicalRecords.css";

function MedicalRecords() {
  const medicalRecords = [
    {
      date: "16 Sep 2026",
      doctor: "Dr. Amit Sharma",
      department: "Cardiology",
      diagnosis: "High Blood Pressure",
      symptoms: "Headache, dizziness and weakness",
      treatment: "Blood pressure monitoring and regular medication",
      medicines: "Amlodipine 5mg",
      tests: "Blood Pressure Test",
      notes:
        "Take medicines regularly and maintain a healthy diet. Follow-up after 2 weeks.",
    },
    {
      date: "02 Sep 2026",
      doctor: "Dr. Rahul",
      department: "General Medicine",
      diagnosis: "Migraine",
      symptoms: "Severe headache, nausea and sensitivity to light",
      treatment: "Medication and adequate rest",
      medicines: "Paracetamol 500mg",
      tests: "Routine Blood Test",
      notes:
        "Take sufficient rest and drink plenty of water. Avoid excessive screen time.",
    },
    {
      date: "20 Aug 2026",
      doctor: "Dr. Amit Sharma",
      department: "Cardiology",
      diagnosis: "Routine Health Checkup",
      symptoms: "No major symptoms",
      treatment: "General health monitoring",
      medicines: "No medication prescribed",
      tests: "Blood Pressure, ECG",
      notes:
        "Health condition is stable. Continue regular exercise and maintain a balanced diet.",
    },
  ];

  return (
    <div className="patient-dashboard">
      <PatientSidebar />

      <main className="patient-content">

        {/* ================= HEADER ================= */}

        <div className="patient-header">
          <div>
            <p>PATIENT PANEL</p>
            <h1>Medical Records</h1>
          </div>

          <div className="patient-profile">
            <span>👤</span>

            <div>
              <strong>Patient</strong>
              <small>Patient</small>
            </div>
          </div>
        </div>

        {/* ================= PAGE INTRO ================= */}

        <div className="medical-records-intro">
          <div>
            <h2>My Medical History</h2>
            <p>
              View your previous medical records, diagnosis,
              treatments and doctor notes.
            </p>
          </div>

          <div className="medical-record-count">
            <span>📋</span>
            <div>
              <strong>{medicalRecords.length}</strong>
              <small>Total Records</small>
            </div>
          </div>
        </div>

        {/* ================= MEDICAL RECORDS ================= */}

        <div className="medical-records-list">

          {medicalRecords.map((record, index) => (
            <div className="medical-record-card" key={index}>

              {/* RECORD HEADER */}

              <div className="medical-record-top">

                <div className="medical-record-date">
                  <span>📅</span>

                  <div>
                    <small>Record Date</small>
                    <strong>{record.date}</strong>
                  </div>
                </div>

                <span className="record-status">
                  Completed
                </span>

              </div>

              {/* DOCTOR INFORMATION */}

              <div className="medical-doctor-info">

                <div className="doctor-record-icon">
                  👨‍⚕️
                </div>

                <div>
                  <small>Consulted Doctor</small>
                  <h3>{record.doctor}</h3>
                  <p>{record.department}</p>
                </div>

              </div>

              {/* RECORD DETAILS */}

              <div className="medical-record-details">

                <div className="record-detail">
                  <span>🩺</span>

                  <div>
                    <small>Diagnosis</small>
                    <strong>{record.diagnosis}</strong>
                  </div>
                </div>

                <div className="record-detail">
                  <span>🤒</span>

                  <div>
                    <small>Symptoms</small>
                    <strong>{record.symptoms}</strong>
                  </div>
                </div>

                <div className="record-detail">
                  <span>💉</span>

                  <div>
                    <small>Treatment</small>
                    <strong>{record.treatment}</strong>
                  </div>
                </div>

                <div className="record-detail">
                  <span>💊</span>

                  <div>
                    <small>Medicines</small>
                    <strong>{record.medicines}</strong>
                  </div>
                </div>

                <div className="record-detail">
                  <span>🧪</span>

                  <div>
                    <small>Tests / Reports</small>
                    <strong>{record.tests}</strong>
                  </div>
                </div>

              </div>

              {/* DOCTOR NOTES */}

              <div className="doctor-notes">

                <div className="notes-title">
                  <span>📝</span>
                  <strong>Doctor Notes</strong>
                </div>

                <p>{record.notes}</p>

              </div>

            </div>
          ))}

        </div>

      </main>
    </div>
  );
}

export default MedicalRecords;