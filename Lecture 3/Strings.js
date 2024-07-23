// creating a new string

let str = "Tanmay";
let str2 = 'Bagul';
let str3 = `Ram`;  //This is a template Literal.


//there are some inbuilt properties for the strings such as "length".


console.log(str.length); // 6


console.log(str[6]);



//Usage of string literals.

let obj = {
    item: "Pen",
    price: 100,
};

// console.log("The cost of", obj.item, " is ", obj.price, " ruppees." );
let output = `the cost of the ${obj.item} is ${obj.price}`;

console.log(output);


// toUpperCase
console.log(str.toUpperCase());



//toLowerCase
console.log(str.toLowerCase());



//trim()
console.log("   Hello World   ".trim()); //removes the white spaces from start and the end of the string



//slice(start, end)
console.log(str.slice(2, 5)); //prints "nam" from index 2 to 5 (exclusive)



//concat(str)
console.log(str.concat(str2)); //prints "TanmayBagul"   str+str2


//replace(str)
console.log(str.replace("ma", "Ma")); //prints "TanmayBa"


//chatAt(index)
console.log(str.charAt(2)); //prints "n"