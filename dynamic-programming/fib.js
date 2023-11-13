// memoization
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// tabulation
function fibTab(n) {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 0; i <= n; i++) {
    dp[i + 1] += dp[i];
    dp[i + 2] += dp[i];
  }

  return dp[n];
}

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fibTab(50));
