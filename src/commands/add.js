import { loadConfig, saveConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleAdd(args) {
  const [gitUrl] = args;

  if (!gitUrl) {
    throw new Error('Usage: logic add <git-url>');
  }

  const config = loadConfig();
  const exists = config.modules.find((m) => m.git === gitUrl);

  if (exists) {
    logInfo(`[logic] Module already added: ${gitUrl}`);
    return;
  }

  // TODO: git url 분석해서 type, domain, namespace 등 메타 생성
  config.modules.push({
    git: gitUrl,
    type: 'unknown',
    meta: {}
  });

  saveConfig(config);
  logInfo(`[logic] Module added: ${gitUrl}`);
}