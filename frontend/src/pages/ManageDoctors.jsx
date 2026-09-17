import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./Dashboard-admin.css";
import "./ManageDoctors.css";

function ManageDoctors() {

  // Doctors list
  const [doctors, setDoctors] = useState([]);

  // Add Doctor modal
  const [showAddDoctor, setShowAddDoctor] = useState(false);

  // View Doctor modal
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Edit Doctor modal
  const [editDoctor, setEditDoctor] = useState(null);

  // Add Doctor form
  const [doctorForm, setDoctorForm] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
    gender: "",
    department: ""
  });


  // =========================
  // GET DOCTORS
  // =========================

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

      console.log(error);
      alert("Failed to fetch doctors");

    }

  };


  // =========================
  // ADD DOCTOR FORM CHANGE
  // =========================

  const handleDoctorChange = (e) => {

    setDoctorForm({
      ...doctorForm,
      [e.target.name]: e.target.value
    });

  };


  // =========================
  // ADD DOCTOR
  // =========================

  const handleAddDoctor = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://hospital-management-system-coral-two.vercel.app/doctors",
        {
          name: doctorForm.name,
          email: doctorForm.email,
          phone: doctorForm.phone,
          specialization: doctorForm.specialization,
          experience: doctorForm.experience,
          gender: doctorForm.gender,
          department: doctorForm.department
        }
      );

      alert(response.data.message);

      // Form reset
      setDoctorForm({
        name: "",
        email: "",
        phone: "",
        specialization: "",
        experience: "",
        gender: "",
        department: ""
      });

      // Modal close
      setShowAddDoctor(false);

      // Doctors list refresh
      getDoctors();

    } catch (error) {

      console.log(error);
      alert("Doctor registration failed");

    }

  };


  // =========================
  // VIEW DOCTOR
  // =========================

  const handleView = (doctor) => {

    setSelectedDoctor(doctor);

  };


  // =========================
  // EDIT DOCTOR
  // =========================

  const handleEdit = (doctor) => {

    setEditDoctor(doctor);

  };


  // =========================
  // EDIT FORM CHANGE
  // =========================

  const handleEditChange = (e) => {

    setEditDoctor({
      ...editDoctor,
      [e.target.name]: e.target.value
    });

  };


  // =========================
  // UPDATE DOCTOR
  // =========================

  const handleUpdateDoctor = async () => {

    try {

      const response = await axios.put(
        `https://hospital-management-system-coral-two.vercel.app/doctors/${editDoctor._id}`,
        {
          name: editDoctor.name,
          email: editDoctor.email,
          phone: editDoctor.phone,
          specialization: editDoctor.specialization,
          experience: editDoctor.experience,
          gender: editDoctor.gender,
          department: editDoctor.department
        }
      );

      alert(response.data.message);

      setDoctors(
        doctors.map((doctor) =>
          doctor._id === editDoctor._id
            ? response.data.doctor
            : doctor
        )
      );

      setEditDoctor(null);

    } catch (error) {

      console.log(error);
      alert("Failed to update doctor");

    }

  };


  // =========================
  // DELETE DOCTOR
  // =========================

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      const response = await axios.delete(
       `https://hospital-management-system-coral-two.vercel.app/doctors/${editDoctor._id}`
      );

      alert(response.data.message);

      setDoctors(
        doctors.filter((doctor) => doctor._id !== id)
      );

    } catch (error) {

      console.log(error);
      alert("Failed to delete doctor");

    }

  };


  return (

    <div className="dashboard">

      {/* Sidebar */}
      <AdminSidebar />


      <main className="dashboard-content">

        <div className="manage-doctors-page">


          {/* =========================
              HEADER
          ========================= */}

          <div className="doctors-header">

            <div>

              <h1>Manage Doctors</h1>

              <p>
                View and manage all registered doctors
              </p>

            </div>


            <button
              className="add-doctor-btn"
              onClick={() => setShowAddDoctor(true)}
            >
              + Add Doctor
            </button>

          </div>



          {/* =========================
              STATISTICS
          ========================= */}

          <div className="doctor-stats">

            <div className="doctor-stat-card">

              <h3>Total Doctors</h3>

              <h2>{doctors.length}</h2>

            </div>

          </div>



          {/* =========================
              DOCTORS TABLE
          ========================= */}

          <div className="doctors-table-box">

            <table className="doctors-table">

              <thead>

                <tr>

                  <th>Doctor Name</th>

                  <th>Email</th>

                  <th>Phone</th>

                  <th>Specialization</th>

                  <th>Experience</th>

                  <th>Gender</th>

                  <th>Department</th>

                  <th>Action</th>

                </tr>

              </thead>


              <tbody>

                {doctors.length === 0 ? (

                  <tr>

                    <td
                      colSpan="8"
                      className="no-doctors"
                    >
                      No doctors registered yet
                    </td>

                  </tr>

                ) : (

                  doctors.map((doctor) => (

                    <tr key={doctor._id}>

                      <td className="doctor-name">
                        {doctor.name}
                      </td>

                      <td>
                        {doctor.email}
                      </td>

                      <td>
                        {doctor.phone}
                      </td>

                      <td>

                        <span className="specialization-badge">
                          {doctor.specialization}
                        </span>

                      </td>

                      <td>
                        {doctor.experience} Years
                      </td>

                      <td>

                        <span className="doctor-gender">
                          {doctor.gender}
                        </span>

                      </td>

                      <td>
                        {doctor.department}
                      </td>

                      <td>

                        <button
                          className="doctor-view-btn"
                          onClick={() => handleView(doctor)}
                        >
                          View
                        </button>


                        <button
                          className="doctor-edit-btn"
                          onClick={() => handleEdit(doctor)}
                        >
                          Edit
                        </button>


                        <button
                          className="doctor-delete-btn"
                          onClick={() => handleDelete(doctor._id)}
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



          {/* =========================
              ADD DOCTOR MODAL
          ========================= */}

          {showAddDoctor && (

            <div className="doctor-modal-overlay">

              <div className="doctor-modal">

                <div className="doctor-modal-header">

                  <h2>Add New Doctor</h2>

                  <button
                    className="modal-close-btn"
                    onClick={() => setShowAddDoctor(false)}
                  >
                    ×
                  </button>

                </div>


                <form onSubmit={handleAddDoctor}>

                  <div className="doctor-form-grid">


                    <div className="form-group">

                      <label>
                        Doctor Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={doctorForm.name}
                        onChange={handleDoctorChange}
                        placeholder="Enter doctor name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={doctorForm.email}
                        onChange={handleDoctorChange}
                        placeholder="Enter email"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Phone
                      </label>

                      <input
                        type="text"
                        name="phone"
                        value={doctorForm.phone}
                        onChange={handleDoctorChange}
                        placeholder="Enter phone number"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Specialization
                      </label>

                      <input
                        type="text"
                        name="specialization"
                        value={doctorForm.specialization}
                        onChange={handleDoctorChange}
                        placeholder="e.g. Cardiologist"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Experience
                      </label>

                      <input
                        type="number"
                        name="experience"
                        value={doctorForm.experience}
                        onChange={handleDoctorChange}
                        placeholder="Years"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label>
                        Gender
                      </label>

                      <select
                        name="gender"
                        value={doctorForm.gender}
                        onChange={handleDoctorChange}
                        required
                      >

                        <option value="">
                          Select Gender
                        </option>

                        <option value="Male">
                          Male
                        </option>

                        <option value="Female">
                          Female
                        </option>

                      </select>

                    </div>


                    <div className="form-group">

                      <label>
                        Department
                      </label>

                      <input
                        type="text"
                        name="department"
                        value={doctorForm.department}
                        onChange={handleDoctorChange}
                        placeholder="e.g. Cardiology"
                        required
                      />

                    </div>

                  </div>


                  <div className="doctor-form-actions">

                    <button
                      type="button"
                      className="cancel-btn"
                      onClick={() => setShowAddDoctor(false)}
                    >
                      Cancel
                    </button>


                    <button
                      type="submit"
                      className="save-doctor-btn"
                    >
                      Add Doctor
                    </button>

                  </div>

                </form>

              </div>

            </div>

          )}



          {/* =========================
              VIEW DOCTOR MODAL
          ========================= */}

          {selectedDoctor && (

            <div className="doctor-modal-overlay">

              <div className="doctor-modal">

                <div className="doctor-modal-header">

                  <h2>Doctor Details</h2>

                  <button
                    className="modal-close-btn"
                    onClick={() => setSelectedDoctor(null)}
                  >
                    ×
                  </button>

                </div>


                <div className="doctor-details">

                  <p>
                    <strong>Name:</strong>{" "}
                    {selectedDoctor.name}
                  </p>

                  <p>
                    <strong>Email:</strong>{" "}
                    {selectedDoctor.email}
                  </p>

                  <p>
                    <strong>Phone:</strong>{" "}
                    {selectedDoctor.phone}
                  </p>

                  <p>
                    <strong>Specialization:</strong>{" "}
                    {selectedDoctor.specialization}
                  </p>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {selectedDoctor.experience} Years
                  </p>

                  <p>
                    <strong>Gender:</strong>{" "}
                    {selectedDoctor.gender}
                  </p>

                  <p>
                    <strong>Department:</strong>{" "}
                    {selectedDoctor.department}
                  </p>

                </div>


                <div className="doctor-form-actions">

                  <button
                    className="cancel-btn"
                    onClick={() => setSelectedDoctor(null)}
                  >
                    Close
                  </button>

                </div>

              </div>

            </div>

          )}



          {/* =========================
              EDIT DOCTOR MODAL
          ========================= */}

          {editDoctor && (

            <div className="doctor-modal-overlay">

              <div className="doctor-modal">

                <div className="doctor-modal-header">

                  <h2>Edit Doctor</h2>

                  <button
                    className="modal-close-btn"
                    onClick={() => setEditDoctor(null)}
                  >
                    ×
                  </button>

                </div>


                <div className="doctor-form-grid">


                  <div className="form-group">

                    <label>
                      Doctor Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={editDoctor.name}
                      onChange={handleEditChange}
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={editDoctor.email}
                      onChange={handleEditChange}
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Phone
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={editDoctor.phone}
                      onChange={handleEditChange}
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Specialization
                    </label>

                    <input
                      type="text"
                      name="specialization"
                      value={editDoctor.specialization}
                      onChange={handleEditChange}
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Experience
                    </label>

                    <input
                      type="number"
                      name="experience"
                      value={editDoctor.experience}
                      onChange={handleEditChange}
                    />

                  </div>


                  <div className="form-group">

                    <label>
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={editDoctor.gender}
                      onChange={handleEditChange}
                    >

                      <option value="Male">
                        Male
                      </option>

                      <option value="Female">
                        Female
                      </option>

                    </select>

                  </div>


                  <div className="form-group">

                    <label>
                      Department
                    </label>

                    <input
                      type="text"
                      name="department"
                      value={editDoctor.department}
                      onChange={handleEditChange}
                    />

                  </div>

                </div>


                <div className="doctor-form-actions">

                  <button
                    className="cancel-btn"
                    onClick={() => setEditDoctor(null)}
                  >
                    Cancel
                  </button>


                  <button
                    className="save-doctor-btn"
                    onClick={handleUpdateDoctor}
                  >
                    Update Doctor
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

export default ManageDoctors;