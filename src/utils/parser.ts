/**
 * Date parsing utilities
 */

/**
 * Parse a date string with the given format
 * Supports various format tokens like YYYY, MM, DD, HH, mm, ss, etc.
 */
export function parseDate(dateString: string, format: string): Date {
  const formatTokens: Record<string, string> = {
    YYYY: "(\\d{4})",
    YY: "(\\d{2})",
    MM: "(0[1-9]|1[0-2])",
    M: "([1-9]|1[0-2])",
    DD: "(0[1-9]|[12]\\d|3[01])",
    D: "([1-9]|[12]\\d|3[01])",
    HH: "([01]\\d|2[0-3])",
    H: "(\\d|1\\d|2[0-3])",
    hh: "(0[1-9]|1[0-2])",
    h: "([1-9]|1[0-2])",
    mm: "([0-5]\\d)",
    ss: "([0-5]\\d)",
    A: "(AM|PM)",
    a: "(am|pm)",
  };

  // Track which tokens appear in the format and their order
  const tokenOrder: string[] = [];
  let formatRegex = format;

  // Replace tokens with capturing groups and track order
  const tokenPattern = /YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|ss|A|a/g;
  formatRegex = format.replace(tokenPattern, (match) => {
    tokenOrder.push(match);
    return formatTokens[match] || match;
  });

  const regex = new RegExp(`^${formatRegex}$`);
  const match = regex.exec(dateString);

  if (!match) {
    throw new Error(
      `Invalid date format: "${dateString}" does not match the expected format "${format}".`
    );
  }

  let year = 1970;
  let month = 0;
  let day = 1;
  let hour = 0;
  let minute = 0;
  let second = 0;
  let isPM = false;
  let has12Hour = false;

  // Extract values based on token order
  tokenOrder.forEach((token, index) => {
    const value = match[index + 1]; // +1 because match[0] is the full match
    if (!value) return;

    switch (token) {
      case "YYYY":
        year = parseInt(value, 10);
        break;
      case "YY":
        year = 2000 + parseInt(value, 10);
        break;
      case "MM":
      case "M":
        month = parseInt(value, 10) - 1; // Months are 0-indexed
        break;
      case "DD":
      case "D":
        day = parseInt(value, 10);
        break;
      case "HH":
      case "H":
        hour = parseInt(value, 10);
        break;
      case "hh":
      case "h":
        hour = parseInt(value, 10);
        has12Hour = true;
        break;
      case "mm":
        minute = parseInt(value, 10);
        break;
      case "ss":
        second = parseInt(value, 10);
        break;
      case "A":
      case "a":
        isPM = value.toUpperCase() === "PM";
        break;
    }
  });

  // Handle 12-hour format
  if (has12Hour) {
    if (isPM && hour < 12) {
      hour += 12;
    } else if (!isPM && hour === 12) {
      hour = 0;
    }
  }

  const parsedDate = new Date(year, month, day, hour, minute, second);

  if (isNaN(parsedDate.getTime())) {
    throw new Error(
      `Invalid date value: "${dateString}" could not be parsed.`
    );
  }

  return parsedDate;
}
