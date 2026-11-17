export function TechTags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tools used">
      {items.map((item) => (
        <li
          key={item}
          className="rounded border border-ink-soft/30 px-2 py-0.5 font-mono text-[0.7rem] text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
