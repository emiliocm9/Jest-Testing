const capitalize = require('./capitalize');

test('capitilize a string', () => {
  expect(capitalize('hola')).toBe('Hola');
});