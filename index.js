const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);





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