const fs = require('fs');
const path = require('path');

// get files to check
const getFileList = (basedir, subdir = '') => {
  let readResults = fs.readdirSync(basedir, { withFileTypes: true });
  // separate files from directories
  let files = readResults
    .filter((file) => !file.isDirectory())
    .map(({ name }) => `${subdir}${subdir ? '/' : ''}${name}`);

  const dirs = readResults
    .filter((file) => file.isDirectory())
    .map(({ name }) => name);

  // recursion! gather up all files from all subdirectories
  //  note this is inefficient, if we have tons of files and directories
  //  we'll need a refactor
  dirs.forEach((dir) => {
    files = [...files, ...getFileList(path.join(basedir, dir), dir)];
  });
  return files;
};

// get current data

// check baseline data

// create fancy chart of data

module.exports = { getFileList };
