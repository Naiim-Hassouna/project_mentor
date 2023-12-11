import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import TagsInput from "./TagsInput";

function PreviousSearches() {
  const [searches, setSearches] = useState(
    JSON.parse(localStorage.getItem("previousSearches")) || []
  );
  const [isTabOpen, setIsTabOpen] = useState(false);

  const toggleTab = () => {
    setIsTabOpen(!isTabOpen);
  };

  const handleSearch = (tags) => {
    // Update the searches array, keeping a maximum of 8 items
    const updatedSearches = [...searches.slice(-5), ...tags].slice(-8);
    setSearches(updatedSearches);
    // Save to local storage
    localStorage.setItem("previousSearches", JSON.stringify(updatedSearches));
  };

  useEffect(() => {
    // This effect is just to demonstrate the component mounting
    console.log("Component mounted");
  }, []);

  return (
    <div className="previous-searches section">
      <div className="title1"><h2>Previous Searches: </h2></div>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>

      <div>
        <h2>Enter Search Tags:</h2>
        <div className="tagSearchContainer">
          <TagsInput onSearch={handleSearch} />
          <button className="tags-search-btn" onClick={toggleTab}>
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
        <div>
          {isTabOpen && (
            <div className="tab-filter">
              <div className="column-filter">
                <strong>Size:</strong>
                <br />
                <label>
                  <input type="radio" name="size" value="mini" /> Mini
                </label>
                <br />
                <label>
                  <input type="radio" name="size" value="standard" /> Standard
                </label>
                <br />
                <label>
                  <input type="radio" name="size" value="enterprise" /> Enterprise
                </label>
                <br />
                <label>
                  <input type="radio" name="size" value="any" /> Any
                </label>
              </div>
              <div className="column-filter">
                <strong>Difficulty:</strong>
                <br />
                <label>
                  <input type="radio" name="difficulty" value="beginner" /> Beginner
                </label>
                <br />
                <label>
                  <input type="radio" name="difficulty" value="moderate" /> Moderate
                </label>
                <br />
                <label>
                  <input type="radio" name="difficulty" value="advanced" /> Advanced
                </label>
                <br />
                <label>
                  <input type="radio" name="difficulty" value="any" /> Any
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreviousSearches;
