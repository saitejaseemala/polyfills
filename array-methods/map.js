const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((item) => {
  return item * 2;
});

console.log(newArr);

Array.prototype.myMap = function (callback, thisArg) {
  const mapArr = [];
  for (let i = 0; i < this.length; i++) {
    mapArr.push(callback(this[i], i, this));
  }
  return mapArr;
};

const testArr = arr.myMap((item) => {
  return item * 5;
});

console.log(testArr);
