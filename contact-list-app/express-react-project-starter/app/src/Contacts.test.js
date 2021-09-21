import { render, screen } from '@testing-library/react';
import App from './App';

//in development! 

describe('Contacts', () => {
  test('renders Contacts component', () => {
    render(<Contact />);
    const name = screen.getByText('Name');
    expect(name).toBeInTheDocument();

    screen.debug();
  });

  test('renders Contacts component', () => {
    render(<Contacts />);
    const email = screen.getByText('Email');
    expect(email).toBeInTheDocument();

    screen.debug();
  });


});
