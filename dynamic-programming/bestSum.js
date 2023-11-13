// memoization
function bestSum(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remanderCombination = bestSum(remainder, numbers, memo);
    if (remanderCombination !== null) {
      const combination = [...remanderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
}

// tabulation
function bestSumTab(targetSum, numbers) {
  const dp = Array(targetSum + 1).fill(null);
  dp[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (dp[i] !== null) {
      for (let num of numbers) {
        const combination = [...dp[i], num];
        if (!dp[i + num] || dp[i + num].length > combination.length) {
          dp[i + num] = combination;
        }
      }
    }
  }

  return dp[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
