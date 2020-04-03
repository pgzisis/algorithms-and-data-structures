function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = calculateMiddle(start, end);

  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = calculateMiddle(start, end);
  }

  return array[middle] === value ? middle : -1;
}

function calculateMiddle(start, end) {
  return Math.floor((start + end) / 2);
}
