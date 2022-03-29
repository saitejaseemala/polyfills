/*
    MDN: The find() method returns the first element in the provided array 
        that satisfies the provided testing function. 
        If no values satisfy the testing function, undefined is returned.
    
    Syntax: find(callbackFn, thisArg)
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
//10

Array.prototype.myFind = function (callbackFn, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return this[i];
    }
  }
};

const found1 = array1.myFind((element) => element > 10);

console.log(found1);

//10
