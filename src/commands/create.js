import { logInfo } from '../logger.js';

export async function handleCreate(args) {
  const [type] = args; // e.g. "db-module"

  if (!type) {
    throw new Error('Create type is required. e.g. logic create db-module');
  }

  if (type !== 'db-module') {
    throw new Error(`Unsupported create type: ${type}`);
  }

  // TODO: db-module 스캐폴딩 로직
  logInfo('[logic] Creating db-module scaffold...');
}