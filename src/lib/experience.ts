type JobWithStartDate = {
  startDate: string;
};

const monthIndexes = new Map(
  [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ].map((month, index) => [month, index])
);

const padClockPart = (value: number) =>
  value.toString().padStart(2, '0');

const addCalendarUnits = (
  date: Date,
  units: { days?: number; months?: number; years?: number }
) => {
  const nextDate = new Date(date);

  if (units.years) {
    nextDate.setFullYear(nextDate.getFullYear() + units.years);
  }

  if (units.months) {
    nextDate.setMonth(nextDate.getMonth() + units.months);
  }

  if (units.days) {
    nextDate.setDate(nextDate.getDate() + units.days);
  }

  return nextDate;
};

export const parseMonthYearDateTime = (monthYear: string) => {
  const dateMatch =
    /^(?<month>[A-Z][a-z]{2}) (?<year>\d{4})$/.exec(monthYear);
  const month = dateMatch?.groups?.month;
  const year = dateMatch?.groups?.year;
  const monthIndex = month ? monthIndexes.get(month) : undefined;

  if (!year || monthIndex === undefined) {
    throw new Error(`Unsupported job start date: ${monthYear}`);
  }

  return `${year}-${padClockPart(monthIndex + 1)}-01T00:00:00`;
};

export const getEarliestJobStartDateTime = (
  jobs: JobWithStartDate[]
) =>
  jobs
    .map((job) => parseMonthYearDateTime(job.startDate))
    .sort(
      (leftDate, rightDate) =>
        new Date(leftDate).getTime() -
        new Date(rightDate).getTime()
    )[0];

export const formatExperienceClock = (
  startDate: Date,
  currentDate: Date
) => {
  if (currentDate.getTime() <= startDate.getTime()) {
    return '0y 0m 0d 00:00:00';
  }

  let cursor = new Date(startDate);
  let years = currentDate.getFullYear() - cursor.getFullYear();
  let nextCursor = addCalendarUnits(cursor, { years });

  if (nextCursor.getTime() > currentDate.getTime()) {
    years -= 1;
    nextCursor = addCalendarUnits(cursor, { years });
  }

  cursor = nextCursor;

  let months = 0;
  while (
    addCalendarUnits(cursor, { months: months + 1 }).getTime() <=
    currentDate.getTime()
  ) {
    months += 1;
  }

  cursor = addCalendarUnits(cursor, { months });

  let days = 0;
  while (
    addCalendarUnits(cursor, { days: days + 1 }).getTime() <=
    currentDate.getTime()
  ) {
    days += 1;
  }

  cursor = addCalendarUnits(cursor, { days });

  const remainingMilliseconds =
    currentDate.getTime() - cursor.getTime();
  const hours = Math.floor(remainingMilliseconds / 3_600_000);
  const minutes = Math.floor(
    (remainingMilliseconds % 3_600_000) / 60_000
  );
  const seconds = Math.floor(
    (remainingMilliseconds % 60_000) / 1_000
  );

  return `${years}y ${months}m ${days}d ${padClockPart(hours)}:${padClockPart(minutes)}:${padClockPart(seconds)}`;
};
