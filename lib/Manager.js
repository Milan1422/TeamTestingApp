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


module.exports = Manager;

