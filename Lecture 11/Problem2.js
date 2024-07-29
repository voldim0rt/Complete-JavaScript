let DATA = "secret information of the students:"

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Website data: ", DATA);
        
    }


}
let student1 = new User();
let student2 = new User();


student1.name ="Tanmay";
student1.email ="tnmy@gmail.com";


student2.name = "Jaya";
student2.email = "jaya@gmail.com";



class Admin extends User {

    constructor(name, email) {
        super(name, email);
    }

    editData () {
        DATA = "Some new value"; 
    }
}


let admin1 = new Admin("admin", "admin@college.com");
