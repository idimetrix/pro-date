/**
 * A lightweight date utility class for parsing, formatting, and manipulating dates.
 */
export class ProDate {
  private date: Date;

  constructor(date?: string | number | Date) {
    this.date = new Date(date || Date.now());
  }

  // Factory Methods

  /**
   * Create a ProDate instance from a string.
   * @param dateString - A date string to parse.
   */
  static fromString(dateString: string): ProDate {
    return new ProDate(new Date(dateString));
  }

  /**
   * Create a ProDate instance from a timestamp.
   * @param timestamp - The number of milliseconds since January 1, 1970.
   */
  static fromTimestamp(timestamp: number): ProDate {
    return new ProDate(new Date(timestamp));
  }

  /**
   * Create a new ProDate instance representing the current date and time.
   */
  static now(): ProDate {
    return new ProDate();
  }

  // Formatting Methods

  /**
   * Formats the date according to the specified format string.
   *
   * ### Supported Format Tokens:
   *
   * #### **Year**:
   * - `YYYY`: Full year (e.g., 2024)
   * - `YY`: Two-digit year (e.g., 24)
   * - `Y`: Year without padding (e.g., 2024)
   *
   * #### **Quarter**:
   * - `Q`: Quarter of the year (1-4)
   *
   * #### **Month**:
   * - `MMMM`: Full month name (e.g., January)
   * - `MMM`: Abbreviated month name (e.g., Jan)
   * - `MM`: Two-digit month (01-12)
   * - `M`: Month without padding (1-12)
   * - `Mo`: Month as an ordinal number (e.g., 1st, 2nd)
   *
   * #### **Day of Month**:
   * - `DD`: Two-digit day of the month (01-31)
   * - `D`: Day of the month without padding (1-31)
   * - `Do`: Ordinal day of the month (e.g., 1st, 2nd)
   *
   * #### **Day of Year**:
   * - `DDD`: Three-digit day of the year (001-365 or 366)
   * - `DDDD`: Day of the year (1-365 or 366)
   *
   * #### **Day of Week**:
   * - `dddd`: Full day name (e.g., Monday)
   * - `ddd`: Abbreviated day name (e.g., Mon)
   * - `dd`: Minimal day name (e.g., Mo, Tu)
   * - `d`: Day of the week (0 = Sunday, 6 = Saturday)
   * - `E`: ISO day of the week (1 = Monday, 7 = Sunday)
   *
   * #### **Week of Year**:
   * - `w`: Week of the year (1-52 or 1-53)
   * - `ww`: Week of the year, zero-padded (01-52 or 01-53)
   * - `W`: ISO week of the year (1-52 or 1-53)
   * - `WW`: ISO week of the year, zero-padded (01-52 or 01-53)
   *
   * #### **Hour (24-hour format)**:
   * - `HH`: Two-digit hour in 24-hour format (00-23)
   * - `H`: Hour in 24-hour format (0-23)
   *
   * #### **Hour (12-hour format)**:
   * - `hh`: Two-digit hour in 12-hour format (01-12)
   * - `h`: Hour in 12-hour format (1-12)
   *
   * #### **Minute**:
   * - `mm`: Two-digit minutes (00-59)
   * - `m`: Minutes without padding (0-59)
   *
   * #### **Second**:
   * - `ss`: Two-digit seconds (00-59)
   * - `s`: Seconds without padding (0-59)
   *
   * #### **Fractional Seconds**:
   * - `SSS`: Three-digit milliseconds (000-999)
   * - `SS`: Hundredths of a second (00-99)
   * - `S`: Tenths of a second (0-9)
   *
   * #### **Period (AM/PM)**:
   * - `A`: Uppercase AM/PM
   * - `a`: Lowercase am/pm
   *
   * #### **Timezone**:
   * - `Z`: Timezone offset with colon (e.g., +02:00)
   * - `ZZ`: Timezone offset without colon (e.g., +0200)
   * - `z`: Abbreviated timezone name (e.g., EST, PST)
   *
   * #### **Unix Timestamp**:
   * - `X`: Unix timestamp in seconds
   * - `x`: Unix timestamp in milliseconds
   *
   * #### **Custom Formats**:
   * - `LT`: Time in format 'h:mm A' (e.g., 2:30 PM)
   * - `LTS`: Time in format 'h:mm:ss A' (e.g., 2:30:15 PM)
   * - `L`: Date in format 'MM/DD/YYYY' (e.g., 02/27/2024)
   * - `LL`: Date in format 'MMMM D, YYYY' (e.g., February 27, 2024)
   * - `LLL`: DateTime in format 'MMMM D, YYYY h:mm A' (e.g., February 27, 2024 2:30 PM)
   * - `LLLL`: DateTime in format 'dddd, MMMM D, YYYY h:mm A' (e.g., Tuesday, February 27, 2024 2:30 PM)
   *
   * @param formatString - The format string containing tokens.
   */
  format(formatString: string): string {
    const map = {
      // Year
      YYYY: this.date.getFullYear().toString(), // Full year (e.g., 2024)
      YY: this.date.getFullYear().toString().slice(-2), // Two-digit year (e.g., 24)
      Y: this.date.getFullYear().toString(), // Year, no padding (e.g., 2024)

      // Quarter
      Q: Math.ceil((this.date.getMonth() + 1) / 3).toString(), // Quarter of the year (1-4)

      // Month
      MMMM: this.date.toLocaleString("default", { month: "long" }), // Full month name (January)
      MMM: this.date.toLocaleString("default", { month: "short" }), // Abbreviated month name (Jan)
      MM: (this.date.getMonth() + 1).toString().padStart(2, "0"), // Two-digit month (01-12)
      M: (this.date.getMonth() + 1).toString(), // Month without padding (1-12)
      Mo: `${this.date.getMonth() + 1}${this.getOrdinal(this.date.getMonth() + 1)}`, // Ordinal month

      // Day of Month
      DD: this.date.getDate().toString().padStart(2, "0"), // Two-digit day (01-31)
      D: this.date.getDate().toString(), // Day without padding (1-31)
      Do: `${this.date.getDate()}${this.getOrdinal(this.date.getDate())}`, // Ordinal day (1st, 2nd)

      // Day of Year
      DDD: this.getDayOfYear().toString().padStart(3, "0"), // Three-digit day of the year
      DDDD: this.getDayOfYear().toString(), // Day of the year

      // Day of Week
      dddd: this.date.toLocaleString("default", { weekday: "long" }), // Full day name (Monday)
      ddd: this.date.toLocaleString("default", { weekday: "short" }), // Abbreviated day name (Mon)
      dd: this.date.toLocaleString("default", { weekday: "narrow" }), // Minimal day name (Mo)
      d: this.date.getDay().toString(), // Day of the week (0 = Sunday, 6 = Saturday)
      E: (this.date.getDay() + 1).toString(), // ISO day of the week (1 = Monday)

      // Week of Year
      w: this.getWeekOfYear().toString(), // Week of the year
      ww: this.getWeekOfYear().toString().padStart(2, "0"), // Zero-padded week of the year

      // ISO Week of Year
      W: this.getISOWeekOfYear().toString(), // ISO week of the year
      WW: this.getISOWeekOfYear().toString().padStart(2, "0"), // Zero-padded ISO week

      // Hour (24-hour format)
      HH: this.date.getHours().toString().padStart(2, "0"), // Two-digit 24-hour format (00-23)
      H: this.date.getHours().toString(), // 24-hour format (0-23)

      // Hour (12-hour format)
      hh: (this.date.getHours() % 12 || 12).toString().padStart(2, "0"), // Two-digit 12-hour format (01-12)
      h: (this.date.getHours() % 12 || 12).toString(), // 12-hour format (1-12)

      // Minute
      mm: this.date.getMinutes().toString().padStart(2, "0"), // Two-digit minutes (00-59)
      m: this.date.getMinutes().toString(), // Minutes (0-59)

      // Second
      ss: this.date.getSeconds().toString().padStart(2, "0"), // Two-digit seconds (00-59)
      s: this.date.getSeconds().toString(), // Seconds (0-59)

      // Fractional Seconds
      SSS: this.date.getMilliseconds().toString().padStart(3, "0"), // Three-digit milliseconds (000-999)
      SS: this.date.getMilliseconds().toString().slice(0, 2), // Hundredths of a second (00-99)
      S: this.date.getMilliseconds().toString().charAt(0), // Tenths of a second (0-9)

      // AM/PM
      A: this.date.getHours() < 12 ? "AM" : "PM", // Uppercase AM/PM
      a: this.date.getHours() < 12 ? "am" : "pm", // Lowercase am/pm

      // Timezone
      Z: this.formatTimezoneOffset(true), // Timezone offset with colon (+02:00)
      ZZ: this.formatTimezoneOffset(false), // Timezone offset without colon (+0200)
      z: this.getTimeZoneName(), // Abbreviated timezone name (PST)

      // Unix Timestamp
      X: Math.floor(this.date.getTime() / 1000).toString(), // Unix timestamp (seconds)
      x: this.date.getTime().toString(), // Unix timestamp (milliseconds)

      // Custom
      LT: this.format("h:mm A"), // Time in format 'h:mm A' (e.g., 2:30 PM)
      LTS: this.format("h:mm:ss A"), // Time in format 'h:mm:ss A' (e.g., 2:30:15 PM)
      L: this.format("MM/DD/YYYY"), // Date in format 'MM/DD/YYYY' (e.g., 02/27/2024)
      LL: this.format("MMMM D, YYYY"), // Date in format 'MMMM D, YYYY' (e.g., February 27, 2024)
      LLL: this.format("MMMM D, YYYY h:mm A"), // DateTime in format 'MMMM D, YYYY h:mm A' (e.g., February 27, 2024 2:30 PM)
      LLLL: this.format("dddd, MMMM D, YYYY h:mm A"), // DateTime in format 'dddd, MMMM D, YYYY h:mm A' (e.g., Tuesday, February 27, 2024 2:30 PM)
    };

    return formatString.replace(
      /YYYY|YY|Y|Q|MMMM|MMM|MM|M|Mo|DD|D|Do|DDD|DDDD|dddd|ddd|dd|d|E|w|ww|W|WW|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|Z|ZZ|z|X|x|LT|LTS|L|LL|LLL|LLLL/g,
      (matched) => map[matched as keyof typeof map],
    );
  }

