import React from 'react';
import { render } from '@testing-library/react';
import MonthlyTransactionInfo from '../components/MonthlyTransactionInfo';

describe('MonthlyTransactionInfo', () => {
    const mockData = {
        month: 'January',
        total: 100,
        points: 50,
    };

    it('renders monthly transaction info correctly', () => {
        const { getByText } = render(
            <MonthlyTransactionInfo month={mockData.month} total={mockData.total} points={mockData.points} />
        );

        expect(getByText(`${mockData.month}: $${mockData.total} (Points: ${mockData.points})`)).toBeInTheDocument();
    });

});
