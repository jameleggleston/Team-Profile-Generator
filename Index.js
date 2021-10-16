const createHTML = require('./src/createHTML');

//importing all of the subclasses of employee class
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// importing node modules
const fs = require('fs');
const inquirer = require('inquirer');

//This array will hold all the team memebers
let fullTeam = [];

//Add a manager once application is started.
function addManager(){
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's employee Id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            },
            {
                type: "confirm",
                name: "addAnother",
                message: "Would you like to add another?"
            }
        ])
        .then((response) => {
            //Destructuring assignment of variables from manager info
            const { name, id, email, officeNumber, addAnother } = response;

            //Creating a new manager class
            const manager = new Manager(name, id, email, officeNumber)
            fullTeam.push(manager);
            if(addAnother) {
                return addEmployee();

            }
        })
}

//This will add employees until manage exits application
function addEmployee() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                messgae: "What is the employee's role?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?"
            },
            {
                type: "input",
                name: "Id",
                messgae: "What is the employee's Id number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?"
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is the Engineer's GitHub username?",
                when: (input) => input.role === "Engineer"
            },
            {
                type: "input",
                name: "school",
                message: "What is the name of the Intern's school?",
                when: (input) => input.role === "Intern"
            },
            {
                type: "input",
                name: "addAnotherEmployee",
                message: "Would you like to add another employee?"
            }
        ])
}