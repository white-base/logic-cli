import { logInfo } from '../logger.js';

export async function handleFind(args) {
  // logic find [ui | db] --keyword 값
  const [kind, ...rest] = args; // kind: "ui" | "db"
  if (!kind || (kind !== 'ui' && kind !== 'db')) {
    throw new Error('Usage: logic find [ui | db] --keyword <value>');
  }

  const keywordIndex = rest.indexOf('--keyword');
  if (keywordIndex === -1 || !rest[keywordIndex + 1]) {
    throw new Error('Usage: logic find [ui | db] --keyword <value>');
  }

  const keyword = rest[keywordIndex + 1];

  // TODO: 레지스트리/로컬 캐시 등에서 모듈 검색
  logInfo(`[logic] Find ${kind} modules with keyword: ${keyword}`);

  // 샘플 출력
  logInfo(`
Found 1 ${kind} module(s) for keyword "${keyword}"

1) @logic-${kind}/sample-core@1.0.0
   - domain: sample
   - namespace: logic.admin
   - stars: 10
  `);
}