const Employee = require("../lib/Employee")

// Manager Constructor
class Manager extends Employee { 

    // Constructor properties
    constructor(id, name, email, officeNumber){

        super(id, name, email);
        this.officeNumber = officeNumber;

    }

    getRole(){
        console.log("Manager")
    }
}

let manager1 = new Manager(10, "Luis", "aap@gmail.com", 1044);

manager1.getName();
manager1.getId();
manager1.getEmail();
manager1.getRole();

