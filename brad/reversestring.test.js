const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).not.toEqual('olleH');
});