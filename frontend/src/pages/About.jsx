import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✚</span>
          Healthcare
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about" className="active">
            About
          </Link>
          <Link to="/doctors">Doctors</Link>
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


      {/* ================= HERO SECTION ================= */}
      <section className="about-hero-section">

        <div className="about-hero-content">

          <div className="about-hero-left">

            <span className="about-label">
              ABOUT US
            </span>

            <h1>
              Compassionate Care,
              <br />
              <span>Better Health</span>
            </h1>

            <p>
              We are committed to providing high-quality healthcare
              with compassion, advanced technology and experienced
              medical professionals.
            </p>

            <div className="about-hero-buttons">

              <Link
                to="/contact"
                className="about-primary-btn"
              >
                Book an Appointment →
              </Link>

              <button className="story-button">
                ▶ &nbsp; Watch Our Story
              </button>

            </div>

          </div>


          {/* DOCTOR IMAGE */}
          <div className="about-hero-right">

            <div className="doctor-image-wrapper">

              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85"
                alt="Professional Doctor"
              />

            </div>


            <div className="health-priority-card">

              <div className="priority-icon">
                ♥
              </div>

              <div>
                <strong>Your Health</strong>
                <span>Our Priority</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="who-we-are-section">

        <div className="who-image-container">

          <img
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85"
            alt="Modern Hospital"
          />

          <div className="experience-badge">
            <strong>15+</strong>
            <span>Years of Experience</span>
          </div>

        </div>


        <div className="who-content">

          <span className="section-small-title">
            WHO WE ARE
          </span>

          <h2>
            We Care About Your
            <span> Health & Wellbeing</span>
          </h2>

          <p>
            Our hospital is dedicated to delivering exceptional
            healthcare services in a safe, comfortable and
            patient-friendly environment.
          </p>

          <p>
            With experienced doctors, modern medical technology
            and a caring team, we focus on providing personalized
            treatment for every patient.
          </p>


          <div className="about-check-list">

            <div>
              <span>✓</span>
              Experienced Medical Professionals
            </div>

            <div>
              <span>✓</span>
              Modern Medical Technology
            </div>

            <div>
              <span>✓</span>
              Patient-Centered Care
            </div>

            <div>
              <span>✓</span>
              24/7 Emergency Services
            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="about-stats-section">

        <div className="about-stat">
          <strong>50+</strong>
          <span>Expert Doctors</span>
        </div>

        <div className="about-stat">
          <strong>10K+</strong>
          <span>Happy Patients</span>
        </div>

        <div className="about-stat">
          <strong>15+</strong>
          <span>Years Experience</span>
        </div>

        <div className="about-stat">
          <strong>24/7</strong>
          <span>Emergency Care</span>
        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-section">

        <div className="why-intro">

          <span className="section-small-title">
            WHY CHOOSE US
          </span>

          <h2>
            Healthcare You Can
            <span> Trust</span>
          </h2>

          <p>
            We combine medical expertise, advanced technology
            and compassionate care to give our patients the
            best possible healthcare experience.
          </p>

          <Link
            to="/contact"
            className="learn-more-btn"
          >
            Learn More →
          </Link>

        </div>


        <div className="why-cards">

          <div className="why-card">

            <div className="why-icon">
              ♡
            </div>

            <h3>Expert Care</h3>

            <p>
              Our experienced doctors and healthcare professionals
              provide trusted medical treatment.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              ⚕
            </div>

            <h3>Modern Technology</h3>

            <p>
              Advanced medical equipment helps us provide
              accurate diagnosis and effective treatment.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              ♥
            </div>

            <h3>Patient First</h3>

            <p>
              Every decision we make focuses on your comfort,
              safety and wellbeing.
            </p>

          </div>

        </div>

      </section>


      {/* ================= MISSION ================= */}
      <section className="mission-section">

        <div className="mission-content">

          <span className="mission-label">
            OUR MISSION
          </span>

          <h2>
            Making Quality Healthcare
            <br />
            Accessible to Everyone
          </h2>

          <p>
            Our mission is to provide reliable, affordable and
            compassionate healthcare services while making every
            patient feel respected, safe and cared for.
          </p>

          <Link
            to="/contact"
            className="mission-button"
          >
            Book an Appointment →
          </Link>

        </div>


        <div className="mission-visual">

          <div className="big-heart">
            ♥
          </div>

          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

        </div>

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

export default About;