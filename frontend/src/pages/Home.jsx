import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const departments = [
    {
      icon: "❤️",
      name: "Cardiology",
      text: "Heart care for a healthier life.",
    },
    {
      icon: "🧠",
      name: "Neurology",
      text: "Expert care for brain & nervous system.",
    },
    {
      icon: "🦴",
      name: "Orthopedics",
      text: "Move better. Live better.",
    },
    {
      icon: "👶",
      name: "Pediatrics",
      text: "Healthy children, happy tomorrow.",
    },
    {
      icon: "👩",
      name: "Gynecology",
      text: "Complete women's healthcare.",
    },
    {
      icon: "✨",
      name: "Dermatology",
      text: "Healthy skin, confident you.",
    },
  ];

  const doctors = [
    {
      name: "Dr. Rahul Sharma",
      specialization: "Cardiologist",
      experience: "10 Years Experience",
      image: "👨‍⚕️",
    },
    {
      name: "Dr. Priya Verma",
      specialization: "Neurologist",
      experience: "8 Years Experience",
      image: "👩‍⚕️",
    },
    {
      name: "Dr. Amit Singh",
      specialization: "Orthopedic Surgeon",
      experience: "12 Years Experience",
      image: "👨‍⚕️",
    },
    {
      name: "Dr. Neha Gupta",
      specialization: "Pediatrician",
      experience: "7 Years Experience",
      image: "👩‍⚕️",
    },
  ];

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">✚</div>

          <div>
            <h2>HealthCare</h2>
            <p>Your Health Our Priority</p>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-buttons">
        <Link to="/login" className="login-btn">Login</Link>

<Link to="/register" className="register-btn">
  Register
</Link>
        </div>

      </nav>




      <section className="hero" id="home">

        <div className="hero-content">

          <span className="welcome">
            ❤️ Welcome to HealthCare Hospital
          </span>

          <h1>
            Better Health
            <br />
            <span>Brighter Future</span>
          </h1>

          <p>
            We provide high quality medical care with advanced
            technology and a team of experienced doctors.
            Your health and safety is our top priority.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              📅 Book Appointment
            </button>

            <button className="secondary-btn">
              Our Departments →
            </button>

          </div>

        </div>

        <div className="doctor-hero">

          <div className="doctor-circle">
            👩‍⚕️
          </div>

        </div>

      </section>


      

      <section className="features">

        <div className="feature">
          <div className="feature-icon">✚</div>

          <div>
            <h3>Expert Doctors</h3>
            <p>Highly qualified & experienced medical professionals.</p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">🛡️</div>

          <div>
            <h3>Advanced Technology</h3>
            <p>Modern equipment for accurate diagnosis & treatment.</p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">◷</div>

          <div>
            <h3>24/7 Emergency</h3>
            <p>Immediate care when you need it most.</p>
          </div>
        </div>


        <div className="feature">
          <div className="feature-icon">♡</div>

          <div>
            <h3>Patient First</h3>
            <p>Compassionate care for a healthier tomorrow.</p>
          </div>
        </div>

      </section>


      <section className="departments" id="departments">

        <div className="section-heading">

          <div>
            <span>Our Departments</span>

            <h2>Specialized Care for Every Need</h2>
          </div>

          <button className="view-btn">
            View All Departments →
          </button>

        </div>


        <div className="department-grid">

          {departments.map((department, index) => (

            <div className="department-card" key={index}>

              <div className="department-image">
                {department.icon}
              </div>

              <h3>{department.name}</h3>

              <p>{department.text}</p>

              <button>
                Learn More →
              </button>
            </div>

          ))}

        </div>

      </section>

      <section className="doctors" id="doctors">

        <div className="section-heading">

          <div>
            <span>Our Doctors</span>

            <h2>Meet Our Specialist Doctors</h2>
          </div>

          <button className="view-btn">
            View All Doctors →
          </button>

        </div>


        <div className="doctor-grid">

          {doctors.map((doctor, index) => (

            <div className="doctor-card" key={index}>

              <div className="doctor-image">
                {doctor.image}
              </div>

              <div className="doctor-info">

                <h3>{doctor.name}</h3>

                <p>{doctor.specialization}</p>

                <small>{doctor.experience}</small>

                <button>
                  Book Appointment
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      <section className="appointment" id="services">

        <div>
          <span>Need Medical Help?</span>

          <h2>
            Take Care of Your Health Today
          </h2>

          <p>
            Book an appointment with our experienced
            doctors and get the care you deserve.
          </p>
        </div>

        <button className="appointment-btn">
          Book an Appointment →
        </button>

      </section>


      <footer id="contact">

        <div className="footer-column brand">

          <div className="footer-logo">
            <div className="logo-icon">✚</div>

            <div>
              <h2>HealthCare</h2>
              <p>Your Health Our Priority</p>
            </div>
          </div>

          <p>
            Providing quality healthcare with
            compassion, technology and trust.
          </p>

        </div>


        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#departments">Departments</a>
          <a href="#doctors">Doctors</a>

        </div>


        <div className="footer-column">

          <h3>Contact Us</h3>

          <p>📞 +91 98765 43210</p>
          <p>✉️ info@healthcare.com</p>
          <p>📍 Mohali, Punjab</p>

        </div>


        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social">
            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
            <span>in</span>
          </div>

        </div>


        <div className="copyright">
          © 2026 HealthCare Hospital. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;