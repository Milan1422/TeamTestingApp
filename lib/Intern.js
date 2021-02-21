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
        console.log(`School: ${this.school}`)
    }
    getRole(){
        console.log("Intern")
    }
}

let intern1 = new Intern(30, "Teemo", "aap@gmail.com", "Georgia Tech");

intern1.getName();
intern1.getId();
intern1.getEmail();
intern1.getSchool();
intern1.getRole();

module.exports = Intern;