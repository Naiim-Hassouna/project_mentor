import AccountSetting from "../components/AccountSetting";
import LoginSignup from "../components/LoginSignup";
import React, { useState } from "react";

export default function Signup() {
  const [loggedin, setLoggedin] = useState("user");

  return (
    <>
      {loggedin === "user" ? (
        <div>
          <AccountSetting />
        </div>
      ) :  (  <div></div>
      )}
      {loggedin === "guest" ? (
        <div>
          <LoginSignup />
        </div>
      ) :  (  <div></div>
      )}
    </>
  );
}
