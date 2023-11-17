/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './searchQuery';

describe('SearchBar', () => {
  it('calls onSearch callback with the search query when input changes', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={onSearchMock} />);
    const input = getByPlaceholderText('Search Country, Name...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

  it('renders the search input field', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchBar onSearch={onSearchMock} />);
    expect(getByPlaceholderText('Search Country, Name...')).toBeInTheDocument();
  });

  it('renders the search icon', () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} />);
    expect(getByTestId('search-icon')).toBeInTheDocument();
  });
});


