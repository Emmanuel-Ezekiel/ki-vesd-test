/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import data from "./data.json";
import SearchQuery from "./components/SearchBar/searchQuery";
import Table from "./components/Table/table";

function App() {
  // console.log(data);
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


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
        <Table
          filteredData={ currentItems}
          handlePageClick={handlePageClick}
          indexOfLastItem={indexOfLastItem}
          itemsPerPage={pageCount}
        />
      </div>
    </div>
  );
}

export default App;
