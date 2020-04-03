const swap = require('./swap');

function bubbleSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array);
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return array;
}
