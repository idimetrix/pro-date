/**
 * Helper utility functions for date operations
 */

/**
 * Get ordinal suffix for a given number (e.g., 1st, 2nd, 3rd, 4th)
 */
export function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

/**
 * Get the day of the year (1-365 or 1-366 for leap years)
 */
export function getDayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff =
    date.getTime() -
    start.getTime() +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/**
 * Get the week number (ISO 8601)
 */
export function getWeekOfYear(date: Date): number {
  const oneJan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor(
    (date.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000)
  );
  return Math.ceil((date.getDay() + 1 + days) / 7);
}

/**
 * Get the ISO week number (week starting on Monday)
 */
export function getISOWeekOfYear(date: Date): number {
  const tempDate = new Date(date);
  const dayNum = tempDate.getUTCDay() || 7;
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  return Math.ceil(
    ((tempDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
}

/**
 * Format the timezone offset
 */
export function formatTimezoneOffset(date: Date, colon: boolean): string {
  const offset = date.getTimezoneOffset();
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60)
    .toString()
    .padStart(2, "0");
  const minutes = (absOffset % 60).toString().padStart(2, "0");
  return colon ? `${sign}${hours}:${minutes}` : `${sign}${hours}${minutes}`;
}

/**
 * Get the timezone name (abbreviation)
 */
export function getTimeZoneName(date: Date): string {
  return date
    .toLocaleTimeString("en-us", { timeZoneName: "short" })
    .split(" ")[2];
}

/**
 * Check if a year is a leap year
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Get number of days in a month
 */
export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/**
 * Pluralize a unit (e.g., '1 minute' vs '2 minutes')
 */
export function pluralize(value: number, unit: string): string {
  if (value === 1) {
    return unit;
  }
  return `${unit}s`;
}


