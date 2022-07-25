// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
        {
            type:"input", 
            name: "name", 
            message: "What is your name? (Required)", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "github", 
            message: "Please enter your Github username. (Required)", 
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true;
                } else {
                    console.log("Please enter a Github username!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "title", 
            message: "What is the title of your project? (Required)", 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "description", 
            message: "Please provide a short description explaining the what, why, and how of your project"
        }, 
        {
            type: "checkbox", 
            name: "languages", 
            message: "What languanges did you use to create this project?", 
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input", 
            name: "installation", 
            message: "What are the steps required to install your project? (Required)", 
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log("Please Explain how to Install!");
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "usage", 
            message: "Provide instructions and examples for use."
        }, 
        {
            type: "input", 
            name: "contributors", 
            message: "Was there anyone other than yourself that contributed to this project?"
        }, 
        {
            type: "list", 
            name: "license", 
            message: "Please select a license for your project", 
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
            message: "Please provide your email. (Required)", 
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must enter your email!");
                    return false;
                }
            }
        }
    ]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;

        console.log("README complete!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        const data = generateMarkdown(userAnswers);
        console.log(userAnswers);
        writeToFile("README.md", data);
    })
}

// Function call to initialize app
init();