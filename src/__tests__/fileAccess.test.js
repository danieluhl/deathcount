const fileAccess = import('../fileAccess');

test('read non-existent file path returns null', () => {
  expect(fileAccess.read('jsleifjsei')).toBe(null);
});
