import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientSidebar from "../components/PatientSidebar";
import "./PatientDoctors.css";

function PatientDoctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const response = await axios.get(
        "https://hospital-management-system-coral-two.vercel.app/doctors"
      );

      setDoctors(response.data.doctors);
    } catch (error) {
      console.log("Doctors Fetch Error:", error);
    }
  };

  return (
    <div className="patient-dashboard">
      <PatientSidebar />

      <main className="patient-content">
        <div className="patient-header">
          <div>
            <p>PATIENT PANEL</p>
            <h1>Our Doctors</h1>
          </div>

          <div className="patient-profile">
            <span>👤</span>
            <div>
              <strong>Patient</strong>
              <small>Patient</small>
            </div>
          </div>
        </div>

        <div className="patient-section">
          <div className="patient-section-heading">
            <div>
              <h2>Available Doctors</h2>
              <p>Choose a doctor for your appointment</p>
            </div>
          </div>

          <div className="patient-doctors-grid">
            {doctors.length === 0 ? (
              <p>No doctors found.</p>
            ) : (
              doctors.map((doctor) => (
                <div className="patient-doctor-card" key={doctor._id}>
                  
                  <div className="patient-doctor-icon">
                    👨‍⚕️
                  </div>

                  <div className="patient-doctor-info">
                    <h3>{doctor.name}</h3>

                    <p>
                      <strong>Specialization:</strong>{" "}
                      {doctor.specialization}
                    </p>

                    <p>
                      <strong>Department:</strong>{" "}
                      {doctor.department}
                    </p>

                    <p>
                      <strong>Experience:</strong>{" "}
                      {doctor.experience} Years
                    </p>

                    <button className="patient-book-btn">
                      Book Appointment
                    </button>
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

export default PatientDoctors;