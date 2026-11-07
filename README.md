# pro-date 📅

[![npm version](https://img.shields.io/npm/v/pro-date.svg)](https://www.npmjs.com/package/pro-date)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

A **powerful**, **lightweight**, and **fully-typed** date utility library for parsing, formatting, and manipulating dates in JavaScript and TypeScript. Built with modern best practices and zero dependencies.

## ✨ Features

- 🚀 **Fast & Lightweight** - Zero dependencies, small bundle size
- 📝 **Fully Typed** - Complete TypeScript support with detailed type definitions
- 🎯 **Intuitive API** - Chainable methods for easy date manipulation
- 🌍 **i18n Ready** - Built-in internationalization support
- ⏰ **Time Zone Support** - Handle timezones with ease
- 📅 **Comprehensive Formatting** - Support for 40+ format tokens
- 🔄 **Relative Time** - Human-readable relative time formatting
- 📊 **Business Days** - Calculate business days excluding weekends
- 🧮 **Date Arithmetic** - Add, subtract, and compare dates effortlessly
- ✅ **Well Tested** - Comprehensive test suite with high coverage
- 🎨 **Modular Design** - Tree-shakeable for optimal bundle size

## 📦 Installation

```bash
# npm
npm install pro-date

# yarn
yarn add pro-date

# pnpm
pnpm add pro-date
```

## 🚀 Quick Start

```typescript
import { ProDate } from "pro-date";

// Create dates
const now = ProDate.now();
const birthday = new ProDate("1990-05-15");
const custom = ProDate.parse("24/12/2024", "DD/MM/YYYY");

// Format dates
now.format("YYYY-MM-DD"); // "2024-11-06"
now.format("MMMM Do, YYYY"); // "November 6th, 2024"
now.format("LLL"); // "November 6, 2024 2:30 PM"

// Manipulate dates
now.addDays(7).addMonths(2).startOfDay();

// Compare dates
if (birthday.isBefore(now)) {
  console.log("Birthday has passed");
}

// Relative time
now.fromNow(); // "just now"
birthday.timeAgo(); // "34 years ago"

// Business days
const deadline = now.addBusinessDays(5); // Skip weekends
```

## 📚 Documentation

###  Creating Dates

```typescript
// Current date
const now = ProDate.now();

// From string
const date1 = new ProDate("2024-01-15");
const date2 = ProDate.fromString("2024-01-15");

// From timestamp
const date3 = ProDate.fromTimestamp(1705276800000);

// From Unix timestamp
const date4 = ProDate.fromUnix(1705276800);

// Parse custom format
const date5 = ProDate.parse("15/01/2024 14:30", "DD/MM/YYYY HH:mm");
```

### 🎨 Formatting

ProDate supports 40+ format tokens:

```typescript
const date = new ProDate("2024-02-27 14:30:45");

// Year
date.format("YYYY"); // "2024"
date.format("YY"); // "24"

// Month
date.format("MMMM"); // "February"
date.format("MMM"); // "Feb"
date.format("MM"); // "02"
date.format("Mo"); // "2nd"

// Day
date.format("DD"); // "27"
date.format("Do"); // "27th"
date.format("dddd"); // "Tuesday"

// Time
date.format("HH:mm:ss"); // "14:30:45"
date.format("h:mm A"); // "2:30 PM"

// Combined
date.format("YYYY-MM-DD HH:mm:ss"); // "2024-02-27 14:30:45"
date.format("LLLL"); // "Tuesday, February 27, 2024 2:30 PM"
```

#### Format Tokens

| Token | Output | Description |
|-------|--------|-------------|
| **Year** |
| `YYYY` | 2024 | 4-digit year |
| `YY` | 24 | 2-digit year |
| **Quarter** |
| `Q` | 1-4 | Quarter |
| **Month** |
| `MMMM` | January-December | Full month name |
| `MMM` | Jan-Dec | Short month name |
| `MM` | 01-12 | 2-digit month |
| `M` | 1-12 | Month |
| `Mo` | 1st, 2nd, 3rd | Ordinal month |
| **Day** |
| `DD` | 01-31 | 2-digit day |
| `D` | 1-31 | Day |
| `Do` | 1st, 2nd, 3rd | Ordinal day |
| `dddd` | Monday-Sunday | Full day name |
| `ddd` | Mon-Sun | Short day name |
| **Hour** |
| `HH` | 00-23 | 24-hour (2-digit) |
| `H` | 0-23 | 24-hour |
| `hh` | 01-12 | 12-hour (2-digit) |
| `h` | 1-12 | 12-hour |
| `A` / `a` | AM/PM | Period |
| **Minute/Second** |
| `mm` | 00-59 | 2-digit minutes |
| `ss` | 00-59 | 2-digit seconds |
| `SSS` | 000-999 | Milliseconds |

### ➕ Date Manipulation

```typescript
const date = new ProDate("2024-01-15");

// Add time
date.addYears(1);
date.addMonths(2);
date.addWeeks(3);
date.addDays(7);
date.addHours(12);
date.addMinutes(30);
date.addSeconds(45);

// Subtract time
date.subtractYears(1);
date.subtractMonths(2);
date.subtractDays(7);

// Chainable
date.addYears(1).addMonths(2).addDays(7).startOfDay();

// Business days
date.addBusinessDays(5); // Skip weekends
date.subtractBusinessDays(3);

// Quarters
date.addQuarters(2);
date.startOfQuarter();
date.endOfQuarter();

// Duration objects
date.addDuration({ days: 7, hours: 12, minutes: 30 });
date.subtractDuration({ months: 2, days: 15 });
```

### 🔍 Date Comparison

```typescript
const date1 = new ProDate("2024-01-15");
const date2 = new ProDate("2024-06-20");

// Basic comparison
date1.isBefore(date2); // true
date1.isAfter(date2); // false
date1.isSame(date2, "year"); // true
date1.isSame(date2, "month"); // false

// Range checking
date1.isBetween(startDate, endDate);

// Same day/week/month/year
date1.isSameDay(date2);
date1.isSameWeek(date2);
date1.isSameMonth(date2);
date1.isSameYear(date2);

// Special checks
date.isToday();
date.isTomorrow();
date.isYesterday();
date.isPast();
date.isFuture();
date.isWeekend();
date.isWeekday();
date.isLeapYear();
```

### 📊 Date Differences

```typescript
const date1 = new ProDate("2024-01-01");
const date2 = new ProDate("2024-12-31");

// Get differences
date2.diff(date1, "years"); // 0.997...
date2.diff(date1, "months"); // 11.967...
date2.diff(date1, "days"); // 365
date2.diff(date1, "hours"); // 8760

// Specific difference methods
date2.differenceInDays(date1); // 365
date2.differenceInHours(date1); // 8760
date2.differenceInMinutes(date1); // 525600

// Business days
date2.businessDaysBetween(date1); // ~261 (excluding weekends)
```

### ⏰ Relative Time

```typescript
const date = new ProDate("2024-01-15");

// From now
date.fromNow(); // "3 months ago"
date.timeAgo(); // "3 months ago"

// Human-readable
date.toHumanReadable(); // "90 days ago"

// With options
date.fromNow(ProDate.now(), {
  round: true,
  futureText: "in",
  pastText: "before",
  justNowText: "moments ago",
});
```

### 🎯 Start/End of Periods

```typescript
const date = new ProDate("2024-06-15 14:30:45");

// Time periods
date.startOfDay(); // 2024-06-15 00:00:00
date.endOfDay(); // 2024-06-15 23:59:59

date.startOfWeek(); // Monday of current week
date.endOfWeek(); // Sunday of current week

date.startOfMonth(); // 2024-06-01
date.endOfMonth(); // 2024-06-30

date.startOfYear(); // 2024-01-01
date.endOfYear(); // 2024-12-31

date.startOfQuarter();
date.endOfQuarter();

// Generic
date.startOf("month");
date.endOf("week");
```

### ✅ Validation

```typescript
const date = new ProDate("2024-02-29");

// Check validity
date.isValid(); // true

// Leap year
date.isLeapYear(); // true
ProDate.isLeapYear(2024); // true

// Days in month
date.daysInMonth(); // 29
ProDate.daysInMonth(2024, 2); // 29

// Weekend/Weekday
date.isWeekend();
date.isWeekday();

// Time of day
date.isAM();
date.isPM();
date.isBeforeNoon();
date.isAfterNoon();

// Special dates
date.isFirstDayOfYear();
date.isLastDayOfYear();
date.isStartOfMonth();
date.isEndOfMonth();
```

### 🔄 Conversion

```typescript
const date = new ProDate("2024-01-15 14:30:45");

// To various formats
date.toISOString(); // "2024-01-15T14:30:45.000Z"
date.toUTCString(); // "Mon, 15 Jan 2024 14:30:45 GMT"
date.toDateString(); // "2024-01-15"
date.toTimeString(); // "14:30"
date.toLocaleString("en-US"); // Localized string

// To objects/arrays
date.toObject(); // { year, month, day, hour, minute, second, millisecond }
date.toArray(); // [2024, 1, 15, 14, 30, 45, 0]
date.toJSON(); // ISO string

// Unix timestamps
date.toUnixTimestamp(); // seconds
date.toUnixMilliseconds(); // milliseconds

// Timezone conversion
date.toUTC();
date.toTimeZone("America/New_York");
```

## 🎯 Advanced Features

### Business Days

```typescript
const date = new ProDate();

// Add/subtract business days (Mon-Fri)
date.addBusinessDays(5);
date.subtractBusinessDays(3);

// Count business days between dates
const businessDays = date1.businessDaysBetween(date2);

// Difference in business days
const diff = date1.diffInBusinessDays(date2);
```

### Custom Parsing

```typescript
// Parse various formats
ProDate.parse("2024-01-15", "YYYY-MM-DD");
ProDate.parse("15/01/2024", "DD/MM/YYYY");
ProDate.parse("01-15-24 02:30 PM", "MM-DD-YY hh:mm A");
ProDate.parse("2024.01.15 14:30:45", "YYYY.MM.DD HH:mm:ss");
```

### Quarters

```typescript
const date = new ProDate();

date.getQuarter(); // 1-4
date.addQuarters(2);
date.subtractQuarters(1);
date.startOfQuarter();
date.endOfQuarter();
date.isSameQuarter(otherDate);
```

### ISO Weeks

```typescript
const date = new ProDate();

date.getISOWeek(); // 1-53
date.getISOYear(); // Year for ISO week
date.isSameISOWeek(otherDate);
date.toISOWeekDate(); // "2024-W45-2"
```

## 🏷️ Keywords

date, time, datetime, date-formatting, date-parser, date-manipulation, date-utility, timestamp, timezone, calendar, date-math, date-difference, date-comparison, business-days, iso8601, unix-timestamp, date-library, time-formatting, relative-time, humanize-date, date-helper, typescript, javascript, moment-alternative, dayjs-alternative, date-fns-alternative

## 📖 API Reference

For complete API documentation, see [API Documentation](./docs).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT © [Dmitrii Selikhov](https://www.linkedin.com/in/dimetrix)

## 🔗 Links

- [GitHub Repository](https://github.com/idimetrix/pro-date)
- [npm Package](https://www.npmjs.com/package/pro-date)
- [Issue Tracker](https://github.com/idimetrix/pro-date/issues)
- [Changelog](./CHANGELOG.md)

## 💡 Why pro-date?

- **Modern**: Built with TypeScript and modern JavaScript features
- **Lightweight**: No dependencies, small bundle size (~20KB minified)
- **Fast**: Optimized for performance
- **Flexible**: Comprehensive API for all date operations
- **Reliable**: Well-tested with high code coverage
- **Developer-Friendly**: Intuitive API with great TypeScript support

## 🌟 Star History

If you find this library useful, please consider giving it a star on GitHub!

---

Made with ❤️ by [Dmitrii Selikhov](https://www.linkedin.com/in/dimetrix)
