/* 
    MDN Webdocs: The bind() method creates a new function that, 
    when called, has its this keyword set to the 
    provided value, with a given sequence of arguments 
    preceding any provided when the new function is called.


    Alternate Definition: 
    
    The bind() method creates a new function, when invoked, 
    has the this sets to a provided value.
    
    The bind() method allows an object to borrow a method 
    from another object without making a copy of that method. 
    This is known as function borrowing in JavaScript.

    Syntax: bind(thisArg, arg1, ... , argN)

    Bind let’s us explicitly define the value of this when calling a function
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

// Official Bind method

const bindReturnFun = testFun.bind(me, "Dragonball");
bindReturnFun("Goku");

// Polyfill for the bind

Function.prototype.myBind = function (obj, ...args) {
  let funName = this;
  obj.funProp = funName;
  return function (...args2) {
    return obj.funProp(...args, ...args2);
  };
};

const polyBindReturnFun = testFun.myBind(me, "South Park");
polyBindReturnFun("Cartman");

/* 

Output:

Sai loves Dragonball and his favorite Character is Goku
Sai loves South Park and his favorite Character is Cartman

*/
