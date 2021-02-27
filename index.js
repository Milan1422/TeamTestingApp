const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
cosnt Intern = require('./lib/Intern')

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