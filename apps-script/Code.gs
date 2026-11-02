/**
 * RDA혁신연구실 콘테스트 — 하트 집계용 구글 Apps Script
 *
 * 설치
 * 1) 새 구글 시트를 만들고 [확장 프로그램] → [Apps Script]를 연다
 * 2) 이 코드를 붙여넣고 저장한다
 * 3) [배포] → [새 배포] → 유형: 웹 앱
 *    - 다음 사용자로 실행: 나
 *    - 액세스 권한: 모든 사용자
 * 4) 발급된 웹 앱 주소(…/exec)를 content.js 의 heartApi 에 넣는다
 *
 * 시트 'hearts' 에 A열=콘텐츠ID, B열=하트 수 가 쌓인다.
 */
const SHEET = 'hearts';

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) { sh = ss.insertSheet(SHEET); sh.appendRow(['id', 'count', 'updated']); }
  return sh;
}

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  const counts = {};
  rows.forEach(r => { if (r[0]) counts[r[0]] = Number(r[1]) || 0; });
  return ContentService.createTextOutput(JSON.stringify({ counts }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const { id, delta } = JSON.parse(e.postData.contents || '{}');
    if (!/^[a-z0-9-]{1,40}$/.test(id) || ![1, -1].includes(delta)) return out_({ ok: false });
    const sh = sheet_();
    const ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues().map(r => r[0]);
    const i = ids.indexOf(id);
    if (i < 1) {
      sh.appendRow([id, Math.max(0, delta), new Date()]);
    } else {
      const c = sh.getRange(i + 1, 2);
      c.setValue(Math.max(0, (Number(c.getValue()) || 0) + delta));
      sh.getRange(i + 1, 3).setValue(new Date());
    }
    return out_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
