/* 
    MDN: The call() method calls a function with a given 
        this value and arguments provided individually.

    Syntax: call(thisArg, arg1, ... , argN)
            functionName.call(thisArg, arg1, arg2, ...);
*/

const southPark = {
  boss: "Cartman",
};

function callTheHeroFun(power) {
  console.log(`calling the boss ${this.boss} and his power is ${power}`);
}

// Official call method

callTheHeroFun.call(southPark, "manipulation");

// Polyfill for call

Function.prototype.myCall = function (obj, ...args) {
  let funName = this;
  obj.funProp = funName;
  return obj.funProp(...args);
};

callTheHeroFun.myCall(southPark, "smartness");

/*
    Output: 

    calling the boss Cartman and his power is manipulation
    calling the boss Cartman and his power is smartness
*/
