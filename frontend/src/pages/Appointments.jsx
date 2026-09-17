import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./Dashboard-admin.css";
import "./Appointments.css";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  // Add Appointment Modal
  const [showAddModal, setShowAddModal] = useState(false);

  // View Appointment Modal
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Edit Appointment Modal
  const [editAppointment, setEditAppointment] = useState(null);

  // Add Appointment Form
  const [appointmentForm, setAppointmentForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
    status: "Pending",
  });

  // Get appointments
  useEffect(() => {
    getAppointments();
  }, []);

  const getAppointments = async () => {
    try {
      const response = await axios.get(
        "https://hospital-management-system-coral-two.vercel.app/appointments"
      );

      setAppointments(response.data.appointments);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch appointments");
    }
  };

  // =========================
  // ADD APPOINTMENT
  // =========================

  const handleAppointmentChange = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value,
    });
  };

  const addAppointment = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://hospital-management-system-coral-two.vercel.app/appointments",
        appointmentForm
      );

      alert("Appointment added successfully");

      setAppointmentForm({
        patient: "",
        doctor: "",
        date: "",
        time: "",
        reason: "",
        status: "Pending",
      });

      setShowAddModal(false);

      getAppointments();
    } catch (error) {
      console.log(error);
      alert("Failed to add appointment");
    }
  };

  // =========================
  // DELETE APPOINTMENT
  // =========================

  const deleteAppointment = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
