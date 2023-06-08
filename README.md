# SVG_Generator

## Description

Command line application for generating svg logos based on responses to user prompts.

## Usage

This application is used via a command line terminal with node.  
Users are prompted for responses that will result in the creation of a simple logo design.  
An svg file is generated containing the logo once all prompts have been responded to.

GitHub repository for the site can be found here: https://github.com/creechj/SVG_Generator

Video demo of Application:
 


![Screenshot of Application](/assets/SVG_Generator_Screenshot.png)

## Installation

Application can be downloaded via GitHub

Must have Node.js installed  
Install all dependencies via 'npm i'  
This will initialize inquirer, inquirer-maxlength-input-prompt, and jest

run 'node index.js' to start program

## Tests

Tests are included for each of the Shape classes that can be chosen for the logo design.
Using jest, the tests pass a color choice to the respective shape class and call the shapes' render methods to verify the expected code is returned that will be used for the svg.

## Credits
 
 object inheritance reference:
 https://www.w3schools.com/js/js_class_inheritance.asp

 square shape svg parameters:
 https://melvingeorge.me/blog/create-square-svg-html

 inquirer maxlength input limiter:
 https://www.npmjs.com/package/inquirer-maxlength-input-prompt


## License

Please refer to the license in this repository.