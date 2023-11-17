import React from "react";
import ReactPaginate from "react-paginate";
/**
 * Renders a table component with headers and rows based on the provided data.
 * Also includes a pagination component from the `react-paginate` library.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.filteredData - An array of objects representing the table rows.
 * @param {Function} props.handlePageClick - A function to handle pagination.
 * @param {number} props.itemsPerPage - The number of items to display per page.
 * @param {Function} props.handleSort - A function to handle sorting.
 * @param {Function} props.getSortIcon - A function to get the sort icon.
 * @returns {JSX.Element} - The rendered table component.
 */
const Table = ({
  filteredData,
  handlePageClick,
  itemsPerPage,
  handleSort,
  getSortIcon,
  endOffset,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>Id {getSortIcon("id")}</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Region</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.length === 0 ? (
            <div className="notFound">
              <h2>Data not Found</h2>
            </div>
          ) : (
            filteredData?.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.phone}</td>
                <td>{row.country}</td>
                <td>{row.region}</td>
                <td>{row.salary}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="footer">
        <p>
          <span> {endOffset}/650</span> Total Per Page
        </p>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={itemsPerPage}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </>
  );
};

export default Table;
