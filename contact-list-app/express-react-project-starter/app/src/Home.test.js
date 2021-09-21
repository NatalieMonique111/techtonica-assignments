import { render, screen } from '@testing-library/react';
import App from './App';

//in development! 

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    const name = screen.getByText('Name');
    expect(name).toBeInTheDocument();

    screen.debug();
  });

  test('renders App component', () => {
    render(<App />);
    const email = screen.getByText('Email');
    expect(email).toBeInTheDocument();

    screen.debug();
  });


});
