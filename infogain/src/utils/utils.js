import { POINTS_THRESHOLD_1, POINTS_THRESHOLD_2, POINTS_MULTIPLIER_1, POINTS_MULTIPLIER_2, INITIAL_AMOUNT } from './constants';

export const calculatePoints = (amount) => {
    let points = INITIAL_AMOUNT;

    if (amount > POINTS_THRESHOLD_1) {
        points += POINTS_MULTIPLIER_1 * (amount - POINTS_THRESHOLD_1);
    }

    if (amount > POINTS_THRESHOLD_2 && amount <= POINTS_THRESHOLD_1) {
        points += POINTS_MULTIPLIER_2 * (amount - POINTS_THRESHOLD_2);
    }

    return points;
};

export const processUserData = (userData) => {
    let userExpensesData = {};
    let userPointsData = {};
    const monthlyExpensesData = {};

    userData.forEach((transaction) => {
        const points = calculatePoints(transaction.amount);

        if (!userExpensesData[transaction.userName]) {
            userExpensesData[transaction.userName] = INITIAL_AMOUNT;
            userPointsData[transaction.userName] = INITIAL_AMOUNT;
        }

        userExpensesData[transaction.userName] += transaction.amount;
        userPointsData[transaction.userName] += points;

        if (!monthlyExpensesData[transaction.userName]) {
            monthlyExpensesData[transaction.userName] = {};
        }

        if (!monthlyExpensesData[transaction.userName][transaction.month]) {
            monthlyExpensesData[transaction.userName][transaction.month] = {
                total: INITIAL_AMOUNT,
                points: INITIAL_AMOUNT,
            };
        }

        monthlyExpensesData[transaction.userName][transaction.month].total += transaction.amount;
        monthlyExpensesData[transaction.userName][transaction.month].points += points;
    });

    return { userExpensesData, userPointsData, monthlyExpensesData };
};
