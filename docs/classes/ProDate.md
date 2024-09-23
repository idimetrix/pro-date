[**pro-date**](../README.md) • **Docs**

***

[pro-date](../globals.md) / ProDate

# Class: ProDate

A lightweight date utility class for parsing, formatting, and manipulating dates.

## Constructors

### new ProDate()

> **new ProDate**(`date`?): [`ProDate`](ProDate.md)

#### Parameters

• **date?**: `string` \| `number` \| `Date`

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:7](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L7)

## Methods

### add()

> **add**(`amount`, `unit`): [`ProDate`](ProDate.md)

Adds a specific number of years, months, weeks, days, hours, minutes, or seconds to the date.

#### Parameters

• **amount**: `number`

The amount of time to add.

• **unit**: `string`

The unit of time (e.g., 'years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds').

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1875](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1875)

***

### addBusinessDays()

> **addBusinessDays**(`days`): [`ProDate`](ProDate.md)

Adds business days (Monday to Friday) to the date, skipping weekends.

#### Parameters

• **days**: `number`

The number of business days to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:553](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L553)

***

### addCenturies()

> **addCenturies**(`centuries`): [`ProDate`](ProDate.md)

Adds or subtracts the specified number of centuries.

#### Parameters

• **centuries**: `number`

The number of centuries to add or subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1117](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1117)

***

### addDays()

> **addDays**(`amount`): [`ProDate`](ProDate.md)

Adds the specified number of days to the date.

#### Parameters

• **amount**: `number`

The number of days to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:388](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L388)

***

### addDecades()

> **addDecades**(`decades`): [`ProDate`](ProDate.md)

Adds or subtracts the specified number of decades.

#### Parameters

• **decades**: `number`

The number of decades to add or subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1101](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1101)

***

### addDuration()

> **addDuration**(`duration`): [`ProDate`](ProDate.md)

Adds a specified duration to the current date using an object.

#### Parameters

• **duration**

Object with units like { days: 3, hours: 2 }.

• **duration.days?**: `number`

• **duration.hours?**: `number`

• **duration.minutes?**: `number`

• **duration.months?**: `number`

• **duration.seconds?**: `number`

• **duration.weeks?**: `number`

• **duration.years?**: `number`

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2075](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2075)

***

### addDurationString()

> **addDurationString**(`durationString`): [`ProDate`](ProDate.md)

Adds a specific duration using a string (e.g., '2 years', '3 days').

#### Parameters

• **durationString**: `string`

The duration string (e.g., '2 years', '3 days').

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2341](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2341)

***

### addFiscalYears()

> **addFiscalYears**(`years`): [`ProDate`](ProDate.md)

Adds the specified number of fiscal years to the date (assuming fiscal year starts in April).

#### Parameters

• **years**: `number`

The number of fiscal years to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:676](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L676)

***

### addHours()

> **addHours**(`amount`): [`ProDate`](ProDate.md)

Adds the specified number of hours to the date.

#### Parameters

• **amount**: `number`

The number of hours to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:397](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L397)

***

### addLeapYears()

> **addLeapYears**(`leapYears`): [`ProDate`](ProDate.md)

Adds the specified number of leap years to the current date.

#### Parameters

• **leapYears**: `number`

The number of leap years to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1048](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1048)

***

### addMilliseconds()

> **addMilliseconds**(`milliseconds`): [`ProDate`](ProDate.md)

Adds a number of milliseconds to the date.

#### Parameters

• **milliseconds**: `number`

The number of milliseconds to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:960](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L960)

***

### addMinutes()

> **addMinutes**(`amount`): [`ProDate`](ProDate.md)

Adds the specified number of minutes to the date.

#### Parameters

• **amount**: `number`

The number of minutes to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:406](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L406)

***

### addMonths()

> **addMonths**(`amount`): [`ProDate`](ProDate.md)

Adds the specified number of months to the date.

#### Parameters

• **amount**: `number`

The number of months to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:379](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L379)

***

### addQuarters()

> **addQuarters**(`quarters`): [`ProDate`](ProDate.md)

Adds the specified number of quarters to the date.

#### Parameters

• **quarters**: `number`

The number of quarters to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:590](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L590)

***

### addSeconds()

> **addSeconds**(`amount`): [`ProDate`](ProDate.md)

Adds the specified number of seconds to the date.

#### Parameters

• **amount**: `number`

The number of seconds to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:415](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L415)

***

### addSubtract()

> **addSubtract**(`amount`, `unit`): [`ProDate`](ProDate.md)

Adds or subtracts a specific unit (like years, months, days) from the date.

#### Parameters

• **amount**: `number`

The amount to add or subtract (use negative for subtraction).

• **unit**: `string`

The unit ('years', 'months', 'days', etc.).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1188](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1188)

***

### addWeeks()

> **addWeeks**(`weeks`): [`ProDate`](ProDate.md)

Adds the specified number of weeks to the date.

#### Parameters

• **weeks**: `number`

The number of weeks to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:626](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L626)

***

### addYears()

> **addYears**(`amount`): [`ProDate`](ProDate.md)

Adds the specified number of years to the date.

#### Parameters

• **amount**: `number`

The number of years to add.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:370](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L370)

***

### businessDaysBetween()

> **businessDaysBetween**(`date`): `number`

Returns the number of business days between two dates (excluding weekends).

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`number`

#### Defined in

[index.ts:1608](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1608)

***

### daysBetween()

> **daysBetween**(`date`): `number`

Returns the number of days between the current date and another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:1996](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1996)

***

### daysInMonth()

> **daysInMonth**(): `number`

Returns the number of days in the current month.

#### Returns

`number`

#### Defined in

[index.ts:496](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L496)

***

### daysInYear()

> **daysInYear**(): `number`

Gets the number of days in the current year (365 or 366).

#### Returns

`number`

#### Defined in

[index.ts:668](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L668)

***

### daysRemainingInMonth()

> **daysRemainingInMonth**(): `number`

Returns the number of remaining days in the current month.

#### Returns

`number`

#### Defined in

[index.ts:1861](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1861)

