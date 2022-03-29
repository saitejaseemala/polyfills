/*

    MDN: The shift() method removes the first element from an array 
    and returns that removed element. 
    This method changes the length of the array.

    Syntax: shift()

*/

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

const firstEle = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstEle);
// expected output: 1

Array.prototype.myShift = function () {
  const firstElement = this[0];
  for (let i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  this.length = this.length - 1;
  return firstElement;
};

const first = array2.myShift();

console.log(array2);
// expected output: Array [2, 3]

console.log(first);
// expected output: 1
