// Write a function called minSubArrayLen which accepts two parameters - an
// array of positive integers and a positive integer. This function should
// return the minimal length of a contiguous subarray of which the sum is
// greater than or equal to the integer passed to the function. If there isn't
// one, return 0 instead.

// minSubArrayLen([2,3,1,2,4,3], 7) // 2
// minSubArrayLen([2,1,6,5,4], 9) // 2
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
// minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

function minSubArrayLen(array, number) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    // if current window doesn't add up to the given sum then move to the right
    if (total < number && end < array.length) {
      total += array[end];
      end++;
      // if current window adds up to the sum we can shrink it from the left
    } else if (total >= number) {
      minLen = Math.min(minLen, end - start);

      if (minLen === 1) {
        return minLen;
      }

      total -= array[start];
      start++;

      // current total less than target but we reach the end
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
