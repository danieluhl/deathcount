const HistoryCache = require('../localHistory');

const fakeData = [
  { count: 10, timestamp: 1 },
  { count: 3, timestamp: 2 },
  { count: 5, timestamp: 3 },
];

const fakeFileAccess = {
  read: jest.fn(() => fakeData),
  write: jest.fn(),
  delete: jest.fn(),
};

test('saves and gets latest history', () => {
  const history = new HistoryCache(fakeFileAccess);
  history.save(5);
  history.save(2);
  history.save(1);
  const sortedEntries = history.getEntries();
  expect(sortedEntries).toEqual([10, 3, 5, 5, 2, 1]);
  history.clear();
});
