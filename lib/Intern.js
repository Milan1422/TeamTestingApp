const Employee = require("../lib/Employee")

// Manager Constructor
class Intern extends Employee { 

    // Constructor properties
    constructor(id, name, email, school){

        super(id, name, email);
        this.school = school;

    }
    // Constructor methods
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;