***

### diff()

> **diff**(`date`, `unit`): `number`

Returns the difference between two dates in a specific unit.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare with.

• **unit**: `string`

The unit of difference ('years', 'months', 'days', etc.).

#### Returns

`number`

#### Defined in

[index.ts:1233](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1233)

***

### differenceInDays()

> **differenceInDays**(`otherDate`): `number`

Gets the difference between this date and another date in days.

#### Parameters

• **otherDate**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`number`

#### Defined in

[index.ts:865](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L865)

***

### differenceInHours()

> **differenceInHours**(`otherDate`): `number`

Gets the difference between this date and another date in hours.

#### Parameters

• **otherDate**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`number`

#### Defined in

[index.ts:874](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L874)

***

### differenceInMinutes()

> **differenceInMinutes**(`otherDate`): `number`

Gets the difference between this date and another date in minutes.

#### Parameters

• **otherDate**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`number`

#### Defined in

[index.ts:883](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L883)

***

### differenceInSeconds()

> **differenceInSeconds**(`otherDate`): `number`

Gets the difference between this date and another date in seconds.

#### Parameters

• **otherDate**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`number`

#### Defined in

[index.ts:892](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L892)

***

### diffInBusinessDays()

> **diffInBusinessDays**(`date`): `number`

Returns the difference between two dates in business days (Monday-Friday).

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`number`

#### Defined in

[index.ts:1706](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1706)

***

### diffInFullMonths()

> **diffInFullMonths**(`date`): `number`

Returns the difference between two dates in months, rounding down.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:2359](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2359)

***

### diffInFullWeeks()

> **diffInFullWeeks**(`date`): `number`

Gets the difference between two dates in weeks, rounding down.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:2433](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2433)

***

### diffInFullYears()

> **diffInFullYears**(`date`): `number`

Returns the difference between two dates in years, rounding down.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:2368](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2368)

***

### diffInQuarters()

> **diffInQuarters**(`date`): `number`

Returns the difference between two dates in quarters.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:1698](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1698)

***

### endOf()

> **endOf**(`unit`): [`ProDate`](ProDate.md)

Returns the end of a given unit of time.

#### Parameters

• **unit**: `string`

The unit ('year', 'month', 'week', 'day', 'hour', etc.).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1286](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1286)

***

### endOfCentury()

> **endOfCentury**(): [`ProDate`](ProDate.md)

Gets the end of the current century.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:924](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L924)

***

### endOfCurrentQuarter()

> **endOfCurrentQuarter**(): [`ProDate`](ProDate.md)

Returns the current quarter's end date.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2457](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2457)

***

### endOfDay()

> **endOfDay**(): [`ProDate`](ProDate.md)

Sets the time to the end of the day (23:59:59.999).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:511](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L511)

***

### endOfDecade()

> **endOfDecade**(): [`ProDate`](ProDate.md)

Gets the end of the current decade.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:908](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L908)

***

### endOfFiscalYear()

> **endOfFiscalYear**(): [`ProDate`](ProDate.md)

Gets the end of the fiscal year (assuming fiscal year ends in March).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:695](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L695)

***

### endOfMillennium()

> **endOfMillennium**(): [`ProDate`](ProDate.md)

Gets the end of the current millennium.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:940](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L940)

***

### endOfMonth()

> **endOfMonth**(): [`ProDate`](ProDate.md)

Sets the date to the end of the current month.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:526](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L526)

***

### endOfPreviousDay()

> **endOfPreviousDay**(): [`ProDate`](ProDate.md)

Gets the end of the previous day.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1093](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1093)

***

### endOfPreviousMonth()

> **endOfPreviousMonth**(): [`ProDate`](ProDate.md)

Returns the end of the previous month.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1638](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1638)

***

### endOfQuarter()

> **endOfQuarter**(): [`ProDate`](ProDate.md)

Gets the end of the current quarter.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:615](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L615)

***

### endOfUTCDay()

> **endOfUTCDay**(): [`ProDate`](ProDate.md)

Converts the current date to the end of the current UTC day.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1827](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1827)

***

### endOfWeek()

> **endOfWeek**(): [`ProDate`](ProDate.md)

Gets the end of the current week (Sunday).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:651](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L651)

***

### endOfYear()

> **endOfYear**(): [`ProDate`](ProDate.md)

Returns the last day of the current year.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1915](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1915)

***

### format()

> **format**(`formatString`): `string`

Formats the date according to the specified format string.

### Supported Format Tokens:

#### **Year**:
- `YYYY`: Full year (e.g., 2024)
- `YY`: Two-digit year (e.g., 24)
- `Y`: Year without padding (e.g., 2024)

#### **Quarter**:
- `Q`: Quarter of the year (1-4)

#### **Month**:
- `MMMM`: Full month name (e.g., January)
- `MMM`: Abbreviated month name (e.g., Jan)
- `MM`: Two-digit month (01-12)
- `M`: Month without padding (1-12)
- `Mo`: Month as an ordinal number (e.g., 1st, 2nd)

#### **Day of Month**:
- `DD`: Two-digit day of the month (01-31)
- `D`: Day of the month without padding (1-31)
- `Do`: Ordinal day of the month (e.g., 1st, 2nd)

#### **Day of Year**:
- `DDD`: Three-digit day of the year (001-365 or 366)
- `DDDD`: Day of the year (1-365 or 366)

#### **Day of Week**:
- `dddd`: Full day name (e.g., Monday)
- `ddd`: Abbreviated day name (e.g., Mon)
- `dd`: Minimal day name (e.g., Mo, Tu)
- `d`: Day of the week (0 = Sunday, 6 = Saturday)
- `E`: ISO day of the week (1 = Monday, 7 = Sunday)

#### **Week of Year**:
- `w`: Week of the year (1-52 or 1-53)
- `ww`: Week of the year, zero-padded (01-52 or 01-53)
- `W`: ISO week of the year (1-52 or 1-53)
- `WW`: ISO week of the year, zero-padded (01-52 or 01-53)

