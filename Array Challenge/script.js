// Challenge #1
// input = [1, 2, 3, 4, 5]
// output = [6, 5, 4, 3, 2, 1, 0]
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// Challenge #2
// Combine arr1 and arr2 into arr3 without repeating 5
// arr1 = [1, 2, 3, 4, 5]
// arr2 = [5, 6, 7, 8, 9, 10]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr2.shift(0);

const arr3 = [...arr1, ...arr2];

console.log(arr3);