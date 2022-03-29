/*
    MDN: The unshift() method adds one or more elements 
    to the beginning of an array and returns the new length of the array.

    Syntax: unshift(element0, element1, ...., elementN)

*/

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

Array.prototype.myUnShift = function (...items) {
  arr = [...items, ...this];
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i];
  }
  return arr.length;
};

console.log(array2.myUnShift(4, 5));
// expected output: 5

console.log(array2);
// expected output: Array [4, 5, 1, 2, 3]
