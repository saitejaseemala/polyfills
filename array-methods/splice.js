/*
    MDN: The splice() method changes the contents of an array 
    by removing or replacing existing elements and/or adding new elements in place. 

    Syntax: splice(start, deleteCount, item1, item2, itemN)
*/

const months = ["Jan", "March", "April", "June"];
const months1 = ["Jan", "March", "April", "June"];

console.log(months.splice(1, 0, "Feb")); //[]

console.log(months); //Array ["Jan", "Feb", "March", "April", "June"]

console.log(months.splice(4, 1, "May")); //[June]

console.log(months); //Array ["Jan", "Feb", "March", "April", "May"]

Array.prototype.mySplice = function (start, deleteCount = 0, ...items) {
  const arrBeforeSplice = [];
  const arrAfterSplice = [];
  const spliceArray = [];

  if (start > this.length) return this;

  for (let i = 0; i < this.length; i++) {
    if (i < start) {
      arrBeforeSplice.push(this[i]);
    }
    if (i >= start && i < start + deleteCount) {
      spliceArray.push(this[i]);
    }
    if (i >= start + deleteCount) {
      arrAfterSplice.push(this[i]);
    }
  }

  const arr = [...arrBeforeSplice, ...items, ...arrAfterSplice];
  this.length = arr.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arr[i];
  }

  return spliceArray;
};

console.log(months1.mySplice(1, 0, "Feb")); //[]

console.log(months1); // ["Jan", "Feb", "March", "April", "June"]

console.log(months1.mySplice(4, 1, "May")); // ["June"]

console.log(months1); //Array ["Jan", "Feb", "March", "April", "May"]
