// this is just a comment

/*
Like this multiple
lines 
commented out
*/

/* If I write here
mutliple lines (alt/option+shift+a) */

// and it this is a single line

// VARIABLES

// variable declaration

let nameOfTheVariable = 123132; // number

const nameOfTheConstVariable = "Marina Cotanda"; // string

// the old syntax (before ES6)
var varVariable = false; // boolean

// DATA TYPES

// PRIMITIVE DATA TYPES
// strings -> text ""
// numbers -> just numbers no quote marks
// booleans -> true or false
// undefined -> The data is there but is not defined
// null -> is the lack of value
// NaN
// symbols

// NON PRIMITIVE DATA TYPES
// arrays []
// objects {}
// functions "function nameOfTheFunction(){}"

let teacherName = "Mica";
// we are changing the value of a variable
teacherName = "Uri";

console.log(teacherName);

const managerName = "Hel·lena";

// managerName = "Lucas"; // ERROR ⚠️

console.log(typeof teacherName); // to check the type of data

console.log(6 + 6);
console.log(6 - 6);
console.log(6 * 6);
console.log(6 / 6);

console.log("Hello" / 25); // NaN

console.log("20" + 20);

console.log("Hello " + "World");

console.log(25 - "25"); // IT CONVErts 25 INTO A NUMBER

console.log("300" * 10);

console.log(+"5000"); // FAST WAY TO TURN A STRING INTO NUMBER

console.log(
  1000 *
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
);
// 👆 Infinity

console.log(typeof Infinity); // number

// MODULO

console.log(3 % 2);

console.log(50 % 2); // 0. Any even number % 2 is 0

let age = 20;

age += 1;

age = age + 1;

age++;

console.log(age);

// STRINGS and Variables

const dogName = "Lucas";

console.log("Hello " + dogName);

// TEMPLATE LITERALS
console.log(`Hello ${dogName}`);

const userName = "Marcel";
const lastName = "Bosch";

console.log(`Hello, ${userName} ${lastName}, welcome!`);

console.log('He said I was a "Good friend"');
console.log("It's time to go to Sonora");
console.log(`It's time to go ${"``"} to Sonora to "eat healthy"`);

// string length
console.log("This".length);

const myString = "Hello world this is a string";

console.log(myString.charAt(1)); // e

console.log(myString.indexOf("world")); // 6

console.log(myString[1]);


console.log("Hello".repeat(10));

const message = "Don't be sad, be happy!";
/* let withSubstring = message.substring(0, 3);
console.log(withSubstring); // <== Don

let withSubstr = message.substr(0, 3);
console.log(withSubstr); // <== Don

let withSlice = message.slice(0, 3);
console.log(withSlice); // <== Don */


let withSubstring = message.substring(-3, -1);
console.log(withSubstring); // <== "" (empty string)

let withSubstr = message.substr(-3, -1);
console.log(withSubstr); // <== "" (empty string)

let withSlice = message.slice(-3, -1);
console.log(withSlice); // <== py

console.log('barcelona'.localeCompare('miami')); // -1
console.log('miami'.localeCompare('barcelona')); // 1
console.log('Miami'.localeCompare('miami')); // 1


console.log("miami".localeCompare("Miami".toLowerCase()));

