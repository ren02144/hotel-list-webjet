import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AdBanner from '../components/AdBanner';

describe('AdBanner Component', () => {
  test('should render the AdBanner component', () => {
    render(<AdBanner />);

    const adImg = screen.getByAltText('Ad Banner');

    expect(adImg).toBeInTheDocument();
    expect(adImg).toHaveAttribute('src', 'https://tpc.googlesyndication.com/simgad/3706009192004328791');
    expect(adImg).toHaveClass('ad-image');
  });
});
