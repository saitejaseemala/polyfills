const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((item) => item > 3);

console.log(newArr, arr);

Array.prototype.myFilter = function (callback, thisArg) {
  const filterArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filterArr.push(this[i]);
    }
  }
  return filterArr;
};

const filarr = arr.myFilter((item) => item > 2);

console.log(filarr, arr);
