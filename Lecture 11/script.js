//class creation
class ToyotaCar {
    constructor() {
        console.log("Constructor is called.")
    }
    start() {
        console.log("Start")
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
// As we have created two objects, constructor will inovoke. 
let lexus = new ToyotaCar();
lexus.setBrand("LC 500h");
// Object creation
const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const karanArjun = {
    salary: 5000,
    calcTax() {
        console.log("Tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;




// super method 
class Person {
    constructor() {
        this.species = "homo sepiens";
    }

    eat() {
    console.log("eat");
    }
}

class Engineer extends Person {
    constructor(branch) {
        super();     //to invoke parent class constructor
        this.branch = branch;   
    }
    work() {
        console.log("solve problems, build something.")
    }
}

let engObj = new Engineer("Chemical engg");

