import { logInfo } from '../logger.js';

export async function handleBundle(args) {
  const [bundleName] = args;

  if (!bundleName) {
    throw new Error('Bundle name is required. e.g. logic bundle "@logic-ui/store-admin-web"');
  }

  // TODO: bundle 정의 및 조립 처리
  logInfo(`[logic] Bundle command called with: ${bundleName}`);
}