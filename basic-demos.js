"use strict";

// Conditional Logic
const a = 243234;
const b = 489989;
if (a > b) {
  console.log(`a: ${a} is greater than b: ${b}`);
} else {
  console.log(`a: ${a} is less than b: ${b}`);
}

// prompt user for input
/*
const userInput = prompt("What's your favorite color");
console.log(userInput);
*/

function divide(a, b) {
  // if guard
  if (a < b) {
    console.log(
      `a: ${a} should be bigger than b: ${b} for a full integer example`
    );
    return a / b;
  }
  return a / b;
}

// fat arrow notation function with ternary operator

const multiply = (a, b) => (b === 0 ? console.error("don't use 0") : a * b);

const subtract = (a, b) => {
  // return is not implied when you use {}
  return a - b;
};

console.log("Subtract: ", subtract(30, 21));

const multiplyResult = multiply(2, 5);
console.log("result of multiplication function 1: ", multiplyResult);

const multiplyResultWith0 = multiply(2, 0);
console.log("second multiplication example: ", multiplyResultWith0);

// Good pattern of using functions with parameters and assigning variables from them
function add(a, b) {
  return a + b;
}
const x = add(5, 2);
console.log(x);

// function declaration
function diffBetwenLogAndReturn() {
  const userName = "Crazy Frog";
  console.log("From within function", userName);
  return userName.toLowerCase().split(" ").join("-");
}

//function invocation
const newUserName = diffBetwenLogAndReturn();

console.log("From outside of function", newUserName);

// Types

const str = "this is a string";
const num = 13;
const bool = false;

const primes = [2, 3, 5, 7, 11, 13, 17];

for (let i = 0; i < primes; i++) {
  console.log(primes[i]);
}

const computer = {
  name: "Dell 3307",
  ram: 24,
  hasGPU: false,
  memory: 256,
};

console.log(computer.name, computer.ram);
