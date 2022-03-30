export default class MyPromise {
  resolvedData;
  rejectedData;

  isResolved = false;
  isRejected = false;

  resolveChain = [];
  rejectChain = [];

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value));
  }

  static reject(error) {
    return new MyPromise((_resolve, reject) => reject(error));
  }

  static all(promises) {
    const fulfilled = [];
    const results = [];

    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((data) => {
            fulfilled.push(true);
            results[index] = data;

            if (fulfilled.length === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    });
  }

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;
      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, fn) => {
          return fn(acc);
        }, this.resolvedData);
      }
    };

    const reject = (value) => {
      this.rejectedData = value;
      this.isRejected = true;
      if (this.rejectChain.length) {
        this.rejectChain.reduce((acc, fn) => {
          return fn(acc);
        }, this.rejectedData);
      }
    };
    executor(resolve, reject);
  }

  then(fn) {
    this.resolveChain.push(fn);
    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => {
        return fn(acc);
      }, this.resolvedData);
    }
    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);
    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => {
        return fn(acc);
      }, this.rejectedData);
    }
    return this;
  }

  finally(fn) {
    this.resolveChain.push(fn);
    this.rejectChain.push(fn);

    if (this.isResolved) {
      this.resolveChain.reduce((acc, fn) => {
        return fn(acc);
      }, this.resolvedData);
    }

    if (this.isRejected) {
      this.rejectChain.reduce((acc, fn) => {
        return fn(acc);
      }, this.rejectedData);
    }
  }
}
