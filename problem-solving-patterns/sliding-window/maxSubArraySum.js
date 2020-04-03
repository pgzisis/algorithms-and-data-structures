// Write a function called maxSubArraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array.

// maxSubArraySum([1,2,5,2,8,1,5], 2) // 10
// maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
// maxSubArraySum([4,2,1,6], 1) // 6
// maxSubArraySum([4,2,1,6,2], 4) // 13
// maxSubArraySum([], 4) // null

function maxSubArraySum(array, number) {
  if (array.length < number) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  // create window and find first sum
  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  // start sliding the window and find new sum each time
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
