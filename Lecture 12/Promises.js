// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     resolve("succeed");   
// })


function getData(dataId, getNextData) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
};

getData("Loading    ");