import MockStorage from '../services/MockStorage';
test('MockStorage', () => {
  const storage = new MockStorage();

  expect(storage.length).toBe(0);

  storage.setItem('1', 'aaaa');
  expect(storage.getItem('1')).toBe('aaaa');
  expect(storage.length).toBe(1);

  storage.setItem('2', 'bbbb');
  expect(storage.getItem('2')).toBe('bbbb');
  expect(storage.length).toBe(2);

  storage.setItem('1', 'aaab');
  expect(storage.getItem('1')).toBe('aaab');
  expect(storage.length).toBe(2);

  storage.clear();
  expect(storage.length).toBe(0);

  expect(storage.key(0)).toBe('1');

  expect(storage.key(1)).toBe('2');
});
