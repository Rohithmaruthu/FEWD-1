/*
Exercise 3: ATM Transaction Checker
Time Limit: 12 minutes

Scenario: Create a function that simulates basic ATM transaction validation.

Your Task: Write a function processTransaction(accountBalance, withdrawAmount, hasCard, pinCorrect) that determines if a transaction can proceed.

Parameters:

accountBalance: number (current account balance)
withdrawAmount: number (amount user wants to withdraw)
hasCard: boolean (true if card is inserted)
pinCorrect: boolean (true if PIN is correct)
Requirements:

If no card: return "Please insert card"
If card present but PIN incorrect: return "Incorrect PIN"
If withdraw amount is 0 or negative: return "Invalid amount"
If withdraw amount exceeds balance: return "Insufficient funds"
If withdraw amount exceeds daily limit (500): return "Daily limit exceeded"
If all conditions are met: return "Transaction approved. New balance: [new balance]"
Example:

processTransaction(1000, 200, true, true);
// Expected: "Transaction approved. New balance: 800"

processTransaction(100, 150, true, true);
// Expected: "Insufficient funds"
 */

function processTransaction(accountBalance, withdrawAmount, hasCard, pinCorrect) {
    // Your code here

    if (!hasCard) return "Please insert card";

    if (!pinCorrect) return "Incorrect PIN";

    if (withdrawAmount <= 0) return "Invalid amount";

    if (accountBalance < withdrawAmount) return "Insufficient funds";

    if  (withdrawAmount > 500) return  "Daily limit exceeded";

    let newBalance = accountBalance - withdrawAmount;

    return `Transaction approved. New balance: ${newBalance}`;
    
}

// Test your function
console.log(processTransaction(500, 100, true, true));
console.log(processTransaction(200, 50, false, true));
console.log(processTransaction(1000, 600, true, true));