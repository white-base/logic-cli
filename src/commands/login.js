import { loadConfig, saveConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleLogin() {
  // TODO: 실제 구현에서는 OAuth / 토큰 발급 절차 필요
  const config = loadConfig();
  config.loggedInUser = 'demo-user';
  saveConfig(config);

  logInfo('[logic] Logged in as demo-user');
}