import React, { useState } from "react";
import { useParams } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    projectName: "",
    image: "",
    description: "",
    content: "",
    difficulty: "Beginner",
    size: "Mini",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Form Data:", formData);

    // Send PHP edit request here using formData
    const phpEndpoint = `http://localhost/projectmentor_server/editProject.php?id=${formData.id}&projectName=${formData.projectName}&image=${formData.image}&description=${formData.description}&content=${formData.content}&difficulty=${formData.difficulty}&size=${formData.size}`;

    try {
      const response = await fetch(phpEndpoint);

      if (response.ok) {
        // Handle success
        console.log("Edit request successful");
      } else {
        // Handle errors
        console.error("Edit request failed");
      }
    } catch (error) {
      console.error("Error during edit request:", error);
    }
  };

  return (
    <div className="EditProjectContainer">
      <h2 className="EditProjectTitle">Edit Project: </h2>
      <form className="EditProjectForm" onSubmit={handleSubmit}>
        <label className="EditProjectLabel">
          Project Name:
          <input
            className="EditProjectInput"
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="EditProjectLabel">
          Image:
          <input
            className="EditProjectInput"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="EditProjectLabel">
          Description:
          <textarea
            className="EditProjectTextarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="EditProjectLabel">
          Content:
          <textarea
            className="EditProjectTextarea"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="EditProjectLabel">
          Difficulty:
          <select
            className="EditProjectSelect"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Moderate">Moderate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <br />
        <label className="EditProjectLabel">
          Size:
          <select
            className="EditProjectSelect"
            name="size"
            value={formData.size}
            onChange={handleChange}
          >
            <option value="Mini">Mini</option>
            <option value="Standard">Standard</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </label>
        <br />
        <button type="submit" className="EditProjectButton">Submit</button>
      </form>
    </div>
  );
};

export default EditProject;
