type TrustItem = {
  label: string;
  value: string;
};

type Props = {
  kicker: string;
  items: TrustItem[];
};

export function AboutTrustStrip({ kicker, items }: Props) {
  return (
    <div className="mb-8 space-y-3">
      <p className="text-xs font-medium uppercase tracking-wide text-maple-gold">
        {kicker}
      </p>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-lg border border-maple-gold/30 bg-maple-panel/60 px-4 py-3"
          >
            <p className="text-[11px] text-maple-muted">{item.label}</p>
            <p className="mt-1 text-sm font-semibold leading-snug text-gray-100">
              {item.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
