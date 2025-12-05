import { loadConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleCheck() {
  const config = loadConfig();

  // TODO: 실제로는 npm install 상태, 버전 충돌, domain/namespace 충돌 검사
  logInfo('[logic] Checking current configuration...');
  logInfo(`- domain: ${config.domain || '(not set)'}`);
  logInfo(`- modules: ${config.modules.length}`);
}