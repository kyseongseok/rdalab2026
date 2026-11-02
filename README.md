# 2026 RDA혁신연구실 콘테스트 홍보 페이지

- 행사: 2026. 12. 8.(화) · 농촌진흥청 종합연찬관 대강당
- 정적 사이트 (빌드 없음). Vercel에서 Framework Preset = Other, Root = `/` 로 배포

## 새 홍보물 올리기
1. 파일을 `assets/` 아래에 넣는다 (영상은 `assets/video/`, 썸네일은 `assets/img/`)
2. `content.js` 의 `PROMOS` 배열에 한 줄 추가 (`releaseAt` = 공개 일시)
3. 커밋·푸시하면 Vercel이 자동 배포. 공개일 최신순으로 피드 맨 앞에 붙고 COMING SOON 칸이 하나 줄어든다

## 하트 집계
`apps-script/Code.gs` 를 구글 시트 Apps Script에 붙여 웹 앱으로 배포한 뒤, 주소를 `content.js` 의 `heartApi` 에 넣는다.
