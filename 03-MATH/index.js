console.log(Math.floor(10.9)); // round down
console.log(Math.ceil(10.2)); // round up
console.log(Math.round(10.4)); // <.5 rounds it down >.5 rounds it up

console.log(Math.random()); // between 0 and "almost" 1

console.log(Math.round(Math.random())); // 0 and 1

console.log(Math.round(Math.random() * 10)); // between 0 and 10

console.log(Math.round(Math.random() * 5) + 1); // between 1 and 6


console.log(Math.max(2, 8, -10, 0, -4)); // 8

console.log(Math.min(1, 2, 0, -5)); // -5

console.log(Math.pow(2, 10)) 
// same thing
console.log(2*2*2*2*2*2*2*2*2*2);

// toFixed
const myNumber = 1.65456

console.log(myNumber.toFixed(2)); // ⚠️ this is going to return a string
console.log(+myNumber.toFixed(2)); // convert it to number
console.log(Number(myNumber.toFixed(2))); // another way
