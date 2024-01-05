// ProjectDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/projectmentor_server/projects_details.php?id=${id}`
        );
        const data = await response.json();
        setProjectDetails(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-detail-container">
      <h1 className="project-detail-name">{projectDetails.name}</h1>
      <img src={projectDetails.img} alt="project pic" className="project-detail-image"  />
      <p className="project-detail-description">Description: {projectDetails.description}</p>
      <p className="project-detail-difficulty">Difficulty: {projectDetails.difficulty}</p>
      <p className="project-detail-size">Size: {projectDetails.size}</p>
      <p className="project-detail-content">Content: {projectDetails.content}</p>
    </div>
  );
};

export default ProjectDetails;
