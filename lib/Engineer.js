const Employee = require("../lib/Employee")

// Manager Constructor
class Engineer extends Employee { 

    // Constructor properties
    constructor(id, name, email, github){

        super(id, name, email);
        this.github = github;

    }
    // constructor method
    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer"
    }
}


module.exports = Engineer;