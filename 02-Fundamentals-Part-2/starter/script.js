"use strict";

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

// const friends = ['Mike', 'Steve', 'Peter'];
/* console.log(friends);

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
console.log(typeof (jonas)); */

// Add elements
/* const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
console.log(friends.pop());
console.log(friends);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf('Steven')); // Returns -1 for an element that is not found in the array
console.log(friends.indexOf('Steve'));

friends.push(23);
console.log(friends.includes('Bob')); // Returns true or false for an element found in the array
console.log(friends.includes('Steve'));
console.log(friends.includes(23)); */

/* const jonasArray = [
    'Jonas',
    'Schmid',
    2037 - 1991,
    'teacher',
    ["Michael", "Peter", "Steve"]
]

// Object Literal Syntax in JS
// Order of values matter in Arrays but not in Objects.
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmid',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steve"];
} */

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmid',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steve"]
}
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['last' + nameKey]);
console.log(jonas['first' + nameKey]);

const inputValue = prompt('Enter firstName or lastName');
console.log(jonas[inputValue]);

jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas); */

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmid',
    birthyear: 1991,
    age: 2037 - 1991,
    job: 'teacher',
    friends: ["Michael", "Peter", "Steve"],
    hasDriversLicense: true,

     calcAge: function () {
        // console.log(this);
        return 2037 - this.birthYear;
    }

    // a value to the property
    calcAge: function () {
        this.age = 2037 - this.birthyear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.getSummary());  */

/* const jonasArray = [
    'Jonas',
    'Schmid',
    2037 - 1991,
    'teacher',
    ["Michael", "Peter", "Steve"],
    true
]
const types = []; */
/*
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types); */

// continue and break
/* for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
} */

/* console.log("Only strings")
for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] !== 'string') continue;
    console.log(i);
    console.log(jonasArray[i], typeof jonasArray[i]);
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log("Only break")
for (let i = 0; i < jonasArray.length; i++) {

    if (typeof jonasArray[i] === 'number') break;
    console.log(i);
    console.log(jonasArray[i], typeof jonasArray[i]);
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
} */

const x = 23;
console.log("Hello World!");
