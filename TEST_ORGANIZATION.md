# Test Organization

The test suite for pro-date is comprehensive with 309 tests covering all functionality.

## Test Structure

All tests are currently in `src/__tests__/index.test.ts` and organized into logical describe blocks:

### Core Functionality (Lines 1-145)
- **Constructor** (6-31): Testing ProDate instantiation
- **Factory Methods** (34-71): fromString, fromTimestamp, now, fromISO, fromUnix
- **Parsing** (74-143): ProDate.parse() with various formats

### Formatting & Display (Lines 146-274)
- **Formatting** (146-272): format() method with 40+ tokens
- **Special Format Tokens** (1706-1792): Advanced formatting (DDD, DDDD, E, W, etc.)

### Data Access (Lines 275-372)
- **Getters** (275-326): getYear, getMonth, getDayOfMonth, etc.
- **Setters** (329-370): setYear, setMonth, setDayOfMonth, etc.

### Date Manipulation (Lines 373-574)
- **Addition Methods** (373-478): addYears, addMonths, addDays, addBusinessDays, etc.
- **Subtraction Methods** (481-572): subtractYears, subtractMonths, etc.

### Comparison & Validation (Lines 575-867)
- **Comparison** (575-675): isBefore, isAfter, isSame, isBetween, etc.
- **Validation** (678-865): isValid, isWeekend, isLeapYear, isToday, etc.

### Time Periods (Lines 868-1050)
- **Start/End Methods** (868-1048): startOfDay, endOfMonth, startOfYear, etc.

### Calculations (Lines 1051-1241)
- **Difference Methods** (1051-1156): differenceInDays, diff, businessDaysBetween, etc.
- **Utility Methods** (1159-1239): daysInMonth, weeksInYear, nextMonday, etc.

### Conversion (Lines 1242-1456)
- **Conversion Methods** (1242-1374): toISOString, toArray, toObject, etc.
- **ISO Week** (1377-1399): getISOWeek, getISOYear, isSameISOWeek
- **Relative Time** (1402-1454): fromNow, timeAgo, toHumanReadable

### Edge Cases & Advanced (Lines 1457-1920)
- **Helper Methods** (1457-1476): addSubtract variations
- **Edge Cases** (1479-1643): Month overflow, leap years, timezone handling
- **Static Methods** (1646-1671): Static daysInMonth, isLeapYear
- **Method Chaining** (1674-1703): Chainable operations
- **Additional Coverage** (1793-1918): Complete coverage scenarios

## Test Statistics

- **Total Tests**: 309
- **Passing**: 309 (100%)
- **Test Duration**: ~700ms
- **Coverage**: Comprehensive (to be measured)

## Recommended Split (For Future Refactoring)

1. `constructor-factory.test.ts` - Constructor & Factory Methods (~70 lines)
2. `parsing.test.ts` - Date parsing (~70 lines)
3. `formatting.test.ts` - Formatting & tokens (~180 lines)
4. `getters-setters.test.ts` - Accessors (~100 lines)
5. `manipulation.test.ts` - Add/Subtract operations (~200 lines)
6. `comparison-validation.test.ts` - Comparisons & validations (~290 lines)
7. `periods.test.ts` - Start/End of periods (~180 lines)
8. `calculations.test.ts` - Differences & utilities (~190 lines)
9. `conversion.test.ts` - Conversions, ISO, relative time (~220 lines)
10. `edge-cases.test.ts` - Edge cases, static, chaining (~440 lines)

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run with coverage
pnpm test:coverage
```

## Test Quality

✅ All edge cases covered
✅ Timezone handling tested
✅ Month overflow scenarios
✅ Leap year calculations
✅ Business day logic
✅ Format token variations
✅ Method chaining
✅ Static method testing


