import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyPatients.css";
import DoctorSidebar from "../components/DoctorSidebar";

function MyPatients() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchMyPatients();
  }, []);

  const normalizeName = (name = "") => {
    return name.replace(/\s+/g, "").toLowerCase();
  };

  const fetchMyPatients = async () => {
    try {
      // Get all appointments
      const appointmentResponse = await axios.get(
        "http://localhost:4000/appointments"
      );

      const allAppointments =
        appointmentResponse.data.appointments;

      // Only logged-in doctor's appointments
      const doctorAppointments = allAppointments.filter(
        (appointment) =>
          normalizeName(appointment.doctor) ===
          normalizeName(user?.name)
      );

      // Get all patients
      const patientResponse = await axios.get(
        "http://localhost:4000/patients"
      );

      const allPatients = patientResponse.data.patients;

      // Get patients whose names are in doctor's appointments
      const myPatients = allPatients.filter((patient) =>
        doctorAppointments.some(
          (appointment) =>
            normalizeName(appointment.patient) ===
            normalizeName(patient.name)
        )
      );

      setPatients(myPatients);
    } catch (error) {
      console.log("My Patients Error:", error);
    }
  };

  return (
    <div className="doctor-dashboard">

      <DoctorSidebar />

      <main className="doctor-content">

        <div className="doctor-header">

          <div>
            <p>DOCTOR PANEL</p>
            <h1>My Patients</h1>
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
              <h2>My Patients</h2>

              <p>
                Patients who have appointments with you
              </p>
            </div>

          </div>

          <div className="my-patients-grid">

            {patients.length === 0 ? (

              <div className="no-doctor-appointments">
                No patients found
              </div>

            ) : (

              patients.map((patient) => (

                <div
                  className="my-patient-card"
                  key={patient._id}
                >

                  <div className="my-patient-avatar">
                    {patient.name
                      ? patient.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()
                      : "P"}
                  </div>

                  <div className="my-patient-info">

                    <h3>{patient.name}</h3>

                    <p>
                      📧 {patient.email}
                    </p>

                    <p>
                      📞 {patient.phone}
                    </p>

                    <div className="patient-details">

                      <span>
                        Age: {patient.age}
                      </span>

                      <span>
                        Gender: {patient.gender}
                      </span>

                    </div>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default MyPatients;