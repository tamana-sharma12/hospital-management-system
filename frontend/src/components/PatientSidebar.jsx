import React from "react";
import { Link } from "react-router-dom";

function PatientSidebar() {

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <aside className="patient-sidebar">

      <div className="patient-logo">

        <span>+</span>

        <div>
          <h2>HealthCare</h2>
          <p>Hospital Management</p>
        </div>

      </div>

      <nav>

        <Link to="/patient-dashboard">
          🏠 Dashboard
        </Link>

        <Link to="/patient-doctors">👨‍⚕️ Doctors</Link>

        <Link to="/patient-appointments">
          📅 My Appointments
        </Link>

        <Link to="/patient-prescriptions">
          💊 Prescriptions
        </Link>

        <Link to="/medical-records">
          📋 Medical Records
        </Link>

        <Link to="/patient-profile">
          👤 My Profile
        </Link>

      </nav>

      <button
        onClick={handleLogout}
        className="patient-logout"
      >
        🚪 Logout
      </button>

    </aside>
  );
}

export default PatientSidebar;