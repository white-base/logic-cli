import os from 'os';
import path from 'path';
import fs from 'fs';

export function getConfigDir() {
  const home = os.homedir();
  const platform = process.platform; // 'darwin' | 'win32' | 'linux' ...

  let baseDir;

  if (platform === 'win32') {
    // 예: C:\Users\user\AppData\Roaming\logic
    const appData = process.env.APPDATA || path.join(home, 'AppData', 'Roaming');
    baseDir = path.join(appData, 'logic');
  } else {
    // 예: ~/.logic
    baseDir = path.join(home, '.logic');
  }

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  return baseDir;
}

export function getConfigFilePath() {
  const dir = getConfigDir();
  return path.join(dir, 'config.json');
}

export function loadConfig() {
  const file = getConfigFilePath();
  if (!fs.existsSync(file)) {
    return {
      domain: null,
      loggedInUser: null,
      modules: [] // { git: '...', type: 'db' | 'ui', meta: {} }
    };
  }
  try {
    const json = fs.readFileSync(file, 'utf-8');
    return JSON.parse(json);
  } catch (e) {
    console.warn('[logic] Failed to load config. Reinitializing.');
    return {
      domain: null,
      loggedInUser: null,
      modules: []
    };
  }
}

export function saveConfig(config) {
  const file = getConfigFilePath();
  fs.writeFileSync(file, JSON.stringify(config, null, 2), 'utf-8');
}