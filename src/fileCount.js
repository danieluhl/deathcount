const fs = require('fs');
const path = require('path');

// Returns a list of files in a directory recursively. All paths are relative to
// the basedir.
const getFileList = (basedir, subdir = '') => {
  let readResults = fs.readdirSync(path.join(basedir, subdir), {
    withFileTypes: true,
  });
  // separate files from directories
  let files = readResults
    .filter((file) => {
      return !file.isDirectory() && !file.name.includes('deathCountHistory')
    })
    .map(({ name }) => `${subdir}${subdir ? '/' : ''}${name}`);

  const dirs = readResults
    .filter((file) => file.isDirectory())
    .map(({ name }) => name);

  // recursion! gather up all files from all subdirectories
  //  note this is inefficient, if we have tons of files and directories
  //  we'll need a refactor
  dirs.forEach((dir) => {
    files = [...files, ...getFileList(basedir, path.join(subdir, dir))];
  });
  return files;
};

const filterFilesContainingPattern = (basedir, files, regexPattern) => {
  // loop over file list contents and check for pattern
  return files.filter((file) => {
    const contents = fs.readFileSync(path.join(basedir, file));
    return regexPattern.test(contents);
  });
};

const getFileCountByPattern = (basedir, regexPattern) => {
  return filterFilesContainingPattern(
    basedir,
    getFileList(basedir),
    regexPattern
  ).length;
};

module.exports = {
  getFileList,
  filterFilesContainingPattern,
  getFileCountByPattern,
};
