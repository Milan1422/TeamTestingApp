const { ModernFakeTimers } = require("@jest/fake-timers");

// Employee constructor
class Employee {
    
    // Constructor properties
    constructor(id, name, email){
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    // constuctor methods
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}
module.exports = Employee;