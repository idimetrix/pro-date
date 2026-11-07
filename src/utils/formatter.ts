/**
 * Date formatting utilities
 */

import {
  getOrdinal,
  getDayOfYear,
  getWeekOfYear,
  getISOWeekOfYear,
  formatTimezoneOffset,
  getTimeZoneName,
} from "./helpers";

/**
 * Format a date according to the specified format string
 */
export function formatDate(date: Date, formatString: string): string {
  // Handle custom formats first by expanding them
  const customFormats: Record<string, string> = {
    LLLL: "dddd, MMMM D, YYYY h:mm A",
    LLL: "MMMM D, YYYY h:mm A",
    LL: "MMMM D, YYYY",
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
  };

  let result = formatString;
  for (const [key, value] of Object.entries(customFormats)) {
    if (result.includes(key)) {
      result = result.replace(new RegExp(key, 'g'), value);
    }
  }

  const map: Record<string, string> = {
    // Year
    YYYY: date.getFullYear().toString(),
    YY: date.getFullYear().toString().slice(-2),
    Y: date.getFullYear().toString(),

    // Quarter
    Q: Math.ceil((date.getMonth() + 1) / 3).toString(),

    // Month
    MMMM: date.toLocaleString("default", { month: "long" }),
    MMM: date.toLocaleString("default", { month: "short" }),
    MM: (date.getMonth() + 1).toString().padStart(2, "0"),
    M: (date.getMonth() + 1).toString(),
    Mo: `${date.getMonth() + 1}${getOrdinal(date.getMonth() + 1)}`,

    // Day of Month
    DD: date.getDate().toString().padStart(2, "0"),
    D: date.getDate().toString(),
    Do: `${date.getDate()}${getOrdinal(date.getDate())}`,

    // Day of Year
    DDD: getDayOfYear(date).toString().padStart(3, "0"),
    DDDD: getDayOfYear(date).toString(),

    // Day of Week
    dddd: date.toLocaleString("default", { weekday: "long" }),
    ddd: date.toLocaleString("default", { weekday: "short" }),
    dd: date.toLocaleString("default", { weekday: "narrow" }),
    d: date.getDay().toString(),
    E: (date.getDay() === 0 ? 7 : date.getDay()).toString(),

    // Week of Year
    w: getWeekOfYear(date).toString(),
    ww: getWeekOfYear(date).toString().padStart(2, "0"),

    // ISO Week of Year
    W: getISOWeekOfYear(date).toString(),
    WW: getISOWeekOfYear(date).toString().padStart(2, "0"),

    // Hour (24-hour format)
    HH: date.getHours().toString().padStart(2, "0"),
    H: date.getHours().toString(),

    // Hour (12-hour format)
    hh: (date.getHours() % 12 || 12).toString().padStart(2, "0"),
    h: (date.getHours() % 12 || 12).toString(),

    // Minute
    mm: date.getMinutes().toString().padStart(2, "0"),
    m: date.getMinutes().toString(),

    // Second
    ss: date.getSeconds().toString().padStart(2, "0"),
    s: date.getSeconds().toString(),

    // Fractional Seconds
    SSS: date.getMilliseconds().toString().padStart(3, "0"),
    SS: date.getMilliseconds().toString().padStart(3, "0").slice(0, 2),
    S: date.getMilliseconds().toString().padStart(3, "0").charAt(0),

    // AM/PM
    A: date.getHours() < 12 ? "AM" : "PM",
    a: date.getHours() < 12 ? "am" : "pm",

    // Timezone
    Z: formatTimezoneOffset(date, true),
    ZZ: formatTimezoneOffset(date, false),
    z: getTimeZoneName(date),

    // Unix Timestamp
    X: Math.floor(date.getTime() / 1000).toString(),
    x: date.getTime().toString(),
  };

  return result.replace(
    /YYYY|YY|Y|Q|MMMM|MMM|MM|Mo|M|DD|Do|D|DDD|DDDD|dddd|ddd|dd|d|E|ww|w|WW|W|HH|H|hh|h|mm|m|ss|s|SSS|SS|S|A|a|ZZ|Z|z|X|x/g,
    (matched) => map[matched as keyof typeof map] || matched
  );
}

