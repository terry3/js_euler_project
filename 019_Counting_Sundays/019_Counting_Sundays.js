/*
 You are given the following information, but you may prefer to do
 some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a
 century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth
 century (1 Jan 1901 to 31 Dec 2000)?
 */

// 1 Jan 1900 was a Monday. So 1 Jan 1901 was a Webnesday.
var monthDays =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var sundays = 0;
var days = 365 + 1;             // plus 1 means the first day of 1901

var isLeapYear = function(year) {
  if ((0 === year % 4 && 0 !== year % 100)
      || 0 === year % 400) {
    return true;
  }
  return false;
};

// 4
for (var i = 1901; i <= 2000; i++) {
  for (var j = 0; j < monthDays.length; j++) {
    if (1 === j) {
      if (isLeapYear(i)) {
        days += 29;
      } else {
        days += 28;
      }
    } else {
      days += monthDays[j];
    }
    if (days % 7 === 0) {
      sundays += 1;
    }
  }
}

console.log(sundays);
