import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import Transactions from '../components/Transactions';
import { fetchTransactionData } from '../api/apiService';

jest.mock('../api/apiService');

describe('Transactions Component', () => {
  const mockUserData = [
    { userName: 'John', month: 'January', amount: 100 },
    { userName: 'Jane', month: 'February', amount: 150 },
    // Add more mock data as needed
  ];

  beforeEach(() => {
    fetchTransactionData.mockResolvedValue(mockUserData);
  });

  test('renders loading message initially', async () => {
    render(<Transactions />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Expenses and points of our clients')).toBeInTheDocument());
  });

  test('renders error message if data fetching fails', async () => {
    fetchTransactionData.mockRejectedValue(new Error('Data fetching error'));

    render(<Transactions />);
    await waitFor(() => expect(screen.getByText('Error fetching data. Please try again.')).toBeInTheDocument());
  });
});
