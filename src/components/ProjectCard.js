import React from "react";
import { Link } from "react-router-dom";
import CustomImage from "./CustomImage";

export default function ProjectCard({ project, loggedin }) {
  return (
    <div className="project-card">
      <CustomImage imgSrc={project.img} pt="65%" />
      <div className="project-card-info">
        <p className="project-title">{project.name}</p>
        <p className="project-desc">
          {project.description}
        </p>
        <div>
          {loggedin === "user" ? (
            <div>
              {/* Use Link for the "Details" link */}
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
              {/* Use Link for the "Details" link */}
              <Link className="view-btn" to={`/projects/${project.id}`}>
                Details
              </Link>
              <a className="view-btn-admin" href="#!">
                Edit
              </a>
              <a className="view-btn-admin" href="#!">
                Delete
              </a>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
