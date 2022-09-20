const HistoryCache = require('../localHistory');

const fakeFileAccess = {
  read: jest.fn(),
  write: jest.fn(),
  delete: jest.fn(),
};

test('saves and gets latest history', () => {
  const history = new HistoryCache(fakeFileAccess);
  history.save(5);
  history.save(2);
  history.save(1);
  const sortedEntries = history.getEntries();
  expect(sortedEntries).toEqual([5, 2, 1]);
  history.clear();
});