#### **Hour (24-hour format)**:
- `HH`: Two-digit hour in 24-hour format (00-23)
- `H`: Hour in 24-hour format (0-23)

#### **Hour (12-hour format)**:
- `hh`: Two-digit hour in 12-hour format (01-12)
- `h`: Hour in 12-hour format (1-12)

#### **Minute**:
- `mm`: Two-digit minutes (00-59)
- `m`: Minutes without padding (0-59)

#### **Second**:
- `ss`: Two-digit seconds (00-59)
- `s`: Seconds without padding (0-59)

#### **Fractional Seconds**:
- `SSS`: Three-digit milliseconds (000-999)
- `SS`: Hundredths of a second (00-99)
- `S`: Tenths of a second (0-9)

#### **Period (AM/PM)**:
- `A`: Uppercase AM/PM
- `a`: Lowercase am/pm

#### **Timezone**:
- `Z`: Timezone offset with colon (e.g., +02:00)
- `ZZ`: Timezone offset without colon (e.g., +0200)
- `z`: Abbreviated timezone name (e.g., EST, PST)

#### **Unix Timestamp**:
- `X`: Unix timestamp in seconds
- `x`: Unix timestamp in milliseconds

#### **Custom Formats**:
- `LT`: Time in format 'h:mm A' (e.g., 2:30 PM)
- `LTS`: Time in format 'h:mm:ss A' (e.g., 2:30:15 PM)
- `L`: Date in format 'MM/DD/YYYY' (e.g., 02/27/2024)
- `LL`: Date in format 'MMMM D, YYYY' (e.g., February 27, 2024)
- `LLL`: DateTime in format 'MMMM D, YYYY h:mm A' (e.g., February 27, 2024 2:30 PM)
- `LLLL`: DateTime in format 'dddd, MMMM D, YYYY h:mm A' (e.g., Tuesday, February 27, 2024 2:30 PM)

#### Parameters

• **formatString**: `string`

The format string containing tokens.

#### Returns

`string`

#### Defined in

[index.ts:124](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L124)

***

### formatDayMonthYear()

> **formatDayMonthYear**(): `string`

Formats the date as 'Day Month Year' (e.g., '27 February 2024').

#### Returns

`string`

#### Defined in

[index.ts:1624](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1624)

***

### formatFull()

> **formatFull**(): `string`

Formats the date using the "full" locale string format (e.g., Tuesday, February 27, 2024 2:30 PM).

#### Returns

`string`

#### Defined in

[index.ts:1645](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1645)

***

### fromNow()

> **fromNow**(`date`, `options`?): `string`

Formats the date in relative time (e.g., '2 hours ago', 'in 3 days') with full configurability.

### Features:
- **Units Supported**: Seconds, Minutes, Hours, Days, Weeks, Months, Years.
- **Pluralization**: Automatically adjusts for singular or plural forms.
- **Past and Future**: Handles both past and future dates, with correct phrasing.
- **Thresholds**: Customizable thresholds for rounding and displaying "just now" for recent times.
- **Granularity**: Supports fine-grained time differences (e.g., "3 minutes", "2 days").

#### Parameters

• **date**: [`ProDate`](ProDate.md) = `...`

The date to compare with (optional, defaults to now).

• **options?**

Optional configuration:
  - `round`: Whether to round time units (default: true).
  - `thresholds`: Custom time thresholds for switching between units.
  - `futureText`: Text for future times (default: "in").
  - `pastText`: Text for past times (default: "ago").
  - `justNowText`: Text for very recent times (default: "just now").
  - `maxUnits`: Maximum number of units to display (e.g., 1 shows "1 day ago" instead of "1 day, 3 hours ago").

• **options.futureText?**: `string`

• **options.justNowText?**: `string`

• **options.maxUnits?**: `number`

• **options.pastText?**: `string`

• **options.round?**: `boolean`

• **options.thresholds?**

• **options.thresholds.days?**: `number`

• **options.thresholds.hours?**: `number`

• **options.thresholds.minutes?**: `number`

• **options.thresholds.months?**: `number`

• **options.thresholds.seconds?**: `number`

• **options.thresholds.weeks?**: `number`

• **options.thresholds.years?**: `number`

#### Returns

`string`

A relative time string (e.g., '2 hours ago', 'in 3 days').

#### Defined in

[index.ts:1392](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1392)

***

### getDayOfMonth()

> **getDayOfMonth**(): `number`

Gets the day of the month (1-31).

#### Returns

`number`

#### Defined in

[index.ts:325](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L325)

***

### getDayOfWeek()

> **getDayOfWeek**(): `number`

Gets the day of the week (0 = Sunday, 6 = Saturday).

#### Returns

`number`

#### Defined in

[index.ts:332](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L332)

***

### getEpochSeconds()

> **getEpochSeconds**(): `number`

Gets the number of seconds since the Unix epoch.

#### Returns

`number`

#### Defined in

[index.ts:1025](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1025)

***

### getHours()

> **getHours**(): `number`

Gets the hours (0-23).

#### Returns

`number`

#### Defined in

[index.ts:339](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L339)

***

### getISOWeek()

> **getISOWeek**(): `number`

Gets the ISO week number of the year.

#### Returns

`number`

#### Defined in

[index.ts:1722](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1722)

***

### getISOYear()

> **getISOYear**(): `number`

Gets the ISO year corresponding to the ISO week number.

#### Returns

`number`

#### Defined in

[index.ts:1735](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1735)

***

### getMilliseconds()

> **getMilliseconds**(): `number`

Gets the milliseconds (0-999).

#### Returns

`number`

#### Defined in

[index.ts:360](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L360)

***

### getMinutes()

> **getMinutes**(): `number`

Gets the minutes (0-59).

#### Returns

`number`

#### Defined in

[index.ts:346](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L346)

***

### getMonth()

> **getMonth**(): `number`

Gets the month of the date (1-12).

#### Returns

`number`

#### Defined in

[index.ts:318](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L318)

***

### getQuarter()

> **getQuarter**(): `number`

Gets the quarter of the year (1-4).

#### Returns

`number`

#### Defined in

[index.ts:582](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L582)

