function radixSort(array) {
  let maxDigitCount = getMostDigits(array);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i);

      digitBuckets[digit].push(array[j]);
    }

    array = [].concat(...digitBuckets);
  }

  return array;
}

function getMostDigits(array) {
  let maxDigits = 0;

  for (number of array) {
    maxDigits = Math.max(maxDigits, countDigits(number));
  }

  return maxDigits;
}

function countDigits(number) {
  return number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number))) + 1;
}

function getDigit(number, exponent) {
  return Math.floor(Math.abs(number) / Math.pow(10, exponent)) % 10;
}
