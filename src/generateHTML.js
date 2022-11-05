const generateTeam = function(team) {
    let html = '';

team.managers.forEach(function (manager){
    html += `
    <article class="col-md-4">
        <div class="card shadow p-3 mb-5 bg-white rounded" >
            <div class="card-header" style="background-color: blue; color: white">
                <h2>${manager.getName()} <br> <i class="fa-solid fa-mug-saucer"></i></h2>
                
                        <h4>Manager</h4>
                
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${manager.getId()} </li>
                <li class="list-group-item"> Email: ${manager.getEmail()} </li>
                <li class="list-group-item"> Office Number: ${manager.getOfficeNumber()} </li>
            </ul>
        </div>
    </article>
    `; 
}); 

team.engineers.forEach(function(engineer){
    html += `
    <article class="col-md-4">
        <div class="card shadow p-3 mb-5 bg-white rounded" >
            <div class="card-header" style="background-color: blue; color: white">
                <h2>${engineer.getName()} <br> <i class="fa-solid fa-laptop-code"></i></h2>
                
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${engineer.getId()} </li>
                <li class="list-group-item"> Email: ${engineer.getEmail()} </li>
                <li class="list-group-item"> GitHub: ${engineer.getGitHub()} </li>
            </ul>
        </div>
    </article>
    `;
});

team.interns.forEach(function(intern){
    html += `
    <article class="col-md-4">
        <div class="card shadow p-3 mb-5 bg-white rounded" >
            <div class="card-header" style="background-color: blue; color: white">
                <h2>${intern.getName()} <br> <i class="fa-solid fa-graduation-cap"></i></h2>
                
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${intern.getId()} </li>
                <li class="list-group-item"> Email: ${intern.getEmail()} </li>
                <li class="list-group-item"> School: ${intern.getSchool()} </li>
            </ul>
        </div>
    </article>
    `;
});

    return html;
} 

const generateHTML = function(team) {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Demo</title>
</head>
<body>
    <header class="container-fluid text-center p-5" style="background-color:red; color: white">
        <h1>My Team</h1>
    </header>

    <main class="container text-center p-5">
        <section class="row">
            ${generateTeam(team)}
        </section>
    </main>
    
</body>
</html>
`;
} 

module.exports = generateHTML;