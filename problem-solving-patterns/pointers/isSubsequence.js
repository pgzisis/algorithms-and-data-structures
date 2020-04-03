// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the
// characters in the second string. In other words, the function should check
// whether the characters in the first string appear somewhere in the second
// string, without their order changing.

// isSubsequence('hello', 'hello world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false

function isSubsequence(string1, string2) {
  if (string1.length < 1 || string2.length < 1) {
    return false;
  }

  let i = 0;

  for (character of string2) {
    if (character === string1[i]) {
      i++;
    }

    if (i === string1.length) {
      return true;
    }
  }

  return false;
}
