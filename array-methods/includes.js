/*
    MDN: The includes() method determines whether an array 
    includes a certain value among its entries, 
    returning true or false as appropriate.

    Syntax: includes(searchElement, fromIndex)
*/

const array1 = [1, 2, 3, 4, 5];

console.log(array1.includes(3, 1));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

Array.prototype.myIncludes = function (searchEle, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex;
  }
  for (let i = fromIndex; i < this.length; i++) {
    if (searchEle === this[i]) return true;
  }
  return false;
};

const array2 = [1, 2, 3, 4, 5];

console.log(array2.myIncludes(3, 1));
// expected output: true

const pets1 = ["cat", "dog", "bat"];

console.log(pets1.myIncludes("cat"));
// expected output: true

console.log(pets1.myIncludes("at"));
// expected output: false
