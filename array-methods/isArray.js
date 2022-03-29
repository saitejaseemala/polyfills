const arr = [1, 2, 3, 4, 5];

console.log(Array.isArray(arr));

// polyfill for isArray

Array.myIsArray = function (value) {
  return Object.prototype.toString.call(value) === "[object Array]";
};

console.log(Array.myIsArray(arr));
