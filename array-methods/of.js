console.log(Array.of("1", 2, 3));

Array.myOf = function (...args) {
  return args;
};

console.log(Array.myOf("1", 2, 3));

/*
    Output: 

    ['1', 2, 3]
    ['1', 2, 3]
    
*/
