/* global jest */

const HistoryCache = require('../localHistory');

const PATTERN = 'foo';
const fakeData = [
  { PATTERN, count: 10, timestamp: 1 },
  { PATTERN, count: 3, timestamp: 2 },
  { PATTERN, count: 5, timestamp: 3 },
];

const fakeFileAccess = {
  read: jest.fn(() => fakeData),
  write: jest.fn(),
  delete: jest.fn(),
};

test('saves and gets latest history', () => {
  const history = new HistoryCache(fakeFileAccess);
  history.save(5, PATTERN);
  history.save(2, PATTERN);
  history.save(1, PATTERN);
  const sortedEntries = history.getCounts(PATTERN);
  expect(sortedEntries).toEqual([10, 3, 5, 5, 2, 1]);
  history.clear();
});
