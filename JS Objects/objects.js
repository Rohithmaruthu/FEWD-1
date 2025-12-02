// objects are collections of key-value pairs
// they are similar to dictionaries in python

const { use } = require("react");

// basic structure

let objectName = {
  key1: value1,
  key2: value2,
  key3: value3
};

// example object
let user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

// creating an object
// 1. using object literal syntax
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
// 2. using the Object constructor
let bike = new Object();
bike.make = "Honda";
bike.model = "CBR500R";
bike.year = 2019;
// 3. using constructor functions
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// accessing object properties
// 1. dot notation
console.log(user.firstName); // John
// 2. bracket notation
console.log(user["lastName"]); // Doe

// adding or modifying properties
// adding a new property
user.phoneNumber = "123-456-7890";
user["address"] = "123 Main St";

console.log("after adding properties",user);

// modifying an existing property
user.age = 31;
user["email"] = "new@email.com"

console.log("after modifying properties",user);

// deleting properties
delete user.phoneNumber;
delete user["address"];

console.log("after deleting properties",user);

