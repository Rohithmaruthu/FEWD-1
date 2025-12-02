// Modern array method examples (arrow functions + extras)
const nums = [1, 2, 3, 4, 5];

// map -> multiply each value by 2
// map is the transformation method
const newArr = nums.map(num => num * 2);
console.log('map ->', newArr); // [2, 4, 6, 8, 10]

// filter -> keep only even numbers
// filter is the selection method
const filteredArr = nums.filter(num => num % 2 === 0);
console.log('filter ->', filteredArr); // [2, 4]

// reduce -> sum all numbers
// it reduces the array to a single value baesd on the given function (+ in this case)
const sum = nums.reduce((acc, num) => acc + num, 0); // acc is the acummulated (running total)
console.log('reduce (sum) ->', sum); // 15

// forEach -> iterate and log each value with index
console.log('forEach ->');
nums.forEach((num, idx) => console.log(`index ${idx}: ${num}`));

// Chaining example: filter evens then double them
const doubleEvens = nums
    .filter(n => n % 2 === 0)
    .map(n => n * 2);
console.log('chaining (double evens) ->', doubleEvens); // [4, 8]

// Small reusable helper using map
const multiply = (arr, factor = 1) => arr.map(x => x * factor);
console.log('multiply helper ->', multiply(nums, 3)); // [3, 6, 9, 12, 15]

// Mini Challenge:

const players = [
  { name: "Alice", points: 12 },
  { name: "Bob", points: 7 },
  { name: "Charlie", points: 19 },
  { name: "David", points: 5 },
  { name: "Eva", points: 15 }
];
// Use map() to create a new array of strings like "Alice scored 12 points".
// Use filter() to find players who scored 10 or more points.
// Use reduce() to calculate the total points scored by all players.

const out1 = players.map(player => `${player.name} scored ${player.points} points`)
console.log('Challenge map ->', out1);

const out2 = players.filter(player => player.points >= 10)
console.log('Challenge filter ->', out2);

const out3 = players.reduce((acc, player) => acc + player.points, 0)
console.log('Challenge reduce ->', out3);