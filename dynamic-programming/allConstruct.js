// memoization
function allConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[target] = result;
  return result;
}

// tabulation
function allConstructTab(target, wordBank) {
  const dp = Array(target.length + 1)
    .fill()
    .map(() => []);
  dp[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = dp[i].map((subArray) => [...subArray, word]);
        dp[i + word.length].push(...newCombinations);
      }
    }
  }

  return dp[target.length];
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
