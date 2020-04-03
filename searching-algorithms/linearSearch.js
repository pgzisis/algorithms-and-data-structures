// Write a function called linearSearch which accepts an array and a value, and
// returns the index at which the value exists. If the value does not exist in
// the array, return -1

function linearSearch(array, value) {
  if (!array.length) {
    return -1;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}
