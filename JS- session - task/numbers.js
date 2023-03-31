//Write a JavaScript function to generate a random integer.
function getRandomInteger(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function generateRandomInteger() {
  const min = parseInt(prompt("Enter the minimum limit:"));
  const max = parseInt(prompt("Enter the maximum limit:"));
  const resultDisplay = document.getElementById("result");
  const randomInteger = getRandomInteger(min, max);
  resultDisplay.textContent =
    "The random integer between " +
    min +
    " and " +
    max +
    " is: " +
    randomInteger;
}
//Write a JavaScript function to format a number up to specified decimal places.
function decimals(n, d) {
  if (typeof n !== "number" || typeof d !== "number") return false;
  n = parseFloat(n) || 0;
  return n.toFixed(d);
}
//Write a JavaScript function to find out if a number is a natural number or not
function is_Natural(n) {
  if (typeof n !== "number") return "Not a number";

  return n >= 0.0 && Math.floor(n) === n && n !== Infinity;
}
console.log(is_Natural(-15));
console.log(is_Natural(1));
console.log(is_Natural(10.22));
console.log(is_Natural(10 / 0));
//Write a JavaScript function to test if a number is a power of 2.
function power_of_2(n) {
  if (typeof n !== "number") return "Not a number";

  return n && (n & (n - 1)) === 0;
}

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
//Write a JavaScript function to check whether a value is an integer or not.
function is_Int(num) {
  if (typeof num !== "number") return false;

  return !isNaN(num) && parseInt(Number(num)) == num && !isNaN(parseInt(num));
}
console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
//Write a JavaScript function to check to check whether a variable is numeric or not.
function is_integer() {
  if (typeof number == "number") console.log(is_integer(23));
}
//Write a JavaScript function to calculate the nth root of a number.
function nthroot(x, n) {
  ng = n % 2;
  if (ng == 1 || x < 0) x = -x;
  var r = Math.pow(x, 1 / n);
  n = Math.pow(r, n);

  if (Math.abs(x - n) < 1 && x > 0 === n > 0) return ng ? -r : r;
}
console.log(nthroot(64, 2));
console.log(nthroot(64, -2));
//Write a JavaScript function to round up an integer value to the next multiple of 5.
function int_round5(num) {
  return Math.ceil(num / 5) * 5;
}

console.log(int_round5(32));
console.log(int_round5(137));
console.log(int_round5(142));
//Write a JavaScript function to calculate the percentage (%) of a number.
function percentage(num, per) {
  return (num / 100) * per;
}

console.log(percentage(1000, 47.12));
//Write a JavaScript program to convert a hexadecimal number to its binary equivalent (as a string). (R&D needed)

function test(n) {
  return parseInt(n, 16).toString(2).padStart(8, "0");
}
console.log(test("7B317"));
console.log(test("6F16"));
console.log(test("4B2A16"));
//Write a JavaScript function to calculate degrees between 2 points with inverse Y axis
