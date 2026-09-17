import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DoctorAppointments.css";
import DoctorSidebar from "../components/DoctorSidebar";

function DoctorAppointments() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {

      const response = await axios.get(
        "http://localhost:4000/appointments"
      );

      const allAppointments =
        response.data.appointments;

     const normalizeName = (name = "") => {
  return name.replace(/\s+/g, "").toLowerCase();
};

const doctorAppointments =
  allAppointments.filter(
    (appointment) =>
      normalizeName(appointment.doctor) ===
      normalizeName(user?.name)
  );

      setAppointments(doctorAppointments);

    } catch (error) {

      console.log(
        "Appointments Error:",
        error
      );

    }
  };

  return (
    <div className="doctor-dashboard">

      <DoctorSidebar />

      <main className="doctor-content">

        <div className="doctor-header">

          <div>
            <p>DOCTOR PANEL</p>
            <h1>My Appointments</h1>
          </div>

          <div className="doctor-profile">

            <span>👨‍⚕️</span>

            <div>
              <strong>{user?.name}</strong>
              <small>Doctor</small>
            </div>

          </div>

        </div>


        <div className="doctor-section">

          <div className="doctor-section-heading">

            <div>
              <h2>My Appointments</h2>

              <p>
                Appointments scheduled with you
              </p>
            </div>

          </div>


          <div className="doctor-appointments">

            {appointments.length === 0 ? (

              <div className="no-doctor-appointments">
                No appointments found
              </div>

            ) : (

              appointments.map((appointment) => (

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

                    {appointment.reason ||
                      "Consultation"}

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

export default DoctorAppointments;