export const getFirstDayOfPreviousMonthAndCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setUTCHours(0,0,0,0);

  // Get first day of previous month
  const firstDayOfPreviousMonth = new Date();
  firstDayOfPreviousMonth.setUTCHours(0,0,0,0);
  firstDayOfPreviousMonth.setUTCMonth(firstDayOfPreviousMonth.getMonth() - 1);
  firstDayOfPreviousMonth.setUTCDate(1);

  return {
    firstDayOfPreviousMonth,
    currentDate,
  };
};
