const getPromise = () => {
    new Promise((resolve, reject)=> {
        console.log("I am promise.");
        resolve("success");
    });
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled.", res);  
});


promise.catch((err) => {
   console.log("Rejected.", err) 
});