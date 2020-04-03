// Write a function called capitalizeWords. Given an array of words, return a
// new array containing each word capitalized.

// capitalizeWords(['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION'];

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let result = capitalizeWords(array.slice(0, -1));

  result.push(array.slice(array.length - 1)[0].toUpperCase());

  return result;
}
