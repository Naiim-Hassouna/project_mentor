import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import ProjectDetails from "./pages/ProjectDetails"; 
import EditProject from "./pages/EditProject"; 

function App() {
  const [loggedin, setLoggedin] = useState("admin");

  const handleLogin = (status) => {
    setLoggedin(status);
  };

  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home loggedin={loggedin} />} />
          <Route path="/projects" element={<Projects loggedin={loggedin} />} />
          <Route path="/settings" element={<Settings loggedin={loggedin} />} />
          <Route path="/signup" element={<Signup loggedin={loggedin} setLoggedin={handleLogin} />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/edit-project/:id" element={<EditProject />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
