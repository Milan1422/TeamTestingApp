const { ModernFakeTimers } = require("@jest/fake-timers");
const inquirer = require("inquirer");

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
        console.log(`Name: ${this.name}`);
    }
    getId(){
        console.log(`Id: ${this.id}`)
    }
    getEmail(){
        console.log(`Email: ${this.email}`)
    }
    getRole(){
        console.log("Employee")
    }
}
console.log(Employee)
module.exports = Employee;