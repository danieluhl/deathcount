const { saveHistoryEntry, getAllHistory } = require('../localHistory');

  test('saves and gets latest history', () => {
    saveHistoryEntry(5);
    const allHistory = getAllHistory();
    expect(allHistory).toEqual([5]);
  });
