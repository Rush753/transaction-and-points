import React from 'react';

const MonthlyTransactionInfo = ({ month, total, points }) => (
    <div>
        <p>{`${month}: $${total} (Points: ${points})`}</p>
    </div>
);

export default MonthlyTransactionInfo;
