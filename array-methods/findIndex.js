/* 
    MDN: The findIndex() method returns the index of the first element 
        in the array that satisfies the provided testing function.
        Otherwise, it returns -1, indicating that no element passed the test.

    Syntax: findIndex(callbackFn, thisArg)

*/

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// 3

Array.prototype.myFindIndex = function (callbackFn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

const isLargeNumber1 = (element) => element > 13;

console.log(array1.myFindIndex(isLargeNumber1));
// 3
