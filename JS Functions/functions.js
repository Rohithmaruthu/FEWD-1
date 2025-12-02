// JS Functions
// 1. Function Declaration
function greetUser(name) {
    return `Hello, ${name}! Welcome to EventBuzz.`;
}
console.log(greetUser("Alex"));

// 2. Function Expression
const calculateEventDuration = function(startTime, endTime) {
    const duration = endTime - startTime;
    return `Event Duration: ${duration} hours`;
} ;
console.log(calculateEventDuration(2, 5));

// 3. Arrow Function
const formatEventName = (eventName) => {
    return eventName.trim().toUpperCase();
}
console.log(formatEventName("  JavaScript Bootcamp  "));

// 4. Function with Default Parameters  
function createEventInvitation(eventName = "Coding Meetup", date = "TBA", time = "TBA") {
    return `You're invited to the ${eventName} on ${date} at ${time}.`;
}
console.log(createEventInvitation("JavaScript Bootcamp", "March 15, 2024", "2:00 PM"));
console.log(createEventInvitation()); // You're invited to the Coding Meetup on TBA at TBA.

// 5. Nested Functions
function generateEmailContent(recipientName, eventName, eventDate) {
    function createGreeting(name) {
        return `Hi ${name},`;
    }
    function createBody(event, date) {
        return `We are excited to invite you to the ${event} happening on ${date}. Don't miss out!`;
    }
    return `${createGreeting(recipientName)}\n\n${createBody(eventName, eventDate)}\n\nBest regards,\nEventBuzz Team`;
}

console.log(generateEmailContent("Alex", "JavaScript Bootcamp", "March 15, 2024"));

