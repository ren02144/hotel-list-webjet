import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HotelCard from '../components/HotelCard';

const sampleHotel = {
  id: 100,
  name: 'Sample Hotel',
  price: 199,
  rating: 4.5,
  roomType: 'Deluxe Room',
  image: 'http://example.com/sample.jpg',
};

describe('HotelCard Component', () => {
  test('should render hotel information correctly on desktop', () => {
    global.innerWidth = 1024;
    render(<HotelCard hotel={sampleHotel} />);
    
    expect(screen.getByText('Sample Hotel')).toBeInTheDocument();
    expect(screen.getByText('Room type: Deluxe Room')).toBeInTheDocument();
    expect(screen.getByText('$199')).toBeInTheDocument();
    expect(screen.queryByText('→')).toBeNull();
  });

  test('should display view arrow button on mobile', () => {
    global.innerWidth = 500;
    render(<HotelCard hotel={sampleHotel} />);
    
    expect(screen.getByText('→')).toBeInTheDocument();
  });

  test('should render hotel image with correct alt and src', () => {
    render(<HotelCard hotel={sampleHotel} />);
    
    const img = screen.getByAltText('Sample Hotel');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'http://example.com/sample.jpg');
  });
});
