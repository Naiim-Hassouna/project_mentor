import React from "react";

export default function AccountSetting() {
  return (
    <div>
      <section className="section d-block">
        <h2>Personal Info</h2>
        <div className="options-container">
          <div>
            <label htmlFor="username">Change Username:     </label>
            <input type="text" id="username" placeholder="Old Username" />
            <br />
          </div>
        </div>
        <button>Save Changes</button>
      </section>

      <section className="section d-block">
        <div className="options-container">
          <div>
            <label htmlFor="bio">Change Bio:</label>
            <br />
            <input type="text" id="bio" placeholder="Type here..." />
          </div>
        </div>
        <button>Save Changes</button>
      </section>
    </div>
  );
}
