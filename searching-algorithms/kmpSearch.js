// Write a function called kmpSearch which will accept a text and a pattern and
// will return the index at which the pattern exists. If it doesn't exist it
// will return -1.

function kmpSearch(text, pattern) {
  if (text.length === 0 || pattern.length === 0) {
    return -1;
  }

  const lps = [0];

  computeLPSArray(pattern, lps);

  let i = 0;
  let j = 0;

  while (i < text.length) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === pattern.length) {
      return i - j;
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
}

function computeLPSArray(pattern, lps) {
  let j = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
}