***

### getSeconds()

> **getSeconds**(): `number`

Gets the seconds (0-59).

#### Returns

`number`

#### Defined in

[index.ts:353](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L353)

***

### getTime()

> **getTime**(): `number`

Gets the timestamp (milliseconds since January 1, 1970).

#### Returns

`number`

#### Defined in

[index.ts:489](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L489)

***

### getTimezoneOffset()

> **getTimezoneOffset**(): `number`

Gets the timezone offset in minutes.

#### Returns

`number`

#### Defined in

[index.ts:717](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L717)

***

### getWeekOfYearISO()

> **getWeekOfYearISO**(): `number`

Returns the ISO week number for the current date, accounting for years starting on any day.

#### Returns

`number`

#### Defined in

[index.ts:2133](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2133)

***

### getYear()

> **getYear**(): `number`

Gets the full year of the date (e.g., 2024).

#### Returns

`number`

#### Defined in

[index.ts:311](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L311)

***

### humanizeDiff()

> **humanizeDiff**(`date`): `string`

Returns the difference between two dates as a human-readable string (e.g., "2 days", "3 months").

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`string`

#### Defined in

[index.ts:2147](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2147)

***

### humanizeTimeAgo()

> **humanizeTimeAgo**(`options`?): `string`

Returns a human-readable relative time string with customizable rounding.

#### Parameters

• **options?**

Optional configuration for rounding and units.

• **options.round?**: `boolean`

#### Returns

`string`

#### Defined in

[index.ts:2481](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2481)

***

### isAfter()

> **isAfter**(`date`): `boolean`

Checks if the current date is after a given date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`boolean`

#### Defined in

[index.ts:1321](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1321)

***

### isAfterNoon()

> **isAfterNoon**(): `boolean`

Checks if the current time is after noon (12:00 PM).

#### Returns

`boolean`

#### Defined in

[index.ts:1139](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1139)

***

### isAM()

> **isAM**(): `boolean`

Checks if the current time is in the AM period.

#### Returns

`boolean`

#### Defined in

[index.ts:2045](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2045)

***

### isAMHours()

> **isAMHours**(): `boolean`

Returns whether the current time is between midnight and noon (AM hours).

#### Returns

`boolean`

#### Defined in

[index.ts:2417](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2417)

***

### isBefore()

> **isBefore**(`date`): `boolean`

Checks if the current date is before a given date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare with.

#### Returns

`boolean`

#### Defined in

[index.ts:1313](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1313)

***

### isBeforeNoon()

> **isBeforeNoon**(): `boolean`

Checks if the current time is before noon (12:00 PM).

#### Returns

`boolean`

#### Defined in

[index.ts:1132](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1132)

***

### isBetween()

> **isBetween**(`startDate`, `endDate`): `boolean`

Checks if the current date is within a specific date range.

#### Parameters

• **startDate**: [`ProDate`](ProDate.md)

The start date.

• **endDate**: [`ProDate`](ProDate.md)

The end date.

#### Returns

`boolean`

#### Defined in

[index.ts:1600](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1600)

***

### isCurrentYearLeap()

> **isCurrentYearLeap**(): `boolean`

Checks if the current date falls within a leap year.

#### Returns

`boolean`

#### Defined in

[index.ts:2441](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2441)

***

### isDST()

> **isDST**(): `boolean`

Checks if the current date is during daylight saving time (DST).

#### Returns

`boolean`

#### Defined in

[index.ts:1940](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1940)

***

### isEndOfMonth()

> **isEndOfMonth**(): `boolean`

Checks if the current date is the end of the month.

#### Returns

`boolean`

#### Defined in

[index.ts:984](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L984)

***

### isEndOfWeek()

> **isEndOfWeek**(): `boolean`

Checks if the current date is the end of the week (Sunday).

#### Returns

`boolean`

#### Defined in

[index.ts:1003](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1003)

***

### isFirstDayOfYear()

> **isFirstDayOfYear**(): `boolean`

Returns whether the current date is the first day of the year.

#### Returns

`boolean`

#### Defined in

[index.ts:2466](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2466)

***

### isFuture()

> **isFuture**(): `boolean`

Checks if the current date is in the future.

#### Returns

`boolean`

#### Defined in

[index.ts:746](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L746)

***

### isHoliday()

> **isHoliday**(`holidays`): `boolean`

Checks if the current date is a holiday (based on a predefined list of holidays).

#### Parameters

• **holidays**: `string`[]

An array of holiday strings in 'MM-DD' format.

#### Returns

`boolean`

#### Defined in

[index.ts:1078](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1078)

***

### isInCurrentCentury()

> **isInCurrentCentury**(): `boolean`

Checks if the current date is in the current century.

#### Returns

`boolean`

#### Defined in

[index.ts:1157](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1157)

***

### isInCurrentDecade()

> **isInCurrentDecade**(): `boolean`

Checks if the current date is in the current decade.

#### Returns

`boolean`

#### Defined in

[index.ts:1146](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1146)

***

### isInCurrentQuarter()

> **isInCurrentQuarter**(): `boolean`

Checks if the current date is in the current quarter.

#### Returns

`boolean`

#### Defined in

[index.ts:1788](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1788)

***

### isInCurrentWeek()

> **isInCurrentWeek**(): `boolean`

Checks if the date is within the current week.

#### Returns

`boolean`

#### Defined in

[index.ts:1796](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1796)

***

### isInRange()

> **isInRange**(`startDate`, `endDate`): `boolean`

Checks if the date falls within the specified date range (inclusive).

#### Parameters

• **startDate**: [`ProDate`](ProDate.md)

The start of the range.

• **endDate**: [`ProDate`](ProDate.md)

The end of the range.

#### Returns

`boolean`

#### Defined in

[index.ts:2021](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2021)

***

### isLastDayOfYear()

> **isLastDayOfYear**(): `boolean`

Returns whether the current date is the last day of the year.

#### Returns

`boolean`

#### Defined in

[index.ts:2473](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2473)

***

### isLeapYear()

> **isLeapYear**(): `boolean`

