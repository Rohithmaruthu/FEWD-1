// JS Operators

// 1. Arithmetic Operators - like +, -, *, /, %, **
let a = 5;
let b = 2;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// 2. comparison Operators - like ==, ===, !=, !==, >, <, >=, <=
let x = 10;
console.log(x > 5); // true
console.log(x < 5); // false

// 3. Logical Operators - like &&, ||, !
let isAdult = true;
let hasID = false;

if (isAdult && hasID) {
    console.log("Access granted"); 
} else {
    console.log("Access denied"); 
}

// 4. Assignment Operators - like =, +=, -=, *=, /=, %=
let num = 10;
num += 5; // num = num + 5
console.log("After += :", num);

console.log(5 + "5"); 
