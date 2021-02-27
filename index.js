const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const writeFileAsync = util.promisify(fs.writeFile);

// Prompts for manager
function promptManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Manager ID:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
              
        },
        {
            type: "input",
            name: "email",
            message: "Manager Email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager Office Number:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
        },
        {
            type: "list",
            name: "another",
            message: "Would you like to add an engineer or intern?",
            choices: ["Engineer","Intern","None"]
        }
    ])
}

// Prompts for Engineer
function promptEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Engineer ID:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
        },
        {
            type: "input",
            name: "email",
            message: "Engineer Email:"
        },
        {
            type: "input",
            name: "github",
            message: "Engineer GitHub Name:"
        },
        {
            type: "list",
            name: "another",
            message: "Would you like to add another engineer or intern?",
            choices: ["Engineer","Intern","None"]
        }
    ])
}

// prompts for intern
function promptIntern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Intern ID:",
            validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
        },
        {
            type: "input",
            name: "email",
            message: "Intern Email:"
        },
        {
            type: "input",
            name: "school",
            message: "Intern School:"
        },
        {
            type: "list",
            name: "another",
            message: "Would you like to add another engineer or intern?",
            choices: ["Engineer","Intern","None"]
        }
    ])
}

// function to put generated file together
async function init() {
    try {
        const data = await promptUser();
        const readMeFile = mdFileTemplate(data);
        await writeFileAsync("index1.html", readMeFile);
    } catch (err) {
        console.log(err)
    }
}
init()