// this is String Manipulation Functions section
// this function is to reverse a string
function reversestring(str) {
  return str.split("").reverse().join("");
}
console.log(reversestring("hello" + "" + "world"));
// end

//this function counts the number of characters in a string.
// it takes a string as an argument and returns the number of characters in it.
function countNumberOfCharacter(countstring) {
  return countstring.length;
}
console.log(countNumberOfCharacter("My name is Melson Anthony"));
// end

//this function capitalizes the first letter of each word in a sentence
function firstLetterUpperCase(name) {
  const username = name.charAt(0).toUpperCase();
  const othername = name.slice(1);
  return username + othername;
}
console.log(firstLetterUpperCase("melson anthony"));
//END

// this is array manipulation functions section
//this finds the maximum and minimum values in an array of numbers.
function maximumAndMinimum() {
  let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let minValue = Math.min(...Arr);
  let maxValue = Math.max(...Arr);

  console.log(minValue);
  console.log(maxValue);
}
maximumAndMinimum();

//  this function is to calculates the sum of all elements in an array.

let numbers = [1, 2, 3, 4, 5, 50, 7, 8];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// #############################################

// this function is to filters out elements from an array based on a given condition.

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "John", age: 40 },
];

const filteredPeople = people.filter((people) => people.name !== "John");

console.log(filteredPeople);

// #############################################

// ############################################################################

// Mathematical Functions

// this function is to calculate the factorial of a given number.

function calculateTheFactorial(n) {
  if (n == 0) return 1;
  return n * calculateTheFactorial(n - 1);
}

for (let i = 0; i < 8; i++) {
  console.log("(" + i + ") = " + calculateTheFactorial(i));
}

// #############################################

// Create a function to check if a number is prime or not

function numberIsPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 17;
console.log(`${number} is prime:`, numberIsPrime(number));

// #############################################

// this function is to generate the Fibonacci sequence up to a given number of terms

function generatingFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return generatingFibonacci(n - 1) + generatingFibonacci(n - 2);
  }
}

console.log(generatingFibonacci(10));

// #############################################

// ############################################################################
