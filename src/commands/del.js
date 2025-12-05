import { loadConfig, saveConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleDel(args) {
  const [gitUrl] = args;

  if (!gitUrl) {
    throw new Error('Usage: logic del <git-url>');
  }

  const config = loadConfig();
  const before = config.modules.length;
  config.modules = config.modules.filter((m) => m.git !== gitUrl);
  saveConfig(config);

  if (config.modules.length === before) {
    logInfo(`[logic] Module not found: ${gitUrl}`);
  } else {
    logInfo(`[logic] Module deleted: ${gitUrl}`);
  }
}