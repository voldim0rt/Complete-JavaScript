// For a given array of numbers, print the square of each value using the forEach loop
//arr = [2, 3, 4, 5, 7].


let arr = [2, 3, 4, 5, 7];

arr.forEach(function(num) {
    console.log(num * num);
});


//callback function

function square(num) {
    console.log(num * num);
}

arr.forEach(square); // this will print the squares of each number in the array.

