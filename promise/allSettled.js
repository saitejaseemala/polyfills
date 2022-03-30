Promise.myAllSettled = function (promises) {
  const mappedPromises = promises.map((promise) => {
    return Promise.resolve(promise)
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
};

let promises = [
  Promise.resolve(2),
  Promise.reject("This is rejected"),
  24,
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(67);
    }, 1000);
  }),
];

Promise.myAllSettled(promises).then((result) => console.log(result));
