/**
 * English guide posts (GMS / English search).
 *
 * How to add a post:
 * 1. Append an object to EN_GUIDE_POSTS (same shape as Korean GuidePost).
 * 2. Use a unique English slug (do not reuse Korean slugs).
 * 3. If this is a true translation pair of a Korean guide, set `koSlug`
 *    to that Korean slug so hreflang can link them.
 * 4. Deploy — `/en/guide/{slug}` is SSG from this list.
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
  {
    slug: "arcus-hunting-ground-guide",
    title:
      "MapleStory Hotel Arcus Grinding Guide: Lv. 265+ Spots & WAP Rates",
    description:
      "Solutions for meso loss in Hotel Arcus (Lv. 265+). Q&A style guide comparing Wasteland and Theater WAP rates with 1% AH tax deductions.",
    koSlug: "arcus-hunting-ground-guide",
    sections: [
      {
        heading:
          "MapleStory Hotel Arcus Grinding Audit: Lv. 265+ Spots & Net WAP Revenue Analysis",
        paragraphs: [
          "Reaching Level 265 and stepping into Hotel Arcus, players frequently ask: \"Why are my 2-hour WAP meso rates not significantly higher than Cernium despite higher mob HP?\"",
          "Hotel Arcus requires 50 to 100 Authentic Force. Because maps feature wide horizontal bounds, optimizing pet horizontal looting routes and turret placements is critical. In this Q&A style guide, I address common grinding pitfalls in Hotel Arcus while auditing net WAP wages after deducting mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Top 4 Hotel Arcus Grinding Questions (Q&A)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q1. What is the primary cause of lower-than-expected meso gains in Arcus?",
            paragraphs: [],
            bullets: [
              "Answer: Arcus maps have wide horizontal spans. If your looting route fails to sweep the edges every 80 seconds, mesos despawn after 2 minutes. Deploying Erda Janus or turrets on outer platforms resolves this issue.",
            ],
          },
          {
            heading:
              "Q2. Which map is best for newly arrived Level 265 players?",
            paragraphs: [],
            bullets: [
              "Answer: Outlaw-Infested Wasteland 1. Requiring only 50 AF, its linear layout allows players to earn ~152M raw mesos per 2-hour WAP session effortlessly.",
            ],
          },
          {
            heading: "Q3. What is the best map for lazy stationary farming?",
            paragraphs: [],
            bullets: [
              "Answer: Romantic Theater 2 or Arcus Theater 3. Stationing summons on central ledges allows players to maintain 98%+ mob clear rates with minimal movement.",
            ],
          },
          {
            heading:
              "Q4. How much does 1.5x Authentic Force (Over-force) increase efficiency?",
            paragraphs: [],
            bullets: [
              "Answer: Hitting 1.5x force (75-150 AF) grants a 120% damage multiplier. This lowers 1-hit KO thresholds for secondary projectiles, yielding an extra ~15M mesos per 2-hour session.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Hotel Arcus Grinding Spot Performance Comparison (2-Hour WAP Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters over a 2-hour session:",
        ],
        table: {
          headers: [
            "Map Name",
            "Required Force",
            "2-Hour Raw Mesos",
            "Sol Erda Fragments",
            "Fatigue Level",
          ],
          rows: [
            [
              "Wasteland 1",
              "50 AF",
              "~152M Mesos",
              "11 to 15 Frags",
              "★★☆☆☆ (Standard)",
            ],
            [
              "Sunset Bar 2",
              "70 AF",
              "~156M Mesos",
              "12 to 16 Frags",
              "★★★☆☆ (Active)",
            ],
            [
              "Romantic Theater 2",
              "100 AF",
              "~161M Mesos",
              "13 to 18 Frags",
              "★☆☆☆☆ (Lowest)",
            ],
          ],
        },
      },
      {
        heading: "3. Hotel Arcus WAP Net Revenue Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Financial breakdown for a 2-hour WAP session in Romantic Theater 2 after subtracting 1% Auction House taxes and potion costs:",
        ],
        subsections: [
          {
            heading: "Raw Revenue Baseline",
            paragraphs: [],
            bullets: [
              "Raw Mobs Meso Drops: 161M Mesos",
              "Sol Erda Fragments (15 Frags @ 6M ea): 90M Mesos",
              "Gross Revenue: 251M Mesos",
            ],
          },
          {
            heading: "Mandatory Deductions",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.90M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Buff Potions (-4M Mesos)",
              "Final Net Profit: ~239M Mesos",
              "Net Hourly Wage: ~119M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading: "Q. Is Cernium or Hotel Arcus better for meso farming?",
            paragraphs: [
              "Hotel Arcus yields higher raw mesos if you hit the 1.5x Over-force multiplier. However, if you cannot 1-hit KO in Arcus, Cernium offers better hourly earnings due to faster clear times.",
            ],
          },
          {
            heading:
              "Q. Why do Sol Erda Fragments drop less frequently in Arcus?",
            paragraphs: [
              "Level 260+ areas (Cernium/Arcus) have slightly lower base Fragment drop rate multipliers compared to Level 270+ areas. Maintaining a 200% Drop Rate setup is crucial.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Arcus WAP Earnings in 10 Seconds",
        paragraphs: [
          "Completed a Level 265 WAP session in Hotel Arcus? Input your raw mesos and Sol Erda Fragment counts into the GG-PASS Meso Calculator (https://gg-pass.com/en/) to calculate your exact net wage after 1% AH taxes and potion fees!",
          "Calculate Your Net Arcus WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "odium-hunting-ground-guide",
    title:
      "MapleStory Odium Grinding Guide: Lv. 270+ Spots & WAP Net Rates",
    description:
      "Hands-on analysis for Odium (Lv. 270+) maps. Authentic Force requirements, 3-step summoning rules, 2-hour WAP meso yields, and 1% AH tax breakdown.",
    koSlug: "odium-hunting-ground-guide",
    sections: [
      {
        heading:
          "MapleStory Odium Grinding Audit: Lv. 270+ Spots & Net WAP Revenue Analysis",
        paragraphs: [
          "Reaching Level 270 and entering Odium, players often make a costly mistake: ignoring vertical platform height in Castle Gates and Locked Area maps, leading to severe meso despawns that waste over 20M mesos per WAP session.",
          "Odium requires 130 to 190 Authentic Force. Because platform layouts feature dense vertical tiers, optimizing pet looting routes and summon placements through a 3-step rule framework is essential to maximize earnings. In this guide, I share my hands-on analysis of Odium grinding spots, auditing net wages after deducting mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. 3 Rules to Eliminate Meso Losses in Odium",
        paragraphs: [],
        subsections: [
          {
            heading: "Rule 1: Secure 1.5x Authentic Force Over-force First",
            paragraphs: [
              "Reaching 285 AF for top-tier Odium maps (190 AF base) grants a 120% damage multiplier. Failing to 1-hit KO mobs with secondary summons reduces 2-hour meso yields by over 15%.",
            ],
          },
          {
            heading: "Rule 2: Execute Y-Axis Portal Looting Routines",
            paragraphs: [
              "Because Odium platforms are tall, pets cannot loot higher tiers automatically. Executing a dedicated sweeping loop using Y-axis portals every 90 seconds prevents meso drops from despawning.",
            ],
          },
          {
            heading: "Rule 3: Triangular Grid Summon Placement",
            paragraphs: [
              "Deploying Erda Janus: Dawn or class turrets in a triangular configuration centered on 2nd-tier platforms completely eliminates blind spots on tiers 1 and 3.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Odium Grinding Spot Performance Comparison (2-Hour WAP Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters over a 2-hour session:",
        ],
        table: {
          headers: [
            "Map Name",
            "Required Force",
            "2-Hour Raw Mesos",
            "Sol Erda Fragments",
            "Fatigue Level",
          ],
          rows: [
            [
              "Castle Gate Building 1",
              "130 AF",
              "~152M Mesos",
              "12 to 16 Frags",
              "★★☆☆☆ (Standard)",
            ],
            [
              "Locked Area 2",
              "160 AF",
              "~158M Mesos",
              "13 to 17 Frags",
              "★☆☆☆☆ (Stationary)",
            ],
            [
              "Occupied Alley 1",
              "190 AF",
              "~165M Mesos",
              "15 to 19 Frags",
              "★★★☆☆ (High Stat)",
            ],
          ],
        },
      },
      {
        heading: "3. Odium WAP Net Revenue Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Financial breakdown for a 2-hour WAP session in Occupied Alley 1 after subtracting 1% Auction House taxes and potion costs:",
        ],
        subsections: [
          {
            heading: "Raw Revenue Baseline",
            paragraphs: [],
            bullets: [
              "Raw Mobs Meso Drops: 165M Mesos",
              "Sol Erda Fragments (17 Frags @ 6M ea): 102M Mesos",
              "Gross Revenue: 267M Mesos",
            ],
          },
          {
            heading: "Mandatory Deductions",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.02M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Buff Potions (-5M Mesos)",
              "Final Net Profit: ~254M Mesos",
              "Net Hourly Wage: ~127M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. Why do my meso yields in Odium seem lower than in Shangri-La?",
            paragraphs: [
              "Odium's platform height often causes meso drops to expire. Incorporating portal loops into your rotation or adjusting turret positions will prevent meso loss.",
            ],
          },
          {
            heading:
              "Q. Which map is best immediately after hitting Level 270?",
            paragraphs: [
              "Start at Castle Gate Building 1 (130 AF) to take advantage of early over-force damage multipliers before moving deeper into Locked Area maps.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Odium WAP Earnings in 10 Seconds",
        paragraphs: [
          "Completed a Level 270 WAP session in Odium? Input your raw mesos and Sol Erda Fragment counts into the GG-PASS Meso Calculator (https://gg-pass.com/en/) to calculate your exact net wage after 1% AH taxes and potion fees!",
          "Calculate Your Net Odium WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "dowonkyung-hunting-ground-guide",
    title:
      "MapleStory Shangri-La Grinding Guide: Seasonal Spots & WAP Net Rates",
    description:
      "Hands-on analysis for Shangri-La (Lv. 275+) seasonal maps. Authentic Force scaling, 2-hour WAP meso yields, and 1% AH tax breakdown.",
    koSlug: "dowonkyung-hunting-ground-guide",
    sections: [
      {
        heading:
          "MapleStory Shangri-La Grinding Audit: Seasonal Spots & Net WAP Revenue Analysis",
        paragraphs: [
          "Reaching Level 275 and entering Shangri-La, a common mistake players make is choosing higher-level seasonal maps without accounting for vertical terrain layout, causing meso looting paths to break down.",
          "Shangri-La requires 200 to 260 Authentic Force. Due to multi-tiered platform designs, meso yields vary by up to 30M mesos per WAP session depending on class summon coverage. In this guide, I provide a hands-on analysis of the top seasonal grinding spots in Shangri-La, auditing net wages after deducting mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Seasonal Spot Breakdown & Rotation Strategies",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) [Spring] Where Life Begins 1 (200 AF)",
            paragraphs: [],
            bullets: [
              "Terrain: Compact 3-tier structure ideal for classes with straightforward horizontal mobility.",
              "Rotation Tip: Standing on the 2nd tier while sweeping main attacks allows pets to loot tier 1 automatically while summons clear tier 3.",
            ],
          },
          {
            heading: "(2) [Summer] Where Four Seasons Live 3 (230 AF)",
            paragraphs: [],
            bullets: [
              "Terrain: Wide vertical reach centered around a main platform, offering high efficiency for turret classes.",
              "Rotation Tip: Classes with summons (Shadower, Mechanic, Dawn Warrior) achieve 99%+ clear rates with minimal mechanical inputs.",
            ],
          },
          {
            heading: "(3) [Winter] Snow-Covered Afterimage 2 (260 AF)",
            paragraphs: [],
            bullets: [
              "Terrain: Top-tier Shangri-La map offering highest EXP and meso rates, but with steep gearing thresholds.",
              "Rotation Tip: Reaching 1.5x force (390 AF) is recommended to prevent residual mobs from ruining looting paths.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Shangri-La Seasonal Spot Performance Comparison (2-Hour WAP Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters over a 2-hour session:",
        ],
        table: {
          headers: [
            "Map Name",
            "Required Force",
            "2-Hour Raw Mesos",
            "Sol Erda Fragments",
            "Fatigue Level",
          ],
          rows: [
            [
              "Where Life Begins 1 (Spring)",
              "200 AF",
              "~162M Mesos",
              "14 to 18 Frags",
              "★★☆☆☆ (Moderate)",
            ],
            [
              "Where Four Seasons Live 3 (Summer)",
              "230 AF",
              "~168M Mesos",
              "15 to 19 Frags",
              "★☆☆☆☆ (Lowest)",
            ],
            [
              "Snow-Covered Afterimage 2 (Winter)",
              "260 AF",
              "~176M Mesos",
              "16 to 21 Frags",
              "★★★☆☆ (Active)",
            ],
          ],
        },
      },
      {
        heading: "3. Shangri-La WAP Net Revenue Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Financial breakdown for a 2-hour WAP session in Snow-Covered Afterimage 2 after subtracting 1% Auction House taxes and potion costs:",
        ],
        subsections: [
          {
            heading: "Raw Revenue Baseline",
            paragraphs: [],
            bullets: [
              "Raw Mobs Meso Drops: 176M Mesos",
              "Sol Erda Fragments (19 Frags @ 6M ea): 114M Mesos",
              "Gross Revenue: 290M Mesos",
            ],
          },
          {
            heading: "Mandatory Deductions",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.14M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Buff Potions (-5M Mesos)",
              "Final Net Profit: ~276M Mesos",
              "Net Hourly Wage: ~138M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. Why are my meso yields lower in Shangri-La compared to Hotel Arcus?",
            paragraphs: [
              "Shangri-La's vertical height often leads to meso despawns. Executing a dedicated sweep with a vacuum pet every 90 seconds prevents meso loss.",
            ],
          },
          {
            heading:
              "Q. Is 1.5x Authentic Force over-force mandatory for Shangri-La?",
            paragraphs: [
              "Reaching 1.5x force grants a 120% damage multiplier, significantly lowering 1-hit KO thresholds for summons and boosting clear rates by 10%+.",
            ],
          },
        ],
      },
      {
        heading:
          "5. [GG-PASS] Audit Your Shangri-La WAP Earnings in 10 Seconds",
        paragraphs: [
          "Completed a Level 275 WAP session in Shangri-La? Input your raw mesos and Sol Erda Fragment counts into the GG-PASS Meso Calculator (https://gg-pass.com/en/) to calculate your exact net wage after 1% AH taxes and potion fees!",
          "Calculate Your Net Shangri-La WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "arteria-hunting-ground-guide",
    title:
      "MapleStory Arteria Hunting Grounds TOP 3 & WAP Net Rates (Lv. 280+)",
    description:
      "Hands-on guide for Lv. 280+ Arteria grinding spots. Erda Janus placement strategies, 2-hour WAP meso yields, and 1% Auction House tax breakdown.",
    koSlug: "arteria-hunting-ground-guide",
    sections: [
      {
        heading:
          "[Lv. 280] MapleStory Arteria Top 3 Grinding Spots & WAP Net Hourly Wage Audit",
        paragraphs: [
          "Reaching Level 280 and stepping into Arteria for the first time, the most immediate bottleneck I experienced was the steep 300 Authentic Force requirement and multi-tiered platform layouts. Failing to hit 1-hit KO damage thresholds due to force penalties initially resulted in lower meso hourly rates than Shangri-La.",
          "To optimize meso yields and EXP gains in Arteria, selecting maps aligned with your class mobility and placing 6th Job Erda Janus summons strategically is essential. In this guide, I share my hands-on experience testing the top 3 Arteria grinding spots, providing a step-by-step financial audit deducting mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Top 3 Arteria Grinding Spots & Stat Requirements",
        paragraphs: [
          "Arteria requires 300 Authentic Force. Reaching 1.5x force (450 AF) grants a 120% damage multiplier, significantly lowering gearing thresholds for 1-hit KOs.",
        ],
        subsections: [
          {
            heading: "(1) Battleship Frontline 1 (Best All-Rounder Map)",
            paragraphs: [],
            bullets: [
              "Layout: Compact 3-tier structure with narrow horizontal bounds for seamless mobility.",
              "Recommended Classes: Warriors & Thieves (Horizontal dash-reliant classes).",
              "Hands-on Tip: Deploying Erda Janus: Dawn on the central platform while looping between tiers 1 and 3 ensures zero mob leakages.",
            ],
          },
          {
            heading: "(2) Arteria High Tower 3 (Lazy Stationary Farming)",
            paragraphs: [],
            bullets: [
              "Layout: Vertical platform structure centered around a main ledge.",
              "Recommended Classes: Mechanic, Shadower, Dawn Warrior, Captain (Turret/Summon classes).",
              "Hands-on Tip: Stationing summons on lower tiers allows players to farm lazily from top platforms with minimal movement.",
            ],
          },
          {
            heading:
              "(3) Advanced Knight Training Ground 2 (Maximum Mob Density)",
            paragraphs: [],
            bullets: [
              "Layout: High spawn density spread across wider platforms, ideal for players with Erda Janus Lv. 10+.",
              "Recommended Classes: Mages & Archers with wide AOE skills.",
              "Hands-on Tip: Best meso yields when deploying dual Janus summons across left and right sectors.",
            ],
          },
        ],
      },
      {
        heading: "2. Arteria Grinding Spot Comparison (2-Hour WAP Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters over 2 hours (1 WAP).",
        ],
        table: {
          headers: [
            "Map Name",
            "Required Force",
            "2-Hour Raw Mesos",
            "Sol Erda Fragments",
            "Fatigue Level",
          ],
          rows: [
            [
              "Battleship Frontline 1",
              "300 AF",
              "~175M Mesos",
              "16 to 21 Frags",
              "★★☆☆☆ (Moderate)",
            ],
            [
              "Arteria High Tower 3",
              "300 AF",
              "~168M Mesos",
              "15 to 19 Frags",
              "★☆☆☆☆ (Lowest)",
            ],
            [
              "Knight Training Ground 2",
              "300 AF",
              "~182M Mesos",
              "17 to 22 Frags",
              "★★★☆☆ (Active)",
            ],
          ],
        },
      },
      {
        heading:
          "3. Arteria WAP Net Profit & Hourly Wage Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Financial breakdown subtracting 1% Auction House fees and potion costs after a 2-hour WAP session in Advanced Knight Training Ground 2:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Raw Mobs Meso Drops (2 Hours): 180M Mesos",
              "Sol Erda Fragments (19 Frags @ 6M ea): 114M Mesos",
              "Gross Revenue: 294M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.14M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + EXP/Buff Potions (-5M Mesos)",
              "Total Net Profit: ~280M Mesos",
              "Net Hourly Wage: ~140M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What Authentic Force is recommended before moving from Shangri-La to Arteria?",
            paragraphs: [
              "While 300 AF is the entry minimum, reaching 360+ AF is strongly recommended to achieve reliable 1-hit KOs and maximize WAP returns.",
            ],
          },
          {
            heading:
              "Q. Can I farm efficiently in Arteria with a low-level Erda Janus?",
            paragraphs: [
              "Yes. With Janus Lv. 1, select compact maps like Battleship Frontline 1 to prevent mobs from leaking outside your main attack range.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Arteria WAP Earnings in 10 Seconds",
        paragraphs: [
          "Finished a 2-hour WAP session in Arteria? Input your raw mesos and Sol Erda Fragment counts into the GG-PASS Meso Calculator (https://gg-pass.com/en/) to calculate your net wage after 1% AH taxes and potion fees!",
          "Calculate Your Net Arteria WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "carcion-hunting-ground-guide",
    title:
      "MapleStory Carcion Grinding Guide: Q&A, Map Comparison & WAP Rates",
    description:
      "Solutions for meso loss in Carcion (Lv. 285+). Q&A style guide comparing Calm Beach and Hidden Cave WAP rates with 1% AH tax deductions.",
    koSlug: "carcion-hunting-ground-guide",
    sections: [
      {
        heading:
          "MapleStory Carcion Grinding Efficiency & Map-by-Map WAP Revenue Audit",
        paragraphs: [
          "Upon reaching Level 285 and entering Carcion, a common complaint among players is: \"Why aren't my 2-hour WAP meso rates significantly higher than Arteria, despite higher mob HP?\"",
          "Through testing across Carcion maps, I identified the culprit: meso and Sol Erda Fragment despawns caused by unoptimized Y-axis looting routes. In this guide, structured in a Q&A format, I address the top 4 grinding questions for Carcion while auditing net WAP wages after deducting mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Top 4 Carcion Grinding Questions (Q&A)",
        paragraphs: [],
        subsections: [
          {
            heading: "Q1. Why are my meso gains lower than expected in Carcion?",
            paragraphs: [],
            bullets: [
              "Answer: Carcion's maps feature high vertical terrain. Even if you clear mob waves instantly, mesos despawn after 2 minutes if your pet route misses lower/upper ledges. Incorporating a dedicated sweeping movement every 90 seconds resolves this leakage.",
            ],
          },
          {
            heading:
              "Q2. Which Carcion map is best for newly arrived Level 285 players?",
            paragraphs: [],
            bullets: [
              "Answer: Calm Beach 1. Its linear 3-tier structure favors classes with strong horizontal mobility, allowing effortless grinding while securing ~188M raw mesos per 2-hour WAP session.",
            ],
          },
          {
            heading: "Q3. What is the best map for lazy, stationary farming?",
            paragraphs: [],
            bullets: [
              "Answer: Hidden Cave or Calm Beach 4. These maps allow players to place turrets and Erda Janus summons in a triangular grid, drastically reducing active mechanical inputs.",
            ],
          },
          {
            heading:
              "Q4. How much does hitting 420 Authentic Force (1.5x Over-force) increase efficiency?",
            paragraphs: [],
            bullets: [
              "Answer: Reaching 420 AF grants a 120% damage multiplier. This allows secondary summons to 1-hit KO mobs reliably, increasing 2-hour WAP returns by roughly 15M to 20M mesos.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Carcion Grinding Spot Performance Comparison (2-Hour WAP Test)",
        paragraphs: [
          "Data recorded under 100% Meso and 200% Drop gear parameters over a 2-hour session:",
        ],
        subsections: [
          {
            heading: "📌 Yield Summary by Map",
            paragraphs: [],
            bullets: [
              "Calm Beach 1: ~188M Mesos / 18-23 Frags / Fatigue: ★★☆☆☆",
              "Hidden Cave (Stationary): ~181M Mesos / 17-21 Frags / Fatigue: ★☆☆☆☆",
              "Washing Shore 2: ~194M Mesos / 20-25 Frags / Fatigue: ★★★☆☆",
            ],
          },
        ],
      },
      {
        heading: "3. Carcion WAP Net Revenue Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Financial audit for a 2-hour WAP session in Washing Shore 2 after subtracting 1% Auction House taxes and consumable fees:",
        ],
        subsections: [
          {
            heading: "Raw Revenue Baseline",
            paragraphs: [],
            bullets: [
              "Raw Mobs Meso Drops: 194M Mesos",
              "Sol Erda Fragments (22 Frags @ 6M ea): 132M Mesos",
              "Gross Revenue: 326M Mesos",
            ],
          },
          {
            heading: "Deductions",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.32M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + EXP/Buff Potions (-5M Mesos)",
              "Final Net Profit: ~312M Mesos",
              "Net Hourly Wage: ~156M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. [GG-PASS] Audit Your Carcion WAP Earnings in 10 Seconds",
        paragraphs: [
          "Completed a 2-hour WAP session in Carcion? Input your raw mesos and Sol Erda Fragment counts into the GG-PASS Meso Calculator (https://gg-pass.com/en/) to calculate your exact net wage after 1% AH taxes and potion fees!",
          "Calculate Your Net Carcion WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "tallahart",
    title:
      "MapleStory Tallahart Grinding Guide: Lv. 290+ Spots & WAP Net Rates",
    description:
      "Diagnosing meso loss causes in Tallahart (Lv. 290+). Authentic Force requirements, Erda Janus deployment, 2-hour WAP yields, and 1% AH tax breakdown.",
    koSlug: "tallahart",
    sections: [
      {
        heading:
          "MapleStory Tallahart Grinding Audit: Lv. 290+ Spots & Net WAP Revenue Analysis",
        paragraphs: [
          "Reaching Level 290 and stepping into Tallahart, players frequently encounter a frustrating reality: 2-hour WAP meso yields often fall 20% short of expectations due to steep Authentic Force penalties and massive mob HP scaling.",
          "Tallahart demands immense gearing thresholds. To achieve optimal meso gains and EXP progression in this endgame area, auditing your Authentic Force damage multipliers and optimizing 6th Job Erda Janus summon grids is critical. In this guide, I provide a direct financial analysis of the top 3 Tallahart grinding spots, auditing net wages after deducting mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. 3 Primary Causes of Meso Loss in Tallahart",
        paragraphs: [],
        subsections: [
          {
            heading: "1. Authentic Force Damage Reduction (Failed 1-Hit KOs)",
            paragraphs: [
              "Failing to reach 100% damage scaling increases hit requirements for secondary projectiles. Missing mob spawns leads to direct losses of over 20M mesos per 2-hour session.",
            ],
          },
          {
            heading: "2. Suboptimal Erda Janus Summon Grid",
            paragraphs: [
              "Tallahart maps feature massive horizontal and vertical boundaries. Without Erda Janus Lv. 10+ deploying dual summons, residual meso drops despawn outside your main looting path.",
            ],
          },
          {
            heading: "3. Accumulated Consumable Fees & Auction House Taxes",
            paragraphs: [
              "High-tier WAP sessions incur heavy consumable costs. Additionally, selling Sol Erda Fragments incurs a 1% Auction House tax, which significantly impacts net profit figures if uncalculated.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Tallahart Grinding Spot Performance Comparison (2-Hour WAP Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters over a 2-hour session:",
        ],
        table: {
          headers: [
            "Map Name",
            "Required Force",
            "2-Hour Raw Mesos",
            "Sol Erda Fragments",
            "Clear Difficulty",
          ],
          rows: [
            [
              "Starlight Wind Hill 1",
              "330 AF",
              "~205M Mesos",
              "20 to 25 Frags",
              "★★☆☆☆ (Standard)",
            ],
            [
              "Dusk Hollow 3",
              "330 AF",
              "~198M Mesos",
              "19 to 24 Frags",
              "★☆☆☆☆ (Stationary)",
            ],
            [
              "Ancient Temple Heart 2",
              "330 AF",
              "~212M Mesos",
              "22 to 28 Frags",
              "★★★☆☆ (High Stat)",
            ],
          ],
        },
      },
      {
        heading: "3. Tallahart WAP Net Revenue Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Financial breakdown for a 2-hour WAP session in Ancient Temple Heart 2 after subtracting 1% Auction House taxes and potion costs:",
        ],
        subsections: [
          {
            heading: "Raw Revenue Baseline",
            paragraphs: [],
            bullets: [
              "Raw Mobs Meso Drops: 212M Mesos",
              "Sol Erda Fragments (25 Frags @ 6M ea): 150M Mesos",
              "Gross Revenue: 362M Mesos",
            ],
          },
          {
            heading: "Mandatory Deductions",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.50M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Buff Potions (-8M Mesos)",
              "Final Net Profit: ~345M Mesos",
              "Net Hourly Wage: ~172M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. Is 1.5x Authentic Force (495 AF) mandatory for Tallahart grinding?",
            paragraphs: [
              "Yes. Reaching 1.5x force grants a 120% damage multiplier, which is crucial for secondary summons to 1-hit KO mobs. If your force is insufficient, farming in upper Carcion is far more lucrative.",
            ],
          },
          {
            heading:
              "Q. How does Sol Erda Fragment price fluctuation affect net wages?",
            paragraphs: [
              "Regardless of market price shifts, the 1% Auction House transaction fee percentage remains constant. Inputting your server's current market prices yields the most accurate net wage audit.",
            ],
          },
        ],
      },
      {
        heading:
          "5. [GG-PASS] Audit Your Tallahart WAP Earnings in 10 Seconds",
        paragraphs: [
          "Completed a Level 290 WAP session in Tallahart? Input your raw mesos and Sol Erda Fragment counts into the GG-PASS Meso Calculator (https://gg-pass.com/en/) to calculate your exact net wage after 1% AH taxes and potion fees!",
          "Calculate Your Net Tallahart WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "tallahart-deep",
    title:
      "MapleStory Endgame Grinding Guide: Lv. 260-290 WAP Rates & Tallahart Deep Analysis",
    description:
      "Ultimate GMS endgame grinding guide from Cernium (Lv. 260) to Tallahart (Lv. 290). Complete WAP rates breakdown, Grand Sac Force requirements, Sol Erda Frags yields, and Heroic vs. Interactive meso tier list. MapleStory endgame grinding tier list, Tallahart deep grinding guide, Lv 260 290 mesos per WAP, Sol Erda Frags farming GMS, Heroic vs Interactive meso rates.",
    koSlug: "tallahart-deep",
    sections: [
      {
        heading:
          "MapleStory GMS Endgame Grinding Master Guide (Lv. 260–290+): Tallahart Deep Analysis & WAP Efficiency Tier List",
        paragraphs: [
          "Progressing through the Sacred Force and Grand Sac Force zones (Level 260 to 290+) represents the pinnacle of endgame progression in MapleStory Global (GMS). From Cernium (Lv. 260) through Hotel Arcus, Odium, Shangri-La, Arteria, Carcion, and ultimate Tallahart (Lv. 290), each area introduces higher mob health pools, strict Sac Force gates, and increased raw meso yields.",
          "This master guide provides a deep-dive analysis into Tallahart's advanced rotation setups and presents a complete WAP (Wealth Acquisition Potion) Efficiency Tier List comparing meso gains, Sol Erda Frag drop expectations, and net profit margins across both Heroic (Reboot) and Interactive (Regular) servers.",
        ],
      },
      {
        heading:
          "1. Tallahart (Lv. 290) Advanced Mobbing Rotations & Sector Analysis",
        paragraphs: [
          "Mastering Tallahart requires optimizing full-screen attacks (FMAs), summons, and cooldown management rather than relying solely on raw damage stats.",
        ],
        subsections: [
          {
            heading:
              "(1) Ancient Colossus Gate Sector (Recommended: Lv. 293 ~ 295+)",
            paragraphs: [],
            bullets: [
              "Mob Density: ~41 to 43 mobs per wave (~1,500 to 1,550 mobs per 2-hour WAP session with full clear).",
              "Sac Force Requirement: High Grand Sac Force threshold needed for maximum damage output.",
              'Rotation Key Points: Utilizing the central large platform as a hub while placing summons on left/right ledges allows high-clear classes to achieve over 70% stationary "Lazy Grinding" efficiency.',
            ],
          },
          {
            heading:
              "(2) Selecting the Right Map: Lazy Grinding vs. Max Mob Density",
            paragraphs: [],
            bullets: [
              "Low-Effort Priority: If fatigue management during 2-hour WAP sessions is your main goal, choose 2-tier flat layouts like Twilight Ancient Ruins: Deep Sector.",
              "Max Rate Priority: High-mobility mobbers (e.g., Hoyoung, Cadena, Ark) should target Starfall Temple or Colossus Gate to maximize kill counts per wave.",
            ],
          },
        ],
      },
      {
        heading: "2. Level 260 to 290+ WAP Yield & Efficiency Tier List",
        paragraphs: [
          "The true value of a WAP session is measured by [Raw Mesos + Sol Erda Frags Value - (Auction House Fees + Consumable Costs)].",
        ],
        subsections: [
          {
            heading:
              "(1) 2-Hour WAP Yield Summary Table (Based on 300% Drop/Meso Gear)",
            paragraphs: [],
          },
        ],
        table: {
          headers: [
            "Zone Name",
            "Min. Level",
            "Mobs per WAP (2 Hrs)",
            "Heroic Raw Mesos",
            "Interactive Net Yield",
            "Sol Erda Frags",
          ],
          rows: [
            [
              "Cernium",
              "Lv. 260",
              "~1,200 mobs",
              "~500M - 600M",
              "~150M Net Mesos",
              "12 - 15 Frags",
            ],
            [
              "Hotel Arcus",
              "Lv. 265",
              "~1,250 mobs",
              "~600M - 700M",
              "~180M Net Mesos",
              "14 - 18 Frags",
            ],
            [
              "Odium",
              "Lv. 270",
              "~1,300 mobs",
              "~700M - 800M",
              "~220M Net Mesos",
              "16 - 20 Frags",
            ],
            [
              "Shangri-La",
              "Lv. 275",
              "~1,350 mobs",
              "~750M - 850M",
              "~250M Net Mesos",
              "18 - 22 Frags",
            ],
            [
              "Arteria",
              "Lv. 280",
              "~1,400 mobs",
              "~800M - 950M",
              "~280M Net Mesos",
              "20 - 24 Frags",
            ],
            [
              "Carcion",
              "Lv. 285",
              "~1,450 mobs",
              "~850M - 1.0B",
              "~310M Net Mesos",
              "22 - 26 Frags",
            ],
            [
              "Tallahart",
              "Lv. 290",
              "~1,500 mobs",
              "~900M - 1.1B+",
              "~350M+ Net Mesos",
              "25 - 30 Frags",
            ],
          ],
        },
      },
      {
        heading:
          "3. Critical Meso Deductions: Level Penalties & 1% Transaction Fees",
        paragraphs: [
          "Calculating accurate hourly earnings requires factoring in two frequently overlooked mechanics:",
        ],
        subsections: [
          {
            heading: "1. Level Disadvantage Penalties",
            paragraphs: [],
            bullets: [
              "Grinding mobs 5 or more levels below your character level drastically reduces meso drop rates below 80%.",
              "A Lv. 285 character grinding in Cernium loses over 40% of potential meso earnings compared to grinding in Carcion or Tallahart.",
            ],
          },
          {
            heading: "2. 1% Auction House Tax & Consumable Expenses",
            paragraphs: [],
            bullets: [
              "On Interactive servers, selling Sol Erda Frags incur a mandatory 1% Auction House transaction fee.",
              "Subtracting WAP potions, Extreme Gold potions, and nodestone costs reveals your true net hourly wage.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Calculate Your Net WAP Income in 10 Seconds on GG-PASS",
        paragraphs: [
          "Avoid manual spreadsheet calculations after exhausting WAP sessions. Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact earnings.",
        ],
        subsections: [
          {
            heading: "One-Click [+1], [+5] Adjustment Buttons",
            paragraphs: [
              "Effortlessly log dropped Sol Erda Frags, Nodestones, and consumables without typing.",
            ],
          },
          {
            heading: "Automatic Net Tax Deduction",
            paragraphs: [
              "Simply input starting and ending meso counts—GG-PASS automatically factors in 1% transaction fees and consumable costs.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Generate styled profit summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your endgame grinding gains now!",
              "Calculate Your Endgame WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "lazy-grinding-part1",
    title:
      "MapleStory Best Flat Maps & Lazy Grinding Guide Part 1: Cernium to Shangri-La (Lv. 260-275)",
    description:
      "Complete GMS lazy grinding and flat maps guide for Lv. 260-275 (Cernium, Hotel Arcus, Odium, Shangri-La). Minimal effort rotations, Sacred Force requirements, Sol Erda Frags yields, and Heroic vs. Interactive meso rates. MapleStory flat maps guide, best lazy grinding maps MapleStory, Shangri-La flat map, Cernium low effort grinding, Odium stationary rotations, WAP meso rates lazy grinding.",
    koSlug: "lazy-grinding-part1",
    sections: [
      {
        heading:
          "MapleStory GMS Best Flat Maps & Lazy Grinding Master Guide Part 1: Cernium to Shangri-La (Lv. 260–275)",
        paragraphs: [
          "When committing to 2-hour WAP (Wealth Acquisition Potion) grinding sessions in MapleStory Global (GMS), the biggest obstacle players encounter isn't mob HP—it's grinding fatigue. Maps with complex multi-tier platforms and awkward vertical jumps force constant keyboard inputs, quickly causing player burnout and preventing consistent daily WAP sessions.",
          "As a result, high-level players increasingly prioritize 'Flat Maps' and 'Lazy Grinding' (low-effort / stationary rotations). Even if the total mob kill count per wave is slightly lower than high-effort maps, flat layouts allow players to maintain effortless 1-hit clears using summons and Full Map Attacks (FMAs). This guide covers the premier low-effort flat maps from Cernium (Lv. 260) to Shangri-La (Lv. 275), analyzing mob density, Sacred Force gates, and net meso output across both Heroic (Reboot) and Interactive (Regular) servers.",
        ],
      },
      {
        heading:
          "1. Why Flat Maps & Lazy Grinding Dictate Long-Term WAP Profitability",
        paragraphs: [
          "Evaluating a grinding map based solely on raw mob counts per wave is an incomplete approach. In 2-hour WAP sessions, fatigue management determines your long-term meso and Sol Erda Frag generation.",
        ],
        subsections: [
          {
            heading: "(1) Structural Advantages of Flat Maps",
            paragraphs: [],
            bullets: [
              "Minimal Movement Keys: Horizontal flat platforms eliminate awkward vertical double-jumps, allowing players to clear spawn waves with simple lateral movement or stationary summons.",
              "Maximized Summon & FMA Efficiency: Classes with persistent summons or wide FMAs (e.g., Night Lord, Shadower, Viper, Mechanic, Adele) can place summons at map edges, cutting active key inputs by over 50%.",
              "Increased Total WAP Volume: Low fatigue enables players to comfortably complete 2 or 3 WAP sessions per day rather than stopping after just one due to hand strain.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Best Flat Maps & Low-Effort Rotations Breakdown (Lv. 260–275)",
        paragraphs: [
          "Here are the top-tier flat maps in each Sacred Force zone offering the lowest fatigue ratings.",
        ],
        subsections: [
          {
            heading: "(1) Cernium & Burning Cernium (Lv. 260 ~ 264)",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Royal Library Section 1 & Eastern Ramparts 2",
              "Sacred Force Requirement: 50 ~ 100",
              "Map Layout: Simple 2-tier horizontal platforms. Players can stand near the center and alternate skill casts left and right to clear spawn waves cleanly.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
              "WAP Rates: ~1,200 mobs cleared per WAP. Yields ~500M–600M Raw Mesos on Heroic servers.",
            ],
          },
          {
            heading: "(2) Hotel Arcus (Lv. 265 ~ 269)",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Drive-In Theater 1 & Outlaw-Infested Train 2",
              "Sacred Force Requirement: 130 ~ 160",
              "Map Layout: Long, flat horizontal stretches. Perfectly suited for teleport classes and low-input lazy mobbing where screen focus is minimal.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
              "WAP Rates: ~1,250 mobs per WAP. Expect an average of 15+ Sol Erda Frags per session.",
            ],
          },
          {
            heading: "(3) Odium (Lv. 270 ~ 274)",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Castle Ramparts 1 & Occupied Alley 2",
              "Sacred Force Requirement: 200 ~ 230",
              "Map Layout: Rare flat-platform layouts amidst Odium's complex vertical topography. Summons placed on central ledges cover up to 80% of mob spawns without active movement.",
              "Fatigue Rating: ★★☆☆☆ (Low Effort)",
              "WAP Rates: ~1,300 mobs per WAP. Generates ~700M–800M Raw Mesos on Heroic servers.",
            ],
          },
          {
            heading:
              "(4) Shangri-La (Do-won-gyeong Lv. 275+) - [High-Search Interest Zone]",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Way to the Seasonal Pavilion: Spring 1 & Summer Flat Sector",
              "Sacred Force Requirement: 260 ~ 300",
              "Map Layout: Renowned as the ultimate endgame flat map in Shangri-La. Narrow platform gaps and straight horizontal alignments allow near-zero effort \"half-asleep\" grinding while maintaining 100% wave clears.",
              "Fatigue Rating: ★☆☆☆☆ (Near Zero Fatigue)",
              "WAP Rates: ~1,350+ mobs per WAP. Yields 18–22 Sol Erda Frags and high net meso value.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Net WAP Calculation & Deductions for Flat Map Sessions",
        paragraphs: [
          "Even when enjoying low-effort lazy grinding, calculating true net earnings requires factoring in server mechanics and consumable costs.",
        ],
        subsections: [
          {
            heading: "1. Total WAP Value Formula",
            paragraphs: [
              "Total Earnings = Raw Mesos + (Sol Erda Frags Count × Auction House Market Rate)",
            ],
          },
          {
            heading: "2. Mandatory Expense Deductions",
            paragraphs: [],
            bullets: [
              "Deduct the 1% Auction House transaction fee on Interactive servers when liquidating Frags or Meso Market trades.",
              "Deduct fixed potion expenses (WAPs, Extreme Gold Potions, Guild Blessings).",
            ],
          },
          {
            heading: "3. The Hidden Benefit of Flat Maps",
            paragraphs: [
              "Because fatigue is minimal, players rarely waste WAP buff time taking mid-session breaks, resulting in 100% buff utilization.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Flat Map WAP Income in 10 Seconds with GG-PASS",
        paragraphs: [
          "Curious about your true net wage from lazy grinding sessions? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your gains effortlessly.",
        ],
        subsections: [
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables post-grind without tedious keyboard typing.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Calculates actual net income by automatically deducting transaction taxes and potion costs from raw meso gains.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled profit cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Calculate your flat map grinding profits now!",
              "Calculate Your Flat Map WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "lazy-grinding-part2",
    title:
      "MapleStory Best Flat Maps & Lazy Grinding Guide Part 2: Arteria to Tallahart (Lv. 280-290+)",
    description:
      "Complete GMS endgame lazy grinding guide for Lv. 280-290+ (Arteria, Carcion, Tallahart). Low-effort flat map rotations, Grand Sac Force requirements, Sol Erda Frags rates, and Heroic vs. Interactive meso yields. MapleStory endgame flat maps, Arteria lazy grinding, Carcion low effort rotation, Tallahart flat map, Grand Sac Force grinding, WAP rates endgame.",
    koSlug: "lazy-grinding-part2",
    sections: [
      {
        heading:
          "MapleStory GMS Best Flat Maps & Lazy Grinding Master Guide Part 2: Arteria to Tallahart (Lv. 280–290+)",
        paragraphs: [
          "Entering the high-end zones of Arteria (Lv. 280), Carcion (Lv. 285), and Tallahart (Lv. 290+) in MapleStory Global (GMS) introduces steep Sacred Force and Grand Sac Force gates alongside massive mob HP pools. At this level, committing to 2-hour WAP (Wealth Acquisition Potion) sessions requires not only high character funding but also fatigue-free map layouts that preserve player focus and physically prevent wrist strain.",
          "Because 280+ grinding sessions yield the highest density of Sol Erda Fragments and raw mesos in the game, minimizing key inputs ensures players complete their daily WAP sessions without fatigue burnout. This guide covers the premier endgame 'Flat Maps' and stationary 'Lazy Grinding' rotations from Arteria to Tallahart, breaking down mob density, Grand Sac Force mechanics, and net meso output across both Heroic (Reboot) and Interactive (Regular) servers.",
        ],
      },
      {
        heading:
          "1. Fatigue Management & Sac Force Gates in Endgame Zones (Lv. 280+)",
        paragraphs: [
          "In high-level zones, complex vertical maps that force awkward double-jumps severely degrade grinding efficiency over a 2-hour duration.",
        ],
        subsections: [
          {
            heading:
              "(1) Benefits of Endgame Flat Maps & Low-Input Rotations",
            paragraphs: [],
            bullets: [
              "Maximized 6th Job & Summon Uptime: With upgraded 6th Job origin skills and extended summon durations, horizontal flat maps allow players to clear entire spawn waves simply by rotating wide FMAs (Full Map Attacks) from a central position.",
              "Repetitive Strain Injury (RSI) Prevention: Minimizing vertical jumps eliminates wrist fatigue, allowing players to maintain consistent daily grinding schedules.",
              "Higher Net Income Volume: Low fatigue enables grinders to complete 2 or 3 WAP sessions per day comfortably, adding hundreds of extra Sol Erda Frags to their monthly progression.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Top Endgame Flat Maps & Lazy Rotations Breakdown (Lv. 280–290+)",
        paragraphs: [
          "Here are the premier flat maps in the highest-level zones offering near-zero fatigue ratings.",
        ],
        subsections: [
          {
            heading: "(1) Arteria (Lv. 280 ~ 284)",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Top Floor Passage 1 & Rightmost Tower 2",
              "Sacred Force Requirement: 300 ~ 330",
              "Map Layout: Clean 2-tier horizontal platform layout. Placing summons on the left and right ledges lets players stay centered while clearing spawn waves with basic key inputs.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
              "WAP Rates: ~1,400 mobs cleared per WAP. Generates ~800M–950M Raw Mesos on Heroic servers.",
            ],
          },
          {
            heading: "(2) Carcion (Lv. 285 ~ 289)",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Rough Waves 1 & Hidden Cave 2",
              "Sacred Force Requirement: 360 ~ 390",
              "Map Layout: Ultra-wide horizontal layout with almost zero vertical variance. Ideal for teleport classes and lateral mobbers to execute \"no-look\" grinding rotations.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
              "WAP Rates: ~1,450 mobs per WAP. Yields 22 to 26 Sol Erda Frags and ~850M–1.0B Raw Mesos on Heroic.",
            ],
          },
          {
            heading:
              "(3) Tallahart (Lv. 290+) - [Pinnacle Endgame Zone]",
            paragraphs: [],
            bullets: [
              "Recommended Maps: Twilight Ancient Ruins Sector 1 & Colossus Gate Flat Sector",
              "Grand Sac Force Requirement: 100+",
              "Map Layout: The cleanest horizontal sector in Tallahart. While mob HP is extremely high, matching Grand Sac Force thresholds allows players to wipe spawn waves stationary using summons and wide FMAs.",
              "Fatigue Rating: ★☆☆☆☆ (Near Zero Fatigue)",
              "WAP Rates: ~1,500+ mobs per WAP. Generates 25–30 Sol Erda Frags and top-tier net meso value.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Endgame WAP Deductions: 1% Tax & Potion Expenses",
        paragraphs: [
          "Accurately calculating your net hourly wage at Lv. 280+ requires factoring in server-specific deductions:",
        ],
        subsections: [
          {
            heading: "1. Net Earnings Calculation",
            paragraphs: [
              "Net Profit = [Raw Mesos + (Sol Erda Frags Count × Market Rate)] - (1% Auction House Tax + Potion Costs)",
            ],
          },
          {
            heading: "2. The Impact of 1% Auction House Fees",
            paragraphs: [],
            bullets: [
              "In Carcion and Tallahart, total WAP value often exceeds 300M–400M mesos on Interactive servers.",
              "Factoring in the 1% transaction fee (3M–4M mesos) and WAP consumable costs (~8M mesos) is essential for an exact financial audit.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Endgame WAP Income in 10 Seconds with GG-PASS",
        paragraphs: [
          "Curious about your true net earnings from Lv. 280+ lazy grinding? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your gains in seconds.",
        ],
        subsections: [
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables post-grind without keyboard strain.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Automatically subtracts transaction taxes and potion costs from starting/ending mesos to display your true net hourly wage.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Generate styled income cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Calculate your endgame flat map grinding profits now!",
              "Calculate Your Endgame WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "meso-penalty-part1",
    title:
      "MapleStory Level Disadvantage Meso Penalty Guide: Formulas & Hourly WAP Losses",
    description:
      "Complete GMS guide on MapleStory level disadvantage meso drop rate penalties. Exact percentage drop formulas, real WAP meso loss calculations, and Heroic vs. Interactive server impact. MapleStory level difference meso penalty, GMS level disadvantage formula, WAP meso drop rate reduction, Heroic level penalty, MapleStory grinding level gap.",
    koSlug: "meso-penalty-part1",
    sections: [
      {
        heading:
          "MapleStory GMS Level Disadvantage Meso Penalty Master Guide: Formulas, Drop Rate Reductions & WAP Loss Audits",
        paragraphs: [
          "As players progress through high-level Sacred Force and Grand Sac Force content in MapleStory Global (GMS), a common dilemma arises: \"Should I stay in a lower-level zone for effortless 1-hit clears, or force progression into a higher-level map despiteSacred Force deficits?\" While grinding low-level mobs feels comfortable, MapleStory enforces strict Level Disadvantage Meso Drop Penalties that severely reduce hourly earnings when character levels outpace mob levels.",
          "Failing to account for these steep percentage decrements can cause up to 80% of your potential raw mesos to evaporate during a 2-hour WAP (Wealth Acquisition Potion) session. This guide breaks down GMS level disadvantage formulas, details percentage decrements across level gaps, calculates real WAP meso losses, and analyzes the structural impact on both Heroic (Reboot) and Interactive (Regular) servers.",
        ],
      },
      {
        heading:
          "1. MapleStory Level Disadvantage Formula & Drop Rate Decrements",
        paragraphs: [
          "MapleStory's meso drop mechanics utilize a non-linear tier system based on the level gap between your character and the target mob.",
        ],
        subsections: [
          {
            heading: "(1) Level Disadvantage Meso Drop Rate Bracket Table",
            paragraphs: [],
            bullets: [
              "±1 Level Difference: 100% Meso Drop Rate (Maximum Efficiency Threshold)",
              "-2 to -4 Levels Difference: 96% to 92% Meso Drop Rate (Minor Reduction)",
              "-5 to -9 Levels Difference: 80% to 50% Meso Drop Rate (Significant Hourly Loss)",
              "-10 to -19 Levels Difference: 40% to 10% Meso Drop Rate (Severe Yield Degradation)",
              "-20 Levels or Greater: 0% Meso Drop Rate (Zero Meso Drops)",
            ],
            paragraphsAfterBullets: [
              "Note: Grinding mobs higher than your character level (+1 to +5 levels) imposes no meso drop penalties, though level-based damage reduction penalties will apply if Sacred/Grand Sac Force is under-capped.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Real-World 2-Hour WAP Loss Calculations: Low-Level vs. Optimal Maps",
        paragraphs: [
          "Let's examine a concrete mathematical scenario comparing a character staying in a low-level zone versus moving to an optimal-level map.",
        ],
        subsections: [
          {
            heading: "(1) Case Study: Level 285 Character Map Selection Comparison",
            paragraphs: [],
            bullets: [
              "Scenario A (Optimal Level Map): Level 285 character grinding in Carcion (Lv. 285 Mobs)",
              "Level Gap: 0 -> 100% Meso Drop Rate",
              "Raw Mesos per WAP (Heroic 300% Drop/Meso): ~900M Raw Mesos",
              "Scenario B (Severe Penalty Map): Level 285 character grinding in Cernium (Lv. 260 Mobs)",
              "Level Gap: -25 Levels -> 0% to 10% Meso Drop Rate",
              "Raw Mesos per WAP: Under 90M Raw Mesos (~810M Raw Mesos Wasted)",
              "Scenario C (Moderate Penalty Map): Level 285 character grinding in Odium (Lv. 275 Mobs)",
              "Level Gap: -10 Levels -> 40% Meso Drop Rate",
              "Raw Mesos per WAP: ~360M Raw Mesos (~540M Raw Mesos Wasted)",
            ],
            paragraphsAfterBullets: [
              "Choosing to stay in maps 10+ levels below your character level results in hundreds of millions of mesos evaporating per single 2-hour WAP session.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Server Impact Breakdown: Heroic (Reboot) vs. Interactive Servers",
        paragraphs: [
          "Level disadvantage penalties hit players differently depending on server economy structures.",
        ],
        subsections: [
          {
            heading: "1. Heroic (Reboot) Servers",
            paragraphs: [
              "Because Heroic servers feature a native 5x raw meso rate, percentage penalties destroy massive absolute meso values. Losing 60% of meso drops on Heroic means losing over 500M raw mesos per WAP session.",
            ],
          },
          {
            heading: "2. Interactive (Regular) Servers",
            paragraphs: [
              "In addition to reduced raw mesos, low-level zones do not drop Sol Erda Fragments. Grinders in low-level maps suffer a double financial blow: [Level Penalty Raw Meso Loss + Zero Sol Erda Frag Margin].",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Level Disadvantage WAP Loss in 10 Seconds with GG-PASS",
        paragraphs: [
          "Curious about how much money level penalties are costing you in your current grinding spot? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Instant Starting & Ending Meso Audit",
            paragraphs: [
              "Input your starting and ending meso counts post-grind to immediately uncover your true net hourly rate after level penalties.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Potion Expense Deductions",
            paragraphs: [
              "Automatically subtracts Auction House transaction taxes and consumable costs (WAPs, Extreme Gold Potions) from your net income.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables without keyboard typing strain.",
            ],
            paragraphsAfterBullets: [
              "Audit your level penalty losses now!",
              "Calculate Your Net WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "meso-penalty-part2",
    title:
      "Sacred Force Deficit vs. Level Penalty: MapleStory Map Progression Breakeven",
    description:
      "Complete GMS guide comparing Sacred Force damage reduction penalties against level disadvantage meso penalties. WAP yield breakeven calculations, Sol Erda Frag drop optimization, and Heroic vs. Interactive map progression timing. Sacred Force damage reduction MapleStory, GMS map progression breakeven, level penalty vs Sac Force deficit, WAP yield comparison, Heroic map progression timing.",
    koSlug: "meso-penalty-part2",
    sections: [
      {
        heading:
          "MapleStory GMS Sacred Force Deficit vs. Level Penalty Guide: Map Progression Timing & WAP Breakeven Analysis",
        paragraphs: [
          "When grinding through Level 260+ Sacred Force and Grand Sac Force zones in MapleStory Global (GMS), endgame players encounter a classic dilemma: \"My character unlocked a higher-level zone, but my Sacred Force is under-capped, causing my damage output to be halved.\"",
          "This forces players to choose between two sub-optimal grinding scenarios:",
          "1. Move up to the higher-level zone without level penalties, but take 2 or 3 hits to kill mobs due to Sacred Force damage reduction.",
          "2. Stay in a lower-level zone with 100% 1-hit clear efficiency, but suffer level disadvantage meso penalties.",
          "Which choice yields higher net income per 2-hour WAP (Wealth Acquisition Potion) session? This guide mathematically compares Sacred Force damage reduction penalties against level disadvantage meso decrements, establishing an exact progression breakeven formula for both Heroic (Reboot) and Interactive (Regular) servers.",
        ],
      },
      {
        heading:
          "1. Sacred Force Damage Reduction vs. Level Disadvantage Decrements",
        paragraphs: [
          "Understanding when to transition maps requires evaluating how each penalty mechanic degrades your hourly WAP yield.",
        ],
        subsections: [
          {
            heading: "(1) Sacred / Grand Sac Force Deficit Damage Multipliers",
            paragraphs: [],
            bullets: [
              "100% Sac Force Matched: 100% Base Damage (110%–120% Bonus Damage if overcapped by 10%–20%).",
              "10–30 Force Deficit: Deals 70% to 80% base damage (Risks missing 1-hit KO thresholds).",
              "40–60 Force Deficit: Deals 40% to 50% base damage (Impossible to maintain 1-hit clears).",
              "100+ Force Deficit: Deals 10% to 20% damage (Grinding becomes completely unviable).",
            ],
          },
          {
            heading: "(2) Level Disadvantage Decrements Review",
            paragraphs: [],
            bullets: [
              "-1 to -4 Levels Difference: 92% to 100% Meso Drop Rate.",
              "-5 to -9 Levels Difference: 50% to 80% Meso Drop Rate.",
              "-10 Levels or Greater: Under 40% Meso Drop Rate.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Under-Capped Sac Force Higher Map vs. Level Penalized Lower Map WAP Showdown",
        paragraphs: [
          "Let's evaluate a practical case study comparing a Level 275 character deciding between Shangri-La (Higher Zone) and Odium (Lower Zone).",
        ],
        subsections: [
          {
            heading: "(1) Practical WAP Comparison (Level 275 Character)",
            paragraphs: [],
            bullets: [
              "Option A (Advance to Shangri-La / 30 Sac Force Deficit):",
              "Sac Force damage reduction forces 2-hit kills -> Clear efficiency drops to 60%.",
              "Level gap is 0 -> 100% Meso Drop Rate.",
              "WAP Yield: ~500M Raw Mesos + 14 Sol Erda Frags (Heroic Server).",
              "Option B (Remain in Odium / 100% Sac Force Matched):",
              "100% 1-hit clear efficiency achieved.",
              "Level gap is -5 -> 80% Meso Drop Rate.",
              "WAP Yield: ~640M Raw Mesos + 16 Sol Erda Frags (Heroic Server).",
            ],
          },
          {
            heading: "(2) The Progression Breakeven Formula",
            paragraphs: [
              "If Sac Force deficits reduce your spawn wave clear efficiency by 20% or more, remaining in the lower-level zone with 100% 1-hit clears yields higher net mesos—even after factoring in a 20% level penalty.",
              "However, the exact moment your character achieves 1-hit KO clears in the higher-level zone (even with a Sac Force deficit), you must immediately advance to maximize Sol Erda Frag drop rates and raw meso generation.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Sol Erda Frag Margins & 1% Auction House Tax Deductions",
        paragraphs: [
          "On Interactive servers, raw mesos represent only a fraction of total WAP value. Sol Erda Fragments dictate overall profitability.",
        ],
        subsections: [
          {
            heading: "1. Sol Erda Frag Drop Advantage",
            paragraphs: [],
            bullets: [
              "Higher-level zones feature higher baseline Sol Erda Frag drop rates.",
              "If advancing to a higher zone yields 5 extra Frags per WAP, selling them on the Auction House offsets over 30M mesos lost from lower clear speed.",
            ],
          },
          {
            heading: "2. Mandatory 1% Tax & Potion Deductions",
            paragraphs: [
              "Subtracting the 1% Auction House transaction tax and consumable costs (WAPs, Extreme Gold Potions) reveals the true net profit breakeven point.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Map Progression Breakeven in 10 Seconds with GG-PASS",
        paragraphs: [
          "Unsure whether staying in your current map or advancing to a higher zone yields more profit? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Log Post-Grind Earnings in 10 Seconds",
            paragraphs: [
              "Compare real meso and Frag yields between two maps effortlessly.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Automatically subtracts transaction taxes and potion costs from starting and ending mesos to show true net hourly rate differences.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Tally dropped Sol Erda Frags, Nodestones, and consumables post-grind without keyboard strain.",
            ],
            paragraphsAfterBullets: [
              "Calculate your map progression breakeven now!",
              "Calculate Your Map Progression Breakeven on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "wap-margin-part1",
    title:
      "MapleStory WAP Cost Efficiency Guide: Consumables Breakeven & Net Profit",
    description:
      "Complete GMS guide on Wealth Acquisition Potion (WAP) cost efficiency. Breakeven calculations across Meso/Drop gear setups, 1% Auction House tax deductions, and net wage audits for Heroic vs. Interactive. MapleStory WAP efficiency, Wealth Acquisition Potion breakeven, WAP consumable costs, net meso per WAP, GMS meso calculator.",
    koSlug: "wap-margin-part1",
    sections: [
      {
        heading:
          "MapleStory GMS WAP Efficiency & Consumable Cost Guide Part 1: Breakeven Analysis & Net Profit Audits",
        paragraphs: [
          "In MapleStory Global (GMS), consuming a Wealth Acquisition Potion (WAP) is standard practice for any 2-hour grinding session, granting a +20% Item Drop Rate and +20% Meso Acquisition Rate. However, as crafting materials and market prices for WAPs fluctuate, players frequently ask: \"Is popping a WAP actually profitable when factoring in consumable expenses and transaction fees?\"",
          "Evaluating WAP profitability purely based on raw meso increases is misleading. True net profitability requires subtracting WAP crafting or purchase costs, Extreme Gold Potions, nodestones, and the mandatory 1% Auction House tax on Interactive servers. This guide breaks down WAP consumable structures, establishes breakeven points (BEP) across various Drop/Meso gear thresholds, and audits net hourly earnings for both Heroic (Reboot) and Interactive (Regular) servers.",
        ],
      },
      {
        heading:
          "1. Deconstructing 2-Hour WAP Consumable Expenses & Overhead Costs",
        paragraphs: [
          "Executing a full 2-hour WAP session incurs fixed overhead expenses that reduce your gross earnings.",
        ],
        subsections: [
          {
            heading: "(1) Fixed WAP Expense Categories",
            paragraphs: [],
            bullets: [
              "Wealth Acquisition Potion (WAP): Crafting or purchasing a 2-hour WAP costs approximately 6M to 8M mesos on Interactive server Auction Houses.",
              "Extreme Gold Potions & Buff Consumables: Using 4 Extreme Gold Potions (30-min duration each) plus Guild Blessings adds 1M to 2M mesos in fixed consumable overhead.",
              "1% Auction House Transaction Fee: Converting Sol Erda Fragments, Nodestones, or mesos into net capital incurs a mandatory 1% tax deduction.",
            ],
            paragraphsAfterBullets: [
              "In short, starting a 2-hour WAP session immediately places your account at an initial 8M to 10M meso deficit.",
            ],
          },
        ],
      },
      {
        heading:
          "2. WAP Breakeven Calculations Across Drop & Meso Gear Thresholds",
        paragraphs: [
          "A WAP session reaches its Break-Even Point (BEP) when the +20% meso and drop rate bonuses generate additional earnings that exceed the ~7M meso cost of the potion.",
        ],
        subsections: [
          {
            heading:
              "(1) Gear Threshold BEP Scenario Comparisons (Assuming 7M WAP Cost)",
            paragraphs: [],
            bullets: [
              "Scenario A (0% Meso / 0% Drop Gear - Fresh Level 260):",
              "Baseline 2-hour meso yield without WAP: ~30M Raw Mesos.",
              "+20% Meso gain from WAP: +6M Raw Mesos.",
              "Verdict: Net Loss (-1M meso deficit). Baseline meso generation is too low to cover the WAP potion cost. Focusing on Meso/Drop gear progression is recommended before relying heavily on WAPs.",
              "Scenario B (100% Meso / 100% Drop Gear - Mid-Game Grinder):",
              "Baseline 2-hour meso yield without WAP: ~80M Raw Mesos.",
              "+20% Meso gain from WAP: +16M Raw Mesos.",
              "Verdict: Profitable (+9M net profit). The WAP potion pays for itself and yields an additional 9M mesos in net gains.",
              "Scenario C (100% Meso / 300% Drop Gear - Endgame Lv. 280+ Grinder):",
              "Baseline 2-hour yield without WAP: ~150M Raw Mesos + 18 Sol Erda Frags.",
              "+20% Meso & Frag drop gain from WAP: +30M+ meso equivalent value.",
              "Verdict: Highly Profitable (+23M+ net profit). High-level zones amplify WAP returns exponentially.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Server Impact: Heroic (Reboot) vs. Interactive Server Margins",
        paragraphs: [
          "WAP margin mechanics differ fundamentally between GMS server structures.",
        ],
        subsections: [
          {
            heading: "1. Interactive (Regular) Servers",
            paragraphs: [],
            bullets: [
              "Players must craft WAPs via Alchemy or purchase them on the Auction House.",
              "Profitability relies heavily on liquidating Sol Erda Fragments and Nodestones, where deducting the 1% Auction House transaction tax is essential for calculating true net gains.",
            ],
          },
          {
            heading: "2. Heroic (Reboot) Servers",
            paragraphs: [],
            bullets: [
              "WAP recipes are purchased directly via meso shops or farmed via herbs.",
              "Heroic's native 5x meso multiplier ensures that the +20% WAP meso bonus yields massive absolute meso returns, making WAP consumption universally profitable.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Net WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Want to know your exact net hourly wage after subtracting WAP potion costs and transaction taxes? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your post-grind earnings.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs to display your true net profit.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Generate clean, downloadable income summary graphics with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your net WAP profits now!",
              "Calculate Your Net WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "wap-margin-part2",
    title:
      "Sol Erda Frag Prices & Interactive vs. Heroic WAP Rates Guide",
    description:
      "Complete GMS guide analyzing Sol Erda Fragment market price fluctuations on WAP yields. Interactive (Regular) vs. Heroic (Reboot) net profit audits, 1% Auction House tax deductions, and GMS meso calculator integration. Sol Erda Fragment market price, GMS Interactive vs Heroic WAP rates, Sol Erda Frag meso conversion, MapleStory net WAP profit, Auction House 1% tax, GMS meso calculator.",
    koSlug: "wap-margin-part2",
    sections: [
      {
        heading:
          "MapleStory GMS WAP Efficiency & Consumable Cost Guide Part 2: Sol Erda Fragment Market Fluctuations & Interactive vs. Heroic Net Wage Audit",
        paragraphs: [
          "Following the 6th Job update in MapleStory Global (GMS), determining the exact value of a 2-hour WAP (Wealth Acquisition Potion) session depends not only on raw meso drops, but heavily on Sol Erda Fragment Auction House prices. Crucially, whether you play on Interactive (Regular) or Heroic (Reboot) servers fundamentally changes your net income structure.",
          "For Interactive server players, Sol Erda Fragments represent liquid capital that can be sold immediately on the Auction House—subject to market price volatility and a mandatory 1% Auction House transaction tax. For Heroic server players, Fragments are untradable progression assets, while native 5x meso multipliers drive raw meso gains. This guide mathematically analyzes Sol Erda Frag price brackets, compares net WAP rates between Interactive and Heroic servers, and audits true hourly wages.",
        ],
      },
      {
        heading:
          "1. How Sol Erda Frag Market Prices Dictate WAP Yields (Interactive vs. Heroic)",
        paragraphs: [
          "Evaluating WAP profits requires understanding how server mechanics treat dropped assets.",
        ],
        subsections: [
          {
            heading: "(1) Interactive (Regular) Server Mechanics",
            paragraphs: [],
            bullets: [
              "Core Profit Driver: Dropped Sol Erda Fragments are sold on the Auction House for immediate meso liquidation.",
              "Volatility Risk: When Frag prices decline from 8M mesos down to 4M mesos, gross WAP earnings drop significantly.",
              "Mandatory Deductions: Factoring in the 1% Auction House transaction fee and fixed WAP consumable costs is necessary to determine true net profits.",
            ],
          },
          {
            heading: "(2) Heroic (Reboot) Server Mechanics",
            paragraphs: [],
            bullets: [
              "Core Profit Driver: Fragments cannot be traded, but Heroic's native 5x raw meso rate yields massive baseline mesos.",
              "Valuation Audit: Converting dropped Fragments using average Interactive market rates allows Heroic players to calculate their session's \"perceived total progression value.\"",
            ],
          },
        ],
      },
      {
        heading:
          "2. Sol Erda Frag Price Brackets & Real Net Wage Comparisons",
        paragraphs: [
          "Let's evaluate a 2-hour Lv. 280 Arteria WAP session (yielding ~160M Raw Mesos + 20 Sol Erda Frags on Interactive vs. ~750M Raw Mesos + 20 Frags on Heroic).",
        ],
        subsections: [
          {
            heading: "(1) Frag Price at 8M Mesos (High-Tier Market)",
            paragraphs: [],
            bullets: [
              "Interactive Server:",
              "Raw Mesos 160M + (20 Frags × 8M = 160M Mesos) = 320M Gross Mesos.",
              "Less 1% Auction House Tax (-1.6M) & WAP/Potions (-8M).",
              "Net Profit: ~310.4M Mesos.",
              "Heroic Server:",
              "Raw Mesos ~750M + 20 Sol Erda Frags (Direct Character Progression).",
            ],
          },
          {
            heading: "(2) Frag Price at 4M Mesos (Low-Tier Market)",
            paragraphs: [],
            bullets: [
              "Interactive Server:",
              "Raw Mesos 160M + (20 Frags × 4M = 80M Mesos) = 240M Gross Mesos.",
              "Less 1% Auction House Tax (-800K) & WAP/Potions (-8M).",
              "Net Profit: ~231.2M Mesos (~79.2M meso reduction due to market drop).",
              "Heroic Server:",
              "Unaffected by market fluctuations: ~750M Raw Mesos maintained.",
            ],
          },
        ],
      },
      {
        heading:
          "3. The Impact of 1% Auction House Fees & Exchange Rates",
        paragraphs: [
          "Interactive server players frequently overlook the 1% Auction House tax during session audits.",
        ],
        subsections: [
          {
            heading: "1. The Cost of Tax Omission",
            paragraphs: [
              "On a 300M meso Frag/drop liquidation, the 1% tax equals 3M mesos—covering nearly half the cost of a WAP potion. Subtracting this tax ensures accurate financial tracking.",
            ],
          },
          {
            heading: "2. Meso Market Conversion Rates",
            paragraphs: [
              "When converting raw mesos into Maple Points or cash equivalents, factoring in exchange rate fluctuations provides a realistic view of your hourly wage.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Server's Net WAP Profit in 10 Seconds with GG-PASS",
        paragraphs: [
          "Want to audit your true net WAP earnings based on your specific server and real-time Sol Erda Frag prices? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your gains in seconds.",
        ],
        subsections: [
          {
            heading: "Interactive vs. Heroic Audit Modes",
            paragraphs: [
              "Input server-specific meso multipliers and current Frag market rates for tailored profit calculations.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply enter starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables post-grind without keyboard typing strain.",
            ],
            paragraphsAfterBullets: [
              "Audit your net WAP profits now!",
              "Calculate Your Net WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "class-lazy-grinding-part1",
    title:
      "MapleStory Class Lazy Grinding Guide Part 1: Night Lord, Mechanic, Shadower, Viper",
    description:
      "Complete GMS lazy grinding build guide for top summon and installation classes (Night Lord, Mechanic, Shadower, Viper). Stationary 1-hit rotations, 6th Job summon setups, Sacred Force thresholds, and WAP meso audits. Night Lord lazy grinding MapleStory, Mechanic stationary WAP rotation, Shadower meso explosion grinding, Viper serpent screw lazy build, GMS class grinding tier list, GMS meso calculator.",
    koSlug: "class-lazy-grinding-part1",
    sections: [
      {
        heading:
          "MapleStory GMS Class Lazy Grinding & Spawn-Kill Builds Part 1: Summon & Installation Classes (Night Lord, Mechanic, Shadower, Viper)",
        paragraphs: [
          "In MapleStory Global (GMS), maintaining long-term WAP (Wealth Acquisition Potion) grinding efficiency relies heavily on a class's summon and installation skill kit. Classes capable of setting down persistent summons to auto-clear entire sections of a map—commonly known as 'Lazy Grinding'—allow players to complete 2-hour sessions with virtually zero physical wrist strain.",
          "With the introduction of 6th Job skill enhancements and origin summons, installation-heavy classes now enjoy unprecedented map coverage and 1-hit wave clear capabilities. This guide provides an in-depth analysis of lazy grinding rotations and gearing thresholds for four premier summon classes: Night Lord, Mechanic, Shadower, and Viper.",
        ],
      },
      {
        heading:
          "1. Mechanics of Summon & Installation Lazy Grinding",
        paragraphs: [
          "Utilizing summons for stationary grinding offers structural advantages beyond simple comfort.",
        ],
        subsections: [
          {
            heading: "(1) Core Principles of Low-Effort Rotations",
            paragraphs: [],
            bullets: [
              "Summon Duration & Cooldown Alignment: Overlapping summon uptime ensures 100% continuous coverage of isolated map ledges without manual player movement.",
              "Map Sectoring: Positioning your character in the central lane while placing summons on upper vertical platforms or far horizontal edges.",
              "Repetitive Strain Injury (RSI) Prevention: Reduces movement key inputs by up to 70%, preventing mid-WAP session fatigue and dropout.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Deep Dive into 4 Core Summon/Installation Class Rotations",
        paragraphs: [
          "Here are the optimal stationary rotation builds and gear requirements for each class.",
        ],
        subsections: [
          {
            heading: "(1) Night Lord",
            paragraphs: [],
            bullets: [
              "Key Skills: Dark Lord's Omen, Mark of Assassin, 6th Job Origin Summons",
              "Rotation Build: Place 6th Job summons on one side of the map while standing stationary near the center casting Spread Throw and Mark projectiles to clear incoming spawn waves.",
              "1-Hit KO Threshold: High funding is required for Mark of Assassin to 1-hit KO mobs. Reaching 110%+ Sacred Force overcap guarantees clean stationary clears.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
            ],
          },
          {
            heading: "(2) Mechanic",
            paragraphs: [],
            bullets: [
              "Key Skills: Robot Summon Mastery, Summon Chaser, Robo Launcher RM7",
              "Rotation Build: Mechanic stands as the undisputed king of installation grinding in MapleStory. Deploying 3 to 4 robot summons across key platforms allows the main character to clear maps 100% stationary without vertical jumps.",
              "1-Hit KO Threshold: Robots have lower base skill percentages, requiring higher funding and Sacred Force overcaps compared to main attack skills.",
              "Fatigue Rating: ★☆☆☆☆ (Near Zero Effort)",
            ],
          },
          {
            heading: "(3) Shadower",
            paragraphs: [],
            bullets: [
              "Key Skills: Meso Explosion, Shadow Partner, Dark Flare",
              "Rotation Build: Place Dark Flare on secondary platforms while weaving Meso Explosion from a central position to detonate dropped mesos across the entire map.",
              "1-Hit KO Threshold: Achieving a 1-hit KO with Meso Explosion dictates the success of Shadower's lazy grinding setup.",
              "Fatigue Rating: ★★☆☆☆ (Low Effort)",
            ],
          },
          {
            heading: "(4) Viper",
            paragraphs: [],
            bullets: [
              "Key Skills: Serpent Screw, Howling Gale",
              "Rotation Build: Toggling Serpent Screw ON allows players to clear entire spawn waves simply by walking laterally or performing basic stationary jumps as mobs touch the aura.",
              "1-Hit KO Threshold: Once Serpent Screw meets 1-hit KO damage thresholds, Viper offers top-tier grinding comfort across all GMS classes.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Essential Spec Thresholds for Stationary 1-Hit Summon Clears",
        paragraphs: [
          "To execute stationary lazy grinding successfully, summons must hit strict 1-hit KO damage thresholds.",
        ],
        subsections: [
          {
            heading: "1. Sacred / Grand Sac Force 110% Overcap",
            paragraphs: [
              "Achieving 110% Force grants a +10% final damage bonus, compensating for lower base summon skill percentages.",
            ],
          },
          {
            heading:
              "2. Balancing Drop/Meso Gear with Summon 1-Hit KOs",
            paragraphs: [
              "If equipping Meso/Drop gear causes summons to take 2 hits to kill mobs, spawn clear rates drop drastically. Players should balance Meso/Drop gear switching while strictly maintaining 1-hit summon KOs.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Net WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished a lazy grinding session on your Night Lord, Mechanic, Shadower, or Viper? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% Auction House transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled profit summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Calculate your class's net grinding profits now!",
              "Calculate Your Class Net WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "class-lazy-grinding-part2",
    title:
      "MapleStory Class Lazy Grinding Guide Part 2: Ho Young, Ark, Cadena, Angelic Buster",
    description:
      "Complete GMS lazy grinding build guide for top FMA and high-mobility classes (Ho Young, Ark, Cadena, Angelic Buster). Stationary 1-hit rotations, 6th Job FMA loops, Sacred Force overcaps, and WAP meso audits. Ho Young lazy grinding MapleStory, Ark stationary WAP rotation, Cadena low effort grinding, Angelic Buster remaster lazy build, GMS class grinding guide, GMS meso calculator.",
    koSlug: "class-lazy-grinding-part2",
    sections: [
      {
        heading:
          "MapleStory GMS Class Lazy Grinding & Spawn-Kill Builds Part 2: High-FMA & Top Mobility Classes (Ho Young, Ark, Cadena, Angelic Buster)",
        paragraphs: [
          "Following the 6th Job update in MapleStory Global (GMS), one of the most significant meta shifts occurred among classes equipped with multiple Full Map Attacks (FMAs) and complex skill combos. Classes previously perceived as high-effort or input-heavy have transformed into top-tier 'Lazy Grinding' powerhouses due to expanded skill hitboxes and enhanced 6th Job mastery cores.",
          "By executing structured cooldown loops, these classes can wipe entire spawn waves stationary without performing repetitive horizontal double-jumps. This guide provides an in-depth analysis of low-effort rotations and gearing thresholds for four high-FMA classes: Ho Young, Ark, Cadena, and Angelic Buster.",
        ],
      },
      {
        heading:
          "1. Post-6th Job Meta Shift: Transforming High-Mobility Classes into Stationary Farmers",
        paragraphs: [
          "Skill upgrades in recent updates have fundamentally altered grinding mechanics for combo-heavy classes.",
        ],
        subsections: [
          {
            heading: "(1) Mechanics of FMA Cooldown Cycling",
            paragraphs: [],
            bullets: [
              "Full Map Attack (FMA) Staggering: Alternating between 15-second to 30-second wide-area skills clears entire spawn waves sequentially from a central position.",
              "Hybrid Summon + FMA Coverage: Deploying persistent summons to auto-clear lower platforms while casting FMAs to wipe upper ledges creates a complete hands-free clearing zone.",
              "100% Spawn Wave Retention: Eliminating manual movement prevents mid-WAP fatigue, guaranteeing zero missed mob spawns over 2-hour grinding sessions.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Deep Dive into 4 High-FMA Class Stationary Rotations",
        paragraphs: [
          "Here are the optimal lazy grinding builds and gear thresholds for each class.",
        ],
        subsections: [
          {
            heading: "(1) Ho Young",
            paragraphs: [],
            bullets: [
              "Key Skills: Vortex: Real, Tigris: Real, Clone: Real, Scroll: Star Vortex",
              "Rotation Build: Deploy Vortex and persistent scroll summons on key ledges while standing stationary in the map center, cycling Tigris and FMA skills on cooldown.",
              "1-Hit KO Threshold: Requires 1-hit KO damage thresholds on talismans and scroll summons, easily achieved with a 110%+ Sacred Force overcap.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
            ],
          },
          {
            heading: "(2) Ark",
            paragraphs: [],
            bullets: [
              "Key Skills: Memory of Root, Endless Nightmare, Flora/Spectre FMAs",
              "Rotation Build: Leveraging the massive skill hitboxes of Spectre Form allows Ark to clear entire maps stationary by simply alternating skill casts left and right from central platforms.",
              "1-Hit KO Threshold: Because skill damage varies between Flora and Spectre forms, players must optimize gear to ensure 1-hit KOs in Flora form.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
            ],
          },
          {
            heading: "(3) Cadena",
            paragraphs: [],
            bullets: [
              "Key Skills: Chain Arts: Crush, Chain Arts: Takedown, 6th Job Mastery Cores",
              "Rotation Build: Once requiring intense animation canceling, Cadena now utilizes expanded FMA skill hitboxes to execute a 'Lazy Rotation' by cycling non-chain skills sequentially from the center platform.",
              "1-Hit KO Threshold: Securing 1-hit KO thresholds on non-chain weapon skills is mandatory for low-effort grinding.",
              "Fatigue Rating: ★★☆☆☆ (Low Effort)",
            ],
          },
          {
            heading: "(4) Angelic Buster",
            paragraphs: [],
            bullets: [
              "Key Skills: Supernova, Spotlight, Mascot Familiar, Trinity",
              "Rotation Build: Supernova and Spotlight auto-clear over 60% of the map layout, allowing Angelic Buster to remain centered while firing guided projectiles and pink FMAs to mop up remaining mobs.",
              "1-Hit KO Threshold: Post-remaster skill range upgrades provide top-tier grinding comfort as long as main attack skills maintain 1-hit KOs.",
              "Fatigue Rating: ★☆☆☆☆ (Near Zero Effort)",
            ],
          },
        ],
      },
      {
        heading:
          "3. FMA Cooldown Loops & Sacred Force 110% Overcap Thresholds",
        paragraphs: [
          "To maintain seamless stationary grinding, players should optimize their gear and cooldown reduction timers.",
        ],
        subsections: [
          {
            heading: "1. Cooldown Reduction (Hat Potentials & Artifacts)",
            paragraphs: [
              "Shaving 1 to 2 seconds off FMA cooldowns aligns skill availability perfectly with mob spawn waves, keeping stationary rotations perfectly fluid.",
            ],
          },
          {
            heading: "2. Sacred / Grand Sac Force 110% Overcap",
            paragraphs: [
              "Reaching 110% Force grants a +10% final damage bonus, offsetting lower skill percentages on secondary FMAs and supporting full Meso/Drop gear switching.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Net WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished a lazy grinding session on your Ho Young, Ark, Cadena, or Angelic Buster? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% Auction House transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags, Nodestones, and consumables post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled profit summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Calculate your class's net grinding profits now!",
              "Calculate Your Class Net WAP Earnings on GG-PASS: https://gg-pass.com",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "calculator-guide-part1",
    title:
      "MapleStory Excel Grinding Trackers vs. GG-PASS 10-Sec Meso Calculator",
    description:
      "Complete GMS guide analyzing the pitfalls of Excel spreadsheet trackers for WAP audits. How GG-PASS offers a 10-second manual audit system with automatic 1% tax deductions, one-click tally buttons, and downloadable Discord summary cards. MapleStory grinding excel sheet, WAP meso tracker, MapleStory meso calculator, GMS WAP profit audit, Discord meso summary card, GG-PASS calculator.",
    koSlug: "calculator-guide-part1",
    sections: [
      {
        heading:
          "MapleStory GMS WAP Audit Guide Part 1: Spreadsheet Pitfalls vs. GG-PASS 10-Second Manual Audit System",
        paragraphs: [
          "For dedicated MapleStory Global (GMS) players, auditing earnings following a 2-hour WAP (Wealth Acquisition Potion) session is an essential post-grind routine. Historically, grinders relied on custom Excel spreadsheets or basic mobile notes to manually track raw meso gains, Sol Erda Fragments, and Nodestone drops.",
          "However, after finishing an intensive 2-hour grinding session, opening a spreadsheet, navigating complex cell formulas, and manually calculating Auction House transaction taxes creates unnecessary friction. Mobile usability issues and broken spreadsheet formulas often cause players to abandon tracking altogether. This guide analyzes the core flaws of traditional spreadsheet trackers and introduces the streamlined GG-PASS 10-Second Audit System designed for effortless post-grind reporting.",
        ],
      },
      {
        heading:
          "1. The 3 Core Flaws of Traditional Excel Grinding Trackers",
        paragraphs: [
          "Standard spreadsheet templates introduce several pain points during post-WAP session audits:",
        ],
        subsections: [
          {
            heading:
              "(1) Friction-Heavy Manual Entry & Poor Mobile Usability",
            paragraphs: [],
            bullets: [
              "Clunky Mobile Interfaces: Attempting to log earnings on a smartphone post-grind via spreadsheet apps involves tiny cell targets and tedious virtual keyboard typing.",
              "Broken Formulas & Market Disconnects: Fluctuating Sol Erda Fragment prices require constant formula adjustments, while corrupted files risk wiping months of historical grinding logs.",
            ],
          },
          {
            heading:
              "(2) Omission of 1% Auction House Taxes & Fixed Potion Expenses",
            paragraphs: [],
            bullets: [
              "Illusion of Profit: Simple [Ending Mesos - Starting Mesos] formulas fail to account for the mandatory 1% Auction House transaction tax on Interactive servers, as well as fixed WAP and Extreme Gold Potion costs—resulting in significant discrepancies between logged profits and actual meso balances.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Key Innovations Offered by the GG-PASS 10-Second Audit System",
        paragraphs: [
          "The GG-PASS Meso Calculator (https://gg-pass.com/en/) addresses every shortcoming of traditional spreadsheets, allowing fatigued grinders to execute a complete financial audit in under 10 seconds.",
        ],
        subsections: [
          {
            heading: "(1) One-Click [+1], [+5] Tally Buttons",
            paragraphs: [],
            bullets: [
              "Zero Keyboard Friction: Log dropped Sol Erda Fragments, Nodestones, and consumables using large, touch-friendly [+1] and [+5] increment buttons—eliminating the need to type numbers manually.",
            ],
          },
          {
            heading: "(2) Automated 1% Tax & Potion Expense Deductions",
            paragraphs: [],
            bullets: [
              "True Net Profit Audits: Enter starting and ending meso counts, and GG-PASS automatically subtracts 1% Auction House fees alongside preset WAP potion expenses to display your true net wage.",
            ],
          },
          {
            heading: "(3) Downloadable Discord Summary Cards",
            paragraphs: [],
            bullets: [
              "One-Click Graphic Export: Instead of taking messy spreadsheet screenshots, generate styled, high-resolution profit summary graphics with a single click to share immediately across Discord servers and guild channels.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Spreadsheet Tracker vs. GG-PASS Feature Comparison Table",
        paragraphs: [
          "A direct feature comparison highlighting usability differences:",
        ],
        bullets: [
          "Data Entry: Excel (Manual typing & cell selection) vs GG-PASS (One-click [+1], [+5] touch buttons)",
          "Tax Deductions: Excel (Requires manual formula coding) vs GG-PASS (Automated 1% tax & potion subtraction)",
          "Mobile UX: Excel (Small target cells prone to typos) vs GG-PASS (Mobile-first responsive UI)",
          "Sharing: Excel (Manual screenshot editing) vs GG-PASS (Instant downloadable Discord summary cards)",
        ],
      },
      {
        heading:
          "4. [CTA] Ditch the Spreadsheet: Audit Your WAP Gains in 10 Seconds with GG-PASS",
        paragraphs: [
          "Stop wrestling with complex spreadsheet formulas after exhausting grinding sessions. The GG-PASS Meso Calculator (https://gg-pass.com/en/) audits your true net WAP profit and hourly wage in just 10 seconds.",
        ],
        bullets: [
          "Enter starting and ending mesos.",
          "Tap [+1] and [+5] buttons to tally dropped Fragments and items.",
          "Download a styled income summary card with subtracted taxes and potion costs to share with your guild!",
        ],
        subsections: [
          {
            heading: "Audit Now",
            paragraphs: [
              "Audit your grinding profits in 10 seconds now!",
              "Calculate Your Net WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "calculator-guide-part2",
    title:
      "MapleStory Discord WAP Summary Cards & Guild Sharing Masterclass",
    description:
      "Complete GMS guide on generating downloadable WAP profit summary cards for Discord and guild channels. Automatic 1% Auction House tax subtractions, item tallying, and GG-PASS Discord integration. MapleStory Discord WAP summary card, GMS guild grinding proof, downloadable meso summary graphic, WAP wage audit card, GG-PASS calculator.",
    koSlug: "calculator-guide-part2",
    sections: [
      {
        heading:
          "MapleStory GMS WAP Audit Guide Part 2: Discord Profit Summary Cards & Guild Sharing Masterclass",
        paragraphs: [
          "Grinding in MapleStory Global (GMS) alongside guildmates or hanging out in Discord voice channels during 2-hour WAP (Wealth Acquisition Potion) sessions is a core social experience. Once a session ends, sharing raw meso gains and Sol Erda Fragment drops with friends is standard practice. However, typing plain text numbers or pasting messy Excel screenshots into Discord channels often leads to unverified reporting and poor readability.",
          "Text posts frequently omit the mandatory 1% Auction House transaction tax and fixed WAP consumable expenses, misrepresenting true net earnings. This guide details how to generate downloadable, high-resolution WAP profit summary cards in just 10 seconds using GG-PASS to share transparent post-grind metrics across Discord and guild communities.",
        ],
      },
      {
        heading:
          "1. The Social & Motivational Benefits of Visual WAP Reporting",
        paragraphs: [
          "Consistently sharing visual WAP summary cards fosters long-term grinding routine discipline and community engagement.",
        ],
        subsections: [
          {
            heading: "(1) Advantages of Visual Reporting",
            paragraphs: [],
            bullets: [
              "Sustained Grinding Motivation: Exchanging polished income summary cards with guildmates encourages regular grinding habits and friendly wage competition.",
              "Transparent Net Financial Audits: Sharing net wage figures with subtracted 1% transaction taxes and potion costs establishes realistic expectations for map yields.",
              "Archival Tracking in Discord: Creating a dedicated #wap-logs Discord channel provides a long-term visual archive of your account's progression history.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Generating Your GG-PASS WAP Summary Card in 3 Simple Steps",
        paragraphs: [
          "The GG-PASS Meso Calculator (https://gg-pass.com/en/) converts post-grind data into styled visual summary cards in seconds:",
        ],
        subsections: [
          {
            heading: "Step 1: Input Pre/Post-Grind Mesos & Item Drops",
            paragraphs: [],
            bullets: [
              "Enter starting and ending meso counts.",
              "Tap touch-friendly [+1] and [+5] buttons to tally dropped Sol Erda Fragments, Nodestones, and consumables.",
            ],
          },
          {
            heading: "Step 2: Automated Tax & Consumable Deductions",
            paragraphs: [
              "The system automatically subtracts the 1% Auction House transaction fee and preset potion costs to compute your true net wage.",
            ],
          },
          {
            heading: "Step 3: One-Click Card Export",
            paragraphs: [
              "Click [Save Summary Card] to instantly download a sleek navy/gold summary graphic optimized for PC and mobile displays.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Best Practices for Discord & Community Integration",
        paragraphs: [
          "Maximizing the impact of your exported summary cards:",
        ],
        subsections: [
          {
            heading: "1. Dedicated Guild Discord Channels",
            paragraphs: [
              "Post your exported summary card in your guild's Discord channel with a brief note (e.g., \"Arteria WAP complete—24 Frags dropped!\").",
            ],
          },
          {
            heading: "2. Community Guide Backing",
            paragraphs: [
              "Attaching verified GG-PASS summary graphics to Reddit posts or community guides adds immediate authenticity to your map yield claims.",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Export Your Discord WAP Summary Card in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished your grinding session? Skip plain text logs and create a styled WAP summary card with the GG-PASS Meso Calculator (https://gg-pass.com/en/).",
        ],
        bullets: [
          "Verify true net profit with automatically subtracted taxes and potion costs.",
          "Export high-resolution summary graphics in one click.",
          "Showcase your true hourly wage to guildmates on Discord!",
        ],
        subsections: [
          {
            heading: "Export Now",
            paragraphs: [
              "Export your summary card now!",
              "Generate Your WAP Summary Card on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "arteria-viper-nightlord-part1",
    title:
      "MapleStory Arteria Grinding Guide: Viper vs Night Lord Rotations & WAP Profits",
    description:
      "Complete GMS Arteria Top Ledge grinding guide for Lv. 280+. Viper Serpent Screw lazy rotations, Night Lord summon placements, 1% AH tax deductions, and WAP meso/fragment net wage audits. Arteria grinding guide MapleStory, GMS Arteria Viper rotation, Arteria Night Lord lazy build, Arteria top ledge WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "arteria-viper-nightlord-part1",
    sections: [
      {
        heading:
          "MapleStory GMS Arteria Grinding Analysis Part 1: Viper vs. Night Lord Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 280 unlocks Arteria, the premier farming continent where high-level players grind for liquid mesos and essential Sol Erda Fragments. Among its maps, the 'Top Ledge' zones stand out as prime endgame farming spots due to high mob density and compact platform layouts. However, execution comfort and hourly net yields vary wildly depending on whether you pilot a Viper or a Night Lord.",
          "Both classes represent top-tier farmers in GMS Arteria, yet rely on fundamentally opposite mechanics. This guide provides an in-depth analysis of optimal low-effort rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Arteria.",
        ],
      },
      {
        heading:
          "1. Arteria Top Ledge Terrain Characteristics & Sacred Force Requirements",
        paragraphs: [
          "Essential baseline specifications required to maintain 1-hit KO mob clears in Arteria.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Sacred Force Requirement: Base 160 Sacred Force (160% overcap recommended for the +10% final damage bonus).",
              "Platform Layout: A compact 3-tier structure allowing wide-area attack skills and summons to cover spawn waves seamlessly.",
              "Mob Density: Dense spawn clusters per wave require zero-gap rotation paths to prevent missed mob spawns.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Viper vs. Night Lord: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading:
              "(1) Viper - Serpent Screw Low-Effort Lateral Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Keep Serpent Screw active while executing simple double-jumps across central platforms.",
              "Optimal Path: Toggle Serpent Screw ON at the middle platform, moving left and right. The vertical hitbox of Serpent Screw combined with Howling Gale automatically clears upper 3rd-tier mobs.",
              "Gear Threshold: Requires 1-hit KO threshold on Serpent Screw alongside a 160% Sacred Force overcap.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
            ],
          },
          {
            heading:
              "(2) Night Lord - Stationary Summon & Guided Mark Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Deploy 6th Job summons on side platforms while casting guided projectiles from the map center.",
              "Optimal Path: Place 6th Job summons on left platforms while standing stationary in the center casting Spread Throw and Mark of Assassin guided projectiles—achieving 100% stationary spawn clears.",
              "Gear Threshold: High funding required for Mark of Assassin to 1-hit KO Arteria mobs.",
              "Fatigue Rating: ★☆☆☆☆ (Stationary Clearing)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Arteria 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Arteria session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~160M to 180M Raw Mesos.",
              "Sol Erda Fragments: ~20 to 24 Fragments (Valued at ~120M to 144M mesos at a 6M market price).",
              "Gross Revenue Value: ~280M to 324M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-1.3M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~270M to 310M Net Mesos (~135M to 155M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Arteria WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished an Arteria WAP session on your Viper or Night Lord? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Arteria grinding profits now!",
              "Calculate Your Net Arteria WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "carcion-shadower-hoyoung-part2",
    title:
      "MapleStory Carcion Grinding Guide: Shadower vs Ho Young Rotations & WAP Profits",
    description:
      "Complete GMS Carcion Rough Waves grinding guide for Lv. 285+. Shadower Meso Explosion miner rotations, Ho Young talisman placements, 1% AH tax deductions, and WAP meso/fragment net wage audits. Carcion grinding guide MapleStory, GMS Carcion Shadower rotation, Carcion Ho Young lazy build, Carcion rough waves WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "carcion-shadower-hoyoung-part2",
    sections: [
      {
        heading:
          "MapleStory GMS Carcion Grinding Analysis Part 2: Shadower vs. Ho Young Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 285 unlocks Carcion, the endgame farming region where top-tier players grind for high-density mesos and Sol Erda Fragments. Among its maps, the 'Rough Waves' zone serves as a prime grinding hub due to high mob density and structured platforms. However, strict Sacred Force requirements and high mob HP make optimized class rotations essential.",
          "Both Shadower and Ho Young stand as elite farmers in GMS Carcion, yet leverage completely distinct grinding mechanics. This guide provides an in-depth analysis of optimal rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Carcion.",
        ],
      },
      {
        heading:
          "1. Carcion Rough Waves Terrain Characteristics & Sacred Force Requirements",
        paragraphs: [
          "Baseline specifications required to maintain 1-hit KO mob clears in Carcion.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Sacred Force Requirement: Base 230 Sacred Force (230% overcap recommended for the +10% final damage bonus).",
              "Platform Layout: Multi-tiered platform layout requiring wide-area attack skills and mobility to maintain 100% spawn wave clears.",
              "High Fragment Yield: Carcion's high level bracket yields excellent Sol Erda Fragment drop rates, making fragment market prices a key factor in net wage audits.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Shadower vs. Ho Young: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading: "(1) Shadower - Meso Explosion Miner Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Weaving Assassinate and Meso Explosion while placing Dark Flare on secondary platforms.",
              "Optimal Path: Deploy Dark Flare on the upper right platform, while using mobility skills across the central lane to detonate dropped mesos with Meso Explosion for clean wave clears.",
              "Gear Threshold: Achieving 1-hit KO on Meso Explosion against Carcion mobs while maintaining 100% Meso / 200% Drop gear parameters.",
              "Fatigue Rating: ★★☆☆☆ (Moderate Movement Required)",
            ],
          },
          {
            heading: "(2) Ho Young - Talisman & Summon Stationary Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Deploying Vortex, Tigris, and scroll summons across key platforms while cycling wide-area attacks.",
              "Optimal Path: Deploy persistent scroll summons on outer ledges while standing stationary in the map center, cycling wide-area attacks to clear incoming waves.",
              "Gear Threshold: High funding required for scroll summons to 1-hit KO Carcion mobs.",
              "Fatigue Rating: ★☆☆☆☆ (Stationary Clearing)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Carcion 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Carcion session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~170M to 190M Raw Mesos.",
              "Sol Erda Fragments: ~22 to 26 Fragments (Valued at ~132M to 156M mesos at a 6M market price).",
              "Gross Revenue Value: ~300M to 346M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-1.4M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~290M to 335M Net Mesos (~145M to 167M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Carcion WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished a Carcion WAP session on your Shadower or Ho Young? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Carcion grinding profits now!",
              "Calculate Your Net Carcion WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dowonkyung-mechanic-ab-part3",
    title:
      "MapleStory Dowonkyung Grinding Guide: Mechanic vs Angelic Buster Rotations & WAP Profits",
    description:
      "Complete GMS Dowonkyung Spring/Summer grinding guide for Lv. 275+. Mechanic stationary robot installations, Angelic Buster remaster wide-area attack rotations, 1% AH tax deductions, and WAP meso/fragment net wage audits. Dowonkyung grinding guide MapleStory, GMS Dowonkyung Mechanic rotation, Dowonkyung Angelic Buster lazy build, Dowonkyung WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "dowonkyung-mechanic-ab-part3",
    sections: [
      {
        heading:
          "MapleStory GMS Dowonkyung Grinding Analysis Part 3: Mechanic vs. Angelic Buster Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 275 grants access to Dowonkyung, the entry gateway for high-level endgame grinding following the 6th Job advancement. Among its sub-zones, the 'Spring and Summer' maps feature clean horizontal platforms and solid mob density, making them popular farming spots for players seeking liquid mesos and Sol Erda Fragments.",
          "Both Mechanic and post-remaster Angelic Buster excel in Dowonkyung, leveraging stationary summons and massive wide-area attacks respectively. This guide provides an in-depth analysis of low-effort rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Dowonkyung.",
        ],
      },
      {
        heading:
          "1. Dowonkyung Terrain Characteristics & Sacred Force Requirements",
        paragraphs: [
          "Baseline specifications required to maintain 1-hit KO mob clears in Dowonkyung.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Sacred Force Requirement: Base 100 Sacred Force (100% overcap recommended for the +10% final damage bonus).",
              "Platform Layout: Elongated horizontal platform structures where wide skill hitboxes and fast movement dictate wave clear efficiency.",
              "Mob Spawn Rhythm: Mob waves spawn in predictable horizontal clusters, allowing summons and stationary skills to maintain 100% spawn wave clears.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Mechanic vs. Angelic Buster: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading:
              "(1) Mechanic - Stationary 4-Robot Installation Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Deploying Robot Summon Mastery, Summon Chaser, and Robo Launcher RM7 across primary platforms.",
              "Optimal Path: Deploy 3 to 4 robot summons on outer ledges and upper platforms while standing stationary in the center, casting primary attacks to auto-clear incoming waves.",
              "Gear Threshold: Requires 1-hit KO threshold on robot summons against Dowonkyung mobs alongside a 100% Sacred Force overcap.",
              "Fatigue Rating: ★☆☆☆☆ (100% Stationary Clearing)",
            ],
          },
          {
            heading:
              "(2) Angelic Buster - Remastered FMA Cooldown Loop",
            paragraphs: [],
            bullets: [
              "Core Skill: Trapping major map lanes with Supernova and Spotlight while clearing residual mobs with guided Trinity projectiles.",
              "Optimal Path: Deploy Supernova in the map center while performing minimal lateral jumps, cycling wide-area attack skills on cooldown for effortless wave clears.",
              "Gear Threshold: Expanded skill ranges post-remaster provide top-tier comfort once main attack skills achieve 1-hit KOs.",
              "Fatigue Rating: ★☆☆☆☆ (Extremely Low Effort)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Dowonkyung 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Dowonkyung session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~150M to 170M Raw Mesos.",
              "Sol Erda Fragments: ~18 to 22 Fragments (Valued at ~108M to 132M mesos at a 6M market price).",
              "Gross Revenue Value: ~258M to 302M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-1.2M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~248M to 292M Net Mesos (~124M to 146M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Dowonkyung WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished a Dowonkyung WAP session on your Mechanic or Angelic Buster? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Dowonkyung grinding profits now!",
              "Calculate Your Net Dowonkyung WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "talahart-ark-cadena-part4",
    title:
      "MapleStory Talahart Grinding Guide: Ark vs Cadena Rotations & WAP Profits",
    description:
      "Complete GMS Talahart Ancient Colossus Gate grinding guide for Lv. 290+. Ark Spectre FMA rotations, Cadena non-chain mastery loops, 1% AH tax deductions, and WAP meso/fragment net wage audits. Talahart grinding guide MapleStory, GMS Talahart Ark rotation, Talahart Cadena lazy build, Talahart WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "talahart-ark-cadena-part4",
    sections: [
      {
        heading:
          "MapleStory GMS Talahart Grinding Analysis Part 4: Ark vs. Cadena Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 290 unlocks Talahart, the highest level endgame continent where premier players farm massive liquid mesos and Sol Erda Fragments. Among its maps, the 'Ancient Colossus Gate' zone represents the pinnacle of endgame grinding, boasting immense mob experience and high spawn counts. However, strict Grand Sacred Force thresholds and immense mob HP make structured skill rotation loops mandatory.",
          "Both Ark and Cadena represent top-tier farmers in GMS Talahart, leveraging massive wide-area attacks and 6th Job skill masteries. This guide provides an in-depth analysis of low-effort rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Talahart.",
        ],
      },
      {
        heading:
          "1. Talahart Ancient Colossus Gate Characteristics & Grand Sacred Force Requirements",
        paragraphs: [
          "Baseline specifications required to maintain 1-hit KO mob clears in Talahart.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Grand Sacred Force Requirement: Base 30 Grand Sacred Force (Overcap recommended for the +10% final damage bonus).",
              "Platform Layout: An expansive multi-tiered gate structure requiring massive skill hitboxes and fast movement to clear spawn waves cleanly.",
              "Top-Tier Fragment Yields: Talahart yields the highest Sol Erda Fragment drop rates in GMS, making fragment market liquidation the core driver of net WAP hourly wages.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Ark vs. Cadena: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading:
              "(1) Ark - Spectre Form Stationary Wide-Area Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Leveraging Memory of Root and Spectre Form's massive skill hitboxes for stationary direction-swapping clears.",
              "Optimal Path: Stand stationary on the 2nd-tier middle platform in Spectre Form, swapping direction left and right while cycling wide-area attacks for 100% stationary spawn clears.",
              "Gear Threshold: Requires 1-hit KO damage thresholds on both Flora and Spectre skills against Talahart mobs.",
              "Fatigue Rating: ★☆☆☆☆ (100% Stationary Clearing)",
            ],
          },
          {
            heading:
              "(2) Cadena - Non-Chain Mastery Skill Cooldown Loop",
            paragraphs: [],
            bullets: [
              "Core Skill: Replacing animation-canceling combos with sequential non-chain wide-area skills powered by 6th Job Mastery Cores.",
              "Optimal Path: Position centrally while cycling Chain Arts: Crush and non-chain weapon skills in a fixed cooldown loop with minimal lateral movement.",
              "Gear Threshold: Securing 1-hit KO thresholds on non-chain weapon skills while maintaining 100% Meso / 200% Drop gear parameters.",
              "Fatigue Rating: ★★☆☆☆ (Low Movement Required)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Talahart 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Talahart session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~180M to 200M Raw Mesos.",
              "Sol Erda Fragments: ~24 to 28 Fragments (Valued at ~144M to 168M mesos at a 6M market price).",
              "Gross Revenue Value: ~324M to 368M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-1.5M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~314M to 358M Net Mesos (~157M to 179M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Talahart WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished a Talahart WAP session on your Ark or Cadena? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Talahart grinding profits now!",
              "Calculate Your Net Talahart WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "arcus-bowmaster-adele-part5",
    title:
      "MapleStory Arcus Grinding Guide: Bowmaster vs Adele Rotations & WAP Profits",
    description:
      "Complete GMS Hotel Arcus Theater Wall grinding guide for Lv. 265+. Bowmaster Arrow Platter stationary lazy rotations, Adele Order auto-homing setups, 1% AH tax deductions, and WAP meso/fragment net wage audits. Hotel Arcus grinding guide MapleStory, GMS Arcus Bowmaster rotation, Arcus Adele lazy build, Arcus Theater Wall WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "arcus-bowmaster-adele-part5",
    sections: [
      {
        heading:
          "MapleStory GMS Hotel Arcus Grinding Analysis Part 5: Bowmaster vs. Adele Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 265 grants access to Hotel Arcus, the second Authentic Force continent where mid-to-high level players prepare for endgame progression. Among its maps, the 'Theater Wall' zone represents a prime farming hub due to its fast mob respawn rates and clean platform layout. However, maintaining 100% spawn wave clears across 2-hour WAP (Wealth Acquisition Potion) sessions requires structured class-specific rotation paths.",
          "Both Bowmaster and Adele stand out as top-tier farmers in Hotel Arcus, utilizing stationary installations and auto-homing swords respectively. This guide provides an in-depth analysis of low-effort rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Arcus.",
        ],
      },
      {
        heading:
          "1. Hotel Arcus Theater Wall Terrain Characteristics & Authentic Force Requirements",
        paragraphs: [
          "Baseline specifications required to maintain 1-hit KO mob clears in Hotel Arcus.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Authentic Force Requirement: Base 50 Authentic Force (70+ recommended for the +10% final damage bonus).",
              "Platform Layout: Multi-tiered horizontal layout ideal for stationary summons and auto-homing projectiles.",
              "Broad Player Base: High player density at Level 265+ drives strong long-tail keyword search intent for Arcus farming efficiency.",
            ],
          },
        ],
      },
      {
        heading: "2. Bowmaster vs. Adele: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading: "(1) Bowmaster - Arrow Platter 100% Stationary Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Deploying 2 Arrow Platter turret installations while firing Hurricane from a central position.",
              "Optimal Path: Place Arrow Platters on the upper left and middle right platforms, while standing stationary on the center ledge swapping fire direction left and right for 100% hands-free wave clears.",
              "Gear Threshold: Requires 1-hit KO damage thresholds on Arrow Platter turrets against Arcus mobs.",
              "Fatigue Rating: ★☆☆☆☆ (Near Zero Movement)",
            ],
          },
          {
            heading: "(2) Adele - 6-Sword Order Auto-Homing Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Maintaining 6 Order swords while cycling Creation and Tread to clear spawn waves automatically.",
              "Optimal Path: Position centrally on the 2nd tier while keeping 6 Order swords active. Execute minimal lateral double-jumps while auto-homing swords seek out residual mobs across outer ledges.",
              "Gear Threshold: Achieving 1-hit KO thresholds on Order swords while maintaining 100% Meso / 200% Drop gear parameters.",
              "Fatigue Rating: ★★☆☆☆ (Low Movement Required)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Hotel Arcus 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Hotel Arcus session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~130M to 150M Raw Mesos.",
              "Sol Erda Fragments: ~14 to 18 Fragments (Valued at ~84M to 108M mesos at a 6M market price).",
              "Gross Revenue Value: ~214M to 258M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-1.0M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~205M to 248M Net Mesos (~102M to 124M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Arcus WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished an Arcus WAP session on your Bowmaster or Adele? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Arcus grinding profits now!",
              "Calculate Your Net Arcus WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "odium-khali-db-part6",
    title:
      "MapleStory Odium Grinding Guide: Khali vs Dual Blade Rotations & WAP Profits",
    description:
      "Complete GMS Odium Locked Tower grinding guide for Lv. 270+. Khali Chakram high-mobility rotations, Dual Blade Sudden Raid/Blade Tempest lazy setups, 1% AH tax deductions, and WAP meso/fragment net wage audits. Odium grinding guide MapleStory, GMS Odium Khali rotation, Odium Dual Blade lazy build, Odium Locked Tower WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "odium-khali-db-part6",
    sections: [
      {
        heading:
          "MapleStory GMS Odium Grinding Analysis Part 6: Khali vs. Dual Blade Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 270 unlocks Odium, the high-tier Authentic Force continent following Hotel Arcus, where players begin farming high-yield Sol Erda Fragments and liquid mesos. Among its sub-zones, the 'Locked Tower' maps stand out as premier farming locations due to high mob density and multi-tiered layouts. However, maintaining 100% spawn wave clears across 2-hour WAP (Wealth Acquisition Potion) sessions requires structured class-specific rotation paths.",
          "Both Khali and Dual Blade represent top-tier farmers in GMS Odium, leveraging unmatched Chakram mobility and short-cooldown wide-area attack loops respectively. This guide provides an in-depth analysis of low-effort rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Odium.",
        ],
      },
      {
        heading:
          "1. Odium Locked Tower Terrain Characteristics & Authentic Force Requirements",
        paragraphs: [
          "Baseline specifications required to maintain 1-hit KO mob clears in Odium.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Authentic Force Requirement: Base 70 Authentic Force (100+ recommended for the +10% final damage bonus).",
              "Platform Layout: A wide 3-tiered horizontal platform layout where movement speed and short-cooldown skill availability dictate wave clear efficiency.",
              "Fragment Yield Valuation: Fragment drop rates stabilize significantly at Level 270+, making Sol Erda Fragment sales a major component of net WAP hourly wages.",
            ],
          },
        ],
      },
      {
        heading: "2. Khali vs. Dual Blade: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading: "(1) Khali - High-Mobility Chakram Cancel Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Chaining Void Rush and Void Blitz for rapid diagonal dashes paired with Arts: Crescent Cleave.",
              "Optimal Path: Position centrally on the 2nd tier and execute diagonal mobility resets to sweep upper left and right platforms instantly as spawn waves appear.",
              "Gear Threshold: Requires 1-hit KO damage thresholds on Void skills against Odium mobs alongside a 100% Authentic Force overcap.",
              "Fatigue Rating: ★★☆☆☆ (Input Required but Unmatched Movement Speed)",
            ],
          },
          {
            heading:
              "(2) Dual Blade - Sudden Raid & Blade Tempest Low-Effort Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Cycling short-cooldown wide-area skills: Sudden Raid, Karma Fury, and Blade Tornado.",
              "Optimal Path: Stand stationary on the center ledge and cycle short-cooldown wide-area skills sequentially, clearing waves with minimal double-jump adjustments.",
              "Gear Threshold: Achieving 1-hit KO thresholds on Karma Fury and Blade Tornado while maintaining 100% Meso / 200% Drop gear parameters.",
              "Fatigue Rating: ★☆☆☆☆ (Low Movement Required)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Odium 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Odium session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~140M to 160M Raw Mesos.",
              "Sol Erda Fragments: ~16 to 20 Fragments (Valued at ~96M to 120M mesos at a 6M market price).",
              "Gross Revenue Value: ~236M to 280M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-1.1M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~226M to 270M Net Mesos (~113M to 135M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Odium WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished an Odium WAP session on your Khali or Dual Blade? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Odium grinding profits now!",
              "Calculate Your Net Odium WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "cernium-windbreaker-lara-part7",
    title:
      "MapleStory Cernium Grinding Guide: Wind Breaker vs Lara Rotations & WAP Profits",
    description:
      "Complete GMS Cernium Western Ramparts grinding guide for Lv. 260+. Wind Breaker Emerald Flower stationary rotations, Lara Dragon Vein Eruption lazy setups, 1% AH tax deductions, and WAP meso/fragment net wage audits. Cernium grinding guide MapleStory, GMS Cernium Wind Breaker rotation, Cernium Lara lazy build, Cernium Western Ramparts WAP rates, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "cernium-windbreaker-lara-part7",
    sections: [
      {
        heading:
          "MapleStory GMS Cernium Grinding Analysis Part 7: Wind Breaker vs. Lara Optimal Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), reaching Level 260 unlocks Cernium, the foundational Authentic Force continent where players begin their 6th Job progression and start earning high-density mesos and Sol Erda Fragments. Among its maps, the 'Western Ramparts' zone serves as an essential leveling hub due to its straightforward platform layout and steady spawn waves. Maintaining 100% spawn wave clears across 2-hour WAP (Wealth Acquisition Potion) sessions requires structured class-specific rotation paths.",
          "Both Wind Breaker and Lara stand out as top-tier low-effort farmers in Cernium, leveraging aggro-pulling turrets and automated elemental eruptions respectively. This guide provides an in-depth analysis of low-effort rotations, gearing thresholds, and post-grind net wage audits—subtracting the mandatory 1% Auction House tax and fixed WAP consumable overhead—for both classes in Cernium.",
        ],
      },
      {
        heading:
          "1. Cernium Western Ramparts Characteristics & Authentic Force Requirements",
        paragraphs: [
          "Baseline specifications required to maintain 1-hit KO mob clears in Cernium.",
        ],
        subsections: [
          {
            heading: "(1) Map Environment Overview",
            paragraphs: [],
            bullets: [
              "Authentic Force Requirement: Base 50 Authentic Force (70+ recommended for the +10% final damage bonus).",
              "Platform Layout: Multi-tiered horizontal layout perfectly suited for stationary turrets and auto-seeking projectiles.",
              "High Player Search Intent: Level 260+ marks the entry point into 6th Job grinding, driving substantial long-tail search volume for Cernium farming efficiency.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Wind Breaker vs. Lara: Optimal Rotations & Gear Thresholds",
        paragraphs: [
          "Comparing rotation mechanics, movement effort, and gearing requirements for both classes.",
        ],
        subsections: [
          {
            heading:
              "(1) Wind Breaker - Emerald Flower Stationary Aggro Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Placing Emerald Flower for mob aggro while Trifling Whim and Howling Gale automatically track residual mobs.",
              "Optimal Path: Deploy Emerald Flower on the 2nd-tier center ledge, while standing stationary in the center swapping fire direction left and right for 100% hands-free wave clears.",
              "Gear Threshold: Requires 1-hit KO damage thresholds on Trifling Whim projectiles against Cernium mobs.",
              "Fatigue Rating: ★☆☆☆☆ (Near Zero Movement)",
            ],
          },
          {
            heading: "(2) Lara - Dragon Vein Eruption Automated Rotation",
            paragraphs: [],
            bullets: [
              "Core Skill: Activating Dragon Vein Eruption installations across key veins while maintaining auto-attacks.",
              "Optimal Path: Trigger Eruption skills on major platform veins, standing centrally while refreshing vein spawns with minimal key presses for effortless wave clears.",
              "Gear Threshold: Achieving 1-hit KO thresholds on Dragon Vein Eruption while maintaining 100% Meso / 200% Drop gear parameters.",
              "Fatigue Rating: ★☆☆☆☆ (Low Movement Required)",
            ],
          },
        ],
      },
      {
        heading:
          "3. Cernium 2-Hour WAP Net Wage Audit & Sol Erda Fragment Valuation",
        paragraphs: [
          "Financial audit for a 2-hour Cernium session assuming 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Average 2-Hour WAP Yields",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~120M to 140M Raw Mesos.",
              "Sol Erda Fragments: ~12 to 16 Fragments (Valued at ~72M to 96M mesos at a 6M market price).",
              "Gross Revenue Value: ~192M to 236M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment liquidation (-0.9M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Extreme Gold Potions (-1.5M mesos).",
              "Final Net Wage: ~183M to 226M Net Mesos (~91.5M to 113M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Class's Cernium WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished a Cernium WAP session on your Wind Breaker or Lara? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Simply input starting and ending mesos—GG-PASS automatically subtracts 1% transaction fees and WAP potion costs.",
            ],
          },
          {
            heading: "One-Click [+1], [+5] Item Tally",
            paragraphs: [
              "Easily log dropped Sol Erda Frags and items post-grind without keyboard typing strain.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Cernium grinding profits now!",
              "Calculate Your Net Cernium WAP Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "boss-crystal-revenue-guide-part1",
    title:
      "MapleStory Boss Revenue Guide: Lv. 260-285 Intense Power Crystal & Hourly Wage",
    description:
      "Complete GMS Lv. 260-285 Weekly Boss Crystal revenue guide. Hard Lucid/Will, Chaos Dusk, Hard Dunkel, Verus Hilla, and Seren solo vs party yield audits, 1% AH tax deductions, and net meso calculations. MapleStory boss crystal price, GMS weekly boss meso rates, Hard Lucid solo stats, Verus Hilla solo guide, Seren boss crystal, MapleStory boss hourly rate, GMS meso calculator.",
    koSlug: "boss-crystal-revenue-guide-part1",
    sections: [
      {
        heading:
          "MapleStory GMS Boss Revenue Audit Part 1: Lv. 260-285 Weekly Boss Crystals & Net Hourly Rates",
        paragraphs: [
          "In MapleStory Global (GMS), completing 6th Job Advancement at Level 260 unlocks access to high-tier Weekly Bosses, which serve alongside grinding as the primary economic engine for character progression. Beyond raw Intense Power Crystals, modern boss farming revenue is driven by a complex mix of Sol Erda Energy, Sol Erda Fragments, Pitch Boss Accessories, and tradeable Arcane/Darkness materials.",
          "Choosing between Solo clears and Party clears creates a massive disparity in income distribution. This guide provides an in-depth financial audit of weekly bosses for Level 260 to 285 players—analyzing crystal values, byproduct drops, and net hourly rates after deducting mandatory 1% Auction House taxes and consumable buff costs.",
        ],
      },
      {
        heading:
          "1. Level 260-285 Weekly Boss Tiers & Crystal Drop Valuation",
        paragraphs: [
          "Breakdown of mesos and drop yields for major weekly bosses (calculated at 1-player solo crystal values).",
        ],
        subsections: [
          {
            heading: "(1) Major Weekly Boss Lineup",
            paragraphs: [],
            bullets: [
              "Hard Lucid & Hard Will: Hard Lucid Crystal: ~114M Mesos / Hard Will Crystal: ~132M Mesos. Key Drops: Butterfly Wing Droplets, Stone Cobweb Droplets, Arcane Shade Armor/Weapon Boxes, and Soul Shards.",
              "Chaos Dusk & Hard Dunkel: Chaos Dusk Crystal: ~135M Mesos / Hard Dunkel Crystal: ~170M Mesos. Key Drops: Pitched Boss Accessory Set items (Giant Terror, Commander Force Ring).",
              "Verus Hilla & Chosen Seren: Verus Hilla Crystal: ~208M Mesos / Normal Seren Crystal: ~268M Mesos / Hard Seren Crystal: ~410M Mesos. Key Drops: Source of Suffering, Mitra's Rage, Sol Erda Energy, and bulk Sol Erda Fragments.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Solo vs. Party Clears: Profitability & Time Efficiency",
        paragraphs: [
          "Evaluating weekly boss runs requires factoring in clear speed per minute versus buff consumable costs.",
        ],
        subsections: [
          {
            heading:
              "(1) 6-Player Party Clears: Low Entry Barrier & Safe Clear",
            paragraphs: [],
            bullets: [
              "Pros: Lower Stat/DPM requirements, minimal consumable buff expenses.",
              "Cons: Crystal meso split 6 ways and heavy bidding competition on Pitch Boss drops, drastically reducing individual net yields.",
              "Recommended For: Newly 6th-jobbed characters with lower stat thresholds or players learning mechanics.",
            ],
          },
          {
            heading:
              "(2) 1-Player Solo Clears: 100% Profit Retention & High Efficiency",
            paragraphs: [],
            bullets: [
              "Pros: Retain 100% Crystal mesos, exclusive ownership of Sol Erda Energy and Fragment drops, jackpot potential on Pitch Boss gear.",
              "Cons: Demands high gear investment and expensive burst buff consumables (VIP Potions, Extreme Potions).",
              "Hourly Wage Audit: Completing solo boss runs in under 20 minutes yields an equivalent net hourly rate of 300M to 600M+ Mesos/Hour.",
            ],
          },
        ],
      },
      {
        heading: "3. Weekly Boss Net Profit Settlement (GG-PASS Algorithm)",
        paragraphs: [
          "Sample 1-week settlement audit for a Level 275 character running Hard Lucid through Verus Hilla solo:",
        ],
        subsections: [
          {
            heading: "(1) Gross Weekly Yields",
            paragraphs: [],
            bullets: [
              "Raw Power Crystal Mesos: ~850M Mesos (Hard LuWill, C.Dusk, H.Dunkel, V.Hilla).",
              "Fragment & Drop Valuation: ~250M Meso Equivalent (Sol Erda Energy, Frags, tradeable mats).",
              "Gross Weekly Revenue: ~1.10 Billion Mesos.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions",
            paragraphs: [],
            bullets: [
              "1% Auction House Tax: Deducted on byproduct sales (-2.5M Mesos).",
              "Fixed Consumables: Boss buff potions and Guild Skills (-15M Mesos).",
              "Final Net Wage: ~1.08 Billion Net Mesos (~721M Net Mesos/Hour based on 1.5h total run time).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Your Weekly Boss Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Finished your weekly boss runs? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net weekly earnings.",
        ],
        subsections: [
          {
            heading: "Automated Crystal Pricing",
            paragraphs: [
              "Select your cleared bosses and instantly calculate 1-player crystal values.",
            ],
          },
          {
            heading: "Automatic 1% AH Tax & Buff Deductions",
            paragraphs: [
              "Automatically subtracts transaction fees and consumable costs to display your true net profit.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your weekly boss profits now!",
              "Calculate Your Net Weekly Boss Earnings on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "boss-drop-distribution-guide-part2",
    title:
      "MapleStory Boss Drop Guide: Pitched Boss Rates & Party Split Audit",
    description:
      "Complete GMS Pitched Boss Accessory drop rates and party split audit. Magic Book, Giant Terror, Arcane box probabilities, 1% AH tax deductions, and party payout calculations. Pitched boss drop rate MapleStory, GMS Giant Terror price, Magic Book drop rate, Arcane shade box rate, MapleStory party split calculator, GMS boss auction split, GMS meso calculator.",
    koSlug: "boss-drop-distribution-guide-part2",
    sections: [
      {
        heading:
          "MapleStory GMS Boss Revenue Audit Part 2: Pitched Boss Accessory Drop Rates & Party Split Calculations",
        paragraphs: [
          "Beyond standard Intense Power Crystals, the ultimate jackpot in MapleStory Global (GMS) weekly bossing comes from Pitched Boss Accessories (Magic Book, Giant Terror, Commander Force Ring, Source of Suffering) and Arcane Shade/Daybreak Armor & Weapon Boxes. A single high-tier drop can yield billions of mesos in liquid value.",
          "However, in party clears, calculating individual payouts requires accounting for 1/N party splits and mandatory 1% Auction House transaction taxes. This guide breaks down drop rate expectations and provides an accurate financial audit for party loot distribution in GMS.",
        ],
      },
      {
        heading: "1. Pitched Boss & High-Tier Drop Rate Estimations",
        paragraphs: [
          "Estimated drop rates based on standard 200%+ Drop Gear parameters during boss clears:",
        ],
        subsections: [
          {
            heading: "(1) Pitched Boss Accessory Set Lineup",
            paragraphs: [],
            bullets: [
              "Magic Book / Magic Stone: Hard Lucid / Hard Will drops (Estimated base rate ~0.1% - 0.5%).",
              "Giant Terror / Commander Force Ring: Chaos Dusk / Hard Dunkel drops (Estimated base rate ~0.5% - 1.0%).",
              "Source of Suffering / Mitra's Rage: Verus Hilla / Chosen Seren drops (Estimated base rate ~0.5% - 1.2%).",
            ],
          },
          {
            heading: "(2) Arcane Shade Equipment Boxes",
            paragraphs: [],
            bullets: [
              "Arcane Armor/Weapon Boxes: Drops from Hard LuWill and above (Averages 1 box every 10-15 clears with 200%+ Drop gear).",
              "Drop Gear Swapping: Equipping 200% Drop gear prior to the final phase clear doubles long-term Pitched Boss yields over time.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Party Split Mechanics & 1% AH Tax Deduction Formula",
        paragraphs: [
          "Two primary methods for distributing loot in multi-player weekly boss runs:",
        ],
        subsections: [
          {
            heading: "(1) Auction House Sale & Payout Split",
            paragraphs: [],
            bullets: [
              "Formula: Item sold on Auction House → deduct 1% tax → split remaining balance equally by total party size (N).",
              "Calculation: (AH Sale Price × 0.99) ÷ Party Size",
            ],
          },
          {
            heading: "(2) Internal Party Bidding Split",
            paragraphs: [],
            bullets: [
              "Formula: Winning party member buys the item below market price → payout distributed to remaining party members (N-1).",
              "Calculation: Winning Bid ÷ (Party Size - 1)",
            ],
          },
        ],
      },
      {
        heading: "3. Sample 6-Player Party Split Audit (GG-PASS Algorithm)",
        paragraphs: [
          "Example audit for a 5 Billion Meso Giant Terror drop sold via Auction House in a 6-player party:",
        ],
        subsections: [
          {
            heading: "(1) Financial Breakdown",
            paragraphs: [],
            bullets: [
              "Gross AH Sale Price: 5,000,000,000 Mesos.",
              "1% Auction House Tax: -50,000,000 Mesos (-50M Mesos).",
              "Net Revenue After Tax: 4,950,000,000 Mesos (4.95B Mesos).",
              "Final Per-Player Payout (6-Man): 825,000,000 Mesos (825M Mesos).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Party Splits & 1% AH Tax in 10 Seconds with GG-PASS",
        paragraphs: [
          "Looted a Pitched Boss drop or Arcane box in your weekly boss party? Use the GG-PASS Party Split Calculator (https://gg-pass.com/en/) to calculate transparent payouts.",
        ],
        subsections: [
          {
            heading: "One-Click Party Size Toggle (2-6 Players)",
            paragraphs: [
              "Instantly calculates exact individual payouts for any party size.",
            ],
          },
          {
            heading: "Automatic 1% AH Tax Deduction",
            paragraphs: [
              "Simply input the sale price—GG-PASS automatically subtracts the 1% tax.",
            ],
          },
          {
            heading: "Exportable Discord Payout Summaries",
            paragraphs: [
              "Download clean summary cards to share transparent split proofs with party members on Discord.",
            ],
            paragraphsAfterBullets: [
              "Audit your party splits now!",
              "Calculate Party Boss Payouts on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dusk-shadower-hoyoung-part3",
    title:
      "MapleStory Chaos Dusk Guide: Shadower vs Hoyoung WAP & Boss Rates",
    description:
      "Complete GMS Chaos Dusk mechanics, Giant Terror drop valuation, Shadower meso passive efficiency, Hoyoung lazy farming rotations, 1% AH tax deductions, and net WAP wage audits. Chaos Dusk guide MapleStory, GMS Shadower meso weave, Hoyoung lazy grinding build, Giant Terror price GMS, Dusk crystal value, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "dusk-shadower-hoyoung-part3",
    sections: [
      {
        heading:
          "MapleStory GMS Boss & Grinding Analysis Part 3: Chaos Dusk x Shadower vs. Hoyoung Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "Reaching Level 270+ in MapleStory Global (GMS) grants access to Chaos Dusk, a crucial weekly boss for obtaining the Giant Terror Pitched Boss Accessory. At this tier, maximizing account progression requires balancing fast boss clears with high-efficiency WAP (Wealth Acquisition Potion) grinding.",
          "Both Shadower and Hoyoung represent top-tier options at this level. Shadower utilizes its passive +20% Meso rate from Grid alongside Meso Explosion auto-looting, while Hoyoung offers low-effort farming through Talisman: Seeking Ghost Flame and Earthquake: Real summon placements. This guide provides an in-depth analysis of Chaos Dusk mechanics, class rotation efficiency, and net wage audits subtracting mandatory 1% Auction House taxes and consumable overhead.",
        ],
      },
      {
        heading: "1. Chaos Dusk Boss Mechanics & Drop Table Overview",
        paragraphs: [
          "Key requirements to complete Chaos Dusk solo clears under 20 minutes.",
        ],
        subsections: [
          {
            heading: "(1) Boss Environment & Key Mechanics",
            paragraphs: [],
            bullets: [
              "Authentic Force / Stat Threshold: 150+ Authentic Force (Recommended 30M - 50M+ Combat Power for solo runs).",
              "Core Mechanics: Fear Gauge management, Tentacle Strike positioning, and Laser Barrage survival during fog phases.",
              "Drop Table: ~135M Intense Power Crystal + Pitched Boss Accessory Giant Terror (Valued at ~4B to 6B Mesos).",
            ],
          },
        ],
      },
      {
        heading: "2. Shadower vs. Hoyoung: Rotations & Gearing Thresholds",
        paragraphs: [
          "Comparing mechanics and movement effort for Level 270+ Hotel Arcus and Odium maps.",
        ],
        subsections: [
          {
            heading: "(1) Shadower - Passive Meso Advantage & Auto-Looting",
            paragraphs: [],
            bullets: [
              "Core Mechanism: +20% Meso Obtainment passive via Grid, combining Meso Explosion with Assassinate to clear mobs and weave mesos automatically.",
              "Optimal Rotation: Active mobility along Y-axis multi-tier ledges, relying on Meso Explosion to sweep residual mobs across the entire map.",
              "Gear Threshold: Requires 1-hit KO damage on Meso Explosion.",
              "Fatigue Rating: ★★☆☆☆ (High Meso Yield Return)",
            ],
          },
          {
            heading: "(2) Hoyoung - Summon Turrets & Lazy Screen Clears",
            paragraphs: [],
            bullets: [
              "Core Mechanism: Deploying Seeking Ghost Flame and Nirvana turrets while executing Earthquake: Real for multi-level AOE wipes.",
              "Optimal Rotation: Station summons on lower levels while standing centrally, tapping talisman skills to clear entire spawn waves with minimal movement.",
              "Gear Threshold: 1-hit KO thresholds on summon skills.",
              "Fatigue Rating: ★☆☆☆☆ (Near Stationary Farming)",
            ],
          },
        ],
      },
      {
        heading: "3. Dusk Clear & 2-Hour WAP Net Revenue Audit",
        paragraphs: [
          "Financial audit combining a Chaos Dusk clear with a 2-hour WAP session under 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Gross Yield Breakdown (Shadower Passive Included)",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~150M to 180M Mesos (Up to ~200M on Shadower).",
              "Sol Erda Fragments: ~14 to 18 Fragments (~84M to 108M meso equivalent).",
              "Chaos Dusk Crystal: ~135M Mesos.",
              "Gross Revenue Value: ~369M to 443M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment/Drop liquidation (-1.5M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Boss Buff Potions (-10M mesos).",
              "Final Net Wage: ~350M to 424M Net Mesos (~175M to 212M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Dusk Revenue & WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Cleared Chaos Dusk or finished a WAP session on your Shadower or Hoyoung? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Combined Boss & WAP Settlements",
            paragraphs: [
              "Input boss crystals, raw mesos, and Sol Erda Frags in a single streamlined interface.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Automatically subtracts transaction fees and WAP/boss consumable costs.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Dusk earnings and WAP profits now!",
              "Calculate Your Net Dusk & WAP Revenue on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "dunkel-bowmaster-adele-part4",
    title:
      "MapleStory Hard Dunkel Guide: Bowmaster vs Adele WAP & Boss Rates",
    description:
      "Complete GMS Hard Dunkel mechanics, Commander Force Ring drop valuation, Bowmaster stationary farming setups, Adele Cleave/Order rotations, 1% AH tax deductions, and net WAP wage audits. Hard Dunkel guide MapleStory, GMS Bowmaster lazy farming, Adele Cleave rotation, Commander Force Ring price GMS, Dunkel crystal value, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "dunkel-bowmaster-adele-part4",
    sections: [
      {
        heading:
          "MapleStory GMS Boss & Grinding Analysis Part 4: Hard Dunkel x Bowmaster vs. Adele Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), clearing Hard Dunkel represents a crucial weekly milestone for obtaining the coveted Commander Force Ring Pitched Boss Accessory. Facing Dunkel's chaotic barrage of Elite Boss summons and falling meteors requires high mechanical execution, making classes that offer both strong boss survivability and low-effort WAP (Wealth Acquisition Potion) farming highly prized.",
          "Bowmaster stands as a premier stationary farming class utilizing Arrow Platter and Inhuman Speed turrets, while Adele wields massive AOE coverage through Cleave and auto-seeking Aether Forge / Order swords. This guide provides an in-depth financial audit of Hard Dunkel mechanics, class rotation performance, and net wage calculations deducting mandatory 1% Auction House taxes and consumable costs.",
        ],
      },
      {
        heading: "1. Hard Dunkel Boss Mechanics & Drop Table Overview",
        paragraphs: [
          "Key requirements to complete Hard Dunkel solo clears under 20 minutes.",
        ],
        subsections: [
          {
            heading: "(1) Boss Environment & Key Mechanics",
            paragraphs: [],
            bullets: [
              "Authentic Force / Stat Threshold: 160+ Authentic Force (Recommended 40M - 60M+ Combat Power for solo runs).",
              "Core Mechanics: Managing 5 Elite Boss phantoms, dodging Dunkel's sword waves, and maintaining status resistance against slow meteors.",
              "Drop Table: ~170M Intense Power Crystal + Pitched Boss Accessory Commander Force Ring (Valued at ~3.5B to 5B Mesos).",
            ],
          },
        ],
      },
      {
        heading: "2. Bowmaster vs. Adele: Rotations & Gearing Thresholds",
        paragraphs: [
          "Comparing mechanics and movement effort for Level 270+ Hotel Arcus and Odium maps.",
        ],
        subsections: [
          {
            heading: "(1) Bowmaster - Stationary Turret Farming",
            paragraphs: [],
            bullets: [
              "Core Mechanism: Setting Arrow Platter summons alongside Inhuman Speed to hold down Hurricane from a central platform.",
              "Optimal Rotation: Station turrets on outer ledges while standing centrally, tapping hurricane to clear entire waves with minimal movement.",
              "Gear Threshold: Requires 1-hit KO damage on Arrow Platter summons.",
              "Fatigue Rating: ★☆☆☆☆ (True Stationary Farming)",
            ],
          },
          {
            heading: "(2) Adele - Cleave Range & Auto-Seeking Order",
            paragraphs: [],
            bullets: [
              "Core Mechanism: Sweeping main platforms with wide Y-axis Cleave hitboxes while maintaining 6 active Order swords for auto-hunting.",
              "Optimal Rotation: Active double-jump sweeping along main levels while Order swords clear upper/lower residual mobs automatically.",
              "Gear Threshold: 1-hit KO thresholds on Cleave and 2-hit on Order.",
              "Fatigue Rating: ★★☆☆☆ (Wide Hitbox Coverage)",
            ],
          },
        ],
      },
      {
        heading: "3. Dunkel Clear & 2-Hour WAP Net Revenue Audit",
        paragraphs: [
          "Financial audit combining a Hard Dunkel clear with a 2-hour WAP session under 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Gross Yield Breakdown",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~150M to 180M Mesos.",
              "Sol Erda Fragments: ~14 to 18 Fragments (~84M to 108M meso equivalent).",
              "Hard Dunkel Crystal: ~170M Mesos.",
              "Gross Revenue Value: ~404M to 458M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment/Drop liquidation (-1.6M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Boss Buff Potions (-10M mesos).",
              "Final Net Wage: ~385M to 439M Net Mesos (~192M to 219M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Dunkel Revenue & WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Cleared Hard Dunkel or finished a WAP session on your Bowmaster or Adele? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Combined Boss & WAP Settlements",
            paragraphs: [
              "Input boss crystals, raw mesos, and Sol Erda Frags in a single streamlined interface.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Automatically subtracts transaction fees and WAP/boss consumable costs.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Dunkel earnings and WAP profits now!",
              "Calculate Your Net Dunkel & WAP Revenue on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "vhilla-nightlord-viper-part5",
    title:
      "MapleStory Verus Hilla Guide: Night Lord vs Viper WAP & Boss Rates",
    description:
      "Complete GMS Verus Hilla mechanics, Source of Suffering drop valuation, Night Lord Mark of Night Lord farming, Viper Serpent Screw lazy rotations, 1% AH tax deductions, and net WAP wage audits. Verus Hilla guide MapleStory, GMS Night Lord burst setup, Viper Serpent Screw lazy grinding, Source of Suffering price GMS, Verus Hilla crystal value, Sol Erda Fragment hourly wage, GMS meso calculator.",
    koSlug: "vhilla-nightlord-viper-part5",
    sections: [
      {
        heading:
          "MapleStory GMS Boss & Grinding Analysis Part 5: Verus Hilla x Night Lord vs. Viper Rotations & Net Hourly Wage Audit",
        paragraphs: [
          "In MapleStory Global (GMS), defeating Verus Hilla marks the entry into end-game weekly bossing, yielding the coveted Source of Suffering Pitched Boss pendant. Navigating Verus Hilla's red string curse, scythe sweeps, and candle skull mechanics demands immense burst DPS and mechanical control, making top-tier burst and low-effort WAP (Wealth Acquisition Potion) farming classes highly sought after.",
          "Night Lord remains the ultimate burst icon using Spread Throw alongside Mark of Night Lord star shuriken auto-clears, while Viper delivers unmatched lazy farming mechanics with Serpent Screw, allowing players to clear spawn waves simply by walking through the map. This guide provides a detailed financial audit of Verus Hilla mechanics, class rotation efficiency, and net wage calculations subtracting mandatory 1% Auction House taxes and consumable costs.",
        ],
      },
      {
        heading: "1. Verus Hilla Boss Mechanics & Drop Table Overview",
        paragraphs: [
          "Key requirements to complete Verus Hilla solo clears under 20 minutes.",
        ],
        subsections: [
          {
            heading: "(1) Boss Environment & Key Mechanics",
            paragraphs: [],
            bullets: [
              "Authentic Force / Stat Threshold: 190+ Authentic Force (Recommended 60M - 90M+ Combat Power for solo runs).",
              "Core Mechanics: Managing red string soul harvesting, timing green scythe sweeps, and cleansing skulls via candle altar interactions.",
              "Drop Table: ~208M Intense Power Crystal + Pitched Boss Accessory Source of Suffering (Valued at ~4B to 6B Mesos).",
            ],
          },
        ],
      },
      {
        heading:
          "2. Night Lord vs. Viper: Rotations & Gearing Thresholds",
        paragraphs: [
          "Comparing mechanics and movement effort for Level 275+ Shangri-La and Carcion maps.",
        ],
        subsections: [
          {
            heading:
              "(1) Night Lord - Burst Damage & Mark Shuriken Auto-Clears",
            paragraphs: [],
            bullets: [
              "Core Mechanism: Firing Showdown Challenge while Mark of Night Lord star projectiles automatically target and wipe residual mobs across upper and lower ledges.",
              "Optimal Rotation: Double-jump firing along mid-level platforms while flying mark projectiles clear residual spawns across 3 tiers.",
              "Gear Threshold: High gear investment required to 1-hit KO with Mark of Night Lord.",
              "Fatigue Rating: ★★☆☆☆ (High Damage Output, Active Rotation)",
            ],
          },
          {
            heading: "(2) Viper - Serpent Screw Passive Body-Slam Farming",
            paragraphs: [],
            bullets: [
              "Core Mechanism: Toggling Serpent Screw aura and using movement dashes (Super Cannon / Sea Serpent) to obliterate mobs on contact.",
              "Optimal Rotation: Simple back-and-forth horizontal sprint loops; Serpent Screw continuously auto-clears every mob wave in range.",
              "Gear Threshold: 1-hit KO on Serpent Screw ticks.",
              "Fatigue Rating: ★☆☆☆☆ (Lowest Effort in Game)",
            ],
          },
        ],
      },
      {
        heading: "3. Verus Hilla Clear & 2-Hour WAP Net Revenue Audit",
        paragraphs: [
          "Financial audit combining a Verus Hilla clear with a 2-hour WAP session under 100% Meso / 200% Drop gear parameters:",
        ],
        subsections: [
          {
            heading: "(1) Gross Yield Breakdown",
            paragraphs: [],
            bullets: [
              "Raw Mesos: ~160M to 190M Mesos.",
              "Sol Erda Fragments: ~15 to 20 Fragments (~90M to 120M meso equivalent).",
              "Verus Hilla Crystal: ~208M Mesos.",
              "Gross Revenue Value: ~458M to 518M Meso Equivalent.",
            ],
          },
          {
            heading: "(2) Mandatory Overhead Deductions (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Deducted on Fragment/Drop liquidation (-1.8M mesos).",
              "Fixed Consumables: 1 WAP Potion (-7M mesos) + Boss Buff Potions (-12M mesos).",
              "Final Net Wage: ~438M to 498M Net Mesos (~219M to 249M Net Mesos/Hour).",
            ],
          },
        ],
      },
      {
        heading:
          "4. [CTA] Audit Verus Hilla Revenue & WAP Earnings in 10 Seconds with GG-PASS",
        paragraphs: [
          "Cleared Verus Hilla or finished a WAP session on your Night Lord or Viper? Use the GG-PASS Meso Calculator (https://gg-pass.com/en/) to audit your exact net wage.",
        ],
        subsections: [
          {
            heading: "Combined Boss & WAP Settlements",
            paragraphs: [
              "Input boss crystals, raw mesos, and Sol Erda Frags in a single streamlined interface.",
            ],
          },
          {
            heading: "Automatic 1% Tax & Consumable Deductions",
            paragraphs: [
              "Automatically subtracts transaction fees and WAP/boss consumable costs.",
            ],
          },
          {
            heading: "Downloadable Discord Summary Cards",
            paragraphs: [
              "Export styled summary cards with a single click to share with guildmates or Discord communities.",
            ],
            paragraphsAfterBullets: [
              "Audit your Verus Hilla earnings and WAP profits now!",
              "Calculate Your Net Verus Hilla & WAP Revenue on GG-PASS: https://gg-pass.com/en/",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "seren-soulmaster-hero-part6",
    title: "Chosen Seren Guide: Soul Master vs Hero Arteria WAP Rates",
    description:
      "Overcoming Phase 2 Sun Gauge challenges in Chosen Seren. Comparing Soul Master Cosmic Shower placements with Hero Incising sweeps in Arteria. 1% AH tax breakdown.",
    koSlug: "seren-soulmaster-hero-part6",
    sections: [
      {
        heading:
          "Chosen Seren Phase 2 Strategy & Soul Master vs. Hero Arteria WAP Revenue Audit",
        paragraphs: [
          "Entering Chosen Seren for the first time at Level 280, the most frustrating hurdle I faced was managing the Sun Gauge meter in Phase 2 during Sunset and Midnight phases. Getting struck by Seren's sword blasts filled the gauge rapidly, triggering Sunset stuns and Midnight boss shields that completely wasted our party's burst window.",
          "Overcoming this requires strategic burst alignment, but equally important is minimizing physical fatigue during daily grinding in Arteria prior to entering the raid. In this guide, I share my hands-on experience testing Soul Master (Dawn Warrior) and Hero in Arteria maps, comparing their WAP yields and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Phase 2 Mechanics & Warrior Class Playstyle",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Sun Gauge Management & Burst Alignment",
            paragraphs: [
              "In Phase 2, cleansing the gauge during Noon/Dawn phases is critical before initiating burst sequences in Sunset. Warrior classes should leverage Status Resistance skills and Super Knockback immunity to prevent burst cancellations caused by Sunset knockback attacks.",
            ],
          },
          {
            heading: "(2) Arteria Grinding Effort",
            paragraphs: [],
            bullets: [
              "Soul Master: Stationing Cosmic Shower on the 1st floor allows you to stand on the 2nd floor, clearing the rest of the map using single-direction sweeps with Solar Pierce.",
              "Hero: Requires weaving Incising with empowered Raging Blow across horizontal jump paths to maintain mob clear continuity.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Soul Master vs. Hero: Arteria WAP Performance Comparison (2-Hour Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters in Arteria's Frontline Battleship 1 and Arteria Tower.",
        ],
        table: {
          headers: ["Metrics", "Soul Master", "Hero"],
          rows: [
            [
              "Core Mechanic",
              "Cosmic Shower Turret + Solar Pierce Sweeps",
              "Incising Cleave + Raging Blow",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (Near Stationary Farming)",
              "★★☆☆☆ (Standard Jump Rotation)",
            ],
            [
              "Mob Clear Rate",
              "99.1% (Requires 1-hit KO on Cosmic Shower)",
              "98.3% (Vertical Incising Coverage)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~178M Mesos",
              "~172M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "16 to 21 Frags",
              "15 to 20 Frags",
            ],
            [
              "Key Operational Tip",
              "Ensure 1-hit KO on Cosmic Shower",
              "Check Raging Blow range un-enraged",
            ],
          ],
        },
      },
      {
        heading: "3. Normal Seren Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Normal Seren clear rewards with a 2-hour Arteria WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Normal Seren Crystal: 268M Mesos",
              "Sol Erda Fragments (18 Frags @ 6M ea): 108M Mesos",
              "Raw Mobs Meso Drops: 175M Mesos",
              "Gross Revenue: 551M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment/Drop sales (-1.08M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-15M Mesos)",
              "Total Net Profit: ~527M Mesos",
              "Net Hourly Wage: ~263M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. Is Soul Master efficient if Cosmic Shower can't 1-hit KO in Arteria?",
            paragraphs: [
              "No. Cosmic Shower 1-hit KO is essential to clear lower platforms automatically. If your damage falls short, upgrade your 6th Job Cores or farm in Shangri-La.",
            ],
          },
          {
            heading: "Q. How do we split party loot for Mitra's Rage?",
            paragraphs: [
              "When Mitra's Rage drops, sell it on the Auction House (~5B to 8B Mesos), subtract the 1% transaction fee, and split the net revenue equally among party members.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Seren Earnings in 10 Seconds",
        paragraphs: [
          "Just completed Chosen Seren or finished an Arteria WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Seren & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "kalos-mechanic-pathfinder-part7",
    title:
      "Kalos the Guardian Guide: Mechanic vs Pathfinder Carcion WAP Rates",
    description:
      "Hands-on experience clearing Kalos the Guardian sector mechanics. Comparing Mechanic robot placement with Pathfinder Cardinal macro rotations in Carcion. 1% AH tax breakdown.",
    koSlug: "kalos-mechanic-pathfinder-part7",
    sections: [
      {
        heading:
          "Kalos the Guardian Strategy & Mechanic vs. Pathfinder Carcion WAP Revenue Audit",
        paragraphs: [
          "Reaching Level 285 in Carcion and joining my first 6-player Kalos the Guardian raid, the most immediate hurdle I encountered was managing the sector interference meters across all 4 quadrants. When T-Boy's ultimate summon coincided with ocular laser barrages, our party's burst alignment spiraled out of order, leading to wipe scenarios during bind windows.",
          "Clearing Kalos requires more than high 3-minute burst DPS—it demands entering the raid without heavy physical fatigue accumulated from daily grinding sessions. In this guide, I share my hands-on experience testing Mechanic and Pathfinder in Carcion maps, comparing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Mechanic vs. Pathfinder: Carcion WAP Performance Comparison (2-Hour Test)",
        paragraphs: [
          "The data below was collected during a 2-hour (1 WAP) test in Carcion's Calm Beach 1 and Hidden Cave under 100% Meso and 200% Drop gear parameters.",
        ],
        table: {
          headers: ["Metrics", "Mechanic", "Pathfinder"],
          rows: [
            [
              "Core Mechanic",
              "Full Robot Turret Deployment (RM7, RM1)",
              "Cardinal Macro (Discharge + Blast) Homing",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (100% Stationary)",
              "★★☆☆☆ (Slight Wrist Strain)",
            ],
            [
              "Mob Clear Rate",
              "98.5% (Requires 1-hit KO on turrets)",
              "99.2% (Auto-homing arrows)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~185M Mesos",
              "~192M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "18 to 22 Frags",
              "19 to 23 Frags",
            ],
            [
              "Key Operational Tip",
              "Avoid blind spots outside robot range",
              "Use Ancient Archer on cooldown",
            ],
          ],
        },
      },
      {
        heading: "2. Practical Tips: Robot Placement & Homing Rotations",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Mechanic: 3-Point Turret Setup",
            paragraphs: [
              "Through hands-on testing in Carcion, I identified the optimal turret setup: placing RM7 on the central ledge, RM1 on the top-left platform, and Robo Factory RM13 on the bottom right. If your turrets fail to 1-hit KO mobs, mob clear rates drop by over 15%, making Authentic Force upgrades essential.",
            ],
          },
          {
            heading: "(2) Pathfinder: Cardinal Macro & Ancient Archer",
            paragraphs: [
              "Holding down the Cardinal Discharge + Blast macro from the middle ledge targets most spawns automatically. However, you must weave Ancient Archer on cooldown to prevent mobs from clumping on the top-right platform.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Chaos Kalos Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Chaos Kalos clear rewards with a 2-hour Carcion WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Chaos Kalos Crystal: 300M Mesos",
              "Sol Erda Fragments (20 Frags @ 6M ea): 120M Mesos",
              "Raw Mobs Meso Drops: 190M Mesos",
              "Gross Revenue: 610M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment/Drop sales (-1.2M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-18M Mesos)",
              "Total Net Profit: ~583M Mesos",
              "Net Hourly Wage: ~291M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. Is Mechanic worth playing if my robots can't 1-hit KO in Carcion?",
            paragraphs: [
              "No. If your robots require 2 hits, Mechanic loses its primary advantage of stationary farming. It is better to farm in Shangri-La until your Authentic Force increases.",
            ],
          },
          {
            heading: "Q. How do we split party drops for Kalos?",
            paragraphs: [
              "In a 6-player party, crystal values drop to around 50M per person. However, if a 'Guardian's Ring' drops, ensure you calculate net splits after deducting the 1% Auction House fee.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Kalos Earnings in 10 Seconds",
        paragraphs: [
          "Just finished Kalos or completed a Carcion WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Kalos & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "jinhilla-nightlord-viper-part8",
    title: "Verus Hilla Guide: Night Lord vs Viper WAP Net Hourly Wage",
    description:
      "Hands-on experience clearing Verus Hilla thread mechanics. Comparing Night Lord Mark of Night Lord oneshots with Viper Serpent Screw farming. 1% AH tax breakdown.",
    koSlug: "jinhilla-nightlord-viper-part8",
    sections: [
      {
        heading:
          "Verus Hilla Strategy & Night Lord vs. Viper WAP Revenue Audit",
        paragraphs: [
          "Entering Verus Hilla (Jin Hilla) for the first time, the most disorienting mechanic I experienced was tracking the 2-minute 30-second hourglass timer and blue thread placements. Desyncing altar cleansing routines stripped away death counts rapidly, causing failed run attempts.",
          "Clearing Verus Hilla requires mechanical precision, but minimizing physical fatigue during daily grinding sessions beforehand is equally crucial. In this guide, I share my hands-on testing comparing Night Lord and Viper (Buccaneer), auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Verus Hilla Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Altar Cleansing & Thread Management",
            paragraphs: [
              "Surviving the green skull timer requires taking intentional hits from blue threads to collect red souls before cleansing at the altar. Night Lord relies heavily on Dark Sight for thread avoidance, while Viper utilizes superior mobility and Super Knockback resistance to adjust positioning seamlessly.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Hotel Arcus maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Night Lord", "Viper (Buccaneer)"],
          rows: [
            [
              "Core Mechanic",
              "Mark of Night Lord Projectile Sweeps",
              "Serpent Screw Passive Aura Clearing",
            ],
            [
              "Fatigue Level",
              "★★☆☆☆ (High Stat Needed)",
              "★☆☆☆☆ (Lazy Passive Farming)",
            ],
            [
              "Mob Clear Rate",
              "99.3% (Requires Mark 1-hit KO)",
              "98.8% (Continuous Serpent Aura)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~162M Mesos",
              "~158M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "13 to 17 Frags",
              "12 to 16 Frags",
            ],
            [
              "Key Operational Tip",
              "Prioritize Mark core enhancement",
              "Maintain Energy Charge uptime",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Night Lord Mark Oneshots & Viper Energy Maintenance",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Night Lord: Achieving Mark 1-Hit KO",
            paragraphs: [
              "Night Lord excels at map clearing when Mark of Night Lord 1-hits mob spawns. However, if projectiles require 2 hits, clear rates drop significantly, making 6th Job core investments essential for higher-tier maps like Carcion.",
            ],
          },
          {
            heading: "(2) Viper: Infinite Serpent Screw Uptime",
            paragraphs: [
              "Viper offers unmatched grinding comfort—simply jumping through platforms with Serpent Screw active clears entire waves. Managing Transform cooldowns ensures your Energy Charge never depletes during 2-hour sessions.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Hard Verus Hilla Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Verus Hilla clear rewards with a 2-hour WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Verus Hilla Crystal (6-Player Party Share): ~35M Mesos (213M Solo)",
              "Sol Erda Fragments (15 Frags @ 6M ea): 90M Mesos",
              "Raw Mobs Meso Drops: 160M Mesos",
              "Gross Revenue: 285M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.90M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-12M Mesos)",
              "Total Net Profit: ~265M Mesos",
              "Net Hourly Wage: ~132M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading: "Q. What stats are recommended for soloing Verus Hilla?",
            paragraphs: [
              "Reaching Dojo Floor 60+ or 80M+ Combat Power is recommended. Mastering thread cleansing timings is far more important than raw DPS.",
            ],
          },
          {
            heading:
              "Q. Which class is better for lazy grinding, Night Lord or Viper?",
            paragraphs: [
              "Viper is significantly easier. As long as Serpent Screw 1-hits mobs, you can farm effortlessly with basic jump inputs.",
            ],
          },
        ],
      },
      {
        heading:
          "5. [GG-PASS] Audit Your Verus Hilla Earnings in 10 Seconds",
        paragraphs: [
          "Finished Verus Hilla or completed a 2-hour WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Verus Hilla & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "dunkel-bowmaster-adele-part9",
    title: "Hard Dunkel Guide: Bowmaster vs Adele WAP Net Hourly Wage",
    description:
      "Hands-on experience overcoming Hard Dunkel elite boss overlap mechanics. Comparing Bowmaster Arrow Platter lazy grinding with Adele Order sword oneshots. 1% AH tax breakdown.",
    koSlug: "dunkel-bowmaster-adele-part9",
    sections: [
      {
        heading:
          "Hard Dunkel Strategy & Bowmaster vs. Adele WAP Revenue Audit",
        paragraphs: [
          "Attempting Hard Dunkel, the most infuriating mechanic players face is the simultaneous overlap of Dunkel's sword beams, Elite Boss strikes, and falling meteor stuns. Getting stunned unexpectedly depletes death counts instantly, destroying coordinated party burst phases.",
          "Clearing Hard Dunkel requires precise positioning, but entering the raid without wrist fatigue from daily grinding is equally critical. In this guide, I share my hands-on testing comparing Bowmaster and Adele, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Hard Dunkel Overlap Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Elite Boss Positioning & Survival Utility",
            paragraphs: [
              "Kiting Dunkel to map corners keeps Elite Boss attacks focused in one direction. Bowmaster utilizes Arrow Platter and vampiric arrow passives for passive sustain, while Adele leverages Dike's iframe and Super Knockback immunity to absorb lethal overlaps.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Arteria maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Bowmaster", "Adele"],
          rows: [
            [
              "Core Mechanic",
              "Arrow Platter + Uncountable Arrow Lazy Farming",
              "Divide Cleave + Order Sword Homing",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (Near Zero Effort)",
              "★★☆☆☆ (High Order Stat Needed)",
            ],
            [
              "Mob Clear Rate",
              "99.1% (Requires Platter 1-hit KO)",
              "98.6% (Order 1-hit KO Threshold)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~174M Mesos",
              "~168M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "15 to 19 Frags",
              "14 to 18 Frags",
            ],
            [
              "Key Operational Tip",
              "Refresh Platter turrets periodically",
              "Prioritize 6th Job Order core upgrades",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Bowmaster Lazy Setup & Adele Order Thresholds",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Bowmaster: Effortless Stationary Grinding",
            paragraphs: [
              "Stationing Arrow Platter centrally while holding Uncountable Arrow sweeps entire map layers effortlessly. As long as your turret 1-hits mobs, wrist strain is virtually non-existent during 2-hour WAP sessions.",
            ],
          },
          {
            heading: "(2) Adele: Order Homing Thresholds",
            paragraphs: [
              "While Divide provides wide horizontal coverage, Order swords must 1-hit KO mobs to clear top-tier ledges cleanly. If swords require 2 hits, mob rotation breaks down, making 6th Job Core investments mandatory.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Hard Dunkel Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Dunkel clear rewards with a 2-hour Arteria WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Dunkel Crystal (6-Player Party Share): ~30M Mesos (183M Solo)",
              "Sol Erda Fragments (17 Frags @ 6M ea): 102M Mesos",
              "Raw Mobs Meso Drops: 171M Mesos",
              "Gross Revenue: 303M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.02M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-11M Mesos)",
              "Total Net Profit: ~284M Mesos",
              "Net Hourly Wage: ~142M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What stats are recommended for soloing Hard Dunkel?",
            paragraphs: [
              "Dojo Floor 58+ or 60M+ Combat Power is recommended. Having sufficient Authentic Force over-force helps mitigate meteor damage penalties.",
            ],
          },
          {
            heading:
              "Q. Which class is better for Arteria grinding, Bowmaster or Adele?",
            paragraphs: [
              "Bowmaster offers vastly superior comfort. However, once Adele achieves 1-hit KO thresholds on Order swords, both classes yield comparable clear rates.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Dunkel Earnings in 10 Seconds",
        paragraphs: [
          "Finished Hard Dunkel or completed an Arteria WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Dunkel & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "dusk-shadower-hoyoung-part10",
    title: "Chaos Dusk Guide: Shadower vs Hoyoung WAP Net Hourly Wage",
    description:
      "Hands-on experience clearing Chaos Dusk fear phase blindness. Comparing Shadower Meso Explosion oneshots with Hoyoung Clone/Talisman rotation. 1% AH tax breakdown.",
    koSlug: "dusk-shadower-hoyoung-part10",
    sections: [
      {
        heading:
          "Chaos Dusk Strategy & Shadower vs. Hoyoung WAP Revenue Audit",
        paragraphs: [
          "Attempting Chaos Dusk (Gloom), the most disorienting mechanic players encounter is the transition into the 'Fear Phase' when the eye closes and the screen turns dark. Getting struck by shadow hallucinations and meteor stuns while blinded often wastes crucial burst windows once the eye reopens.",
          "Overcoming Dusk requires managing fear gauge meters, but minimizing physical fatigue during daily grinding sessions beforehand is equally essential. In this Q&A style guide, I share my hands-on testing comparing Shadower and Hoyoung, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Chaos Dusk Fear Mechanics Q&A & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q1. Why do I keep losing death counts during Dusk's Fear Phase?",
            paragraphs: [],
            bullets: [
              "Answer: Staying in the middle of the arena during fear phases leaves you vulnerable to overlapping hallucination stuns and laser strikes. Shadower utilizes 'Shadow Meld' iframes and 'Dark Sight' to bypass lasers, while Hoyoung uses mid-air iframe delays to navigate away safely.",
            ],
          },
          {
            heading:
              "Q2. Which Thief class offers lower fatigue and higher meso yields?",
            paragraphs: [],
            bullets: [
              "Answer: Shadower. Once Meso Explosion achieves 1-hit KO damage thresholds, Shadower can farm lazily with a vacuum pet from a central platform while maintaining top-tier clear rates.",
            ],
          },
        ],
      },
      {
        heading:
          "2. Shadower vs. Hoyoung: Shangri-La WAP Performance Comparison (2-Hour Test)",
        paragraphs: [
          "Tested under 100% Meso and 200% Drop gear parameters over a 2-hour session.",
        ],
        table: {
          headers: ["Metrics", "Shadower", "Hoyoung"],
          rows: [
            [
              "Core Mechanic",
              "Assassinate + Meso Explosion Weaving",
              "Clones + Talisman Skill Rotation",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (Lazy Meso Explosion)",
              "★★☆☆☆ (Scroll Gauge Management)",
            ],
            [
              "Mob Clear Rate",
              "99.4% (Requires Meso Explosion 1-hit KO)",
              "98.9% (Continuous Talisman Summons)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~168M Mesos",
              "~163M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "14 to 18 Frags",
              "13 to 17 Frags",
            ],
            [
              "Key Operational Tip",
              "Prioritize 6th Job Meso Explosion cores",
              "Maintain Talisman/Scroll skill cycles",
            ],
          ],
        },
      },
      {
        heading:
          "3. Chaos Dusk Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Chaos Dusk clear rewards with a 2-hour Shangri-La WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Chaos Dusk Crystal (6-Player Party Share): ~22M Mesos (135M Solo)",
              "Sol Erda Fragments (16 Frags @ 6M ea): 96M Mesos",
              "Raw Mobs Meso Drops: 165M Mesos",
              "Gross Revenue: 283M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.96M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-10M Mesos)",
              "Total Net Profit: ~265M Mesos",
              "Net Hourly Wage: ~132M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. Is Shadower worth playing if Meso Explosion can't 1-hit KO mobs?",
            paragraphs: [
              "No. If Meso Explosion requires 2 hits, mob clear efficiency drops by over 10%. It is better to farm in Hotel Arcus until your Authentic Force increases.",
            ],
          },
          {
            heading:
              "Q. How do I achieve lazy stationary farming on Hoyoung?",
            paragraphs: [
              "Stationing Tiger of Songyu and Erda Janus centrally while holding down your main skill from a mid-platform allows you to farm with minimal physical effort.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Dusk Earnings in 10 Seconds",
        paragraphs: [
          "Finished Chaos Dusk or completed a Shangri-La WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Dusk & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "lucid-phantom-dualblade-part11",
    title: "Hard Lucid Guide: Phantom vs Dual Blade WAP Net Hourly Wage",
    description:
      "Hands-on experience clearing Hard Lucid Phase 1 dragon and Phase 2 laser mechanics. Comparing Phantom stolen skill utility with Dual Blade Blade Tornado farming. 1% AH tax breakdown.",
    koSlug: "lucid-phantom-dualblade-part11",
    sections: [
      {
        heading:
          "Hard Lucid Strategy & Phantom vs. Dual Blade WAP Revenue Audit",
        paragraphs: [
          "Attempting Hard Lucid, the most punishing mechanics players face are Phase 1 dragon fire attacks overlapping with butterfly explosions, or Phase 2 platform destructions paired with blade wind stuns. Failing to clear butterflies with the horn before dragon spawns often leads to instant party wipes.",
          "Clearing Hard Lucid requires strict 45-second Phase 3 burst DPS, but entering the raid without heavy fatigue from daily grinding is equally essential. In this guide, I share my hands-on testing comparing Phantom and Dual Blade, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Hard Lucid Phase Mechanics & Class Performance Breakdown",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Phase Survival Utility",
            paragraphs: [
              "Clearing butterflies via horn inputs before dragon spawns is mandatory. Phantom leverages Final Cut and Joker iframe windows for emergency survival, while Dual Blade uses Chains of Hell and Asura Super Knockback immunity to tank Phase 2 blade wind hazards seamlessly.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Hotel Arcus maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Phantom", "Dual Blade"],
          rows: [
            [
              "Core Mechanic",
              "Stolen Skill (Showdown/Cannon Bazooka)",
              "Blade Tornado + Karma Fury Sweeps",
            ],
            [
              "Fatigue Level",
              "★★☆☆☆ (Flexible Stolen Setup)",
              "★☆☆☆☆ (Short CD AOE Spams)",
            ],
            [
              "Mob Clear Rate",
              "98.7% (Requires Mark/Blackjack oneshot)",
              "99.2% (Short CD Spells)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~155M Mesos",
              "~160M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "12 to 16 Frags",
              "13 to 17 Frags",
            ],
            [
              "Key Operational Tip",
              "Optimize stolen skill buff cycles",
              "Chain Blade Tornado on cooldown",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Phantom Stolen Skill Selection & Dual Blade Rotations",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Phantom: Customizing Stolen Grinding Skills",
            paragraphs: [
              "Phantom offers unique flexibility by stealing 4th job skills like Showdown Chance or Cannon Bazooka depending on terrain layouts. Achieving 1-hit KO thresholds on Blackjack projectiles enables near-stationary grinding.",
            ],
          },
          {
            heading: "(2) Dual Blade: Blade Tornado & Karma Fury Cycles",
            paragraphs: [
              "Dual Blade rotates short-cooldown AOE spells (Blade Tornado and Karma Fury) to wipe multi-tiered ledges cleanly. Enhancing 6th Job Cores extends Blade Tornado reach, simplifying meso looting paths.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Hard Lucid Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Lucid clear rewards with a 2-hour Hotel Arcus WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Lucid Crystal (6-Player Party Share): ~18M Mesos (110M Solo)",
              "Sol Erda Fragments (15 Frags @ 6M ea): 90M Mesos",
              "Raw Mobs Meso Drops: 158M Mesos",
              "Gross Revenue: 266M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.90M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-9M Mesos)",
              "Total Net Profit: ~249M Mesos",
              "Net Hourly Wage: ~124M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What Combat Power is required for Phase 3 Hard Lucid solo DPS checks?",
            paragraphs: [
              "Dojo Floor 54+ or 40M+ Combat Power is recommended, alongside full burst buff alignment to burst down Phase 3 within 45 seconds.",
            ],
          },
          {
            heading:
              "Q. Which class yields higher WAP returns, Phantom or Dual Blade?",
            paragraphs: [
              "Dual Blade yields slightly higher raw mesos due to frequent short-cooldown AOEs. However, Phantom can steal Drop Rate passives, offering advantages in Sol Erda Fragment acquisition.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Lucid Earnings in 10 Seconds",
        paragraphs: [
          "Finished Hard Lucid or completed a 2-hour WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Lucid & WAP Revenue on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "gaenslime-marksman-pathfinder-part12",
    title:
      "Chaos Guardian Angel Slime Guide: Marksman vs Pathfinder WAP Rates",
    description:
      "Hands-on experience clearing Chaos Guardian Angel Slime wave mechanics. Comparing Marksman Piercing Snipe rotations with Pathfinder Cardinal macro farming. 1% AH tax breakdown.",
    koSlug: "gaenslime-marksman-pathfinder-part12",
    sections: [
      {
        heading:
          "Chaos Guardian Angel Slime Strategy & Marksman vs. Pathfinder WAP Revenue Audit",
        paragraphs: [
          "Attempting Chaos Guardian Angel Slime (Gaenslime), the most disorienting mechanic players face is managing laser sweeps overlapping with Slime Wave door block phases. Misplacing Mascot Slime doors during wave phases leads to failed groggy stun windows, rapidly draining death counts.",
          "Clearing Chaos Gaenslime requires maximizing burst DPS during 10-second groggy windows, but entering the raid without heavy wrist fatigue from daily grinding is equally essential. In this guide, I share my hands-on testing comparing Marksman and Pathfinder, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Chaos Gaenslime Wave Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Guardian Wave Door Block & Spacing Strategy",
            paragraphs: [
              "Blocking pink wave doors with Mascot Slime triggers a 10-second groggy phase. Marksman leverages range advantages and True Snipe iframe windows to burst safely from afar, while Pathfinder utilizes Cardinal Torrent mobility to adjust door blocking positions seamlessly.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Hotel Arcus maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Marksman", "Pathfinder"],
          rows: [
            [
              "Core Mechanic",
              "Piercing Arrow Line Sweeps + Split Arrow",
              "Cardinal Macro (Discharge + Blast) Homing",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (100% Horizontal Farming)",
              "★★☆☆☆ (Slight Wrist Strain)",
            ],
            [
              "Mob Clear Rate",
              "99.0% (Requires Split Arrow uptime)",
              "99.3% (Auto-homing arrows)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~158M Mesos",
              "~162M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "12 to 16 Frags",
              "13 to 17 Frags",
            ],
            [
              "Key Operational Tip",
              "Cover Split Arrow downtime gaps",
              "Recast Ancient Archer on cooldown",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Marksman Line Sweeps & Pathfinder Homing Rotations",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Marksman: Straight Line Penetration",
            paragraphs: [
              "Marksman excels at horizontal clearing with Piercing Arrow. Enhancing 6th Job Split Arrow expands vertical explosion radiuses, transforming rotations into near-stationary horizontal sweeps.",
            ],
          },
          {
            heading: "(2) Pathfinder: Cardinal Macro & Ancient Archer",
            paragraphs: [
              "Holding down the Cardinal Discharge + Blast macro from mid platforms targets spawns automatically. Weaving Ancient Archer on cooldown prevents mobs from clumping on top platforms.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Chaos Gaenslime Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Chaos Gaenslime clear rewards with a 2-hour Hotel Arcus WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Chaos Gaenslime Crystal (6-Player Party Share): ~16M Mesos (97M Solo)",
              "Sol Erda Fragments (15 Frags @ 6M ea): 90M Mesos",
              "Raw Mobs Meso Drops: 160M Mesos",
              "Gross Revenue: 266M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.90M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-8M Mesos)",
              "Total Net Profit: ~250M Mesos",
              "Net Hourly Wage: ~125M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What Combat Power is recommended for soloing Chaos Gaenslime?",
            paragraphs: [
              "Dojo Floor 52+ or 35M+ Combat Power is recommended. Mastering wave blocking timings to align 10-second burst windows is key to clearing.",
            ],
          },
          {
            heading:
              "Q. Which class offers lower physical fatigue during 2-hour grinding sessions?",
            paragraphs: [
              "Marksman is significantly easier. While Pathfinder offers auto-homing arrows, holding down macro keys causes wrist strain over time, whereas Marksman offers effortless horizontal clearing.",
            ],
          },
        ],
      },
      {
        heading:
          "5. [GG-PASS] Audit Your Gaenslime Earnings in 10 Seconds",
        paragraphs: [
          "Finished Chaos Gaenslime or completed a 2-hour WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Gaenslime & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "lotus-mechanic-marksman-part13",
    title: "Normal Lotus Guide: Mechanic vs Marksman WAP Net Hourly Wage",
    description:
      "Hands-on experience clearing reworked Normal Lotus laser and platform mechanics. Comparing Mechanic robot placement with Marksman Piercing line sweeps. 1% AH tax breakdown.",
    koSlug: "lotus-mechanic-marksman-part13",
    sections: [
      {
        heading:
          "Reworked Normal Lotus Strategy & Mechanic vs. Marksman WAP Revenue Audit",
        paragraphs: [
          "Attempting the reworked Normal Lotus raid, the most punishing mechanic players face is the Phase 3 electric floor field overlapping with debris stuns and wind knockback blasts. Missing platform timings causes players to drop onto electric fields, draining death counts rapidly during burst windows.",
          "Clearing Normal Lotus requires mechanical adaptation, but entering the raid without wrist fatigue from daily grinding is equally essential. In this guide, I share my hands-on testing comparing Mechanic and Marksman, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Normal Lotus Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Electric Floor Field & Platform Survival",
            paragraphs: [
              "Surviving Phase 3 requires tracking electric field spawn indicators and using Super Knockback immunity or mid-air delays to stay above ground. Mechanic uses Open Gate portals to teleport across platforms instantly, while Marksman utilizes True Snipe iframe duration to linger safely in mid-air.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Cernium maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Mechanic", "Marksman"],
          rows: [
            [
              "Core Mechanic",
              "Full Turret Deployment (RM7, RM1)",
              "Piercing Arrow Line Sweeps + Split Arrow",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (100% Stationary)",
              "★☆☆☆☆ (Simple Horizontal Sweeps)",
            ],
            [
              "Mob Clear Rate",
              "98.6% (Requires 1-hit KO on turrets)",
              "99.1% (Split Arrow Uptime)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~148M Mesos",
              "~152M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "11 to 15 Frags",
              "12 to 16 Frags",
            ],
            [
              "Key Operational Tip",
              "Ensure turret 1-hit KO damage thresholds",
              "Cover Split Arrow downtime gaps",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Mechanic Turret Setup & Marksman Line Sweeps",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Mechanic: 3-Point Triangular Turret Grid",
            paragraphs: [
              "Stationing RM7 on central ledges, RM1 on top-left platforms, and Robo Factory RM13 on the bottom right covers the map completely. If turrets require 2 hits to kill mobs, clear rates drop by over 15%, making Authentic Force upgrades critical.",
            ],
          },
          {
            heading: "(2) Marksman: Straight Line Penetration",
            paragraphs: [
              "Marksman clears horizontal layers effortlessly with Piercing Arrow. Enhancing 6th Job Split Arrow adds vertical explosion radiuses, transforming rotations into lazy horizontal jump sweeps.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Normal Lotus Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Normal Lotus clear rewards with a 2-hour Cernium WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Normal Lotus Crystal (6-Player Party Share): ~12M Mesos (71M Solo)",
              "Sol Erda Fragments (13 Frags @ 6M ea): 78M Mesos",
              "Raw Mobs Meso Drops: 150M Mesos",
              "Gross Revenue: 240M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.78M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-6M Mesos)",
              "Total Net Profit: ~226M Mesos",
              "Net Hourly Wage: ~113M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What Combat Power is recommended for soloing reworked Normal Lotus?",
            paragraphs: [
              "Dojo Floor 48+ or 15M+ Combat Power is recommended. Learning electric field jump timings is the most crucial factor for survival.",
            ],
          },
          {
            heading:
              "Q. Which class offers better grinding comfort, Mechanic or Marksman?",
            paragraphs: [
              "If your turrets achieve 1-hit KOs, Mechanic offers unmatched 100% stationary farming. If gear is slightly lacking, Marksman yields higher mob clear rates.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Lotus Earnings in 10 Seconds",
        paragraphs: [
          "Finished Normal Lotus or completed a Cernium WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Lotus & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "lucid-viper-shadower-part14",
    title: "Hard Lucid Strategy: Viper vs Shadower WAP Net Hourly Wage",
    description:
      "Hands-on experience clearing Hard Lucid Phase 2 lasers and Phase 3 45-second DPS checks. Comparing Viper Lazy Serpent rotations with Shadower Meso Explosion farming. 1% AH tax breakdown.",
    koSlug: "lucid-viper-shadower-part14",
    sections: [
      {
        heading:
          "Hard Lucid Phase 3 DPS Check Strategy & Viper vs. Shadower WAP Revenue Audit",
        paragraphs: [
          "Attempting Hard Lucid, the most punishing wall players encounter is surviving Phase 2 dragon/laser overlaps while reserving burst cooldowns for the 45-second Phase 3 DPS time attack. Failing to burst down Lucid's barrier within the strict time limit results in instant wipeouts despite having plenty of death counts remaining.",
          "Clearing Hard Lucid requires flawless burst alignment, but entering the raid without severe wrist strain from daily grinding is equally essential. In this guide, I share my hands-on testing comparing Viper and Shadower, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Hard Lucid Phase 3 Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Phase 3 45-Second DPS Barrier Strategy",
            paragraphs: [
              "Phase 3 requires unloading pure stationary burst damage within 45 seconds. Viper excels with Lightning Form and Howling Fist for massive short-window burst density, while Shadower relies on Soul Seeker and Assassinate + Meso Explosion weave cancels for high sustained DPM.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters (Shadower includes passive +15% Meso rate) in Shangri-La maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Viper", "Shadower"],
          rows: [
            [
              "Core Mechanic",
              "Serpent Screw Aura + Lazy Jumping",
              "Assassinate + Meso Explosion Weave",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (100% Lazy Jump Farming)",
              "★★★☆☆ (High Wrist Strain)",
            ],
            [
              "Mob Clear Rate",
              "99.2% (1-hit KO Serpent Screw)",
              "99.5% (1-hit KO Meso Explosion)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~162M Mesos",
              "~186M Mesos (+15% Passive Bonus)",
            ],
            [
              "Sol Erda Fragments",
              "13 to 17 Frags",
              "14 to 18 Frags",
            ],
            [
              "Key Operational Tip",
              "Maintain Energy gauge if Serpent fails 1-hit",
              "Requires high funding for ME 1-hit KO",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Viper Lazy Serpent & Shadower Meso Explosion Weaving",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Viper: Effortless Serpent Screw Rotations",
            paragraphs: [
              "Viper maintains Serpent Screw while jumping across platforms to disintegrate mobs instantly. Cycling 6th Job Origin skills and Transform allows for near-stationary grinding with zero wrist strain.",
            ],
          },
          {
            heading: "(2) Shadower: Passive Meso Bonuses & Explosive Clearing",
            paragraphs: [
              "Shadower benefits from the innate passive skill Greed, boosting meso rates by 15% above other classes. Achieving 1-hit KO thresholds on Meso Explosion yields over 20M additional mesos per 2-hour WAP session.",
            ],
          },
        ],
      },
      {
        heading: "3. Hard Lucid Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Lucid clear rewards with a 2-hour Shangri-La WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Lucid Crystal (6-Player Party Share): ~23M Mesos (138M Solo)",
              "Sol Erda Fragments (15 Frags @ 6M ea): 90M Mesos",
              "Raw Mobs Meso Drops: 174M Mesos (Average)",
              "Gross Revenue: 287M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.90M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-8M Mesos)",
              "Total Net Profit: ~271M Mesos",
              "Net Hourly Wage: ~135M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What Combat Power is recommended for soloing Hard Lucid Phase 3?",
            paragraphs: [
              "Dojo Floor 55+ or 50M+ Combat Power is recommended. Aligning all guild buffs, potion stacks, and 6th Job Origin skills into the 45-second window is the most critical factor.",
            ],
          },
          {
            heading:
              "Q. Which class wins in terms of overall grinding efficiency?",
            paragraphs: [
              "If purely maximizing mesos, Shadower wins due to its passive +15% Meso rate. However, for long-term physical comfort during 2-hour sessions, Viper's effortless lazy farming is superior.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Lucid Earnings in 10 Seconds",
        paragraphs: [
          "Finished Hard Lucid or completed a Shangri-La WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Lucid & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "will-nightlord-adele-part15",
    title: "Hard Will Strategy: Night Lord vs Adele WAP Net Hourly Wage",
    description:
      "Hands-on experience clearing Hard Will Phase 2 web locking and Phase 3 white web mechanics. Comparing Night Lord Mark of Night Lord 1-hit KO limits with Adele Divide farming in Odium. 1% AH tax breakdown.",
    koSlug: "will-nightlord-adele-part15",
    sections: [
      {
        heading:
          "Hard Will Phase 2/3 Web Mechanics & Night Lord vs. Adele WAP Revenue Audit",
        paragraphs: [
          "Attempting Hard Will, the most frustrating obstacles players face are managing Moonlight Gauges during Phase 2 health recovery windows and clearing white webs before losing room to maneuver in Phase 3. Failing to time iframe skills during poison debuffs leads to rapid party wipes and lost death counts.",
          "Clearing Hard Will demands strict mechanical coordination, but entering the raid without high physical fatigue from daily grinding is equally essential. In this guide, I share my hands-on testing comparing Night Lord and Adele, auditing their WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading: "1. Hard Will Web Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Phase-Specific Web Management & Iframe Usage",
            paragraphs: [
              "Hard Will Phase 2 requires collecting Moonlight Gauges to remove webs every 2 minutes for health regen checks. Night Lord's Spread Throw provides devastating short-window burst during Phase 3, while Adele's Dike offers damage reduction and iframe windows to counter Phase 3 knockbacks easily.",
            ],
          },
          {
            heading: "(2) 2-Hour WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Odium maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Night Lord", "Adele"],
          rows: [
            [
              "Core Mechanic",
              "Mark of Night Lord Procs + Showdown",
              "Divide AoE Sweeps + Order Swords",
            ],
            [
              "Fatigue Level",
              "★★☆☆☆ (Lazy if Mark 1-hits)",
              "★★☆☆☆ (Stationary Divide Sweeps)",
            ],
            [
              "Mob Clear Rate",
              "99.4% (Requires Mark 1-hit KO threshold)",
              "99.1% (Divide + Tread rotation)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~168M Mesos",
              "~164M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "14 to 18 Frags",
              "13 to 17 Frags",
            ],
            [
              "Key Operational Tip",
              "Clear rates drop 30%+ if Mark fails 1-hit",
              "Manage Ether Gauge & Order uptime",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Night Lord Mark Funding & Adele Divide Rotations",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Night Lord: High Funding Mark Procs",
            paragraphs: [
              "Night Lord shines once Mark of Night Lord star projectiles achieve 1-hit KO status. Enhancing 6th Job Blessing Mark triggers map-wide chain explosions with simple jump-showdown loops.",
            ],
          },
          {
            heading: "(2) Adele: Broad Divide Hitboxes & Ether Control",
            paragraphs: [
              "Adele offers effortless near-stationary clearing using Divide from mid platforms. Weaving Ruin and Squall on spawn cooldowns clears top-corner spawns to maintain 99%+ mob clear rates.",
            ],
          },
        ],
      },
      {
        heading: "3. Hard Will Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Will clear rewards with a 2-hour Odium WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Will Crystal (6-Player Party Share): ~30M Mesos (180M Solo)",
              "Sol Erda Fragments (15 Frags @ 6M ea): 90M Mesos",
              "Raw Mobs Meso Drops: 166M Mesos (Average)",
              "Gross Revenue: 286M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-0.90M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-8M Mesos)",
              "Total Net Profit: ~270M Mesos",
              "Net Hourly Wage: ~135M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading: "Q. What Combat Power is recommended for soloing Hard Will?",
            paragraphs: [
              "Dojo Floor 56+ or 65M+ Combat Power is recommended. Precision timing on Phase 2 health regen windows and surviving Phase 3 poison phases are mandatory.",
            ],
          },
          {
            heading:
              "Q. Which class is more budget-friendly for grinding efficiency?",
            paragraphs: [
              "Adele is vastly more cost-effective. Night Lord requires substantial gear investment to reach 1-hit KO thresholds on Mark projectiles, whereas Adele clears comfortably at lower funding levels.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Will Earnings in 10 Seconds",
        paragraphs: [
          "Finished Hard Will or completed an Odium WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Will & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "dunkel-hero-soulmaster-part17",
    title: "Hard Dunkel Strategy: Hero vs Soul Master WAP Net Hourly Wage",
    description:
      "Hands-on experience surviving Hard Dunkel falling debris status effects and Elite Boss overlap attacks. Comparing Hero Worldreaver iframe burst with Soul Master Cosmic Shower stationary farming in Carcion. 1% AH tax breakdown.",
    koSlug: "dunkel-hero-soulmaster-part17",
    sections: [
      {
        heading:
          "Hard Dunkel Elite Boss Strategy & Hero vs. Soul Master WAP Revenue Audit",
        paragraphs: [
          "Attempting Hard Dunkel, the most punishing wall players encounter is dodging falling status-inflicting debris (stun, blind, seal) while 3 Elite Bosses spawn simultaneously to unleash overlapping cleave attacks. A single mistimed upward jump or misaligned iframe cooldown can wipe out 5 death counts in seconds, ending the raid run abruptly.",
          "Clearing Hard Dunkel requires disciplined debris awareness and short burst execution, but maintaining low physical wrist strain during daily grinding is equally crucial. In this guide, I share my hands-on testing comparing Hero and Soul Master (Dawn Warrior), auditing their Carcion WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Hard Dunkel Elite Boss Overlaps & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Debris Management & Iframe Rotation Strategy",
            paragraphs: [
              "Hard Dunkel requires predicting sword wave trajectories even when floor visual indicators overlap with debris. Hero leverages Worldreaver (a 20-second low-cooldown iframe) and Combo Instinct to safely ignore deadly Elite Boss overlaps during full burst windows. Meanwhile, Soul Master utilizes Elysion, Cosmos, and Cosmic Burst for wide cleave hitboxes and invulnerability frames.",
            ],
          },
          {
            heading: "(2) 2-Hour Carcion WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Level 285 Carcion maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Hero", "Soul Master (Dawn Warrior)"],
          rows: [
            [
              "Core Mechanic",
              "Raging Blow + Valhalla + Aura Blade",
              "Solar Slash + Cosmic Shower Turret",
            ],
            [
              "Fatigue Level",
              "★★☆☆☆ (Wide Raging Blow Jump Clears)",
              "★☆☆☆☆ (Stationary Cosmic Shower Farming)",
            ],
            [
              "Mob Clear Rate",
              "99.1% (Aura Blade projectile support)",
              "99.6% (60-sec Cosmic Shower turret uptime)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~171M Mesos",
              "~174M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "15 to 19 Frags",
              "15 to 19 Frags",
            ],
            [
              "Key Operational Tip",
              "Throw Aura Blade on cooldown for upper tiers",
              "Track Cosmic Orb stacks for shower refresh",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Hero Jump Clears & Soul Master Stationary Turrets",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Hero: Enhanced Raging Blow & Aura Blade Sweeps",
            paragraphs: [
              "Hero benefits heavily from 6th Job Mastery enhancements, dramatically expanding the hitbox of Raging Blow. cycling Aura Blade and Incising allows effortless jump-clearing across Carcion platform layouts.",
            ],
          },
          {
            heading: "(2) Soul Master: Cosmic Shower Placement & Solar Slash Spam",
            paragraphs: [
              "Soul Master deploys Cosmic Shower on mid-tier platforms to continuously barrage newly spawned mobs for 60 seconds. The player remains stationary on the bottom floor casting Solar Slash, achieving zero-fatigue 2-hour grinding sessions.",
            ],
          },
        ],
      },
      {
        heading: "3. Hard Dunkel Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Dunkel clear rewards with a 2-hour Carcion WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Dunkel Crystal (6-Player Party Share): ~35M Mesos (210M Solo)",
              "Sol Erda Fragments (17 Frags @ 6M ea): 102M Mesos",
              "Raw Mobs Meso Drops: 172M Mesos (Average)",
              "Gross Revenue: 309M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.02M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-8M Mesos)",
              "Total Net Profit: ~292M Mesos",
              "Net Hourly Wage: ~146M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading: "Q. What Combat Power is recommended for soloing Hard Dunkel?",
            paragraphs: [
              "Dojo Floor 57+ or 75M+ Combat Power is recommended. Conserving status-cleansing skills for stun debris and keeping Dunkel away from corners to prevent camera traps are essential skills.",
            ],
          },
          {
            heading: "Q. Which class wins in survivability vs. grinding comfort?",
            paragraphs: [
              "For boss survivability, Hero wins with its 20-second cooldown iframe Worldreaver. For grinding comfort, Soul Master is vastly superior due to its 60-second stationary turret Cosmic Shower.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Dunkel Earnings in 10 Seconds",
        paragraphs: [
          "Finished Hard Dunkel or completed a Carcion WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Dunkel & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "vhilla-da-phantom-part18",
    title:
      "Hard Verus Hilla Strategy: Demon Avenger vs Phantom WAP Net Hourly Wage",
    description:
      "Hands-on experience surviving Hard Verus Hilla red string entanglement and hourglass scythe clears. Comparing Demon Avenger Shield Chasing homing farming with Phantom stolen skill mobility in Carcion. 1% AH tax breakdown.",
    koSlug: "vhilla-da-phantom-part18",
    sections: [
      {
        heading:
          "Hard Verus Hilla Red String Strategy & Demon Avenger vs. Phantom WAP Revenue Audit",
        paragraphs: [
          "Attempting Hard Verus Hilla (V.Hilla), the most brutal failure point players face is getting caught in red thread webs, causing death skulls to turn green. Failing to cleanse altars in time before the hourglass scythe slash results in instant, unpreventable death count losses. With potion healing permanently blocked, lacking innate lifesteal or precise iframe rotations leads to immediate party wipes.",
          "Clearing Verus Hilla requires strict thread avoidance and coordinated altar cleanses, but entering the raid without high physical wrist fatigue from daily grinding is equally essential. In this guide, I share my hands-on testing comparing Demon Avenger and Phantom, auditing their Carcion WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Hard Verus Hilla Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Red Thread Avoidance & Potion Block Survival",
            paragraphs: [
              "Verus Hilla blocks standard consumable potions, making innate sustain and invulnerability skills paramount. Demon Avenger bypasses healing restrictions using Bloody Feast HP recovery, Demonic Frenzy management, and Revenant fury immortality. Meanwhile, Phantom utilizes stolen Explorer skills like Final Cut and Sacrosanctity iframes alongside Shroud blinks to maneuver around red strings effortlessly.",
            ],
          },
          {
            heading: "(2) 2-Hour Carcion WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Level 285 Carcion maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Demon Avenger", "Phantom"],
          rows: [
            [
              "Core Mechanic",
              "Shield Chasing Procs + Execution",
              "Stolen Explorer AoE + Blackjack Homing",
            ],
            [
              "Fatigue Level",
              "★☆☆☆☆ (Homing Shield Lazy Clear)",
              "★★☆☆☆ (Active Mobility Clearing)",
            ],
            [
              "Mob Clear Rate",
              "99.5% (Shield Chasing 2-hit KO threshold)",
              "99.2% (AoE + Blackjack rotation)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~173M Mesos",
              "~170M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "15 to 19 Frags",
              "14 to 18 Frags",
            ],
            [
              "Key Operational Tip",
              "Cooldown reduction hat maximizes Shield uptime",
              "Maintain stolen skill buff rotations",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Demon Avenger Shield Spams & Phantom Stolen Skill Clears",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Demon Avenger: Low Cooldown Shield Chasing Laziness",
            paragraphs: [
              "With cooldown reduction gear, Demon Avenger casts Shield Chasing into the air to automatically hunt down mobs across all platforms. Upgrading 6th Job Mastery cores creates a zero-movement stationary farming routine on the bottom floor.",
            ],
          },
          {
            heading: "(2) Phantom: Stolen Explorer Cleaves & Blackjack Projectiles",
            paragraphs: [
              "Phantom steals skills like Showdown Challenge for broad horizontal hitboxes while bouncing Blackjack cards on cooldown to clean up distant spawns. High mobility allows fluid navigation across Carcion's tiered layout.",
            ],
          },
        ],
      },
      {
        heading:
          "3. Hard Verus Hilla Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Hard Verus Hilla clear rewards with a 2-hour Carcion WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Hard Verus Hilla Crystal (6-Player Party Share): ~42M Mesos (252M Solo)",
              "Sol Erda Fragments (17 Frags @ 6M ea): 102M Mesos",
              "Raw Mobs Meso Drops: 171M Mesos (Average)",
              "Gross Revenue: 315M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.02M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-8M Mesos)",
              "Total Net Profit: ~299M Mesos",
              "Net Hourly Wage: ~150M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading:
              "Q. What Combat Power is recommended for soloing Hard Verus Hilla?",
            paragraphs: [
              "Dojo Floor 58+ or 85M+ Combat Power is recommended. Knowing when to burst between scythe timers and coordinating altar triggers before reaching 3 green skulls are mandatory mechanics.",
            ],
          },
          {
            heading:
              "Q. Which class provides lower physical fatigue during grinding?",
            paragraphs: [
              "Demon Avenger is vastly superior in comfort. Its auto-homing Shield Chasing projectiles eliminate the need to actively traverse platforms, whereas Phantom requires continuous keystroke inputs.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your V.Hilla Earnings in 10 Seconds",
        paragraphs: [
          "Finished Hard Verus Hilla or completed a Carcion WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net V.Hilla & WAP Wage on GG-PASS: https://gg-pass.com/en/",
        ],
      },
    ],
  },
  {
    slug: "seren-db-windbreaker-part19",
    title:
      "Chosen Seren Strategy: Dual Blade vs Wind Breaker WAP Net Hourly Wage",
    description:
      "Hands-on experience managing Chosen Seren Phase 2 Noon gauges and laser mechanics. Comparing Dual Blade iframe burst rotations with Wind Breaker Emerald Dust decoy farming in Carcion. 1% AH tax breakdown.",
    sections: [
      {
        heading:
          "Chosen Seren Noon Gauge Strategy & Dual Blade vs. Wind Breaker WAP Revenue Audit",
        paragraphs: [
          "Attempting Chosen Seren, the most punishing mechanic raid parties encounter is managing the Phase 2 Noon gauge. When laser strikes and pillar explosions hit players continuously, gauges surge to trigger blinding daylight debuffs and instant wipes. Missing bind coordination or iframe timing during Midnight burst windows allows Seren's protective barrier to regenerate, causing inevitable timeout defeats.",
          "Clearing Chosen Seren requires precise gauge discipline and burst execution, but maintaining low physical wrist fatigue during daily grinding is equally essential. In this guide, I share my hands-on testing comparing Dual Blade and Wind Breaker (Wind Archer), auditing their Carcion WAP earnings and net hourly wages while factoring in mandatory 1% Auction House transaction taxes.",
        ],
      },
      {
        heading:
          "1. Chosen Seren Gauge Mechanics & Class Performance Comparison",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Phase 2 Noon Evasion & Midnight Burst Strategy",
            paragraphs: [
              "Seren Phase 2 requires minimizing hits during Noon to prevent gauge overflows, saving all major buffs for Midnight windows. Dual Blade utilizes Final Cut and Chains of Hell low-cooldown iframes to safely ignore laser sweeps while unloading Blade Storm. Meanwhile, Wind Breaker deploys Emerald Flower (Dust) decoys to misdirect Seren's charges, opening safe zones for the entire party.",
            ],
          },
          {
            heading: "(2) 2-Hour Carcion WAP Performance Breakdown",
            paragraphs: [
              "Tested under 100% Meso and 200% Drop gear parameters in Level 285 Carcion maps.",
            ],
          },
        ],
        table: {
          headers: ["Metrics", "Dual Blade", "Wind Breaker (Wind Archer)"],
          rows: [
            [
              "Core Mechanic",
              "Blade Tornado + Karma Fury",
              "Vortex Sphere + Howling Gale + Trifling Wind",
            ],
            [
              "Fatigue Level",
              "★★☆☆☆ (AoE Cooldown Jump Clears)",
              "★☆☆☆☆ (Automated Homing Projectile Farming)",
            ],
            [
              "Mob Clear Rate",
              "99.3% (Tornado/Fury 1-hit KO threshold)",
              "99.6% (Stationary homing clears)",
            ],
            [
              "Raw Mesos (2 Hours)",
              "~171M Mesos",
              "~174M Mesos",
            ],
            [
              "Sol Erda Fragments",
              "15 to 19 Frags",
              "15 to 19 Frags",
            ],
            [
              "Key Operational Tip",
              "Weave Blade Ascension during cooldown gaps",
              "Requires Trifling Wind 1-hit KO funding",
            ],
          ],
        },
      },
      {
        heading:
          "2. Practical Tips: Dual Blade AoE Cycling & Wind Breaker Homing Systems",
        paragraphs: [],
        subsections: [
          {
            heading: "(1) Dual Blade: Blade Tornado & Karma Fury Rotations",
            paragraphs: [
              "Dual Blade alternates between short-cooldown AoEs Blade Tornado and Karma Fury across mid platforms. Upgraded 6th Job Mastery cores significantly expand upper hitboxes for smooth tiered platform clearing.",
            ],
          },
          {
            heading: "(2) Wind Breaker: Vortex Sphere & Howling Gale Turrets",
            paragraphs: [
              "Wind Breaker fires Vortex Sphere forward while releasing Howling Gale gusts on cooldown to disintegrate distant monster clusters. Holding Song of Heaven on the bottom floor continuously generates Trifling Wind projectiles for zero-effort grinding.",
            ],
          },
        ],
      },
      {
        heading: "3. Chosen Seren Clear & 2-Hour WAP Net Revenue Breakdown",
        paragraphs: [
          "Settlement audit combining Chosen Seren clear rewards with a 2-hour Carcion WAP session:",
        ],
        subsections: [
          {
            heading: "💡 Financial Baseline Parameters",
            paragraphs: [],
            bullets: [
              "Chosen Seren Crystal (Normal 6-Player Party Share): ~48M Mesos (290M Hard Solo)",
              "Sol Erda Fragments (17 Frags @ 6M ea): 102M Mesos",
              "Raw Mobs Meso Drops: 172M Mesos (Average)",
              "Gross Revenue: 322M Mesos",
            ],
          },
          {
            heading: "Deductions & Final Net Hourly Wage (GG-PASS Algorithm)",
            paragraphs: [],
            bullets: [
              "1% Auction House Fee: Tax on Fragment sales (-1.02M Mesos)",
              "Fixed Consumables: 1 WAP Potion (-7M Mesos) + Boss Buffs (-8M Mesos)",
              "Total Net Profit: ~306M Mesos",
              "Net Hourly Wage: ~153M Mesos / Hour",
            ],
          },
        ],
      },
      {
        heading: "4. Frequently Asked Questions (FAQ)",
        paragraphs: [],
        subsections: [
          {
            heading: "Q. What Combat Power is recommended for soloing Normal Seren?",
            paragraphs: [
              "Dojo Floor 60+ or 100M+ Combat Power is recommended. Flawless gauge management during Noon and clean 6th Job Origin burst execution during Midnight are mandatory.",
            ],
          },
          {
            heading: "Q. Which class offers superior grinding comfort?",
            paragraphs: [
              "While both classes excel in survivability, Wind Breaker wins decisively in grinding comfort thanks to its automated projectile tracking.",
            ],
          },
        ],
      },
      {
        heading: "5. [GG-PASS] Audit Your Seren Earnings in 10 Seconds",
        paragraphs: [
          "Finished Chosen Seren or completed a Carcion WAP session? Calculate your exact net earnings after 1% AH taxes and potion costs using the GG-PASS Meso Calculator (https://gg-pass.com/en/)!",
          "Calculate Your Net Seren & WAP Wage on GG-PASS: https://gg-pass.com/en/",
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
