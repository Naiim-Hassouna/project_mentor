export default function DomainCard({ domain }) {
  return (
    <div className="domain-card">
      <img src={domain.img} alt="" />
      <div className="domain-card-info">
        <h3 className="domain-card-name">{domain.name}</h3>
        <p className="domain-avail-count">
          Availability: <b>{domain.availability}</b>
        </p>
        <p className="domain-difficulty">
          Difficulty: <b>{domain.difficulty}</b>
        </p>
        <p className="domain-difficulty">
          Size: <b>{domain.size}</b>
        </p>
        
      </div>
    </div>
  );
}
