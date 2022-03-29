/*
    MDN: The lastIndexOf() method returns the last index 
    at which a given element can be found in the array, 
    or -1 if it is not present. The array is searched backwards, starting at fromIndex.

    Syntax: lastIndexOf(searchElement, fromIndex)
*/

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// expected output: 1

Array.prototype.myLastIndexOf = function (
  searchEle,
  fromInd = this.length - 1
) {
  if (fromInd < 0) {
    fromInd = this.length + fromInd;
  }

  for (let i = fromInd; i >= 0; i--) {
    if (searchEle === this[i]) {
      return i;
    }
  }
  return -1;
};

const numbers = [2, 5, 9, 2];
console.log(numbers.myLastIndexOf(2)); // 3
console.log(numbers.myLastIndexOf(7)); // -1
console.log(numbers.myLastIndexOf(2, 3)); // 3
console.log(numbers.myLastIndexOf(2, 2)); // 0
console.log(numbers.myLastIndexOf(2, -2)); // 0
console.log(numbers.myLastIndexOf(2, -1)); // 3
