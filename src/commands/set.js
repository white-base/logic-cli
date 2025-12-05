import { loadConfig, saveConfig } from '../config.js';
import { logInfo } from '../logger.js';

export async function handleSet(args) {
  // e.g. ["--domain", "store"]
  const domainIndex = args.indexOf('--domain');
  if (domainIndex === -1 || !args[domainIndex + 1]) {
    throw new Error('Usage: logic set --domain <domain>');
  }

  const domain = args[domainIndex + 1];

  const config = loadConfig();
  config.domain = domain;
  saveConfig(config);

  logInfo(`[logic] Domain set to: ${domain}`);
}