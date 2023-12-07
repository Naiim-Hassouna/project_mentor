import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons"
import TagsInput from "./TagsInput"
import React, { useState } from "react";

export default function PreviousSearches(){
    const searches = ['web', 'java', 'c++', 'python', 'c#', 'arduino', 'dart'] 



  const [isTabOpen, setIsTabOpen] = useState(false);

  const toggleTab = () => {
    setIsTabOpen(!isTabOpen);
  }
        return (
            <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                        {search}
                    </div>)) }
                </div>

                <div>
                <h2>Enter Search Tags:</h2>
                    <div className="tagSearchContainer">
                        <TagsInput/>
                        <button className="tags-search-btn" onClick={toggleTab}>
                            <FontAwesomeIcon icon={faFilter} />
                        </button>
                        <button className="tags-search-btn">
                            <FontAwesomeIcon icon={faSearch} />
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
                                    <input type="radio" name="size" value="any" /> Any
                                    </label>
                                </div>
                            </div>
                        )}</div>
                </div>
            </div>
                
                
                
    );
}
