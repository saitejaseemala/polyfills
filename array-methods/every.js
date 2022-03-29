/*
    MDN: The every() method tests whether all elements in the array 
    pass the test implemented by the provided function. It returns a Boolean value.

    Syntax: every(callbackFn, thisArg)
    callbackFn(element, index, array)
*/

const isBelowThreshold = (currentValue) => currentValue < 20;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

Array.prototype.myEvery = function (callbackFn, thisArg) {
  const calledArr = this;
  for (let i = 0; i < calledArr.length; i++) {
    if (!callbackFn(calledArr[i], i, calledArr)) {
      return false;
    }
  }
  return true;
};

console.log(array1.myEvery(isBelowThreshold));

/* 
    Output: 
    false
    false
*/
