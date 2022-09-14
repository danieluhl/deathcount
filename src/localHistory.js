const fs = require('fs');
const path = require('path');

let historyCache = null;
const HISTORY_FILE_CACHE_PATH = path.join(__dirname, '.deathCountHistory');

const saveHistoryEntry = (entry) => {
  // initialize history if not already there
  const history = getAllHistory();
  history.push({ count: entry, timestamp: Date.now() });
  fs.writeFileSync(HISTORY_FILE_CACHE_PATH, JSON.stringify(history), {
    flag: 'w+',
  });
  historyCache = history;
};

const getAllHistory = () => {
  // try to get from cache
  if (historyCache != null) {
    return [...historyCache];
  }
  // try to get from file
  try {
    fs.accessSync(HISTORY_FILE_CACHE_PATH, fs.constants.F_OK);
    JSON.parse(fs.readFileSync(path.join(HISTORY_FILE_CACHE_PATH, file)));
  } catch (e) {}
  // return default
  return [];
};

const getSortedEntries = () => {
  return getAllHistory()
    .sort((a, b) => a.timestamp - b.timestamp)
    .map((entry) => entry.count);
};

const clearHistory = () => {
  historyCache = null;
  fs.unlinkSync(HISTORY_FILE_CACHE_PATH);
}

module.exports = {
  saveHistoryEntry,
  getSortedEntries,
  clearHistory,
};
