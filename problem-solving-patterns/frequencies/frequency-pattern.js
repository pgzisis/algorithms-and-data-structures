// Write a function called same, which accepts two arrays. The function should
// return true if every value in the array has it's corresponding value squared
// in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  const array1Frequencies = createFrequenciesDictionary(array1);
  const array2Frequencies = createFrequenciesDictionary(array2);

  for (key in array1Frequencies) {
    if (!(key ** 2 in array2Frequencies)) {
      return false;
    }

    if (array2Frequencies[key ** 2] !== array1Frequencies[key]) {
      return false;
    }
  }

  return true;
}

function createFrequenciesDictionary(array) {
  const frequencies = {};

  array.map(value => {
    frequencies[value] ? frequencies[value]++ : (frequencies[value] = 1);
  });

  return frequencies;
}
