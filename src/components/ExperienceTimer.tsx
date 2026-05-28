import { useEffect, useState } from 'preact/hooks';

import { formatExperienceClock } from '../lib/experience';

type ExperienceTimerProps = {
  startDateTime: string;
};

export default function ExperienceTimer({
  startDateTime,
}: ExperienceTimerProps) {
  const [currentDate, setCurrentDate] = useState(
    () => new Date()
  );
  const startDate = new Date(startDateTime);
  const clock = formatExperienceClock(startDate, currentDate);

  useEffect(() => {
    const updateClock = () => setCurrentDate(new Date());

    updateClock();
    const intervalId = window.setInterval(updateClock, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <p
        aria-label={`${clock} since the first web developer role`}
        class="font-mono text-sm leading-5 font-black text-gray-950 tabular-nums dark:text-white"
        data-experience-clock
      >
        {clock}
      </p>
      <p class="mt-1 text-xs leading-5 font-medium text-gray-500 dark:text-gray-400">
        since I started professionally moving boxes around
      </p>
    </>
  );
}
