# 메이플 재획 정산 (Maple Re-plan Tracker)

메이플스토리 2시간(120분) 1차 재획 기준 타이머, 사냥 기록, 1·2·3차 재획 누적 정산 및 메소 시급 계산 도구입니다.  
웹 브라우저 또는 **Electron** 데스크톱 앱으로 실행할 수 있습니다.

## 웹 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

```bash
npm run build
npm start
```

## Electron 실행 (항상 위 오버레이)

개발 중 Next 서버와 Electron을 함께 띄웁니다:

```bash
npm install
npm run electron:dev
```

- **메인 창**: 전체 정산 UI (`http://localhost:3000`)
- **오버레이 모드** 버튼: `alwaysOnTop`, 프레임 없는 투명 미니 창 (`/overlay`, 타이머만)
- `localStorage`는 `localhost` 기준으로 브라우저·Electron 메인 창에서 동일하게 유지됩니다.

브라우저만으로 접속한 경우 오버레이 버튼은 *「Electron 앱에서 사용하세요」* 안내를 표시합니다.

### 프로덕션 (Electron + Next)

1. Next 빌드 후 서버 실행  
   `npm run build` → `npm run electron:prod`  
   (또는 터미널 두 개: `npm start` + `npm run electron`)

2. Electron은 `http://localhost:3000` 에 로드합니다. 포트 변경 시 `PORT=3001 npm run electron:prod` 처럼 `PORT` 환경 변수를 맞춥니다.

### Windows 설치 파일 (electron-builder)

```bash
npm run dist
```

- `dist-electron/` 폴더에 NSIS 설치 프로그램·portable exe가 생성됩니다.
- **주의**: 패키징된 exe만으로는 Next 서버가 포함되지 않습니다. 배포 시에는 `npm run build` 후 `next start`를 함께 배포하거나, 정적 export 방식으로 전환하는 구성이 필요합니다.

## 사용 흐름 (버튼 분리)

1. 사냥 통계 입력 → **정산 결과 확인** → 대시보드·세션 목록 갱신 (파일 저장 없음)
2. (선택) 대시보드 **인증샷 저장** → `메이플_재획_총정산.png` 다운로드 (html2canvas)

## 주요 기능

- 2시간 카운트다운/카운트업 타이머 (`Date.now()` 델타)
- `Ctrl+Shift+Space` 전역 시작/정지
- Electron 항상 위 오버레이 (~300×200)
- 사냥터 14곳 · Lv.260+ 솔 에르다 조각 / 코어 젬 UI
- 메소 콤마·한글 단위 (억/조) 입력
- 1·2·3재획 세션 기록 및 오늘의 총합·시급
- localStorage 전체 상태 저장

## 키 파일

| 경로 | 설명 |
|------|------|
| `electron/main.js` | Electron 메인·오버레이 창 |
| `electron/preload.js` | `window.electronAPI` (openOverlay / closeOverlay) |
| `app/page.tsx` | 메인 페이지 |
| `app/overlay/page.tsx` | 미니 오버레이 |
| `components/ReplanApp.tsx` | 상태·기록·단축키 |
| `components/Dashboard.tsx` | 총합 + 인증샷 버튼 |
| `lib/huntingGrounds.ts` | 사냥터 메타데이터 |
| `lib/storage.ts` | localStorage |
