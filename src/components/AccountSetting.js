import React, { useState } from "react";

export default function AccountSetting() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value.slice(0, 30); // Limit to 30 characters
    setUsername(newUsername);
  };

  const [bio, setBio] = useState('');

  const handleBioChange = (event) => {
    const newBio = event.target.value.slice(0, 100); // Limit to 100 characters
    setBio(newBio);
  };

  const [review, setReview] = useState('');

  const handleReviewChange = (event) => {
    const newReview = event.target.value.slice(0, 500); // Limit to 500 characters
    setReview(newReview);
  };

  return (
    <div>
      <section className="section account-block">
        <h2 className="accountpageh2">Personal Info</h2>
        <div className="options-container">
          <div>
            <label htmlFor="username" className="label">
              Change Username ({username.length}/30)
            </label>
            <textarea
              id="username"
              className="username-input"
              placeholder="php Old Username..."
              value={username}
              onChange={handleUsernameChange}
              maxLength={30}
            ></textarea>
          </div>
        </div>
        <button className="accountinfo-save">Save</button>
      </section>

      <section className="section account-block">
        <div className="options-container">
          <div>
            <label htmlFor="bio" className="label">
              Change Bio ({bio.length}/100)
            </label>
            <textarea
              id="bio"
              className="bio-input"
              placeholder="Enter New Bio..."
              value={bio}
              onChange={handleBioChange}
              maxLength={100}
            ></textarea>
          </div>
        </div>
        <button className="accountinfo-save">Save</button>
      </section>

      <div><br/></div>
      
      <section className="section account-block">
        <h2 className="accountpageh2">Feedback</h2>
        <div className="options-container">
          <div>
            <label htmlFor="review" className="label">
              Send a Review ({review.length}/500)
            </label>
            <textarea
              id="review"
              className="bio-input"
              placeholder="Enter your review..."
              value={review}
              onChange={handleReviewChange}
              maxLength={500}
            ></textarea>
          </div>
        </div>
        <button className="accountinfo-save">Send</button>
      </section>

    </div>
  );
}
