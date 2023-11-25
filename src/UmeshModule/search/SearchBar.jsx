import React, { useState } from "react";
import "./index.scss";
import search from "../../assets/images/search_2.svg";

function SearchBar({ placeholder, setSearchText, searchText, onSearch,loading }) {
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeoutId = setTimeout(() => {
      onSearch(value, 1);   
     }, 500);
    setTypingTimeout(timeoutId);
  };

  return (
    <div className="w-100">
      <div className="input-group d-flex align-items-center search-container w-100">
        <img className="search-icon" alt="" src={search} />
        <input
          className="form-control  search-box"
          type="search"
          value={searchText}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^[0-9A-Za-z\s\-_]*$/.test(inputValue)) {
              handleSearch(e);
            }
          }}
          placeholder={placeholder}
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
