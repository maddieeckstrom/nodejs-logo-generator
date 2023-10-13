const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");
const path = require('path');

// an array of all the questions which will be asked in the terminal
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

//function which generates the logo
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
        <text x="82" y="120" font-size="60" fill="${textColor}">${text}</text>
    </svg>`
}

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function which takes the data from the four arguments passed in generateSVG and applies it to our writeToFile function to generate logo in SVG file
const init = () => {
    inquirer.prompt(questions).then((data) => {
        writeToFile("logo.svg", generateSVG(data.shape, data.shapeColor, data.text, data.textColor));
        console.log("Generated SVG logo");
    })
}

// calling the function here
init();
