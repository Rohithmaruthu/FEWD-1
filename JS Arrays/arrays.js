// JS Arrays

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log("Initial array:", fruits);

// Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

// Modifying array elements
fruits[1] = 'Blueberry';
console.log("Modified array:", fruits);

// 1. push() - adds one or more elements to the end of an array
// 2. pop() - removes the last element from an array
// 3. shift() - removes the first element from an array
// 4. unshift() - adds one or more elements to the beginning of an array
// 5. splice() - adds/removes elements from an array at a specified index

// Using push()
fruits.push('Date');
console.log("After push:", fruits);

// Using pop()
let lastFruit = fruits.pop();
console.log("After pop:", fruits);
console.log("Popped fruit:", lastFruit);

// Using shift()
let firstFruit = fruits.shift();
console.log("After shift:", fruits);
console.log("Shifted fruit:", firstFruit);

// Using unshift()
fruits.unshift('Elderberry');
console.log("After unshift:", fruits);

// Using splice() to remove 1 element at index 1

// splice(startIndex, deleteCount, item1, item2, ...)

fruits.splice(1, 1);
console.log("After splice (removal):", fruits);

// Using splice() to add elements at index 1
fruits.splice(1, 0, 'Fig', 'Grape');
console.log("After splice (addition):", fruits);
