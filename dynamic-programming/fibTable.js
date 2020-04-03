function fib(number) {
  if (number <= 2) {
    return 1;
  }

  const fibNumbers = [0, 1, 1];

  for (let i = 3; i <= number; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }

  return fibNumbers[number];
}
