/*
    MDN: The some() method tests whether at least one 
    element in the array passes the test implemented by the provided function. 
    It returns true if, in the array, it finds an element 
    for which the provided function returns true; 
    otherwise it returns false. It doesn't modify the array.

    syntax: some(callbackFn, thisArg)
*/

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

Array.prototype.mySome = function (callbackFn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const array1 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even1 = (element) => element % 2 === 0;

console.log(array1.some(even1));
// expected output: true