Checks if the current year is a leap year.

#### Returns

`boolean`

#### Defined in

[index.ts:660](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L660)

***

### isPast()

> **isPast**(): `boolean`

Checks if the current date is in the past.

#### Returns

`boolean`

#### Defined in

[index.ts:739](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L739)

***

### isPM()

> **isPM**(): `boolean`

Checks if the current time is in the PM period.

#### Returns

`boolean`

#### Defined in

[index.ts:2052](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2052)

***

### isPMHours()

> **isPMHours**(): `boolean`

Returns whether the current time is between noon and midnight (PM hours).

#### Returns

`boolean`

#### Defined in

[index.ts:2410](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2410)

***

### isSame()

> **isSame**(`date`, `unit`): `boolean`

Checks if two dates are the same in terms of a specific unit (e.g., same year, month, etc.).

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare with.

• **unit**: `string`

The unit to compare ('year', 'month', 'day', etc.).

#### Returns

`boolean`

#### Defined in

[index.ts:1330](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1330)

***

### isSameDate()

> **isSameDate**(`date`): `boolean`

Checks if the current date is the same as another date (ignoring time).

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:1953](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1953)

***

### isSameDay()

> **isSameDay**(`otherDate`): `boolean`

Determines if this date is the same day as the provided date.

#### Parameters

• **otherDate**: [`ProDate`](ProDate.md)

The other ProDate instance to compare to.

#### Returns

`boolean`

#### Defined in

[index.ts:476](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L476)

***

### isSameDayOfWeek()

> **isSameDayOfWeek**(`date`): `boolean`

Checks if the current date falls on the same day of the week as another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:2425](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2425)

***

### isSameDayOfYear()

> **isSameDayOfYear**(`date`): `boolean`

Checks if the current date is the same day of the year as another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:2377](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2377)

***

### isSameExact()

> **isSameExact**(`date`): `boolean`

Checks if the current date is the same as another date (including time).

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:1965](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1965)

***

### isSameISOWeek()

> **isSameISOWeek**(`date`): `boolean`

Checks if the current date falls within the same ISO week as another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:1745](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1745)

***

### isSameQuarter()

> **isSameQuarter**(`date`): `boolean`

Checks if the current date falls within the same quarter as another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:1756](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1756)

***

### isSameYear()

> **isSameYear**(`date`): `boolean`

Returns whether the date is the same year as another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`boolean`

#### Defined in

[index.ts:1838](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1838)

***

### isStartOfMonth()

> **isStartOfMonth**(): `boolean`

Checks if the current date is the start of the month.

#### Returns

`boolean`

#### Defined in

[index.ts:977](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L977)

***

### isStartOfWeek()

> **isStartOfWeek**(): `boolean`

Checks if the current date is the start of the week (Monday).

#### Returns

`boolean`

#### Defined in

[index.ts:996](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L996)

***

### isThisISOWeek()

> **isThisISOWeek**(): `boolean`

Checks if the current date falls within the same ISO week as today.

#### Returns

`boolean`

#### Defined in

[index.ts:1767](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1767)

***

### isTimeBetween()

> **isTimeBetween**(`startTime`, `endTime`): `boolean`

Checks if the current time is between two times on the same day.

#### Parameters

• **startTime**: `string`

The start time in 'HH:mm' format.

• **endTime**: `string`

The end time in 'HH:mm' format.

#### Returns

`boolean`

#### Defined in

[index.ts:2386](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2386)

***

### isToday()

> **isToday**(): `boolean`

Checks if the current date is today.

#### Returns

`boolean`

#### Defined in

[index.ts:753](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L753)

***

### isTomorrow()

> **isTomorrow**(): `boolean`

Checks if the date is tomorrow.

#### Returns

`boolean`

#### Defined in

[index.ts:1845](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1845)

***

### isValid()

> **isValid**(): `boolean`

Validates if the date is a valid Date object.

#### Returns

`boolean`

#### Defined in

[index.ts:535](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L535)

***

### isWeekday()

> **isWeekday**(): `boolean`

Checks if the current date is a weekday (Monday-Friday).

#### Returns

`boolean`

#### Defined in

[index.ts:702](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L702)

***

### isWeekend()

> **isWeekend**(): `boolean`

Checks if the date falls on a weekend (Saturday or Sunday).

#### Returns

`boolean`

#### Defined in

[index.ts:542](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L542)

***

### isYesterday()

> **isYesterday**(): `boolean`

Checks if the date is yesterday.

#### Returns

`boolean`

#### Defined in

[index.ts:1853](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1853)

***

### monthsBetween()

> **monthsBetween**(`date`): `number`

Returns the number of months between the current date and another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:2004](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2004)

***

### nextMonday()

> **nextMonday**(): [`ProDate`](ProDate.md)

Returns the first Monday after the current date.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2036](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2036)

***

### roundToNearestDay()

> **roundToNearestDay**(): [`ProDate`](ProDate.md)

Rounds the date to the nearest day.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:789](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L789)

***

### roundToNearestHour()

> **roundToNearestHour**(): [`ProDate`](ProDate.md)

Rounds the date to the nearest hour.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:777](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L777)

***

### roundToNearestMinute()

> **roundToNearestMinute**(): [`ProDate`](ProDate.md)

Rounds the date to the nearest minute.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:765](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L765)

***

### setDayOfMonth()

> **setDayOfMonth**(`day`): [`ProDate`](ProDate.md)

Sets the day of the month (1-31).

#### Parameters

• **day**: `number`

The day of the month to set.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:820](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L820)

***

### setHours()

> **setHours**(`hours`): [`ProDate`](ProDate.md)

Sets the hours of the date (0-23).

#### Parameters

• **hours**: `number`

The hours to set.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:829](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L829)

***

### setMilliseconds()

> **setMilliseconds**(`milliseconds`): [`ProDate`](ProDate.md)

Sets the milliseconds of the date (0-999).

#### Parameters

• **milliseconds**: `number`

The milliseconds to set.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:856](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L856)

***

### setMinutes()

> **setMinutes**(`minutes`): [`ProDate`](ProDate.md)

