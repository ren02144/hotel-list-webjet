import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
    beforeEach(() => {
        global.innerWidth = 1200;
        window.dispatchEvent(new Event('resize'));
    });

    test('should render the App component', () => {
        render(<App />);
        expect(screen.getByText('Oaks on William')).toBeInTheDocument();
        expect(screen.getByText('Crowne Plaza Melbourne')).toBeInTheDocument();
        expect(screen.getByText('Novotel Melbourne on Collins')).toBeInTheDocument();
        expect(screen.getByText(/3 Hotels Available in Melbourne/i)).toBeInTheDocument();
        expect(screen.getByText('Filter Results')).toBeInTheDocument();
        expect(screen.getByAltText('Ad Banner')).toBeInTheDocument();
        const filterBtn = screen.getByText('Filters');
        expect(filterBtn).toBeInTheDocument();
    });

    test('should filter hotels by name', () => {
        render(<App />);
        const nameInput = screen.getByPlaceholderText('Enter Hotel Name');
        const goButton = screen.getByText('Go');
        fireEvent.change(nameInput, { target: { value: 'Novotel' } });
        fireEvent.click(goButton);
        expect(screen.getByText('Novotel Melbourne on Collins')).toBeInTheDocument();
        expect(screen.queryByText('Oaks on William')).toBeNull();
        expect(screen.queryByText('Crowne Plaza Melbourne')).toBeNull();
        expect(screen.getByText(/1 Hotels Available in Melbourne/i)).toBeInTheDocument();
    });

    test('should filter hotels by star rating', () => {
        render(<App />);
        const checkboxes = screen.getAllByRole('checkbox');
        const allCheckbox = checkboxes[0];
        const fiveStarCheckbox = checkboxes[1];
        const fourStarCheckbox = checkboxes[2];
        const threeStarCheckbox = checkboxes[3];
        const twoStarCheckbox = checkboxes[4];
        expect(allCheckbox.checked).toBe(true);
        expect(fiveStarCheckbox.checked).toBe(false);
        fireEvent.click(fourStarCheckbox);

        expect(screen.getByText('Oaks on William')).toBeInTheDocument();
        expect(screen.queryByText('Crowne Plaza Melbourne')).toBeNull();
        expect(screen.queryByText('Novotel Melbourne on Collins')).toBeNull();

        expect(screen.getByText(/1 Hotels Available in Melbourne/i)).toBeInTheDocument();

        fireEvent.click(allCheckbox);

        expect(screen.getByText('Crowne Plaza Melbourne')).toBeInTheDocument();
        expect(screen.getByText('Novotel Melbourne on Collins')).toBeInTheDocument();
        expect(screen.getByText(/3 Hotels Available in Melbourne/i)).toBeInTheDocument();
    });

    test('should open and close modal filter panel when window resizing', () => {

        global.innerWidth = 500;
        window.dispatchEvent(new Event('resize'));
        render(<App />);

        const filterBtn = screen.getByText('Filters');
        expect(filterBtn).toBeInTheDocument();

        fireEvent.click(filterBtn);

        expect(screen.getByText('Done')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Done'));
        expect(screen.queryByText('Done')).toBeNull();
    });
});
