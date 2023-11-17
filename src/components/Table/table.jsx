import React from "react";
import ReactPaginate from 'react-paginate';
const Table = ({
  filteredData,
  handlePageClick,
  itemsPerPage
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Phone</th>
            <th>Region</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.country}</td>
              <td>{row.phone}</td>
              <td>{row.region}</td>
              <td>{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={itemsPerPage}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Table;
