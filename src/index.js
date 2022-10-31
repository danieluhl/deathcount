const asciichart = require('asciichart');
const { getFileCountByPattern } = require('../src/globCount');
const HistoryCache = require('../src/localHistory');
const fileAccess = require('../src/fileAccess');

const main = (dir, regexPatternString) => {
  const regexPattern = new RegExp(regexPatternString);
  const fileCount = getFileCountByPattern(dir, regexPattern);

  const history = new HistoryCache(fileAccess, dir);
  history.save(fileCount, regexPatternString);
  const chart = history.getCounts(regexPatternString);
  console.log(asciichart.plot(chart, {height: 20}));
};

module.exports = main;
