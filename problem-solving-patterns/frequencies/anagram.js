// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman

// isAnagram('', '') // true
// isAnagram('aaz', 'zza') // false
// isAnagram('anagram', 'nagaram') // true
// isAnagram('rat', 'car') // false
// isAnagram('awesome', 'awesom') // false
// isAnagram('qwerty', 'qywrt') // true
// isAnagram('texttwisttime', 'timetwisttext') // true

function isAnagram(string1, string2) {
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

    frequencies[character] -= 1;
  }

  return true;
}
