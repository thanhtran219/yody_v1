"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstDayOfPreviousMonthAndCurrentDate = void 0;
const getFirstDayOfPreviousMonthAndCurrentDate = () => {
    const currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0);
    // Get first day of previous month
    const firstDayOfPreviousMonth = new Date();
    firstDayOfPreviousMonth.setUTCHours(0, 0, 0, 0);
    firstDayOfPreviousMonth.setUTCMonth(firstDayOfPreviousMonth.getMonth() - 1);
    firstDayOfPreviousMonth.setUTCDate(1);
    return {
        firstDayOfPreviousMonth,
        currentDate,
    };
};
exports.getFirstDayOfPreviousMonthAndCurrentDate = getFirstDayOfPreviousMonthAndCurrentDate;
