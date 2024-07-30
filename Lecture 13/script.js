const URL = "https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");


//by using async await
const getFacts = async() => {
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    para.innerText = data[1].text
};



//promise chain
// function getFacts() {
//     fetch(URL)
//     .then ((response)=>{
//         return response.json();
//     })
//     .then((data)=> {
//         console.log(data);
//         para.innerText = data[3].text;
//     })
// };
        btn.addEventListener("click", getFacts);