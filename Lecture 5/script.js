function myfunction() {
    //this is the function defination
    console.log("This is the function is JS.");
}
myfunction(); //this is the function call/invoke

//we can pass the arguments to the function
function argFunction(msg) {
    console.log(msg);
}
argFunction("This is the argument passed to the function.");

function sumFun(a, b) {
    console.log(a + b);
} //output: 6

//sum of two numbers by function (using return)

function sumNum(num1, num2) {
    return num1 + num2;
}

console.log("The sum is:", sumNum(5, 10)); //this will print 15

//Arrow Functions

const arrowSum = (a, b) => {
    console.log(a + b);
};

const arrowMul = (a, b) => {
    console.log(a * b);
};

const arg = () => {
    console.log("This is an arrow function");
};

//map definition:
// map() ; creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

let nums = [67, 52, 39];
let newArr = nums.map((val) => {
    return val * 2;
});
console.log(newArr);

//filter definition:
// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log("Filtered even number array by filter method:",evenArr);


//Reduce definition:
// The reduce() method applies a function against an accumulator and each element in the array 
// (from left to right) to reduce it to a single output value.

let arr1 = [1, 2, 3, 4, 5];

//sum of array elements
let sum = arr1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Array sum by reduce method:",sum);

//find max element in array
const maxEl = arr1.reduce((prev, curr)=> {
    return prev > curr ? prev : curr;
});

console.log("Max number in array by filter method:", maxEl);  //output: 5

