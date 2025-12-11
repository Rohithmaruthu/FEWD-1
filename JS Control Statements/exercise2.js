/*
Exercise 2: Simple Grade Validator
Time Limit: 10 minutes

Scenario: Build a function that validates and categorizes student grades.

Your Task: Create a function validateGrade(score) that checks if a grade is valid and returns the letter grade with a message.

Parameters:

score: number (grade score from 0-100)
Requirements:

If score is less than 0 or greater than 100: return "Invalid grade"
Use the following grade scale:
90-100: "A - Excellent work!"
80-89: "B - Good job!"
70-79: "C - Satisfactory"
60-69: "D - Needs improvement"
Below 60: "F - Please see instructor"
Example:

validateGrade(85);
// Expected: "B - Good job!"

validateGrade(105);
// Expected: "Invalid grade"
*/

function validateGrade(score) {
    // Your code here
    let grade = "";

    if (score >= 90 && score <= 100) {
        grade = "A - Excellent work!";
    } else if (score >= 80 && score < 90) {
        grade = "B - Good job!";
    } else if (score >= 70 && score < 80) {
        grade = "C - Satisfactory";
    } else if (score >= 60 && score < 70) {
        grade = "D - Needs improvement";
    } else if (score < 60 && score >= 0) {
        grade = "F - Please see instructor";
    } else {
        return "Invalid grade"
    }

    return grade;
    
}

// Test your function
console.log(validateGrade(95));
console.log(validateGrade(45));
console.log(validateGrade(-10));