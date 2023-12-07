import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default function QouteSection() {
  return (
    <div className="section quote">
      <p className="qoute-text">
        <FontAwesomeIcon icon={faQuoteLeft} /> The art of programming is the art
        of organizing complexity, of mastering multitude and avoiding its
        bastard chaos as effectively as possible.{" "}
        <FontAwesomeIcon icon={faQuoteRight} />
      </p>
      <p className="qoute-auther">-Edsger Dijkstra</p>
    </div>
  );
}
