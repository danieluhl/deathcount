const path = require('path');

// history is saved in form {pattern: string, count: number, timestamp: number}
class HistoryCache {
  constructor(fileAccess, dir) {
    this.historyFileCachePath = path.join(dir, '.deathCountHistory.json');
    this.fileAccess = fileAccess;
  }
  history = null;
  clear() {
    this.history = null;
    this.fileAccess.delete(this.historyFileCachePath);
  }
  getCounts(pattern) {
    return this.fetchCachedHistory()
      .filter((entry) => entry.pattern === pattern)
      .sort((a, b) => a.timestamp - b.timestamp)
      .map((entry) => entry.count);
  }
  fetchCachedHistory() {
    // try to get from cache
    if (this.history != null) {
      return [...this.history];
    }
    // try to get from file
    const fileHistory = this.fileAccess.read(this.historyFileCachePath);
    return fileHistory || [];
  }
  save(entry, pattern) {
    // initialize history if not already there
    const history = this.fetchCachedHistory();
    history.push({ pattern, count: entry, timestamp: Date.now() });
    this.fileAccess.write(this.historyFileCachePath, history);
    this.history = history;
  }
}

module.exports = HistoryCache;
