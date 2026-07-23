/**
 * English guide posts (GMS / English search).
 *
 * How to add a post:
 * 1. Append an object to EN_GUIDE_POSTS (same shape as Korean GuidePost).
 * 2. Use a unique English slug (do not reuse Korean slugs).
 * 3. If this is a true translation pair of a Korean guide, set `koSlug`
 *    to that Korean slug so hreflang can link them.
 * 4. Deploy — `/en/guide/{slug}/` is SSG from this list.
 */
import type { GuidePost } from "@/lib/seoPosts";

export type EnGuidePost = GuidePost & {
  /** Matching Korean guide slug when a real KO↔EN pair exists. */
  koSlug?: string;
};

export const EN_GUIDE_POSTS: EnGuidePost[] = [
  {
    slug: "gms-meso-farming-efficiency-starter",
    title:
      "GMS Heroic Server Meso Farming Guide: WAP Rates, Drop % & Best Map Tier List",
    description:
      "GMS Heroic (Reboot) meso farming guide: 100% Meso Obtain cap, Item Drop % for nodules, Grandis best maps (Cernium–Carcion), and estimated 2-hour WAP yields—paired with the Korean Grandis masterplan.",
    koSlug:
      "grandis-detail-maps-masterplan-1replan-revenue-fatigue-final-settlement-guide",
    sections: [
      {
        heading:
          "1. Why Meso Farming Mechanics Differ in GMS Heroic (Reboot) Server",
        paragraphs: [
          "In Global MapleStory (GMS) Heroic Server (formerly Reboot), trading and the Auction House are completely disabled. Because progression relies 100% on self-sufficient Meso accumulation, understanding your exact Meso yield per 2-hour Wealth Acquisition Potion (WAP) session is crucial. Heroic Server features a passive 5x Meso Multiplier compared to Interactive servers, making optimized map selection and gear lines the single most important factor for account progression.",
        ],
      },
      {
        heading: "2. Essential Stat Caps for Maximum WAP Efficiency",
        paragraphs: [
          "To achieve peak Mesos per hour during your WAP sessions, you must optimize your character stats according to the hard caps built into the game mechanics.",
        ],
        subsections: [
          {
            heading: "① Meso Obtain % Hard Cap (100% Gear Limit)",
            paragraphs: [],
            bullets: [
              "Gear Cap: Maximum +100% Meso Obtain from accessories (5 lines of 20% Meso lines on Rings, Pendant, Face, or Eye decorative items).",
              "Additional Stacks: Inner Ability (up to 20%), Phantom Legion Member effect (up to 5%), and Wealth Acquisition Potion (+20% multiplicative) stack on top of the 100% gear cap.",
            ],
          },
          {
            heading: "② Item Drop % Optimization",
            paragraphs: [],
            bullets: [
              "Base Requirement: You need at least +67% Item Drop Rate to guarantee a Meso nodule drop from every single slain mob.",
              "Erda Fragment & Nodestone Farming: Stacking Item Drop Rate up to 200%+ significantly increases Erda Fragment drops in Grandis regions, providing massive long-term value alongside raw Meso gains.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Grandis Region Best Meso Farming Maps & Estimated WAP Yields",
        paragraphs: [
          "Based on full 2-hour WAP sessions with a 100% Meso / 67%+ Drop gear setup and full 1-shot mob clearing efficiency, here are the top-tier map recommendations across Grandis.",
        ],
        subsections: [
          {
            heading: "① Cernium / Burning Cernium (Lv. 260+)",
            paragraphs: [],
            bullets: [
              "Top Maps: Royal Library 2 / Western City Ramparts 2",
              "Estimated 2-Hour WAP Yield: ~350M to 420M Raw Mesos.",
              "Characteristics: Simple horizontal mobility loops with low input fatigue. Perfect for early-game Heroic players establishing their foundational Meso gear lines.",
            ],
          },
          {
            heading: "② Odium & Shangri-La (Lv. 270+)",
            paragraphs: [],
            bullets: [
              "Top Maps: Castle Gate 3 / Shangri-La Spring 2",
              "Estimated 2-Hour WAP Yield: ~480M to 560M Raw Mesos + High Erda Fragment yields.",
              "Characteristics: Dense mob spawn density. Classes with wide-area summons or auto-tracking projectiles experience a massive surge in hourly Mesos here.",
            ],
          },
          {
            heading: "③ Arteria & Carcion (Lv. 280+)",
            paragraphs: [],
            bullets: [
              "Top Maps: Train Station 1 / Sunken Ruins 1",
              "Estimated 2-Hour WAP Yield: ~580M to 650M+ Raw Mesos.",
              "Characteristics: Highest Authentic Force and HP requirements, but yields the absolute highest Meso-per-hour returns in all of GMS.",
            ],
          },
        ],
      },
      {
        heading: "Conclusion: Measure Your Hourly Rate with Precision",
        paragraphs: [
          "Randomly picking a map without measuring your mob kill counts leads to hidden Meso loss. Always run a 10-minute Battle Analysis to calculate your exact WAP efficiency before committing to long grinding sessions. Use our live Meso Calculator tool to track your progress and optimize your daily yield.",
        ],
      },
    ],
  },
  {
    slug: "gms-heroic-odium-castle-gate-3-vs-occupied-alley-2-wap-meso-erda-guide",
    title:
      "GMS Heroic Odium Best WAP Maps: Castle Gate 3 vs Occupied Alley 2 Meso Rates & Erda Fragment Yields",
    description:
      "GMS Heroic Odium WAP map comparison: Castle Gate 3 vs Occupied Alley 2—2-hour raw Meso rates, Erda Fragment yields, Drop Rate caps, and which map fits your class.",
    koSlug:
      "odium-castle-walls-3-vs-closed-area-2-1replan-meso-fragment-margin-guide",
    sections: [
      {
        heading: "1. Choosing the Right Odium Map in GMS Heroic (Reboot)",
        paragraphs: [
          "Reaching Lv. 270 and entering Odium is a major milestone for Global MapleStory (GMS) Heroic Server players. Because trade is disabled and progression relies entirely on self-funded Meso accumulation via the 5x Meso Multiplier, map selection directly impacts your account power. In this guide, we break down the two most popular Odium grinding spots—Castle Gate 3 and Occupied Alley 2—to determine which map delivers the highest Mesos per hour and Erda Fragments for your 2-hour Wealth Acquisition Potion (WAP) sessions.",
        ],
      },
      {
        heading: "2. WAP Yield Comparison: Castle Gate 3 vs Occupied Alley 2",
        paragraphs: [
          "Data measured over full 2-hour WAP sessions with a standard Heroic setup (+100% Meso gear cap, +67%~100% Item Drop Rate, full 1-shot mob clear).",
        ],
        subsections: [
          {
            heading: "① Castle Gate 3 (Max Meso & Mob Density)",
            paragraphs: [],
            bullets: [
              "Estimated 2-Hour Raw Mesos: ~480,000,000 to 540,000,000 Mesos.",
              "Erda Fragment Yield: ~12 to 18 Fragments per WAP.",
              "Pros & Cons: Highest raw yield in Odium, but requires active clearing loops and summon placements due to vertical map height.",
            ],
          },
          {
            heading: "② Occupied Alley 2 (Low Fatigue & Lazy Rotation)",
            paragraphs: [],
            bullets: [
              "Estimated 2-Hour Raw Mesos: ~430,000,000 to 480,000,000 Mesos.",
              "Erda Fragment Yield: ~10 to 15 Fragments per WAP.",
              "Pros & Cons: Ultra-simple horizontal mobility loop. Ideal for low-input \"lazy\" farming sessions with minimal focus required.",
            ],
          },
        ],
      },
      {
        heading: "3. Maximizing Your WAP Efficiency with Drop Caps",
        paragraphs: [
          "To ensure no Meso nodule is wasted, maintain at least +67% Item Drop Rate to guarantee a 100% Meso drop chance per mob. Pushing Drop Rate beyond 100% directly boosts your Erda Fragment drop frequency, accelerating your 6th Job skill progression alongside massive Meso gains.",
        ],
      },
      {
        heading: "Conclusion: Optimize Your Daily WAP Sessions",
        paragraphs: [
          "If your class has wide-area summons and tracking projectiles, Castle Gate 3 offers the highest Meso-per-hour return. If you prefer low fatigue, Occupied Alley 2 is the top tier option. Always run a 10-minute Battle Analysis before popping a 2-hour WAP, and use our live Meso Calculator tool to track your progression.",
        ],
      },
    ],
  },
];

export function getEnGuideBySlug(slug: string): EnGuidePost | undefined {
  return EN_GUIDE_POSTS.find((post) => post.slug === slug);
}

export function getAllEnGuideSlugs(): string[] {
  return EN_GUIDE_POSTS.map((post) => post.slug);
}

/** EN slug → KO slug for posts that declare a translation pair. */
export function getKoSlugForEn(enSlug: string): string | undefined {
  return getEnGuideBySlug(enSlug)?.koSlug;
}

/** KO slug → EN slug when an English post points at that Korean guide. */
export function getEnSlugForKo(koSlug: string): string | undefined {
  return EN_GUIDE_POSTS.find((post) => post.koSlug === koSlug)?.slug;
}
