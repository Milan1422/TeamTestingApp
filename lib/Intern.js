const Employee = require("../lib/Employee")

// Manager Constructor
class Intern extends Employee { 

    // Constructor properties
    constructor(role, id, name, email, school){

        super(id, name, email);
        this.school = school;
        this.role = role;

    }
    // Constructor methods
    getSchool(){
        console.log(`School: ${this.school}`)
    }
    getRole(){
        console.log(`I am a/an: ${this.role}`)
    }
}

module.exports = Intern;