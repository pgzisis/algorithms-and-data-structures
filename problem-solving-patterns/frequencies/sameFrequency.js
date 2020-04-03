// Write a function called sameFrequency. Given two positive integers, find out
// if the two numbers have the same frequency of digits

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22, 222) // false

function sameFrequency(number1, number2) {
  const string1 = number1.toString();
  const string2 = number2.toString();

  if (string1.length !== string2.length) {
    return false;
  }

  const frequencies = {};

  for (character of string1) {
    frequencies[character]
      ? frequencies[character]++
      : (frequencies[character] = 1);
  }

  for (character of string2) {
    if (!frequencies[character]) {
      return false;
    }

    frequencies[character]--;
  }

  return true;
}
