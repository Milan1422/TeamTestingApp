const Employee = require("../lib/Employee")

// Manager Constructor
class Manager extends Employee { 

    // Constructor properties
    constructor(role, id, name, email, officeNumber){

        super(id, name, email);
        this.officeNumber = officeNumber;
        this.role = role;

    }

    getRole(){
        console.log(`I am a/an: ${this.role}`)
    }

    getOfficeNum(){
        console.log(`Office Number: ${this.officeNumber}`)
    }
}

let manager1 = new Manager(10, "Luis", "aap@gmail.com", 1044);

manager1.getName();
manager1.getId();
manager1.getEmail();
manager1.getRole();
manager1.getOfficeNum();

module.exports = Manager;

