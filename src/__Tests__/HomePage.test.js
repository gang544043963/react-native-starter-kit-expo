import React from 'react';
import { render } from '@testing-library/react-native';
import HomePage from '../home/HomePage';

describe('Component', () => {
    it('should show "Go to next page"', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('Go to next page')).toBeTruthy();
    });
});
