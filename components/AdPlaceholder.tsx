type AdVariant = "mini" | "strip" | "wide";

const LABEL: Record<AdVariant, string> = {
  mini: "광고 영역",
  strip: "광고 영역",
  wide: "광고 영역",
};

const SIZE: Record<AdVariant, string> = {
  mini: "h-6 min-h-[24px] px-2 text-[9px]",
  strip: "h-10 min-h-[40px] px-3 text-[10px]",
  wide: "h-[72px] min-h-[72px] px-4 text-[11px]",
};

type Props = {
  variant: AdVariant;
  className?: string;
};

/** 광고 배너 자리 — use `electron-no-drag` on overlay/interactive rows */
export function AdBanner({ variant, className = "" }: Props) {
  return (
    <div
      className={`electron-no-drag flex shrink-0 items-center justify-center rounded border border-maple-accent/25 bg-gradient-to-r from-maple-panel/70 via-[#0a1610]/90 to-maple-panel/70 text-center text-maple-muted shadow-[inset_0_0_20px_rgba(62,207,110,0.06),0_0_14px_rgba(212,168,75,0.08)] ${SIZE[variant]} ${className}`}
      role="complementary"
      aria-label="광고 영역"
    >
      <span className="truncate tracking-wide text-maple-muted/90">{LABEL[variant]}</span>
    </div>
  );
}
