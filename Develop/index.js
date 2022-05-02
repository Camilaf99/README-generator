// TODO: Include packages needed for this application
const inquirer = require('inquirer'); // include inquirer
const fs = require('fs'); // include File System
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

const questions = [
    {
        type : "input", 
        name: "userName",
        message: "Please Enter Name Here",
        validate: userName => { return (userName) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "projectTitle",
        message: "Please Enter Title Here",
        validate: projectTitle => { return (projectTitle) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "projectDescription",
        message: "Please Enter Project Description Here",
        validate: projectDescription => { return (projectDescription) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "installationInstructions",
        message: "Please Enter Installation Instructions Here",
        validate: installationInstructions => { return (installationInstructions) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "usageInfo",
        message: "How will you use this app?",
        validate: usageInfo => { return (usageInfo) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "contributionGuidelines",
        message: "Instructions on how to contribute with this project",
        validate: contributionGuidelines => { return (contributionGuidelines) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "testInfo",
        message: "How can I test this app?",
        validate: testInfo => { return (testInfo) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license from the following list:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0'],
        validate: license=> { return (license) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "gitHubUser",
        message: "Please enter GitHub username here",
        validate: gitHubUser=> { return (gitHubUser) ? true : false; } // if(username) { return true; } else { return false; }
    },
    {
        type : "input", 
        name: "emailAddress",
        message: "Please enter Email Address",
        validate: emailAddress => { return (emailAddress) ? true : false; } // if(username) { return true; } else { return false; }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if(!fileName) {
        console.error("No file name provided");
    } else if(!data) {
        console.error("No data was provided");
    }
    fs.write(fileName, data, e => { throw new Error(e); });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => generateMarkdown(data)).then(md => fs.writeFile("./README.md", md, (e) => { if(e) throw new Error(e); }));
}

// Function call to initialize app
init();
