// Write a function called strigifyNumbers which takes in an object and finds
// all of the values which are numbers and converts them to strings.

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

// stringifyNumbers(obj)

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

function stringifyNumbers(object) {
  const newObject = {};

  for (let key in object) {
    if (typeof object[key] === 'number') {
      newObject[key] = object[key].toString();
    } else if (typeof object[key] === 'object' && !Array.isArray(object[key])) {
      newObject[key] = stringifyNumbers(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }

  return newObject;
}
