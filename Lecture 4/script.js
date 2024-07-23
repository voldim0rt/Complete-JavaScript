let marks = [97, 87, 94, 45, 87];
console.log(marks);

// there is also length property.

console.log(marks.length);


let heroes = ["ironman", "spiderman", "hulk", "thor", "antman"];


for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// for-in loop
for (i in heroes){
    console.log(heroes[i]);
}

//for-of loop
for(i of heroes){
    console.log(i);
}

//These are the types of printing array.


//Methods push, pop, toString

let fruits = ["apple", "banana", "orange", "grapes", "avacado", "lichi"];

console.log("original array: ", fruits);


fruits.push("grape");
fruits.pop();

console.log(fruits);



//impletmenting the toString method:
console.log(fruits);
console.log(fruits.toString());   //this is string not an array object

let num = [78, 80, 98, 77, 89];
console.log(num);
console.log(num.toString());   //this is string not an array object

//slice method
console.log(fruits.slice(1, 4));
 
//splice method
//splice (startIdx, delCount, newEl1)
fruits.splice(2, 1, "kiwi", "mango");
console.log("Spliced array: ",fruits);   //orange will be spliced(will be removed) and above will be added.



let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
count.splice(2, 8); // that means form start point to the index, everything will be deleted.
console.log(count); //




