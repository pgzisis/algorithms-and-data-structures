// memoization
function canConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
}

// tabulation
function canConstructTab(target, wordBank) {
  const dp = Array(target.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (dp[i]) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          dp[i + word.length] = true;
        }
      }
    }
  }

  return dp[target.length];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
