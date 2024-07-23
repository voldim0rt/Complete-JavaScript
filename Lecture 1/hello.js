fullName = "Tanmay Bagul";
age = 23;
price = 69.545;
x = null;
y = undefined;
console.log("x"); 


//block works differently

{
    let a = 5;
    console.log("This is the value of first block of a: ", a);
}

// console.log(a); // ReferenceError: a is not defined

{
    const a = 10;
    console.log("This is the value of second block of a: ",a);
}


//Creating a new object(COllection of different variables) student

let student = {
    fullName : "Tanmay Bagul",
    age : 23,
    cgpa : 9.1,
    isPass : true
}

console.log("Student's Full Name: ", student.fullName);  //key value pair
console.log("Student's age: ", student["age"]); // these two type are there!


// if we want the increment in the student's age 

student.age += 1;  // or student["age"] + 1

console.log("Student's age after increment: ", student.age);