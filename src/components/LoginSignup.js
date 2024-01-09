import user_icon from "../loginFormAssets/person.png";
import email_icon from "../loginFormAssets/email.png";
import password_icon from "../loginFormAssets/password.png";

import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign up");
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // New state for confirm password
  });

  const handleSubmit = async () => {
    try {
      // Perform login or signup logic based on the current action and credentials
      if (action === "Login") {
        const response = await fetch('http://localhost/projectmentor_server/login.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        if (response.ok) {
          console.log('User logged in successfully');
          // Handle session creation here
        } else {
          console.error('Failed to log in');
        }
      } else {
        // Implement signup logic
        if (credentials.password === credentials.confirmPassword) {
          const queryParams = new URLSearchParams(credentials);
          const response = await fetch(
            `http://localhost/projectmentor_server/registration.php?${queryParams.toString()}`,
            {
              method: 'GET',
            }
          );

          if (response.ok) {
            console.log('User registered successfully');
            // You can add additional logic here if needed
          } else {
            console.error('Failed to register user');
          }
        } else {
          console.error("Passwords do not match");
          // You may want to handle the case where passwords do not match
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const switchAction = () => {
    // Switch between "Login" and "Sign up" actions
    setAction((prevAction) => (prevAction === "Login" ? "Sign up" : "Login"));
    // Clear input fields when switching actions
    setCredentials({
      username: "",
      email: "",
      password: "",
      confirmPassword: "", // Clear confirm password on switch
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="form-text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          // Login form
          <div>
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <br />
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <br />
            <div className="forgot-password">
              Forgot Password? <span>Click Here</span>
            </div>
          </div>
        ) : (
          // Signup form
          <div>
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
            <br />
            <div className="input">
              <img src={email_icon} alt="" />
              <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <br />
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <br />
            {/* New input for Confirm Password */}
            <div className="input">
              <img src={password_icon} alt="" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={credentials.confirmPassword}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <br />
          </div>
        )}
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSubmit}>
          {action}
        </div>
        <div className="switch-action" onClick={switchAction}>
          {action === "Login" ? (
            <>
              No Account?
              <br />
              Signup!
            </>
          ) : (
            <>
              Have Account?
              <br />
              Login!
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
