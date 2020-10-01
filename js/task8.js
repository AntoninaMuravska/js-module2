function reduceArray(array) {
  'use strict';
  let total = 0;
  // Write code under this line

  for (let i = 0; i < array.length; i += 1) {
    if (array === []) {
      return 0;
    } else {
      total += array[i];
    }
  }
  return total;
}
console.log(reduceArray([1, 2, 3]));
