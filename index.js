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

// team array
const team = [];

// push manager data
function runManager(){
    promptManager().then(function(data){
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)

        if(data.another == "Engineer"){
            team.push(manager);
            runEngineer();
        }else if(data.another == "Intern"){
            team.push(manager);
            runIntern();
        }else if(data.another == "None"){
            team.push(manager);
            
            
            fs.writeFile("./dist/team.html", render(team),function(err){
                if(err) throw err;
                console.log("Writing team file...")
            });
            return;
        }
    })
}

runManager();
// function to put generated file together
async function init() {
    try {
        const data = await promptManager();
        const readMeFile = mdFileTemplate(data);
        await writeFileAsync("index1.html", readMeFile);
    } catch (err) {
        console.log(err)
    }
}
init()