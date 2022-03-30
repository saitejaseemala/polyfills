/*
    MDN: Promise.any() takes an iterable of Promise objects. 
    It returns a single promise that resolves as soon as any 
    of the promises in the iterable fulfills, with the value 
    of the fulfilled promise. If no promises in the iterable 
    fulfill (if all of the given promises are rejected), 
    then the returned promise is rejected with an AggregateError, 
    a new subclass of Error that groups together individual errors.

    Syntax: Promise.any(iterable);

*/

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"

Promise.myAny = function (promises) {
  const aggregateErr = new AggregateError(
    [new Error("some error occured")],
    "All promises were rejected"
  );
  let rejectCount = 0;
  return new Promise((resolve, reject) => {
    if (promises.length === 0) reject(aggregateErr);
    return promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          rejectCount++;
          if (rejectCount === promises.length) {
            reject(aggregateErr);
          }
        });
    });
  });
};

Promise.myAny(promises)
  .then((value) => console.log(value))
  .catch((err) => {
    console.error(err);
  });
