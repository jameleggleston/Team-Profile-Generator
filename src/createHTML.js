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

//This is going to creat the egineer card

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

//This is going to create the intern card

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

function finalDocument(emplyeeCards){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>

        </header>
        <main>
            <div>
                ${emplyeeCards}
            </div>

        </main>
        <footer>
            <p>&copy; 2021 Jamel Eggleston </p>
        </footer>
    
    </body>
    </html>

    `;
}