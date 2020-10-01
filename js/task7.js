function filterArray(array) {
  'use strict';
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (Number.isFinite(array[i]) === false) {
      continue;
    } else {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

console.log(filterArray([1, NaN, Infinity]));
