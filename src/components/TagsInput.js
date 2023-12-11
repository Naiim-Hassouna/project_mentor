import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function TagsInput({ onSearch }) {
  const [tags, setTags] = useState([]);

  function handleKeyDown(e) {
    if (e.key !== 'Enter') return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = '';
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <>
      <div className="tags-input-container">
        {tags.map((tag, index) => (
          <div className="tag-item" key={index}>
            <span className="text">{tag}</span>
            <span className="close" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
        <input
          onKeyDown={handleKeyDown}
          type="text"
          className="tags-input"
          placeholder=" Add a tag..."
        />
      </div>
      <button
        onClick={() => onSearch(tags)}
        className="tags-search-btn"
        // You can add more styles or icons for the search button
      >
            <FontAwesomeIcon icon={faSearch} />
      </button>
    </>
  );
}

export default TagsInput;
