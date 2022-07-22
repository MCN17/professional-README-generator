// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
const questions = () => {
    return inquirer.prompt([
        {
            type:"input", 
            name: "name", 
            message: "What is your name? (Required)"
        }, 
        {
            type: "input", 
            name: "github", 
            message: "Please enter your Github username. (Required)"
        }, 
        {
            type: "input", 
            name: "project", 
            message: "What is the title of your project? (Required)"
        }, 
        {
            type: "input", 
            name: "description", 
            message: "Please provide a short description explaining the what, why, and how of your project"
        }, 
        {
            type: "checkbox", 
            name: "languages", 
            message: "What languanges did you use to create this project? (Required)", 
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input", 
            name: "installation", 
            message: "What are the steps required to install your project? (Required)"
        }, 
        {
            type: "input", 
            name: "usage", 
            message: "Provide instructions and examples for use. (Required)"
        }, 
        {
            type: "input", 
            name: "contributors", 
            message: "Was there anyone other than yourself that contributed to this project? (Required)"
        }, 
        {
            type: "list", 
            name: "license", 
            message: "Please select a license for your project (Required)", 
            choices: ["Apache 2.0", "GPL 3.0", "MIT", "ISC"]
        }, 
        {
            type: "input", 
            name: "tests", 
            message: "Are there any tests a user can run for your application?"
        }, 
        {
            type: "input", 
            name: "email", 
            message: "Please provide your email. (Required)"
        }

    ])
    .then(questions => console.log(questions));
}

questions();




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();