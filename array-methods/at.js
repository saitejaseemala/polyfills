const arr = [1, 2, 3, 4, 5];

console.log(arr.at(10));

Array.prototype.myAt = function (index) {
  const calledArray = this;
  return index >= 0
    ? calledArray[index]
    : calledArray[calledArray.length + index];
};

console.log(arr.myAt(10));
