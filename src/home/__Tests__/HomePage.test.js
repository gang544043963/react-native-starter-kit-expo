import React from 'react';
import { render } from '@testing-library/react-native';
import HomePage from '../HomePage';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockNavigate
        })
    };
});

describe('Component', () => {
    it('should show "Go to next page"', () => {
        const { getByText } = render(<HomePage />);
        expect(getByText('Go to next page')).toBeTruthy();
    });
});
