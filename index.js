const Triangle = require("./lib/triangle");
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const { svgGen } = require("./lib/svggen");
// for max char limit on text input:
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

inquirer
  .prompt([
    {
      type: "maxlength-input",
      message: "Enter 1 to 3 characters for your logo:?",
      name: "letters",
      maxLength: 3,
    },
    {
      type: "input",
      message: "Enter a color or hex code for your logo's font color:",
      name: "fontcolor",
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      message: "Enter a color or hex code for your logo's background color:",
      name: "color",
    },
  ])
  .then((response) => {
    // check options > choose shape > accept options for colors and letters > pass to html > write to file
    switch (response.shape) {
      case "Circle":
        var shapeChoice = new Circle(response.color).render();
        break;
      case "Triangle":
        var shapeChoice = new Triangle(response.color).render();
        break;
      case "Square":
        var shapeChoice = new Square(response.color).render();
    }

    const newSvg = svgGen(shapeChoice, response.fontcolor, response.letters);

    writeFile("./examples/logo.svg", newSvg, () => {
      console.log("Generated logo.svg");
    });
  });
