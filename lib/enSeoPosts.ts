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
  {
    slug: "gms-heroic-6th-job-erda-fragment-priority-mastery-vs-origin-wap-guide",
    title:
      "GMS Heroic 6th Job Erda Fragment Priority Guide: Mastery Core vs Origin Skill WAP Efficiency",
    description:
      "GMS Heroic 6th Job Erda Fragment priority: Mastery Core vs Origin Skill for WAP efficiency, 1-shot thresholds in Grandis, and the optimal upgrade order for maximum Meso returns.",
    koSlug:
      "6th-job-erda-fragment-upgrade-order-mastery-vs-origin-1replan-efficiency-guide",
    sections: [
      {
        heading:
          "1. The 6th Job Erda Fragment Dilemma in GMS Heroic (Reboot)",
        paragraphs: [
          "Reaching Lv. 260 and unlocking 6th Job in Global MapleStory (GMS) Heroic Server introduces the vital resource known as Erda Fragments. Because trading is disabled and all progression relies on self-sufficient farming, allocating your hard-earned Erda Fragments efficiently is critical. Upgrading the wrong core first can delay your ability to 1-shot mobs in Grandis maps, causing hidden Meso loss during your 2-hour Wealth Acquisition Potion (WAP) sessions. This guide details the optimal Erda Fragment allocation order for maximum WAP returns.",
        ],
      },
      {
        heading: "2. Core Upgrade Priority: Mastery Core vs Origin Skill",
        paragraphs: [
          "Data comparing the farming efficiency gains per 100 Erda Fragments invested across different 6th Job core types.",
        ],
        subsections: [
          {
            heading: "① Mastery Cores (Highest Farming ROI)",
            paragraphs: [],
            bullets: [
              "Efficiency Impact: Upgrading your primary mobbing mastery core increases skill damage lines, AOE range, and hit counts.",
              "WAP Yield Effect: Drastically lowers the stat threshold required to 1-shot monsters in Cernium, Odium, and Shangri-La, preventing mob leaks and preserving peak Mesos per hour.",
              "Recommended Milestone: Unlock Level 1 immediately, then push to Level 10 for the first major stat power spike.",
            ],
          },
          {
            heading: "② Origin Skills (Bossing Focus)",
            paragraphs: [],
            bullets: [
              "Efficiency Impact: Provides a massive burst binder and cutscene damage for bossing.",
              "WAP Yield Effect: While great for clearing elite bosses, the long cooldown offers lower continuous mobbing efficiency compared to Mastery Cores.",
              "Recommended Milestone: Unlock Level 1 for the bind utility, then defer further upgrades until Mastery and Boost Cores reach milestone levels.",
            ],
          },
        ],
      },
      {
        heading: "3. Long-Term Value: Selling vs Investing Erda Fragments",
        paragraphs: [
          "In GMS Heroic, Erda Fragments cannot be sold. Therefore, every fragment used directly accelerates your account's Meso farming capacity.",
        ],
        subsections: [
          {
            heading: "① Accelerating Map Progression",
            paragraphs: [],
            bullets: [
              "Moving to Higher Map Tiers: Investing Erda Fragments into Mastery Cores allows you to move from Cernium (~400M Mesos/WAP) to Odium (~500M+ Mesos/WAP) much faster.",
              "Net Meso Multiplier: Securing 1-shot capability in higher Authentic Force regions yields an additional 100M+ Raw Mesos per 2-hour WAP session.",
            ],
          },
        ],
      },
      {
        heading:
          "Conclusion: Prioritize Mastery Cores for Maximum WAP Profits",
        paragraphs: [
          "To optimize your daily Heroic progression, follow the core priority route: Mastery Core Lv. 1 ➔ Key 5th Job Skill Cores ➔ Mastery Core Lv. 10 ➔ Origin Skill. Always track your daily fragment drops and mob kill rates using our live Meso Calculator tool.",
        ],
      },
    ],
  },
  {
    slug: "gms-heroic-sol-erda-energy-farming-vs-fragment-exchange-wap-opportunity-cost-guide",
    title:
      "GMS Heroic Sol Erda Energy Farming vs Fragment Exchange: 2-Hour WAP Opportunity Cost Guide",
    description:
      "GMS Heroic Sol Erda Energy farming vs Erda Fragment exchange—2-hour WAP yields, 9-unit hard cap rules, Grandis daily quest priority, and opportunity cost analysis.",
    koSlug:
      "sol-erda-cap-1replan-opportunity-cost-fragment-convert-vs-hunt-margin-guide",
    sections: [
      {
        heading: "1. The Sol Erda Bottleneck in GMS Heroic (Reboot)",
        paragraphs: [
          "Unlocking and upgrading 6th Job skills in Global MapleStory (GMS) Heroic Server requires two fundamental progression materials: Erda Fragments and Sol Erda Energy. While Erda Fragments drop directly from Grandis monsters, Sol Erda Energy comes with a strict hard cap of 9 Sol Erda units per character.",
          "Because trade is disabled in Heroic Server and all account progression relies on self-funded farming, managing your Sol Erda Energy flow without wasting 2-hour Wealth Acquisition Potion (WAP) potential is critical. Converting Erda Fragments into Sol Erda prematurely can severely slow down your long-term Mastery Core progression. This guide analyzes the true opportunity costs and farming yields for Sol Erda Energy.",
        ],
      },
      {
        heading: "2. Sol Erda Farming Rates per 2-Hour WAP Session",
        paragraphs: [
          "Data measured over full 2-hour WAP sessions with a standard Heroic end-game setup (+100% Meso gear cap, +67%~100% Item Drop Rate, full 1-shot mob clear).",
        ],
        subsections: [
          {
            heading: "① Raw Sol Erda Energy Mob Farming Yields",
            paragraphs: [],
            bullets: [
              "WAP Energy Yield: ~200 to 300 Sol Erda Energy per 2-hour WAP session (1 Complete Sol Erda = 1,000 Energy).",
              "Time to Craft 1 Full Sol Erda: Mobbing alone requires approximately 3.5 to 4 WAP sessions (7 to 8 hours) to craft 1 complete Sol Erda unit.",
            ],
          },
          {
            heading:
              "② Exchanging 20 Erda Fragments for 1 Sol Erda (Opportunity Cost)",
            paragraphs: [],
            bullets: [
              "System Exchange Rate: 20 Erda Fragments ➔ 1 Complete Sol Erda.",
              "Opportunity Cost Analysis: In GMS Heroic, since Erda Fragments directly feed your Mastery Cores for permanent damage boost, converting 20 fragments into Sol Erda sacrifices vital damage scaling. Only use this exchange if your Sol Erda Energy is completely depleted right before hitting a major core milestone (e.g., Mastery Core Lv. 10 or Lv. 20).",
            ],
          },
        ],
      },
      {
        heading:
          "3. Three Essential Rules to Prevent Sol Erda Cap Overflow",
        paragraphs: [
          "To ensure zero energy is wasted while grinding in high Authentic Force regions like Odium and Shangri-La:",
        ],
        subsections: [
          {
            heading: "① Prioritize the Grandis Daily Quest (+600 Energy)",
            paragraphs: [
              "Always complete your Grandis daily quest first. The +600 Sol Erda Energy reward equals nearly two full 2-hour WAP grinding sessions in raw energy value, saving you dozens of hours of mobbing over time.",
            ],
          },
          {
            heading: "② Avoid the 9 Sol Erda Hard Cap Wastes",
            paragraphs: [
              "Never enter a 2-hour WAP session with 8 or 9 Sol Erda stored in your inventory. Any excess energy gained over the 9 Sol Erda cap vanishes permanently. Always upgrade a skill core to free up at least 2 to 3 energy slots before popping a WAP.",
            ],
          },
          {
            heading: "③ Character-Bound Limitation",
            paragraphs: [
              "Sol Erda Energy is strictly character-bound and cannot be transferred across your account. Focus your energy grinding on your primary main character first before setting up bossing mules.",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        bullets: [
          "Q. Does Item Drop Rate increase Sol Erda Energy drops?",
          "A. Yes. Maintaining at least +67% Item Drop Rate guarantees maximum mob node drop frequency, which directly stabilizes your Sol Erda Energy accumulation per WAP.",
          "Q. Should I craft Sol Erda for Bossing Mules?",
          "A. No. Rely strictly on daily quests for bossing mules. Save your active WAP grinding sessions and Erda Fragment investments exclusively for your main character.",
        ],
      },
      {
        heading:
          "Conclusion: Optimize Your WAP Progress Through Smart Energy Management",
        paragraphs: [
          "Plan your 6th Job core upgrades systematically around your daily WAP grind schedule. Always track your total fragment drops, raw Meso gains, and energy accumulation using our live Meso Calculator tool.",
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
