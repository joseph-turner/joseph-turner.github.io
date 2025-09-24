import { h } from 'preact';

type Category = { label: string; color: string; key: string };

export default function Legend({
  visibleCategories,
}: {
  visibleCategories: Category[];
}) {
  return (
    <div class="mb-4 flex flex-wrap items-center gap-4" aria-label="Skill category legend">
      {visibleCategories.map(({ label, color }) => (
        <div key={label} class="flex items-center gap-2">
          <span class={`inline-block h-4 w-4 rounded-full border ${color}`} aria-hidden="true"></span>
          <span class="text-xs font-medium text-gray-700">{label}</span>
        </div>
      ))}
    </div>
  );
}
