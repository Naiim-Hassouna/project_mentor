import AccountSetting from "../components/AccountSetting";
import AdminManage from "../components/AdminManage";
import LoginSignup from "../components/LoginSignup";
import React, { useState } from "react";

export default function Signup() {
  const [loggedin, setLoggedin] = useState("guest");

  return (
    <>
      {loggedin === "user" ? (
        <div>
          <AccountSetting />
        </div>
      ) : (
        <div></div>
      )}
      {loggedin === "guest" ? (
        <div>
          <LoginSignup />
        </div>
      ) : (
        <div></div>
      )}
      {loggedin === "admin" ? (
        <div>
          <AccountSetting />
          <AdminManage />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
