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
                type: "confirm",
                name: "addAnotherEmployee",
                message: "Would you like to add another employee?"
            }
        ])
        .then((response) => {
            //Destructuring assignment of variables from adding an employee
            const { name, id, email, role, gitHub, school, addAnotherEmployee } = response;
            let employee;

            //Create a new instance of subclasses based on their role.
            if(role === "Engineer") {
                employee = new Engineer(name, id, email, gitHub);
            }else if(role === "Intern") {
                employee = new Intern(name, id, email, school);
            }

            //This will push the added employee to the full team array.
            fullTeam.push(employee);

            if(addAnotherEmployee) {
                return addAnotherEmployee();
            }

            return fullTeam;
        })
}

// This will Write the html file to the dist directory
function writeFile(html) {
    fs.writeFile("./dist/index.html", html, err => {
        err ? console.error(err) : console.log("Team profile has been created! Check out the index.html file.")
    });
}

// Upon starting the application run the appropriate functions until ending
async function init() {
    console.log(`
    ===================================================
    Please build your team by first adding the manager.
    ===================================================
    `)
    await addManager()
    
    const html = createHTML(fullTeam);
    writeFile(html);
}

init();
