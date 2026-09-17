import React from "react";
import "./DoctorSchedule.css";
import DoctorSidebar from "../components/DoctorSidebar";

function DoctorSchedule() {
  const user = JSON.parse(localStorage.getItem("user"));

  const schedule = [
    {
      day: "Monday",
      timing: "09:00 AM - 01:00 PM",
      break: "01:00 PM - 02:00 PM",
      status: "Available",
    },
    {
      day: "Tuesday",
      timing: "09:00 AM - 01:00 PM",
      break: "01:00 PM - 02:00 PM",
      status: "Available",
    },
    {
      day: "Wednesday",
      timing: "02:00 PM - 06:00 PM",
      break: "06:00 PM - 06:30 PM",
      status: "Available",
    },
    {
      day: "Thursday",
      timing: "09:00 AM - 01:00 PM",
      break: "01:00 PM - 02:00 PM",
      status: "Available",
    },
    {
      day: "Friday",
      timing: "02:00 PM - 06:00 PM",
      break: "06:00 PM - 06:30 PM",
      status: "Available",
    },
    {
      day: "Saturday",
      timing: "09:00 AM - 12:00 PM",
      break: "12:00 PM - 12:30 PM",
      status: "Available",
    },
    {
      day: "Sunday",
      timing: "Closed",
      break: "-",
      status: "Off",
    },
  ];

  return (
    <div className="doctor-dashboard">

      <DoctorSidebar />

      <main className="doctor-content">

        <div className="doctor-header">

          <div>
            <p>DOCTOR PANEL</p>
            <h1>My Schedule</h1>
          </div>

          <div className="doctor-profile">

            <span>👨‍⚕️</span>

            <div>
              <strong>{user?.name}</strong>
              <small>Doctor</small>
            </div>

          </div>

        </div>

        <div className="schedule-intro">

          <div className="schedule-icon">
            🕐
          </div>

          <div>
            <h2>Weekly Schedule</h2>

            <p>
              Your regular consultation timings for the week
            </p>
          </div>

        </div>

        <div className="schedule-table-wrapper">

          <table className="schedule-table">

            <thead>
              <tr>
                <th>Day</th>
                <th>Consultation Time</th>
                <th>Break Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {schedule.map((item) => (

                <tr key={item.day}>

                  <td>
                    <strong>{item.day}</strong>
                  </td>

                  <td>
                    {item.timing}
                  </td>

                  <td>
                    {item.break}
                  </td>

                  <td>

                    <span
                      className={`schedule-status ${
                        item.status.toLowerCase()
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="schedule-note">

          <span>ℹ️</span>

          <div>
            <strong>Schedule Information</strong>

            <p>
              Please follow your scheduled consultation timings.
              For any changes in schedule, contact the hospital
              administration.
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default DoctorSchedule;