/** 개인정보처리방침·이용약관 전문 */

export const LEGAL_OPERATOR = "wopsgame";
export const LEGAL_CONTACT_EMAIL = "wopsgame@gmail.com";
export const LEGAL_EFFECTIVE_DATE = "2026년 5월 25일";
export const LEGAL_EFFECTIVE_DATE_EN = "May 25, 2026";
export const LEGAL_LAST_UPDATED = "2026년 8월 21일";
export const LEGAL_LAST_UPDATED_EN = "August 21, 2026";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
};

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "총칙",
    paragraphs: [
      `메이플 재획 정산(이하 "본 서비스", URL 및 관련 하위 페이지)은 ${LEGAL_OPERATOR}(이하 "운영자")가 제공하는 웹·데스크톱 기반 무료 계산 도구입니다. 본 개인정보처리방침은 대한민국 개인정보 보호 관련 법령 및 Google AdSense 프로그램 정책을 준수하기 위해 작성되었으며, 이용자가 본 서비스를 이용할 때 적용됩니다.`,
      "운영자는 이용자의 개인정보를 보호하기 위해 최소 수집·로컬 저장 원칙을 따릅니다. 본 방침을 정기적으로 확인하시기 바라며, 중요한 변경 시 서비스 내 공지 또는 본 페이지 시행일 갱신으로 안내합니다.",
    ],
  },
  {
    id: "controller",
    title: "1. 개인정보 처리자",
    paragraphs: [
      `개인정보 처리자: ${LEGAL_OPERATOR}`,
      `연락처: ${LEGAL_CONTACT_EMAIL}`,
      "본 서비스는 별도의 법인 설립 없이 개인 운영자가 제공할 수 있으며, 문의·열람·삭제 요청은 위 이메일로 접수합니다.",
    ],
  },
  {
    id: "collect",
    title: "2. 수집하는 개인정보 항목 및 방법",
    paragraphs: [
      "본 서비스는 회원가입, 로그인, SNS 연동을 제공하지 않습니다. 운영자 서버에 이용자의 실명, 주민등록번호, 게임 계정 ID, 사냥 기록, 메소·경험치 입력값을 저장·전송하지 않습니다.",
      "다만 이용 과정에서 아래 정보가 자동 또는 선택적으로 처리될 수 있습니다.",
    ],
    listItems: [
      "브라우저 localStorage: 사냥 세션 기록, 타이머 상태, 사냥터·메소·경험치·젬/조각 입력값, 젬·조각 단가 설정 등 (저장 키: maple-replan-v1) — 이용자 기기에만 저장",
      "커뮤니티 게시글(자랑 게시판·사냥터 팁): 제목, 내용, 작성자 닉네임, 작성 시각 — Supabase 클라우드 DB에 저장·공개 열람",
      "서버 접속 시 일반적인 웹 서버 로그: IP 주소, 접속 시각, User-Agent, 요청 URL 등 — 호스팅·보안·통계 목적, 보관 기간은 호스팅 사업자 정책에 따름",
      "피드백 전송 시(기능 제공 시): 닉네임(최대 8자), 의견 내용 — 전송 구현 시 운영자가 수신하는 항목이며, 현재 데모·미연동 단계일 수 있음",
      "Google AdSense 및 제3자 광고·분석: 쿠키, 광고 식별자(DART 등), 방문·클릭 등 — Google 및 제3자 정책에 따름",
      "Google Analytics(사용 시): 익명화된 이용 통계(페이지뷰, 세션, 대략적 지역 등) — Google 정책에 따름",
      "쿠팡 파트너스 제휴 링크: 클릭·유입 측정용 쿠키 또는 리퍼러 정보 — 쿠팡 정책에 따름",
    ],
  },
  {
    id: "purpose",
    title: "3. 개인정보의 처리 목적",
    paragraphs: [
      "localStorage 데이터: 재획 정산·타이머 기능 제공, 이용자 기기 내 기록 유지",
      "커뮤니티 게시글: 자랑 게시판·사냥터 팁 글 저장·목록·검색·실시간 갱신 제공",
      "서버 로그: 서비스 안정성·오류 분석·부정 이용 방지",
      "광고 쿠키: 맞춤·비맞춤 광고 게재, 광고 성과 측정 (Google AdSense)",
      "분석 쿠키: 트래픽·콘텐츠 성과 파악 (Google Analytics 사용 시)",
      "제휴 링크: 쿠팡 파트너스 등 제휴 마케팅 성과 측정 및 수수료 정산",
      "피드백: 서비스 개선·버그 대응 (해당 기능 활성화 시)",
    ],
  },
  {
    id: "retention",
    title: "4. 보유 및 이용 기간",
    paragraphs: [
      "localStorage: 이용자가 브라우저 데이터 삭제, '전체 초기화' 실행, 또는 브라우저 재설치 시까지 기기에 보관되며, 운영자는 내용에 접근·복구할 수 없습니다.",
      "서버 로그: 호스팅 업체 및 운영자 내부 정책에 따라 통상 수개월 이내 보관 후 파기 또는 익명화할 수 있습니다.",
      "광고·분석 쿠키: Google, 쿠팡 등 해당 사업자의 정책에 따릅니다.",
    ],
  },
  {
    id: "third",
    title: "5. 제3자 제공 및 처리 위탁",
    paragraphs: [
      "운영자는 이용자의 사냥 기록·정산 데이터를 마케팅 목적으로 제3자에게 판매·임대하지 않습니다.",
      "다음의 경우 제3자가 정보를 처리할 수 있습니다.",
    ],
    listItems: [
      "Google LLC (AdSense, Google Analytics, 광고·분석 쿠키) — https://policies.google.com/privacy",
      "쿠팡(Coupang) 및 쿠팡 파트너스 — https://privacy.coupang.com (제휴 링크 클릭 시)",
      "웹 호스팅·CDN 제공자 (서비스 배포·접속 로그)",
      "법령에 따른 수사기관 등의 적법한 요청이 있는 경우",
    ],
  },
  {
    id: "cookies",
    title: "6. 쿠키 및 맞춤 광고 (Google AdSense · DART)",
    paragraphs: [
      "본 사이트는 Google AdSense를 통해 광고를 게재합니다. 제3자 공급업체(Google 포함)는 이용자의 본 사이트 및 다른 인터넷 사이트 방문 정보를 바탕으로 광고를 게재하기 위해 쿠키를 사용합니다.",
      "Google의 광고 쿠키 사용으로 Google 및 그 파트너는 이용자가 본 사이트 및/또는 다른 사이트를 방문한 기록을 바탕으로 광고를 게재할 수 있습니다.",
      "Google을 포함한 제3자 벤더는 DoubleClick DART 쿠키 등 식별 쿠키를 사용하여, 이용자의 본 사이트 방문 및 다른 사이트 방문 이력을 기반으로 광고를 게재할 수 있습니다.",
      "이용자는 Google 광고 설정(https://adssettings.google.com)에서 맞춤 광고를 해제할 수 있습니다. 또한 aboutads.info(https://www.aboutads.info/choices/)에서 제3자 벤더의 쿠키 사용을 거부할 수 있습니다.",
      "브라우저 설정에서 쿠키 저장을 거부·삭제할 수 있습니다. Chrome은 설정 > 개인 정보 보호 및 보안 > 쿠키, Safari는 설정 > Safari > 방문 기록 및 웹사이트 데이터 삭제, Firefox는 설정 > 개인 정보 보호에서 처리할 수 있습니다. 쿠키를 차단하면 일부 기능·광고 표시가 제한될 수 있습니다.",
      "EU/EEA·영국·스위스 등 해당 지역 이용자에게는 동의 관리 플랫폼(CMP) 또는 Google의 동의 메시지 요구사항을 준수합니다.",
    ],
  },
  {
    id: "analytics",
    title: "7. Google Analytics",
    paragraphs: [
      "본 사이트는 서비스 개선을 위해 Google Analytics(또는 Google이 제공하는 동등한 측정 기능)를 사용할 수 있습니다. Google Analytics는 쿠키를 통해 방문 페이지, 체류 시간, 대략적 지역, 기기·브라우저 유형 등 익명화된 통계를 수집할 수 있습니다.",
      "수집된 정보는 Google의 개인정보처리방침(https://policies.google.com/privacy)에 따라 처리되며, 운영자가 이용자를 개인 식별할 목적으로 사용하지 않습니다.",
      "이용자는 브라우저 쿠키 차단, Google 광고 설정, 또는 Google Analytics 브라우저 부가 기능(https://tools.google.com/dlpage/gaoptout)으로 측정 참여를 거부할 수 있습니다.",
    ],
  },
  {
    id: "coupang",
    title: "8. 쿠팡 파트너스",
    paragraphs: [
      "본 사이트는 쿠팡 파트너스 활동의 일환으로, 일정액의 수수료를 제공받을 수 있습니다. 가이드 본문 등에는 쿠팡 상품 배너·제휴 링크가 포함될 수 있습니다.",
      "이용자가 제휴 링크를 클릭하거나 구매를 진행하면, 쿠팡이 클릭·유입·전환 측정을 위해 쿠키 또는 이와 유사한 기술을 사용할 수 있습니다. 해당 처리에는 쿠팡의 개인정보처리방침이 적용됩니다.",
      "제휴 링크 이용 여부·구매 결정은 전적으로 이용자에게 있으며, 운영자는 쿠팡 상품의 품질·배송·환불에 대해 판매자 또는 쿠팡이 부담하는 책임을 대신하지 않습니다.",
    ],
  },
  {
    id: "rights",
    title: "9. 이용자의 권리 및 쿠키 비활성화",
    paragraphs: [
      "이용자는 localStorage에 저장된 데이터를 브라우저에서 직접 삭제하거나 본 서비스의 '전체 초기화'로 제거할 수 있습니다.",
      "쿠키·맞춤 광고를 원하지 않으면 (1) 브라우저에서 쿠키 차단·삭제, (2) Google 광고 설정(https://adssettings.google.com)에서 맞춤 광고 해제, (3) aboutads.info에서 제3자 쿠키 거부, (4) Google Analytics 옵트아웃 부가 기능 설치를 이용할 수 있습니다.",
      `서버에 보관되는 로그·피드백 등에 대한 열람·정정·삭제·처리 정지 요청은 ${LEGAL_CONTACT_EMAIL}로 요청할 수 있으며, 운영자는 관련 법령에 따라 지체 없이 조치합니다.`,
      "만 14세 미만 아동의 개인정보를 고의로 수집하지 않습니다. 해당 사실이 확인되면 지체 없이 삭제 조치합니다.",
    ],
  },
  {
    id: "security",
    title: "10. 안전성 확보 조치",
    paragraphs: [
      "운영자는 개인정보의 유출·변조·훼손을 방지하기 위해 HTTPS 적용, 접근 권한 최소화, 호스팅 보안 설정 등 합리적인 기술·관리적 조치를 취합니다.",
      "이용자 기기의 localStorage는 이용자 본인의 기기 보안(비밀번호·잠금)에 따라 보호되므로, 공용 PC에서는 이용 후 데이터 삭제를 권장합니다.",
    ],
  },
  {
    id: "overseas",
    title: "11. 국외 이전",
    paragraphs: [
      "Google 등 해외 사업자의 쿠키·광고 처리 시, 해당 정보가 미국 등 해외 서버로 이전·보관될 수 있으며, 이는 각 사업자의 개인정보처리방침 및 이용약관에 따릅니다.",
    ],
  },
  {
    id: "changes",
    title: "12. 방침 변경",
    paragraphs: [
      "본 방침은 법령·서비스·광고 정책 변경에 따라 수정될 수 있으며, 변경 시 본 페이지에 시행일을 명시합니다. 변경 후에도 서비스를 계속 이용하면 변경된 방침에 동의한 것으로 볼 수 있습니다.",
    ],
  },
  {
    id: "contact",
    title: "13. 개인정보 보호 책임자 및 문의",
    paragraphs: [
      `개인정보 보호 관련 문의·불만·피해 구제: ${LEGAL_CONTACT_EMAIL}`,
      "개인정보침해신고센터(privacy.go.kr), 개인정보분쟁조정위원회, 대검찰청 사이버수사과 등 관계 기관에도 신고·상담이 가능합니다.",
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "accept",
    title: "제1조 (목적 및 동의)",
    paragraphs: [
      "본 약관은 운영자가 제공하는 메이플 재획 정산 서비스(이하 '서비스')의 이용 조건 및 절차, 운영자와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.",
      "이용자가 서비스에 접속·이용하는 경우 본 약관에 동의한 것으로 간주합니다. 동의하지 않으면 서비스 이용을 중단하여야 합니다.",
    ],
  },
  {
    id: "defs",
    title: "제2조 (정의)",
    paragraphs: ["본 약관에서 사용하는 용어의 정의는 다음과 같습니다."],
    listItems: [
      "'서비스': 재획 타이머, 사냥 기록, 메소·경험치·젬/조각 정산, 가이드 콘텐츠, 게시판 UI 등 본 웹·앱에서 제공하는 일체의 기능",
      "'이용자': 별도 가입 없이 서비스를 이용하는 자",
      "'콘텐츠': 운영자가 제공하는 텍스트·UI·이미지·가이드 글 등",
      "'이용자 입력': 이용자가 입력한 메소, 경험치, 개수, 닉네임, 피드백 등",
    ],
  },
  {
    id: "service",
    title: "제3조 (서비스의 내용)",
    paragraphs: [
      "서비스는 GG-PASS(gg-pass.com)가 제공하는 메이플스토리 2시간 재획(1·2·3차) 기준 타이머, 시급·수익 계산기, 솔 에르다 조각 정산, 사냥터 가이드 등 게이밍 생산성 유틸리티입니다. 계산 결과는 참고용이며 공식 게임 데이터가 아닙니다.",
      "운영자는 서비스의 전부 또는 일부를 예고 없이 변경·중단·종료할 수 있으며, 무료로 제공되는 범위에서 이용자에게 별도 보상 의무가 없습니다.",
      "Electron 데스크톱·오버레이 등 부가 실행 방식은 이용 환경에 따라 제공·제한될 수 있습니다.",
    ],
  },
  {
    id: "user",
    title: "제4조 (이용자의 의무)",
    paragraphs: ["이용자는 다음 행위를 하여서는 안 됩니다."],
    listItems: [
      "타인의 권리·명예를 침해하거나 불법·음란·혐오 정보를 게시·전송하는 행위",
      "서비스·서버·네트워크를 역설계·과부하·해킹·자동화 수단으로 남용하는 행위",
      "불법 프로그램·매크로·계정 거래 등 게임 이용약관 위반을 조장·홍보하는 행위",
      "운영자·제3자의 지적재산권을 침해하는 행위",
      "기타 관련 법령 및 본 약관에 위반되는 행위",
    ],
  },
  {
    id: "data",
    title: "제5조 (이용자 입력 및 저장)",
    paragraphs: [
      "이용자 입력은 이용자 기기의 localStorage 등에 저장될 수 있으며, 운영자 서버에 자동 업로드되지 않습니다(피드백 전송 기능 활성화 시 예외).",
      "이용자는 입력값의 정확성에 대한 책임을 지며, 기기 분실·데이터 삭제에 따른 손실은 이용자 부담입니다.",
    ],
  },
  {
    id: "disclaimer",
    title: "제6조 (계산 결과 및 면책)",
    paragraphs: [
      "서비스가 표시하는 메소, 시급, 누적 수익, 젬·조각 환산액, 경험치 % 차이 등 모든 수치는 이용자 입력과 가이드에 기재된 실측·가정 단가를 바탕으로 한 참고용 계산 결과입니다. 게임 내 실제 드랍, 패치, 이벤트, 경매장·메소마켓 시세는 수시로 변동하며, 표시 금액과 오차가 발생할 수 있습니다.",
      "가이드 및 계산기에 기재된 조각 단가, 결정석 시세, 소모품 비용, 1재획 순수익은 작성 시점의 가정값 또는 실측 샘플이며, 서버·직업·스펙·운에 따라 달라집니다. 운영자는 특정 시점의 시세를 실시간으로 보증하지 않습니다.",
      "운영자는 계산의 정확성·완전성·특정 목적 적합성을 보증하지 않습니다. 투자·거래·아이템 구매·현금 거래 등 금전적 결정에 서비스만을 근거로 하지 마십시오.",
      "서비스 이용으로 발생한 게임 계정 제재·데이터 손실·간접·특별 손해에 대해 운영자는 고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.",
    ],
  },
  {
    id: "nexon",
    title: "제7조 (넥슨·메이플스토리와의 관계)",
    paragraphs: [
      "본 서비스는 넥슨(NEXON) 및 메이플스토리(MapleStory) 공식 운영팀과 무관한 비공식 팬 제작 도구입니다.",
      "메이플스토리, MapleStory 및 관련 상표·이미지·캐릭터·게임 데이터에 대한 권리는 각 권리자(넥슨 등)에게 있습니다.",
      "본 서비스는 넥슨의 공식 승인·후원·제휴·대리를 받지 않으며, 게임사의 입장을 대표하지 않습니다.",
    ],
  },
  {
    id: "ip",
    title: "제8조 (지적재산권)",
    paragraphs: [
      "서비스 UI·소스·가이드 텍스트(운영자 작성분)에 대한 권리는 운영자 또는 정당한 권리자에게 귀속됩니다.",
      "이용자는 운영자의 사전 서면 동의 없이 서비스를 복제·배포·상업적 이용할 수 없습니다. 오픈소스 라이선스가 적용된 부분은 해당 라이선스를 따릅니다.",
    ],
  },
  {
    id: "ads",
    title: "제9조 (광고 및 제휴)",
    paragraphs: [
      "운영자는 Google AdSense 등 제3자 광고 및 쿠팡 파트너스 제휴 링크를 게재할 수 있습니다. 광고·제휴 상품의 내용·거래는 해당 사업자와 이용자 사이의 관계이며, 운영자는 광고물의 정확성·이용자와 광고주·판매자 간 분쟁에 대해 법령이 정한 범위를 넘어 책임지지 않습니다.",
      "후원·기부 안내가 있을 경우 이는 선택 사항이며, 후원과 서비스 기능 제공은 무관합니다.",
    ],
  },
  {
    id: "community",
    title: "제10조 (게시판·UGC)",
    paragraphs: [
      "자랑 게시판·사냥터 팁 등 커뮤니티 UI가 제공되는 경우, 운영자는 이용 규칙 위반 게시물을 사전 통지 없이 삭제·노출 제한할 수 있습니다.",
      "데모·목업 게시물은 실제 저장되지 않을 수 있으며, 향후 실제 게시 기능 도입 시 별도 정책이 적용될 수 있습니다.",
    ],
  },
  {
    id: "suspend",
    title: "제11조 (이용 제한)",
    paragraphs: [
      "운영자는 이용자가 본 약관·법령을 위반하거나 서비스 운영을 방해하는 경우, 접근 차단·기능 제한 등 필요한 조치를 취할 수 있습니다.",
    ],
  },
  {
    id: "law",
    title: "제12조 (준거법 및 관할)",
    paragraphs: [
      "본 약관은 대한민국 법령을 준거법으로 합니다.",
      "서비스 이용과 관련하여 분쟁이 발생한 경우, 운영자 소재지 관할 법원을 제1심 관할 법원으로 할 수 있습니다(소비자인 이용자에게 관할 규정이 더 유리한 법률이 적용되는 경우 그에 따름).",
    ],
  },
  {
    id: "changes",
    title: "제13조 (약관 변경)",
    paragraphs: [
      "운영자는 필요 시 약관을 변경할 수 있으며, 변경 내용과 시행일을 본 페이지에 게시합니다. 변경 후 계속 이용 시 변경 약관에 동의한 것으로 볼 수 있습니다.",
    ],
  },
  {
    id: "contact",
    title: "제14조 (문의)",
    paragraphs: [
      `서비스·약관 관련 문의: ${LEGAL_CONTACT_EMAIL}`,
      `운영: ${LEGAL_OPERATOR}`,
    ],
  },
];

