import MyPromise from "./MyPromise.js";

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
})
  .then((data) => {
    return data * 3;
  })
  .then((data) => {
    return data * 5;
  })
  .catch((err) => {
    return `${err} ->`;
  })
  .catch((err) => {
    return err;
  })
  .finally((data) => {
    console.log(data);
  });

MyPromise.resolve("success").then((data) => console.log(data));

MyPromise.reject("failure").catch((data) => console.error(data));

MyPromise.all([
  MyPromise.resolve(20),
  MyPromise.resolve(30),
  new MyPromise((resolve) => {
    setTimeout(() => resolve(50), 1000);
  }),
])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
