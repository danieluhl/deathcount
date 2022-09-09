
const {getFileList} = require('../index');

const MOCK_DIR = __dirname + '/mock';

test('gets all files in a directory', () => {
  const files = getFileList(MOCK_DIR);
  const expectFiles = ['testfile1.js', 'testfile2.js', 'subdir/sub-testfile.js'];
  expect(files).toEqual(expectFiles);
});

test('finds files with regex pattern', () => {
  const REGEX = "yaml";
  const patternMatchedFiles = getFilesByPattern(REGEX);
  const expectedMatchedFiles = ['testfile2.js'];
  expect(patternMatchedFiles).toEqual(expectedMatchedFiles);
});
