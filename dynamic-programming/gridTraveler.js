// memoization
function gridTraveler(m, n, memo = {}) {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

// tabulation
function gridTravelerTab(m, n) {
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  dp[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = dp[i][j];
      if (j + 1 <= n) dp[i][j + 1] += current;
      if (i + 1 <= m) dp[i + 1][j] += current;
    }
  }

  return dp[m][n];
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTravelerTab(18, 18));
