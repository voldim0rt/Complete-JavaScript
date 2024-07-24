let newBtn = document.createElement("button");
newBtn.textContent = "Click here!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn); //adding after div

// div.preppend(newBtn); //adding before div

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hey! What is up!</i>";

document.querySelector("body").prepend(newHeading);
newHeading.remove(); //removes the heading


