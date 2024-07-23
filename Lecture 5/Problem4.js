// Take a number n as input from user. Create an array of numbers from 1 to n.

let n = prompt("Enter a number: ");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr.push(i);  
}

console.log(arr);