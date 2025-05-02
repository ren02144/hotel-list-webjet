import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header Component', () => {
  test('should render the Header component', () => {
    render(<Header />);
    const logoImg = screen.getByAltText('Webjet');

    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('src', expect.stringContaining('webjet-logo-au-red.png'));
    expect(logoImg).toHaveClass('logo');
  });
});