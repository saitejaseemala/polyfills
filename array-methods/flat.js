/*
    MDN: The flat() method creates a new array with all sub-array elements 
    concatenated into it recursively up to the specified depth.

    Syntax: flat(depth)
*/

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(-1));
// expected output: [0, 1, 2, [3, 4]]

Array.prototype.myFlat = function (depth = 1) {
  let resultArray = [];
  if (depth <= 0) return this;
  function flatten(flatArray, depth) {
    if (depth < 0) {
      resultArray.push(flatArray);
      return;
    }
    for (let arr of flatArray) {
      if (Array.isArray(arr)) {
        flatten(arr, depth - 1);
      } else {
        resultArray.push(arr);
      }
    }
  }
  flatten(this, depth);
  return resultArray;
};

console.log(arr1.myFlat());
// expected output: [0, 1, 2, 3, 4]

console.log(arr2.myFlat(-1));
// expected output: [0, 1, 2, [3, 4]]

const arr3 = [[[0, 1, 2, [3, 4]]]];

console.log(arr3.myFlat(2)); // [0, 1, 2, Array(2)]

console.log(arr3.flat(2)); // [0, 1, 2, Array(2)]
