const asciichart = require('asciichart');
const { getFileCountByPattern } = require('./fileCount');
const HistoryCache = require('./localHistory');
const fileAccess = require('./fileAccess');
const config = require('./deathcount.config.js');
// get the number of files matching a regex and show them in a chart
// const [_, file, dir, regexPatternString] = process.argv;

const { dir, regexPatternString } = config;

const regexPattern = new RegExp(regexPatternString);
const fileCount = getFileCountByPattern(dir, regexPattern);

const history = new HistoryCache(fileAccess);
history.save(fileCount, regexPattern);
const chart = history.getCounts(regexPattern);
console.log(chart);
console.log(asciichart.plot(chart));
