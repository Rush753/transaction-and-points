import React from 'react';
import MonthlyTransactionInfo from './MonthlyTransactionInfo';

const UserTransactionInfo = ({ userName, totalExpenses, totalPoints, monthlyData }) => (
    <div>
        <h2>Total Expenses for {userName}: ${totalExpenses} (Points: {totalPoints})</h2>
        <h3>Monthly Expenses and Points:</h3>
        {Object.keys(monthlyData).map((month) => (
            <MonthlyTransactionInfo
                key={month}
                month={month}
                total={monthlyData[month].total}
                points={monthlyData[month].points}
            />
        ))}
    </div>
);

export default UserTransactionInfo;
