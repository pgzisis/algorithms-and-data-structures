// memoization
function howSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
}

// tabulation
function howSumTab(targetSum, numbers) {
  const dp = Array(targetSum + 1).fill(null);
  dp[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (dp[i] !== null) {
      for (let num of numbers) {
        dp[i + num] = [...dp[i], num];
      }
    }
  }

  return dp[targetSum];
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSumTab(300, [7, 14]));
