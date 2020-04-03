// Implement a function called areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among the
// arguments passed in.

// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a','b','c','a') // true

function areThereDuplicates() {
  const frequencies = {};

  for (value of arguments) {
    if (frequencies[value]) {
      return true;
    }

    frequencies[value] = true;
  }

  return false;
}