Sets the minutes of the date (0-59).

#### Parameters

• **minutes**: `number`

The minutes to set.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:838](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L838)

***

### setMonth()

> **setMonth**(`month`): [`ProDate`](ProDate.md)

Sets the month of the date (1-12).

#### Parameters

• **month**: `number`

The month to set (1 = January, 12 = December).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:811](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L811)

***

### setSeconds()

> **setSeconds**(`seconds`): [`ProDate`](ProDate.md)

Sets the seconds of the date (0-59).

#### Parameters

• **seconds**: `number`

The seconds to set.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:847](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L847)

***

### setYear()

> **setYear**(`year`): [`ProDate`](ProDate.md)

Sets the year of the date.

#### Parameters

• **year**: `number`

The year to set.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:802](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L802)

***

### startOf()

> **startOf**(`unit`): [`ProDate`](ProDate.md)

Returns the start of a given unit of time.

#### Parameters

• **unit**: `string`

The unit ('year', 'month', 'week', 'day', 'hour', etc.).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1261](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1261)

***

### startOfCentury()

> **startOfCentury**(): [`ProDate`](ProDate.md)

Gets the start of the current century.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:916](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L916)

***

### startOfCurrentQuarter()

> **startOfCurrentQuarter**(): [`ProDate`](ProDate.md)

Returns the current quarter's start date.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2448](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2448)

***

### startOfDay()

> **startOfDay**(): [`ProDate`](ProDate.md)

Sets the time to the start of the day (00:00:00).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:503](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L503)

***

### startOfDecade()

> **startOfDecade**(): [`ProDate`](ProDate.md)

Gets the start of the current decade.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:900](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L900)

***

### startOfFiscalYear()

> **startOfFiscalYear**(): [`ProDate`](ProDate.md)

Gets the start of the fiscal year (assuming fiscal year starts in April).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:688](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L688)

***

### startOfMillennium()

> **startOfMillennium**(): [`ProDate`](ProDate.md)

Gets the start of the current millennium.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:932](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L932)

***

### startOfMonth()

> **startOfMonth**(): [`ProDate`](ProDate.md)

Sets the date to the start of the current month.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:519](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L519)

***

### startOfNextDay()

> **startOfNextDay**(): [`ProDate`](ProDate.md)

Gets the start of the next day.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1086](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1086)

***

### startOfNextMonth()

> **startOfNextMonth**(): [`ProDate`](ProDate.md)

Returns the start of the next month.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1631](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1631)

***

### startOfPreviousMonth()

> **startOfPreviousMonth**(): [`ProDate`](ProDate.md)

Gets the start of the previous month.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2403](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2403)

***

### startOfQuarter()

> **startOfQuarter**(): [`ProDate`](ProDate.md)

Gets the start of the current quarter.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:606](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L606)

***

### startOfUTCDay()

> **startOfUTCDay**(): [`ProDate`](ProDate.md)

Converts the current date to the start of the current UTC day.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1819](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1819)

***

### startOfWeek()

> **startOfWeek**(): [`ProDate`](ProDate.md)

Gets the start of the current week (Monday).

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:642](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L642)

***

### startOfYear()

> **startOfYear**(): [`ProDate`](ProDate.md)

Returns the first day of the current year.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1908](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1908)

***

### subtract()

> **subtract**(`amount`, `unit`): [`ProDate`](ProDate.md)

Subtracts a specific number of years, months, weeks, days, hours, minutes, or seconds from the date.

#### Parameters

• **amount**: `number`

The amount of time to subtract.

• **unit**: `string`

The unit of time (e.g., 'years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds').

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1901](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1901)

***

### subtractBusinessDays()

> **subtractBusinessDays**(`days`): [`ProDate`](ProDate.md)

Subtracts business days (Monday to Friday) from the date, skipping weekends.

#### Parameters

• **days**: `number`

The number of business days to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:568](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L568)

***

### subtractCenturies()

> **subtractCenturies**(`centuries`): [`ProDate`](ProDate.md)

Subtracts the specified number of centuries.

#### Parameters

• **centuries**: `number`

The number of centuries to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1125](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1125)

***

### subtractDays()

> **subtractDays**(`amount`): [`ProDate`](ProDate.md)

Subtracts the specified number of days from the date.

#### Parameters

• **amount**: `number`

The number of days to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:442](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L442)

***

### subtractDecades()

> **subtractDecades**(`decades`): [`ProDate`](ProDate.md)

Subtracts the specified number of decades.

#### Parameters

• **decades**: `number`

The number of decades to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1109](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1109)

***

### subtractDuration()

> **subtractDuration**(`duration`): [`ProDate`](ProDate.md)

Subtracts a specified duration from the current date using an object.

#### Parameters

• **duration**

Object with units like { days: 3, hours: 2 }.

• **duration.days?**: `number`

• **duration.hours?**: `number`

• **duration.minutes?**: `number`

• **duration.months?**: `number`

• **duration.seconds?**: `number`

• **duration.weeks?**: `number`

• **duration.years?**: `number`

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2098](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2098)

***

### subtractDurationString()

> **subtractDurationString**(`durationString`): [`ProDate`](ProDate.md)

Subtracts a specific duration using a string (e.g., '2 years', '3 days').

#### Parameters

• **durationString**: `string`

The duration string (e.g., '2 years', '3 days').

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2350](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2350)

***

### subtractHours()

> **subtractHours**(`amount`): [`ProDate`](ProDate.md)

Subtracts the specified number of hours from the date.

#### Parameters

• **amount**: `number`

The number of hours to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:450](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L450)

***

### subtractLeapYears()

> **subtractLeapYears**(`leapYears`): [`ProDate`](ProDate.md)

Subtracts the specified number of leap years from the current date.

#### Parameters

• **leapYears**: `number`

The number of leap years to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1063](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1063)

***

### subtractMilliseconds()

> **subtractMilliseconds**(`milliseconds`): [`ProDate`](ProDate.md)

Subtracts a number of milliseconds from the date.

#### Parameters

• **milliseconds**: `number`

