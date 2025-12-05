#!/usr/bin/env node

import { runCli } from '../src/cli.js';

runCli(process.argv).catch((err) => {
  console.error('[logic] Unexpected error:', err?.message || err);
  process.exitCode = 1;
});