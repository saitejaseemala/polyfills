/*
    MDN: The join() method creates and returns a new string by 
    concatenating all of the elements in an array (or an array-like object), 
    separated by commas or a specified separator string. If the array has only one item, 
    then that item will be returned without using the separator.

    Syntax: join(separator)

*/

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

Array.prototype.myJoin = function (separator = ",") {
  let resString = "";
  for (let i = 0; i < this.length; i++) {
    if (i < this.length - 1) {
      resString = resString + this[i] + separator;
    } else {
      resString = resString + this[i];
    }
  }
  return resString;
};

console.log(elements.myJoin());
// expected output: "Fire,Air,Water"

console.log(elements.myJoin(""));
// expected output: "FireAirWater"

console.log(elements.myJoin("-"));
// expected output: "Fire-Air-Water"
