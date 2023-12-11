import { calculatePoints, processUserData } from '../utils/utils';
import {
    POINTS_THRESHOLD_1,
    POINTS_THRESHOLD_2,
    POINTS_MULTIPLIER_1,
    POINTS_MULTIPLIER_2,
    INITIAL_AMOUNT,
} from '../utils/constants';

describe('calculatePoints', () => {
    it('calculates points correctly for amount above POINTS_THRESHOLD_1', () => {
        const amount = POINTS_THRESHOLD_1 + 100;
        const expectedPoints = INITIAL_AMOUNT + POINTS_MULTIPLIER_1 * (amount - POINTS_THRESHOLD_1);

        const result = calculatePoints(amount);

        expect(result).toBe(expectedPoints);
    });

    it('calculates points correctly for amount above POINTS_THRESHOLD_2 but below POINTS_THRESHOLD_1', () => {
        const amount = POINTS_THRESHOLD_2 + 50;
        const expectedPoints = INITIAL_AMOUNT + POINTS_MULTIPLIER_2 * (amount - POINTS_THRESHOLD_2);

        const result = calculatePoints(amount);

        expect(result).toBe(expectedPoints);
    });

    it('calculates points correctly for amount below POINTS_THRESHOLD_2', () => {
        const amount = POINTS_THRESHOLD_2 - 10;
        const expectedPoints = INITIAL_AMOUNT;

        const result = calculatePoints(amount);

        expect(result).toBe(expectedPoints);
    });
});

describe('processUserData', () => {
    it('processes user data correctly', () => {
        const userData = [
            { userName: 'John', month: 'January', amount: 120 },
            { userName: 'Jane', month: 'January', amount: 80 },
            { userName: 'John', month: 'February', amount: 150 },
        ];

        const expectedResult = {
            userExpensesData: { John: 270, Jane: 80 },
            userPointsData: { John: 140, Jane: 30 },
            monthlyExpensesData: {
                John: {
                    January: { total: 120, points: 40 },
                    February: { total: 150, points: 100 },
                },
                Jane: {
                    January: { total: 80, points: 30 },
                },
            },
        };

        const result = processUserData(userData);

        expect(result).toEqual(expectedResult);
    });
});
