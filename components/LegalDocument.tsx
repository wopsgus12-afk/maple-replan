import type { LegalSection } from "@/lib/legalContent";

type Props = {
  title: string;
  sections: LegalSection[];
  effectiveDate: string;
  lastUpdated: string;
};

export function LegalDocument({ title, sections, effectiveDate, lastUpdated }: Props) {
  return (
    <article className="legal-document">
      <h1 className="mb-6 text-2xl font-bold text-maple-gold">{title}</h1>
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-4">
            <h2 className="mb-3 text-base font-semibold text-maple-accent">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mb-3 text-sm leading-relaxed text-gray-200"
              >
                {p}
              </p>
            ))}
            {section.listItems && section.listItems.length > 0 && (
              <ul className="mb-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200">
                {section.listItems.map((item) => (
                  <li key={item.slice(0, 48)}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <footer className="mt-10 space-y-1 border-t border-maple-border/50 pt-6 text-xs text-maple-muted">
        <p>시행일: {effectiveDate}</p>
        <p>최종 개정일: {lastUpdated}</p>
      </footer>
    </article>
  );
}
