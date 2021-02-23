const Employee = require("../lib/Employee")

// Manager Constructor
class Manager extends Employee { 

    // Constructor properties
    constructor(id, name, email, officeNumber){

        super(id, name, email);
        this.officeNumber = officeNumber;

    }

    getRole(){
        return "Manager";
    }

    getOfficeNum(){
        return this.officeNumber;
    }
}


module.exports = Manager;

