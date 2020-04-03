const swap = require('./swap');

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    quickSort(array, left, pivotIndex - 1);

    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}

function pivot(array, start = 0, end = array.length - 1) {
  const pivot = array[start];
  let swapIndex = start;

  for (let i = start; i <= end; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(swapIndex, i, array);
    }
  }

  swap(start, swapIndex, array);

  return swapIndex;
}
