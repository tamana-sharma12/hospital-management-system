import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard-admin.css";
import AdminSidebar from "../components/AdminSidebar";
function Dashboard() {

  const [totalPatients, setTotalPatients] = useState(0);
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalDepartments, setTotalDepartments] = useState(0);
  const [recentAppointments, setRecentAppointments] = useState([]);
const [doctors, setDoctors] = useState([]);

  useEffect(() => {
  fetchDashboardData();
}, []);


const fetchDashboardData = async () => {

  try {

    const patientsResponse = await axios.get(
     "https://hospital-management-system-coral-two.vercel.app/patients"
    );

    const doctorsResponse = await axios.get(
    "https://hospital-management-system-coral-two.vercel.app/doctors"
    );

    const appointmentsResponse = await axios.get(
      "https://hospital-management-system-coral-two.vercel.app/appointments"
    );

    const departmentsResponse = await axios.get(
     "https://hospital-management-system-coral-two.vercel.app/departments"
    );

setDoctors(doctorsResponse.data.doctors);
setRecentAppointments(
  appointmentsResponse.data.appointments.slice(-3).reverse()
);
    setTotalPatients(
      patientsResponse.data.patients.length
    );

    setTotalDoctors(
      doctorsResponse.data.doctors.length
    );

    setTotalAppointments(
      appointmentsResponse.data.appointments.length
    );

    setTotalDepartments(
      departmentsResponse.data.departments.length
    );

  } catch (error) {

    console.log(
      "Dashboard data error:",
      error
    );

  }
};
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <AdminSidebar />


      {/* MAIN CONTENT */}
      <main className="dashboard-content">

        {/* HEADER */}
        <div className="dashboard-header">

          <div>
            <p>ADMIN PANEL</p>

            <h1>Admin Dashboard</h1>
          </div>

          <div className="profile">

            <span>👤</span>

            <div>
              <strong>Admin User</strong>

              <small>Administrator</small>
            </div>

          </div>

        </div>


        {/* OVERVIEW CARDS */}
        <div className="dashboard-cards">

          <div className="dashboard-card">

            <span>🧑‍🤝‍🧑</span>

            <div>
              <h3>{totalPatients}</h3>
              <p>Total Patients</p>
            </div>

          </div>


          <div className="dashboard-card">

            <span>👨‍⚕️</span>

            <div>
          <h3>{totalDoctors}</h3>
              <p>Total Doctors</p>
            </div>

          </div>


          <div className="dashboard-card">

            <span>📅</span>

            <div>
             <h3>{totalAppointments}</h3>
              <p>Appointments</p>
            </div>

          </div>


          <div className="dashboard-card">

            <span>🏥</span>

            <div>
            <h3>{totalDepartments}</h3>
              <p>Departments</p>
            </div>

          </div>

        </div>


        {/* QUICK ACTIONS */}
        <div className="dashboard-section">

          <h2>Quick Actions</h2>

          <div className="quick-actions">

            <div>
              <span>🧑‍🤝‍🧑</span>

              <h3>Manage Patients</h3>

              <p>
                View and manage patient records
              </p>
            </div>


            <div>
              <span>👨‍⚕️</span>

              <h3>Manage Doctors</h3>

              <p>
                View and manage hospital doctors
              </p>
            </div>


            <div>
              <span>📅</span>

              <h3>Appointments</h3>

              <p>
                Manage patient appointments
              </p>
            </div>

          </div>

        </div>

      {/* RECENT APPOINTMENTS */}
<div className="dashboard-section">

  <div className="section-heading">
    <div>
      <h2>Recent Appointments</h2>
      <p>Latest patient appointments</p>
    </div>

    <button className="view-all-btn">
      View All
    </button>
  </div>

  <div className="appointments-box">

    {/* HEADER */}
    <div className="appointment-header">
      <span>Patient</span>
      <span>Department</span>
      <span>Doctor</span>
      <span>Time</span>
      <span>Status</span>
    </div>


    {/* APPOINTMENT  */}
    {recentAppointments.map((appointment) => {

  const doctor = doctors.find(
    (doctor) => doctor.name === appointment.doctor
  );

  return (
    <div
      className="appointment-row"
      key={appointment._id}
    >

      <div className="patient-info">

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

        <div>

          <strong>
            {appointment.patient}
          </strong>

        </div>

      </div>


      <span>
        {doctor?.department || "N/A"}
      </span>


      <span>
        {appointment.doctor}
      </span>


      <span>
        {appointment.time}
      </span>


      <span
        className={`status ${
          appointment.status?.toLowerCase()
        }`}
      >
        {appointment.status}
      </span>

    </div>
  );
})}
    


    

  </div>

</div>
      </main>

    </div>
  );
}

export default Dashboard;