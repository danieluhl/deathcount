const path = require('path');

const HISTORY_FILE_CACHE_PATH = path.join(__dirname, '.deathCountHistory');

// history is saved in form {count: number, timestamp: number}
class HistoryCache {
  constructor(fileAccess) {
    this.fileAccess = fileAccess;
  }
  history = null;
  clear() {
    this.history = null;
    this.fileAccess.delete(HISTORY_FILE_CACHE_PATH);
  }
  getEntries() {
    return this.fetchCachedHistory()
      .sort((a, b) => a.timestamp - b.timestamp)
      .map((entry) => entry.count);
  }
  fetchCachedHistory() {
    // try to get from cache
    if (this.history != null) {
      return [...this.history];
    }
    // try to get from file
    const fileHistory = this.fileAccess.read(HISTORY_FILE_CACHE_PATH);
    return fileHistory || [];
  }
  save(entry) {
    // initialize history if not already there
    const history = this.fetchCachedHistory();
    history.push({ count: entry, timestamp: Date.now() });
    this.fileAccess.write(HISTORY_FILE_CACHE_PATH, JSON.stringify(history));
    this.history = history;
  }
}

module.exports = HistoryCache;
