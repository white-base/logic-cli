import { loadConfig, saveConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleLogout() {
  const config = loadConfig();
  if (!config.loggedInUser) {
    logInfo('[logic] Not logged in.');
    return;
  }

  config.loggedInUser = null;
  saveConfig(config);

  logInfo('[logic] Logged out.');
}