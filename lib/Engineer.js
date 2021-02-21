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
        console.log(`Github: ${this.github}`)
    }

    getRole(){
        console.log("Engineer")
    }
}



let engineer1 = new Engineer(20, "Mark", "aap@gmail.com", "githublink");

engineer1.getName()
engineer1.getId()
engineer1.getEmail()
engineer1.getGithub()
engineer1.getRole()