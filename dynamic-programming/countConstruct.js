// memoization
function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let totalCount = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += numWaysForRest;
    }
  }

  memo[target] = totalCount;
  return totalCount;
}

// tabulation
function countConstructTab(target, wordBank) {
  const dp = Array(target.length + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        dp[i + word.length] += dp[i];
      }
    }
  }

  return dp[target.length];
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstructTab("enterapotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ])
);
