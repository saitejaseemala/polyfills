/* 
    MDN: The fill() method changes all elements in an array to a static value, 
    from a start index (default 0) to an end index (default array.length). 
    It returns the modified array.

    Syntax: fill(value, start, end)
*/

const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]

// polyfill for fill

Array.prototype.myFill = function (value, start = 0, end = this.length) {
  if (start < 0) start = this.length + start;
  if (end < 0) end = this.length + end;
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  return this;
};

const array2 = [1, 2, 3, 4];

console.log(array2.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

console.log(array2.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array2.fill(6));
// expected output: [6, 6, 6, 6]
