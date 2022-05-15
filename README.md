## JS-MARS-ROVER

## Table of Contents

- [Overview](#Overview)
- [Getting Started](#getting-started)
- [Contributing to the Project](#contributing-to-the-project)
- [TODO](#todo)
## Overview

The purpose of this project, is to approach a technical challenge given, whereby the application needs too use a set of instructions given too a rover,
in order too navigate a cartesian plane and return it's current position.

The project consists of a commands directory whereby a file can be copied into and then program can be executed in order too process the command set,
naming covention must in the format `command.txt`, example of text file is given within the commands directory.

## Getting Started

Make sure you git clone this repository into a separate space on your machine. 

1. Run Install inside of project directory

    `npm install`

2. Run test cases too make sure all test cases pass, as this project makes use of mocha and chai as a testing library for the code

    `npm run test`

3. Upload/Copy file too commands directory and proceed to run project.

    `npm run start`


3. Design decision taken

    * Function Class over es6 class , as this was part of the technical question posed.
    * TDD approach taken, too make sure that code output is predicable.
    * Separation of concerns for each individual , processing unit, such as reading a file, parsing raw input, and the Rover Class
    * Use of async await too return new promise of file read, instead of callback methods.
    * Within the Rover function 
    -- use of ternary operators, instead of if/else
    -- jsdoc for method descriptions parameters and return values
    -- assignment of function too objects
    -- 

## Contributing to the Project
    Feel free fork or cut a branch off this project , too add your changes


