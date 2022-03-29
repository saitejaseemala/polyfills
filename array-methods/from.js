const name = "sai";

let doubler = {
  factor: 2,
  double(x) {
    return x * this.factor;
  },
};

let tripler = {
  factor: 3,
};

let scores = [5, 6, 7];

Array.myFrom = function (arrayLike, mapFn, thisArg) {
  let returnArray = [];

  if (typeof arrayLike[Symbol.iterator] !== "function") return returnArray;

  if (mapFn !== undefined) {
    if (thisArg !== undefined) {
      thisArg.funProp = mapFn;
      for (let i = 0; i < arrayLike.length; i++) {
        returnArray.push(thisArg.funProp(arrayLike[i], i));
      }
    } else {
      for (let i = 0; i < arrayLike.length; i++) {
        returnArray.push(mapFn(arrayLike[i], i));
      }
    }
    return returnArray;
  }

  return [...arrayLike];
};

console.log(Array.from(name));

console.log(Array.myFrom(name));

console.log(Array.myFrom(name, (x) => x + "->"));
console.log(Array.myFrom(new Set([1, 2, 3, 4])));

let newScores = Array.myFrom(scores, doubler.double, doubler);
console.log(newScores);

let tripleScore = Array.myFrom(scores, doubler.double, tripler);
console.log(tripleScore);

console.log(Array.from({ name: "goku" }));
console.log(Array.myFrom({ name: "goku" }));

/* 
    Output:

    ['s', 'a', 'i']
    ['s', 'a', 'i']
    ['s->', 'a->', 'i->']
    [1, 2, 3, 4]
    [10, 12, 14]
    [15, 18, 21]
    []
    []
*/
