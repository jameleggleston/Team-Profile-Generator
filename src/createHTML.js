const Employee = require("../lib/Employee")

//This is going to create the card for the manager.

function createManagercard(manager) {
    return `
        <div>
            <div>
                <div>
                    <h3>${manager.name}</h3>
                    <h4> Manager </h4>
                </div>
                <ul>
                    <li> Id: ${manager.id}</li>
                    <li> Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                    <li> Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    
    `;
}

function createEngineerCard(engineer) {
    return `
        <div>
            <div>
                <div>
                    <h3>${engineer.name}</h3>
                    <h4> Engineer </h4>
                </div>
                <ul>
                    <li> Id: ${engineer.id}</li>
                    <li> Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${egineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
                </ul>
            </div>
        </div>
    `;
}

function createInternCard(intern){
    return `
        <div>
            <div>
                <div>
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4>
                </div>
                <ul>
                    <li> Id: ${intern.id}</li>
                    <li> Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
                    <li> School: ${intern.school} </li>
                </ul>
            </div>
        </div>
    `;
}