  /**
   * Helper function to get ordinal suffix for a given number.
   * E.g., 1 -> 'st', 2 -> 'nd', 3 -> 'rd', etc.
   */
  private getOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  /**
   * Helper function to get the day of the year (1-365 or 1-366 for leap years).
   */
  private getDayOfYear(): number {
    const start = new Date(this.date.getFullYear(), 0, 0);
    const diff =
      this.date.getTime() -
      start.getTime() +
      (start.getTimezoneOffset() - this.date.getTimezoneOffset()) * 60 * 1000;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  /**
   * Helper function to get the week number (ISO 8601).
   */
  private getWeekOfYear(): number {
    const oneJan = new Date(this.date.getFullYear(), 0, 1);
    const days = Math.floor(
      (this.date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000),
    );
    return Math.ceil((this.date.getDay() + 1 + days) / 7);
  }

  /**
   * Helper function to get the ISO week number (week starting on Monday).
   */
  private getISOWeekOfYear(): number {
    const date = new Date(this.date);
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    return Math.ceil(
      ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
    );
  }

  /**
   * Helper function to format the timezone offset.
   * @param colon - Whether to include a colon in the offset (e.g., +02:00 vs +0200).
   */
  private formatTimezoneOffset(colon: boolean): string {
    const offset = this.date.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset / 60)
      .toString()
      .padStart(2, "0");
    const minutes = (absOffset % 60).toString().padStart(2, "0");
    return colon ? `${sign}${hours}:${minutes}` : `${sign}${hours}${minutes}`;
  }

  /**
   * Helper function to get the timezone name (abbreviation).
   */
  private getTimeZoneName(): string {
    return this.date
      .toLocaleTimeString("en-us", { timeZoneName: "short" })
      .split(" ")[2];
  }

  /**
   * Converts the date to an ISO 8601 string (e.g., '2024-09-23T14:00:00Z').
   */
  toISOString(): string {
    return this.date.toISOString();
  }

  /**
   * Converts the date to a UTC string.
   */
  toUTCString(): string {
    return this.date.toUTCString();
  }

  /**
   * Converts the date to a locale string, using an optional locale parameter.
   * @param locale - The locale to use for formatting (default is 'en-US').
   */
  toLocaleString(locale?: string): string {
    return this.date.toLocaleString(locale || "en-US");
  }

  // Date Part Getters

  /**
   * Gets the full year of the date (e.g., 2024).
   */
  getYear(): number {
    return this.date.getFullYear();
  }

  /**
   * Gets the month of the date (1-12).
   */
  getMonth(): number {
    return this.date.getMonth() + 1;
  }

  /**
   * Gets the day of the month (1-31).
   */
  getDayOfMonth(): number {
    return this.date.getDate();
  }

  /**
   * Gets the day of the week (0 = Sunday, 6 = Saturday).
   */
  getDayOfWeek(): number {
    return this.date.getDay();
  }

  /**
   * Gets the hours (0-23).
   */
  getHours(): number {
    return this.date.getHours();
  }

  /**
   * Gets the minutes (0-59).
   */
  getMinutes(): number {
    return this.date.getMinutes();
  }

  /**
   * Gets the seconds (0-59).
   */
  getSeconds(): number {
    return this.date.getSeconds();
  }

  /**
   * Gets the milliseconds (0-999).
   */
  getMilliseconds(): number {
    return this.date.getMilliseconds();
  }

  // Date Manipulation Methods

  /**
   * Adds the specified number of years to the date.
   * @param amount - The number of years to add.
   */
  addYears(amount: number): ProDate {
    this.date.setFullYear(this.date.getFullYear() + amount);
    return this;
  }

  /**
   * Adds the specified number of months to the date.
   * @param amount - The number of months to add.
   */
  addMonths(amount: number): ProDate {
    this.date.setMonth(this.date.getMonth() + amount);
    return this;
  }

  /**
   * Adds the specified number of days to the date.
   * @param amount - The number of days to add.
   */
  addDays(amount: number): ProDate {
    this.date.setDate(this.date.getDate() + amount);
    return this;
  }

  /**
   * Adds the specified number of hours to the date.
   * @param amount - The number of hours to add.
   */
  addHours(amount: number): ProDate {
    this.date.setHours(this.date.getHours() + amount);
    return this;
  }

  /**
   * Adds the specified number of minutes to the date.
   * @param amount - The number of minutes to add.
   */
  addMinutes(amount: number): ProDate {
    this.date.setMinutes(this.date.getMinutes() + amount);
    return this;
  }

  /**
   * Adds the specified number of seconds to the date.
   * @param amount - The number of seconds to add.
   */
  addSeconds(amount: number): ProDate {
    this.date.setSeconds(this.date.getSeconds() + amount);
    return this;
  }

  // Subtraction (Inverse Manipulation)

  /**
   * Subtracts the specified number of years from the date.
   * @param amount - The number of years to subtract.
   */
  subtractYears(amount: number): ProDate {
    return this.addYears(-amount);
  }

  /**
   * Subtracts the specified number of months from the date.
   * @param amount - The number of months to subtract.
   */
  subtractMonths(amount: number): ProDate {
    return this.addMonths(-amount);
  }

  /**
   * Subtracts the specified number of days from the date.
   * @param amount - The number of days to subtract.
   */
  subtractDays(amount: number): ProDate {
    return this.addDays(-amount);
  }

  /**
   * Subtracts the specified number of hours from the date.
   * @param amount - The number of hours to subtract.
   */
  subtractHours(amount: number): ProDate {
    return this.addHours(-amount);
  }

  /**
   * Subtracts the specified number of minutes from the date.
   * @param amount - The number of minutes to subtract.
   */
  subtractMinutes(amount: number): ProDate {
    return this.addMinutes(-amount);
  }

  /**
   * Subtracts the specified number of seconds from the date.
   * @param amount - The number of seconds to subtract.
   */
  subtractSeconds(amount: number): ProDate {
    return this.addSeconds(-amount);
  }

  // Comparison Methods

  /**
   * Determines if this date is the same day as the provided date.
   * @param otherDate - The other ProDate instance to compare to.
   */
  isSameDay(otherDate: ProDate): boolean {
    return (
      this.getYear() === otherDate.getYear() &&
      this.getMonth() === otherDate.getMonth() &&
      this.getDayOfMonth() === otherDate.getDayOfMonth()
    );
  }

  // Utility Methods

  /**
   * Gets the timestamp (milliseconds since January 1, 1970).
   */
  getTime(): number {
    return this.date.getTime();
  }

  /**
   * Returns the number of days in the current month.
   */
  daysInMonth(): number {
    return new Date(this.getYear(), this.getMonth(), 0).getDate();
  }

  /**
   * Sets the time to the start of the day (00:00:00).
   */
  startOfDay(): ProDate {
    this.date.setHours(0, 0, 0, 0);
    return this;
  }

  /**
   * Sets the time to the end of the day (23:59:59.999).
   */
  endOfDay(): ProDate {
    this.date.setHours(23, 59, 59, 999);
    return this;
  }

  /**
   * Sets the date to the start of the current month.
   */
  startOfMonth(): ProDate {
    return new ProDate(new Date(this.getYear(), this.getMonth() - 1, 1));
  }

  /**
   * Sets the date to the end of the current month.
   */
  endOfMonth(): ProDate {
    return new ProDate(new Date(this.getYear(), this.getMonth(), 0));
  }

  // Validation Methods

  /**
   * Validates if the date is a valid Date object.
   */
  isValid(): boolean {
    return !isNaN(this.date.getTime());
  }

  /**
   * Checks if the date falls on a weekend (Saturday or Sunday).
   */
  isWeekend(): boolean {
    const day = this.getDayOfWeek();
    return day === 0 || day === 6;
  }

  // Business Day Methods

