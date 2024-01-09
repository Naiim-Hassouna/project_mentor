import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Fetch user type after successful login
    const fetchUserType = async () => {
      try {
        const response = await fetch('http://localhost/projectmentor_server/get_user_type.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: loggedin }),
        });

        if (response.ok) {
          const result = await response.json();

          if (result.status === 'success') {
            // Update the user type in the state
            setLoggedin(result.type);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (loggedin !== 'guest') {
      fetchUserType();
    }
  }, [loggedin]);

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
