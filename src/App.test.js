/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    // Check if the heading is rendered
    expect(getByText('Employee Data')).toBeInTheDocument();

    // Check if the search input is rendered
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();

    // You can add more specific tests for the Table component and its behavior here
  });
});
