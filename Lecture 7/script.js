let div = document.querySelector('div');
console.log(div);


//get attribute
let id = div.getAttribute("id");
console.log(id);


//set attribute
let para = document.querySelector("p");
console.log(para.setAttribute("class", "classic"));



//now we can access the style attribute.
console.log(div.style);


//change color
div.style.backgroundColor = "lightblue";
div.style.color = "black";

//change innertext
div.innerText = "Hello tanmay!"


//visibility hidden
div.style.visibility = "hidden";  
div.style.visibility = "visible";