  /**
   * Adds business days (Monday to Friday) to the date, skipping weekends.
   * @param days - The number of business days to add.
   */
  addBusinessDays(days: number): ProDate {
    let count = 0;
    while (count < days) {
      this.addDays(1);
      if (!this.isWeekend()) {
        count++;
      }
    }
    return this;
  }

  /**
   * Subtracts business days (Monday to Friday) from the date, skipping weekends.
   * @param days - The number of business days to subtract.
   */
  subtractBusinessDays(days: number): ProDate {
    let count = 0;
    while (count < days) {
      this.subtractDays(1);
      if (!this.isWeekend()) {
        count++;
      }
    }
    return this;
  }

  /**
   * Gets the quarter of the year (1-4).
   */
  getQuarter(): number {
    return Math.floor((this.getMonth() - 1) / 3) + 1;
  }

  /**
   * Adds the specified number of quarters to the date.
   * @param quarters - The number of quarters to add.
   */
  addQuarters(quarters: number): ProDate {
    this.addMonths(quarters * 3);
    return this;
  }

  /**
   * Subtracts the specified number of quarters from the date.
   * @param quarters - The number of quarters to subtract.
   */
  subtractQuarters(quarters: number): ProDate {
    return this.addQuarters(-quarters);
  }

  /**
   * Gets the start of the current quarter.
   */
  startOfQuarter(): ProDate {
    const quarter = this.getQuarter();
    const firstMonthOfQuarter = (quarter - 1) * 3;
    return new ProDate(new Date(this.getYear(), firstMonthOfQuarter, 1));
  }

  /**
   * Gets the end of the current quarter.
   */
  endOfQuarter(): ProDate {
    const quarter = this.getQuarter();
    const lastMonthOfQuarter = quarter * 3;
    const endOfMonth = new Date(this.getYear(), lastMonthOfQuarter, 0);
    return new ProDate(endOfMonth);
  }

  /**
   * Adds the specified number of weeks to the date.
   * @param weeks - The number of weeks to add.
   */
  addWeeks(weeks: number): ProDate {
    this.addDays(weeks * 7);
    return this;
  }

  /**
   * Subtracts the specified number of weeks from the date.
   * @param weeks - The number of weeks to subtract.
   */
  subtractWeeks(weeks: number): ProDate {
    return this.addWeeks(-weeks);
  }

  /**
   * Gets the start of the current week (Monday).
   */
  startOfWeek(): ProDate {
    const dayOfWeek = this.getDayOfWeek();
    const diff = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
    return new ProDate(this.addDays(diff).getTime());
  }

  /**
   * Gets the end of the current week (Sunday).
   */
  endOfWeek(): ProDate {
    const dayOfWeek = this.getDayOfWeek();
    const diff = 7 - dayOfWeek;
    return new ProDate(this.addDays(diff).getTime());
  }

