/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

//console.log(now - 1991 > now - 2018);

let x, y; // undifined
x = y = 25 - 10 - 5;  // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;  // precisou colocar em parenteses
console.log(ageJonas, ageSarah, averageAge);
*/

/////////////////////////////////////////////

/*
*Coding Challenge #1*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 91;
// const johnHeight = 1.95;


/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markMBI = markMass / (markHeight ** 2);
let johnMBI = johnMass / (johnHeight ** 2);
console.log(markMBI);
console.log(johnMBI);

markHigherBMI = markMBI > johnMBI; // **** vc nao precisa colocar primeiro let markMBI = true... pode colocar direto isso q ele vai entender que se for maior é true
console.log(markHigherBMI);
*/

/*
// *string and Template Literals -- aspas e como utilizar*
const firstName = 'Erica';
const job = 'teacher';
const birthYear = 1992;
const year = 2037;

const erica = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(erica);

const ericaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(ericaNew);

console.log('String with \n\
multiple \n\
lines'); // esse *\n\ é para dar enter ou.... só dar enter

console.log(`String with
multiple
lines`); // esse tem o `` e da enter e funciona da mesma forma que a de cima
*/


// *if else*
// const age = 19;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('Sarah can start driving!');
// }

/*
// *forma simplificada*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving!');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, Wait another ${yearsLeft} years !`);
}

const birthYear = 2013;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(`Born in ${century} century`);
*/


/*
**** Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 91;
// const johnHeight = 1.95;

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markMBI = markMass / (markHeight ** 2);
let johnMBI = johnMass / (johnHeight ** 2);

if (markMBI > johnMBI) {
  console.log(`Mark's BMI (${markMBI}) is higher than John's ${johnMBI}!`);
} else {
  console.log(`John's (${johnMBI}) is higher than Mark's BMI ${markMBI}!`);
}
*/

/*
/// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // primeiro é um numero e o segundo é uma string
console.log(Number(inputYear) + 18);


console.log(Number('Erica'));
console.log(typeof NaN);

console.log(String(30), 30); // the first one is a string and second one is a number
*/

///and Coercion
console.log('I am' + 30 + 'years old'); // fica string com "+"
console.log('23' - '10' - 3); // fica um number com "-"
console.log('23' / '2');

let n = '1' + 1; // = 11 because is a string
n = n - 1;
console.log(n); // the result is 10 cause + is a string 11 and - make
// transform in number 11 -1 ...
