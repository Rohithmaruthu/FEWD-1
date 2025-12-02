/*
    Introduction & Background
    You've just been hired as a Task Management Developer at "TaskMaster Pro" - a productivity startup that helps students organize their daily routines and study schedules. Your manager is impressed with your JavaScript skills and has assigned you an exciting project: build a Smart To-Do List Manager that can add tasks, mark them complete, delete them, and even count pending items.

    This isn't just about creating a simple list—you'll be writing reusable functions that can handle different types of tasks, calculate statistics, and provide smart recommendations. Think of functions as your personal assistants that can perform specific jobs whenever you call them!

    Your to-do app needs to be so efficient that students actually want to use it to manage their busy academic lives. Ready to become the master of code organization?

    What You'll Build
    A dynamic Smart To-Do List Manager that:

    Adds new tasks with different priorities (high, medium, low)
    Marks tasks as complete or incomplete
    Deletes tasks from the list
    Counts total, completed, and pending tasks
    Provides productivity insights and motivation messages
    Calculates completion percentage for progress tracking
    Constraints
    1. Variables to declare:

    tasks (array) - Set to [] (empty array to store tasks)
    completedTasks (number) - Set to 0
    totalTasks (number) - Set to 0
    2. Functions to implement:

    addTask(taskName, priority) - Adds a new task to the list
    completeTask(taskName) - Marks a task as completed
    deleteTask(taskName) - Removes a task from the list
    getTotalTasks() - Returns the total number of tasks
    getCompletedTasks() - Returns the number of completed tasks
    getProductivityMessage() - Returns motivational message based on completion rate
    3. Technical requirements:

    Use function declarations with the function keyword
    Use parameters to pass data to functions
    Use return statements to send data back from functions
    Use array methods like push(), splice(), filter(), find()
    Follow camelCase naming convention
    Do not use var; only use let and const
    4. Logic requirements:

    addTask() must add task object with name, priority, and completion status
    completeTask() must find the task and update its completion status
    deleteTask() must remove the task from the array
    getProductivityMessage() returns different messages based on completion percentage
    All functions must handle edge cases (empty arrays, non-existent tasks)

*/

let tasks = [];
let completedTasks = 0;
let totalTasks = 0;

function addTask(taskName, priority) {
    let task = {name: taskName, priority: priority, completed: false};
    tasks.push(task);
    totalTasks++;
}

function completeTask(taskName) {
    for (let task of tasks) {
        if (task.name === taskName && !task.completed) {
            task.completed = true;
            completedTasks++;
            break;
        }
    }
}

function deleteTask(taskName) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].name === taskName) {
            if (tasks[i].completed) {
                completedTasks--;
            }
            tasks.splice(i, 1);
            totalTasks--;
            break;
        }
    }
}

function getTotalTasks() {
    return totalTasks;
}

function getCompletedTasks() {
    return completedTasks;
}

function getProductivityMessage() {
    if (totalTasks === 0) {
        return "No tasks available. Add some tasks to get started!";
    }
    let completionRate = (completedTasks / totalTasks) * 100;
    if (completionRate === 100) {
        return "Excellent work! All tasks completed.";
    } else if (completionRate >= 75) {
        return "Great job! You're almost there.";
    } else if (completionRate >= 50) {
        return "Good progress, keep going!";
    } else {
        return "Let's focus and get some tasks done!";
    }
}

// Testing the functions
addTask("Finish project report", "High");
addTask("Email team updates", "Medium");
addTask("Schedule meeting", "Low");
completeTask("Email team updates");
console.log(`Total Tasks: ${getTotalTasks()}`);
console.log(`Completed Tasks: ${getCompletedTasks()}`);
console.log(getProductivityMessage());
deleteTask("Schedule meeting");
console.log(`Total Tasks after deletion: ${getTotalTasks()}`);
console.log(getProductivityMessage());

