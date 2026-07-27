import type { Locale } from "@/lib/locale";

export type HuntingGround = {
  id: string;
  label: string;
  /** GMS English display name for /en UI */
  labelEn: string;
  aliases: string[];
  /** Map level requirement; below 260 → gemstone, 260+ → fragment */
  minLevel: number;
  isGrandis?: boolean;
};

export const LEVEL_260_THRESHOLD = 260;

/** minLevel ≥ 260 (or isGrandis) → Sol Erda Fragment; else Core Gemstone */
export const HUNTING_GROUNDS: HuntingGround[] = [
  {
    id: "vanishing-cave-bottom",
    label: "[소멸의 여로] 동굴 아래쪽",
    labelEn: "[Vanishing Journey] Cave Below",
    aliases: ["소멸", "동굴 아래"],
    minLevel: 250,
  },
  {
    id: "chuchu-rapids-3",
    label: "[츄츄] 격류지대 3",
    labelEn: "[Chu Chu Island] Rough Waters 3",
    aliases: ["츄츄", "격류"],
    minLevel: 220,
  },
  {
    id: "lachelein-chickens-2",
    label: "[레헬른] 닭이 뛰노는 곳 2 (닭뛰)",
    labelEn: "[Lachelein] Where Chickens Roam 2",
    aliases: ["레헬른", "닭뛰"],
    minLevel: 225,
  },
  {
    id: "arcana-cave-lower",
    label: "[아르카나] 동굴 아랫길 (동아)",
    labelEn: "[Arcana] Cave Lower Path",
    aliases: ["아르카나", "동아"],
    minLevel: 225,
  },
  {
    id: "morass-troupe-3",
    label: "[모라스] 그날의 트뤼에페 3",
    labelEn: "[Morass] That Day's Trueffe 3",
    aliases: ["모라스", "트뤼에페"],
    minLevel: 230,
  },
  {
    id: "esfera-mirror-sea-2",
    label: "[에스페라] 거울빛에 물든 바다 2",
    labelEn: "[Esfera] Mirror-Touched Sea 2",
    aliases: ["에스페라"],
    minLevel: 235,
  },
  {
    id: "limen-world-end",
    label: "[리멘] 세계가 끝나는 곳 (세끝)",
    labelEn: "[Limen] Where the World Ends",
    aliases: ["리멘", "세끝"],
    minLevel: 255,
  },
  {
    id: "serenium-library-1",
    label: "[세르니움] 왕실 도서관 제1구역",
    labelEn: "[Cernium] Royal Library Section 1",
    aliases: ["세르니움", "도서관"],
    minLevel: 260,
    isGrandis: true,
  },
  {
    id: "burning-serenium-west-wall",
    label: "[불타는 세르니움] 서쪽 성벽",
    labelEn: "[Burning Cernium] Western City Wall",
    aliases: ["불세르", "서쪽 성벽"],
    minLevel: 260,
    isGrandis: true,
  },
  {
    id: "arcus-train-1",
    label: "[아르쿠스] 횡단열차 1",
    labelEn: "[Hotel Arcus] Crossing Train 1",
    aliases: ["아르쿠스"],
    minLevel: 265,
    isGrandis: true,
  },
  {
    id: "odium-gate-1",
    label: "[오디움] 성문으로 가는 길 1",
    labelEn: "[Odium] Path to the Castle Gate 1",
    aliases: ["오디움"],
    minLevel: 265,
    isGrandis: true,
  },
  {
    id: "dowongyeong-four-seasons",
    label: "[도원경] 사계절 사냥터",
    labelEn: "[Shangri-La] Four Seasons Hunting Ground",
    aliases: ["도원경"],
    minLevel: 265,
    isGrandis: true,
  },
  {
    id: "arteria-lower-teleport",
    label: "[아르테리아] 하층 전송 구역",
    labelEn: "[Arteria] Lower Teleport Zone",
    aliases: ["아르테리아"],
    minLevel: 270,
    isGrandis: true,
  },
  {
    id: "carcion-turtle-1",
    label: "[카르시온] 거북이 품 1",
    labelEn: "[Carcion] Turtle's Embrace 1",
    aliases: ["카르시온", "거북이"],
    minLevel: 270,
    isGrandis: true,
  },
];

export function isLevel260Plus(ground: Pick<HuntingGround, "minLevel" | "isGrandis">): boolean {
  return ground.isGrandis === true || ground.minLevel >= LEVEL_260_THRESHOLD;
}

export function getGroundById(id: string): HuntingGround | undefined {
  return HUNTING_GROUNDS.find((g) => g.id === id);
}

export function getGroundLabel(
  ground: Pick<HuntingGround, "label" | "labelEn">,
  locale: Locale = "ko"
): string {
  return locale === "en" ? ground.labelEn : ground.label;
}

/** 260+ Grandis → Erda Fragment; Arcane River (<260) → Core Gemstone */
export function usesFragmentDrop(groundId: string): boolean {
  const ground = getGroundById(groundId);
  if (!ground) return true;
  return isLevel260Plus(ground);
}

export const GEMSTONE_GROUNDS = HUNTING_GROUNDS.filter((g) => !isLevel260Plus(g));
export const FRAGMENT_GROUNDS = HUNTING_GROUNDS.filter((g) => isLevel260Plus(g));
