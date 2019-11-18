const isAnagram = require('./anagram');

test('isAnagram is exists', () => {
  expect(isAnagram).toBeDefined();
});

test('qwerty and ytrewq is anagram', () => {
  expect(isAnagram('qwerty', 'ytrewq')).toBeTruthy();
});

test('maratory is anagram of m@art y tora#', () => {
  expect(isAnagram('maRatory','m@ar y Tora#')).toBeTruthy();
});

test('iceman and icemen is not a anagram', () => {
  expect(isAnagram('iceman', 'icemen')).toBeFalsy();
});

