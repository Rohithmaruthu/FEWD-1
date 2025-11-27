// Map Method Example
const nums = [1, 2, 3, 4, 5];
const newArr = nums.map(function(num) {
    return num * 2;
});
console.log(newArr); // [2, 4, 6, 8, 10]

// Filter Method Example
const filteredArr = nums.filter(function(num) {
    return num % 2 === 0;
});
console.log(filteredArr); // [2, 4]