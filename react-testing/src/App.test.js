import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    screen.debug();


    //1)getByText- one of many types of search functions. expects one element. Use a different element for more matches.

    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    // screen.getByText('Search:');


    // explicit assertion
    // recommended
    // expect(screen.getByText('Search:')).toBeInTheDocument();

    //regular expression
    // expect(screen.getByText(/Searches/)).toBeInTheDocument();

    //2)other Search Types: getByRole
    // screen.getByRole('');

    expect(screen.getByRole('textbox')).toBeInTheDocument();

  });
});

