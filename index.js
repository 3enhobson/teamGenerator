const fs = require('fs');
const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern'); 

const generateHTML = require('./src/generateHTML');

const managers = [];
const engineers = [];
const interns = []; 

function createManager(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers office number?'
            },
        ]).then(function(answers){
            console.log(answers);
            const { id, email, name, officeNumber } = answers;
            managers.push(new Manager(id, email, name, officeNumber)); 

            console.log(managers);

            createTeam();
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineers github username?'
            },
        ]).then(function(answers){
            console.log(answers);
            const { id, email, name, github } = answers;
            engineers.push(new Engineer(id, email, name, github));
            console.log(engineers);
            createTeam();
        });
}

function createIntern() { 
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the interns school?'
            },
        ]).then(function(answers){
            console.log(answers);
            const { id, email, name, school } = answers;
            interns.push(new Intern(id, email, name, school));
            console.log(interns);
            createTeam();
        });
}

function createTeam() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'menuOption',
            message: 'Which position would you like to add?',
            choices: ['Engineer', 'Intern', 'None']
        },
    ]).then(function(answers){
        console.log(answers);

        switch(answers.menuOption) { 
             case 'Intern': createIntern();
             break;
             case 'Engineer': createEngineer();
             break;
             default:
                fs.writeFileSync('./dist/team.html', generateHTML({ managers, engineers, interns }));
             return;
        }

    });
}

createManager();    