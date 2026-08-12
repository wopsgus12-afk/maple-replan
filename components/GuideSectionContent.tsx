import type { GuideSection } from "@/lib/seoPosts";
import CoupangBanner from "./CoupangBanner";

type Props = {
  section: GuideSection;
};

export function GuideSectionContent({ section }: Props) {
  return (
    <>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-3 text-base leading-loose text-gray-200">
          {paragraph}
        </p>
      ))}
      {section.subsections?.map((sub) => (
        <div key={sub.heading} className="mb-4">
          <h3 className="mb-2 text-lg font-semibold text-maple-gold/95 sm:text-xl">
            {sub.heading}
          </h3>
          {sub.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-2 text-base leading-loose text-gray-200"
            >
              {paragraph}
            </p>
          ))}
          {sub.bullets && sub.bullets.length > 0 && (
            <ul className="mb-3 list-disc space-y-2.5 pl-5 text-base leading-loose text-gray-200 marker:text-maple-gold">
              {sub.bullets.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          )}
          {sub.paragraphsAfterBullets?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mb-2 text-base leading-loose text-gray-200"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      {section.table && (
        <div className="mb-4 overflow-x-auto rounded-lg border border-maple-border/60">
          <table className="min-w-full border-collapse text-left text-sm text-gray-200 sm:text-base">
            <thead className="bg-maple-panel/80">
              <tr>
                {section.table.headers.map((header) => (
                  <th
                    key={header}
                    className="whitespace-nowrap border-b border-maple-border/60 px-3 py-2 font-semibold text-maple-gold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("|")} className="odd:bg-maple-bg/40">
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${i}`}
                      className="border-b border-maple-border/40 px-3 py-2 align-top leading-relaxed"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mb-3 list-disc space-y-2.5 pl-5 text-base leading-loose text-gray-200 marker:text-maple-gold">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )}
      {section.showCoupangBanner && <CoupangBanner variant="card" />}
    </>
  );
}
