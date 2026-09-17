import React from "react";
import { Link } from "react-router-dom";
import "./PatientDashboard.css";

function PatientDashboard() {
  return (
    <div className="patient-dashboard">

      {/* SIDEBAR */}
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

          <Link to="/doctors-dashboard">
            👨‍⚕️ Doctors
          </Link>

         <Link to="/patient-appointments">
  📅 My Appointments
</Link>
<Link to="/patient-prescriptions">
  💊 Prescriptions
</Link>

          <Link to="/medical-records">
            📋 Medical Records
          </Link>

          <Link to="/profile">
            👤 My Profile
          </Link>

        </nav>

        <Link to="/" className="patient-logout">
          🚪 Logout
        </Link>

      </aside>


      {/* MAIN CONTENT */}
      <main className="patient-content">

        {/* HEADER */}
        <div className="patient-header">

          <div>
            <p>PATIENT PANEL</p>

            <h1>Patient Dashboard</h1>
          </div>

          <div className="patient-profile">

            <span>👤</span>

            <div>
              <strong>Patient User</strong>
              <small>Patient</small>
            </div>

          </div>

        </div>


        {/* OVERVIEW CARDS */}
        <div className="patient-cards">

          <div className="patient-card">

            <span>📅</span>

            <div>
              <h3>3</h3>
              <p>My Appointments</p>
            </div>

          </div>


          <div className="patient-card">

            <span>👨‍⚕️</span>

            <div>
              <h3>2</h3>
              <p>My Doctors</p>
            </div>

          </div>


          <div className="patient-card">

            <span>💊</span>

            <div>
              <h3>4</h3>
              <p>Prescriptions</p>
            </div>

          </div>


          <div className="patient-card">

            <span>📋</span>

            <div>
              <h3>6</h3>
              <p>Medical Records</p>
            </div>

          </div>

        </div>


        {/* QUICK ACTIONS */}
        <div className="patient-section">

          <h2>Quick Actions</h2>

          <div className="patient-actions">

            <div>
              <span>📅</span>

              <h3>Book Appointment</h3>

              <p>
                Schedule an appointment with a doctor
              </p>
            </div>


            <div>
              <span>👨‍⚕️</span>

              <h3>Find a Doctor</h3>

              <p>
                Find doctors by specialization
              </p>
            </div>


            <div>
              <span>📋</span>

              <h3>Medical Records</h3>

              <p>
                View your medical history and reports
              </p>
            </div>

          </div>

        </div>


        {/* UPCOMING APPOINTMENT */}
        <div className="patient-section">

          <div className="patient-section-heading">

            <div>
              <h2>Upcoming Appointment</h2>
              <p>Your next scheduled appointment</p>
            </div>

            <button className="patient-view-btn">
              View All
            </button>

          </div>


          <div className="upcoming-appointment">

            <div className="doctor-avatar">
              SJ
            </div>

            <div className="appointment-doctor">

              <strong>Dr. Sarah Johnson</strong>

              <span>Cardiologist</span>

            </div>

            <div className="appointment-info">

              <strong>18 September 2026</strong>

              <span>10:00 AM</span>

            </div>

            <span className="appointment-status">
              Confirmed
            </span>

          </div>

        </div>

      </main>

    </div>
  );
}

export default PatientDashboard;