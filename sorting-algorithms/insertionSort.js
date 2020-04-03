// Useful when data is coming in live

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = value;
  }

  return array;
}
