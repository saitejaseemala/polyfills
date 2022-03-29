const arr = [1, 2, 3, 4, 5];

arr.forEach((item, ind, arr1) => {
  arr1[ind] = arr1[ind] * 5;
});

console.log(arr);

Array.prototype.myForEach = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((item, ind, arr1) => {
  arr1[ind] = arr1[ind] * 2;
});

console.log(arr);
