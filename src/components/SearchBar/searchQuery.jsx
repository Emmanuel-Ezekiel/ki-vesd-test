import React, { useState } from "react";
import { SearchIcon } from "../../assets/svg";
const SearchBar = ({ data, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   onSearch(searchQuery);
  // };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <form className="searchContainer">
      <input
        type="text"
        placeholder="Search Country, Name..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div className="SearchIcon">
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchBar;
