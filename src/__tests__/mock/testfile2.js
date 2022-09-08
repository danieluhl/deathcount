const fs = require('fs');
const yaml = require('yaml');

// read the latest id from the draft-conf.yml
// create the file with initial data

const DRAFTS_CONF_PATH = 'drafts/draft-conf.yml';

let draftId;

try {
  // read draft conf
  const conf = yaml.parse(fs.readFileSync(DRAFTS_CONF_PATH, 'utf8'));
  draftId = conf.latestId + 1;
  // update draft conf id
  fs.writeFileSync(
    DRAFTS_CONF_PATH,
    yaml.stringify({ ...conf, latestId: draftId })
  );
} catch (e) {
  console.log(e);
}

const filename = `draft-${draftId}`;

fs.appendFile(
  `./drafts/${filename}.md`,
  `---
title: 'placeholder'
---
`,
  (err) => {
    if (err) throw err;
    console.log(`Created Draft - ${filename}`);
  }
);
