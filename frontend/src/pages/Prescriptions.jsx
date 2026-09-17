import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./Prescriptions.css";

function Prescriptions() {

  // =========================
  // STATES
  // =========================

  const [prescriptions, setPrescriptions] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedPrescription, setSelectedPrescription] = useState(null);

  const [editPrescription, setEditPrescription] = useState(null);

  const [prescriptionForm, setPrescriptionForm] = useState({
    patient: "",
    doctor: "",
    medicine: "",
    dosage: "",
    frequency: "",
    duration: "",
    instructions: "",
    status: "Active"
  });


  // =========================
  // GET PRESCRIPTIONS
  // =========================

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {

      const response = await axios.get(
    "https://hospital-management-system-coral-two.vercel.app/prescriptions"
      );

      setPrescriptions(response.data.prescriptions);

    } catch (error) {

      console.log(
        "Error fetching prescriptions:",
        error
      );

    }
  };


  // =========================
  // FORM INPUT
  // =========================

  const handleChange = (e) => {

    setPrescriptionForm({
      ...prescriptionForm,
      [e.target.name]: e.target.value
    });

  };


  // =========================
  // ADD PRESCRIPTION
  // =========================

  const handleAddPrescription = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
      "https://hospital-management-system-coral-two.vercel.app/prescriptions",
        prescriptionForm
      );

      alert("Prescription added successfully");

      setShowAddModal(false);

      setPrescriptionForm({
        patient: "",
        doctor: "",
        medicine: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
        status: "Active"
      });

      fetchPrescriptions();

    } catch (error) {

      console.log(
        "Error adding prescription:",
        error
      );

      alert("Failed to add prescription");

    }

  };


  // =========================
  // VIEW PRESCRIPTION
  // =========================

  const handleView = (prescription) => {

    setSelectedPrescription(prescription);

  };


  // =========================
  // OPEN EDIT MODAL
  // =========================

  const handleEdit = (prescription) => {

    setEditPrescription(prescription);

    setPrescriptionForm({
      patient: prescription.patient || "",
      doctor: prescription.doctor || "",
      medicine: prescription.medicine || "",
      dosage: prescription.dosage || "",
      frequency: prescription.frequency || "",
      duration: prescription.duration || "",
      instructions: prescription.instructions || "",
      status: prescription.status || "Active"
    });

  };


  // =========================
  // UPDATE PRESCRIPTION
  // =========================

  const handleUpdatePrescription = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `https://hospital-management-system-coral-two.vercel.app/prescriptions/${editPrescription._id}`,
        prescriptionForm
      );

      alert("Prescription updated successfully");

      setEditPrescription(null);

      setPrescriptionForm({
        patient: "",
        doctor: "",
        medicine: "",
        dosage: "",
        frequency: "",
        duration: "",
        instructions: "",
        status: "Active"
      });

      fetchPrescriptions();

    } catch (error) {

      console.log(
        "Error updating prescription:",
        error
      );

      alert("Failed to update prescription");

    }

  };


  // =========================
  // DELETE PRESCRIPTION
  // =========================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this prescription?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `https://hospital-management-system-coral-two.vercel.app/prescriptions/${id}`
      );

      alert("Prescription deleted successfully");

      fetchPrescriptions();

    } catch (error) {

      console.log(
        "Error deleting prescription:",
        error
      );

      alert("Failed to delete prescription");

    }

  };


  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {

    setPrescriptionForm({
      patient: "",
      doctor: "",
      medicine: "",
      dosage: "",
      frequency: "",
      duration: "",
      instructions: "",
      status: "Active"
    });

  };


  return (

    <div className="dashboard-layout">

      <AdminSidebar />

      <main className="dashboard-content">

        <div className="prescriptions-page">


          {/* =========================
              HEADER
          ========================= */}

          <div className="prescriptions-header">

            <div>

              <h1>Prescriptions</h1>

              <p>
                Manage patient prescriptions
              </p>

            </div>


            <button
              className="add-prescription-btn"
              onClick={() => {
                resetForm();
                setShowAddModal(true);
              }}
            >
              + Add Prescription
            </button>

          </div>


          {/* =========================
              STATISTICS
          ========================= */}

          <div className="prescription-stats">

            <div className="prescription-stat-card">

              <h3>
                Total Prescriptions
              </h3>

              <h2>
                {prescriptions.length}
              </h2>

            </div>


            <div className="prescription-stat-card">

              <h3>
                Active Prescriptions
              </h3>

              <h2>

                {
                  prescriptions.filter(
                    (prescription) =>
                      prescription.status === "Active"
                  ).length
                }

              </h2>

            </div>

          </div>


          {/* =========================
              TABLE
          ========================= */}

          <div className="prescriptions-table-box">

            <table className="prescriptions-table">

              <thead>

                <tr>

                  <th>Patient</th>

                  <th>Doctor</th>

                  <th>Medicine</th>

                  <th>Dosage</th>

                  <th>Frequency</th>

                  <th>Duration</th>

                  <th>Status</th>

                  <th>Actions</th>

                </tr>

              </thead>


              <tbody>

                {prescriptions.length === 0 ? (

                  <tr>

                    <td
                      colSpan="8"
                      className="no-prescriptions"
                    >
                      No prescriptions found
                    </td>

                  </tr>

                ) : (

                  prescriptions.map(
                    (prescription) => (

                      <tr
                        key={prescription._id}
                      >

                        <td>
                          {prescription.patient}
                        </td>

                        <td>
                          {prescription.doctor}
                        </td>

                        <td>
                          {prescription.medicine}
                        </td>

                        <td>
                          {prescription.dosage}
                        </td>

                        <td>
                          {prescription.frequency}
                        </td>

                        <td>
                          {prescription.duration}
                        </td>

                        <td>

                          <span
                            className={`prescription-status ${
                              prescription.status?.toLowerCase()
                            }`}
                          >
                            {prescription.status}
                          </span>

                        </td>

                        <td>

                          <button
                            className="prescription-view-btn"
                            onClick={() =>
                              handleView(prescription)
                            }
                          >
                            View
                          </button>


                          <button
                            className="prescription-edit-btn"
                            onClick={() =>
                              handleEdit(prescription)
                            }
                          >
                            Edit
                          </button>


                          <button
                            className="prescription-delete-btn"
                            onClick={() =>
                              handleDelete(
                                prescription._id
                              )
                            }
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>


          {/* =========================
              ADD PRESCRIPTION MODAL
          ========================= */}

          {showAddModal && (

            <div className="prescription-modal-overlay">

              <div className="prescription-modal">

                <div className="prescription-modal-header">

                  <div>

                    <h2>
                      Add Prescription
                    </h2>

                    <p>
                      Create a new patient prescription
                    </p>

                  </div>


                  <button
                    className="prescription-close-btn"
                    onClick={() =>
                      setShowAddModal(false)
                    }
                  >
                    ×
                  </button>

                </div>


                <form
                  onSubmit={handleAddPrescription}
                >

                  <div className="prescription-form-grid">


                    <div className="prescription-form-group">

                      <label>
                        Patient
                      </label>

                      <input
                        type="text"
                        name="patient"
                        value={prescriptionForm.patient}
                        onChange={handleChange}
                        placeholder="Enter patient name"
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Doctor
                      </label>

                      <input
                        type="text"
                        name="doctor"
                        value={prescriptionForm.doctor}
                        onChange={handleChange}
                        placeholder="Enter doctor name"
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Medicine
                      </label>

                      <input
                        type="text"
                        name="medicine"
                        value={prescriptionForm.medicine}
                        onChange={handleChange}
                        placeholder="Enter medicine"
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Dosage
                      </label>

                      <input
                        type="text"
                        name="dosage"
                        value={prescriptionForm.dosage}
                        onChange={handleChange}
                        placeholder="e.g. 500 mg"
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Frequency
                      </label>

                      <input
                        type="text"
                        name="frequency"
                        value={prescriptionForm.frequency}
                        onChange={handleChange}
                        placeholder="e.g. Twice a day"
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Duration
                      </label>

                      <input
                        type="text"
                        name="duration"
                        value={prescriptionForm.duration}
                        onChange={handleChange}
                        placeholder="e.g. 5 days"
                        required
                      />

                    </div>


                    <div className="prescription-form-group full-width">

                      <label>
                        Instructions
                      </label>

                      <textarea
                        name="instructions"
                        value={prescriptionForm.instructions}
                        onChange={handleChange}
                        placeholder="Enter medicine instructions"
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Status
                      </label>

                      <select
                        name="status"
                        value={prescriptionForm.status}
                        onChange={handleChange}
                      >

                        <option value="Active">
                          Active
                        </option>

                        <option value="Completed">
                          Completed
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="prescription-form-actions">

                    <button
                      type="button"
                      className="prescription-cancel-btn"
                      onClick={() =>
                        setShowAddModal(false)
                      }
                    >
                      Cancel
                    </button>


                    <button
                      type="submit"
                      className="prescription-save-btn"
                    >
                      Save Prescription
                    </button>

                  </div>

                </form>

              </div>

            </div>

          )}


          {/* =========================
              VIEW MODAL
          ========================= */}

          {selectedPrescription && (

            <div className="prescription-modal-overlay">

              <div className="prescription-modal">

                <div className="prescription-modal-header">

                  <div>

                    <h2>
                      Prescription Details
                    </h2>

                    <p>
                      Complete prescription information
                    </p>

                  </div>


                  <button
                    className="prescription-close-btn"
                    onClick={() =>
                      setSelectedPrescription(null)
                    }
                  >
                    ×
                  </button>

                </div>


                <div className="prescription-details">


                  <div>

                    <strong>
                      Patient
                    </strong>

                    <p>
                      {selectedPrescription.patient}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Doctor
                    </strong>

                    <p>
                      {selectedPrescription.doctor}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Medicine
                    </strong>

                    <p>
                      {selectedPrescription.medicine}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Dosage
                    </strong>

                    <p>
                      {selectedPrescription.dosage}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Frequency
                    </strong>

                    <p>
                      {selectedPrescription.frequency}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Duration
                    </strong>

                    <p>
                      {selectedPrescription.duration}
                    </p>

                  </div>


                  <div>

                    <strong>
                      Status
                    </strong>

                    <p>
                      {selectedPrescription.status}
                    </p>

                  </div>


                  <div className="prescription-detail-full">

                    <strong>
                      Instructions
                    </strong>

                    <p>
                      {selectedPrescription.instructions ||
                        "No instructions provided"}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* =========================
              EDIT MODAL
          ========================= */}

          {editPrescription && (

            <div className="prescription-modal-overlay">

              <div className="prescription-modal">

                <div className="prescription-modal-header">

                  <div>

                    <h2>
                      Edit Prescription
                    </h2>

                    <p>
                      Update prescription information
                    </p>

                  </div>


                  <button
                    className="prescription-close-btn"
                    onClick={() =>
                      setEditPrescription(null)
                    }
                  >
                    ×
                  </button>

                </div>


                <form
                  onSubmit={handleUpdatePrescription}
                >

                  <div className="prescription-form-grid">


                    <div className="prescription-form-group">

                      <label>
                        Patient
                      </label>

                      <input
                        type="text"
                        name="patient"
                        value={prescriptionForm.patient}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Doctor
                      </label>

                      <input
                        type="text"
                        name="doctor"
                        value={prescriptionForm.doctor}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Medicine
                      </label>

                      <input
                        type="text"
                        name="medicine"
                        value={prescriptionForm.medicine}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Dosage
                      </label>

                      <input
                        type="text"
                        name="dosage"
                        value={prescriptionForm.dosage}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Frequency
                      </label>

                      <input
                        type="text"
                        name="frequency"
                        value={prescriptionForm.frequency}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Duration
                      </label>

                      <input
                        type="text"
                        name="duration"
                        value={prescriptionForm.duration}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    <div className="prescription-form-group full-width">

                      <label>
                        Instructions
                      </label>

                      <textarea
                        name="instructions"
                        value={prescriptionForm.instructions}
                        onChange={handleChange}
                        placeholder="Enter medicine instructions"
                      />

                    </div>


                    <div className="prescription-form-group">

                      <label>
                        Status
                      </label>

                      <select
                        name="status"
                        value={prescriptionForm.status}
                        onChange={handleChange}
                      >

                        <option value="Active">
                          Active
                        </option>

                        <option value="Completed">
                          Completed
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </div>

                  </div>


                  <div className="prescription-form-actions">

                    <button
                      type="button"
                      className="prescription-cancel-btn"
                      onClick={() =>
                        setEditPrescription(null)
                      }
                    >
                      Cancel
                    </button>


                    <button
                      type="submit"
                      className="prescription-save-btn"
                    >
                      Update Prescription
                    </button>

                  </div>

                </form>

              </div>

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Prescriptions;