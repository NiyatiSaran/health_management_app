import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DietPlan from "./pages/DietPlanPage";

function App() {
  return (
    <Router>
      {/* Common layout */}
      <Navbar />
      <Sidebar />

      {/* Pages will render here */}
      <main style={{ marginLeft: "250px", padding: "20px", marginTop:"10px",   width: "calc(100% - 250px)"
}} className="page-content">
        <Routes>
         <Route path="/" element={<DashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/diet" element={<DietPlan />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
