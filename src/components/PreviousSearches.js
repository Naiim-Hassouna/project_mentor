import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import TagsInput from "./TagsInput";

function PreviousSearches({ onFilterChange }) {
  const [searches, setSearches] = useState(
    JSON.parse(localStorage.getItem("previousSearches")) || []
  );
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    size: "",
    difficulty: "",
  });

  const toggleTab = () => {
    setIsTabOpen(!isTabOpen);
  };

  const handleSearch = (tags) => {
    const updatedSearches = [...searches.slice(-5), ...tags].slice(-8);
    setSearches(updatedSearches);
    localStorage.setItem("previousSearches", JSON.stringify(updatedSearches));
  };

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  const handleFilterChange = () => {
    // Trigger the callback with the selected filters
    onFilterChange(selectedFilters);
  };

  return (
    <div className="previous-searches section">
      <div className="title1">
        <h2>Previous Searches: </h2>
      </div>
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
                  <input
                    type="radio"
                    name="size"
                    value="mini"
                    onChange={() =>
                      setSelectedFilters({
                        ...selectedFilters,
                        size: "mini",
                      })
                    }
                  />{" "}
                  Mini
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="standard"
                    onChange={() =>
                      setSelectedFilters({
                        ...selectedFilters,
                        size: "standard",
                      })
                    }
                  />{" "}
                  Standard
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="enterprise"
                    onChange={() =>
                      setSelectedFilters({
                        ...selectedFilters,
                        size: "enterprise",
                      })
                    }
                  />{" "}
                  Enterprise
                </label>
                <br />
              </div>
              <div className="column-filter">
                <strong>Difficulty:</strong>
                <br />
                <label>
                  <input
                    type="radio"
                    name="difficulty"
                    value="beginner"
                    onChange={() =>
                      setSelectedFilters({
                        ...selectedFilters,
                        difficulty: "beginner",
                      })
                    }
                  />{" "}
                  Beginner
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="difficulty"
                    value="moderate"
                    onChange={() =>
                      setSelectedFilters({
                        ...selectedFilters,
                        difficulty: "moderate",
                      })
                    }
                  />{" "}
                  Moderate
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="difficulty"
                    value="advanced"
                    onChange={() =>
                      setSelectedFilters({
                        ...selectedFilters,
                        difficulty: "advanced",
                      })
                    }
                  />{" "}
                  Advanced
                </label>
              </div>
              <button onClick={handleFilterChange}>Apply Filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PreviousSearches;
