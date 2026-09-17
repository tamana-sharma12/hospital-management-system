  import React from "react";
  import Home from "./pages/Home";
  import About from "./pages/About";
  import Doctor from "./pages/Doctors";
  import Department from "./pages/Departments";
  import Contact from "./pages/Contact";
  import Login from "./pages/Login";
  import Register from "./pages/Register";
  import DashboardAdmin from "./pages/Dashboard-admin";
  import PatientDashboard from "./pages/PatientDashboard";
  import DoctorDashboard from "./pages/DoctorDashboard";
  import ProtectedRoute from "./components/ProtectedRoute";
  import Patients from "./pages/Patients";
  import ManageDoctors from "./pages/ManageDoctors";
  import Appointments from "./pages/Appointments";
  import Prescriptions from "./pages/Prescriptions";
  import DoctorAppointments from "./pages/DoctorAppointments";
  import MyPatients from "./pages/MyPatients";
  import DoctorSchedule from "./pages/DoctorSchedule";
  import DoctorProfile from "./pages/DoctorProfile";
  import PatientAppointments from "./pages/PatientAppointments";
  import PatientPrescriptions from "./pages/PatientPrescriptions";
  import PatientDoctors from "./pages/PatientDoctors";
  import MedicalRecords from "./pages/MedicalRecords";
  import PatientProfile from "./pages/PatientProfile";
  import { Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    <Route
    path="/dashboard-admin"
    element={
      <ProtectedRoute>
        <DashboardAdmin />
      </ProtectedRoute>
    }
  />

  <Route
    path="/patient-dashboard"
    element={
      <ProtectedRoute>
        <PatientDashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/doctor-dashboard"
    element={
      <ProtectedRoute>
        <DoctorDashboard />
      </ProtectedRoute>
    }
  />
  <Route
    path="/patients"
    element={
      <ProtectedRoute>
        <Patients />
      </ProtectedRoute>
    }
  />
  <Route
    path="/manage-doctors"
    element={
      <ProtectedRoute>
        <ManageDoctors />
      </ProtectedRoute>
    }
  />
  <Route
    path="/appointments"
    element={
      <ProtectedRoute>
        <Appointments />
      </ProtectedRoute>
    }
  />
  <Route
    path="/prescriptions"
    element={
      <ProtectedRoute>
        <Prescriptions />
      </ProtectedRoute>
    }
  />

  <Route
    path="/doctor-appointments"
    element={
      <ProtectedRoute>
        <DoctorAppointments />
      </ProtectedRoute>
    }
  />
  <Route path="/my-patients" element={<ProtectedRoute>
    < MyPatients />
  </ProtectedRoute>} />

  <Route
    path="/doctor-schedule"
    element={
      <ProtectedRoute>
        <DoctorSchedule />
      </ProtectedRoute>
    }
  />
  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <DoctorProfile />
      </ProtectedRoute>
    }
  />
  <Route
    path="/patient-appointments"
    element={
      <ProtectedRoute>
        <PatientAppointments />
      </ProtectedRoute>
    }
  />
  <Route
    path="/patient-prescriptions"
    element={
      <ProtectedRoute>
        <PatientPrescriptions />
      </ProtectedRoute>
    }
  />
  <Route
  path="/patient-doctors"
  element={
    <ProtectedRoute>
      <PatientDoctors />
    </ProtectedRoute>
  }
/>
<Route
  path="/medical-records"
  element={
    <ProtectedRoute>
      <MedicalRecords />
    </ProtectedRoute>
  }
/>
<Route
  path="/patient-profile"
  element={
    <ProtectedRoute>
      <PatientProfile />
    </ProtectedRoute>
  }
/>
    </Routes>
    );
    
    
  }

  export default App;