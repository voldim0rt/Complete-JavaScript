let modeBtn = document.querySelector("#mode");
let currentMode = "light"; //dark
modeBtn.addEventListener("click", () => {
    if(currentMode === "light") {
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor ="black";
        document.querySelector("h3").style.color ="white";
        document.querySelector("p").style.color ="white";
    } else {
        currentMode = "light";
        document.querySelector("body").style.backgroundColor ="white";
        document.querySelector("h3").style.color ="black";
        document.querySelector("p").style.color ="Black";  
    }
    console.log(currentMode);
});