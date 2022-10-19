#! /usr/bin/env node

const main = require('../src/index.js');
// get the number of files matching a regex and show them in a chart
const [_, file, dir, regexPatternString] = process.argv;
main(dir, regexPatternString);
