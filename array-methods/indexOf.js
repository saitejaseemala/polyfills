/* 
    MDN : The indexOf() method returns the first index at which a given element 
    can be found in the array, or -1 if it is not present.

    Syntax: indexOf(searchElement, fromIndex)
*/

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

console.log(beasts.indexOf("bison", -2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// expected output: -1

Array.prototype.myIndexOf = function (searchEle, fromInd = 0) {
  if (fromInd < 0) {
    fromInd = this.length + fromInd;
  }
  for (let i = fromInd; i < this.length; i++) {
    if (searchEle === this[i]) return i;
  }
  return -1;
};

console.log(beasts.myIndexOf("bison"));
// expected output: 1

console.log(beasts.myIndexOf("bison", -2));
// expected output: 4

console.log(beasts.myIndexOf("giraffe"));