export const FOOTER_LEGAL_SNIPPET =
  "본 사이트는 넥슨·메이플스토리 공식 서비스가 아닌 비공식 팬 도구입니다. 계산 결과는 참고용이며, 최종 판단은 이용자에게 있습니다.";

export const ABOUT_SECTIONS: LegalSection[] = [
  {
    id: "who",
    title: "GG-PASS는 무엇인가요?",
    paragraphs: [
      "GG-PASS(gg-pass.com)는 메이플스토리 1재획(2시간) 시급·솔 에르다 조각 수익을 실측 데이터로 정리하고, 경매장 1% 수수료와 소모품 비용을 반영한 실질 순수익을 계산하는 게이머 생산성 플랫폼입니다.",
      "운영자는 사냥터 TOP 3 비교, 포스 미달 vs 1.5배 포스뻥 팩트체크, 보스 결정석·재획 정산 가이드를 직접 작성·갱신합니다. 계산기는 이용자가 입력한 드롭 메소와 조각 수량으로 시급을 즉시 산출합니다.",
    ],
  },
  {
    id: "expertise",
    title: "전문성·경험·신뢰 (E-E-A-T)",
    paragraphs: [
      "가이드의 비교표와 시급은 메획 100% / 아획 200% 세팅에서 직접 2시간 사냥한 실측 또는 동일 조건의 정산 가정을 명시합니다. 시세는 변동하므로 단가 가정(예: 조각 600만)을 본문에 밝혀 검증 가능하게 합니다.",
      "본 사이트는 넥슨 비공식 팬 도구이며, 과장된 '무조건 이득' 대신 포스 미달·원킬 삑·젠 누수로 인한 손실을 수치로 공개합니다.",
    ],
  },
  {
    id: "scope",
    title: "제공하는 도구",
    paragraphs: [
      "현재 공개 범위는 메이플스토리 재획 정산기, KMS/GMS 사냥터·보스 가이드, 커뮤니티 게시판입니다. 장기적으로는 로블록스 서버 큐레이션 등 게이머를 위한 생산성 도구를 같은 GG-PASS 브랜드 아래 확장하는 것을 목표로 합니다.",
    ],
  },
];