The number of milliseconds to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:969](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L969)

***

### subtractMinutes()

> **subtractMinutes**(`amount`): [`ProDate`](ProDate.md)

Subtracts the specified number of minutes from the date.

#### Parameters

• **amount**: `number`

The number of minutes to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:458](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L458)

***

### subtractMonths()

> **subtractMonths**(`amount`): [`ProDate`](ProDate.md)

Subtracts the specified number of months from the date.

#### Parameters

• **amount**: `number`

The number of months to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:434](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L434)

***

### subtractQuarters()

> **subtractQuarters**(`quarters`): [`ProDate`](ProDate.md)

Subtracts the specified number of quarters from the date.

#### Parameters

• **quarters**: `number`

The number of quarters to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:599](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L599)

***

### subtractSeconds()

> **subtractSeconds**(`amount`): [`ProDate`](ProDate.md)

Subtracts the specified number of seconds from the date.

#### Parameters

• **amount**: `number`

The number of seconds to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:466](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L466)

***

### subtractWeeks()

> **subtractWeeks**(`weeks`): [`ProDate`](ProDate.md)

Subtracts the specified number of weeks from the date.

#### Parameters

• **weeks**: `number`

The number of weeks to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:635](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L635)

***

### subtractYears()

> **subtractYears**(`amount`): [`ProDate`](ProDate.md)

Subtracts the specified number of years from the date.

#### Parameters

• **amount**: `number`

The number of years to subtract.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:426](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L426)

***

### timeAgo()

> **timeAgo**(`options`?): `string`

Returns a human-readable string indicating how long ago the date was or how far in the future it is.

### Features:
- **Singular/Plural**: Automatically adjusts for singular or plural forms.
- **Supports Past and Future Dates**: Can handle both past and future dates.
- **Configurable Precision**: Can display seconds, minutes, hours, or days based on the difference.
- **Customizable Rounding**: Optionally enable or disable rounding.

#### Parameters

• **options?**

Optional configuration for the output:
  - `round`: Whether to round time units (default: true).
  - `futureText`: Text for future times (default: "in").
  - `pastText`: Text for past times (default: "ago").
  - `justNowText`: Text for very recent times (default: "just now").
  - `maxUnits`: Maximum number of units to display (default: 1).

• **options.futureText?**: `string`

• **options.justNowText?**: `string`

• **options.maxUnits?**: `number`

• **options.pastText?**: `string`

• **options.round?**: `boolean`

#### Returns

`string`

A relative time string (e.g., '2 hours ago', 'in 3 days').

#### Defined in

[index.ts:1518](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1518)

***

### toArray()

> **toArray**(): `number`[]

Converts the current date to an array `[year, month, day, hour, minute, second, millisecond]`.

#### Returns

`number`[]

#### Defined in

[index.ts:1652](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1652)

***

### toDateObject()

> **toDateObject**(): `object`

Converts the current date to an object with `year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`.

#### Returns

`object`

##### day

> **day**: `number`

##### hour

> **hour**: `number`

##### millisecond

> **millisecond**: `number`

##### minute

> **minute**: `number`

##### month

> **month**: `number`

##### second

> **second**: `number`

##### year

> **year**: `number`

#### Defined in

[index.ts:1972](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1972)

***

### toDateString()

> **toDateString**(): `string`

Converts the current date to a readable string showing only the date (YYYY-MM-DD).

#### Returns

`string`

#### Defined in

[index.ts:1812](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1812)

***

### toHumanReadable()

> **toHumanReadable**(): `string`

Converts the current date to a simple human-readable format (e.g., "2 days ago", "in 3 hours").

#### Returns

`string`

#### Defined in

[index.ts:1168](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1168)

***

### toISO8601()

> **toISO8601**(): `string`

Converts the current date to the ISO 8601 string (YYYY-MM-DDTHH:mm:ss.sssZ).

#### Returns

`string`

#### Defined in

[index.ts:1040](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1040)

***

### toISOString()

> **toISOString**(): `string`

Converts the date to an ISO 8601 string (e.g., '2024-09-23T14:00:00Z').

#### Returns

`string`

#### Defined in

[index.ts:287](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L287)

***

### toISOWeekDate()

> **toISOWeekDate**(): `string`

Returns the current date in the ISO 8601 week date format (YYYY-Www-D).

#### Returns

`string`

#### Defined in

[index.ts:1032](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1032)

***

### toJSObject()

> **toJSObject**(): `Object`

Returns the current date as a JavaScript object.

#### Returns

`Object`

#### Defined in

[index.ts:1010](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1010)

***

### toJSON()

> **toJSON**(): `string`

Converts the date to JSON format.

#### Returns

`string`

#### Defined in

[index.ts:1690](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1690)

***

### toLocal()

> **toLocal**(): [`ProDate`](ProDate.md)

Converts the current date to local time.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:731](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L731)

***

### toLocaleString()

> **toLocaleString**(`locale`?): `string`

Converts the date to a locale string, using an optional locale parameter.

#### Parameters

• **locale?**: `string`

The locale to use for formatting (default is 'en-US').

#### Returns

`string`

#### Defined in

[index.ts:302](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L302)

***

### toLocalizedString()

> **toLocalizedString**(`locale`, `options`?): `string`

Formats the date into a localized human-readable format.

#### Parameters

• **locale**: `string` = `"en-US"`

The locale to format the date (e.g., 'en-US').

• **options?**: `DateTimeFormatOptions`

Optional formatting options.

#### Returns

`string`

#### Defined in

[index.ts:2123](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2123)

***

### toObject()

> **toObject**(): `object`

Converts the current date to a JavaScript object.

#### Returns

`object`

##### day

> **day**: `number`

##### hour

> **hour**: `number`

##### millisecond

> **millisecond**: `number`

##### minute

> **minute**: `number`

##### month

> **month**: `number`

##### second

> **second**: `number`

##### year

> **year**: `number`

#### Defined in

[index.ts:1667](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1667)

***

### toShortDateString()

> **toShortDateString**(`locale`): `string`

Returns a short localized date string (e.g., '09/23/2023').

