function asyncFunc() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
    };

    function asyncFunc2() {
        return new Promise((resolve, reject)=> {
            setTimeout(()=> {
                console.log("data2");
                resolve("success");
            }, 4000);
        });
        };


        //we have to print it sequentially, not simultaneously.
    
    console.log("fetching data1...");
    asyncFunc().then((res) => {
        console.log("Fetching data2...");
        asyncFunc2().then((res) => {});
    });


    // console.log("fetching data1...");
    // let p1 = asyncFunc();
    // p1.then((res) => {
    //     console.log("Fetching data2...");
    //     let p2 = asyncFunc2();
    //     p2.then((res) => {});
    // });