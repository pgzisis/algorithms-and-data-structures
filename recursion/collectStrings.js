// Write a function called collectStrings which accepts an object and returns an
// array of all the values in the object that have a typeof string.

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

// collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(object) {
  let array = [];

  for (let key in object) {
    if (typeof object[key] === 'string') {
      array.push(object[key]);
    } else {
      array = array.concat(collectStrings(object[key]));
    }
  }

  return array;
}
