import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post(
      "https://hospital-management-system-coral-two.vercel.app/register",
      {
        name,
        email,
        phone,
        role,
        password,
      }
    );

    alert(response.data.message);

  } catch (error) {
    console.log(error);

    alert("Registration failed");
  }
};

  return (
    <div className="register-page">

      <div className="register-box">

        {/* ================= LEFT SIDE ================= */}

        <div className="register-left">

          <div className="register-brand">
            <div className="register-brand-icon">+</div>

            <div>
              <h2>HealthCare</h2>
              <p>Hospital Management System</p>
            </div>
          </div>


          <div className="register-left-content">

            <span>JOIN HEALTHCARE</span>

            <h1>
              Better Care,
              <br />
              <strong>Better Health.</strong>
            </h1>

            <p>
              Create your account and get access to quality
              healthcare services, appointments and more.
            </p>

          </div>


          <div className="register-features">

            <div>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Expert Doctors</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Patients Served</span>
            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="register-right">

          <div className="register-heading">

            <span>CREATE ACCOUNT</span>

            <h1>Get started with us</h1>

            <p>
              Fill in your details to create your HealthCare account.
            </p>

          </div>


          <form onSubmit={handleRegister}>

            {/* NAME + EMAIL */}

            <div className="register-row">

              <div className="register-input-group">

                <label>Full Name</label>

                <div className="register-input-box">
                  <span>◯</span>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

              </div>


              <div className="register-input-group">

                <label>Email Address</label>

                <div className="register-input-box">
                  <span>✉</span>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

              </div>

            </div>


            {/* PHONE + ROLE */}

            <div className="register-row">

              <div className="register-input-group">

                <label>Phone Number</label>

                <div className="register-input-box">
                  <span>☎</span>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

              </div>


              <div className="register-input-group">

                <label>Account Type</label>

                <div className="register-input-box">

                  <span>◉</span>

                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">
                      Select account type
                    </option>

                    <option value="patient">
                      Patient
                    </option>

                    <option value="doctor">
                      Doctor
                    </option>

                    <option value="admin">
                      Admin
                    </option>
                  </select>

                </div>

              </div>

            </div>


            {/* PASSWORD */}

            <div className="register-row">

              <div className="register-input-group">

                <label>Password</label>

                <div className="register-input-box">
                  <span>🔒</span>

                  <input
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

              </div>


              <div className="register-input-group">

                <label>Confirm Password</label>

                <div className="register-input-box">
                  <span>🔒</span>

                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    required
                  />
                </div>

              </div>

            </div>


            {/* TERMS */}

            <label className="terms">

              <input type="checkbox" required />

              <span>
                I agree to the
                <Link to="#"> Terms & Conditions</Link>
                {" "}and{" "}
                <Link to="#"> Privacy Policy</Link>.
              </span>

            </label>


            {/* REGISTER BUTTON */}

            <button
              type="submit"
              className="register-submit"
            >
              Create Account
              <span>→</span>
            </button>

          </form>


          <div className="register-login">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </div>


          <Link to="/" className="register-back-home">
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Register;