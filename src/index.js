const asciichart = require('asciichart');
const {getFileCountByPattern} = require('./fileCount');
// get the number of files matching a regex and show them in a chart
const [_, file, dir, regexPatternString] = process.argv;

const regexPattern = new RegExp(regexPatternString);
const fileCount = getFileCountByPattern(dir, regexPattern);

const chart = [0, fileCount, 10];

console.log(asciichart.plot(chart));
