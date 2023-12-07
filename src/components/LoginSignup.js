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

  const handleSubmit = () => {
    // Perform login or signup logic based on the current action and credentials
    if (action === "Login") {
      // Implement login logic
      console.log("Logging in with:", credentials);
    } else {
      // Implement signup logic
      if (credentials.password === credentials.confirmPassword) {
        console.log("Signing up with:", credentials);
      } else {
        console.error("Passwords do not match");
        // You may want to handle the case where passwords do not match
      }
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
