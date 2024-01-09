import React, { useState } from "react";

const AdminManage = () => {
  const [adminFormVisible, setAdminFormVisible] = useState(false);
  const [projectFormVisible, setProjectFormVisible] = useState(false);

  const showAdminForm = () => {
    setAdminFormVisible(true);
    setProjectFormVisible(false);
  };

  const showProjectForm = () => {
    setProjectFormVisible(true);
    setAdminFormVisible(false);
  };

  return (
    <div className="admin-manage">
      <h1>Admin Management</h1>
      <button onClick={showAdminForm} className="action-button">
        Add New Admin
      </button>
      <button onClick={showProjectForm} className="action-button">
        Upload New Project
      </button>

      {adminFormVisible && <AdminForm />}
      {projectFormVisible && <ProjectForm />}
    </div>
  );
};

const AdminForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState(false);

  const handleAddAdmin = async () => {
    if (!username || !email || !password || !confirmPassword) {
      // At least one field is empty
      setEmptyFieldError(true);
      return;
    }

    if (password !== confirmPassword) {
      // Password and confirm password do not match
      setPasswordMatchError(true);
      return;
    }

    // Reset error states
    setEmptyFieldError(false);
    setPasswordMatchError(false);

    try {
      const response = await fetch(
        `http://localhost/projectmentor_server/add_admin.php?username=${username}&email=${email}&password=${password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Admin added successfully");
        // You can add additional logic here if needed
      } else {
        console.error("Failed to add admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-form">
      <h2>Add New Admin</h2>
      <form>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label>Confirm Password: </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {passwordMatchError && (
          <p style={{ color: "red" }}>
            Password and confirm password do not match
          </p>
        )}
        {emptyFieldError && (
          <p style={{ color: "red" }}>All fields must be filled</p>
        )}
        <br />

        <button
          type="button"
          onClick={handleAddAdmin}
          className="action-button"
        >
          Add Admin
        </button>
      </form>
    </div>
  );
};

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [size, setSize] = useState("Mini");
  const [emptyFieldError, setEmptyFieldError] = useState(false);

  const handleAddProject = async () => {
    if (
      !projectName ||
      !image ||
      !description ||
      !content ||
      !difficulty ||
      !size
    ) {
      // At least one field is empty
      setEmptyFieldError(true);
      return;
    }

    // Reset error state
    setEmptyFieldError(false);

    try {
      const formData = new FormData();
      formData.append("projectName", projectName);
      formData.append("image", image);
      formData.append("description", description);
      formData.append("content", content);
      formData.append("difficulty", difficulty);
      formData.append("size", size);

      const response = await fetch(
        "http://localhost/projectmentor_server/add_projects.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Project added successfully");
        // You can add additional logic here if needed
      } else {
        console.error("Failed to add project");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="project-form">
      <h2>Upload New Project</h2>
      <br />
      <form>
        <label>Project Name: </label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <br />

        <label>Image: </label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <br />

        <label>Description: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Content: </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />

        <label>Difficulty: </label>
        <div>
          <label>
            <input
              className="proj_input_radio"
              type="radio"
              value="Beginner"
              checked={difficulty === "Beginner"}
              onChange={() => setDifficulty("Beginner")}
            />
            Beginner
          </label>
          <br />
          <label>
            <input
              className="proj_input_radio"
              type="radio"
              value="Moderate"
              checked={difficulty === "Moderate"}
              onChange={() => setDifficulty("Moderate")}
            />
            Moderate
          </label>
          <br />
          <label>
            <input
              className="proj_input_radio"
              type="radio"
              value="Advanced"
              checked={difficulty === "Advanced"}
              onChange={() => setDifficulty("Advanced")}
            />
            Advanced
          </label>
        </div>
        <br />

        <label>Size: </label>
        <div>
          <label>
            <input
              className="proj_input_radio"
              type="radio"
              value="Mini"
              checked={size === "Mini"}
              onChange={() => setSize("Mini")}
            />
            Mini
          </label>
          <br />
          <label>
            <input
              className="proj_input_radio"
              type="radio"
              value="Standard"
              checked={size === "Standard"}
              onChange={() => setSize("Standard")}
            />
            Standard
          </label>
          <br />
          <label>
            <input
              className="proj_input_radio"
              type="radio"
              value="Enterprise"
              checked={size === "Enterprise"}
              onChange={() => setSize("Enterprise")}
            />
            Enterprise
          </label>
        </div>
        <br />

        {emptyFieldError && (
          <p style={{ color: "red" }}>All fields must be filled</p>
        )}

        <button
          type="button"
          onClick={handleAddProject}
          className="action-button"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AdminManage;
