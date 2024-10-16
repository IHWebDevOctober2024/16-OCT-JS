const isAdmin = true;

const isStudent = false;

const isMinor = false;

// and operator &&
console.log(isAdmin && isStudent); // false

// or operator ||
console.log(isAdmin || isStudent);

// not operator !

console.log(!isMinor); // true

// COMPARE NUMBERS

console.log(10 < 20); //true
console.log(10 > 20); // false
console.log(10 >= 20); // false
console.log(20 <= 20); // true

let number1 = "20";
let number2 = 20;
// compare the value ==
console.log(number1 == number2); // true
// strictly equal to ===
console.log(number1 === number2); // false

console.log(number1 != number2); // false
console.log(number1 !== number2); // true

const userName = "Marcel";

if (userName) {
  console.log("The user exists");
} else {
  console.log("The user doesn't exist");
}

/*
FALSY
undefined
null 
0
""
NaN
false


TRUTHY
EVERYTHING ELSE
*/