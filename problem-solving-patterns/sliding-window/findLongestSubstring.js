// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

function findLongestSubstring(string) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < string.length; i++) {
    let character = string[i];

    if (seen[character]) {
      start = Math.max(start, seen[character]);
    }

    // index - beginning of substring + 1 (to include current)
    longest = Math.max(longest, i - start + 1);

    // store the index of the next char so as to not double count
    seen[character] = i + 1;
  }

  return longest;
}
