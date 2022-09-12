const {
  getFileList,
  filterFilesContainingPattern,
  getFileCountByPattern,
} = require('../fileCount');

const MOCK_DIR = __dirname + '/mock';

const FILES_LIST = [
  'testfile1.js',
  'testfile2.js',
  'subdir/sub-testfile.js',
  'subdir/subdir2/deeply-nested.js',
];

test('gets all files in a directory', () => {
  const files = getFileList(MOCK_DIR);
  expect(files).toEqual(FILES_LIST);
});

test('filters files to those containing a regex pattern', () => {
  const REGEX = /yaml/;
  const filesContainingPattern = filterFilesContainingPattern(
    MOCK_DIR,
    FILES_LIST,
    REGEX
  );
  const expectedMatchedFiles = ['testfile2.js'];
  expect(filesContainingPattern).toEqual(expectedMatchedFiles);
});

test('gets the number of files that have a regex pattern', () => {
  const REGEX = /yaml/;
  const fileCount = getFileCountByPattern(MOCK_DIR, REGEX);
  expect(fileCount).toEqual(1);
});
