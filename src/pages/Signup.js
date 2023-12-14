import React from "react";
import AccountSetting from "../components/AccountSetting";
import AdminManage from "../components/AdminManage";
import LoginSignup from "../components/LoginSignup";

export default function Signup({ loggedin, setLoggedin }) {
  return (
    <>
      {loggedin === "user" ? (
        <div>
          <AccountSetting />
        </div>
      ) : null}
      {loggedin === "guest" ? (
        <div>
          <LoginSignup setLoggedin={setLoggedin} />
        </div>
      ) : null}
      {loggedin === "admin" ? (
        <div>
          <AccountSetting />
          <AdminManage />
        </div>
      ) : null}
    </>
  );
}
