import CustomImage from "./CustomImage";

export default function ProjectCard({ project }) {
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
        <a className="view-btn" href="#!">
          Details
        </a>
      </div>
    </div>
  );
}
