import React from 'react';
import { render } from '@testing-library/react';
import UserTransactionInfo from '../components/UserTransactionInfo';

describe('UserTransactionInfo', () => {
    const mockData = {
        userName: 'John',
        totalExpenses: 100,
        totalPoints: 50,
        monthlyData: {
            January: { total: 100, points: 50 },
            February: { total: 150, points: 75 },
        },
    };

    it('renders user transaction info correctly', () => {
        const { getByText } = render(
            <UserTransactionInfo
                userName={mockData.userName}
                totalExpenses={mockData.totalExpenses}
                totalPoints={mockData.totalPoints}
                monthlyData={mockData.monthlyData}
            />
        );

        expect(getByText(`Total Expenses for ${mockData.userName}: $${mockData.totalExpenses} (Points: ${mockData.totalPoints})`)).toBeInTheDocument();

        Object.keys(mockData.monthlyData).forEach((month) => {
            expect(getByText(`Monthly Expenses and Points:`)).toBeInTheDocument();
            expect(getByText(`${month}: $${mockData.monthlyData[month].total} (Points: ${mockData.monthlyData[month].points})`)).toBeInTheDocument();
        });
    });
});
