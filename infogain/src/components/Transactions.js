import React, { useState, useEffect } from 'react';
import { fetchTransactionData } from '../api/apiService';
import { processUserData } from '../utils/utils';
import UserTransactionInfo from './UserTransactionInfo';
import '../styles/Transactions.css';

const Transactions = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactionData();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { userExpensesData, userPointsData, monthlyExpensesData } = processUserData(userData);

  return (
      <div className="container">
        <h1>{'Expenses and points of our clients'}</h1>
        {error ? (
            <p className="error">{error}</p>
        ) : loading ? (
            <p className="loading">Loading...</p>
        ) : (
            Object.keys(userExpensesData).map((userName) => (
                <UserTransactionInfo
                    key={userName}
                    userName={userName}
                    totalExpenses={userExpensesData[userName]}
                    totalPoints={userPointsData[userName]}
                    monthlyData={monthlyExpensesData[userName]}
                />
            ))
        )}
      </div>
  );
};

export default Transactions;
