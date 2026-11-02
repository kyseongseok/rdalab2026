/* ============================================================
   RDA혁신연구실 콘테스트 — 콘텐츠 목록
   ------------------------------------------------------------
   새 홍보물 올리는 법
   1) 파일을 assets/ 아래에 넣는다
   2) 아래 PROMOS 배열에 한 줄(객체)을 추가한다
      - releaseAt: 공개 일시. 이 시각 전에는 COMING SOON 칸으로 보인다
   3) 저장(배포)하면 공개일 최신순으로 피드 맨 앞에 자동 정렬된다
   ============================================================ */

window.SITE = {
  event: {
    name: "2026 RDA혁신연구실 콘테스트",
    date: "2026-12-08",
    dateLabel: "2026. 12. 8.(화)",
    place: "농촌진흥청 종합연찬관 대강당"
  },
  // 2026 홍보물 칸 수. 공개된 홍보물 + COMING SOON = 이 숫자로 유지된다
  promoSlots: 3,
  // 하트 저장소 (구글 Apps Script 웹앱 주소). 비워두면 이 브라우저에만 저장된다
  heartApi: ""
};

/* 메인 히어로 영상 (피드에는 나오지 않음) */
window.HERO = {
  id: "teaser-01",
  label: "TEASER 01",
  src: "assets/video/teaser1.mp4",
  poster: "assets/img/teaser1-poster.webp"
};

/* 2026 홍보물 — 공개일(releaseAt) 최신순으로 자동 정렬 */
window.PROMOS = [
  {
    id: "teaser-02",
    kind: "video",
    orient: "portrait",
    tag: "TEASER 02",
    title: "연정국 lite — NOT DEBUT",
    desc: "연구정책국 연구제도팀이 준비한 두 번째 티저.",
    src: "assets/video/teaser2.mp4",
    thumb: "assets/img/teaser2-poster.webp",
    duration: "0:25",
    releaseAt: "2026-11-02T09:00:00+09:00"
  }
  // 예시) 다음 티저를 미리 올려두고 공개일을 정해두면, 그 전까지는 날짜가 붙은 COMING SOON 으로 보인다
  // { id:"teaser-03", kind:"video", orient:"portrait", tag:"TEASER 03", title:"…", src:"assets/video/teaser3.mp4",
  //   thumb:"assets/img/teaser3-poster.webp", duration:"0:30", releaseAt:"2026-11-17T09:00:00+09:00" }
];

/* 2025 아카이브 — 적힌 순서대로 고정 */
window.ARCHIVE = [
  {
    id: "award-microbe",
    group: "award",
    kind: "video",
    orient: "portrait",
    medal: "gold",
    lab: "미생물자원연구실",
    org: "국립농업과학원",
    prize: "국외출장",
    title: "RDA 최우수연구실상, 일본에서 배움으로 이어지다",
    desc: "2025 최우수 연구실 포상으로 다녀온 국외출장. 일본 NBRC(산업성미생물은행) 등 해외 미생물은행을 찾아 보존 기술과 연구 네트워크를 넓혔습니다.",
    src: "assets/video/microbe.mp4",
    thumb: "assets/img/microbe-photo.webp",
    thumbStyle: "floor",
    duration: "0:51"
  },
  {
    id: "award-livestock",
    group: "award",
    kind: "video",
    orient: "landscape",
    medal: "silver",
    lab: "가축개량연구실",
    org: "국립축산과학원",
    prize: "제주 워케이션",
    title: "가축개량연구실, 제주 워케이션",
    desc: "2025 우수 연구실 포상으로 다녀온 제주 워케이션. 제주 현장 연구기관을 방문하고 함께 시간을 보냈습니다.",
    src: "assets/video/livestock.mp4",
    thumb: "assets/img/livestock-poster.webp",
    duration: "0:40"
  },
  {
    id: "award-goguma",
    group: "award",
    kind: "cards",
    medal: "silver",
    lab: "고구마연구실",
    org: "국립식량과학원",
    prize: "제주 워케이션",
    title: "상 받은 연구실, 제주에서 협업을 찾다",
    desc: "2026. 2. 9.~11. 연구실원 8명이 제주 5곳을 방문해 현장 협업과 후속 과제를 논의했습니다.",
    pages: Array.from({ length: 8 }, (_, i) => `assets/cards/goguma-${String(i + 1).padStart(2, "0")}.webp`),
    ratio: "1 / 1"
  },
  {
    id: "award-fruit",
    group: "award",
    kind: "poster",
    medal: "silver",
    lab: "과수생산기반연구실",
    org: "국립원예특작과학원",
    prize: "장비구매비 지원",
    title: "부상으로 받은 대형 LiDAR, 지금 배송중",
    desc: "2025 우수 연구실 부상으로 대형 LiDAR 장비를 구매했습니다. 과수 수체 분석 등 연구에 쓰일 예정입니다.",
    pages: ["assets/cards/fruit-poster.webp"],
    ratio: "2 / 3"
  },
  {
    id: "case-leadership",
    group: "case",
    kind: "cards",
    lab: "우수사례 모음",
    org: "키워드로 보는 RDA혁신연구실",
    title: "실운영리더십",
    desc: "RDA혁신연구실 콘테스트에 진출한 전문연구실별 주요 콘텐츠 — 역할 정립, 업무분장, 품질관리, 조직문화, 공동비전.",
    pages: Array.from({ length: 7 }, (_, i) => `assets/cards/leadership-${String(i + 1).padStart(2, "0")}.webp`),
    ratio: "1 / 1",
    links: {
      4: [{ label: "홍승범 실장님 콘테스트 후기 보기", href: "https://brunch.co.kr/@seungbeomhong/71" }],
      7: [{ label: "이 페이지에서 발표자료 보기", action: "filter:slides" }]
    }
  },
  {
    id: "case-capacity",
    group: "case",
    kind: "cards",
    lab: "우수사례 모음",
    org: "키워드로 보는 RDA혁신연구실",
    title: "역량강화",
    desc: "현장직무교육, 인공지능 역량강화, 토크콘서트, 인적네트워크 전수, 멘토-멘티, 스터디 모임까지.",
    pages: Array.from({ length: 10 }, (_, i) => `assets/cards/capacity-${String(i + 1).padStart(2, "0")}.webp`),
    ratio: "1 / 1",
    links: {
      9: [{ label: "이 페이지에서 발표자료 보기", action: "filter:slides" }]
    }
  },
  ...[
    ["microbe", "gold", "미생물자원연구실", "국립농업과학원", "농업미생물은행(KACC) FOREVER", 25],
    ["livestock", "silver", "가축개량연구실", "국립축산과학원", "국가단위 가축 개량을 선도하는 가축개량연구실", 38],
    ["goguma", "silver", "고구마연구실", "국립식량과학원", "우리, 너무 열심히 일해버렸지 뭐야", 33],
    ["fruit", "silver", "과수생산기반연구실", "국립원예특작과학원", "10년을 앞서가는 RDA 혁신 연구실", 16]
  ].map(([k, medal, lab, org, title, n]) => ({
    id: `slides-${k}`,
    group: "slides",
    kind: "slides",
    medal,
    lab,
    org,
    title,
    desc: `2025 RDA혁신연구실 콘테스트 본선 발표자료 (${n}쪽).`,
    pages: Array.from({ length: n }, (_, i) => `assets/slides/${k}/p-${String(i + 1).padStart(2, "0")}.webp`),
    ratio: "16 / 9",
    pdf: `assets/pdf/${k}.pdf`
  }))
];
