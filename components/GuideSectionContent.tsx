import type { GuideSection } from "@/lib/seoPosts";

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
      {section.bullets && section.bullets.length > 0 && (
        <ul className="mb-3 list-disc space-y-2.5 pl-5 text-base leading-loose text-gray-200 marker:text-maple-gold">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
