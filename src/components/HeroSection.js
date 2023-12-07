import CustomImage from "./CustomImage";

export default function HeroSection() {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          ProjectMentor is a platform where aspiring coders can embark on an
          exciting journey of learning and practicing various programming
          languages. With our user-friendly interface and comprehensive
          resources, you can sharpen your coding skills and unlock your full
          potential.
        </p>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"95%"} />
        ))}
      </div>
    </div>
  );
}
