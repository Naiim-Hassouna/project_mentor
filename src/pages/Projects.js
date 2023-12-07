import PreviousSearches from "../components/PreviousSearches";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "proj 1",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/domain-pics/img_1.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-domains/img_2.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-domains/img_3.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-domains/img_5.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-domains/img_6.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-domains/img_1.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-domains/img_2.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-domains/img_3.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-domains/img_5.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_10.jpg",
      authorImg: "/img/top-domains/img_6.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-domains/img_3.jpg",
    },
    {
      title: "proj 1",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-domains/img_5.jpg",
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className="projects-container">
        {/* <ProjectCard /> */}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <h1>pagination hon</h1>
    </div>
  );
}
