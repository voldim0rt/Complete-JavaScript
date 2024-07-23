let divs = document.querySelectorAll(".box");
// divs[0].innerText = "This is div 1";
// divs[1].innerText = "This is div 2";
// divs[2].innerText = "This is div 3";


//using for of loop

let idx = 0;
for(let div of divs){
    div.innerText = `This is div ${idx}`;
    idx++;
}