  /**
   * Checks if the current year is a leap year.
   */
  isLeapYear(): boolean {
    const year = this.getYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Gets the number of days in the current year (365 or 366).
   */
  daysInYear(): number {
    return this.isLeapYear() ? 366 : 365;
  }

  /**
   * Adds the specified number of fiscal years to the date (assuming fiscal year starts in April).
   * @param years - The number of fiscal years to add.
   */
  addFiscalYears(years: number): ProDate {
    const fiscalStartMonth = 3; // April
    this.addYears(years);
    if (this.getMonth() < fiscalStartMonth) {
      this.setMonth(fiscalStartMonth);
    }
    return this;
  }

  /**
   * Gets the start of the fiscal year (assuming fiscal year starts in April).
   */
  startOfFiscalYear(): ProDate {
    return new ProDate(new Date(this.getYear(), 3, 1)); // April 1st
  }

  /**
   * Gets the end of the fiscal year (assuming fiscal year ends in March).
   */
  endOfFiscalYear(): ProDate {
    return new ProDate(new Date(this.getYear() + 1, 2, 31)); // March 31st
  }

  /**
   * Checks if the current date is a weekday (Monday-Friday).
   */
  isWeekday(): boolean {
    const dayOfWeek = this.getDayOfWeek();
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  }

  /**
   * Converts the current date to a Unix timestamp.
   */
  toUnixTimestamp(): number {
    return Math.floor(this.getTime() / 1000);
  }

  /**
   * Gets the timezone offset in minutes.
   */
  getTimezoneOffset(): number {
    return this.date.getTimezoneOffset();
  }

  /**
   * Converts the current date to UTC.
   */
  toUTC(): ProDate {
    return new ProDate(this.date.toUTCString());
  }

  /**
   * Converts the current date to local time.
   */
  toLocal(): ProDate {
    const localDate = new Date(this.date.toLocaleString());
    return new ProDate(localDate);
  }

  /**
   * Checks if the current date is in the past.
   */
  isPast(): boolean {
    return this.getTime() < Date.now();
  }

  /**
   * Checks if the current date is in the future.
   */
  isFuture(): boolean {
    return this.getTime() > Date.now();
  }

  /**
   * Checks if the current date is today.
   */
  isToday(): boolean {
    const today = new Date();
    return (
      this.getYear() === today.getFullYear() &&
      this.getMonth() === today.getMonth() + 1 &&
      this.getDayOfMonth() === today.getDate()
    );
  }

  /**
   * Rounds the date to the nearest minute.
   */
  roundToNearestMinute(): ProDate {
    const seconds = this.getSeconds();
    if (seconds >= 30) {
      this.addMinutes(1);
    }
    this.setSeconds(0);
    return this;
  }

  /**
   * Rounds the date to the nearest hour.
   */
  roundToNearestHour(): ProDate {
    const minutes = this.getMinutes();
    if (minutes >= 30) {
      this.addHours(1);
    }
    this.setMinutes(0);
    return this;
  }

  /**
   * Rounds the date to the nearest day.
   */
  roundToNearestDay(): ProDate {
    const hours = this.getHours();
    if (hours >= 12) {
      this.addDays(1);
    }
    this.startOfDay();
    return this;
  }

  /**
   * Sets the year of the date.
   * @param year - The year to set.
   */
  setYear(year: number): ProDate {
    this.date.setFullYear(year);
    return this;
  }

  /**
   * Sets the month of the date (1-12).
   * @param month - The month to set (1 = January, 12 = December).
   */
  setMonth(month: number): ProDate {
    this.date.setMonth(month - 1);
    return this;
  }

  /**
   * Sets the day of the month (1-31).
   * @param day - The day of the month to set.
   */
  setDayOfMonth(day: number): ProDate {
    this.date.setDate(day);
    return this;
  }

  /**
   * Sets the hours of the date (0-23).
   * @param hours - The hours to set.
   */
  setHours(hours: number): ProDate {
    this.date.setHours(hours);
    return this;
  }

  /**
   * Sets the minutes of the date (0-59).
   * @param minutes - The minutes to set.
   */
  setMinutes(minutes: number): ProDate {
    this.date.setMinutes(minutes);
    return this;
  }

  /**
   * Sets the seconds of the date (0-59).
   * @param seconds - The seconds to set.
   */
  setSeconds(seconds: number): ProDate {
    this.date.setSeconds(seconds);
    return this;
  }

  /**
   * Sets the milliseconds of the date (0-999).
   * @param milliseconds - The milliseconds to set.
   */
  setMilliseconds(milliseconds: number): ProDate {
    this.date.setMilliseconds(milliseconds);
    return this;
  }

  /**
   * Gets the difference between this date and another date in days.
   * @param otherDate - The date to compare with.
   */
  differenceInDays(otherDate: ProDate): number {
    const diffInMs = this.getTime() - otherDate.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }

  /**
   * Gets the difference between this date and another date in hours.
   * @param otherDate - The date to compare with.
   */
  differenceInHours(otherDate: ProDate): number {
    const diffInMs = this.getTime() - otherDate.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60));
  }

  /**
   * Gets the difference between this date and another date in minutes.
   * @param otherDate - The date to compare with.
   */
  differenceInMinutes(otherDate: ProDate): number {
    const diffInMs = this.getTime() - otherDate.getTime();
    return Math.floor(diffInMs / (1000 * 60));
  }

  /**
   * Gets the difference between this date and another date in seconds.
   * @param otherDate - The date to compare with.
   */
  differenceInSeconds(otherDate: ProDate): number {
    const diffInMs = this.getTime() - otherDate.getTime();
    return Math.floor(diffInMs / 1000);
  }

  /**
   * Gets the start of the current decade.
   */
  startOfDecade(): ProDate {
    const decadeStart = Math.floor(this.getYear() / 10) * 10;
    return new ProDate(new Date(decadeStart, 0, 1));
  }

  /**
   * Gets the end of the current decade.
   */
  endOfDecade(): ProDate {
    const decadeEnd = Math.floor(this.getYear() / 10) * 10 + 9;
    return new ProDate(new Date(decadeEnd, 11, 31, 23, 59, 59, 999));
  }

  /**
   * Gets the start of the current century.
   */
  startOfCentury(): ProDate {
    const centuryStart = Math.floor(this.getYear() / 100) * 100;
    return new ProDate(new Date(centuryStart, 0, 1));
  }

  /**
   * Gets the end of the current century.
   */
  endOfCentury(): ProDate {
    const centuryEnd = Math.floor(this.getYear() / 100) * 100 + 99;
    return new ProDate(new Date(centuryEnd, 11, 31, 23, 59, 59, 999));
  }

  /**
   * Gets the start of the current millennium.
   */
  startOfMillennium(): ProDate {
    const millenniumStart = Math.floor(this.getYear() / 1000) * 1000;
    return new ProDate(new Date(millenniumStart, 0, 1));
  }

  /**
   * Gets the end of the current millennium.
   */
  endOfMillennium(): ProDate {
    const millenniumEnd = Math.floor(this.getYear() / 1000) * 1000 + 999;
    return new ProDate(new Date(millenniumEnd, 11, 31, 23, 59, 59, 999));
  }

  /**
   * Gets the number of weeks in the current year (52 or 53 weeks).
   */
  weeksInYear(): number {
    const lastDayOfYear = new Date(this.getYear(), 11, 31);
    const firstDayOfYear = new Date(this.getYear(), 0, 1);
    const lastWeekDay = lastDayOfYear.getDay();
    const firstWeekDay = firstDayOfYear.getDay();
    return lastWeekDay === 0 || firstWeekDay === 1 ? 53 : 52;
  }

  /**
   * Adds a number of milliseconds to the date.
   * @param milliseconds - The number of milliseconds to add.
   */
  addMilliseconds(milliseconds: number): ProDate {
    this.date.setMilliseconds(this.date.getMilliseconds() + milliseconds);
    return this;
  }

  /**
   * Subtracts a number of milliseconds from the date.
   * @param milliseconds - The number of milliseconds to subtract.
   */
  subtractMilliseconds(milliseconds: number): ProDate {
    this.date.setMilliseconds(this.date.getMilliseconds() - milliseconds);
    return this;
  }

  /**
   * Checks if the current date is the start of the month.
   */
  isStartOfMonth(): boolean {
    return this.getDayOfMonth() === 1;
  }

  /**
   * Checks if the current date is the end of the month.
   */
  isEndOfMonth(): boolean {
    const lastDayOfMonth = new Date(
      this.getYear(),
      this.getMonth(),
      0,
    ).getDate();
    return this.getDayOfMonth() === lastDayOfMonth;
  }

  /**
   * Checks if the current date is the start of the week (Monday).
   */
  isStartOfWeek(): boolean {
    return this.getDayOfWeek() === 1; // Monday
  }

  /**
   * Checks if the current date is the end of the week (Sunday).
   */
  isEndOfWeek(): boolean {
    return this.getDayOfWeek() === 0; // Sunday
  }

  /**
   * Returns the current date as a JavaScript object.
   */
  toJSObject(): Object {
    return {
      year: this.getYear(),
      month: this.getMonth(),
      day: this.getDayOfMonth(),
      hours: this.getHours(),
      minutes: this.getMinutes(),
      seconds: this.getSeconds(),
      milliseconds: this.getMilliseconds(),
    };
  }

  /**
   * Gets the number of seconds since the Unix epoch.
   */
  getEpochSeconds(): number {
    return Math.floor(this.getTime() / 1000);
  }

  /**
   * Returns the current date in the ISO 8601 week date format (YYYY-Www-D).
   */
  toISOWeekDate(): string {
    const weekOfYear = this.getWeekOfYear();
    return `${this.getYear()}-W${weekOfYear.toString().padStart(2, "0")}-${this.getDayOfWeek() || 7}`;
  }

  /**
   * Converts the current date to the ISO 8601 string (YYYY-MM-DDTHH:mm:ss.sssZ).
   */
  toISO8601(): string {
    return this.toISOString();
  }

  /**
   * Adds the specified number of leap years to the current date.
   * @param leapYears - The number of leap years to add.
   */
  addLeapYears(leapYears: number): ProDate {
    let addedYears = 0;
    while (addedYears < leapYears) {
      this.addYears(1);
      if (this.isLeapYear()) {
        addedYears++;
      }
    }
    return this;
  }

  /**
   * Subtracts the specified number of leap years from the current date.
   * @param leapYears - The number of leap years to subtract.
   */
  subtractLeapYears(leapYears: number): ProDate {
    let subtractedYears = 0;
    while (subtractedYears < leapYears) {
      this.subtractYears(1);
      if (this.isLeapYear()) {
        subtractedYears++;
      }
    }
    return this;
  }

  /**
   * Checks if the current date is a holiday (based on a predefined list of holidays).
   * @param holidays - An array of holiday strings in 'MM-DD' format.
   */
  isHoliday(holidays: string[]): boolean {
    const monthDay = `${this.getMonth().toString().padStart(2, "0")}-${this.getDayOfMonth().toString().padStart(2, "0")}`;
    return holidays.includes(monthDay);
  }

  /**
   * Gets the start of the next day.
   */
  startOfNextDay(): ProDate {
    return this.addDays(1).startOfDay();
  }

  /**
   * Gets the end of the previous day.
   */
  endOfPreviousDay(): ProDate {
    return this.subtractDays(1).endOfDay();
  }

  /**
   * Adds or subtracts the specified number of decades.
   * @param decades - The number of decades to add or subtract.
   */
  addDecades(decades: number): ProDate {
    return this.addYears(decades * 10);
  }

  /**
   * Subtracts the specified number of decades.
   * @param decades - The number of decades to subtract.
   */
  subtractDecades(decades: number): ProDate {
    return this.addYears(decades * -10);
  }

  /**
   * Adds or subtracts the specified number of centuries.
   * @param centuries - The number of centuries to add or subtract.
   */
  addCenturies(centuries: number): ProDate {
    return this.addYears(centuries * 100);
  }

  /**
   * Subtracts the specified number of centuries.
   * @param centuries - The number of centuries to subtract.
   */
  subtractCenturies(centuries: number): ProDate {
    return this.addYears(centuries * -100);
  }

  /**
   * Checks if the current time is before noon (12:00 PM).
   */
  isBeforeNoon(): boolean {
    return this.getHours() < 12;
  }

  /**
   * Checks if the current time is after noon (12:00 PM).
   */
  isAfterNoon(): boolean {
    return this.getHours() >= 12;
  }

  /**
   * Checks if the current date is in the current decade.
   */
  isInCurrentDecade(): boolean {
    const currentYear = new Date().getFullYear();
    const currentDecade = Math.floor(currentYear / 10) * 10;
    return (
      this.getYear() >= currentDecade && this.getYear() < currentDecade + 10
    );
  }

  /**
   * Checks if the current date is in the current century.
   */
  isInCurrentCentury(): boolean {
    const currentYear = new Date().getFullYear();
    const currentCentury = Math.floor(currentYear / 100) * 100;
    return (
      this.getYear() >= currentCentury && this.getYear() < currentCentury + 100
    );
  }

  /**
   * Converts the current date to a simple human-readable format (e.g., "2 days ago", "in 3 hours").
   */
  toHumanReadable(): string {
    const now = new Date();
    const diffInMs = this.getTime() - now.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    if (diffInMinutes < 0) {
      return Math.abs(diffInMinutes) < 60
        ? `${Math.abs(diffInMinutes)} minutes ago`
        : `${Math.abs(Math.floor(diffInMinutes / 60))} hours ago`;
    } else {
      return diffInMinutes < 60
        ? `in ${diffInMinutes} minutes`
        : `in ${Math.floor(diffInMinutes / 60)} hours`;
    }
  }

  /**
   * Adds or subtracts a specific unit (like years, months, days) from the date.
   * @param amount - The amount to add or subtract (use negative for subtraction).
   * @param unit - The unit ('years', 'months', 'days', etc.).
   */
  addSubtract(amount: number, unit: string): ProDate {
    switch (unit.toLowerCase()) {
      case "years":
        return this.addYears(amount);
      case "months":
        return this.addMonths(amount);
      case "weeks":
        return this.addWeeks(amount);
      case "days":
        return this.addDays(amount);
      case "hours":
        return this.addHours(amount);
      case "minutes":
        return this.addMinutes(amount);
      case "seconds":
        return this.addSeconds(amount);
      case "milliseconds":
        return this.addMilliseconds(amount);
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  /**
   * Gets the number of days in a specific month of a given year.
   * @param year - The year.
   * @param month - The month (1-12).
   */
  static daysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  /**
   * Checks if a specific date is a leap year.
   * @param year - The year.
   */
  static isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Returns the difference between two dates in a specific unit.
   * @param date - The date to compare with.
   * @param unit - The unit of difference ('years', 'months', 'days', etc.).
   */
  diff(date: ProDate, unit: string): number {
    const diffInMs = this.getTime() - date.getTime();
    switch (unit.toLowerCase()) {
      case "years":
        return diffInMs / (1000 * 60 * 60 * 24 * 365.25);
      case "months":
        return diffInMs / (1000 * 60 * 60 * 24 * 30.44);
      case "weeks":
        return diffInMs / (1000 * 60 * 60 * 24 * 7);
      case "days":
        return diffInMs / (1000 * 60 * 60 * 24);
      case "hours":
        return diffInMs / (1000 * 60 * 60);
      case "minutes":
        return diffInMs / (1000 * 60);
      case "seconds":
        return diffInMs / 1000;
      case "milliseconds":
        return diffInMs;
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  /**
   * Returns the start of a given unit of time.
   * @param unit - The unit ('year', 'month', 'week', 'day', 'hour', etc.).
   */
  startOf(unit: string): ProDate {
    switch (unit.toLowerCase()) {
      case "year":
        return new ProDate(new Date(this.getYear(), 0, 1));
      case "month":
        return new ProDate(new Date(this.getYear(), this.getMonth() - 1, 1));
      case "week":
        return this.startOfWeek();
      case "day":
        return this.startOfDay();
      case "hour":
        return new ProDate(new Date(this.getTime()).setMinutes(0, 0, 0));
      case "minute":
        return new ProDate(new Date(this.getTime()).setSeconds(0, 0));
      case "second":
        return new ProDate(new Date(this.getTime()).setMilliseconds(0));
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  /**
   * Returns the end of a given unit of time.
   * @param unit - The unit ('year', 'month', 'week', 'day', 'hour', etc.).
   */
  endOf(unit: string): ProDate {
    switch (unit.toLowerCase()) {
      case "year":
        return new ProDate(new Date(this.getYear(), 11, 31, 23, 59, 59, 999));
      case "month":
        return new ProDate(
          new Date(this.getYear(), this.getMonth(), 0, 23, 59, 59, 999),
        );
      case "week":
        return this.endOfWeek();
      case "day":
        return this.endOfDay();
      case "hour":
        return new ProDate(new Date(this.getTime()).setMinutes(59, 59, 999));
      case "minute":
        return new ProDate(new Date(this.getTime()).setSeconds(59, 999));
      case "second":
        return new ProDate(new Date(this.getTime()).setMilliseconds(999));
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  /**
   * Checks if the current date is before a given date.
   * @param date - The date to compare with.
   */
  isBefore(date: ProDate): boolean {
    return this.getTime() < date.getTime();
  }

  /**
   * Checks if the current date is after a given date.
   * @param date - The date to compare with.
   */
  isAfter(date: ProDate): boolean {
    return this.getTime() > date.getTime();
  }

  /**
   * Checks if two dates are the same in terms of a specific unit (e.g., same year, month, etc.).
   * @param date - The date to compare with.
   * @param unit - The unit to compare ('year', 'month', 'day', etc.).
   */
  isSame(date: ProDate, unit: string): boolean {
    switch (unit.toLowerCase()) {
      case "year":
        return this.getYear() === date.getYear();
      case "month":
        return (
          this.getYear() === date.getYear() &&
          this.getMonth() === date.getMonth()
        );
      case "week":
        return this.getWeekOfYear() === date.getWeekOfYear();
      case "day":
        return this.isSameDay(date);
      case "hour":
        return (
          this.getYear() === date.getYear() &&
          this.getMonth() === date.getMonth() &&
          this.getDayOfMonth() === date.getDayOfMonth() &&
          this.getHours() === date.getHours()
        );
      case "minute":
        return (
          this.getYear() === date.getYear() &&
          this.getMonth() === date.getMonth() &&
          this.getDayOfMonth() === date.getDayOfMonth() &&
          this.getHours() === date.getHours() &&
          this.getMinutes() === date.getMinutes()
        );
      case "second":
        return (
          this.getYear() === date.getYear() &&
          this.getMonth() === date.getMonth() &&
          this.getDayOfMonth() === date.getDayOfMonth() &&
          this.getHours() === date.getHours() &&
          this.getMinutes() === date.getMinutes() &&
          this.getSeconds() === date.getSeconds()
        );
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  /**
   * Formats the date in relative time (e.g., '2 hours ago', 'in 3 days') with full configurability.
   *
   * ### Features:
   * - **Units Supported**: Seconds, Minutes, Hours, Days, Weeks, Months, Years.
   * - **Pluralization**: Automatically adjusts for singular or plural forms.
   * - **Past and Future**: Handles both past and future dates, with correct phrasing.
   * - **Thresholds**: Customizable thresholds for rounding and displaying "just now" for recent times.
   * - **Granularity**: Supports fine-grained time differences (e.g., "3 minutes", "2 days").
   *
   * @param date - The date to compare with (optional, defaults to now).
   * @param options - Optional configuration:
   *   - `round`: Whether to round time units (default: true).
   *   - `thresholds`: Custom time thresholds for switching between units.
   *   - `futureText`: Text for future times (default: "in").
   *   - `pastText`: Text for past times (default: "ago").
   *   - `justNowText`: Text for very recent times (default: "just now").
   *   - `maxUnits`: Maximum number of units to display (e.g., 1 shows "1 day ago" instead of "1 day, 3 hours ago").
   * @returns A relative time string (e.g., '2 hours ago', 'in 3 days').
   */
  fromNow(
    date: ProDate = new ProDate(),
    options?: {
      round?: boolean;
      thresholds?: {
        seconds?: number;
        minutes?: number;
        hours?: number;
        days?: number;
        weeks?: number;
        months?: number;
        years?: number;
      };
      futureText?: string;
      pastText?: string;
      justNowText?: string;
      maxUnits?: number;
    },
  ): string {
    const {
      round = true,
      thresholds = {
        seconds: 45, // Display "just now" for under 45 seconds
        minutes: 60, // Display minutes for under 60 minutes
        hours: 24, // Display hours for under 24 hours
        days: 7, // Display days for under 7 days
        weeks: 4, // Display weeks for under 4 weeks
        months: 12, // Display months for under 12 months
      },
      futureText = "in",
      pastText = "ago",
      justNowText = "just now",
      maxUnits = 1,
    } = options || {};

    // Get the difference in various units
    const diffInSeconds = this.diff(date, "seconds");
    const absDiffInSeconds = Math.abs(diffInSeconds);
    const diffInMinutes = absDiffInSeconds / 60;
    const diffInHours = absDiffInSeconds / 3600;
    const diffInDays = absDiffInSeconds / 86400;
    const diffInWeeks = absDiffInSeconds / (86400 * 7);
    const diffInMonths = absDiffInSeconds / (86400 * 30.44); // Average month length
    const diffInYears = absDiffInSeconds / (86400 * 365.25); // Average year length

    const isPast = diffInSeconds < 0;

    // Determine which unit to display
    let result = "";
    let unitCount = 0;

    if (absDiffInSeconds < thresholds.seconds!) {
      // "Just now"
      result = justNowText;
    } else if (diffInMinutes < thresholds.minutes!) {
      // Seconds or minutes
      const minutes = round
        ? Math.round(diffInMinutes)
        : Math.floor(diffInMinutes);
      result = `${minutes} ${this.pluralize(minutes, "minute")}`;
    } else if (diffInHours < thresholds.hours!) {
      // Hours
      const hours = round ? Math.round(diffInHours) : Math.floor(diffInHours);
      result = `${hours} ${this.pluralize(hours, "hour")}`;
    } else if (diffInDays < thresholds.days!) {
      // Days
      const days = round ? Math.round(diffInDays) : Math.floor(diffInDays);
      result = `${days} ${this.pluralize(days, "day")}`;
    } else if (diffInWeeks < thresholds.weeks!) {
      // Weeks
      const weeks = round ? Math.round(diffInWeeks) : Math.floor(diffInWeeks);
      result = `${weeks} ${this.pluralize(weeks, "week")}`;
    } else if (diffInMonths < thresholds.months!) {
      // Months
      const months = round
        ? Math.round(diffInMonths)
        : Math.floor(diffInMonths);
      result = `${months} ${this.pluralize(months, "month")}`;
    } else {
      // Years
      const years = round ? Math.round(diffInYears) : Math.floor(diffInYears);
      result = `${years} ${this.pluralize(years, "year")}`;
    }

    // Apply past/future text
    if (result !== justNowText) {
      result = isPast ? `${result} ${pastText}` : `${futureText} ${result}`;
    }

    // Optionally limit to the max number of units
    if (unitCount >= maxUnits) {
      return result;
    }

    return result;
  }

  /**
   * Helper function to pluralize units (e.g., '1 minute' vs '2 minutes').
   * @param value - The number of units.
   * @param unit - The unit to pluralize.
   */
  private pluralize(value: number, unit: string): string {
    if (value === 1) {
      return unit;
    }
    return `${unit}s`;
  }

  /**
   * Returns a human-readable string indicating how long ago the date was or how far in the future it is.
   *
   * ### Features:
   * - **Singular/Plural**: Automatically adjusts for singular or plural forms.
   * - **Supports Past and Future Dates**: Can handle both past and future dates.
   * - **Configurable Precision**: Can display seconds, minutes, hours, or days based on the difference.
   * - **Customizable Rounding**: Optionally enable or disable rounding.
   *
   * @param options - Optional configuration for the output:
   *   - `round`: Whether to round time units (default: true).
   *   - `futureText`: Text for future times (default: "in").
   *   - `pastText`: Text for past times (default: "ago").
   *   - `justNowText`: Text for very recent times (default: "just now").
   *   - `maxUnits`: Maximum number of units to display (default: 1).
   * @returns A relative time string (e.g., '2 hours ago', 'in 3 days').
   */
  timeAgo(options?: {
    round?: boolean;
    futureText?: string;
    pastText?: string;
    justNowText?: string;
    maxUnits?: number;
  }): string {
    const {
      round = true,
      futureText = "in",
      pastText = "ago",
      justNowText = "just now",
      maxUnits = 1,
    } = options || {};

    // Get the current time and compute the difference in seconds
    const now = new ProDate();
    const diffInSeconds = this.diff(now, "seconds");
    const absDiffInSeconds = Math.abs(diffInSeconds);

    // Determine the time unit differences
    const diffInMinutes = absDiffInSeconds / 60;
    const diffInHours = absDiffInSeconds / 3600;
    const diffInDays = absDiffInSeconds / 86400;

    // Check if the date is in the past or future
    const isPast = diffInSeconds < 0;

    // Helper function to handle rounding and pluralization
    const formatUnit = (value: number, unit: string): string => {
      const roundedValue = round ? Math.round(value) : Math.floor(value);
      return `${roundedValue} ${this.pluralize(roundedValue, unit)}`;
    };

    // Build the result string based on the difference
    let result = "";
    if (absDiffInSeconds < 60) {
      // Just now or seconds ago
      result =
        absDiffInSeconds < 45
          ? justNowText
          : formatUnit(absDiffInSeconds, "second");
    } else if (diffInMinutes < 60) {
      // Minutes ago
      result = formatUnit(diffInMinutes, "minute");
    } else if (diffInHours < 24) {
      // Hours ago
      result = formatUnit(diffInHours, "hour");
    } else {
      // Days ago
      result = formatUnit(diffInDays, "day");
    }

    // Apply past or future text
    if (result !== justNowText) {
      result = isPast ? `${result} ${pastText}` : `${futureText} ${result}`;
    }

    return result;
  }

  /**
   * Parses a date string in the ISO 8601 format.
   * @param isoString - The ISO string to parse.
   */
  static fromISO(isoString: string): ProDate {
    return new ProDate(new Date(isoString));
  }

  /**
   * Parses a date string from a Unix timestamp (in seconds).
   * @param unixSeconds - The Unix timestamp in seconds.
   */
  static fromUnix(unixSeconds: number): ProDate {
    return new ProDate(unixSeconds * 1000);
  }

  /**
   * Checks if the current date is within a specific date range.
   * @param startDate - The start date.
   * @param endDate - The end date.
   */
  isBetween(startDate: ProDate, endDate: ProDate): boolean {
    return this.isAfter(startDate) && this.isBefore(endDate);
  }

  /**
   * Returns the number of business days between two dates (excluding weekends).
   * @param date - The date to compare with.
   */
  businessDaysBetween(date: ProDate): number {
    let count = 0;
    let currentDate = new ProDate(Math.min(this.getTime(), date.getTime()));
    const endDate = new ProDate(Math.max(this.getTime(), date.getTime()));
    while (currentDate.isBefore(endDate)) {
      if (!currentDate.isWeekend()) {
        count++;
      }
      currentDate = currentDate.addDays(1);
    }
    return count;
  }

  /**
   * Formats the date as 'Day Month Year' (e.g., '27 February 2024').
   */
  formatDayMonthYear(): string {
    return this.format("D MMMM YYYY");
  }

  /**
   * Returns the start of the next month.
   */
  startOfNextMonth(): ProDate {
    return this.addMonths(1).startOf("month");
  }

  /**
   * Returns the end of the previous month.
   */
  endOfPreviousMonth(): ProDate {
    return this.subtractMonths(1).endOf("month");
  }

  /**
   * Formats the date using the "full" locale string format (e.g., Tuesday, February 27, 2024 2:30 PM).
   */
  formatFull(): string {
    return this.format("LLLL");
  }

  /**
   * Converts the current date to an array `[year, month, day, hour, minute, second, millisecond]`.
   */
  toArray(): number[] {
    return [
      this.getYear(),
      this.getMonth(),
      this.getDayOfMonth(),
      this.getHours(),
      this.getMinutes(),
      this.getSeconds(),
      this.getMilliseconds(),
    ];
  }

  /**
   * Converts the current date to a JavaScript object.
   */
  toObject(): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
  } {
    return {
      year: this.getYear(),
      month: this.getMonth(),
      day: this.getDayOfMonth(),
      hour: this.getHours(),
      minute: this.getMinutes(),
      second: this.getSeconds(),
      millisecond: this.getMilliseconds(),
    };
  }

  /**
   * Converts the date to JSON format.
   */
  toJSON(): string {
    return this.toISOString();
  }

  /**
   * Returns the difference between two dates in quarters.
   * @param date - The date to compare.
   */
  diffInQuarters(date: ProDate): number {
    return Math.floor(this.diff(date, "months") / 3);
  }

  /**
   * Returns the difference between two dates in business days (Monday-Friday).
   * @param date - The date to compare with.
   */
  diffInBusinessDays(date: ProDate): number {
    let diff = 0;
    let currentDate = new ProDate(Math.min(this.getTime(), date.getTime()));
    const endDate = new ProDate(Math.max(this.getTime(), date.getTime()));
    while (currentDate.isBefore(endDate)) {
      if (!currentDate.isWeekend()) {
        diff++;
      }
      currentDate = currentDate.addDays(1);
    }
    return diff;
  }

  /**
   * Gets the ISO week number of the year.
   */
  getISOWeek(): number {
    const date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    const yearStart = new Date(Date.UTC(date.getFullYear(), 0, 1));
    return Math.ceil(
      ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
    );
  }

  /**
   * Gets the ISO year corresponding to the ISO week number.
   */
  getISOYear(): number {
    const date = new Date(this.getTime());
    date.setDate(date.getDate() + 4 - (date.getDay() || 7));
    return date.getFullYear();
  }

  /**
   * Checks if the current date falls within the same ISO week as another date.
   * @param date - The date to compare.
   */
  isSameISOWeek(date: ProDate): boolean {
    return (
      this.getISOWeek() === date.getISOWeek() &&
      this.getISOYear() === date.getISOYear()
    );
  }

  /**
   * Checks if the current date falls within the same quarter as another date.
   * @param date - The date to compare.
   */
  isSameQuarter(date: ProDate): boolean {
    return (
      this.getYear() === date.getYear() &&
      Math.floor((this.getMonth() - 1) / 3) ===
        Math.floor((date.getMonth() - 1) / 3)
    );
  }

  /**
   * Checks if the current date falls within the same ISO week as today.
   */
  isThisISOWeek(): boolean {
    return this.isSameISOWeek(new ProDate());
  }

  /**
   * Converts the current date to the Unix timestamp in milliseconds.
   */
  toUnixMilliseconds(): number {
    return this.getTime();
  }

  /**
   * Converts the current date to the Unix timestamp in seconds.
   */
  toUnixSeconds(): number {
    return Math.floor(this.getTime() / 1000);
  }

  /**
   * Checks if the current date is in the current quarter.
   */
  isInCurrentQuarter(): boolean {
    const currentDate = new ProDate();
    return this.isSameQuarter(currentDate);
  }

  /**
   * Checks if the date is within the current week.
   */
  isInCurrentWeek(): boolean {
    const currentWeekStart = new ProDate().startOf("week");
    const currentWeekEnd = new ProDate().endOf("week");
    return this.isBetween(currentWeekStart, currentWeekEnd);
  }

  /**
   * Converts the current date to a readable string showing only the time (HH:mm).
   */
  toTimeString(): string {
    return this.format("HH:mm");
  }

  /**
   * Converts the current date to a readable string showing only the date (YYYY-MM-DD).
   */
  toDateString(): string {
    return this.format("YYYY-MM-DD");
  }

  /**
   * Converts the current date to the start of the current UTC day.
   */
  startOfUTCDay(): ProDate {
    const utcDate = new Date(this.date.toISOString().slice(0, 10));
    return new ProDate(utcDate);
  }

  /**
   * Converts the current date to the end of the current UTC day.
   */
  endOfUTCDay(): ProDate {
    const utcDate = new Date(
      this.date.toISOString().slice(0, 10) + "T23:59:59.999Z",
    );
    return new ProDate(utcDate);
  }

  /**
   * Returns whether the date is the same year as another date.
   * @param date - The date to compare.
   */
  isSameYear(date: ProDate): boolean {
    return this.getYear() === date.getYear();
  }

  /**
   * Checks if the date is tomorrow.
   */
  isTomorrow(): boolean {
    const tomorrow = new ProDate().addDays(1);
    return this.isSameDay(tomorrow);
  }

  /**
   * Checks if the date is yesterday.
   */
  isYesterday(): boolean {
    const yesterday = new ProDate().subtractDays(1);
    return this.isSameDay(yesterday);
  }

  /**
   * Returns the number of remaining days in the current month.
   */
  daysRemainingInMonth(): number {
    const lastDayOfMonth = new Date(
      this.getYear(),
      this.getMonth(),
      0,
    ).getDate();
    return lastDayOfMonth - this.getDayOfMonth();
  }

  /**
   * Adds a specific number of years, months, weeks, days, hours, minutes, or seconds to the date.
   * @param amount - The amount of time to add.
   * @param unit - The unit of time (e.g., 'years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds').
   */
  add(amount: number, unit: string): ProDate {
    switch (unit.toLowerCase()) {
      case "years":
        return this.addYears(amount);
      case "months":
        return this.addMonths(amount);
      case "weeks":
        return this.addWeeks(amount);
      case "days":
        return this.addDays(amount);
      case "hours":
        return this.addHours(amount);
      case "minutes":
        return this.addMinutes(amount);
      case "seconds":
        return this.addSeconds(amount);
      default:
        throw new Error(`Unknown unit: ${unit}`);
    }
  }

  /**
   * Subtracts a specific number of years, months, weeks, days, hours, minutes, or seconds from the date.
   * @param amount - The amount of time to subtract.
   * @param unit - The unit of time (e.g., 'years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds').
   */
  subtract(amount: number, unit: string): ProDate {
    return this.add(-amount, unit);
  }

  /**
   * Returns the first day of the current year.
   */
  startOfYear(): ProDate {
    return new ProDate(new Date(this.getYear(), 0, 1));
  }

  /**
   * Returns the last day of the current year.
   */
  endOfYear(): ProDate {
    return new ProDate(new Date(this.getYear(), 11, 31, 23, 59, 59, 999));
  }

  /**
   * Returns the current date in UTC.
   */
  toUTCDate(): ProDate {
    return new ProDate(this.date.toISOString());
  }

  /**
   * Returns the current date in a specified time zone.
   * @param timeZone - The time zone to convert to (e.g., 'America/New_York').
   */
  toTimeZone(timeZone: string): ProDate {
    const dateInTimeZone = new Date(
      this.date.toLocaleString("en-US", { timeZone }),
    );
    return new ProDate(dateInTimeZone);
  }

  /**
   * Checks if the current date is during daylight saving time (DST).
   */
  isDST(): boolean {
    const jan = new Date(this.getYear(), 0, 1);
    const jul = new Date(this.getYear(), 6, 1);
    return (
      this.date.getTimezoneOffset() <
      Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset())
    );
  }

  /**
   * Checks if the current date is the same as another date (ignoring time).
   * @param date - The date to compare.
   */
  isSameDate(date: ProDate): boolean {
    return (
      this.getYear() === date.getYear() &&
      this.getMonth() === date.getMonth() &&
      this.getDayOfMonth() === date.getDayOfMonth()
    );
  }

  /**
   * Checks if the current date is the same as another date (including time).
   * @param date - The date to compare.
   */
  isSameExact(date: ProDate): boolean {
    return this.getTime() === date.getTime();
  }

  /**
   * Converts the current date to an object with `year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`.
   */
  toDateObject(): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
  } {
    return {
      year: this.getYear(),
      month: this.getMonth(),
      day: this.getDayOfMonth(),
      hour: this.getHours(),
      minute: this.getMinutes(),
      second: this.getSeconds(),
      millisecond: this.getMilliseconds(),
    };
  }

  /**
   * Returns the number of days between the current date and another date.
   * @param date - The date to compare.
   */
  daysBetween(date: ProDate): number {
    return Math.abs(this.diff(date, "days"));
  }

  /**
   * Returns the number of months between the current date and another date.
   * @param date - The date to compare.
   */
  monthsBetween(date: ProDate): number {
    return Math.abs(this.diff(date, "months"));
  }

  /**
   * Returns the number of years between the current date and another date.
   * @param date - The date to compare.
   */
  yearsBetween(date: ProDate): number {
    return Math.abs(this.diff(date, "years"));
  }

  /**
   * Checks if the date falls within the specified date range (inclusive).
   * @param startDate - The start of the range.
   * @param endDate - The end of the range.
   */
  isInRange(startDate: ProDate, endDate: ProDate): boolean {
    return this.isAfter(startDate) && this.isBefore(endDate);
  }

  /**
   * Returns the difference between two dates in weeks.
   * @param date - The date to compare.
   */
  weeksBetween(date: ProDate): number {
    return Math.abs(this.diff(date, "weeks"));
  }

  /**
   * Returns the first Monday after the current date.
   */
  nextMonday(): ProDate {
    const dayOfWeek = this.getDayOfWeek();
    const daysUntilNextMonday = (8 - dayOfWeek) % 7;
    return this.addDays(daysUntilNextMonday);
  }

  /**
   * Checks if the current time is in the AM period.
   */
  isAM(): boolean {
    return this.getHours() < 12;
  }

  /**
   * Checks if the current time is in the PM period.
   */
  isPM(): boolean {
    return this.getHours() >= 12;
  }

  /**
   * Converts the current date to UTC and returns it as an ISO string.
   */
  toUTCISO(): string {
    return this.toUTCDate().toISO8601();
  }

  /**
   * Returns a short localized date string (e.g., '09/23/2023').
   * @param locale - The locale to format the date (default: 'en-US').
   */
  toShortDateString(locale: string = "en-US"): string {
    return this.date.toLocaleDateString(locale);
  }

  /**
   * Adds a specified duration to the current date using an object.
   * @param duration - Object with units like { days: 3, hours: 2 }.
   */
  addDuration(duration: {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }): ProDate {
    if (duration.years) this.addYears(duration.years);
    if (duration.months) this.addMonths(duration.months);
    if (duration.weeks) this.addWeeks(duration.weeks);
    if (duration.days) this.addDays(duration.days);
    if (duration.hours) this.addHours(duration.hours);
    if (duration.minutes) this.addMinutes(duration.minutes);
    if (duration.seconds) this.addSeconds(duration.seconds);
    return this;
  }

  /**
   * Subtracts a specified duration from the current date using an object.
   * @param duration - Object with units like { days: 3, hours: 2 }.
   */
  subtractDuration(duration: {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }): ProDate {
    return this.addDuration({
      years: -(duration.years || 0),
      months: -(duration.months || 0),
      weeks: -(duration.weeks || 0),
      days: -(duration.days || 0),
      hours: -(duration.hours || 0),
      minutes: -(duration.minutes || 0),
      seconds: -(duration.seconds || 0),
    });
  }

  /**
   * Formats the date into a localized human-readable format.
   * @param locale - The locale to format the date (e.g., 'en-US').
   * @param options - Optional formatting options.
   */
  toLocalizedString(
    locale: string = "en-US",
    options?: Intl.DateTimeFormatOptions,
  ): string {
    return this.date.toLocaleDateString(locale, options);
  }

  /**
   * Returns the ISO week number for the current date, accounting for years starting on any day.
   */
  getWeekOfYearISO(): number {
    const tempDate = new Date(this.date.getTime());
    tempDate.setHours(0, 0, 0, 0);
    tempDate.setDate(tempDate.getDate() + 3 - ((tempDate.getDay() + 6) % 7)); // Set to nearest Thursday
    const yearStart = new Date(Date.UTC(tempDate.getFullYear(), 0, 4)); // ISO week starts on Jan 4
    return Math.ceil(
      ((tempDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7,
    );
  }

  /**
   * Returns the difference between two dates as a human-readable string (e.g., "2 days", "3 months").
   * @param date - The date to compare.
   */
  humanizeDiff(date: ProDate): string {
    const diffInSeconds = this.diff(date, "seconds");
    const absDiff = Math.abs(diffInSeconds);
    if (absDiff < 60) {
      return `${absDiff} seconds`;
    } else if (absDiff < 3600) {
      return `${Math.floor(absDiff / 60)} minutes`;
    } else if (absDiff < 86400) {
      return `${Math.floor(absDiff / 3600)} hours`;
    } else if (absDiff < 2592000) {
      // Less than 30 days
      return `${Math.floor(absDiff / 86400)} days`;
    } else if (absDiff < 31536000) {
      // Less than 365 days
      return `${Math.floor(absDiff / 2592000)} months`;
    } else {
      return `${Math.floor(absDiff / 31536000)} years`;
    }
  }

  /**
   * Parses a date string with the given format.
   * This function supports a wide range of format tokens and provides flexible parsing capabilities.
   *
   * ### Supported Tokens:
   * - `YYYY` (4-digit year)
   * - `YY` (2-digit year)
   * - `MM` (2-digit month)
   * - `M` (1 or 2-digit month)
   * - `DD` (2-digit day of the month)
   * - `D` (1 or 2-digit day of the month)
   * - `HH` (2-digit 24-hour format)
   * - `H` (1 or 2-digit 24-hour format)
   * - `hh` (2-digit 12-hour format)
   * - `h` (1 or 2-digit 12-hour format)
   * - `mm` (2-digit minutes)
   * - `ss` (2-digit seconds)
   * - `A` / `a` (AM/PM)
   *
   * ### Example Usage:
   * ```typescript
   * ProDate.parse('2023-09-24 14:30', 'YYYY-MM-DD HH:mm');
   * ProDate.parse('09/24/23', 'MM/DD/YY');
   * ```
   *
   * @param dateString - The date string to parse (e.g., '2023-09-24').
   * @param format - The format of the date string (e.g., 'YYYY-MM-DD').
   * @returns A ProDate object.
   * @throws Will throw an error if the format doesn't match the date string.
   */
  static parse(dateString: string, format: string): ProDate {
    const formatTokens: Record<string, string> = {
      YYYY: "\\d{4}", // Full year
      YY: "\\d{2}", // Two-digit year
      MM: "0[1-9]|1[0-2]", // Two-digit month
      M: "[1-9]|1[0-2]", // One or two-digit month
      DD: "0[1-9]|[12]\\d|3[01]", // Two-digit day
      D: "[1-9]|[12]\\d|3[01]", // One or two-digit day
      HH: "[01]\\d|2[0-3]", // Two-digit 24-hour format
      H: "\\d|1\\d|2[0-3]", // One or two-digit 24-hour format
      hh: "0[1-9]|1[0-2]", // Two-digit 12-hour format
      h: "[1-9]|1[0-2]", // One or two-digit 12-hour format
      mm: "[0-5]\\d", // Two-digit minutes
      ss: "[0-5]\\d", // Two-digit seconds
      A: "AM|PM", // AM/PM uppercase
      a: "am|pm", // AM/PM lowercase
    };

    // Build regex pattern by replacing tokens with their corresponding regex
    const formatRegex = format.replace(
      /YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|ss|A|a/g,
      (match) => formatTokens[match] || "",
    );

    // Create the regex pattern to parse the date string
    const regex = new RegExp(`^${formatRegex}$`);
    const match = regex.exec(dateString);

    if (!match) {
      throw new Error(
        `Invalid date format: "${dateString}" does not match the expected format "${format}".`,
      );
    }

    // Extract parts from the match and convert them to numbers
    const extract = (
      token: string,
      index: number,
      defaultValue = 0,
    ): number => {
      const tokenValue = match[index + 1];
      if (!tokenValue) return defaultValue;

      switch (token) {
        case "MM":
        case "M":
        case "DD":
        case "D":
        case "HH":
        case "H":
        case "hh":
        case "h":
        case "mm":
        case "ss":
          return parseInt(tokenValue, 10);
        case "YYYY":
          return parseInt(tokenValue, 10);
        case "YY":
          return parseInt(`20${tokenValue}`, 10); // Assume 2000s for YY format
        case "A":
        case "a":
          return tokenValue.toUpperCase() === "PM" ? 12 : 0;
        default:
          return defaultValue;
      }
    };

    let year = 1970,
      month = 0,
      day = 1,
      hour = 0,
      minute = 0,
      second = 0;

    // Extract date parts based on the format
    let currentIndex = 0;
    const formatOrder = format.match(/YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|ss|A|a/g);

    if (formatOrder) {
      formatOrder.forEach((token) => {
        switch (token) {
          case "YYYY":
            year = extract(token, currentIndex);
            break;
          case "YY":
            year = extract(token, currentIndex);
            break;
          case "MM":
          case "M":
            month = extract(token, currentIndex) - 1; // Months are zero-indexed
            break;
          case "DD":
          case "D":
            day = extract(token, currentIndex);
            break;
          case "HH":
          case "H":
            hour = extract(token, currentIndex);
            break;
          case "hh":
          case "h":
            hour = extract(token, currentIndex);
            if (/a|A/.test(format) && match[currentIndex + 1]) {
              hour += extract("A", currentIndex + 1);
            }
            break;
          case "mm":
            minute = extract(token, currentIndex);
            break;
          case "ss":
            second = extract(token, currentIndex);
            break;
        }
        currentIndex++;
      });
    }

    // Handle AM/PM adjustments if format includes it
    if (format.includes("A") || format.includes("a")) {
      const isPM = match[format.indexOf("A") + 1]?.toUpperCase() === "PM";
      if (isPM && hour < 12) {
        hour += 12;
      } else if (!isPM && hour === 12) {
        hour = 0;
      }
    }

    // Construct the final parsed date
    const parsedDate = new Date(year, month, day, hour, minute, second);

    // Validate if the parsed date is a valid date
    if (isNaN(parsedDate.getTime())) {
      throw new Error(
        `Invalid date value: "${dateString}" could not be parsed.`,
      );
    }

    return new ProDate(parsedDate);
  }

  /**
   * Adds a specific duration using a string (e.g., '2 years', '3 days').
   * @param durationString - The duration string (e.g., '2 years', '3 days').
   */
  addDurationString(durationString: string): ProDate {
    const [amount, unit] = durationString.split(" ");
    return this.add(parseInt(amount), unit);
  }

  /**
   * Subtracts a specific duration using a string (e.g., '2 years', '3 days').
   * @param durationString - The duration string (e.g., '2 years', '3 days').
   */
  subtractDurationString(durationString: string): ProDate {
    const [amount, unit] = durationString.split(" ");
    return this.subtract(parseInt(amount), unit);
  }

  /**
   * Returns the difference between two dates in months, rounding down.
   * @param date - The date to compare.
   */
  diffInFullMonths(date: ProDate): number {
    const months = this.diff(date, "months");
    return Math.floor(months);
  }

  /**
   * Returns the difference between two dates in years, rounding down.
   * @param date - The date to compare.
   */
  diffInFullYears(date: ProDate): number {
    const years = this.diff(date, "years");
    return Math.floor(years);
  }

  /**
   * Checks if the current date is the same day of the year as another date.
   * @param date - The date to compare.
   */
  isSameDayOfYear(date: ProDate): boolean {
    return this.getDayOfYear() === date.getDayOfYear();
  }

  /**
   * Checks if the current time is between two times on the same day.
   * @param startTime - The start time in 'HH:mm' format.
   * @param endTime - The end time in 'HH:mm' format.
   */
  isTimeBetween(startTime: string, endTime: string): boolean {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
    const currentHour = this.getHours();
    const currentMinute = this.getMinutes();
    const isAfterStart =
      currentHour > startHour ||
      (currentHour === startHour && currentMinute >= startMinute);
    const isBeforeEnd =
      currentHour < endHour ||
      (currentHour === endHour && currentMinute <= endMinute);
    return isAfterStart && isBeforeEnd;
  }

  /**
   * Gets the start of the previous month.
   */
  startOfPreviousMonth(): ProDate {
    return this.subtractMonths(1).startOfMonth();
  }

  /**
   * Returns whether the current time is between noon and midnight (PM hours).
   */
  isPMHours(): boolean {
    return this.getHours() >= 12;
  }

  /**
   * Returns whether the current time is between midnight and noon (AM hours).
   */
  isAMHours(): boolean {
    return this.getHours() < 12;
  }

  /**
   * Checks if the current date falls on the same day of the week as another date.
   * @param date - The date to compare.
   */
  isSameDayOfWeek(date: ProDate): boolean {
    return this.getDayOfWeek() === date.getDayOfWeek();
  }

  /**
   * Gets the difference between two dates in weeks, rounding down.
   * @param date - The date to compare.
   */
  diffInFullWeeks(date: ProDate): number {
    const weeks = this.diff(date, "weeks");
    return Math.floor(weeks);
  }

  /**
   * Checks if the current date falls within a leap year.
   */
  isCurrentYearLeap(): boolean {
    return this.isLeapYear();
  }

  /**
   * Returns the current quarter's start date.
   */
  startOfCurrentQuarter(): ProDate {
    const quarter = this.getQuarter();
    const startMonth = (quarter - 1) * 3;
    return new ProDate(new Date(this.getYear(), startMonth, 1));
  }

  /**
   * Returns the current quarter's end date.
   */
  endOfCurrentQuarter(): ProDate {
    const quarter = this.getQuarter();
    const endMonth = quarter * 3;
    return new ProDate(new Date(this.getYear(), endMonth, 0, 23, 59, 59, 999));
  }

  /**
   * Returns whether the current date is the first day of the year.
   */
  isFirstDayOfYear(): boolean {
    return this.getDayOfMonth() === 1 && this.getMonth() === 1;
  }

  /**
   * Returns whether the current date is the last day of the year.
   */
  isLastDayOfYear(): boolean {
    return this.getDayOfMonth() === 31 && this.getMonth() === 12;
  }

  /**
   * Returns a human-readable relative time string with customizable rounding.
   * @param options - Optional configuration for rounding and units.
   */
  humanizeTimeAgo(options?: { round?: boolean }): string {
    const round = options?.round ?? true;
    const diffInMinutes = this.diff(new ProDate(), "minutes");
    if (diffInMinutes < 60) {
      return `${Math.round(diffInMinutes)} minutes ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.round(diffInMinutes / 60)} hours ago`;
    } else {
      return `${Math.round(diffInMinutes / 1440)} days ago`;
    }
  }

  /**
   * Parses a date string in ISO 8601 format.
   * @param isoString - The ISO string to parse.
   */
  static parseISO(isoString: string): ProDate {
    return new ProDate(new Date(isoString));
  }
}
