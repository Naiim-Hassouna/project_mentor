import CustomImage from "./CustomImage";
import Signup from "../pages/Signup";
import React, { useState } from "react";

export default function ProjectCard({ project }) {

  const [loggedin, setLoggedin] = useState("guest");


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
      ) : (
        <div></div>
      )}
      {loggedin === "guest" ? (
        <div>
          <a className="view-btn" href="/signup">
                Login to View Project
          </a>
        </div>
      ) : (
        <div></div>
      )}
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
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
