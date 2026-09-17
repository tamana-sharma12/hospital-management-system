import React from "react";
import "./DoctorProfile.css";
import DoctorSidebar from "../components/DoctorSidebar";

function DoctorProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="doctor-dashboard">

      <DoctorSidebar />

      <main className="doctor-content">

        <div className="doctor-header">

          <div>
            <p>DOCTOR PANEL</p>
            <h1>My Profile</h1>
          </div>

          <div className="doctor-profile">

            <span>👨‍⚕️</span>

            <div>
              <strong>{user?.name}</strong>
              <small>Doctor</small>
            </div>

          </div>

        </div>

        <div className="profile-container">

          <div className="profile-top">

            <div className="profile-avatar">
              👨‍⚕️
            </div>

            <div>
              <h2>{user?.name || "Doctor"}</h2>
              <p>Medical Professional</p>
            </div>

          </div>

          <div className="profile-details">

            <div className="profile-item">
              <span>👤</span>
              <div>
                <small>Full Name</small>
                <strong>{user?.name || "Not Available"}</strong>
              </div>
            </div>

            <div className="profile-item">
              <span>📧</span>
              <div>
                <small>Email Address</small>
                <strong>{user?.email || "Not Available"}</strong>
              </div>
            </div>

            <div className="profile-item">
              <span>📞</span>
              <div>
                <small>Phone Number</small>
                <strong>{user?.phone || "Not Available"}</strong>
              </div>
            </div>

            <div className="profile-item">
              <span>🩺</span>
              <div>
                <small>Specialization</small>
                <strong>
                  {user?.specialization || "Not Available"}
                </strong>
              </div>
            </div>

            <div className="profile-item">
              <span>🏥</span>
              <div>
                <small>Department</small>
                <strong>
                  {user?.department || "Not Available"}
                </strong>
              </div>
            </div>

            <div className="profile-item">
              <span>💼</span>
              <div>
                <small>Experience</small>
                <strong>
                  {user?.experience
                    ? `${user.experience} Years`
                    : "Not Available"}
                </strong>
              </div>
            </div>

            <div className="profile-item">
              <span>⚧</span>
              <div>
                <small>Gender</small>
                <strong>
                  {user?.gender || "Not Available"}
                </strong>
              </div>
            </div>

            <div className="profile-item">
              <span>🔑</span>
              <div>
                <small>Role</small>
                <strong>
                  {user?.role || "Doctor"}
                </strong>
              </div>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default DoctorProfile;