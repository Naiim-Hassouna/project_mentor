import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

export default function AccountSetting() {
  const [bio, setBio] = useState("This is my ISD Project: The ProjectMentor!");
  const [review, setReview] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleBioChange = (event) => {
    const newBio = event.target.value.slice(0, 100);
    setBio(newBio);
  };

  const handleReviewChange = (event) => {
    const newReview = event.target.value.slice(0, 500);
    setReview(newReview);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    // TODO: Add logic to save the updated bio to the server/database
    // You can make an API call or use any storage mechanism here
    // For now, let's just log the updated bio
    console.log("Saving Bio:", bio);
    setIsEditing(false);
  };

  const handleSignOutClick = async () => {
    try {
      const response = await fetch("http://localhost/projectmentor_server/logout.php", {
        method: "GET",
      });

      if (response.ok) {
        console.log("User logged out successfully");
        // TODO: You can add any additional logic after successful logout
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="accountpageh2">Personal Info</h2>
      <div>
        <ProfileCard onEditClick={handleEditClick} bio={bio} />
        <br />
      </div>

      {isEditing && (
        <>
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
            <button className="accountinfo-save" onClick={handleSaveClick}>
              Save
            </button>
          </section>
        </>
      )}

      <div>
        <br />
      </div>

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

      <div className="signoutdiv">
        <button className="signoutButton" onClick={handleSignOutClick}>
          Sign out
        </button>
      </div>
    </>
  );
}
