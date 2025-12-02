// JS Strings

// You've just been hired as a Digital Marketing Assistant at "EventBuzz" - a startup that helps students organize coding clubs and tech meetups. Your manager loves your coding skills and has given you an exciting first project: build an Auto-Email Generator that creates personalized invitations for coding events.

/*
What You'll Build
A dynamic Auto-Email Generator that:

Creates personalized greeting messages with names
Generates event invitations with dynamic details (date, time, location)
Formats text with proper capitalization and spacing
Creates subject lines that grab attention
Validates email content before sending

Constraints
1. Variables to declare:

recipientName (string) - Set to "Alex"
eventName (string) - Set to "JavaScript Bootcamp"
eventDate (string) - Set to "March 15, 2024"
eventTime (string) - Set to "2:00 PM"
venue (string) - Set to "Tech Hub Conference Room"
organizerName (string) - Set to "CodeMaster"
2. Functions to implement:

createGreeting(name) - Returns personalized greeting
generateSubject(event, date) - Creates catchy email subject line
formatEventDetails(event, date, time, location) - Formats complete event info
createInvitation(name, event, date, time, venue, organizer) - Generates full email
validateEmail(email) - Checks if email content meets requirements
3. Technical requirements:

Use template literals (backticks `) for multi-line strings
Use string methods like .toUpperCase(), .toLowerCase(), .trim()
Use string concatenation with + operator
Follow camelCase naming convention
Do not use var
4. Logic requirements:

createGreeting() must include the person's name in a friendly greeting
generateSubject() must be under 50 characters and include event name
formatEventDetails() must include all event information clearly
createInvitation() must combine all elements into a complete email
validateEmail() must check if email contains name, event, and date
Sample Output
// Example function calls and expected outputs:

console.log(createGreeting("Alex"));
// "Hey Alex! Ready for an amazing coding adventure?"

console.log(generateSubject("JavaScript Bootcamp", "March 15"));
// "JavaScript Bootcamp on March 15 - Don't Miss Out!"

console.log(formatEventDetails("JavaScript Bootcamp", "March 15, 2024", "2:00 PM", "Tech Hub Conference Room"));
// "EVENT: JavaScript Bootcamp
//  DATE: March 15, 2024
//  TIME: 2:00 PM
//  VENUE: Tech Hub Conference Room"

console.log(createInvitation("Alex", "JavaScript Bootcamp", "March 15, 2024", "2:00 PM", "Tech Hub Conference Room", "CodeMaster"));
// Complete personalized email invitation

console.log(validateEmail(sampleEmail));
// true (if email contains all required elements)
Submission Guidelines
Declare all variables with correct string values
Implement all five functions according to specifications
Use template literals for multi-line strings and variable interpolation
Use string methods for text formatting and manipulation
Test your functions with console.log statements
Follow camelCase naming convention
Ensure emails are engaging - they should make people want to attend!
Success Tips
Start with simple functions: Begin with createGreeting() and test it before moving on
Use template literals: They make string building much easier than concatenation
Test with different inputs: Try different names and events to see if your functions work
Make it personal: Real people should want to read these emails
Use meaningful variable names: Your code should tell the story of email creation
Keep it concise: Good emails are clear and to the point
Good luck, future email marketing masters!

Remember, you're not just manipulating strings—you're crafting digital experiences that bring people together for coding events. Every template literal creates a connection, and every personalized message could be the reason someone discovers their love for coding. Make your emails so good that people look forward to receiving them!

Time to turn your strings into digital magic!
*/

let recipientName = "Alex";
let eventName = "JavaScript Bootcamp";
let eventDate = "March 15, 2024";
let eventTime = "2:00 PM";
let venue = "Tech Hub Conference Room";
let organizerName = "CodeMaster";

function createGreeting(name) {
    return `Hey ${name}! Ready for an amazing coding adventure?`;
}

function generateSubject(event, date) {
    let subject = `${event} on ${date} - Don't Miss Out!`;
    return subject;
}

function formatEventDetails(event, date, time, location) {
    return `EVENT: ${event.toUpperCase()}
    DATE: ${date}
    TIME: ${time}
    VENUE: ${location}`;
}

function createInvitation(name, event, date, time, venue, organizer) {
    let greeting = createGreeting(name);
    let subject = generateSubject(event, date);
    let eventDetails = formatEventDetails(event, date, time, venue); 
    return `${greeting}
    Subject: ${subject}

    You're invited to the ${event}!
    ${eventDetails}

    Best,
    ${organizer}`;
}

function validateEmail(email) {
    let hasName = email.includes(recipientName);
    let hasEvent = email.includes(eventName);
    let hasDate = email.includes(eventDate);
    return hasName && hasEvent && hasDate;
} 

// Testing the functions
console.log(createGreeting(recipientName));
console.log(generateSubject(eventName, "March 15"));
console.log(formatEventDetails(eventName, eventDate, eventTime, venue));
let sampleEmail = createInvitation(recipientName, eventName, eventDate, eventTime, venue, organizerName);
console.log(sampleEmail);
console.log(validateEmail(sampleEmail));

