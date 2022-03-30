/*
    MDN: The Promise.all() method takes an iterable of promises as an input, 
    and returns a single Promise that resolves to an array of the results of 
    the input promises. This returned promise will resolve when all of the 
    input's promises have resolved, or if the input iterable contains no 
    promises. It rejects immediately upon any of the input promises rejecting 
    or non-promises throwing an error, and will reject with this 
    first rejection message / error.

*/

Promise.all([Promise.resolve(10), Promise.resolve(20), Promise.resolve(30)])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(`Error in promises ${error}`));

Promise.myPromiseAll = function (arrayOfPromises) {
  const results = [];
  let fulfilledPromises = 0;
  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((promise, index) => {
      promise
        .then((data) => {
          results[index] = data;

          fulfilledPromises++;

          if (fulfilledPromises === arrayOfPromises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
Promise.myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
