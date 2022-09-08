var fs = require('fs');
var path = require('path');



const postsDirectory = path.join(process.cwd(), 'posts/2021');
const entries = fs.readdirSync(postsDirectory);

// Get files within the current directory and add a currentPath key to the file objects
entries
  .forEach(file => {
    console.log(file);
    const cleanFile = file.replace('2021-', '');
    fs.rename(`${postsDirectory}/${file}`, `${postsDirectory}/${cleanFile}`, function (err) {
      if (err) console.log('ERROR: ' + err);
    })
  }

  );
