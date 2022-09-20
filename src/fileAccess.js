const fs = require('fs');
const path = require('path');

module.exports = {
  read: (filePath) => {
    try {
      fs.accessSync(filePath, fs.constants.F_OK);
      return JSON.parse(fs.readFileSync(path.join(filePath, file)));
    } catch {
      return null;
    }
  },
  write: (filePath, content) => {
    fs.writeFileSync(filePath, JSON.stringify(content), {
      flag: 'w+',
    });
  },
  delete: (filePath) => {
    fs.unlinkSync(filePath);
  },
};