#### Parameters

• **locale**: `string` = `"en-US"`

The locale to format the date (default: 'en-US').

#### Returns

`string`

#### Defined in

[index.ts:2067](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2067)

***

### toTimeString()

> **toTimeString**(): `string`

Converts the current date to a readable string showing only the time (HH:mm).

#### Returns

`string`

#### Defined in

[index.ts:1805](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1805)

***

### toTimeZone()

> **toTimeZone**(`timeZone`): [`ProDate`](ProDate.md)

Returns the current date in a specified time zone.

#### Parameters

• **timeZone**: `string`

The time zone to convert to (e.g., 'America/New_York').

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1930](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1930)

***

### toUnixMilliseconds()

> **toUnixMilliseconds**(): `number`

Converts the current date to the Unix timestamp in milliseconds.

#### Returns

`number`

#### Defined in

[index.ts:1774](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1774)

***

### toUnixSeconds()

> **toUnixSeconds**(): `number`

Converts the current date to the Unix timestamp in seconds.

#### Returns

`number`

#### Defined in

[index.ts:1781](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1781)

***

### toUnixTimestamp()

> **toUnixTimestamp**(): `number`

Converts the current date to a Unix timestamp.

#### Returns

`number`

#### Defined in

[index.ts:710](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L710)

***

### toUTC()

> **toUTC**(): [`ProDate`](ProDate.md)

Converts the current date to UTC.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:724](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L724)

***

### toUTCDate()

> **toUTCDate**(): [`ProDate`](ProDate.md)

Returns the current date in UTC.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1922](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1922)

***

### toUTCISO()

> **toUTCISO**(): `string`

Converts the current date to UTC and returns it as an ISO string.

#### Returns

`string`

#### Defined in

[index.ts:2059](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2059)

***

### toUTCString()

> **toUTCString**(): `string`

Converts the date to a UTC string.

#### Returns

`string`

#### Defined in

[index.ts:294](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L294)

***

### weeksBetween()

> **weeksBetween**(`date`): `number`

Returns the difference between two dates in weeks.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:2029](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2029)

***

### weeksInYear()

> **weeksInYear**(): `number`

Gets the number of weeks in the current year (52 or 53 weeks).

#### Returns

`number`

#### Defined in

[index.ts:948](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L948)

***

### yearsBetween()

> **yearsBetween**(`date`): `number`

Returns the number of years between the current date and another date.

#### Parameters

• **date**: [`ProDate`](ProDate.md)

The date to compare.

#### Returns

`number`

#### Defined in

[index.ts:2012](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2012)

***

### daysInMonth()

> `static` **daysInMonth**(`year`, `month`): `number`

Gets the number of days in a specific month of a given year.

#### Parameters

• **year**: `number`

The year.

• **month**: `number`

The month (1-12).

#### Returns

`number`

#### Defined in

[index.ts:1216](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1216)

***

### fromISO()

> `static` **fromISO**(`isoString`): [`ProDate`](ProDate.md)

Parses a date string in the ISO 8601 format.

#### Parameters

• **isoString**: `string`

The ISO string to parse.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1583](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1583)

***

### fromString()

> `static` **fromString**(`dateString`): [`ProDate`](ProDate.md)

Create a ProDate instance from a string.

#### Parameters

• **dateString**: `string`

A date string to parse.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:17](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L17)

***

### fromTimestamp()

> `static` **fromTimestamp**(`timestamp`): [`ProDate`](ProDate.md)

Create a ProDate instance from a timestamp.

#### Parameters

• **timestamp**: `number`

The number of milliseconds since January 1, 1970.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:25](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L25)

***

### fromUnix()

> `static` **fromUnix**(`unixSeconds`): [`ProDate`](ProDate.md)

Parses a date string from a Unix timestamp (in seconds).

#### Parameters

• **unixSeconds**: `number`

The Unix timestamp in seconds.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:1591](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1591)

***

### isLeapYear()

> `static` **isLeapYear**(`year`): `boolean`

Checks if a specific date is a leap year.

#### Parameters

• **year**: `number`

The year.

#### Returns

`boolean`

#### Defined in

[index.ts:1224](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L1224)

***

### now()

> `static` **now**(): [`ProDate`](ProDate.md)

Create a new ProDate instance representing the current date and time.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:32](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L32)

***

### parse()

> `static` **parse**(`dateString`, `format`): [`ProDate`](ProDate.md)

Parses a date string with the given format.
This function supports a wide range of format tokens and provides flexible parsing capabilities.

### Supported Tokens:
- `YYYY` (4-digit year)
- `YY` (2-digit year)
- `MM` (2-digit month)
- `M` (1 or 2-digit month)
- `DD` (2-digit day of the month)
- `D` (1 or 2-digit day of the month)
- `HH` (2-digit 24-hour format)
- `H` (1 or 2-digit 24-hour format)
- `hh` (2-digit 12-hour format)
- `h` (1 or 2-digit 12-hour format)
- `mm` (2-digit minutes)
- `ss` (2-digit seconds)
- `A` / `a` (AM/PM)

### Example Usage:
```typescript
ProDate.parse('2023-09-24 14:30', 'YYYY-MM-DD HH:mm');
ProDate.parse('09/24/23', 'MM/DD/YY');
```

#### Parameters

• **dateString**: `string`

The date string to parse (e.g., '2023-09-24').

• **format**: `string`

The format of the date string (e.g., 'YYYY-MM-DD').

#### Returns

[`ProDate`](ProDate.md)

A ProDate object.

#### Throws

Will throw an error if the format doesn't match the date string.

#### Defined in

[index.ts:2197](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2197)

***

### parseISO()

> `static` **parseISO**(`isoString`): [`ProDate`](ProDate.md)

Parses a date string in ISO 8601 format.

#### Parameters

• **isoString**: `string`

The ISO string to parse.

#### Returns

[`ProDate`](ProDate.md)

#### Defined in

[index.ts:2497](https://github.com/idimetrix/pro-date/blob/e1314992baab811f5440324c3037ce14a29b4355/src/index.ts#L2497)
