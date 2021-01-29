

console.log(Math.floor(5.95)); // prints 5

let x = null;

let single = 'Wheres my bandit hat?"; // String 1
let double = "Wheres my bandit hat?"; // String 2

let baseUrl = 'localhost/taxwebapp/country';

// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);

// calculates # of days left over after 365 is divided by 7
const daysLeftOver = 365 % 7;

console.log("A year has "+weeksInYear+"weeks and " + daysLeftOver + "days");

let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number);
// prints 120

let age = 7;

// String concatenation
'Tommy is ' + age + ' years old.';

// String interpolation
'Tommy is $(age) years old.';


const currency = '$';
let userIncome = 85000;

console.log(currency + userIncome + ' is more than the average income.');
// prints: $85000 is more than the average income.


var a;
console.log(a);
// prints: undefined (beda ama java, java print nomor hex di memory)

// examples of variables
let name = "Tammy";
const found = false;
var age = 3;
console.log(name, found, age);
// Tammy, false, 3


var age;
let weight;
const numberOfFingers = 20;
// var is used in pre-ES6 versions of JavaScript.
// let is the preferred way to declare a variable when it can be reassigned.
// const is the preferred way to declare a variable with a constant value.

let name = "Codeacademy";
console.log(`Hello, $(name)`);
// Helo, Codeacademy

console.log(`Billy is ${6+8} years old`);
// Billy is 14 years old


console.log(count);
// undefined
count = 10;
console.log(count);
// 10

const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.


let service = 'credit card';
let month = 'May 30th';
let displayText = 'Your ' + service + ' bill is due on ' + month + '.';

console.log(displayText);
// Your credit card bill is due on May 30th.


