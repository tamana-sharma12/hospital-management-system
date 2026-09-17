import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-icon">✚</span>
          Healthcare
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
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

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span>GET IN TOUCH</span>

          <h1>
            We're Here to
            <strong> Help You</strong>
          </h1>

          <p>
            Have a question or need medical assistance?
            Our healthcare team is always ready to help you.
          </p>

        </div>

      </section>


      {/* ================= CONTACT INFO ================= */}

      <section className="contact-section">

        <div className="contact-info">

          <span className="section-small-title">
            CONTACT US
          </span>

          <h2>
            Let's Talk About
            <span> Your Health</span>
          </h2>

          <p>
            Reach out to us for appointments, general inquiries
            or any healthcare-related assistance.
          </p>


          <div className="contact-info-card">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <h3>Our Location</h3>
              <p>
                Chandigarh, Punjab, India
              </p>
            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <h3>Phone Number</h3>
              <p>
                +91 98765 43210
              </p>
            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h3>Email Address</h3>
              <p>
                healthcare@example.com
              </p>
            </div>

          </div>


          <div className="contact-info-card">

            <div className="contact-icon">
              ◷
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>
                Monday - Sunday: 24/7
              </p>
            </div>

          </div>

        </div>


        {/* ================= FORM ================= */}

        <div className="contact-form-box">

          <div className="form-heading">

            <span>SEND US A MESSAGE</span>

            <h2>
              How Can We Help?
            </h2>

            <p>
              Fill in the form and our team will get back
              to you as soon as possible.
            </p>

          </div>


          <form>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                />

              </div>


              <div className="form-group">

                <label>
                  Department
                </label>

                <select>

                  <option>
                    Select Department
                  </option>

                  <option>
                    Cardiology
                  </option>

                  <option>
                    Neurology
                  </option>

                  <option>
                    Orthopedics
                  </option>

                  <option>
                    Pediatrics
                  </option>

                  <option>
                    Dermatology
                  </option>

                  <option>
                    General Medicine
                  </option>

                </select>

              </div>

            </div>


            <div className="form-group">

              <label>
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="send-message-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* ================= EMERGENCY ================= */}

      <section className="contact-emergency">

        <div className="emergency-icon">
          ✚
        </div>

        <div>

          <span>
            MEDICAL EMERGENCY
          </span>

          <h2>
            Need Immediate Medical Assistance?
          </h2>

          <p>
            Our emergency department is available 24 hours
            a day, 7 days a week.
          </p>

        </div>

        <a href="tel:108">
          Call 108
        </a>

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
          <Link to="/departments">Departments</Link>

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

export default Contact;