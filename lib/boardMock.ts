export type BoardPost = {
  id: number;
  title: string;
  author: string;
  date: string;
};

export const BRAG_POSTS: BoardPost[] = [
  { id: 42, title: "265재획 인증합니다 — 2시간 18억 돌파", author: "메소왕", date: "2026-05-24" },
  { id: 41, title: "[인증샷] 카르시온 3층 솔플 클리어", author: "재획러", date: "2026-05-23" },
  { id: 40, title: "1재획 연속 5회 15억+ 달성 인증", author: "뉴비탈출", date: "2026-05-23" },
  { id: 39, title: "오늘 솔 에르다 조각 120개 — 스샷 첨부", author: "조각수집가", date: "2026-05-22" },
  { id: 38, title: "3재획 풀버프 후 시급 9.5억 인증샷", author: "버프덕", date: "2026-05-22" },
  { id: 37, title: "첫 260 사냥터 정산 인증 — 감격", author: "성장중", date: "2026-05-21" },
  { id: 36, title: "[스샷] 주간 누적 120억 돌파 기념", author: "메이플유저", date: "2026-05-21" },
];

export const TIPS_POSTS: BoardPost[] = [
  { id: 28, title: "카르시온 왼쪽 빌드 꿀팁 공유", author: "빌드마스터", date: "2026-05-24" },
  { id: 27, title: "260+ 사냥터 솔 에르다 효율 비교 정리", author: "데이터맨", date: "2026-05-24" },
  { id: 26, title: "재획 타이머 2시간 맞추는 루틴 팁", author: "시간관리", date: "2026-05-23" },
  { id: 25, title: "메소 시급 올리는 버프 세팅 (260 미만)", author: "젬파머", date: "2026-05-23" },
  { id: 24, title: "사냥터 이동 루트 — 워프 최단 경로", author: "길잡이", date: "2026-05-22" },
  { id: 23, title: "EXP% vs 메소% — 재획 목표별 선택 가이드", author: "가이드왕", date: "2026-05-22" },
  { id: 22, title: "오버레이 모드로 2시간 타이머 쓰는 법", author: "PC유저", date: "2026-05-21" },
];
