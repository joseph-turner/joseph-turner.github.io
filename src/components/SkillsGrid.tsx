import {
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'preact/hooks';

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

export type SkillPosition = {
  title: string;
  company: string;
  years: string;
};

export type Skill = {
  name: string;
  category: string;
  description: string;
  positions: SkillPosition[];
  level: number;
};

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
  const legendCategories = useMemo(
    () => [
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
    ],
    []
  );

  // Memoized present categories
  const skillCategories = useMemo(
    () => new Set(skills.map((s) => s.category)),
    [skills]
  );
  const hasFallback = useMemo(
    () =>
      skills.some(
        (s) =>
          !legendCategories.some((lc) => lc.key === s.category)
      ),
    [skills, legendCategories]
  );

  // Helper: get popover style for edge detection
  function getPopoverStyle(idx: number) {
    if (typeof window === 'undefined' || !pillRefs.current[idx])
      return {};
    const pillRect =
      pillRefs.current[idx]?.getBoundingClientRect();
    const popoverWidth =
      window.innerWidth < 640 ? window.innerWidth : 256; // sm:w-64
    const margin = 16;
    const viewportWidth = window.innerWidth;
    if (pillRect) {
      console.log('pillRect:', pillRect);
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

  // Helper: get unique positions
  function getUniquePositions(positions: SkillPosition[]) {
    return Array.from(
      new Map(
        positions.map((pos) => [
          pos.title + pos.company + pos.years,
          pos,
        ])
      ).values()
    );
  }

  // Legend component
  function Legend() {
    const visibleCategories = legendCategories.filter(
      ({ key }) =>
        key === 'fallback'
          ? hasFallback
          : skillCategories.has(key)
    );
    return (
      <div
        class="mb-4 flex flex-wrap items-center gap-4"
        aria-label="Skill category legend"
      >
        {visibleCategories.map(({ label, color }) => (
          <div key={label} class="flex items-center gap-2">
            <span
              class={`inline-block h-4 w-4 rounded-full border ${color}`}
              aria-hidden="true"
            ></span>
            <span class="text-xs font-medium text-gray-700">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  // Popover component
  function SkillPopover({
    skill,
    idx,
  }: {
    skill: Skill;
    idx: number;
  }) {
    const [popoverStyle, setPopoverStyle] = useState({});
    useEffect(() => {
      setPopoverStyle(getPopoverStyle(idx));
    }, [idx]);
    const style = {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      ...popoverStyle,
    };

    return (
      <div
        ref={popoverRef}
        id={`popover-${idx}`}
        role="dialog"
        aria-modal="false"
        aria-labelledby={`desc-${idx}`}
        class="absolute z-10 mt-2 w-full max-w-xs scale-100 transform rounded-md border bg-white p-3 opacity-100 shadow-lg transition-all duration-200 ease-out sm:w-64"
        style={style}
      >
        <div id={`desc-${idx}`} class="mb-2 text-lg font-bold">
          {skill.name}
        </div>
        <div class="mb-2 text-sm text-gray-700">
          {skill.description}
        </div>
        <div class="mb-2">
          <span class="text-xs font-semibold text-gray-500">
            Usage History:
          </span>
          <ul class="mt-1 list-inside list-disc text-xs">
            {getUniquePositions(skill.positions).map(
              (pos: SkillPosition) => (
                <li key={pos.title + pos.company + pos.years}>
                  {pos.title} @ {pos.company} ({pos.years})
                </li>
              )
            )}
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

  // Combine skills with the same name
  const combinedSkills = useMemo(() => {
    const map = new Map<
      string,
      Skill & { descriptions: string[] }
    >();
    skills.forEach((skill) => {
      if (map.has(skill.name)) {
        const existing = map.get(skill.name)!;
        // Merge positions, deduplicate
        const allPositions = [
          ...existing.positions,
          ...skill.positions,
        ];
        const uniquePositions = Array.from(
          new Map(
            allPositions.map((pos) => [
              pos.title + pos.company + pos.years,
              pos,
            ])
          ).values()
        );
        // Merge descriptions, deduplicate
        const allDescriptions = [
          ...existing.descriptions,
          skill.description,
        ];
        const uniqueDescriptions = Array.from(
          new Set(allDescriptions)
        );
        // Use highest level
        const maxLevel = Math.max(existing.level, skill.level);
        map.set(skill.name, {
          ...existing,
          positions: uniquePositions,
          descriptions: uniqueDescriptions,
          level: maxLevel,
        });
      } else {
        map.set(skill.name, {
          ...skill,
          descriptions: [skill.description],
        });
      }
    });
    return Array.from(map.values());
  }, [skills]);

  return (
    <div>
      <Legend />
      {/* Skills grid */}
      {combinedSkills.length === 0 ? (
        <div class="py-8 text-center text-sm text-gray-500">
          No skills to display.
        </div>
      ) : (
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
                  <SkillPopover skill={skill} idx={idx} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
