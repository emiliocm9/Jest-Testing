const { TestScheduler } = require('jest');
const reverseString = require('./reverseString');

test('return reversed string', () => {
  expect(reverseString('hola')).toBe('aloh');
})