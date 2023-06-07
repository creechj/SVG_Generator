const Triangle = require('./lib/triangle');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const inquirer = require('inquirer');
const { writeFile } = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Enter 1 to 3 characters for your logo:?',
        name: 'letters',
    },
    {
        type: 'input',
        message: 'Enter a color or hex code for your logo\'s font color:',
        name: 'fontcolor'
    },
    {
      type: 'list',
      message: 'What shape would you like your logo to be?',
      name: 'shape',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        message: 'Enter a color or hex code for your logo\'s background color:',
        name: 'color'
    },
  ])
  .then((response) => {
    // check options > choose shape > accept options for colors and letters > pass to html > write to file
        // writeFile('./examples/logo.svg', )
        console.log('Generated logo.svg')
    }
  );


// Sample svg file (put this in function to call in writeFile passing in render method from classes):
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//<circle cx="150" cy="100" r="80" fill="green" />
//<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
//</svg>