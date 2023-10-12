// index.js will run the application using imports from lib/
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");
const path = require('path');

const questions = ([
    {
        type: 'input',
        name: "text",
        message: "What would you like to write in your logo? Enter up to three characters."
    }, {
        type: 'input',
        name: "textColor",
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
        name: "shapeColor",
        message: "What color would you like your shape to be? Please enter a color keyword or a hexidecimal number."
    }
])

function generateSVG(shape, shapeColor, text, textColor) {
    let logo;

    if (shape === "Circle") {
        logo = new Circle()
    } else if (shape === "Square") {
        logo = new Square()
    } else if (shape === "Triangle") {
        logo = new Triangle()
    }

    logo.setColor(shapeColor)

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${logo.render()}
        <text x="100" y="100" fill="${textColor}">${text}</text>
    </svg>`
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

const init = () => {
    inquirer.prompt(questions).then((data) => {
        writeToFile("logo.svg", generateSVG(data.shape, data.shapeColor, data.text, data.textColor));
    })
}

init();