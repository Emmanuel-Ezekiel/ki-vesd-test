import PropTypes from "prop-types";
import React, { useState } from "react";
import { SearchIcon } from "../../assets/svg";
/**
 * Functional component that renders a search input field and a search icon.
 * It manages the state of the search query and calls a callback function when the search query changes.
 *
 * @param {function} onSearch - A callback function that will be called with the search query as an argument when the search query changes.
 * @returns {JSX.Element} - The rendered SearchBar component.
 */
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Handles the change event of the search input field.
   * Updates the searchQuery state variable with the new value and calls the onSearch callback function.
   *
   * @param {object} event - The change event object.
   */
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

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;


