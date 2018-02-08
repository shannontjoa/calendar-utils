/*
 * Return number of days since the beginning of the year
 * @params: an object with day, month, and year properties
 */
const countDaysToDate = ({ day, month, year }) => {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysInMonthLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysInMonthMap = isLeapYear(year) ? daysInMonthLeap : daysInMonth;

  let totalDays = 0;
  for (let i = 0; i <= month - 1; i++) {
    if (i === month - 1) {
      totalDays += day;
    } else {
      totalDays += daysInMonthMap[i];
    }
  }
  return totalDays;
};

// Returns number of days between startYear and endYear inclusively.
const countDaysBetweenYears = (startYear, endYear) => {
  let totalDays = 0;
  for (let i = startYear; i <= endYear; i++) {
    totalDays += countDaysInYear(i);
  }
  return totalDays;
};

const isLeapYear = year => {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

const countDaysInYear = year => (isLeapYear(year) ? 366 : 365);

/* Returns an object with day, month, and year properties
 * @param 'dd/mm/yyy'
 */
const buildDateObj = input => {
  const dateArray = input.split('/');
  return {
    day: parseInt(dateArray[0], 10),
    month: parseInt(dateArray[1], 10),
    year: parseInt(dateArray[2], 10),
  };
};

const countDaysBetweenDate = (input1, input2) => {
  const date1 = buildDateObj(input1);
  const date2 = buildDateObj(input2);

  let startDate = date1;
  let endDate = date2;

  // Just in case the user entered the 'endDate' first
  if (
    date1.year > date2.year ||
    (date1.year === date2.year && date1.month > date2.month) ||
    (date1.year === date2.year &&
      date1.month === date2.month &&
      date1.day > date2.day)
  ) {
    startDate = date2;
    endDate = date1;
  }

  // Same year
  if (endDate.year === startDate.year) {
    let numberOfDays = countDaysToDate(endDate) - countDaysToDate(startDate);
    return numberOfDays > 0 ? numberOfDays - 1 : numberOfDays;
  }

  // One year different
  if (endDate.year === startDate.year + 1) {
    return (
      countDaysInYear(startDate.year) - countDaysToDate(startDate) +
      countDaysToDate(endDate) - 1
    );
  }

  // Multiple years
  return (
    countDaysInYear(startDate.year) - countDaysToDate(startDate) +
    countDaysBetweenYears(startDate.year + 1, endDate.year - 1) +
    countDaysToDate(endDate) - 1
  );
};

module.exports.isLeapYear = isLeapYear;
module.exports.countDaysBetweenYears = countDaysBetweenYears;
module.exports.countDaysToDate = countDaysToDate;
module.exports.countDaysInYear = countDaysInYear;
module.exports.countDaysBetweenDate = countDaysBetweenDate;
