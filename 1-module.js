// const amount = 10;
// if (amount > 10) console.log("large number");
// else console.log("small number");

/*
// GLOBAL  -NO WINDOW
__direname  -path to current directory
__filename  -filename
require       -function to use module(common module)
module        -info about current module(file)
process      -info about env where the program is being executed
*/

// setInterval(() => {
//   console.log("hello world");
// }, 1000);

/////////////////// modules
// commonJs, every file is module(by default)
//modules, -Encapsulated Code (only share minimum)
const name = require("./2-name"); //where the data coming from
// const {name} = require("./2-name");
// const sayHi = require("./3-utils");
// const data = require("./4-alternative");
// console.log(data);

// console.log(name);

// sayHi("susan");
// // sayHi(name.john);
// // // sayHi(john);

// // sayHi(name.peter);
// require("./5-mindd-gread");
