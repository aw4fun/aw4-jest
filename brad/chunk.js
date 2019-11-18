function chunk(arr, len) {
  const chunkedArray = [];

  arr.forEach( val => {
    const last = chunkedArray[chunkedArray.length - 1];

    if (!last || last.length === len) {
      chunkedArray.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArray;
}

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const len = 2;
//
// const chunkedArr = chunk(numbers, len);
// console.log(chunkedArr);

module.exports = chunk; // just NodeJS export;