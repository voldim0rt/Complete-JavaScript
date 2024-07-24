//Create a new button element. Give it a text "click me", background color of red & text color of white
// Insert the button as the first element inside the body tag.

let newBtn = document.createElement("Button");
newBtn.textContent = "Click me!";
console.log(newBtn);

document.querySelectorAll("p");
p.before(newBtn);
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

 // Add event listener for click event  