// Write a function called recursiveRange which accepts a number and adds up all
// the numbers from 0 to the number passed to the function.

// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(number) {
  return number === 0 ? 0 : number + recursiveRange(--number);
}
