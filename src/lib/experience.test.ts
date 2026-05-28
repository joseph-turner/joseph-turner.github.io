import { describe, expect, test } from 'vitest';

import {
  formatExperienceClock,
  getEarliestJobStartDateTime,
  parseMonthYearDateTime,
} from './experience';
import { jobs } from '../data/resume/jobs';

describe('experience timer', () => {
  test('formats a calendar clock duration from the first role', () => {
    expect(
      formatExperienceClock(
        new Date('2012-06-01T00:00:00'),
        new Date('2013-07-02T03:04:05')
      )
    ).toBe('1y 1m 1d 03:04:05');
  });

  test('borrows time units across month boundaries', () => {
    expect(
      formatExperienceClock(
        new Date('2012-06-01T00:00:00'),
        new Date('2013-05-31T23:59:59')
      )
    ).toBe('0y 11m 30d 23:59:59');
  });

  test('parses resume month-year dates as the first local day', () => {
    expect(parseMonthYearDateTime('Jun 2012')).toBe(
      '2012-06-01T00:00:00'
    );
  });

  test('uses the earliest portfolio job as the timer start', () => {
    expect(getEarliestJobStartDateTime(jobs)).toBe(
      '2012-06-01T00:00:00'
    );
  });
});
