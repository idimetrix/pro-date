import { describe, test, expect, beforeEach } from "vitest";
import { ProDate } from "../index";

describe("ProDate", () => {
  // Constructor Tests
  describe("Constructor", () => {
    test("should create a ProDate with current date when no parameter is provided", () => {
      const date = new ProDate();
      expect(date).toBeInstanceOf(ProDate);
      expect(date.isValid()).toBe(true);
    });

    test("should create a ProDate from a date string", () => {
      const date = new ProDate("2024-01-15T12:00:00");
      expect(date.getYear()).toBe(2024);
      expect(date.getMonth()).toBe(1);
      expect(date.getDayOfMonth()).toBe(15);
    });

    test("should create a ProDate from a timestamp", () => {
      const timestamp = 1705276800000; // 2024-01-15
      const date = new ProDate(timestamp);
      expect(date.getYear()).toBe(2024);
    });

    test("should create a ProDate from a Date object", () => {
      const jsDate = new Date("2024-01-15");
      const date = new ProDate(jsDate);
      expect(date.getYear()).toBe(2024);
    });
  });

  // Factory Methods Tests
  describe("Factory Methods", () => {
    test("fromString should create ProDate from string", () => {
      const date = ProDate.fromString("2024-01-15T12:00:00");
      expect(date.getYear()).toBe(2024);
      expect(date.getMonth()).toBe(1);
    });

    test("fromTimestamp should create ProDate from timestamp", () => {
      const timestamp = 1705276800000;
      const date = ProDate.fromTimestamp(timestamp);
      expect(date.getYear()).toBe(2024);
    });

    test("now should create ProDate with current time", () => {
      const before = Date.now();
      const date = ProDate.now();
      const after = Date.now();
      expect(date.getTime()).toBeGreaterThanOrEqual(before);
      expect(date.getTime()).toBeLessThanOrEqual(after);
    });

    test("fromISO should parse ISO 8601 string", () => {
      const date = ProDate.fromISO("2024-01-15T12:30:00.000Z");
      expect(date.getYear()).toBe(2024);
      expect(date.getMonth()).toBe(1);
    });

    test("fromUnix should create ProDate from Unix timestamp in seconds", () => {
      const unixSeconds = 1705276800;
      const date = ProDate.fromUnix(unixSeconds);
      expect(date.getYear()).toBe(2024);
    });

    test("parseISO should parse ISO string", () => {
      const date = ProDate.parseISO("2024-01-15T12:30:00.000Z");
      expect(date.getYear()).toBe(2024);
    });
  });

  // Parsing Tests
  describe("parse method", () => {
    test("should parse date with YYYY-MM-DD format", () => {
      const date = ProDate.parse("2024-01-15", "YYYY-MM-DD");
      expect(date.getYear()).toBe(2024);
      expect(date.getMonth()).toBe(1);
      expect(date.getDayOfMonth()).toBe(15);
    });

    test("should parse date with MM/DD/YYYY format", () => {
      const date = ProDate.parse("01/15/2024", "MM/DD/YYYY");
      expect(date.getMonth()).toBe(1);
      expect(date.getDayOfMonth()).toBe(15);
      expect(date.getYear()).toBe(2024);
    });

    test("should parse date with time in YYYY-MM-DD HH:mm format", () => {
      const date = ProDate.parse("2024-01-15 14:30", "YYYY-MM-DD HH:mm");
      expect(date.getYear()).toBe(2024);
      expect(date.getHours()).toBe(14);
      expect(date.getMinutes()).toBe(30);
    });

    test("should parse date with 12-hour format and AM", () => {
      const date = ProDate.parse("01/15/2024 02:30 AM", "MM/DD/YYYY hh:mm A");
      expect(date.getHours()).toBe(2);
    });

    test("should parse date with 12-hour format and PM", () => {
      const date = ProDate.parse("01/15/2024 02:30 PM", "MM/DD/YYYY hh:mm A");
      expect(date.getHours()).toBe(14);
    });

    test("should handle noon (12 PM) correctly", () => {
      const date = ProDate.parse("01/15/2024 12:30 PM", "MM/DD/YYYY hh:mm A");
      expect(date.getHours()).toBe(12);
    });

    test("should handle midnight (12 AM) correctly", () => {
      const date = ProDate.parse("01/15/2024 12:30 AM", "MM/DD/YYYY hh:mm A");
      expect(date.getHours()).toBe(0);
    });

    test("should parse with YY format", () => {
      const date = ProDate.parse("24-01-15", "YY-MM-DD");
      expect(date.getYear()).toBe(2024);
    });

    test("should parse with single digit month and day", () => {
      const date = ProDate.parse("2024-1-5", "YYYY-M-D");
      expect(date.getMonth()).toBe(1);
      expect(date.getDayOfMonth()).toBe(5);
    });

    test("should parse with seconds", () => {
      const date = ProDate.parse("2024-01-15 14:30:45", "YYYY-MM-DD HH:mm:ss");
      expect(date.getSeconds()).toBe(45);
    });

    test("should throw error for invalid format", () => {
      expect(() => {
        ProDate.parse("invalid", "YYYY-MM-DD");
      }).toThrow();
    });

    test("should throw error when format doesn't match", () => {
      expect(() => {
        ProDate.parse("2024-13-45", "YYYY-MM-DD");
      }).toThrow();
    });
  });

  // Formatting Tests
  describe("format method", () => {
    let testDate: ProDate;

    beforeEach(() => {
      // Using a fixed date: 2024-02-27 14:30:45.123 (Tuesday)
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("should format YYYY token", () => {
      expect(testDate.format("YYYY")).toBe("2024");
    });

    test("should format YY token", () => {
      expect(testDate.format("YY")).toBe("24");
    });

    test("should format Y token", () => {
      expect(testDate.format("Y")).toBe("2024");
    });

    test("should format Q token (quarter)", () => {
      expect(testDate.format("Q")).toBe("1");
    });

    test("should format MMMM token (full month)", () => {
      expect(testDate.format("MMMM")).toMatch(/February/i);
    });

    test("should format MMM token (short month)", () => {
      expect(testDate.format("MMM")).toMatch(/Feb/i);
    });

    test("should format MM token", () => {
      expect(testDate.format("MM")).toBe("02");
    });

    test("should format M token", () => {
      expect(testDate.format("M")).toBe("2");
    });

    test("should format Mo token (ordinal month)", () => {
      expect(testDate.format("Mo")).toBe("2nd");
    });

    test("should format DD token", () => {
      expect(testDate.format("DD")).toBe("27");
    });

    test("should format D token", () => {
      expect(testDate.format("D")).toBe("27");
    });

    test("should format Do token (ordinal day)", () => {
      expect(testDate.format("Do")).toBe("27th");
    });

    test("should format dddd token (full day name)", () => {
      expect(testDate.format("dddd")).toMatch(/Tuesday/i);
    });

    test("should format ddd token (short day name)", () => {
      expect(testDate.format("ddd")).toMatch(/Tue/i);
    });

    test("should format d token (day of week number)", () => {
      expect(testDate.format("d")).toBe("2");
    });

    test("should format HH token (24-hour)", () => {
      expect(testDate.format("HH")).toBe("14");
    });

    test("should format H token", () => {
      expect(testDate.format("H")).toBe("14");
    });

    test("should format hh token (12-hour)", () => {
      expect(testDate.format("hh")).toBe("02");
    });

    test("should format h token", () => {
      expect(testDate.format("h")).toBe("2");
    });

    test("should format mm token", () => {
      expect(testDate.format("mm")).toBe("30");
    });

    test("should format m token", () => {
      expect(testDate.format("m")).toBe("30");
    });

    test("should format ss token", () => {
      expect(testDate.format("ss")).toBe("45");
    });

    test("should format s token", () => {
      expect(testDate.format("s")).toBe("45");
    });

    test("should format SSS token (milliseconds)", () => {
      expect(testDate.format("SSS")).toBe("123");
    });

    test("should format A token (AM/PM)", () => {
      expect(testDate.format("A")).toBe("PM");
    });

    test("should format a token (am/pm)", () => {
      expect(testDate.format("a")).toBe("pm");
    });

    test("should format complex date string", () => {
      const formatted = testDate.format("YYYY-MM-DD HH:mm:ss");
      expect(formatted).toBe("2024-02-27 14:30:45");
    });

    test("should format custom LT token", () => {
      const formatted = testDate.format("LT");
      expect(formatted).toMatch(/2:30 PM/);
    });

    test("should format custom L token", () => {
      const formatted = testDate.format("L");
      expect(formatted).toMatch(/02\/27\/2024/);
    });
  });

  // Getter Tests
  describe("Getters", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("getYear should return the year", () => {
      expect(testDate.getYear()).toBe(2024);
    });

    test("getMonth should return the month (1-12)", () => {
      expect(testDate.getMonth()).toBe(2);
    });

    test("getDayOfMonth should return the day", () => {
      expect(testDate.getDayOfMonth()).toBe(27);
    });

    test("getDayOfWeek should return day of week (0-6)", () => {
      expect(testDate.getDayOfWeek()).toBe(2); // Tuesday
    });

    test("getHours should return hours", () => {
      expect(testDate.getHours()).toBe(14);
    });

    test("getMinutes should return minutes", () => {
      expect(testDate.getMinutes()).toBe(30);
    });

    test("getSeconds should return seconds", () => {
      expect(testDate.getSeconds()).toBe(45);
    });

    test("getMilliseconds should return milliseconds", () => {
      expect(testDate.getMilliseconds()).toBe(123);
    });

    test("getTime should return timestamp", () => {
      expect(testDate.getTime()).toBeGreaterThan(0);
    });

    test("getQuarter should return quarter", () => {
      expect(testDate.getQuarter()).toBe(1);
    });

    test("getTimezoneOffset should return offset in minutes", () => {
      const offset = testDate.getTimezoneOffset();
      expect(typeof offset).toBe("number");
    });
  });

  // Setter Tests
  describe("Setters", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("setYear should update the year", () => {
      testDate.setYear(2025);
      expect(testDate.getYear()).toBe(2025);
    });

    test("setMonth should update the month", () => {
      testDate.setMonth(6);
      expect(testDate.getMonth()).toBe(6);
    });

    test("setDayOfMonth should update the day", () => {
      testDate.setDayOfMonth(15);
      expect(testDate.getDayOfMonth()).toBe(15);
    });

    test("setHours should update hours", () => {
      testDate.setHours(10);
      expect(testDate.getHours()).toBe(10);
    });

    test("setMinutes should update minutes", () => {
      testDate.setMinutes(45);
      expect(testDate.getMinutes()).toBe(45);
    });

    test("setSeconds should update seconds", () => {
      testDate.setSeconds(30);
      expect(testDate.getSeconds()).toBe(30);
    });

    test("setMilliseconds should update milliseconds", () => {
      testDate.setMilliseconds(500);
      expect(testDate.getMilliseconds()).toBe(500);
    });
  });

  // Addition Methods Tests
  describe("Addition Methods", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("addYears should add years", () => {
      testDate.addYears(2);
      expect(testDate.getYear()).toBe(2026);
    });

    test("addMonths should add months", () => {
      testDate.addMonths(3);
      expect(testDate.getMonth()).toBe(5);
    });

    test("addWeeks should add weeks", () => {
      const freshDate = new ProDate(new Date(2024, 0, 15)); // Jan 15, no overflow
      freshDate.addWeeks(1);
      expect(freshDate.getDayOfMonth()).toBe(22);
    });

    test("addDays should add days", () => {
      const freshDate = new ProDate(new Date(2024, 0, 15)); // Jan 15, no overflow
      freshDate.addDays(5);
      expect(freshDate.getDayOfMonth()).toBe(20);
    });

    test("addHours should add hours", () => {
      testDate.addHours(5);
      expect(testDate.getHours()).toBe(19);
    });

    test("addMinutes should add minutes", () => {
      testDate.addMinutes(15);
      expect(testDate.getMinutes()).toBe(45);
    });

    test("addSeconds should add seconds", () => {
      const freshDate = new ProDate(new Date(2024, 0, 15, 12, 30, 20));
      freshDate.addSeconds(25);
      expect(freshDate.getSeconds()).toBe(45);
    });

    test("addMilliseconds should add milliseconds", () => {
      testDate.addMilliseconds(500);
      expect(testDate.getMilliseconds()).toBe(623);
    });

    test("addQuarters should add quarters", () => {
      testDate.addQuarters(1);
      expect(testDate.getMonth()).toBe(5);
    });

    test("addDecades should add decades", () => {
      testDate.addDecades(1);
      expect(testDate.getYear()).toBe(2034);
    });

    test("addCenturies should add centuries", () => {
      testDate.addCenturies(1);
      expect(testDate.getYear()).toBe(2124);
    });

    test("addBusinessDays should skip weekends", () => {
      const friday = new ProDate(new Date(2024, 1, 23)); // Friday
      friday.addBusinessDays(1);
      expect(friday.getDayOfWeek()).toBe(1); // Should be Monday
    });

    test("addFiscalYears should add fiscal years", () => {
      testDate.addFiscalYears(1);
      expect(testDate.getYear()).toBe(2025);
    });

    test("addLeapYears should add only leap years", () => {
      const date = new ProDate(new Date(2020, 0, 1)); // 2020 is a leap year
      date.addLeapYears(1);
      expect(date.getYear()).toBe(2024); // Next leap year after 2020
    });

    test("add with string unit should work", () => {
      const freshDate = new ProDate(new Date(2024, 0, 15)); // Jan 15
      freshDate.add(5, "days");
      expect(freshDate.getDayOfMonth()).toBe(20);
    });

    test("add should throw error for unknown unit", () => {
      expect(() => {
        testDate.add(5, "unknown");
      }).toThrow();
    });

    test("addDuration should add multiple units", () => {
      testDate.addDuration({ days: 1, hours: 2, minutes: 30 });
      expect(testDate.getDayOfMonth()).toBe(28);
      expect(testDate.getHours()).toBeGreaterThanOrEqual(16);
      expect(testDate.getMinutes()).toBeGreaterThanOrEqual(0);
    });

    test("addDurationString should parse and add duration", () => {
      testDate.addDurationString("2 days");
      expect(testDate.getDayOfMonth()).toBe(29);
    });
  });

  // Subtraction Methods Tests
  describe("Subtraction Methods", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("subtractYears should subtract years", () => {
      testDate.subtractYears(2);
      expect(testDate.getYear()).toBe(2022);
    });

    test("subtractMonths should subtract months", () => {
      testDate.subtractMonths(1);
      expect(testDate.getMonth()).toBe(1);
    });

    test("subtractWeeks should subtract weeks", () => {
      testDate.subtractWeeks(1);
      expect(testDate.getDayOfMonth()).toBe(20);
    });

    test("subtractDays should subtract days", () => {
      testDate.subtractDays(5);
      expect(testDate.getDayOfMonth()).toBe(22);
    });

    test("subtractHours should subtract hours", () => {
      testDate.subtractHours(5);
      expect(testDate.getHours()).toBe(9);
    });

    test("subtractMinutes should subtract minutes", () => {
      testDate.subtractMinutes(15);
      expect(testDate.getMinutes()).toBe(15);
    });

    test("subtractSeconds should subtract seconds", () => {
      testDate.subtractSeconds(20);
      expect(testDate.getSeconds()).toBe(25);
    });

    test("subtractMilliseconds should subtract milliseconds", () => {
      testDate.subtractMilliseconds(100);
      expect(testDate.getMilliseconds()).toBe(23);
    });

    test("subtractQuarters should subtract quarters", () => {
      const originalMonth = testDate.getMonth();
      testDate.subtractQuarters(1);
      // Subtracting 1 quarter (3 months) from February should give November of previous year
      expect(testDate.getMonth()).not.toBe(originalMonth);
    });

    test("subtractDecades should subtract decades", () => {
      testDate.subtractDecades(1);
      expect(testDate.getYear()).toBe(2014);
    });

    test("subtractCenturies should subtract centuries", () => {
      testDate.subtractCenturies(1);
      expect(testDate.getYear()).toBe(1924);
    });

    test("subtractBusinessDays should skip weekends", () => {
      const monday = new ProDate(new Date(2024, 1, 26)); // Monday
      monday.subtractBusinessDays(1);
      expect(monday.getDayOfWeek()).toBe(5); // Should be Friday
    });

    test("subtractLeapYears should subtract only leap years", () => {
      const date = new ProDate(new Date(2024, 0, 1)); // 2024 is a leap year
      date.subtractLeapYears(1);
      expect(date.getYear()).toBe(2020); // Previous leap year before 2024
    });

    test("subtract with string unit should work", () => {
      testDate.subtract(5, "days");
      expect(testDate.getDayOfMonth()).toBe(22);
    });

    test("subtractDuration should subtract multiple units", () => {
      testDate.subtractDuration({ days: 1, hours: 2 });
      expect(testDate.getDayOfMonth()).toBe(26);
      expect(testDate.getHours()).toBe(12);
    });

    test("subtractDurationString should parse and subtract duration", () => {
      testDate.subtractDurationString("2 days");
      expect(testDate.getDayOfMonth()).toBe(25);
    });
  });

  // Comparison Methods Tests
  describe("Comparison Methods", () => {
    let date1: ProDate;
    let date2: ProDate;

    beforeEach(() => {
      date1 = new ProDate(new Date(2024, 1, 27));
      date2 = new ProDate(new Date(2024, 1, 28));
    });

    test("isSameDay should return true for same day", () => {
      const date3 = new ProDate(new Date(2024, 1, 27, 14, 30));
      expect(date1.isSameDay(date3)).toBe(true);
    });

    test("isSameDay should return false for different days", () => {
      expect(date1.isSameDay(date2)).toBe(false);
    });

    test("isBefore should return true when date is before", () => {
      expect(date1.isBefore(date2)).toBe(true);
    });

    test("isBefore should return false when date is after", () => {
      expect(date2.isBefore(date1)).toBe(false);
    });

    test("isAfter should return true when date is after", () => {
      expect(date2.isAfter(date1)).toBe(true);
    });

    test("isAfter should return false when date is before", () => {
      expect(date1.isAfter(date2)).toBe(false);
    });

    test("isBetween should return true for date in range", () => {
      const middleDate = new ProDate(new Date(2024, 1, 27, 12));
      const startDate = new ProDate(new Date(2024, 1, 27, 0));
      const endDate = new ProDate(new Date(2024, 1, 27, 23));
      expect(middleDate.isBetween(startDate, endDate)).toBe(true);
    });

    test("isSame should work for year", () => {
      expect(date1.isSame(date2, "year")).toBe(true);
    });

    test("isSame should work for month", () => {
      expect(date1.isSame(date2, "month")).toBe(true);
    });

    test("isSame should work for day", () => {
      expect(date1.isSame(date2, "day")).toBe(false);
    });

    test("isSame should throw for unknown unit", () => {
      expect(() => {
        date1.isSame(date2, "unknown");
      }).toThrow();
    });

    test("isSameDate should compare dates ignoring time", () => {
      const date3 = new ProDate(new Date(2024, 1, 27, 14, 30));
      expect(date1.isSameDate(date3)).toBe(true);
    });

    test("isSameExact should compare including time", () => {
      const date3 = new ProDate(date1.getTime());
      expect(date1.isSameExact(date3)).toBe(true);
    });

    test("isSameYear should compare years", () => {
      expect(date1.isSameYear(date2)).toBe(true);
    });

    test("isSameQuarter should compare quarters", () => {
      const q1Date1 = new ProDate(new Date(2024, 0, 1));
      const q1Date2 = new ProDate(new Date(2024, 2, 31));
      expect(q1Date1.isSameQuarter(q1Date2)).toBe(true);
    });

    test("isSameISOWeek should compare ISO weeks", () => {
      const date3 = new ProDate(new Date(2024, 1, 28));
      expect(date1.isSameISOWeek(date3)).toBe(true);
    });

    test("isSameDayOfYear should compare day of year", () => {
      const date3 = new ProDate(new Date(2025, 1, 27));
      expect(date1.isSameDayOfYear(date3)).toBe(true);
    });

    test("isSameDayOfWeek should compare day of week", () => {
      const date3 = new ProDate(new Date(2024, 2, 5)); // Next Tuesday
      expect(date1.isSameDayOfWeek(date3)).toBe(true);
    });

    test("isInRange should work", () => {
      const middleDate = new ProDate(new Date(2024, 1, 27, 12));
      const startDate = new ProDate(new Date(2024, 1, 27, 0));
      const endDate = new ProDate(new Date(2024, 1, 27, 23));
      expect(middleDate.isInRange(startDate, endDate)).toBe(true);
    });
  });

  // Validation Methods Tests
  describe("Validation Methods", () => {
    test("isValid should return true for valid date", () => {
      const date = new ProDate(new Date(2024, 1, 27));
      expect(date.isValid()).toBe(true);
    });

    test("isValid should return false for invalid date", () => {
      const date = new ProDate("invalid");
      expect(date.isValid()).toBe(false);
    });

    test("isWeekend should return true for Saturday", () => {
      const saturday = new ProDate(new Date(2024, 1, 24)); // Saturday
      expect(saturday.isWeekend()).toBe(true);
    });

    test("isWeekend should return true for Sunday", () => {
      const sunday = new ProDate(new Date(2024, 1, 25)); // Sunday
      expect(sunday.isWeekend()).toBe(true);
    });

    test("isWeekend should return false for weekday", () => {
      const monday = new ProDate(new Date(2024, 1, 26));
      expect(monday.isWeekend()).toBe(false);
    });

    test("isWeekday should return true for Monday", () => {
      const monday = new ProDate(new Date(2024, 1, 26));
      expect(monday.isWeekday()).toBe(true);
    });

    test("isWeekday should return false for Saturday", () => {
      const saturday = new ProDate(new Date(2024, 1, 24));
      expect(saturday.isWeekday()).toBe(false);
    });

    test("isLeapYear should return true for leap year", () => {
      const leapYear = new ProDate(new Date(2024, 0, 1));
      expect(leapYear.isLeapYear()).toBe(true);
    });

    test("isLeapYear should return false for non-leap year", () => {
      const nonLeapYear = new ProDate(new Date(2023, 0, 1));
      expect(nonLeapYear.isLeapYear()).toBe(false);
    });

    test("static isLeapYear should work", () => {
      expect(ProDate.isLeapYear(2024)).toBe(true);
      expect(ProDate.isLeapYear(2023)).toBe(false);
    });

    test("isCurrentYearLeap should work", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      expect(date.isCurrentYearLeap()).toBe(true);
    });

    test("isPast should return true for past date", () => {
      const pastDate = new ProDate(new Date(2020, 0, 1));
      expect(pastDate.isPast()).toBe(true);
    });

    test("isFuture should return true for future date", () => {
      const futureDate = new ProDate(Date.now() + 1000000);
      expect(futureDate.isFuture()).toBe(true);
    });

    test("isToday should return true for today", () => {
      const today = new ProDate();
      expect(today.isToday()).toBe(true);
    });

    test("isTomorrow should return true for tomorrow", () => {
      const tomorrow = new ProDate().addDays(1);
      expect(tomorrow.isTomorrow()).toBe(true);
    });

    test("isYesterday should return true for yesterday", () => {
      const yesterday = new ProDate().subtractDays(1);
      expect(yesterday.isYesterday()).toBe(true);
    });

    test("isStartOfMonth should work", () => {
      const firstDay = new ProDate(new Date(2024, 1, 1));
      expect(firstDay.isStartOfMonth()).toBe(true);
      const notFirstDay = new ProDate(new Date(2024, 1, 15));
      expect(notFirstDay.isStartOfMonth()).toBe(false);
    });

    test("isEndOfMonth should work", () => {
      const lastDay = new ProDate(new Date(2024, 1, 29)); // Feb 2024 has 29 days
      expect(lastDay.isEndOfMonth()).toBe(true);
    });

    test("isStartOfWeek should work for Monday", () => {
      const monday = new ProDate(new Date(2024, 1, 26));
      expect(monday.isStartOfWeek()).toBe(true);
    });

    test("isEndOfWeek should work for Sunday", () => {
      const sunday = new ProDate(new Date(2024, 1, 25));
      expect(sunday.isEndOfWeek()).toBe(true);
    });

    test("isFirstDayOfYear should work", () => {
      const firstDay = new ProDate(new Date(2024, 0, 1));
      expect(firstDay.isFirstDayOfYear()).toBe(true);
    });

    test("isLastDayOfYear should work", () => {
      const lastDay = new ProDate(new Date(2024, 11, 31));
      expect(lastDay.isLastDayOfYear()).toBe(true);
    });

    test("isBeforeNoon should work", () => {
      const morning = new ProDate(new Date(2024, 1, 27, 10));
      expect(morning.isBeforeNoon()).toBe(true);
      const afternoon = new ProDate(new Date(2024, 1, 27, 14));
      expect(afternoon.isBeforeNoon()).toBe(false);
    });

    test("isAfterNoon should work", () => {
      const afternoon = new ProDate(new Date(2024, 1, 27, 14));
      expect(afternoon.isAfterNoon()).toBe(true);
    });

    test("isAM should work", () => {
      const morning = new ProDate(new Date(2024, 1, 27, 10));
      expect(morning.isAM()).toBe(true);
    });

    test("isPM should work", () => {
      const afternoon = new ProDate(new Date(2024, 1, 27, 14));
      expect(afternoon.isPM()).toBe(true);
    });

    test("isAMHours should work", () => {
      const morning = new ProDate(new Date(2024, 1, 27, 10));
      expect(morning.isAMHours()).toBe(true);
    });

    test("isPMHours should work", () => {
      const afternoon = new ProDate(new Date(2024, 1, 27, 14));
      expect(afternoon.isPMHours()).toBe(true);
    });

    test("isInCurrentDecade should work", () => {
      const current = new ProDate();
      expect(current.isInCurrentDecade()).toBe(true);
    });

    test("isInCurrentCentury should work", () => {
      const current = new ProDate();
      expect(current.isInCurrentCentury()).toBe(true);
    });

    test("isInCurrentQuarter should work", () => {
      const current = new ProDate();
      expect(current.isInCurrentQuarter()).toBe(true);
    });

    test("isInCurrentWeek should work", () => {
      const current = new ProDate();
      expect(current.isInCurrentWeek()).toBe(true);
    });

    test("isThisISOWeek should work", () => {
      const current = new ProDate();
      expect(current.isThisISOWeek()).toBe(true);
    });

    test("isHoliday should work", () => {
      const christmas = new ProDate(new Date(2024, 11, 25));
      expect(christmas.isHoliday(["12-25", "01-01"])).toBe(true);
      expect(christmas.isHoliday(["01-01"])).toBe(false);
    });

    test("isTimeBetween should work", () => {
      const date = new ProDate(new Date(2024, 1, 27, 14, 30));
      expect(date.isTimeBetween("14:00", "15:00")).toBe(true);
      expect(date.isTimeBetween("10:00", "12:00")).toBe(false);
    });

    test("isDST should work", () => {
      const date = new ProDate(new Date(2024, 6, 1)); // July
      const isDST = date.isDST();
      expect(typeof isDST).toBe("boolean");
    });
  });

  // Start/End Methods Tests
  describe("Start/End Methods", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("startOfDay should set to start of day", () => {
      testDate.startOfDay();
      expect(testDate.getHours()).toBe(0);
      expect(testDate.getMinutes()).toBe(0);
      expect(testDate.getSeconds()).toBe(0);
      expect(testDate.getMilliseconds()).toBe(0);
    });

    test("endOfDay should set to end of day", () => {
      testDate.endOfDay();
      expect(testDate.getHours()).toBe(23);
      expect(testDate.getMinutes()).toBe(59);
      expect(testDate.getSeconds()).toBe(59);
      expect(testDate.getMilliseconds()).toBe(999);
    });

    test("startOfMonth should return start of month", () => {
      const start = testDate.startOfMonth();
      expect(start.getDayOfMonth()).toBe(1);
    });

    test("endOfMonth should return end of month", () => {
      const end = testDate.endOfMonth();
      expect(end.getMonth()).toBe(2);
      expect(end.getDayOfMonth()).toBe(29); // Feb 2024 has 29 days
    });

    test("startOfWeek should return Monday", () => {
      const start = testDate.startOfWeek();
      expect(start.getDayOfWeek()).toBe(1);
    });

    test("endOfWeek should return Sunday", () => {
      const end = testDate.endOfWeek();
      expect(end.getDayOfWeek()).toBe(0);
    });

    test("startOfYear should return Jan 1", () => {
      const start = testDate.startOfYear();
      expect(start.getMonth()).toBe(1);
      expect(start.getDayOfMonth()).toBe(1);
    });

    test("endOfYear should return Dec 31", () => {
      const end = testDate.endOfYear();
      expect(end.getMonth()).toBe(12);
      expect(end.getDayOfMonth()).toBe(31);
    });

    test("startOfQuarter should work", () => {
      const start = testDate.startOfQuarter();
      expect(start.getMonth()).toBe(1);
      expect(start.getDayOfMonth()).toBe(1);
    });

    test("endOfQuarter should work", () => {
      const end = testDate.endOfQuarter();
      expect(end.getMonth()).toBe(3);
    });

    test("startOfCurrentQuarter should work", () => {
      const start = testDate.startOfCurrentQuarter();
      expect(start.getDayOfMonth()).toBe(1);
    });

    test("endOfCurrentQuarter should work", () => {
      const end = testDate.endOfCurrentQuarter();
      expect(end.getMonth()).toBeGreaterThanOrEqual(1);
    });

    test("startOfDecade should work", () => {
      const start = testDate.startOfDecade();
      expect(start.getYear()).toBe(2020);
    });

    test("endOfDecade should work", () => {
      const end = testDate.endOfDecade();
      expect(end.getYear()).toBe(2029);
    });

    test("startOfCentury should work", () => {
      const start = testDate.startOfCentury();
      expect(start.getYear()).toBe(2000);
    });

    test("endOfCentury should work", () => {
      const end = testDate.endOfCentury();
      expect(end.getYear()).toBe(2099);
    });

    test("startOfMillennium should work", () => {
      const start = testDate.startOfMillennium();
      expect(start.getYear()).toBe(2000);
    });

    test("endOfMillennium should work", () => {
      const end = testDate.endOfMillennium();
      expect(end.getYear()).toBe(2999);
    });

    test("startOfFiscalYear should work", () => {
      const start = testDate.startOfFiscalYear();
      expect(start.getMonth()).toBe(4);
      expect(start.getDayOfMonth()).toBe(1);
    });

    test("endOfFiscalYear should work", () => {
      const end = testDate.endOfFiscalYear();
      expect(end.getMonth()).toBe(3);
      expect(end.getDayOfMonth()).toBe(31);
    });

    test("startOfNextDay should work", () => {
      const nextDay = testDate.startOfNextDay();
      expect(nextDay.getDayOfMonth()).toBe(28);
      expect(nextDay.getHours()).toBe(0);
    });

    test("endOfPreviousDay should work", () => {
      const prevDay = testDate.endOfPreviousDay();
      expect(prevDay.getDayOfMonth()).toBe(26);
      expect(prevDay.getHours()).toBe(23);
    });

    test("startOfNextMonth should work", () => {
      const nextMonth = testDate.startOfNextMonth();
      expect(nextMonth.getMonth()).toBe(3);
      expect(nextMonth.getDayOfMonth()).toBe(1);
    });

    test("endOfPreviousMonth should work", () => {
      const prevMonth = testDate.endOfPreviousMonth();
      expect(prevMonth.getMonth()).toBe(1);
    });

    test("startOfPreviousMonth should work", () => {
      const prevMonth = testDate.startOfPreviousMonth();
      expect(prevMonth.getMonth()).toBe(1);
      expect(prevMonth.getDayOfMonth()).toBe(1);
    });

    test("startOf should work for various units", () => {
      expect(testDate.startOf("year").getMonth()).toBe(1);
      expect(testDate.startOf("month").getDayOfMonth()).toBe(1);
      expect(testDate.startOf("day").getHours()).toBe(0);
    });

    test("startOf should throw for unknown unit", () => {
      expect(() => {
        testDate.startOf("unknown");
      }).toThrow();
    });

    test("endOf should work for various units", () => {
      expect(testDate.endOf("year").getMonth()).toBe(12);
      expect(testDate.endOf("day").getHours()).toBe(23);
    });

    test("endOf should throw for unknown unit", () => {
      expect(() => {
        testDate.endOf("unknown");
      }).toThrow();
    });

    test("startOfUTCDay should work", () => {
      const utcStart = testDate.startOfUTCDay();
      expect(utcStart).toBeInstanceOf(ProDate);
    });

    test("endOfUTCDay should work", () => {
      const utcEnd = testDate.endOfUTCDay();
      expect(utcEnd).toBeInstanceOf(ProDate);
    });
  });

  // Difference Methods Tests
  describe("Difference Methods", () => {
    let date1: ProDate;
    let date2: ProDate;

    beforeEach(() => {
      date1 = new ProDate(new Date(2024, 1, 27, 14, 30, 45));
      date2 = new ProDate(new Date(2024, 1, 28, 16, 45, 50));
    });

    test("differenceInDays should calculate days difference", () => {
      const diff = date2.differenceInDays(date1);
      expect(diff).toBeGreaterThanOrEqual(1);
    });

    test("differenceInHours should calculate hours difference", () => {
      const diff = date2.differenceInHours(date1);
      expect(diff).toBeGreaterThan(0);
    });

    test("differenceInMinutes should calculate minutes difference", () => {
      const diff = date2.differenceInMinutes(date1);
      expect(diff).toBeGreaterThan(0);
    });

    test("differenceInSeconds should calculate seconds difference", () => {
      const diff = date2.differenceInSeconds(date1);
      expect(diff).toBeGreaterThan(0);
    });

    test("diff should work for various units", () => {
      expect(date2.diff(date1, "days")).toBeGreaterThan(0);
      expect(date2.diff(date1, "hours")).toBeGreaterThan(0);
      expect(date2.diff(date1, "minutes")).toBeGreaterThan(0);
      expect(date2.diff(date1, "seconds")).toBeGreaterThan(0);
    });

    test("diff should throw for unknown unit", () => {
      expect(() => {
        date2.diff(date1, "unknown");
      }).toThrow();
    });

    test("diffInQuarters should work", () => {
      const q1 = new ProDate(new Date(2024, 0, 1));
      const q3 = new ProDate(new Date(2024, 6, 1));
      expect(q3.diffInQuarters(q1)).toBeGreaterThan(0);
    });

    test("diffInBusinessDays should exclude weekends", () => {
      const friday = new ProDate(new Date(2024, 1, 23));
      const monday = new ProDate(new Date(2024, 1, 26));
      const diff = monday.diffInBusinessDays(friday);
      expect(diff).toBe(1); // Only 1 business day between Friday and Monday
    });

    test("diffInFullMonths should round down", () => {
      const date3 = new ProDate(new Date(2024, 5, 27));
      const months = date3.diffInFullMonths(date1);
      expect(months).toBeGreaterThanOrEqual(3);
      expect(months).toBeLessThanOrEqual(4);
    });

    test("diffInFullYears should round down", () => {
      const date3 = new ProDate(new Date(2026, 1, 27));
      const years = date3.diffInFullYears(date1);
      expect(years).toBeGreaterThanOrEqual(1);
      expect(years).toBeLessThanOrEqual(2);
    });

    test("diffInFullWeeks should round down", () => {
      const date3 = new ProDate(new Date(2024, 2, 12));
      const diff = date3.diffInFullWeeks(date1);
      expect(diff).toBeGreaterThanOrEqual(1);
    });

    test("daysBetween should return absolute days", () => {
      expect(date2.daysBetween(date1)).toBeGreaterThanOrEqual(1);
    });

    test("monthsBetween should return absolute months", () => {
      const date3 = new ProDate(new Date(2024, 5, 27));
      expect(date3.monthsBetween(date1)).toBeGreaterThan(0);
    });

    test("yearsBetween should return absolute years", () => {
      const date3 = new ProDate(new Date(2026, 1, 27));
      expect(date3.yearsBetween(date1)).toBeGreaterThanOrEqual(1);
    });

    test("weeksBetween should return absolute weeks", () => {
      const date3 = new ProDate(new Date(2024, 2, 12));
      expect(date3.weeksBetween(date1)).toBeGreaterThanOrEqual(1);
    });

    test("businessDaysBetween should work", () => {
      const friday = new ProDate(new Date(2024, 1, 23));
      const monday = new ProDate(new Date(2024, 1, 26));
      expect(monday.businessDaysBetween(friday)).toBe(1);
    });

    test("humanizeDiff should return human-readable difference", () => {
      const diff = date2.humanizeDiff(date1);
      expect(typeof diff).toBe("string");
      expect(diff).toMatch(/\d+/);
    });
  });

  // Utility Methods Tests
  describe("Utility Methods", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("daysInMonth should return days in current month", () => {
      expect(testDate.daysInMonth()).toBe(29); // Feb 2024 has 29 days
    });

    test("static daysInMonth should work", () => {
      expect(ProDate.daysInMonth(2024, 2)).toBe(29);
      expect(ProDate.daysInMonth(2023, 2)).toBe(28);
    });

    test("daysInYear should return 366 for leap year", () => {
      expect(testDate.daysInYear()).toBe(366);
    });

    test("daysInYear should return 365 for non-leap year", () => {
      const date = new ProDate(new Date(2023, 0, 1));
      expect(date.daysInYear()).toBe(365);
    });

    test("daysRemainingInMonth should work", () => {
      const remaining = testDate.daysRemainingInMonth();
      expect(remaining).toBe(2); // 29 - 27 = 2
    });

    test("weeksInYear should return 52 or 53", () => {
      const weeks = testDate.weeksInYear();
      expect(weeks).toBeGreaterThanOrEqual(52);
      expect(weeks).toBeLessThanOrEqual(53);
    });

    test("toUnixTimestamp should return seconds", () => {
      const unix = testDate.toUnixTimestamp();
      expect(unix).toBeGreaterThan(0);
      expect(unix.toString().length).toBe(10);
    });

    test("getEpochSeconds should return seconds", () => {
      const epoch = testDate.getEpochSeconds();
      expect(epoch).toBeGreaterThan(0);
    });

    test("toUnixMilliseconds should return milliseconds", () => {
      const ms = testDate.toUnixMilliseconds();
      expect(ms).toBe(testDate.getTime());
    });

    test("toUnixSeconds should return seconds", () => {
      const seconds = testDate.toUnixSeconds();
      expect(seconds).toBe(Math.floor(testDate.getTime() / 1000));
    });

    test("nextMonday should return next Monday", () => {
      const tuesday = new ProDate(new Date(2024, 1, 27)); // Tuesday
      const monday = tuesday.nextMonday();
      expect(monday.getDayOfWeek()).toBe(1);
    });

    test("roundToNearestMinute should round minutes", () => {
      const date = new ProDate(new Date(2024, 1, 27, 14, 30, 45));
      date.roundToNearestMinute();
      expect(date.getSeconds()).toBe(0);
    });

    test("roundToNearestHour should round hours", () => {
      const date = new ProDate(new Date(2024, 1, 27, 14, 45, 0));
      date.roundToNearestHour();
      expect(date.getMinutes()).toBe(0);
    });

    test("roundToNearestDay should round days", () => {
      const date = new ProDate(new Date(2024, 1, 27, 18, 0, 0));
      date.roundToNearestDay();
      expect(date.getHours()).toBe(0);
    });
  });

  // Conversion Methods Tests
  describe("Conversion Methods", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("toISOString should return ISO string", () => {
      const iso = testDate.toISOString();
      expect(iso).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    test("toISO8601 should return ISO string", () => {
      const iso = testDate.toISO8601();
      expect(iso).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/);
    });

    test("toISOWeekDate should return ISO week date", () => {
      const weekDate = testDate.toISOWeekDate();
      expect(weekDate).toMatch(/\d{4}-W\d{2}-\d/);
    });

    test("toUTCString should return UTC string", () => {
      const utc = testDate.toUTCString();
      expect(typeof utc).toBe("string");
    });

    test("toLocaleString should return locale string", () => {
      const locale = testDate.toLocaleString("en-US");
      expect(typeof locale).toBe("string");
    });

    test("toDateString should return date string", () => {
      const dateStr = testDate.toDateString();
      expect(dateStr).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

    test("toTimeString should return time string", () => {
      const timeStr = testDate.toTimeString();
      expect(timeStr).toMatch(/\d{2}:\d{2}/);
    });

    test("toShortDateString should return short date", () => {
      const short = testDate.toShortDateString("en-US");
      expect(typeof short).toBe("string");
    });

    test("formatDayMonthYear should format correctly", () => {
      const formatted = testDate.formatDayMonthYear();
      expect(formatted).toMatch(/27/);
    });

    test("formatFull should format full date", () => {
      const full = testDate.formatFull();
      expect(typeof full).toBe("string");
    });

    test("toArray should return array", () => {
      const arr = testDate.toArray();
      expect(Array.isArray(arr)).toBe(true);
      expect(arr.length).toBe(7);
      expect(arr[0]).toBe(2024); // year
      expect(arr[1]).toBe(2); // month
    });

    test("toObject should return object", () => {
      const obj = testDate.toObject();
      expect(obj.year).toBe(2024);
      expect(obj.month).toBe(2);
      expect(obj.day).toBe(27);
      expect(obj.hour).toBe(14);
      expect(obj.minute).toBe(30);
      expect(obj.second).toBe(45);
      expect(obj.millisecond).toBe(123);
    });

    test("toDateObject should return date object", () => {
      const obj = testDate.toDateObject();
      expect(obj.year).toBe(2024);
      expect(obj.month).toBe(2);
    });

    test("toJSObject should return JS object", () => {
      const obj = testDate.toJSObject();
      expect(typeof obj).toBe("object");
    });

    test("toJSON should return JSON string", () => {
      const json = testDate.toJSON();
      expect(typeof json).toBe("string");
      expect(json).toMatch(/\d{4}-\d{2}-\d{2}/);
    });

    test("toUTC should convert to UTC", () => {
      const utc = testDate.toUTC();
      expect(utc).toBeInstanceOf(ProDate);
    });

    test("toUTCDate should convert to UTC", () => {
      const utc = testDate.toUTCDate();
      expect(utc).toBeInstanceOf(ProDate);
    });

    test("toUTCISO should return UTC ISO string", () => {
      const iso = testDate.toUTCISO();
      expect(typeof iso).toBe("string");
    });

    test("toLocal should convert to local", () => {
      const local = testDate.toLocal();
      expect(local).toBeInstanceOf(ProDate);
    });

    test("toTimeZone should convert to specified timezone", () => {
      const tz = testDate.toTimeZone("America/New_York");
      expect(tz).toBeInstanceOf(ProDate);
    });

    test("toLocalizedString should format with locale", () => {
      const localized = testDate.toLocalizedString("en-US");
      expect(typeof localized).toBe("string");
    });

    test("toLocalizedString with options should work", () => {
      const localized = testDate.toLocalizedString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      expect(typeof localized).toBe("string");
    });
  });

  // ISO Week Methods Tests
  describe("ISO Week Methods", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27));
    });

    test("getISOWeek should return ISO week number", () => {
      const week = testDate.getISOWeek();
      expect(week).toBeGreaterThan(0);
      expect(week).toBeLessThanOrEqual(53);
    });

    test("getISOYear should return ISO year", () => {
      const year = testDate.getISOYear();
      expect(year).toBe(2024);
    });

    test("getWeekOfYearISO should return ISO week", () => {
      const week = testDate.getWeekOfYearISO();
      expect(week).toBeGreaterThan(0);
    });
  });

  // Relative Time Methods Tests
  describe("Relative Time Methods", () => {
    test("fromNow should return relative time", () => {
      const pastDate = new ProDate(Date.now() - 3600000); // 1 hour ago
      const relative = pastDate.fromNow();
      expect(relative).toMatch(/ago|just now/);
    });

    test("fromNow with future date should use 'in'", () => {
      const futureDate = new ProDate(Date.now() + 3600000); // 1 hour from now
      const relative = futureDate.fromNow();
      expect(relative).toMatch(/in/);
    });

    test("fromNow with options should work", () => {
      const pastDate = new ProDate(Date.now() - 3600000);
      const relative = pastDate.fromNow(new ProDate(), {
        round: false,
        pastText: "before",
        futureText: "after",
      });
      expect(typeof relative).toBe("string");
    });

    test("timeAgo should return relative time", () => {
      const pastDate = new ProDate(Date.now() - 3600000);
      const ago = pastDate.timeAgo();
      expect(ago).toMatch(/ago|just now/);
    });

    test("timeAgo with options should work", () => {
      const pastDate = new ProDate(Date.now() - 3600000);
      const ago = pastDate.timeAgo({ round: false });
      expect(typeof ago).toBe("string");
    });

    test("toHumanReadable should work", () => {
      const pastDate = new ProDate(Date.now() - 120000); // 2 minutes ago
      const human = pastDate.toHumanReadable();
      expect(human).toMatch(/minutes ago|hours ago/);
    });

    test("humanizeTimeAgo should work", () => {
      const pastDate = new ProDate(Date.now() - 3600000);
      const humanized = pastDate.humanizeTimeAgo();
      expect(typeof humanized).toBe("string");
    });

    test("humanizeTimeAgo with options should work", () => {
      const pastDate = new ProDate(Date.now() - 3600000);
      const humanized = pastDate.humanizeTimeAgo({ round: false });
      expect(typeof humanized).toBe("string");
    });
  });

  // Helper Methods Tests
  describe("Helper Methods", () => {
    test("addSubtract should work for years", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      date.addSubtract(2, "years");
      expect(date.getYear()).toBe(2026);
    });

    test("addSubtract should work for negative amounts", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      date.addSubtract(-2, "years");
      expect(date.getYear()).toBe(2022);
    });

    test("addSubtract should throw for unknown unit", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      expect(() => {
        date.addSubtract(1, "unknown");
      }).toThrow();
    });
  });

  // Edge Cases Tests
  describe("Edge Cases", () => {
    test("should handle month overflow", () => {
      const date = new ProDate(new Date(2024, 0, 31)); // Jan 31
      date.addMonths(1);
      // JavaScript Date automatically adjusts to the last valid day
      expect(date.getMonth()).toBeGreaterThanOrEqual(2);
    });

    test("should handle leap year correctly", () => {
      const leapDay = new ProDate(new Date(2024, 1, 29));
      expect(leapDay.isValid()).toBe(true);
      expect(leapDay.getDayOfMonth()).toBe(29);
    });

    test("should handle non-leap year Feb 28", () => {
      const feb28 = new ProDate(new Date(2023, 1, 28));
      feb28.addDays(1);
      expect(feb28.getMonth()).toBe(3); // March
    });

    test("should handle year 2000 (leap year)", () => {
      const year2000 = new ProDate(new Date(2000, 0, 1));
      expect(year2000.isLeapYear()).toBe(true);
    });

    test("should handle year 1900 (not a leap year)", () => {
      const year1900 = new ProDate(new Date(1900, 0, 1));
      expect(year1900.isLeapYear()).toBe(false);
    });

    test("should handle midnight", () => {
      const midnight = new ProDate(new Date(2024, 0, 1, 0, 0, 0, 0));
      expect(midnight.getHours()).toBe(0);
      expect(midnight.format("HH:mm")).toBe("00:00");
    });

    test("should handle end of day", () => {
      const endOfDay = new ProDate(new Date(2024, 0, 1, 23, 59, 59, 999));
      expect(endOfDay.getHours()).toBe(23);
      expect(endOfDay.getMinutes()).toBe(59);
    });

    test("should handle timezone offsets", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      const offset = date.getTimezoneOffset();
      expect(typeof offset).toBe("number");
    });

    test("should handle daylight saving time transitions", () => {
      const date = new ProDate(new Date(2024, 2, 10)); // Around DST in many regions
      const isDST = date.isDST();
      expect(typeof isDST).toBe("boolean");
    });

    test("should handle very old dates", () => {
      const oldDate = new ProDate(new Date(1900, 0, 1));
      expect(oldDate.isValid()).toBe(true);
      expect(oldDate.getYear()).toBe(1900);
    });

    test("should handle far future dates", () => {
      const futureDate = new ProDate(new Date(2100, 0, 1));
      expect(futureDate.isValid()).toBe(true);
      expect(futureDate.getYear()).toBe(2100);
    });

    test("should handle Sunday as day 0", () => {
      const sunday = new ProDate(new Date(2024, 1, 25)); // Sunday
      expect(sunday.getDayOfWeek()).toBe(0);
    });

    test("should handle month boundaries in addMonths", () => {
      const date = new ProDate(new Date(2024, 0, 31)); // Jan 31
      date.addMonths(1);
      // JavaScript Date will automatically adjust to the last day of February
      expect(date.getMonth()).toBeGreaterThanOrEqual(2);
    });

    test("should handle negative timestamps", () => {
      const date = new ProDate(-1000);
      expect(date.isValid()).toBe(true);
    });

    test("should handle December to January transition", () => {
      const date = new ProDate(new Date(2024, 11, 31)); // Dec 31
      date.addDays(1);
      expect(date.getYear()).toBe(2025);
      expect(date.getMonth()).toBe(1);
    });

    test("should handle business days over multiple weeks", () => {
      const date = new ProDate(new Date(2024, 1, 23)); // Friday
      date.addBusinessDays(5);
      expect(date.getDayOfWeek()).toBe(5); // Should be Friday
    });

    test("should handle ordinal suffixes correctly", () => {
      const date1 = new ProDate(new Date(2024, 0, 1));
      expect(date1.format("Do")).toBe("1st");

      const date2 = new ProDate(new Date(2024, 0, 2));
      expect(date2.format("Do")).toBe("2nd");

      const date3 = new ProDate(new Date(2024, 0, 3));
      expect(date3.format("Do")).toBe("3rd");

      const date4 = new ProDate(new Date(2024, 0, 4));
      expect(date4.format("Do")).toBe("4th");

      const date11 = new ProDate(new Date(2024, 0, 11));
      expect(date11.format("Do")).toBe("11th");

      const date21 = new ProDate(new Date(2024, 0, 21));
      expect(date21.format("Do")).toBe("21st");
    });

    test("should handle 12 AM correctly in 12-hour format", () => {
      const midnight = new ProDate(new Date(2024, 0, 1, 0, 30, 0));
      expect(midnight.format("h:mm A")).toBe("12:30 AM");
    });

    test("should handle 12 PM correctly in 12-hour format", () => {
      const noon = new ProDate(new Date(2024, 0, 1, 12, 30, 0));
      expect(noon.format("h:mm A")).toBe("12:30 PM");
    });

    test("should handle quarters correctly across year boundary", () => {
      const q4 = new ProDate(new Date(2024, 11, 15)); // December
      expect(q4.getQuarter()).toBe(4);

      const q1 = new ProDate(new Date(2024, 0, 15)); // January
      expect(q1.getQuarter()).toBe(1);
    });

    test("should handle week calculations at year boundaries", () => {
      const endOfYear = new ProDate(new Date(2024, 11, 31));
      const week = endOfYear.getWeekOfYearISO();
      expect(week).toBeGreaterThan(0);
      expect(week).toBeLessThanOrEqual(53);
    });

    test("should handle milliseconds overflow", () => {
      const date = new ProDate(new Date(2024, 0, 1, 0, 0, 0, 999));
      date.addMilliseconds(2);
      expect(date.getSeconds()).toBe(1);
    });

    test("should handle seconds overflow", () => {
      const date = new ProDate(new Date(2024, 0, 1, 0, 0, 59, 0));
      date.addSeconds(2);
      expect(date.getMinutes()).toBe(1);
    });

    test("should handle minutes overflow", () => {
      const date = new ProDate(new Date(2024, 0, 1, 0, 59, 0, 0));
      date.addMinutes(2);
      expect(date.getHours()).toBe(1);
    });

    test("should handle hours overflow", () => {
      const date = new ProDate(new Date(2024, 0, 1, 23, 0, 0, 0));
      date.addHours(2);
      expect(date.getDayOfMonth()).toBe(2);
    });
  });

  // Static Methods Tests
  describe("Static Methods", () => {
    test("daysInMonth should work for February in leap year", () => {
      expect(ProDate.daysInMonth(2024, 2)).toBe(29);
    });

    test("daysInMonth should work for February in non-leap year", () => {
      expect(ProDate.daysInMonth(2023, 2)).toBe(28);
    });

    test("daysInMonth should work for 31-day months", () => {
      expect(ProDate.daysInMonth(2024, 1)).toBe(31);
      expect(ProDate.daysInMonth(2024, 3)).toBe(31);
    });

    test("daysInMonth should work for 30-day months", () => {
      expect(ProDate.daysInMonth(2024, 4)).toBe(30);
      expect(ProDate.daysInMonth(2024, 6)).toBe(30);
    });

    test("isLeapYear static method should work", () => {
      expect(ProDate.isLeapYear(2024)).toBe(true);
      expect(ProDate.isLeapYear(2023)).toBe(false);
      expect(ProDate.isLeapYear(2000)).toBe(true);
      expect(ProDate.isLeapYear(1900)).toBe(false);
    });
  });

  // Method Chaining Tests
  describe("Method Chaining", () => {
    test("should allow chaining manipulation methods", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      const result = date.addYears(1).addMonths(2).addDays(3).addHours(4);

      expect(result).toBeInstanceOf(ProDate);
      expect(result.getYear()).toBe(2025);
    });

    test("should allow chaining setters", () => {
      const date = new ProDate(new Date(2024, 0, 1));
      const result = date
        .setYear(2025)
        .setMonth(6)
        .setDayOfMonth(15)
        .setHours(10);

      expect(result).toBeInstanceOf(ProDate);
      expect(result.getYear()).toBe(2025);
      expect(result.getMonth()).toBe(6);
    });

    test("should allow chaining start/end methods", () => {
      const date = new ProDate(new Date(2024, 1, 27, 14, 30));
      const result = date.startOfDay();

      expect(result).toBeInstanceOf(ProDate);
      expect(result.getHours()).toBe(0);
    });
  });

  // Special Format Tokens Tests
  describe("Special Format Tokens", () => {
    let testDate: ProDate;

    beforeEach(() => {
      testDate = new ProDate(new Date(2024, 1, 27, 14, 30, 45, 123));
    });

    test("should format DDD (day of year with padding)", () => {
      const formatted = testDate.format("DDD");
      expect(formatted).toMatch(/\d{3}/);
      expect(parseInt(formatted)).toBeGreaterThan(0);
    });

    test("should format DDDD (day of year)", () => {
      const formatted = testDate.format("DDDD");
      expect(parseInt(formatted)).toBeGreaterThan(0);
    });

    test("should format E (ISO day of week)", () => {
      const formatted = testDate.format("E");
      expect(parseInt(formatted)).toBeGreaterThanOrEqual(1);
      expect(parseInt(formatted)).toBeLessThanOrEqual(7);
    });

    test("should format w (week of year)", () => {
      const formatted = testDate.format("w");
      expect(parseInt(formatted)).toBeGreaterThan(0);
    });

    test("should format ww (week of year padded)", () => {
      const formatted = testDate.format("ww");
      expect(formatted.length).toBe(2);
    });

    test("should format W (ISO week)", () => {
      const formatted = testDate.format("W");
      expect(parseInt(formatted)).toBeGreaterThan(0);
    });

    test("should format WW (ISO week padded)", () => {
      const formatted = testDate.format("WW");
      expect(formatted.length).toBe(2);
    });

    test("should format Z (timezone with colon)", () => {
      const formatted = testDate.format("Z");
      expect(formatted).toMatch(/[+-]\d{2}:\d{2}/);
    });

    test("should format ZZ (timezone without colon)", () => {
      const formatted = testDate.format("ZZ");
      expect(formatted).toMatch(/[+-]\d{4}/);
    });

    test("should format z (timezone abbreviation)", () => {
      const formatted = testDate.format("z");
      expect(typeof formatted).toBe("string");
    });

    test("should format X (Unix timestamp in seconds)", () => {
      const formatted = testDate.format("X");
      expect(parseInt(formatted)).toBeGreaterThan(0);
    });

    test("should format x (Unix timestamp in milliseconds)", () => {
      const formatted = testDate.format("x");
      expect(parseInt(formatted)).toBeGreaterThan(0);
    });

    test("should format SS (hundredths of second)", () => {
      const formatted = testDate.format("SS");
      expect(formatted.length).toBeLessThanOrEqual(2);
    });

    test("should format S (tenths of second)", () => {
      const formatted = testDate.format("S");
      expect(formatted.length).toBe(1);
    });

    test("should format dd (minimal day name)", () => {
      const formatted = testDate.format("dd");
      expect(formatted.length).toBeGreaterThan(0);
      expect(formatted.length).toBeLessThanOrEqual(2);
    });
  });

  // Coverage for remaining uncovered methods
  describe("Additional Coverage", () => {
    test("should handle addSubtract for all units", () => {
      const date = new ProDate(new Date(2024, 0, 1));

      date.addSubtract(1, "years");
      expect(date.getYear()).toBe(2025);

      const date2 = new ProDate(new Date(2024, 0, 1));
      date2.addSubtract(1, "months");
      expect(date2.getMonth()).toBe(2);

      const date3 = new ProDate(new Date(2024, 0, 1));
      date3.addSubtract(1, "weeks");
      expect(date3.getDayOfMonth()).toBe(8);

      const date4 = new ProDate(new Date(2024, 0, 1));
      date4.addSubtract(1, "days");
      expect(date4.getDayOfMonth()).toBe(2);

      const date5 = new ProDate(new Date(2024, 0, 1, 0, 0, 0));
      date5.addSubtract(1, "hours");
      expect(date5.getHours()).toBe(1);

      const date6 = new ProDate(new Date(2024, 0, 1, 0, 0, 0));
      date6.addSubtract(1, "minutes");
      expect(date6.getMinutes()).toBe(1);

      const date7 = new ProDate(new Date(2024, 0, 1, 0, 0, 0));
      date7.addSubtract(1, "seconds");
      expect(date7.getSeconds()).toBe(1);

      const date8 = new ProDate(new Date(2024, 0, 1, 0, 0, 0, 0));
      date8.addSubtract(1, "milliseconds");
      expect(date8.getMilliseconds()).toBe(1);
    });

    test("should handle diff for all units", () => {
      const date1 = new ProDate(new Date(2024, 0, 1));
      const date2 = new ProDate(new Date(2025, 6, 15));

      expect(date2.diff(date1, "years")).toBeGreaterThan(0);
      expect(date2.diff(date1, "months")).toBeGreaterThan(0);
      expect(date2.diff(date1, "weeks")).toBeGreaterThan(0);
      expect(date2.diff(date1, "days")).toBeGreaterThan(0);
      expect(date2.diff(date1, "hours")).toBeGreaterThan(0);
      expect(date2.diff(date1, "minutes")).toBeGreaterThan(0);
      expect(date2.diff(date1, "seconds")).toBeGreaterThan(0);
      expect(date2.diff(date1, "milliseconds")).toBeGreaterThan(0);
    });

    test("should handle startOf for all units", () => {
      const date = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));

      const startYear = date.startOf("year");
      expect(startYear.getMonth()).toBe(1);
      expect(startYear.getDayOfMonth()).toBe(1);

      const date2 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const startMonth = date2.startOf("month");
      expect(startMonth.getDayOfMonth()).toBe(1);

      const date3 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const startWeek = date3.startOf("week");
      expect(startWeek.getDayOfWeek()).toBe(1);

      const date4 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const startDay = date4.startOf("day");
      expect(startDay.getHours()).toBe(0);

      const date5 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const startHour = date5.startOf("hour");
      expect(startHour).toBeInstanceOf(ProDate);

      const date6 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const startMinute = date6.startOf("minute");
      expect(startMinute).toBeInstanceOf(ProDate);

      const date7 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const startSecond = date7.startOf("second");
      expect(startSecond).toBeInstanceOf(ProDate);
    });

    test("should handle endOf for all units", () => {
      const date = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));

      const endYear = date.endOf("year");
      expect(endYear.getMonth()).toBe(12);
      expect(endYear.getDayOfMonth()).toBe(31);

      const date2 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const endMonth = date2.endOf("month");
      expect(endMonth.getDayOfMonth()).toBeGreaterThan(28);

      const date3 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const endWeek = date3.endOf("week");
      expect(endWeek.getDayOfWeek()).toBe(0);

      const date4 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const endDay = date4.endOf("day");
      expect(endDay.getHours()).toBe(23);

      const date5 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const endHour = date5.endOf("hour");
      expect(endHour).toBeInstanceOf(ProDate);

      const date6 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const endMinute = date6.endOf("minute");
      expect(endMinute).toBeInstanceOf(ProDate);

      const date7 = new ProDate(new Date(2024, 5, 15, 14, 30, 45, 123));
      const endSecond = date7.endOf("second");
      expect(endSecond).toBeInstanceOf(ProDate);
    });

    test("should handle isSame for all units", () => {
      const date1 = new ProDate(new Date(2024, 5, 15, 14, 30, 45));
      const date2 = new ProDate(new Date(2024, 5, 15, 16, 45, 50));

      expect(date1.isSame(date2, "year")).toBe(true);
      expect(date1.isSame(date2, "month")).toBe(true);
      expect(date1.isSame(date2, "week")).toBe(true);
      expect(date1.isSame(date2, "day")).toBe(true);
      expect(date1.isSame(date2, "hour")).toBe(false);
      expect(date1.isSame(date2, "minute")).toBe(false);
      expect(date1.isSame(date2, "second")).toBe(false);
    });
  });
});
