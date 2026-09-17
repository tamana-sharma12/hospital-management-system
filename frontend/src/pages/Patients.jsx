import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./Dashboard-admin.css";
import "./Patients.css";

function Patients() {

  const [patients, setPatients] = useState([]);

  // Selected patient ke liye
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [editPatient, setEditPatient] = useState(null);

  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    try {

      const response = await axios.get(
        "https://hospital-management-system-coral-two.vercel.app/patients"
      );

      setPatients(response.data.patients);

    } catch (error) {

      console.log(error);

    }
  };

  const handleView = (patient) => {
    setSelectedPatient(patient);
  };

  const handleEdit = (patient) => {
  setEditPatient(patient);
};
const handleEditChange = (e) => {
  setEditPatient({
    ...editPatient,
    [e.target.name]: e.target.value
  });
};
const handleUpdate = async () => {

  try {

    const response = await axios.put(
      `https://hospital-management-system-coral-two.vercel.app/patients/${editPatient._id}`,
      {
        name: editPatient.name,
        email: editPatient.email,
        phone: editPatient.phone,
        age: editPatient.age,
        gender: editPatient.gender,
        address: editPatient.address
      }
    );

    // Table mein updated patient dikhana
    setPatients(
      patients.map((patient) =>
        patient._id === editPatient._id
          ? response.data.patient
          : patient
      )
    );

    // Modal close
    setEditPatient(null);

    alert("Patient updated successfully");

  } catch (error) {

    console.log(error);

    alert("Failed to update patient");

  }

};
  const handleDelete = async (id) => {

  try {

    await axios.delete(
     `https://hospital-management-system-coral-two.vercel.app/patients/${id}`
    );

    // Delete hone ke baad table update
    setPatients(
      patients.filter((patient) => patient._id !== id)
    );

    alert("Patient deleted successfully");

  } catch (error) {

    console.log(error);
    alert("Failed to delete patient");

  }

};

  const handleClose = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="dashboard">

      {/* Admin Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="dashboard-content">

        <div className="patients-page">

          {/* Header */}
          <div className="patients-header">

            <div>
              <h1>Manage Patients</h1>

              <p>
                View and manage all registered patients
              </p>
            </div>

            <button className="add-patient-btn">
              + Add Patient
            </button>

          </div>


          {/* Statistics */}
          <div className="patient-stats">

            <div className="patient-stat-card">

              <h3>Total Patients</h3>

              <h2>{patients.length}</h2>

            </div>

          </div>


          {/* Patients Table */}
          <div className="patients-table-box">

            <table className="patients-table">

              <thead>

                <tr>
                  <th>Patient Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {patients.map((patient) => (

                  <tr key={patient._id}>

                    <td className="patient-name">
                      {patient.name}
                    </td>

                    <td>
                      {patient.email}
                    </td>

                    <td>
                      {patient.phone}
                    </td>

                    <td>
                      {patient.age}
                    </td>

                    <td>
                      <span className="gender-badge">
                        {patient.gender}
                      </span>
                    </td>

                    <td>
                      {patient.address}
                    </td>

                    <td>

                      <button className="action-btn"onClick={() => handleView(patient)}>View</button>
                      <button   className="edit-btn"onClick={() => handleEdit(patient)}>Edit</button>
                      <button className="delete-btn"onClick={() => handleDelete(patient._id)}>Delete</button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Patient Details Modal */}

          {selectedPatient && (

            <div className="patient-modal-overlay">

              <div className="patient-modal">

                <div className="patient-modal-header">

                  <div>
                    <h2>Patient Details</h2>
                    <p>Complete patient information</p>
                  </div>

                  <button
                    className="modal-close"
                    onClick={handleClose}
                  >
                    ×
                  </button>

                </div>


                <div className="patient-details">

                  <div className="detail-item">
                    <span>Patient Name</span>
                    <strong>{selectedPatient.name}</strong>
                  </div>

                  <div className="detail-item">
                    <span>Email</span>
                    <strong>{selectedPatient.email}</strong>
                  </div>

                  <div className="detail-item">
                    <span>Phone</span>
                    <strong>{selectedPatient.phone}</strong>
                  </div>

                  <div className="detail-item">
                    <span>Age</span>
                    <strong>{selectedPatient.age}</strong>
                  </div>

                  <div className="detail-item">
                    <span>Gender</span>
                    <strong>{selectedPatient.gender}</strong>
                  </div>

                  <div className="detail-item">
                    <span>Address</span>
                    <strong>{selectedPatient.address}</strong>
                  </div>

                </div>


                <div className="patient-modal-footer">

                  <button
                    className="close-modal-btn"
                    onClick={handleClose}
                  >
                    Close
                  </button>

                </div>

              </div>

            </div>

          )}



{/* Edit Patient Modal */}

{editPatient && (

  <div className="patient-modal-overlay">

    <div className="patient-modal">

      <div className="patient-modal-header">

        <div>
          <h2>Edit Patient</h2>
          <p>Update patient information</p>
        </div>

        <button
          className="modal-close"
          onClick={() => setEditPatient(null)}
        >
          ×
        </button>

      </div>


      <div className="patient-details">

        <div className="detail-item">
          <span>Patient Name</span>

          <input
            type="text"
            name="name"
            value={editPatient.name}
            onChange={handleEditChange}
          />
        </div>


        <div className="detail-item">
          <span>Email</span>

          <input
            type="email"
            name="email"
            value={editPatient.email}
            onChange={handleEditChange}
          />
        </div>


        <div className="detail-item">
          <span>Phone</span>

          <input
            type="text"
            name="phone"
            value={editPatient.phone}
            onChange={handleEditChange}
          />
        </div>


        <div className="detail-item">
          <span>Age</span>

          <input
            type="number"
            name="age"
            value={editPatient.age}
            onChange={handleEditChange}
          />
        </div>


        <div className="detail-item">
          <span>Gender</span>

          <select
            name="gender"
            value={editPatient.gender}
            onChange={handleEditChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>


        <div className="detail-item">
          <span>Address</span>

          <input
            type="text"
            name="address"
            value={editPatient.address}
            onChange={handleEditChange}
          />
        </div>

      </div>


      <div className="patient-modal-footer">

        <button
          className="close-modal-btn"
          onClick={() => setEditPatient(null)}
        >
          Cancel
        </button>

    <button
  className="update-patient-btn"
  onClick={handleUpdate}
>
  Update Patient
</button>

      </div>

    </div>

  </div>

)}
        </div>

      </main>

    </div>
  );
}

export default Patients;