export type ContactCard = {
  id: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};

export const CONTACT_INTRO =
  "데이터 오류 제보, 가이드 수정 요청, 제휴·비즈니스 문의는 아래 이메일로 보내 주세요. 영업일 기준 순차 답변합니다.";

export const CONTACT_CARDS: ContactCard[] = [
  {
    id: "feedback",
    title: "유저 피드백",
    body: "계산기 사용감, 기능 제안, 버그 제보를 환영합니다. 재현 방법과 사용 환경(브라우저·기기)을 함께 적어 주시면 더 빨리 확인할 수 있습니다.",
    href: `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent("[GG-PASS] 피드백")}`,
    cta: "이메일로 피드백 보내기",
  },
  {
    id: "data",
    title: "데이터·시세 오류 제보",
    body: "가이드의 메소·조각 실측치, 포스 요구치, 맵 이름 오기가 있으면 해당 URL과 올바른 수치를 알려 주세요. 확인 후 본문을 수정합니다.",
    href: `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent("[GG-PASS] 데이터 오류 제보")}`,
    cta: "오류 제보하기",
  },
  {
    id: "biz",
    title: "비즈니스·제휴 문의",
    body: "광고, 제휴, 콘텐츠 협업 제안은 목적과 연락처를 포함해 보내 주세요. 게임 계정 거래·현금 거래 중개는 받지 않습니다.",
    href: `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent("[GG-PASS] 비즈니스 문의")}`,
    cta: "비즈니스 문의하기",
  },
];

