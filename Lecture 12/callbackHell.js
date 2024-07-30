function getData(dataId) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
};


//Async-Await
async function getAllData() {
    console.log("Getting data1...");
    await getData(1);
    console.log("Getting data2...");
    await getData(2);
    console.log("Getting data3...");
    await getData(3);
    console.log("Getting data4...");
    await getData(4);
    console.log("Getting data5...");
    await getData(5);
};


// let p1 = getData(1);
// p1.then((res)=> {
//     console.log(res);
// });

//more shorten

// getData(1).then((res)=> {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     });
// });

//promise chain
// console.log("Getting data1...");
// getData(1)
// .then((res)=> {
//     console.log("Getting data2...");
//     return getData(2);
// })
// .then((res) => {
//     console.log("Getting data2...");
//     return getData(3);
// })
// .then((res) => {
//     console.log(res);
// })


//call back hell
// getData(1, () => {
    //     console.log("Getting data2...");
    //     getData(2, ()=> {
        //         console.log("Getting data3...");
//         getData(3, ()=> {
//             console.log("Getting data4...");
//             getData(4);
//         });
//     });
// });



