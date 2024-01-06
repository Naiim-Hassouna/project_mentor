import React from "react";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

export default function ProjectCard({ project, loggedin }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this project?");
    
    if (confirmDelete) {
      try {
        const response = await fetch('http://localhost/projectmentor_server/delete-project.php', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ projectId: project.id }),
        });

        if (response.ok) {
          // Project successfully deleted
          console.log('Project deleted successfully.');
          // You may want to trigger a re-fetch of the project list or update the UI accordingly
        } else {
          // Handle error cases
          console.error('Failed to delete project.');
          // You may want to display an error message to the user
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle any other errors that may occur during the fetch
      }
    }
  };

  return (
    <div className="project-card">
      <CustomImage imgSrc={project.img} pt="65%" />
      <div className="project-card-info">
        <p className="project-title">{project.name}</p>
        <p className="project-desc">{project.description}</p>
        <div>
          {loggedin === "user" ? (
            <div>
              <Link className="view-btn" to={`/projects/${project.id}`}>
                Details
              </Link>
            </div>
          ) : null}
          {loggedin === "guest" ? (
            <div>
              <a className="view-btn" href="/signup">
                Login to View Project
              </a>
            </div>
          ) : null}
          {loggedin === "admin" ? (
            <>
              <Link className="view-btn" to={`/projects/${project.id}`}>
                Details
              </Link>
              <a className="view-btn-admin" href="#!" onClick={handleDelete}>
                Delete
              </a>
              <Link className="view-btn-admin" to={`/edit-project/${project.id}`}>
                Edit
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
