/*let js = 'amazing'
console.log(40 + 8 + 23 - 10)

let firstName = "Jedidiah"
console.log(firstName)

let myFirstJob = "COO at GBEFLA Nigeria Limited"
let myCurrentJob = "Programmer"

console.log(myFirstJob)
*/

/*let javascriptIsFun = true;
console.log(javascriptIsFun)
console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof "Jedidiah")
*/
// Mathematical Operators
// const now = 2037;
// const ageJedidiah = now - 1999;
// const ageWumi = now - 2002;
// console.log(ageJedidiah, ageWumi)

// console.log(ageJedidiah * 2, ageJedidiah / 10, 2 ** 3)
// // 2 ** 3 means 2 to the power of 3

// const firstName = "Jedidiah";
// const lastName = "Olugbenga";
// console.log(firstName + " " + lastName)

// // Assignment operators
// let x = 10 + 5;
// x += 10; //x = x + 10 = 25
// console.log(x);

// // Comparison Operators
// console.log(ageJedidiah > ageWumi); // >, <, >=, <=
// console.log(ageWumi >= 18);

// const isFullAge = ageWumi >= 18;

// console.log(now - 1999 > now - 2002)


// Operator Precedence

/*const now = 2037;
const ageJedidiah = now - 1999;
const ageWumi = now - 2002;

console.log(now - 1999 > now - 2002)

// Template literals ``

const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving licence 🚗🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2999;

let century;
if (birthYear <= 2000) {
    century = 20+'th';
} else {
    century = 21+'st';
}
console.log(century);*/

// Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Challenge #2
/* Write your code below. Good luck! 🙂 */

// const message = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
// console.log(message);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's (${BMIJohn}) BMI is higher than Mark's (${BMIMark})`);
}

