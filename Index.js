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