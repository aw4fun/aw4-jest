const chunkArray = require('./chunk');

test('chunkArray function exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with length of 2', () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ] ]);
});

test('Chunk an array of 5 values with length of 1', () => {
  const numbers = [0, 1, 2, 3, 4];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);

  expect(chunkedArr).toEqual([ [ 0 ], [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]);
});