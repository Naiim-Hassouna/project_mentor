import DomainCard from "./DomainCard";

export default function DomainSection() {
  const domains = [
    {
      name: "Web Dev",
      img: "/img/domain-pics/img_1.jpg",
      availability: "Abundant",
      difficulty: "Variant",
      size: "Variant",
    },
    {
      name: "C++ Projects",
      img: "/img/domain-pics/img_2.jpg",
      availability: "Moderate",
      difficulty: "Variant",
      size: "Standard",
    },
    {
      name: "C# Projects",
      img: "/img/domain-pics/img_3.jpg",
      availability: "Limited",
      difficulty: "Advanced",
      size: "Enterprise",
    },
    {
      name: "Python",
      img: "/img/domain-pics/img_4.jpg",
      availability: "Abundant",
      difficulty: "Variant",
      size: "Variant",
    },
    {
      name: "Java Projects",
      img: "/img/domain-pics/img_5.jpg",
      availability: "Moderate",
      difficulty: "Variant",
      size: "Variant",
    },
    {
      name: "Arduino",
      img: "/img/domain-pics/img_6.jpg",
      availability: "Moderate",
      difficulty: "Moderate",
      size: "Standard",
    },
  ];
  return (
    <div className="section domains">
      <h1 className="title">Most Popular Project Domains</h1>
      <div className="top-domains-container">
        {domains.map((domain) => (
          <DomainCard key={domain.name} domain={domain} />
        ))}
      </div>
    </div>
  );
}
