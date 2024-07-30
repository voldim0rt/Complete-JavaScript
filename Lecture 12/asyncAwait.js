async function hello(){     //Async automatically returns the promise
    console.log("hello");
}; 



function api() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);       //this is call of success.
        }, 2000);
    });
}

// api();

//we cannot use await outside the async function. Async function is mandatory for await.

async function getWeatherData (){
    await api();
}


//if we want data2...
async function getWeatherData (){
    await api(); //2nd
    await api(); //1st 
    await api(); //3rd
}




function getData(dataId) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
};


//Async await

async function getAllData() {
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
};




