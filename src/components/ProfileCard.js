import React, { useState, useEffect } from "react";

const ProfileCard = ({ onEditClick, bio }) => {
  const [showIconMenu, setShowIconMenu] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(() => {
    const storedIcon = localStorage.getItem("selectedIcon");
    return storedIcon ? parseInt(storedIcon, 10) : 1;
  });

  const [editButtonText, setEditButtonText] = useState("Edit");

  useEffect(() => {
    localStorage.setItem("selectedIcon", selectedIcon.toString());
  }, [selectedIcon]);

  const handleIconClick = () => {
    setShowIconMenu(!showIconMenu);
  };

  const handleIconChange = (newIcon) => {
    setSelectedIcon(newIcon);
    setShowIconMenu(false);
  };

  const handleEditClick = () => {
    // Call the onEditClick function passed from the parent
    if (onEditClick) {
      onEditClick();
    }

    // Change the button text
    setEditButtonText(editButtonText === "Edit" ? "Cancel" : "Edit");
  };

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={`img/profile-icons/icon_${selectedIcon}.png`} alt="Profile" />
        <div className="change-icon" onClick={handleIconClick}>
          <span role="img" aria-label="Change Icon">
            🔄
          </span>
        </div>
        {showIconMenu && (
          <div className="icon-menu">
            {[1, 2, 3, 4, 5, 6].map((icon) => (
              <div
                key={icon}
                className="icon-option"
                onClick={() => handleIconChange(icon)}
              >
                <img
                  src={`img/profile-icons/icon_${icon}.png`}
                  alt={`Icon ${icon}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="profile-info">
        <h2>Username</h2>
        <p>{bio}</p>
        <br />
        <button onClick={handleEditClick}>{editButtonText}</button>
      </div>
    </div>
  );
};

export default ProfileCard;