export const EN_PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "intro",
    title: "Introduction",
    paragraphs: [
      `GG-PASS (https://gg-pass.com, including English pages under /en) is a free web and desktop gaming utility operated by ${LEGAL_OPERATOR} ("Operator"). This Privacy Policy explains how information is handled when you use the MapleStory meso / WAP calculator, hunting guides, and related pages, and is written to meet Google AdSense program requirements.`,
      "We follow a minimum-collection, local-storage-first approach. Please review this page periodically. Material changes will be reflected by updating the effective / last-revised dates below.",
    ],
  },
  {
    id: "controller",
    title: "1. Data controller",
    paragraphs: [
      `Controller: ${LEGAL_OPERATOR}`,
      `Contact: ${LEGAL_CONTACT_EMAIL}`,
      "The service may be operated by an individual without a separate corporation. Access, correction, and deletion requests can be sent to the email above.",
    ],
  },
  {
    id: "collect",
    title: "2. Information we process",
    paragraphs: [
      "We do not offer account registration or social login. We do not upload your MapleStory IDs, hunt logs, or meso/EXP inputs to our servers as part of the calculator.",
      "The following may still be processed automatically or optionally:",
    ],
    listItems: [
      "Browser localStorage: hunt sessions, timer state, map/meso/EXP/fragment inputs (key: maple-replan-v1) — stored only on your device",
      "Community posts (when used): title, body, nickname, timestamp — stored in a cloud database for public display",
      "Standard server logs: IP address, time, User-Agent, request URL — hosting, security, and diagnostics",
      "Feedback messages you send: nickname and message content",
      "Google AdSense and third-party advertising: cookies, advertising IDs including DART, visit and click data",
      "Google Analytics (when enabled): aggregated usage statistics such as page views and approximate region",
      "Coupang Partners affiliate links: click/referral measurement cookies or referrer data per Coupang policy",
    ],
  },
  {
    id: "purpose",
    title: "3. Purposes of processing",
    paragraphs: [
      "localStorage: provide the WAP timer and settlement calculator on your device.",
      "Community posts: publish and refresh user-submitted tips and showcases.",
      "Server logs: stability, abuse prevention, and error analysis.",
      "Advertising cookies: serve personalized or non-personalized ads and measure ad performance (Google AdSense).",
      "Analytics cookies: understand traffic and content performance (Google Analytics when used).",
      "Affiliate links: measure Coupang Partners referrals and commissions.",
    ],
  },
  {
    id: "retention",
    title: "4. Retention",
    paragraphs: [
      "localStorage remains on your device until you clear site data, use Reset All, or reinstall the browser. The Operator cannot recover it.",
      "Server logs follow hosting-provider retention, typically months, then deletion or anonymization.",
      "Advertising and analytics cookies follow Google, Coupang, and other vendor policies.",
    ],
  },
  {
    id: "third",
    title: "5. Sharing and processors",
    paragraphs: [
      "We do not sell or rent hunt logs or settlement data for marketing.",
      "Third parties may process information as follows:",
    ],
    listItems: [
      "Google LLC (AdSense, Analytics, advertising/measurement cookies) — https://policies.google.com/privacy",
      "Coupang / Coupang Partners — https://privacy.coupang.com (when affiliate links are used)",
      "Web hosting and CDN providers (deployment and access logs)",
      "Lawful requests from competent authorities",
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and personalized ads (Google AdSense / DART)",
    paragraphs: [
      "This site uses Google AdSense to serve ads. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.",
      "Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet.",
      "Third-party vendors, including Google, may use cookies (such as the DoubleClick DART cookie) and web beacons to serve ads based on a user's prior visits to this website and other sites.",
      "Users may opt out of personalized advertising by visiting Google Ads Settings at https://adssettings.google.com. Alternatively, users can opt out of some third-party vendors' uses of cookies for personalized advertising by visiting https://www.aboutads.info/choices/.",
      "You may also refuse or delete cookies in your browser: Chrome (Settings > Privacy and security > Cookies), Safari (Settings > Safari > Clear History and Website Data), Firefox (Settings > Privacy). Blocking cookies may limit some features and ad display.",
      "For visitors in the EU/EEA, UK, and Switzerland, we follow applicable consent-message / CMP requirements for Google ads.",
    ],
  },
  {
    id: "analytics",
    title: "7. Google Analytics",
    paragraphs: [
      "We may use Google Analytics (or equivalent Google measurement) to improve the service. Analytics cookies can collect anonymized statistics such as pages viewed, session duration, approximate region, and device/browser type.",
      "Google processes this information under https://policies.google.com/privacy. We do not use Analytics to personally identify you.",
      "You can opt out via browser cookie controls, Google Ads Settings, or the Google Analytics Opt-out Browser Add-on: https://tools.google.com/dlpage/gaoptout",
    ],
  },
  {
    id: "coupang",
    title: "8. Coupang Partners",
    paragraphs: [
      "Some Korean-language pages may include Coupang Partners banners or affiliate links. As a Coupang Partners activity, the Operator may earn a commission if you click through and purchase.",
      "Coupang may use cookies or similar technologies to measure clicks, referrals, and conversions. Coupang's privacy policy applies to that processing.",
      "Whether you use an affiliate link is optional. The Operator is not the seller and does not assume Coupang's or the merchant's responsibility for product quality, shipping, or refunds.",
    ],
  },
  {
    id: "rights",
    title: "9. Your rights and how to disable cookies",
    paragraphs: [
      "You can delete localStorage data in the browser or via the in-app Reset All control.",
      "To limit cookies and personalized ads: (1) block or delete cookies in your browser, (2) turn off personalized ads at https://adssettings.google.com, (3) opt out of some third-party cookies at https://www.aboutads.info/choices/, (4) install the Google Analytics opt-out add-on.",
      `Requests to access, correct, delete, or restrict server-side logs or feedback can be sent to ${LEGAL_CONTACT_EMAIL}. We will respond in accordance with applicable law.`,
      "We do not knowingly collect personal information from children under 14. If such data is identified, we will delete it promptly.",
    ],
  },
  {
    id: "security",
    title: "10. Security",
    paragraphs: [
      "We use HTTPS, least-privilege access, and hosting security settings that are reasonable for a static fan site.",
      "localStorage is only as safe as your device. On shared computers, clear site data after use.",
    ],
  },
  {
    id: "overseas",
    title: "11. International transfers",
    paragraphs: [
      "Google and other vendors may process cookies and logs on servers outside your country, including the United States, under their own privacy policies.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes",
    paragraphs: [
      "We may update this policy when laws, the service, or ad programs change. The revised date will appear on this page. Continued use after a change constitutes acceptance of the updated policy where permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "13. Privacy contact",
    paragraphs: [
      `Privacy questions and complaints: ${LEGAL_CONTACT_EMAIL}`,
      "You may also contact your local data-protection authority where applicable.",
    ],
  },
];

export const EN_TERMS_SECTIONS: LegalSection[] = [
  {
    id: "accept",
    title: "1. Purpose and acceptance",
    paragraphs: [
      "These Terms govern use of GG-PASS gaming utilities, including the MapleStory 2-hour WAP / meso calculator, hunting guides, and related pages.",
      "By accessing the site you agree to these Terms. If you do not agree, stop using the service.",
    ],
  },
  {
    id: "defs",
    title: "2. Definitions",
    paragraphs: ["In these Terms:"],
    listItems: [
      "'Service': the WAP timer, hunt logger, meso/hourly wage calculator, Sol Erda fragment settlement, guides, and community UI",
      "'User': anyone who uses the Service without a separate account",
      "'Content': text, UI, images, and guides provided by the Operator",
      "'User Input': mesos, EXP, counts, nicknames, and feedback you enter",
    ],
  },
  {
    id: "service",
    title: "3. Description of the Service",
    paragraphs: [
      "GG-PASS (gg-pass.com) provides unofficial MapleStory utilities: a 2-hour hunt timer, net hourly-wage calculator after estimated auction-house fees and consumables, and field-tested hunting guides. Results are for reference only and are not official game data.",
      "The Operator may change, suspend, or end any part of the Service without notice. There is no compensation obligation for free features.",
      "Desktop overlay / Electron builds may be limited depending on your environment.",
    ],
  },
  {
    id: "user",
    title: "4. User obligations",
    paragraphs: ["You must not:"],
    listItems: [
      "Post illegal, obscene, or harassing content, or infringe others' rights",
      "Reverse-engineer, overload, hack, or automate abuse of the Service",
      "Promote macros, account trading, or other game-ToS violations",
      "Infringe intellectual property of the Operator or third parties",
      "Otherwise violate applicable law or these Terms",
    ],
  },
  {
    id: "data",
    title: "5. User input and storage",
    paragraphs: [
      "Calculator inputs may be stored in localStorage on your device and are not automatically uploaded (except when you submit feedback).",
      "You are responsible for the accuracy of inputs. Loss from device wipe or data deletion is your responsibility.",
    ],
  },
  {
    id: "disclaimer",
    title: "6. Calculation results, in-game prices, and disclaimer",
    paragraphs: [
      "All displayed mesos, hourly wages, fragment conversions, crystal values, and EXP figures are estimates based on your inputs and/or sample assumptions stated in guides. Actual in-game drops, patches, events, and Auction House / Meso Market prices change constantly and may differ from on-screen numbers.",
      "Fragment unit prices, boss-crystal quotes, potion costs, and 2-hour net profit figures in guides are assumptions or sample measurements at the time of writing. They vary by server, class, funding, and luck. The Operator does not guarantee real-time market prices.",
      "We do not warrant accuracy, completeness, or fitness for a particular purpose. Do not make investment, trading, item-purchase, or real-money decisions based solely on this Service.",
      "Except for willful misconduct or gross negligence, the Operator is not liable for account penalties, data loss, or indirect or special damages arising from use of the Service.",
    ],
  },
  {
    id: "nexon",
    title: "7. Relationship with Nexon / MapleStory",
    paragraphs: [
      "This Service is an unofficial fan tool and is not affiliated with, endorsed, sponsored, or approved by Nexon or the MapleStory operations team.",
      "MapleStory names, marks, and related assets belong to their respective owners.",
    ],
  },
  {
    id: "ip",
    title: "8. Intellectual property",
    paragraphs: [
      "The Operator (or rightful licensors) own the Service UI, original guide text, and code, except for open-source components under their licenses.",
      "You may not copy, distribute, or commercially exploit the Service without prior written consent, except as those licenses allow.",
    ],
  },
  {
    id: "ads",
    title: "9. Advertising and affiliates",
    paragraphs: [
      "The Operator may display Google AdSense ads and Coupang Partners links. Ad and product transactions are between you and the advertiser or merchant. The Operator is not responsible beyond what applicable law requires.",
      "Donations, if offered, are optional and not required to use the calculator.",
    ],
  },
  {
    id: "community",
    title: "10. Community / UGC",
    paragraphs: [
      "If community boards are available, the Operator may remove or limit posts that violate these Terms without prior notice.",
    ],
  },
  {
    id: "suspend",
    title: "11. Restrictions",
    paragraphs: [
      "The Operator may block access or limit features if you violate these Terms, applicable law, or disrupt the Service.",
    ],
  },
  {
    id: "law",
    title: "12. Governing law",
    paragraphs: [
      "These Terms are governed by the laws of the Republic of Korea, without prejudice to mandatory consumer-protection rules that apply to you.",
      "Disputes may be submitted to the courts with jurisdiction over the Operator's location, unless a more favorable mandatory venue applies to you as a consumer.",
    ],
  },
  {
    id: "changes",
    title: "13. Changes to the Terms",
    paragraphs: [
      "We may update these Terms and will post the new version and effective date on this page. Continued use after a change may be treated as acceptance where permitted by law.",
    ],
  },
  {
    id: "contact",
    title: "14. Contact",
    paragraphs: [
      `Questions about the Service or these Terms: ${LEGAL_CONTACT_EMAIL}`,
      `Operator: ${LEGAL_OPERATOR}`,
    ],
  },
];

export const EN_ABOUT_SECTIONS: LegalSection[] = [
  {
    id: "who",
    title: "What is GG-PASS?",
    paragraphs: [
      "GG-PASS (gg-pass.com) is a gamer productivity platform that publishes field-tested MapleStory 2-hour WAP (Wealth Acquisition Potion) wages and Sol Erda Fragment yields, then calculates net profit after an estimated 1% Auction House fee and consumable costs.",
      "The Operator writes and updates map TOP 3 comparisons, Sacred Force penalty vs 1.5x bonus fact checks, and boss-crystal settlement guides. The calculator turns your drop mesos and fragment counts into an hourly wage in seconds.",
    ],
  },
  {
    id: "expertise",
    title: "Experience, expertise, and trust (E-E-A-T)",
    paragraphs: [
      "Comparison tables state test conditions (for example 100% Meso Obtain and 200% Item Drop) and show 2-hour sample results or clearly labeled assumptions such as fragment unit price. That makes the numbers checkable instead of vague 'best meso' claims.",
      "GG-PASS is an unofficial Nexon fan tool. We publish losses from under-Force grinding, failed 1-hit KO thresholds, and spawn leaks instead of promising guaranteed profit.",
    ],
  },
  {
    id: "scope",
    title: "What we ship",
    paragraphs: [
      "Today the public site covers the MapleStory meso calculator, KMS and GMS hunting/bossing guides, and community boards. Longer term, GG-PASS aims to grow into additional gamer productivity tools under the same brand, including Roblox server curation.",
    ],
  },
];

export const EN_CONTACT_INTRO =
  "Send product feedback, data corrections, or business inquiries to the email below. We reply in order on business days.";

export const EN_CONTACT_CARDS: ContactCard[] = [
  {
    id: "feedback",
    title: "Product feedback",
    body: "Calculator UX ideas and bug reports are welcome. Include steps to reproduce and your browser/device when possible.",
    href: `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent("[GG-PASS] Feedback")}`,
    cta: "Email feedback",
  },
  {
    id: "data",
    title: "Data or price corrections",
    body: "If a guide has the wrong meso/fragment sample, Sacred Force requirement, or map name, send the page URL and the correct figures. We will verify and update the article.",
    href: `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent("[GG-PASS] Data correction")}`,
    cta: "Report an error",
  },
  {
    id: "biz",
    title: "Business & partnerships",
    body: "For ads, affiliates, or content collaboration, include your goal and a reply contact. We do not broker in-game accounts or real-money trades.",
    href: `mailto:${LEGAL_CONTACT_EMAIL}?subject=${encodeURIComponent("[GG-PASS] Business inquiry")}`,
    cta: "Contact business",
  },
];
