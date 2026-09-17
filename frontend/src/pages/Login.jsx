import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hospital-management-system-coral-two.vercel.app/login",
        {
          email: email,
          password: password,
        }
      );
     localStorage.setItem("login", "true");

localStorage.setItem(
  "user",
  JSON.stringify(response.data.user)
);

alert(response.data.message);

      if (response.data.user.role === "admin") {
  navigate("/dashboard-admin");
} 
else if (response.data.user.role === "doctor") {
  navigate("/doctor-dashboard");
} 
else if (response.data.user.role === "patient") {
  navigate("/patient-dashboard");
}

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-box">

        {/* LEFT SIDE */}
        <div className="login-left">

          <div className="brand">
            <div className="brand-symbol">+</div>

            <div>
              <h2>HealthCare</h2>
              <p>Hospital Management System</p>
            </div>
          </div>

          <div className="left-content">

            <span>QUALITY HEALTHCARE</span>

            <h1>
              Your Health,
              <br />
              <strong>Our Priority.</strong>
            </h1>

            <p>
              Providing trusted medical care with experienced
              doctors, modern technology and patient-focused
              services.
            </p>

          </div>

          <div className="care-info">

            <div>
              <strong>24/7</strong>
              <span>Emergency Care</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Expert Doctors</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Happy Patients</span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="login-right">

          <div className="login-heading">

            <span>WELCOME BACK</span>

            <h1>Login to your account</h1>

            <p>
              Enter your details to continue to HealthCare.
            </p>

          </div>


          {/* LOGIN FORM */}
          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="input-group">

              <label>Email Address</label>

              <div className="input-box">

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


            {/* PASSWORD */}
            <div className="input-group">

              <label>Password</label>

              <div className="input-box">

                <span>🔒</span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* OPTIONS */}
            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="#">
                Forgot Password?
              </Link>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-submit"
            >
              Login
              <span>→</span>
            </button>

          </form>


          {/* DIVIDER */}
          <div className="divider">
            <span>OR</span>
          </div>


          {/* REGISTER */}
          <p className="register-text">

            Don't have an account?

            <Link to="/register">
              {" "}Create Account
            </Link>

          </p>


          {/* HOME */}
          <Link
            to="/"
            className="back-home"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;