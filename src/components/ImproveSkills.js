import { Link } from "react-router-dom";
export default function ImproveSkills() {
  const list = [
    "Discover your full potential",
    "Receive personalized guidance",
    "Raise your limits",
    "Test your knowledge",
    "Unlock new horizons",
    "Gain insights",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Improve Your Skills</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <Link to="/projects">
          <button className="btn">explore now</button>
        </Link>
      </div>
    </div>
  );
}
