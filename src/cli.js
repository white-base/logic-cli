import { logError } from './logger.js';
import { handleBundle } from './commands/bundle.js';
import { handleCreate } from './commands/create.js';
import { handleSet } from './commands/set.js';
import { handleFind } from './commands/find.js';
import { handleAdd } from './commands/add.js';
import { handleDel } from './commands/del.js';
import { handleInfo } from './commands/info.js';
import { handleCheck } from './commands/check.js';
import { handleLogin } from './commands/login.js';
import { handleLogout } from './commands/logout.js';
import { handlePublish } from './commands/publish.js';

export async function runCli(argv) {
  const args = argv.slice(2); // ['bundle', '...', ...]
  const [command, ...rest] = args;

  if (!command) {
    printHelp();
    return;
  }

  try {
    switch (command) {
      case 'bundle':
        // logic bundle '...'
        await handleBundle(rest);
        break;

      case 'create':
        // logic create db-module
        await handleCreate(rest);
        break;

      case 'set':
        // logic set --domain '...'
        await handleSet(rest);
        break;

      case 'find':
        // logic find [ui | db] --keyword 값
        await handleFind(rest);
        break;

      case 'add':
        // logic add 'git경로'
        await handleAdd(rest);
        break;

      case 'del':
        // logic del 'git경로'
        await handleDel(rest);
        break;

      case 'info':
        // logic info 'git경로'
        await handleInfo(rest);
        break;

      case 'check':
        // logic check
        await handleCheck(rest);
        break;

      case 'login':
        // logic login
        await handleLogin(rest);
        break;

      case 'logout':
        // logic logout
        await handleLogout(rest);
        break;

      case 'publish':
        // logic publish
        await handlePublish(rest);
        break;

      case 'help':
      case '-h':
      case '--help':
        printHelp();
        break;

      default:
        logError(`[logic] Unknown command: ${command}`);
        printHelp();
        process.exitCode = 1;
        break;
    }
  } catch (err) {
    logError(`[logic] Command failed: ${err?.message || err}`);
    process.exitCode = 1;
  }
}

function printHelp() {
  console.log(`
Usage:
  logic bundle <bundle-name>
  logic create db-module
  logic set --domain <domain>
  logic find [ui | db] --keyword <value>
  logic add <git-url>
  logic del <git-url>
  logic info <git-url>
  logic check
  logic login
  logic logout
  logic publish

Examples:
  logic bundle "@logic-ui/store-admin-web"
  logic create db-module
  logic set --domain "store"
  logic find db --keyword "cms"
  logic add "https://github.com/white-lab/logic-db-store-core.git"
  logic info "https://github.com/white-lab/logic-db-store-core.git"
`);
}