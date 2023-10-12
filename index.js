// index.js will run the application using imports from lib/
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

inquirer.prompt([
    {
        type: 'input',
        name: "letters",
        message: "What would you like to write in your logo?"
    }, {
        type: 'input',
        name: "text color",
        message: "What color would you like your text to be? Please enter a color keyword or a hexidecimal number."
    }, {
        type: 'list',
        name: "shape",
        message: "Which shape would you like your logo to be?",
        choices: [
            "Circle",
            "Square",
            "Triangle"
        ]
    }, {
        type: 'input',
        name: "shape color",
        message: "What color would you like your shape to be? Please enter a color keyword or a hexidecimal number."
    }
]).then((answers) => {
    
})