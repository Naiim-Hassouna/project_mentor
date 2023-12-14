
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
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handleAddAdmin = () => {
      // Implement logic to add admin (e.g., send data to backend)
      console.log('Adding new admin:', { username, email, password, confirmPassword });
      // You can make an API request here to add the admin
    };
  
    return (
      <div className="admin-form">
        <h2>Add New Admin</h2><br/>
        <form>
          <label>Username: </label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
  
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
  
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
  
          <label>Confirm Password: </label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <br />
  
          <button type="button" onClick={handleAddAdmin} className="action-button">
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

  const handleAddProject = () => {
    // Implement logic to add project (e.g., send data to backend)
    console.log("Adding new project:", {
      projectName,
      image,
      description,
      content,
      difficulty,
      size,
    });
    // You can make an API request here to add the project
  };

  return (
    <div className="project-form">
      <h2>Upload New Project</h2><br/>
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
            <input className="proj_input_radio"
              type="radio"
              value="Beginner"
              checked={difficulty === "Beginner"}
              onChange={() => setDifficulty("Beginner")}
            />
            Beginner
          </label><br/>
          <label>
            <input className="proj_input_radio"
              type="radio"
              value="Moderate"
              checked={difficulty === "Moderate"}
              onChange={() => setDifficulty("Moderate")}
            />
            Moderate
          </label><br/>
          <label>
            <input className="proj_input_radio"
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
            <input className="proj_input_radio"
              type="radio"
              value="Mini"
              checked={size === "Mini"}
              onChange={() => setSize("Mini")}
            />
            Mini
          </label><br/>
          <label>
            <input className="proj_input_radio"
              type="radio"
              value="Standard"
              checked={size === "Standard"}
              onChange={() => setSize("Standard")}
            />
            Standard
          </label><br/>
          <label>
            <input className="proj_input_radio"
              type="radio"
              value="Enterprise"
              checked={size === "Enterprise"}
              onChange={() => setSize("Enterprise")}
            />
            Enterprise
          </label>
        </div>
        <br />

        <button type="button" onClick={handleAddProject} className="action-button">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AdminManage;
