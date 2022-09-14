const { saveHistoryEntry, getSortedEntries, clearHistory } = require('../localHistory');

test('saves and gets latest history', () => {
  saveHistoryEntry(5);
  saveHistoryEntry(2);
  saveHistoryEntry(1);
  const sortedEntries = getSortedEntries();
  expect(sortedEntries).toEqual([5, 2, 1]);
  clearHistory();
});
