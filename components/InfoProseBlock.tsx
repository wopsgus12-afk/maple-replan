type Props = {
  title: string;
  paragraphs: readonly string[];
};

/** 가이드·개발자 안내 탭 상단 정보성 본문 */
export function InfoProseBlock({ title, paragraphs }: Props) {
  return (
    <div className="mb-6 rounded-lg border border-maple-border/80 bg-maple-panel/70 p-4 sm:p-5">
      <h2 className="text-lg font-bold leading-snug text-maple-gold sm:text-xl">{title}</h2>
      <div className="mt-4 max-h-[min(70vh,42rem)] space-y-4 overflow-y-auto pr-1 text-base leading-relaxed text-gray-200">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 56)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
