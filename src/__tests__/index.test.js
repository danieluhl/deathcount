
const {getFileList} = require('../index');

const MOCK_DIR = __dirname + '/mock';

test('counts instances of word in directory', () => {
  const files = getFileList(MOCK_DIR);
  const expectFiles = ['testfile1.js', 'testfile2.js', 'subdir/sub-testfile.js'];
  expect(files).toEqual(expectFiles);
});


