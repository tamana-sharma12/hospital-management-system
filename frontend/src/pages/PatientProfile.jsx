import React from "react";
import PatientSidebar from "../components/PatientSidebar";
import "./PatientProfile.css";

function PatientProfile() {
  const patient = {
    name: "Mahi",
    email: "mahi@gmail.com",
    phone: "+91 98765 43210",
    age: "25 Years",
    gender: "Female",
    bloodGroup: "B+",
    address: "Chandigarh, India",
  };

  return (
    <div className="patient-dashboard">
      <PatientSidebar />

      <main className="patient-content">

        {/* ================= HEADER ================= */}

        <div className="patient-header">
          <div>
            <p>PATIENT PANEL</p>
            <h1>My Profile</h1>
          </div>

          <div className="patient-profile">
            <span>👤</span>

            <div>
              <strong>{patient.name}</strong>
              <small>Patient</small>
            </div>
          </div>
        </div>

        {/* ================= PROFILE CARD ================= */}

        <div className="profile-page-card">

          <div className="profile-top">

            <div className="profile-avatar">
              👤
            </div>

            <div className="profile-main-info">
              <h2>{patient.name}</h2>
              <p>Patient</p>
            </div>

          </div>

          {/* ================= PERSONAL DETAILS ================= */}

          <div className="profile-section">

            <div className="profile-section-title">
              <span>👤</span>
              <div>
                <h3>Personal Information</h3>
                <p>Your personal details</p>
              </div>
            </div>

            <div className="profile-details-grid">

              <div className="profile-detail">
                <small>Full Name</small>
                <strong>{patient.name}</strong>
              </div>

              <div className="profile-detail">
                <small>Email Address</small>
                <strong>{patient.email}</strong>
              </div>

              <div className="profile-detail">
                <small>Phone Number</small>
                <strong>{patient.phone}</strong>
              </div>

              <div className="profile-detail">
                <small>Age</small>
                <strong>{patient.age}</strong>
              </div>

              <div className="profile-detail">
                <small>Gender</small>
                <strong>{patient.gender}</strong>
              </div>

              <div className="profile-detail">
                <small>Blood Group</small>
                <strong>{patient.bloodGroup}</strong>
              </div>

            </div>

          </div>

          {/* ================= ADDRESS ================= */}

          <div className="profile-section">

            <div className="profile-section-title">
              <span>📍</span>
              <div>
                <h3>Address</h3>
                <p>Current residential address</p>
              </div>
            </div>

            <div className="profile-address">
              {patient.address}
            </div>

          </div>

          {/* ================= ACCOUNT ================= */}

          <div className="profile-section">

            <div className="profile-section-title">
              <span>🔐</span>
              <div>
                <h3>Account Information</h3>
                <p>Basic account details</p>
              </div>
            </div>

            <div className="account-status">
              <span>●</span>
              Account Status: Active
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default PatientProfile;