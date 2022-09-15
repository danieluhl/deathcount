const history = require('../localHistory');

test('saves and gets latest history', () => {
  history.save(5);
  history.save(2);
  history.save(1);
  const sortedEntries = history.getSorted();
  expect(sortedEntries.map((e) => e.count)).toEqual([5, 2, 1]);
  history.clear();
});

test('gets entries grouped by day', () => {
  history.save(5);
  history.save(2);
  history.save(1);
  const sortedEntries = history.getEntriesGroupedByDay();
  expect(sortedEntries.map((e) => e.count)).toEqual([5, 2, 1]);
  history.clear();
});
