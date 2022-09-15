const fs = require('fs');
const path = require('path');

const HISTORY_FILE_CACHE_PATH = path.join(__dirname, '.deathCountHistory');

class HistoryCache {
  history = null;
  clear() {
    this.history = null;
    fs.unlinkSync(HISTORY_FILE_CACHE_PATH);
  }
  getSorted() {
    return this.getHistory().sort((a, b) => a.timestamp - b.timestamp);
  }
  getEntriesGroupedByDay() {
    // todo: implement (test first!)
    return this.getSorted().reduce((acc, next) => {});
  }
  getHistory() {
    // try to get from cache
    if (this.history != null) {
      return [...this.history];
    }
    // try to get from file
    try {
      fs.accessSync(HISTORY_FILE_CACHE_PATH, fs.constants.F_OK);
      JSON.parse(fs.readFileSync(path.join(HISTORY_FILE_CACHE_PATH, file)));
    } catch (e) {}
    // return default
    return [];
  }
  save(entry) {
    // initialize history if not already there
    const history = this.getHistory();
    history.push({ count: entry, timestamp: Date.now() });
    fs.writeFileSync(HISTORY_FILE_CACHE_PATH, JSON.stringify(history), {
      flag: 'w+',
    });
    this.history = history;
  }
}

module.exports = new HistoryCache();
