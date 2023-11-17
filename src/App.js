/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import data from "./data.json";
import SearchQuery from "./components/SearchBar/searchQuery";
import Table from "./components/Table/table";

/**
 * React component that manages the state and behavior of a data table.
 * It handles sorting, pagination, and searching of the data based on user interactions.
 */
function App() {
  // State variables
  const [filteredData, setFilteredData] = useState([]);
  const [dataOffset, setDataOffset] = useState(0);
  const datasPerPage = 20;
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    try {
      // Set the dummy data to the state
      setFilteredData(data);
    } catch (error) {
      console.error("Error setting data:", error);
      // Handle the error, e.g., display an error message to the user
    }
  }, []);

  /**
   * Handles sorting of the data based on the selected field.
   * @param {string} field - The field to sort the data by.
   */
  const handleSort = (field) => {
    if (sortedField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortedField(field);
      setSortOrder("asc");
    }

    // Perform the sorting
    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });

    setFilteredData(sortedData);
  };

  /**
   * Returns the sort icon for the given field.
   * @param {string} field - The field to get the sort icon for.
   * @returns {string|null} - The sort icon or null if the field is not sorted.
   */
  const getSortIcon = (field) => {
    if (sortedField === field) {
      return sortOrder === "asc" ? "⬆️" : "⬇️";
    }
    return null;
  };

  // Pagination variables
  const endOffset = dataOffset + datasPerPage;
  const currentItems = filteredData?.slice(dataOffset, endOffset);
  const pageCount = Math.ceil(filteredData?.length / datasPerPage);

  /**
   * Handles the click event on a pagination button.
   * @param {object} event - The click event object.
   */
  const handlePageClick = (event) => {
    const newOffset = (event.selected * datasPerPage) % filteredData?.length;
    setDataOffset(newOffset);
  };

  /**
   * Handles the search event.
   * @param {string} query - The search query.
   */
  const handleSearch = (query) => {
    const lowercaseQuery = query.toLowerCase();
    if (lowercaseQuery === "") {
      setFilteredData(data);
    } else {
      const result = data.filter((item) =>
        ["name", "country", "region", "phone", "salary"].some((key) =>
          item[key]?.toLowerCase().includes(lowercaseQuery)
        )
      );
      setFilteredData(result);
    }
  };

  return (
    <div className="App">
      <h1>Employee Data</h1>

      <div className="container">
        {/* Search input */}
        <SearchQuery data={data} onSearch={handleSearch} />

        {/* Table */}

        <Table
          filteredData={currentItems}
          handlePageClick={handlePageClick}
          itemsPerPage={pageCount}
          handleSort={handleSort}
          getSortIcon={getSortIcon}
          endOffset={endOffset}
        />
      </div>
    </div>
  );
}

export default App;
