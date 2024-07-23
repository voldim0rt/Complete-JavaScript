//     Use the reduce method to calculate product of all the numbers in the array. 

let numbers = [1, 2, 3, 4, 5];

let product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(product);
// Output: 120  (1*2*3*4*5)  // The reduce method will start with the first number in the
// array (1) and then multiply it by each subsequent number in the array. The result will
// be accumulated and returned at the end.  // If you want to get the sum instead of the product,
// you can use the reduce method with addition instead of multiplication.

// For example: let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15  (1+2+3+4+5).



//create function of adding two numbers
