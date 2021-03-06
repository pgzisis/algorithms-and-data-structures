// Write a function called averagePair. Given a sorted array of integers and a
// target average, determine if there is a pair of values in the array where the
// average of the pair equals the target average. There may be more than one
// pair that matches the average target.

// averagePair([1,2,3], 2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19], 8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([], 4) // false

function averagePair(array, target) {
  if (array.length < 2) {
    return false;
  }

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    const averageOfPair = calculateAverageOfPair(array[i], array[j]);

    if (averageOfPair === target) {
      return true;
    } else if (averageOfPair < target) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

function calculateAverageOfPair(number1, number2) {
  return (number1 + number2) / 2;
}
