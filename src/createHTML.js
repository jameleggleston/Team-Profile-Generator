const Employee = require("../lib/Employee")

//This is going to create the card for the manager.

function createManagerCard(manager) {
    return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
            <div class = "card">
                <div class="card-header">
                    <h2>${manager.name}</h2>
                    <h4><i class="bi bi-cup-fill"></i> Manager </h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> Id: ${manager.id}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                    <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    
    `;
}

//This is going to creat the egineer card

function createEngineerCard(engineer) {
    return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
            <div class="card">
                <div class="card-header">
                    <h2>${engineer.name}</h2>
                    <h4><i class="bi bi-laptop"></i> Engineer </h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> Id: ${engineer.id}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></li>
                </ul>
            </div>
        </div>
    `;
}

//This is going to create the intern card

function createInternCard(intern){
    return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-3">
            <div class="card">
                <div class="card-header">
                    <h2>${intern.name}</h2>
                    <h4><i class="bi bi-book"></i> Intern </h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"> Id: ${intern.id}</li>
                    <li class="list-group-item"> Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
                    <li class="list-group-item"> School: ${intern.school} </li>
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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sue+Ellen+Francisco">
        <link rel="stylesheet" href="../dist/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="bg-success bg-gradient p-5">
            <h1 class="text-center text-light">Team Profile</h1>

        </header>
        <main id ="page-content">
            <div class="container-fluid row align-items-center justify-content-center m-0 p-5">
                ${emplyeeCards}
            </div>

        </main>
        <footer class="footer text-black-75">
            <div class= "container text-center">
                <small> &copy; 2021 Jamel Eggleston </small>
            </div>
        </footer>
    
    </body>
    </html>

    `;
}

// Function to combine all added employee cards
function createHTML(fullTeam) {

    // Create new array of employee cards based on employee role
    const cardsArray = fullTeam.map(employee => {

        // Check role for each employee in fullTeam array using the getRole() method
        let role = employee.getRole();

        if (role === "Manager") {
            let managerCard = createManagerCard(employee);
            return managerCard;
        }

        if (role === "Engineer") {
            let engineerCard = createEngineerCard(employee);
            return engineerCard;
        }

        if (role === "Intern") {
            let internCard = createInternCard(employee);
            return internCard;
        }
    });

    const employeeCards = cardsArray.join("");

    const finishedHTML = finalDocument(employeeCards);

    return finishedHTML;
}

module.exports = createHTML;