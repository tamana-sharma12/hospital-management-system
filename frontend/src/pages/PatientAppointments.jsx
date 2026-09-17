import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PatientAppointments.css";

function PatientAppointments() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const normalizeName = (name = "") => {
    return name.replace(/\s+/g, "").toLowerCase();
  };

  const fetchAppointments = async () => {
    try {

      const response = await axios.get(
        "http://localhost:4000/appointments"
      );

      const allAppointments =
        response.data.appointments;

      const myAppointments =
        allAppointments.filter(
          (appointment) =>
            normalizeName(appointment.patient) ===
            normalizeName(user?.name)
        );

      setAppointments(myAppointments);

    } catch (error) {

      console.log(
        "Patient Appointments Error:",
        error
      );

    }
  };

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

          <a href="/patient-dashboard">
            🏠 Dashboard
          </a>

          <a href="/doctors">
            👨‍⚕️ Doctors
          </a>

          <a href="/patient-appointments">
            📅 My Appointments
          </a>

          <a href="/patient-prescriptions">
            💊 Prescriptions
          </a>

          <a href="/medical-records">
            📋 Medical Records
          </a>

          <a href="/profile">
            👤 My Profile
          </a>

        </nav>

        <a href="/login" className="patient-logout">
          🚪 Logout
        </a>

      </aside>


      {/* MAIN CONTENT */}
      <main className="patient-content">

        {/* HEADER */}
        <div className="patient-header">

          <div>
            <p>PATIENT PANEL</p>
            <h1>My Appointments</h1>
          </div>

          <div className="patient-profile">

            <span>👤</span>

            <div>
              <strong>{user?.name || "Patient User"}</strong>
              <small>Patient</small>
            </div>

          </div>

        </div>


        {/* APPOINTMENTS */}
        <div className="patient-section">

          <div className="patient-section-heading">

            <div>
              <h2>My Appointments</h2>
              <p>Your scheduled appointments with doctors</p>
            </div>

          </div>


          <div className="patient-appointments">

            {appointments.length === 0 ? (

              <div className="no-patient-appointments">
                No appointments found
              </div>

            ) : (

              appointments.map((appointment) => (

                <div
                  className="patient-appointment-row"
                  key={appointment._id}
                >

                  <div className="doctor-avatar">
                    {appointment.doctor
                      ? appointment.doctor
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()
                      : "DR"}
                  </div>


                  <div className="appointment-doctor">

                    <strong>
                      {appointment.doctor}
                    </strong>

                    <span>
                      Doctor
                    </span>

                  </div>


                  <div className="appointment-info">

                    <strong>
                      {appointment.date}
                    </strong>

                    <span>
                      {appointment.time}
                    </span>

                  </div>


                  <div className="appointment-reason">

                    {appointment.reason ||
                      "Consultation"}

                  </div>


                  <span
                    className={`appointment-status ${
                      appointment.status?.toLowerCase()
                    }`}
                  >
                    {appointment.status}
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default PatientAppointments;