const arr = [1, 2, 3, 4, 5];

const newArr = arr.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
});

console.log(newArr);

Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = 0;
  if (initialValue === undefined) {
    accumulator = undefined;
  } else {
    accumulator = initialValue;
  }
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }

  return accumulator;
};

const newA = arr.myReduce((acc, curr) => {
  acc = acc + curr;
  return acc;
});

console.log(newA);
