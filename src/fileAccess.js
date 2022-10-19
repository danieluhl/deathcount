const fs = require('fs');

module.exports = {
  read: (filePath) => {
    try {
      fs.accessSync(filePath, fs.constants.F_OK);
      return JSON.parse(fs.readFileSync(filePath));
    } catch {
      return null;
    }
  },
  write: (filePath, content) => {
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), {
      // file is created if not already there
      flag: 'w+',
    });
  },
  delete: (filePath) => {
    fs.unlinkSync(filePath);
  },
};
