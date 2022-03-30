/*
    MDN: The Promise.race() method returns a promise that 
    fulfills or rejects as soon as one of the promises in 
    an iterable fulfills or rejects, with the value or reason from that promise.

    Syntax: Promise.race(iterable);

*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      return Promise.resolve(promise).then(resolve, reject);
    });
  });
};

Promise.myRace([promise1, promise2, Promise.reject("oops!")])
  .then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  })
  .catch((err) => {
    console.error(err);
  });
