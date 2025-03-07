'use strict';

/*
---
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
---
*/

/* ---
function logger() {
    console.log('The name is Jonas');
}
// calling / running / invoking function
logger();

function processFruit(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = processFruit(5, 0);
console.log(appleJuice);
// console.log(processFruit(5, 0));

const appleOrangeJuice = processFruit(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
--- */

/* // Function Declaration
function calcAgeOne(birthYear) {
    return 2037 - birthYear;
}

const ageOne = calcAgeOne(1991);
console.log(ageOne);

// Function Expression
const calcAgeTwo = function (birthYear) {
    return 2037 - birthYear;
}
const ageTwo = calcAgeTwo(1991);
console.log(ageOne, ageTwo); */

/*
    Functions are just values. It is not a data type.
    Since it is a value, it can be stored in a variable.
    Function is an expression, which produces values.
    The whole value is then assigned to a variable.

    Difference between function declaration and function expression
    Well, the main practical difference is that we can actually call function declarations before they are defined in the code. So let me show that to you.
    So here is the declaration, right?
    This is the function declaration and as I just said, we can call them in a code before they are defined. So now we're calling it first and then defining it later.
    But if we attempt to do the same with the expression, then that should not work.
    because of a process called hoisting.
*/

// Arrow Function
/* const calcAgeThree = birthYear => 2037 - birthYear;
const ageThree = calcAgeThree(1991);
console.log(ageThree);
 */
/* const yearsToRetire = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
} 
console.log(yearsToRetire(1991));    
*/

/* const yearsToRetire = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log(yearsToRetire(1991, 'Jonas'));
console.log(yearsToRetire(1980, 'Bob')); 

Downside of Arrow functions: cannot use 'this' keyword on them. 
*/

/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function processFruit(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(processFruit(2, 3)); */

const friends = ['Mike', 'Steve', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends); // In JS, 'const' can only const Primitive Data Types. Arrays are not primtive. Now what we can not do is to actually replace the entire Array.

const jonas = ['Jonas', 'Bob', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
console.log(typeof (jonas));

const newLength = friends.push('')