import {
  LEGAL_CONTACT_EMAIL,
  type ContactCard,
} from "@/lib/legalContent";

type Props = {
  intro: string;
  cards: ContactCard[];
  emailLabel: string;
};

export function ContactCards({ intro, cards, emailLabel }: Props) {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-gray-200">{intro}</p>
      <div className="rounded-lg border border-maple-gold/40 bg-maple-gold/10 px-4 py-3">
        <p className="text-[11px] font-medium uppercase tracking-wide text-maple-muted">
          {emailLabel}
        </p>
        <a
          href={`mailto:${LEGAL_CONTACT_EMAIL}`}
          className="mt-1 inline-block text-lg font-semibold text-maple-gold underline-offset-2 hover:underline"
        >
          {LEGAL_CONTACT_EMAIL}
        </a>
      </div>
      <ul className="grid grid-cols-1 gap-3">
        {cards.map((card) => (
          <li
            key={card.id}
            className="rounded-lg border border-maple-border/70 bg-maple-panel/50 p-4"
          >
            <h2 className="text-base font-semibold text-maple-accent">
              {card.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-200">
              {card.body}
            </p>
            <a
              href={card.href}
              className="mt-3 inline-flex text-sm font-medium text-maple-gold underline-offset-2 hover:underline"
            >
              {card.cta} →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
