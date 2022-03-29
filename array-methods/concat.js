/*
    MDN: The concat() method is used to merge two or more arrays. 
    This method does not change the existing arrays, but instead returns a new array.

*/

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = ["g", "h", "i"];

const array4 = array1.concat(array2, array3);

console.log(array4);

Array.prototype.myConcat = function (...arrays) {
  const originalArray = this;
  let resultArray = [...originalArray];
  for (let i = 0; i < arrays.length; i++) {
    resultArray.push(...arrays[i]);
  }
  return resultArray;
};

const array5 = array1.myConcat(array2, array3);

console.log(array5);

/* 
    Output: 

    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    
*/
