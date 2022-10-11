#! /usr/bin/env node

const asciichart = require('asciichart');
const { getFileCountByPattern } = require('../src/fileCount');
const HistoryCache = require('../src/localHistory');
const fileAccess = require('../src/fileAccess');
// get the number of files matching a regex and show them in a chart
const [_, file, dir, regexPatternString] = process.argv;

const regexPattern = new RegExp(regexPatternString);
const fileCount = getFileCountByPattern(dir, regexPattern);

const history = new HistoryCache(fileAccess, dir);
history.save(fileCount, regexPatternString);
const chart = history.getCounts(regexPatternString);
console.log(asciichart.plot(chart));
