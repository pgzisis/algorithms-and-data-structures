// memoization
function canSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
}

// tabulation
function canSumTab(targetSum, numbers) {
  const dp = Array(targetSum + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (dp[i]) {
      for (let num of numbers) {
        dp[i + num] = true;
      }
    }
  }

  return dp[targetSum];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSumTab(300, [7, 14]));
