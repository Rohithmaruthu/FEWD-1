// JS Strings
// 1. Creating Strings
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun.';
let str3 = `Welcome to coding!`;

// 2. String Properties and Methods
let sampleStr = "  Learn JavaScript at EventBuzz!  ";
let strLength = sampleStr.length;

let upperStr = sampleStr.toUpperCase();
let lowerStr = sampleStr.toLowerCase(); 
let trimmedStr = sampleStr.trim();
let replacedStr = sampleStr.replace("EventBuzz", "CodeMaster");

console.log(`Original String: "${sampleStr}"`);
console.log(`Length: ${strLength}`);
console.log(`Uppercase: "${upperStr}"`);
console.log(`Lowercase: "${lowerStr}"`);
console.log(`Trimmed: "${trimmedStr}"`);
console.log(`Replaced: "${replacedStr}"`);

// 3. String Concatenation
let part1 = "Join us for an exciting ";
let part2 = "JavaScript Bootcamp!";
let fullMessage = part1 + part2;
console.log(fullMessage);

// 4. Template Literals - uses backticks `` (multi-line strings and interpolation - ${})
let eventName = "JavaScript Bootcamp";
let eventDate = "March 15, 2024";
let eventTime = "2:00 PM";
let venue = "Tech Hub Conference Room";
let invitation = `You're invited to the ${eventName}!
Date: ${eventDate}
Time: ${eventTime}
Venue: ${venue}
Best,
EventBuzz Team`;

console.log(invitation);
