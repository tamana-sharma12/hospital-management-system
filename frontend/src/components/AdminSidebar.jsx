import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="sidebar">

      <div className="dashboard-logo">
        <span>+</span>

        <div>
          <h2>HealthCare</h2>
          <p>Hospital Management</p>
        </div>
      </div>

      <nav>

        <Link to="/dashboard-admin">
          🏠 Dashboard
        </Link>

        <Link to="/patients">
          🧑‍🤝‍🧑 Patients
        </Link>

        <Link to="/manage-doctors">
  👨‍⚕️ Doctors
</Link>

        <Link to="/appointments">
          📅 Appointments
        </Link>

        <Link to="/departments">
          🏥 Departments
        </Link>
      </nav>

      <Link to="/" className="logout">
        🚪 Logout
      </Link>

    </aside>
  );
}

export default AdminSidebar;