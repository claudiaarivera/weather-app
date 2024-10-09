import { tz } from '@date-fns/tz';
import { closestIndexTo, format, isToday } from 'date-fns';

export const getClosetIndexToNow = (
  dates: string[],
  timezone: string
): number | undefined => {
  const nowTimezone = format(new Date(), "yyyy-MM-dd'T'HH:mm", {
    in: tz(timezone),
  });
  return closestIndexTo(nowTimezone, dates);
};
export const filterTodayHours = (dates: string[], timezone: string) => {
  return dates.filter((hour) => isToday(hour, { in: tz(timezone) }));
};
