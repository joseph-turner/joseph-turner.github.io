import {
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'preact/hooks';
import type { Skill } from '../pages/resume/skills';
import Legend from './Legend';
import SkillPopover from './SkillPopover';

const CATEGORY_COLORS: Record<string, string> = {
  Framework: 'bg-blue-100 text-blue-800',
  Language: 'bg-green-100 text-green-800',
  Tools: 'bg-purple-100 text-purple-800',
  Testing: 'bg-yellow-100 text-yellow-800',
  DevOps: 'bg-orange-100 text-orange-800',
  fallback: 'bg-gray-100 text-gray-800',
};

function getCategoryColor(category: string): string {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS.fallback;
}

type SkillsGridProps = {
  skills: Skill[];
};

export function SkillsGrid({ skills }: SkillsGridProps) {
  const [activeSkill, setActiveSkill] = useState<number | null>(
    null
  );
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const pillRefs = useRef<Array<HTMLButtonElement | null>>([]);

  // Close popover on outside click/touch or ESC
  useEffect(() => {
    if (activeSkill === null) return;
    function handleClick(e: MouseEvent | TouchEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        activeSkill !== null &&
        pillRefs.current[activeSkill] &&
        !pillRefs.current[activeSkill]!.contains(
          e.target as Node
        )
      ) {
        setActiveSkill(null);
      }
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveSkill(null);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [activeSkill]);

  // Accessibility: focus trap for popover
  useEffect(() => {
    if (activeSkill === null || !popoverRef.current) return;
    const focusable =
      popoverRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
    if (focusable.length) focusable[0].focus();
  }, [activeSkill]);

  if (!skills?.length) {
    return null;
  }

  // Memoized legend categories
  const legendCategories = [
    {
      label: 'Framework',
      color: CATEGORY_COLORS.Framework,
      key: 'Framework',
    },
    {
      label: 'Language',
      color: CATEGORY_COLORS.Language,
      key: 'Language',
    },
    {
      label: 'Tools',
      color: CATEGORY_COLORS.Tools,
      key: 'Tools',
    },
    {
      label: 'Testing',
      color: CATEGORY_COLORS.Testing,
      key: 'Testing',
    },
    {
      label: 'DevOps',
      color: CATEGORY_COLORS.DevOps,
      key: 'DevOps',
    },
    {
      label: 'Other',
      color: CATEGORY_COLORS.fallback,
      key: 'fallback',
    },
  ];

  // Memoized present categories
  const skillCategories = new Set(skills.map((s) => s.category));
  const hasFallback = skills.some(
    (s) => !legendCategories.some((lc) => lc.key === s.category)
  );

  const visibleCategories = legendCategories.filter(({ key }) =>
    key === 'fallback' ? hasFallback : skillCategories.has(key)
  );

  // Combine skills with the same name
  const combinedSkills = useMemo(() => {
    return Object.values(
      skills.reduce<Record<string, Skill>>(
        (acc, skill) => {
          const key = skill.name;
          if (!acc[key]) {
            acc[key] = { ...skill };
            return acc;
          }
          return acc;
        },
        {}
      )
    );
  }, [skills]);

  return (
    <div>
      <Legend visibleCategories={visibleCategories} />
      {/* Skills grid */}
        <div class="flex flex-wrap gap-2 overflow-x-auto sm:overflow-visible">
          {combinedSkills.map((skill, idx) => {
            const color = getCategoryColor(skill.category);
            const isActive = activeSkill === idx;
            return (
              <div key={skill.name} class="relative">
                <button
                  ref={(el) => {
                    pillRefs.current[idx] = el;
                  }}
                  type="button"
                  class={`rounded-full px-3 py-1 text-sm font-medium transition focus:ring-2 focus:ring-offset-2 focus:outline-none ${color}`}
                  aria-label={`${skill.name} skill pill`}
                  aria-expanded={isActive}
                  aria-controls={
                    isActive ? `popover-${idx}` : undefined
                  }
                  aria-describedby={
                    isActive ? `desc-${idx}` : undefined
                  }
                  tabIndex={0}
                  onClick={() =>
                    setActiveSkill(isActive ? null : idx)
                  }
                  onFocus={() => {}}
                  onBlur={(e) => {
                    setTimeout(() => {
                      const active = document.activeElement;
                      const pill = pillRefs.current[idx];
                      const popover = popoverRef.current;
                      if (
                        popover &&
                        pill &&
                        active !== pill &&
                        !popover.contains(active) &&
                        active !== pill
                      ) {
                        setActiveSkill(null);
                        pill.focus();
                      }
                    }, 10);
                  }}
                >
                  {skill.name}
                </button>
                {isActive && (
                  <SkillPopover
                    skill={skill}
                    idx={idx}
                    popoverRef={popoverRef}
                    pillRefs={pillRefs}
                  />
                )}
              </div>
            );
          })}
        </div>
    </div>
  );
}
