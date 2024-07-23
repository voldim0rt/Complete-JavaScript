// Create an array to store companies "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix

//       a. Remove first company from the array.
//       b. Remove Uber and add Ola in its place. 
//       c. Add amazon at the end.


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


//a. Removing first company from the array
companies.shift();
console.log(companies); // Output: ["Microsoft", "Uber", "Google", "IBM", "Netflix"]


//b. Remove Uber and add Ola in its place
let index = companies.indexOf("Uber");
companies.splice(index, 1, "Ola");
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix"]


//c. Add amazon at the end.
companies.push("Amazon");
console.log(companies); // Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]


