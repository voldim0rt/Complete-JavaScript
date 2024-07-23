// For given array with the marks of students -> [86, 78, 98, 37, 60].
//Find the average marks of entire class using iteration.

let marks = [86, 78, 90, 37, 60];

// Finding the sum of all the marks

let sum = 0;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }


for(let i of marks) {
    sum += i;
}
avg = sum/marks.length;

console.log(`The average marks of the class are = ${avg}`);

// console.log("The average marks of the class are: ", avg);

