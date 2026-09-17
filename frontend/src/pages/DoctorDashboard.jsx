import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DoctorSidebar from "../components/DoctorSidebar";
import "./DoctorDashboard.css";

function DoctorDashboard() {

  // =========================
  // STATES
  // =========================

  const user = JSON.parse(localStorage.getItem("user"));


  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);


  // =========================
  // FETCH DATA
  // =========================

  useEffect(() => {
    fetchDoctorData();
  }, []);


 const fetchDoctorData = async () => {
  try {

    const appointmentsResponse = await axios.get(
      "https://hospital-management-system-coral-two.vercel.app/appointments"
    );

    console.log(
      "Appointments Data:",
      appointmentsResponse.data
    );

    setAppointments(
      appointmentsResponse.data.appointments
    );


    const patientsResponse = await axios.get(
      "https://hospital-management-system-coral-two.vercel.app/patients"
    );

    setPatients(
      patientsResponse.data.patients
    );


    const prescriptionsResponse = await axios.get(
     "https://hospital-management-system-coral-two.vercel.app/prescriptions"
    );

    setPrescriptions(
      prescriptionsResponse.data.prescriptions
    );


  } catch (error) {

    console.log(
      "Doctor Dashboard Error:",
      error
    );

  }
};


  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("login");

    window.location.href = "/login";

  };


  return (

    <div className="doctor-dashboard">


      {/* SIDEBAR */}

      <DoctorSidebar />



      {/* MAIN CONTENT */}

      <main className="doctor-content">


        {/* HEADER */}

        <div className="doctor-header">

          <div>

            <p>DOCTOR PANEL</p>

            <h1>Doctor Dashboard</h1>

          </div>


        <div className="doctor-profile">
  <span>👨‍⚕️</span>
  <div>
    <strong>{user?.name}</strong>
    <small>Doctor</small>
  </div>
</div>
        </div>



        {/* OVERVIEW CARDS */}

        <div className="doctor-cards">


          {/* TODAY'S APPOINTMENTS */}

          <div className="doctor-card">

            <span>📅</span>

            <div>

              <h3>
                {appointments.length}
              </h3>

              <p>Today's Appointments</p>

            </div>

          </div>



          {/* MY PATIENTS */}

          <div className="doctor-card">

            <span>🧑‍🤝‍🧑</span>

            <div>

              <h3>
                {patients.length}
              </h3>

              <p>My Patients</p>

            </div>

          </div>



          {/* PRESCRIPTIONS */}

          <div className="doctor-card">

            <span>💊</span>

            <div>

              <h3>
                {prescriptions.length}
              </h3>

              <p>Prescriptions</p>

            </div>

          </div>



          {/* PATIENT RATING */}

          <div className="doctor-card">

            <span>⭐</span>

            <div>

              <h3>4.9</h3>

              <p>Patient Rating</p>

            </div>

          </div>

        </div>



        {/* QUICK ACTIONS */}

        <div className="doctor-section">

          <h2>Quick Actions</h2>


          <div className="doctor-actions">


            <Link to="/doctor-appointments">

              <span>📅</span>

              <h3>Appointments</h3>

              <p>
                View and manage today's appointments
              </p>

            </Link>



            <Link to="/my-patients">

              <span>🧑‍🤝‍🧑</span>

              <h3>My Patients</h3>

              <p>
                View your patients and their records
              </p>

            </Link>



            <Link to="/prescriptions">

              <span>💊</span>

              <h3>Write Prescription</h3>

              <p>
                Create and manage patient prescriptions
              </p>

            </Link>


          </div>

        </div>



        {/* TODAY'S APPOINTMENTS */}

        <div className="doctor-section">


          <div className="doctor-section-heading">

            <div>

              <h2>Today's Appointments</h2>

              <p>
                Your scheduled appointments for today
              </p>

            </div>


            <Link
              to="/doctor-appointments"
              className="doctor-view-btn"
            >
              View All
            </Link>

          </div>



          <div className="doctor-appointments">

{appointments.length === 0 ? (

  <div className="no-doctor-appointments">
    No appointments found
  </div>

) : (

  appointments.slice(-3).reverse().map((appointment) => (

    <div
      className="doctor-appointment-row"
      key={appointment._id}
    >

      <div className="patient-avatar">

        {appointment.patient
          ? appointment.patient
              .split(" ")
              .map((name) => name[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
          : "P"}

      </div>


      <div className="doctor-patient">

        <strong>
          {appointment.patient}
        </strong>

        <span>
          Patient
        </span>

      </div>


      <div className="appointment-time">

        <strong>
          {appointment.time}
        </strong>

        <span>
          {appointment.date}
        </span>

      </div>


      <div className="appointment-type">

        {appointment.reason || "Consultation"}

      </div>


      <span
        className={`doctor-status ${
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

export default DoctorDashboard; 