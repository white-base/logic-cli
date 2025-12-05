import { loadConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleInfo(args) {
  const [gitUrl] = args;

  if (!gitUrl) {
    throw new Error('Usage: logic info <git-url>');
  }

  const config = loadConfig();
  const moduleInfo = config.modules.find((m) => m.git === gitUrl);

  if (!moduleInfo) {
    throw new Error(`Module not found in local config: ${gitUrl}`);
  }

  // TODO: 실제 npm/remote registry 에서 의존성 조회
  logInfo(`[logic] Info for: ${gitUrl}`);
  logInfo(JSON.stringify({
    git: moduleInfo.git,
    type: moduleInfo.type,
    deps: {
      db: [],
      ui: []
    }
  }, null, 2));
}