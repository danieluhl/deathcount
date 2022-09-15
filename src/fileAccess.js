const fs = require('fs');
const path = require('path');

module.exports = {
  read: (filePath) => {
    fs.accessSync(filePath, fs.constants.F_OK);
    JSON.parse(fs.readFileSync(path.join(filePath, file)));
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
