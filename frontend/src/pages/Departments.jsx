import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./Departments.css";

function Departments() {
  const [departments, setDepartments] = useState([]);

  // Add Modal
  const [showAddModal, setShowAddModal] = useState(false);

  // View Modal
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  // Edit Modal
  const [editDepartment, setEditDepartment] = useState(null);

  // Add Form
  const [departmentForm, setDepartmentForm] = useState({
    name: "",
    headDoctor: "",
    description: "",
    status: "Active"
  });


  // =========================
  // GET DEPARTMENTS
  // =========================

  useEffect(() => {
    getDepartments();
  }, []);


  const getDepartments = async () => {

    try {

      const response = await axios.get(
        "https://hospital-management-system-coral-two.vercel.app/departments"
      );

      setDepartments(response.data.departments);

    } catch (error) {

      console.log(error);
      alert("Failed to fetch departments");

    }

  };


  // =========================
  // ADD DEPARTMENT
  // =========================

  const handleDepartmentChange = (e) => {

    setDepartmentForm({
      ...departmentForm,
      [e.target.name]: e.target.value
    });

  };


  const addDepartment = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://hospital-management-system-coral-two.vercel.app/departments",
        departmentForm
      );

      alert("Department added successfully");

      setDepartmentForm({
        name: "",
        headDoctor: "",
        description: "",
        status: "Active"
      });

      setShowAddModal(false);

      getDepartments();

    } catch (error) {

      console.log(error);
      alert("Failed to add department");

    }

  };


  // =========================
  // DELETE DEPARTMENT
  // =========================

  const deleteDepartment = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
       `https://hospital-management-system-coral-two.vercel.app/departments/${id}`
      );

      alert("Department deleted successfully");

      getDepartments();

    } catch (error) {

      console.log(error);
      alert("Failed to delete department");

    }

  };


  // =========================
  // EDIT DEPARTMENT
  // =========================

  const handleEditChange = (e) => {

    setEditDepartment({
      ...editDepartment,
      [e.target.name]: e.target.value
    });

  };


  const updateDepartment = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
      `https://hospital-management-system-coral-two.vercel.app/departments/${editDepartment._id}`,
        {
          name: editDepartment.name,
          headDoctor: editDepartment.headDoctor,
          description: editDepartment.description,
          status: editDepartment.status
        }
      );

      alert("Department updated successfully");

      setEditDepartment(null);

      getDepartments();

    } catch (error) {

      console.log(error);
      alert("Failed to update department");

    }

  };


  return (

    <div className="dashboard">

      <AdminSidebar />

      <main className="dashboard-content">

        <div className="departments-page">


          {/* =========================
              HEADER
          ========================= */}

          <div className="departments-header">

            <div>

              <h1>Departments</h1>

              <p>
                Manage hospital departments
              </p>

            </div>


            <button
              className="add-department-btn"
              onClick={() => setShowAddModal(true)}
            >
              + Add Department
            </button>

          </div>


          {/* =========================
              STATISTICS
          ========================= */}

          <div className="department-stats">

            <div className="department-stat-card">

              <h3>Total Departments</h3>

              <h2>{departments.length}</h2>

            </div>

          </div>


          {/* =========================
              DEPARTMENT TABLE
          ========================= */}

          <div className="departments-table-box">

            <table className="departments-table">

              <thead>

                <tr>

                  <th>Department</th>
                  <th>Head Doctor</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>

                </tr>

              </thead>


              <tbody>

                {departments.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="no-departments"
                    >
                      No departments found
                    </td>

                  </tr>

                ) : (

                  departments.map((department) => (

                    <tr key={department._id}>

                      <td>
                        {department.name}
                      </td>

                      <td>
                        {department.headDoctor}
                      </td>

                      <td>
                        {department.description}
                      </td>

                      <td>

                        <span
                          className={
                            department.status === "Active"
                              ? "department-status active"
                              : "department-status inactive"
                          }
                        >
                          {department.status}
                        </span>

                      </td>


                      <td>

                        {/* VIEW */}

                        <button
                          className="department-view-btn"
                          onClick={() =>
                            setSelectedDepartment(department)
                          }
                        >
                          View
                        </button>


                        {/* EDIT */}

                        <button
                          className="department-edit-btn"
                          onClick={() =>
                            setEditDepartment(department)
                          }
                        >
                          Edit
                        </button>


                        {/* DELETE */}

                        <button
                          className="department-delete-btn"
                          onClick={() =>
                            deleteDepartment(department._id)
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


        {/* =================================================
            ADD DEPARTMENT MODAL
        ================================================= */}

        {showAddModal && (

          <div className="department-modal-overlay">

            <div className="department-modal">


              <div className="department-modal-header">

                <div>

                  <h2>Add Department</h2>

                  <p>
                    Create a new hospital department
                  </p>

                </div>


                <button
                  className="department-close-btn"
                  onClick={() =>
                    setShowAddModal(false)
                  }
                >
                  ×
                </button>

              </div>


              <form
                className="department-form"
                onSubmit={addDepartment}
              >

                <div className="department-form-grid">


                  <div className="department-form-group">

                    <label>
                      Department Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={departmentForm.name}
                      onChange={handleDepartmentChange}
                      placeholder="Enter department name"
                      required
                    />

                  </div>


                  <div className="department-form-group">

                    <label>
                      Head Doctor
                    </label>

                    <input
                      type="text"
                      name="headDoctor"
                      value={departmentForm.headDoctor}
                      onChange={handleDepartmentChange}
                      placeholder="Enter head doctor"
                      required
                    />

                  </div>


                  <div className="department-form-group full-width">

                    <label>
                      Description
                    </label>

                    <textarea
                      name="description"
                      value={departmentForm.description}
                      onChange={handleDepartmentChange}
                      placeholder="Enter department description"
                      rows="4"
                      required
                    />

                  </div>


                  <div className="department-form-group">

                    <label>
                      Status
                    </label>

                    <select
                      name="status"
                      value={departmentForm.status}
                      onChange={handleDepartmentChange}
                    >

                      <option value="Active">
                        Active
                      </option>

                      <option value="Inactive">
                        Inactive
                      </option>

                    </select>

                  </div>

                </div>


                <div className="department-form-actions">

                  <button
                    type="button"
                    className="department-cancel-btn"
                    onClick={() =>
                      setShowAddModal(false)
                    }
                  >
                    Cancel
                  </button>


                  <button
                    type="submit"
                    className="department-save-btn"
                  >
                    Save Department
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}


        {/* =================================================
            VIEW DEPARTMENT MODAL
        ================================================= */}

        {selectedDepartment && (

          <div className="department-modal-overlay">

            <div className="department-modal">


              <div className="department-modal-header">

                <div>

                  <h2>
                    Department Details
                  </h2>

                  <p>
                    View complete department information
                  </p>

                </div>


                <button
                  className="department-close-btn"
                  onClick={() =>
                    setSelectedDepartment(null)
                  }
                >
                  ×
                </button>

              </div>


              <div className="department-details">


                <div>

                  <strong>
                    Department
                  </strong>

                  <p>
                    {selectedDepartment.name}
                  </p>

                </div>


                <div>

                  <strong>
                    Head Doctor
                  </strong>

                  <p>
                    {selectedDepartment.headDoctor}
                  </p>

                </div>


                <div>

                  <strong>
                    Status
                  </strong>

                  <p>
                    {selectedDepartment.status}
                  </p>

                </div>


                <div className="department-detail-full">

                  <strong>
                    Description
                  </strong>

                  <p>
                    {selectedDepartment.description}
                  </p>

                </div>

              </div>


              <div className="department-form-actions">

                <button
                  className="department-cancel-btn"
                  onClick={() =>
                    setSelectedDepartment(null)
                  }
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        )}


        {/* =================================================
            EDIT DEPARTMENT MODAL
        ================================================= */}

        {editDepartment && (

          <div className="department-modal-overlay">

            <div className="department-modal">


              <div className="department-modal-header">

                <div>

                  <h2>
                    Edit Department
                  </h2>

                  <p>
                    Update department information
                  </p>

                </div>


                <button
                  className="department-close-btn"
                  onClick={() =>
                    setEditDepartment(null)
                  }
                >
                  ×
                </button>

              </div>


              <form
                className="department-form"
                onSubmit={updateDepartment}
              >

                <div className="department-form-grid">


                  <div className="department-form-group">

                    <label>
                      Department Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={editDepartment.name}
                      onChange={handleEditChange}
                      required
                    />

                  </div>


                  <div className="department-form-group">

                    <label>
                      Head Doctor
                    </label>

                    <input
                      type="text"
                      name="headDoctor"
                      value={editDepartment.headDoctor}
                      onChange={handleEditChange}
                      required
                    />

                  </div>


                  <div className="department-form-group full-width">

                    <label>
                      Description
                    </label>

                    <textarea
                      name="description"
                      value={editDepartment.description}
                      onChange={handleEditChange}
                      rows="4"
                      required
                    />

                  </div>


                  <div className="department-form-group">

                    <label>
                      Status
                    </label>

                    <select
                      name="status"
                      value={editDepartment.status}
                      onChange={handleEditChange}
                    >

                      <option value="Active">
                        Active
                      </option>

                      <option value="Inactive">
                        Inactive
                      </option>

                    </select>

                  </div>

                </div>


                <div className="department-form-actions">

                  <button
                    type="button"
                    className="department-cancel-btn"
                    onClick={() =>
                      setEditDepartment(null)
                    }
                  >
                    Cancel
                  </button>


                  <button
                    type="submit"
                    className="department-save-btn"
                  >
                    Update Department
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

export default Departments;