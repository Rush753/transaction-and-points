import { mockData } from '../model/mockData'

export const fetchTransactionData = async () => {
    try {
        // const response = await fetch(`server`);
        // const json = await response.json();
        // return json.results;
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Simulate Error
        // throw new Error();
        return mockData;
    } catch (error) {
        throw error;
    }
};
