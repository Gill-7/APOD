import React from "react";
import "./Search.css";

const Search = ({ data, searchChange }) => {
  return (
    <div className="search-container">
      <label>Search for previous pages:</label>
      <input
        type="date"
        id="date"
        min="1995-06-16"
        max={data.date}
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
