import React from "react";
import CustomImage from "./CustomImage";

export default function ProjectCard({ project, loggedin }) {
  return (
    <div className="project-card">
      <CustomImage imgSrc={project.image} pt="65%" />
      <div className="project-card-info">
        {/*<img className="auther-img" src={project.authorImg} alt="" />*/}
        <p className="project-title">{project.title}</p>
        <p className="project-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          {loggedin === "user" ? (
            <div>
              <a className="view-btn" href="#!">
                Details
              </a>
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
              <a className="view-btn" href="#!">
                Details
              </a>
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
