import type { RefObject } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import type { Skill } from '../data/resume/skills';
import { jobs } from '../data/resume/jobs';
import type { Job } from '../data/resume/jobs';
import { skills as skillsMap } from '../data/resume/skills';

type SkillPosition = {
  title: string;
  company: string;
  years?: string;
};

export default function SkillPopover({
  skill,
  idx,
  popoverRef,
  pillRefs,
}: {
  skill: Skill;
  idx: number;
  popoverRef: RefObject<HTMLDivElement>;
  pillRefs: RefObject<(HTMLButtonElement | null)[]>;
}) {
  const [popoverStyle, setPopoverStyle] = useState({});

  useEffect(() => {
    setPopoverStyle(getPopoverStyle(idx));
  }, [idx]);
  // Helper: get popover style for edge detection
  function getPopoverStyle(idx: number) {
    const pills = pillRefs.current;

    if (typeof window === 'undefined' || !pills?.[idx]) {
      return {};
    }

    const pillRect = pills[idx]?.getBoundingClientRect();
    const popoverWidth =
      window.innerWidth < 640 ? window.innerWidth : 256; // sm:w-64
    const margin = 16;
    const viewportWidth = window.innerWidth;

    if (pillRect) {
      if (
        pillRect.left + popoverWidth / 2 >
        viewportWidth - margin
      ) {
        return { left: 'auto', right: 0, transform: 'none' };
      }
      if (pillRect.left - popoverWidth / 2 < margin) {
        return { left: 0, transform: 'none' };
      }
    }
    return {};
  }

  // Helper: get unique positions for a skill by scanning jobs
  function getUniquePositions(skill: Skill) {
    const positions: SkillPosition[] = [];
    jobs.forEach((job: Job) => {
      const hasSkill = job.skills.some(
        (skillKey) => skillsMap[skillKey].name === skill.name
      );

      if (hasSkill) {
        positions.push({
          title: job.title,
          company: job.company,
          years: `${job.startDate}${job.endDate ? ' - ' + job.endDate : ''}`,
        });
      }
    });
    // Deduplicate by title+company+years
    const unique = Array.from(
      new Map(
        positions.map((p) => [
          p.title + p.company + (p.years ?? ''),
          p,
        ])
      ).values()
    );
    return unique;
  }

  return (
    <div
      ref={popoverRef}
      id={`popover-${idx}`}
      role="dialog"
      aria-modal="false"
      aria-labelledby={`desc-${idx}`}
      class="absolute z-10 mt-2 w-full max-w-xs scale-100 transform rounded-md border bg-white p-3 opacity-100 shadow-lg transition-all duration-200 ease-out sm:w-64 dark:border-gray-700 dark:bg-gray-800"
      style={{
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        ...popoverStyle,
      }}
    >
      <div id={`desc-${idx}`} class="mb-2 text-lg font-bold">
        {skill.name}
      </div>
      <div class="mb-2 text-sm text-gray-700 dark:text-gray-300">
        {skill.description}
      </div>
      <div class="mb-2">
        <span class="text-xs font-semibold text-gray-500">
          Usage History:
        </span>
        <ul class="mt-1 list-inside list-disc text-xs">
          {getUniquePositions(skill).map((pos, index) => (
            <li key={pos.title + pos.company + index}>
              {pos.title} @ {pos.company}
            </li>
          ))}
        </ul>
      </div>
      <div class="mt-2 flex items-center gap-1">
        <span class="text-xs font-semibold text-gray-500">
          Proficiency:
        </span>
        <span aria-label={`Level ${skill.level}`}>
          {'⭐'.repeat(skill.level)}
        </span>
      </div>
    </div>
  );
}
