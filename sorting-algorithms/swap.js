function swap(index1, index2, array) {
  return ([array[index1], array[index2]] = [array[index2], array[index1]]);
}

// function swap(index1, index2, array) {
//   const temp = array[index1];

//   array[index1] = array[index2];
//   array[index2] = temp;

//   return array;
// }

module.exports = swap;
