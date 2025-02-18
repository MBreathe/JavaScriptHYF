/**
 * Credit to https://adventofcode.com/ for this exercise

In the list below you have an array of numbers. The goal is to find the two numbers that add up to 2020.

Once you have found those numbers, multiply the numbers and store the result of that in the result variable.
 */


const list = [1721, 979, 366, 299, 675, 1456];
// Write your code here
let result;
list.forEach((num, inx) => {
    for (let i = inx++; i < list.length; i++) {
        if ((num + list[i]) === 2020) {
            result = num * list[i];
        }
    }
})
// I clarify that I have solved the task in my own way, but then I just liked how well
// it was written in solutions so I re-wrote it the same way

// TEST CODE, do not change
console.assert(result === 514579, `The result is not correct, it is ${result}, but should be 514579`);