function fib(number, memo = []) {
  // if it's in memo, don't calculate again
  if (memo[number]) {
    return memo[number];
  }

  const result = fib(number - 1, memo) + fib(number - 2, memo);
  memo[number] = result;

  return result;
}