`https://hospital-management-system-coral-two.vercel.app/appointments/${id}`
      );

      alert("Appointment deleted successfully");

      getAppointments();
    } catch (error) {
      console.log(error);
      alert("Failed to delete appointment");
    }
  };

  // =========================
  // EDIT APPOINTMENT
  // =========================

  const handleEditChange = (e) => {
    setEditAppointment({
      ...editAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const updateAppointment = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://hospital-management-system-coral-two.vercel.app/appointments/${id}`,
        
        {
          patient: editAppointment.patient,
          doctor: editAppointment.doctor,
          date: editAppointment.date,
          time: editAppointment.time,
          reason: editAppointment.reason,
          status: editAppointment.status,
        }
      );

      alert("Appointment updated successfully");

      setEditAppointment(null);

      getAppointments();
    } catch (error) {
      console.log(error);
      alert("Failed to update appointment");
    }
  };

  return (
    <div className="dashboard">

      <AdminSidebar />

      <main className="dashboard-content">

        <div className="appointments-page">

          {/* =========================
              HEADER
          ========================= */}

          <div className="appointments-header">

            <div>
              <h1>Appointments</h1>

              <p>
                Manage all hospital appointments
              </p>
            </div>

            <button
              className="add-appointment-btn"
              onClick={() => setShowAddModal(true)}
            >
              + Add Appointment
            </button>

          </div>


          {/* =========================
              STATISTICS
          ========================= */}

          <div className="appointment-stats">

            <div className="appointment-stat-card">

              <h3>Total Appointments</h3>

              <h2>{appointments.length}</h2>

            </div>

          </div>


          {/* =========================
              APPOINTMENTS TABLE
          ========================= */}

          <div className="appointments-table-box">

            <table className="appointments-table">

              <thead>

                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {appointments.length === 0 ? (

                  <tr>

                    <td
                      colSpan="7"
                      className="no-appointments"
                    >
                      No appointments found
                    </td>

                  </tr>

                ) : (

                  appointments.map((appointment) => (

                    <tr key={appointment._id}>

                      <td>
                        {appointment.patient}
                      </td>

                      <td>
                        {appointment.doctor}
                      </td>

                      <td>
                        {appointment.date}
                      </td>

                      <td>
                        {appointment.time}
                      </td>

                      <td>
                        {appointment.reason}
                      </td>

                      <td>

                        <span className="appointment-status">
                          {appointment.status}
                        </span>

                      </td>

                      <td>

                        {/* VIEW */}

                        <button
                          className="appointment-view-btn"
                          onClick={() =>
                            setSelectedAppointment(appointment)
                          }
                        >
                          View
                        </button>


                        {/* EDIT */}

                        <button
                          className="appointment-edit-btn"
                          onClick={() =>
                            setEditAppointment(appointment)
                          }
                        >
                          Edit
                        </button>


                        {/* DELETE */}

                        <button
                          className="appointment-delete-btn"
                          onClick={() =>
                            deleteAppointment(appointment._id)
                          }
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>


        {/* ==================================================
            ADD APPOINTMENT MODAL
        ================================================== */}

        {showAddModal && (

          <div className="appointment-modal-overlay">

            <div className="appointment-modal">

              <div className="appointment-modal-header">

                <div>
                  <h2>Add Appointment</h2>
                  <p>Create a new hospital appointment</p>
                </div>

                <button
                  className="appointment-close-btn"
                  onClick={() => setShowAddModal(false)}
                >
                  ×
                </button>

              </div>


              <form
                className="appointment-form"
                onSubmit={addAppointment}
              >

                <div className="appointment-form-grid">

                  <div className="appointment-form-group">

                    <label>Patient Name</label>

                    <input
                      type="text"
                      name="patient"
                      value={appointmentForm.patient}
                      onChange={handleAppointmentChange}
                      placeholder="Enter patient name"
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Doctor Name</label>

                    <input
                      type="text"
                      name="doctor"
                      value={appointmentForm.doctor}
                      onChange={handleAppointmentChange}
                      placeholder="Enter doctor name"
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Date</label>

                    <input
                      type="date"
                      name="date"
                      value={appointmentForm.date}
                      onChange={handleAppointmentChange}
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Time</label>

                    <input
                      type="time"
                      name="time"
                      value={appointmentForm.time}
                      onChange={handleAppointmentChange}
                      required
                    />

                  </div>


                  <div className="appointment-form-group full-width">

                    <label>Reason</label>

                    <textarea
                      name="reason"
                      value={appointmentForm.reason}
                      onChange={handleAppointmentChange}
                      placeholder="Enter appointment reason"
                      rows="4"
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Status</label>

                    <select
                      name="status"
                      value={appointmentForm.status}
                      onChange={handleAppointmentChange}
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
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


                <div className="appointment-form-actions">

                  <button
                    type="button"
                    className="appointment-cancel-btn"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="appointment-save-btn"
                  >
                    Save Appointment
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}


        {/* ==================================================
            VIEW APPOINTMENT MODAL
        ================================================== */}

        {selectedAppointment && (

          <div className="appointment-modal-overlay">

            <div className="appointment-modal">

              <div className="appointment-modal-header">

                <div>
                  <h2>Appointment Details</h2>
                  <p>View complete appointment information</p>
                </div>

                <button
                  className="appointment-close-btn"
                  onClick={() =>
                    setSelectedAppointment(null)
                  }
                >
                  ×
                </button>

              </div>


              <div className="appointment-details">

                <div>
                  <strong>Patient</strong>
                  <p>{selectedAppointment.patient}</p>
                </div>

                <div>
                  <strong>Doctor</strong>
                  <p>{selectedAppointment.doctor}</p>
                </div>

                <div>
                  <strong>Date</strong>
                  <p>{selectedAppointment.date}</p>
                </div>

                <div>
                  <strong>Time</strong>
                  <p>{selectedAppointment.time}</p>
                </div>

                <div>
                  <strong>Status</strong>
                  <p>{selectedAppointment.status}</p>
                </div>

                <div className="appointment-detail-full">
                  <strong>Reason</strong>
                  <p>{selectedAppointment.reason}</p>
                </div>

              </div>


              <div className="appointment-form-actions">

                <button
                  className="appointment-cancel-btn"
                  onClick={() =>
                    setSelectedAppointment(null)
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        )}


        {/* ==================================================
            EDIT APPOINTMENT MODAL
        ================================================== */}

        {editAppointment && (

          <div className="appointment-modal-overlay">

            <div className="appointment-modal">

              <div className="appointment-modal-header">

                <div>
                  <h2>Edit Appointment</h2>
                  <p>Update appointment information</p>
                </div>

                <button
                  className="appointment-close-btn"
                  onClick={() => setEditAppointment(null)}
                >
                  ×
                </button>

              </div>


              <form
                className="appointment-form"
                onSubmit={updateAppointment}
              >

                <div className="appointment-form-grid">

                  <div className="appointment-form-group">

                    <label>Patient Name</label>

                    <input
                      type="text"
                      name="patient"
                      value={editAppointment.patient}
                      onChange={handleEditChange}
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Doctor Name</label>

                    <input
                      type="text"
                      name="doctor"
                      value={editAppointment.doctor}
                      onChange={handleEditChange}
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Date</label>

                    <input
                      type="date"
                      name="date"
                      value={editAppointment.date}
                      onChange={handleEditChange}
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Time</label>

                    <input
                      type="time"
                      name="time"
                      value={editAppointment.time}
                      onChange={handleEditChange}
                      required
                    />

                  </div>


                  <div className="appointment-form-group full-width">

                    <label>Reason</label>

                    <textarea
                      name="reason"
                      value={editAppointment.reason}
                      onChange={handleEditChange}
                      rows="4"
                      required
                    />

                  </div>


                  <div className="appointment-form-group">

                    <label>Status</label>

                    <select
                      name="status"
                      value={editAppointment.status}
                      onChange={handleEditChange}
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
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


                <div className="appointment-form-actions">

                  <button
                    type="button"
                    className="appointment-cancel-btn"
                    onClick={() => setEditAppointment(null)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="appointment-save-btn"
                  >
                    Update Appointment
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default Appointments;