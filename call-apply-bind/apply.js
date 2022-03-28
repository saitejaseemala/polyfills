/* 
    MDN: The apply() method calls a function with a 
        given this value, and arguments provided as an array (or an array-like object).

    Syntax: apply(thisArg, argsArray)
            functionName.apply(thisArg, argsArray)
*/

const me = {
  name: "Sai",
  role: "Frontend Dev",
};

function testFun(animeName, favCharacter) {
  console.log(
    `${this.name} loves ${animeName} and his favorite Character is ${favCharacter}`
  );
}

// Official apply method

testFun.apply(me, ["Rick & Morty", "Rick"]);

// Polyfill for apply

Function.prototype.myApply = function (obj, argsArray) {
  let funName = this;
  obj.funProp = funName;
  return obj.funProp(...argsArray);
};

testFun.myApply(me, ["Rick & Morty", "Birdman"]);

/*
    Output: 
  
    Sai loves Rick & Morthy and his favorite Character is Rick
    Sai loves Rick & Morty and his favorite Character is Birdman

*/
