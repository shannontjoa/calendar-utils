const calendarUtil = require('./calendarUtil.js');

console.log(
  calendarUtil.countDaysBetweenDate(process.argv[2], process.argv[3]),
);
