/* Ex: 01 * Create an object representing an employee * with properties for their name, age, joining year & department. */
// const array1 = [{name: 'vishva', age:45,joiningyear:2012, department: 'it'},
// {name: 'visha', age:45,joiningyear:2012, department: 'it'},
// {name: 'vishv', age:45,joiningyear:2012, department: 'it'}
// ]
/* Ex: 02 * Create an array of numbers and find their sum. * [12,6,18,20,32] => 88 */
const array2 = [12,6,18,20,32]
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
/* Ex: 03 
* Create an array of strings and convert them all to Capitalize Text (Eg: heLLo -> Hello). 
* ["joHN","dOe","alex"] => ["John","Doe","Alex"] */

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
 
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str)
{
  var array1 = ["joHN","dOe","alex"];
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1).toLowerCase());
  }
  return newarray1.join(' ');
}
console.log(uppercase());
/* Ex:04
 * Create an object representing a shopping cart with properties for its items and total price. 
* Get the items whose price is lower than 1000. */ 



const array3 = [
{name: 'visha', milk:45, sugar:2012, chocochips: 120},
{name: 'vishv', milk:1050, sugar:200, chocochips: 140},
{name: 'vishv', milk:1050, sugar:200, chocochips: 140}
]


console.log(array3.filter(isgreater));
function isgreater(x){
  return x < 1000;
}
console.log(array3)
/* Ex:05
 * Create an array of all the multiples of 5 till 100. 
* Output: [5,10,15,20....] */

function* incGenerator(start = 0, inc = 5, limit = 100) {
  let i = start;
  while (i < limit) {
    i += inc;
    yield i;
  }
  return limit;
}
const arr = [...incGenerator()];
console.log(arr);
/* 06
* Create an array of strings and sort them in ascending/descending order.
 * sortStrings(["John","Zayn","Alex","Smith"], "desc") //['Zayn', 'Smith', 'John', 'Alex'] 
* sortStrings(["John","Zayn","Alex","Smith"], "asc") //['Alex', 'John', 'Smith', 'Zayn'] */
var fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the numbers in ascending order:
fruits.sort((a, b) => (a > b ? 1 : 1))
console.log(fruits);
/* 07
* Create an array of numbers and then mutate the same array by multipling each number with any other number.
 * [1,3,4,5,6,7] -> Multiplying by 2 => [2,4,8,10,12,14] */
const mynumber = [1,3,4,5,6,7];

  const Output = mynumber.map(function multiples(x) {
    return x*2
  });
  console.log(Output);
  /*08
   * Create an array of objects representing different books and find all books by a certain author. 
  * Add details of a book at the center of the array explicitly.
  * 
  *  * Eg: { *  author: "Francesc Miralles", *  bookName: "Ikigai", * } * */
  const books = [
    {
      author: "Francesc Miralles",
      bookName: "Ikigai"
    },
    {
      author: "Haruki Murakami",
      bookName: "Norwegian Wood"
    },
    {
      author: "J.K. Rowling",
      bookName: "Harry Potter and the Sorcerer's Stone"
    },
    {
      author: "Haruki Murakami",
      bookName: "Kafka on the Shore"
    },
    
  ];
  
  // To find all books by a certain author (e.g. Haruki Murakami):
  const author = "Francesc Miralles";
  const booksByAuthor = books.filter(book => book.author === author);
  
  console.log(booksByAuthor);
  /*09
   * Create an array of objects representing different cars with properties for its company, model, and year.
   * Find a car made in a specific year from the array of objects. 
   * * Eg: { *  company: "Ford", *  model: "Mustang 2023", *  year: "2023" * } * */



  /* * Create an array of objects representing different students with properties for their name, age, and grades.
   * Find the average grade for a student from the array of objects.
   * Eg: [{ *  name: "John Doe", *  department: "IT", *  grades: [43,40,38,32,40] * }]
   * * }] * * Output: 38.6 * */
  var student = [{   name: "John Doe",   department: "IT",  grades: [43,40,38,32,40] }];
  for (var i=0; i < grades.length; i++) {
    Avgmarks += grades[i][1];
    var avg = (Avgmarks/grades.length);
    console.log(grades);
}



  /* Create an array of objects representing different movies with properties for its title, director, and rating.
   * Create an array of just the movie titles from the array of objects. 
  * Eg: [{ *  title: "Avengers: Endgame", *  director: "Anthony Russo, Joe Russo", *  rating: 8.4 * }]
  *  * * Output: ["Avengers: Endgame"] */
   
  
  
  