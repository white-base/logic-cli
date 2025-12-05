import { loadConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handlePublish() {
  const config = loadConfig();

  if (!config.loggedInUser) {
    throw new Error('You must be logged in to publish. Run: logic login');
  }

  // TODO: 실제 구현에서는 현재 디렉토리의 package.json / logic.json 읽어서
  //       레지스트리에 등록 또는 업데이트
  logInfo(`[logic] Publishing current module as ${config.loggedInUser} ...`);
}