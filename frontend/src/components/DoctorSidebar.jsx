import React from "react";
import { Link } from "react-router-dom";

function DoctorSidebar() {

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (
    <aside className="doctor-sidebar">

      <div className="doctor-logo">

        <span>+</span>

        <div>
          <h2>HealthCare</h2>
          <p>Hospital Management</p>
        </div>

      </div>

      <nav>

        <Link to="/doctor-dashboard">
          🏠 Dashboard
        </Link>

        <Link to="/doctor-appointments">
          📅 My Appointments
        </Link>

        <Link to="/my-patients">
          🧑‍🤝‍🧑 My Patients
        </Link>

        <Link to="/doctor-schedule">
          🕐 My Schedule
        </Link>

        <Link to="/profile">
          👤 My Profile
        </Link>

      </nav>

      <button
        onClick={handleLogout}
        className="doctor-logout"
      >
        🚪 Logout
      </button>

    </aside>
  );
}

export default DoctorSidebar;