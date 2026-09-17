import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PatientPrescriptions.css";
import PatientSidebar from "../components/PatientSidebar";

function PatientPrescriptions() {

  const user = JSON.parse(localStorage.getItem("user"));

  console.log("Logged Patient:", user);

  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const normalizeName = (name = "") => {
    return name.replace(/\s+/g, "").toLowerCase();
  };

  const fetchPrescriptions = async () => {

    try {

      const response = await axios.get(
        "http://localhost:4000/prescriptions"
      );

      const allPrescriptions =
        response.data.prescriptions;

      console.log(
        "All Prescriptions:",
        allPrescriptions
      );

      console.log(
        "Logged Patient Name:",
        user?.name
      );

      const myPrescriptions =
        allPrescriptions.filter(
          (prescription) => {

            console.log(
              "Prescription Patient:",
              prescription.patient
            );

            return (
              normalizeName(
                prescription.patient
              ) ===
              normalizeName(
                user?.name
              )
            );

          }
        );

      console.log(
        "My Prescriptions:",
        myPrescriptions
      );

      setPrescriptions(
        myPrescriptions
      );

    } catch (error) {

      console.log(
        "Patient Prescriptions Error:",
        error
      );

    }

  };

  return (
    <div className="patient-dashboard">

      <PatientSidebar />

      <main className="patient-content">

        <div className="patient-header">

          <div>

            <p>PATIENT PANEL</p>

            <h1>
              My Prescriptions
            </h1>

          </div>

          <div className="patient-profile">

            <span>👤</span>

            <div>

              <strong>
                {user?.name || "Patient User"}
              </strong>

              <small>
                Patient
              </small>

            </div>

          </div>

        </div>


        <div className="patient-section">

          <div className="patient-section-heading">

            <div>

              <h2>
                My Prescriptions
              </h2>

              <p>
                Your medicines and prescription details
              </p>

            </div>

          </div>


          <div className="prescription-list">

            {prescriptions.length === 0 ? (

              <div className="no-patient-appointments">

                No prescriptions found

              </div>

            ) : (

              prescriptions.map(
                (prescription) => (

                  <div
                    className="patient-prescription-card"
                    key={prescription._id}
                  >

                    <div className="medicine-icon">
                      💊
                    </div>


                    <div className="prescription-info">

                      <h3>
                        {prescription.medicine}
                      </h3>


                      <p>
                        Doctor:{" "}
                        {prescription.doctor}
                      </p>


                      <div className="prescription-details">

                        <span>
                          Dosage:{" "}
                          {prescription.dosage}
                        </span>

                        <span>
                          Frequency:{" "}
                          {prescription.frequency}
                        </span>

                        <span>
                          Duration:{" "}
                          {prescription.duration}
                        </span>

                      </div>


                      <p className="prescription-instructions">

                        Instructions:{" "}

                        {prescription.instructions ||
                          "No instructions"}

                      </p>

                    </div>


                    <span className="prescription-status">

                      {prescription.status}

                    </span>

                  </div>

                )

              )

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default PatientPrescriptions;