console.log("Count starts...");
function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000); //2s
}

// getData(1, getData(2));    //it will give an error because it is not a function

// getData(1, () => {
//     getData(2);
// });


//if we want data3
//this is callback hell
getData(1, () => {
    console.log("Getting data2...");
    getData(2, ()=> {
        console.log("Getting data3...");
        getData(3, ()=> {
            console.log("Getting data4...");
            getData(4);
        });
    });
});