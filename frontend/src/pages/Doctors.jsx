import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctors() {
const [doctors, setDoctors] = useState([]);

useEffect(() => {
  getDoctors();
}, []);

const getDoctors = async () => {
  try {
    const response = await axios.get("http://localhost:4000/doctors");
    setDoctors(response.data.doctors);
  } catch (error) {
    console.log("Doctors Fetch Error:", error);
  }
};

  return (
    <div className="doctors-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">✚</span>
          Healthcare
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doctors" className="active">
            Doctors
          </Link>
          <Link to="/departments">Departments</Link>
          <Link to="/contact">Contact</Link>
          
        </div>

        <div className="nav-buttons">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="doctors-hero">

        <div className="doctors-hero-content">

          <span className="doctors-label">
            OUR MEDICAL TEAM
          </span>

          <h1>
            Meet Our
            <span> Expert Doctors</span>
          </h1>

          <p>
            Our experienced team of doctors is dedicated to
            providing compassionate care and the best possible
            treatment for every patient.
          </p>

        </div>

      </section>


      {/* ================= DOCTORS SECTION ================= */}

      <section className="doctors-section">

        <div className="doctors-heading">

          <div>
            <span className="section-small-title">
              OUR SPECIALISTS
            </span>

            <h2>
              Experienced Doctors,
              <span> Trusted Care</span>
            </h2>
          </div>

          <p>
            Choose from our team of highly qualified medical
            professionals across different specialties.
          </p>

        </div>


        {/* DOCTOR CARDS */}

        <div className="doctors-grid">

          {doctors.map((doctor, index) => (

            <div className="doctor-card" key={index}>

              <div className="doctor-card-image">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                />

                <div className="doctor-rating">
                  ★ {doctor.rating}
                </div>

              </div>


              <div className="doctor-card-content">

               <span className="doctor-specialist">
  {doctor.specialization}
</span>

<h3>{doctor.name}</h3>

<p className="doctor-experience">
  {doctor.experience} Years Experience
</p>

<p className="doctor-department">
  Department: {doctor.department}
</p>
                <div className="doctor-card-buttons">

                  <button className="profile-btn">
                    View Profile
                  </button>

                  <Link
                    to="/contact"
                    className="appointment-btn"
                  >
                    Book Appointment
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="doctors-cta">

        <div>

          <span>NEED MEDICAL HELP?</span>

          <h2>
            Get the Right Care From
            <br />
            the Right Doctor
          </h2>

          <p>
            Book an appointment with one of our experienced
            doctors and take the first step towards better health.
          </p>

        </div>

        <Link
          to="/contact"
          className="cta-button"
        >
          Book an Appointment →
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="about-footer">

        <div>

          <h3>
            <span>✚</span> Healthcare
          </h3>

          <p>
            Caring for your health with compassion,
            technology and trust.
          </p>

        </div>


        <div>

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>

        </div>


        <div>

          <h4>Contact</h4>

          <p>📍 Chandigarh, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ healthcare@example.com</p>

        </div>

      </footer>

    </div>
  );
}

export default Doctors;