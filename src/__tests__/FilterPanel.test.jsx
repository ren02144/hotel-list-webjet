import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterPanel from '../components/FilterPanel';

describe('FilterPanel Component', () => {
  const defaultFilters = { name: '', ratings: [] };
  let onNameSearch, onRatingChange;
  beforeEach(() => {
    onNameSearch = jest.fn();
    onRatingChange = jest.fn();
  });

  test('should render filter panel with default values', () => {
    render(<FilterPanel filters={defaultFilters} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);

    expect(screen.getByText('Filter Results')).toBeInTheDocument();
    expect(screen.getByText('Hotel Name')).toBeInTheDocument();
    expect(screen.getByText('Quality Rating')).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText('Enter Hotel Name');
    expect(nameInput).toBeInTheDocument();
    expect(screen.getByText('Go')).toBeInTheDocument();

    const allCheckbox = screen.getByLabelText('All');
    expect(allCheckbox.checked).toBe(true);
    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes.length).toBe(5);
    expect(checkboxes[1].checked).toBe(false);
  });

  test('should toggle collapsible sections', () => {
    render(<FilterPanel filters={defaultFilters} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);
    const nameSectionHeader = screen.getByText('Hotel Name');
    const ratingSectionHeader = screen.getByText('Quality Rating');
    const nameInput = screen.getByPlaceholderText('Enter Hotel Name');

    fireEvent.click(nameSectionHeader);
    expect(screen.queryByPlaceholderText('Enter Hotel Name')).toBeNull();

    fireEvent.click(nameSectionHeader);
    expect(screen.getByPlaceholderText('Enter Hotel Name')).toBeInTheDocument();

    fireEvent.click(ratingSectionHeader);
    expect(screen.queryByLabelText('All')).toBeNull();

    fireEvent.click(ratingSectionHeader);
    expect(screen.getByLabelText('All')).toBeInTheDocument();
  });

  test('should handle name input, go and clear actions', () => {
    render(<FilterPanel filters={defaultFilters} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);
    const nameInput = screen.getByPlaceholderText('Enter Hotel Name');
    const goButton = screen.getByText('Go');
    fireEvent.change(nameInput, { target: { value: 'Test Hotel' } });
    expect(screen.getByText('×')).toBeInTheDocument();
    fireEvent.click(goButton);
    expect(onNameSearch).toHaveBeenCalledWith('Test Hotel');
    fireEvent.click(screen.getByText('×'));
    expect(onNameSearch).toHaveBeenCalledWith('');
    expect(nameInput.value).toBe('');
  });

  test('should handle rating checkbox interactions', () => {
    render(<FilterPanel filters={defaultFilters} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);
    const checkboxes = screen.getAllByRole('checkbox');
    const allCheckbox = screen.getByLabelText('All');
    const fiveStarCheckbox = checkboxes[1];

    fireEvent.click(fiveStarCheckbox);
    expect(onRatingChange).toHaveBeenCalledWith([5]);

    const filtersWithFourStar = { name: '', ratings: [4] };
    const { rerender } = render(<FilterPanel filters={filtersWithFourStar} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);
    expect(allCheckbox.checked).toBe(true);

    const fourStar = screen.getAllByRole('checkbox')[2];
    expect(fourStar.checked).toBe(false);

    fireEvent.click(screen.getAllByRole('checkbox')[2]);
    expect(onRatingChange).toHaveBeenCalledWith([5]);

    rerender(<FilterPanel filters={{ name: '', ratings: [3] }} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);
    fireEvent.click(allCheckbox);
    expect(onRatingChange).toHaveBeenCalledWith([]);
  });

  test('should updates input when filters.name changes', () => {
    const { rerender } = render(<FilterPanel filters={{ name: '', ratings: [] }} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);
    const nameInput = screen.getByPlaceholderText('Enter Hotel Name');
    rerender(<FilterPanel filters={{ name: 'ABC Hotel', ratings: [] }} onNameSearch={onNameSearch} onRatingChange={onRatingChange} />);

    expect(nameInput.value).toBe('ABC Hotel');
  });
});
