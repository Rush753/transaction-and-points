import { fetchTransactionData } from '../api/apiService';
import { mockData } from '../model/mockData';

jest.mock('../model/mockData'); // Mocking the mockData import

describe('fetchTransactionData', () => {
    it('fetches transaction data successfully after a delay', async () => {
        const resultPromise = fetchTransactionData();
        jest.advanceTimersByTime(2000);

        const result = await resultPromise;

        expect(result).toEqual(mockData);
    });
});
