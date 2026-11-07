/**
 * Type definitions for ProDate
 */

export interface DurationObject {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface FromNowOptions {
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
}

export interface TimeAgoOptions {
  round?: boolean;
  futureText?: string;
  pastText?: string;
  justNowText?: string;
  maxUnits?: number;
}

export interface DateObject {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

export type TimeUnit =
  | "years"
  | "months"
  | "weeks"
  | "days"
  | "hours"
  | "minutes"
  | "seconds"
  | "milliseconds";

export type StartEndUnit =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";

export type ComparisonUnit =
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second";


