// Control Statements in JavaScript

// looping Statements

// for loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}

// while loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}

// do...while loop - executes the block of code once before checking the condition
let k = 0;
do {
    console.log("Do...While Loop iteration: " + k);
    k++;
} while (k < 5);


// Break Statement
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        console.log("Breaking the loop at m = " + m);
        break; // exits the loop when m equals 5
    }
    console.log("Break Statement iteration: " + m);
}

// Continue Statement
for (let n = 0; n < 10; n++) {
    if (n % 2 === 0) {  // checks if n is even
        continue; // skips the rest of the loop for even numbers
    }
    console.log("Continue Statement iteration (odd numbers only): " + n);
}

// break and continue can also be used in while and do...while loops
let p = 0;
while (p < 10) {
    p++;
    if (p === 7) {
        console.log("Breaking the while loop at p = " + p);
        break; // exits the loop when p equals 7
    }
    if (p % 2 === 0) {
        continue; // skips even numbers
    } 
    console.log("While Loop with Continue iteration (odd numbers only): " + p);
}

// Nested Loops:
for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
        console.log("Nested Loop iteration: x = " + x + ", y = " + y);
    }
}

// Performance Optimzation Methods:
// 1. Early Exit Strategy
for (let z = 0; z < 100; z++) {
    if (z > 10) {
        break; // exit early to avoid unnecessary iterations
    }
    console.log("Early Exit Strategy iteration: " + z);
}

// 2. Reduce Unnecessary Iterations:
for (let w = 0; w < 50; w += 2) { // increment by 2 to skip even numbers
    console.log("Reduced Iterations iteration (odd numbers only): " + w);
}

// 3. Time Complexity Awareness:
for (let a = 0; a < 1000; a++) {
    for (let b = 0; b < 1000; b++) {
        // Avoiding O(n^2) complexity by limiting inner loop iterations
        if (b >= 10) {
            break;
        }
        console.log("Time Complexity Awareness iteration: a = " + a + ", b = " + b);
    } 
}

