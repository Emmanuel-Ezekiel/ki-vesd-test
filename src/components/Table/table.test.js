/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('Table', () => {
  it('renders table headers and data correctly', () => {
    const handlePageClick = jest.fn();
    const handleSort = jest.fn();
    const getSortIcon = jest.fn();

    const { getByText, getAllByRole } = render(
      <Table
        filteredData={[]}
        handlePageClick={handlePageClick}
        itemsPerPage={10}
        handleSort={handleSort}
        getSortIcon={getSortIcon}
      />
    );

    // Check if table headers are rendered
    expect(getByText('Id')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Country')).toBeInTheDocument();
    expect(getByText('Phone')).toBeInTheDocument();
    expect(getByText('Region')).toBeInTheDocument();
    expect(getByText('Salary')).toBeInTheDocument();

    // Check if table data is rendered
    const tableRows = getAllByRole('row');
    expect(tableRows.length).toBe(1); // Only the header row should be present
  });
});
