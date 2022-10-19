const fg = require('fast-glob');
const fs = require('fs');

// Returns number of files in a directory that have a regex match in them
const getFileCountByPattern = (dir, pattern) => {
  let files = fg.sync([`${dir}/**`], { ignore: ['.deathCountHistory.json'] });
  return files.filter((file) => {
    const contents = fs.readFileSync(file);
    return pattern.test(contents);
  }).length;
};

module.exports = {
  getFileCountByPattern,
};
