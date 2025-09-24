import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import type { Skill } from '../pages/resume/skills';
import { jobs } from '../pages/resume/jobs';
import type { Job } from '../pages/resume/jobs';
import { skills as skillsMap } from '../pages/resume/skills';

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
  popoverRef: any;
  pillRefs: any;
}) {
  const [popoverStyle, setPopoverStyle] = useState({});
  const localRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      setPopoverStyle(getPopoverStyle(idx));
  }, [idx]);
  // Helper: get popover style for edge detection
  function getPopoverStyle(idx: number) {
    if (
      typeof window === 'undefined' ||
      !pillRefs.current[idx]
    ) {
      return {};
    }

    const pillRect =
      pillRefs.current[idx]?.getBoundingClientRect();
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
      // job.skills may contain strings or Skill-like objects; handle both
      job.skills.forEach((s) => {
        let name: string | undefined;
        if (typeof s === 'string') {
          // Map string keys (e.g. 'NextJS') to the canonical skill name from skills.ts
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const mapped = (skillsMap as any)[s];
          name = mapped && mapped.name ? mapped.name : s;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        else if ((s as any) && typeof (s as any).name === 'string') name = (s as any).name;
        if (name === skill.name) {
          positions.push({
            title: job.title,
            company: job.company,
            years: `${job.startDate}${job.endDate ? ' - ' + job.endDate : ''}`,
          });
        }
      });
    });
    // Deduplicate by title+company+years
    const unique = Array.from(
      new Map(
        positions.map((p) => [p.title + p.company + (p.years || ''), p])
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
      class="absolute z-10 mt-2 w-full max-w-xs scale-100 transform rounded-md border bg-white p-3 opacity-100 shadow-lg transition-all duration-200 ease-out sm:w-64 dark:bg-gray-800 dark:border-gray-700"
      style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', ...popoverStyle }}
    >
      <div id={`desc-${idx}`} class="mb-2 text-lg font-bold">
        {skill.name}
      </div>
      <div class="mb-2 text-sm text-gray-700 dark:text-gray-300">{skill.description}</div>
      <div class="mb-2">
        <span class="text-xs font-semibold text-gray-500">Usage History:</span>
        <ul class="mt-1 list-inside list-disc text-xs">
            {getUniquePositions(skill).map((pos, index) => (
              <li key={pos.title + pos.company + index}>
                {pos.title} @ {pos.company}
              </li>
            ))}
        </ul>
      </div>
      <div class="mt-2 flex items-center gap-1">
        <span class="text-xs font-semibold text-gray-500">Proficiency:</span>
        <span aria-label={`Level ${skill.level}`}>{'⭐'.repeat(skill.level)}</span>
      </div>
    </div>
  );
}
