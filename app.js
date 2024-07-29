//
var hello = "world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null;

num = '17';

/*
console.log(5);

console.log(hello);

console.log("world");

console.log(num);

console.log(bool);

console.log(undef);

console.log(none);

var foo;

console.log(foo);

console.log(foo + 4);

var textOne = "hello";

console.log(textOne + " " + hello + " dude");
*/

/*
//TEMPERATURE CONVERTER
// F = C * 9/5 + 32

var fahrenheit;
var celsius;
var answer;

//Celcius to Fahrenheit Ex:
celsius = 38;
answer = celsius * (9/5) + 32;
console.log(answer);

celsius = 0;
answer = 0;

//Fahrenheit to Celcius Ex:
fahrenheit = 87;
answer = (fahrenheit - 32) * (5/9);
console.log(answer);

fahrenheit = 0;
answer = 0;
*/

/*
//AGE CALCULATOR

var birthYear = 2000;
var currentYear = 2024;
var age;

age = currentYear - birthYear;

console.log(age);
*/

/*
const bar = 'You can not change me!';

console.log(bar);

let bar2 = 'You can change me within a certain scope!';

bar2 = 10;

console.log(bar2);

function practiceFunction()
{
    let bar3 = "bruh";
}

//Can't find bar3
//bar3 = moment;

let stringQuote = "You aren't special.";
console.log(stringQuote);

let escapeQuote = 'You aren\'t special.';
console.log(escapeQuote);
*/

/*
//increments and decrements
let num3 = 0;
console.log(num3);
num3++;
console.log(num3);
num3--;
console.log(num3);

//settings multi-variables
let baz, baz2, baz3;
baz3 = 8; 
console.log("I'm Baz3! " + baz3);

//Template Literals
console.log(`Hello Baz2 ${baz3}`);
*/

let userName = prompt("Please enter your name");
console.log("Hello, " + userName + "!");

console.log(userName + ", please enter the bill amount and tip percentage.")
let billAmount = parseFloat(prompt("Bill Amount: "));
console.log("Bill Amount: $" + billAmount);
let tipPercentage = parseFloat(prompt("Tip Percentage"));
console.log("Tip Percentage: " + tipPercentage + "%");

let tipAmount = billAmount * (tipPercentage / 100);
let totalBill = ((billAmount += tipAmount));
console.log("Total Bill: $" + Number(totalBill.toFixed(2)));

let userAge = parseInt(prompt("Please enter your age in years: "));
console.log("Age in years: " + userAge);
let totalDays = userAge * 365;
console.log("Total age in days: " + totalDays);