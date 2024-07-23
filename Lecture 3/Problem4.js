//Prompt the user to enter their full name. Generate username for them based on their inputs.
//Start username with @, followed by their fullname and ending with the fullname length.
//e.g. user name = "tanmaybagul", username should be "@tanmaybagul".

name = prompt("Enter your username: ");

// ad = "@";
// num = name.length;

//concatenation of strings
newUserName = "@" + name + name.length;
console.log("Generated username: ", newUserName);   