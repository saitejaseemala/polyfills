/*
    MDN: The slice() method returns a shallow copy of a 
    portion of an array into a new array object selected 
    from start to end (end not included) where start and end 
    represent the index of items in that array. The original array will not be modified.

    Syntax: slice(start, end)
*/

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

Array.prototype.mySlice = function (start = 0, end = this.length) {
  let resArray = [];
  if (start < 0) {
    start = this.length + start;
  }
  if (end < 0) {
    end = this.length + end;
  }

  for (let i = start; i < end; i++) {
    resArray.push(this[i]);
  }

  return resArray;
};

console.log(animals.mySlice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.mySlice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.mySlice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.mySlice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.mySlice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.mySlice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
