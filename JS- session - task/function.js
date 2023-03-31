/* 
* Write a function that takes in a number and returns its square. * Eg: square(4) => 16 */
function square(num) {
    return num * num;
  }
  
  console.log(square(4)); 
  /*
   * Write a function that takes in an array of numbers and returns the sum of all the numbers. 
  * Eg: getSum([1,4,8,6,5]) => 24 */
  function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  console.log(getSum([1, 4, 8, 6, 5])); 
  /* 
  * Write a function that takes in an array of strings and returns the longest string. 
  * Eg: getLongestString(["Spain","France","Germany"]) => "Germany" */
  function getLongestString(arr) {
    let longest = "";
    for (let str of arr) {
      if (str.length > longest.length) {
        longest = str;
      }
    }
    return longest;
  }
  console.log(getLongestString(["Spain","France","Germany"]));
  /* 
  * Write a function that takes in a string and returns true if it's a palindrome, false otherwise. 
  * Eg: isPalindrome("foo") => false, isPalindrome("noon") => true */
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome('foo'));   
  console.log(isPalindrome('noon'));  
  /*
   * Write a function that takes in a number and returns the factorial of that number.
   * Eg: fact(4) => 24 */
  function fact(num) {
    if (num < 0) {
      return undefined;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  console.log(fact());
/* 
* Write a recursive function that takes in a number and returns the sum of all the numbers from 1 to that number.
* Eg: getSumTillN(10) => 55 // 1+2+3+4+5+6+7+8+9+10 */
function getSumTillN(n) {
    if (n === 0) {
      return 0;
    } else {
      return n + getSumTillN(n-1);
    }
  }
  console.log(getSumTillN(10));
  /* 
  * Write a recursive function that takes in a string and returns its reverse. 
  * Eg: reverseWord("Hello") => "olleH" */
  function reverseWord(word) {
    if (word.length <= 1) {
      return word;
    }
    return word.charAt(word.length - 1) + reverseWord(word.substring(0, word.length - 1));
  }
  console.log(reverseWord("Hello"));
  /*
   * Write a recursive function that takes in an array and returns a new array with all the elements in reverse order.
   * Eg: reverseArray([2,"Spain","Pacific",31]) => [31,"Pacific","Spain", 2] */