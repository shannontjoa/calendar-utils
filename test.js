const test = require('tape');
const calendarUtil = require('./calendarUtil.js');

test('Leap year test', function(assert) {
  assert.plan(5);
  assert.equal(calendarUtil.isLeapYear(2004), true, '2004 is a leap year');
  assert.equal(calendarUtil.isLeapYear(2016), true, '2016 is a leap year');
  assert.equal(calendarUtil.isLeapYear(2021), false, '2021 is NOT a leap year');
  assert.equal(calendarUtil.isLeapYear(2080), true, '2080 is a leap year');
  assert.equal(calendarUtil.isLeapYear(2042), false, '2042 is NOT a leap year');
});

test('number of days between years test', function(assert) {
  assert.plan(5);
  assert.equal(
    calendarUtil.countDaysBetweenYears(2004, 2006),
    1096,
    'There are 1096 days between 2004 and 2006',
  );
  assert.equal(
    calendarUtil.countDaysBetweenYears(1977, 1977),
    365,
    'There are 365 days between 1977 and 1977',
  );
  assert.equal(
    calendarUtil.countDaysBetweenYears(1768, 1990),
    81449,
    'There are 81449 days between 1768 and 1990',
  );
  assert.equal(
    calendarUtil.countDaysBetweenYears(1543, 1823),
    102633,
    'There are 102633 days between 1543 and 1823',
  );
  assert.equal(
    calendarUtil.countDaysBetweenYears(2042, 2045),
    1461,
    'There are 1461 days between 2042 and 2045',
  );
});

test('number of days to date test', function(assert) {
  assert.plan(4);
  assert.equal(
    calendarUtil.countDaysToDate({ day: 3, month: 8, year: 1983 }),
    215,
    '3/8/1983: Days to date: 215',
  );
  assert.equal(
    calendarUtil.countDaysToDate({ day: 3, month: 8, year: 2004 }),
    216,
    '3/8/2004(Leap Year): Days to date: 216',
  );
  assert.equal(
    calendarUtil.countDaysToDate({ day: 1, month: 1, year: 1234 }),
    1,
    '1/1/1234: Days to date: 1',
  );
  assert.equal(
    calendarUtil.countDaysToDate({ day: 31, month: 12, year: 1977 }),
    365,
    '31/12/1977: Days to date: 365',
  );
});

test('number of days in year', function(assert) {
  assert.plan(4);
  assert.equal(
    calendarUtil.countDaysInYear(2020),
    366,
    'There are 366 days in 2020',
  );
  assert.equal(
    calendarUtil.countDaysInYear(1234),
    365,
    'There are 365 days in 1234',
  );
  assert.equal(
    calendarUtil.countDaysInYear(2080),
    366,
    'There are 366 days in 2080',
  );
  assert.equal(
    calendarUtil.countDaysInYear(1765),
    365,
    'There are 365 days in 1765',
  );
});

test('number of days between dates', function(assert) {
  assert.plan(7);
  assert.equal(
    calendarUtil.countDaysBetweenDate('07/11/1972', '08/11/1972'),
    0,
    'Elapsed days between 07/11/1972 to 08/11/1972: 0',
  );
  assert.equal(
    calendarUtil.countDaysBetweenDate('20/7/1822', '20/7/1822'),
    0,
    'Elapsed days between 20/7/1822 to 20/7/1822: 0',
  );
  assert.equal(
    calendarUtil.countDaysBetweenDate('01/01/2000', '03/01/2000'),
    1,
    'Elapsed days between 01/01/2000 to 03/01/2000: 1',
  );
  assert.equal(
    calendarUtil.countDaysBetweenDate('02/06/1983', '22/06/1983'),
    19,
    'Elapsed days between 02/06/1983 to 22/06/1983: 215',
  );
  assert.equal(
    calendarUtil.countDaysBetweenDate('04/07/1984', '25/12/1984'),
    173,
    'Elapsed days between 04/07/1984 to 25/12/1984: 173',
  );
  assert.equal(
    calendarUtil.countDaysBetweenDate('03/01/1989', '03/08/1983'),
    1979,
    'Elapsed days between 03/01/1989 to 03/08/1983: 1979',
  );
  assert.equal(
    calendarUtil.countDaysBetweenDate('01/01/1901', '31/12/2999'),
    401400,
    'Elapsed days between 01/01/1901 to 31/12/2999: 401400',
  );
});
