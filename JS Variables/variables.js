// ways to declare a variable in JavaScript

// 1. Using var - function-scoped variable that can be reassigned
var name = "John";
console.log(name); // Output: John 

// 2. Using let - block-scoped variable that can be reassigned
let age = 25;
console.log(age); // Output: 25 

// 3. Using const - constant value that cannot be reassigned
const pi = 3.14;
console.log(pi); // Output: 3.14
// Note: While the variable itself cannot be reassigned, objects and arrays declared with const can still be modified.
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

// scoping
// global scope - accessible from anywhere in the code
var globalVar = "I am a global variable";
// local scope - accessible only within the function or block
function myFunction() {
  let localVar = "I am a local variable";
  console.log(localVar); // Output: I am a local variable
  console.log(globalVar); // Output: I am a global variable
}

myFunction();
// console.log(localVar); // Error: localVar is not defined



// hoisting
// var declarations are hoisted and initialized with undefined
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";

// let and const declarations are hoisted but not initialized
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization

let hoistedLet = "I am hoisted with let";
// same for const

// Hoisting with functions
hoistedFunction(); // Output: I am a hoisted function

function hoistedFunction() {
  console.log("I am a hoisted function");
}

// block scope with let and const
if (true) {
  let blockLet = "I am block scoped";
  const blockConst = "I am also block scoped";
  var blockVar = "I am function scoped";
  console.log(blockVar); // Output: I am block scoped
  console.log(blockConst); // Output: I am also block scoped
}
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined
console.log(blockVar); // Output: I am function scoped



