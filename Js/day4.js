/* Data types in JavaScript
They are of two types:-
1. Primitive data type
2. Non primitive data type or Refernce data type

Primitive data type
a. String
b. Number
c. Boolean 
d. Undefined
e. Null
f. Symbols

Non primitive data type
a. Arrays
b. Objects
c. Functions
d. Date
*/

// Primitive data type
let stringName = "Bilal" // a. String
console.log("The string is:- ", stringName);
console.log("The data type is:- ", typeof(stringName));

let number = 12354; // b. Number
console.log("Number is:- ", number);
console.log("The data type is:- ", typeof(number));
 
let refer = false; // c. Boolean 
console.log("The boolean is:- ", refer);
console.log("The data type is:- ", typeof(refer));
  
let channel; // d. Undefined
console.log("The data is :- ", channel);
console.log("The data type is:- ", typeof(channel));

let signature = null; // e. Null
console.log("The signature given is:- ", signature);
console.log("The data type is:- ", typeof(signature));


// Non primitive data type
// a. Arrays
let array = [15, 16 ,18, 64, 195, false, true, "hello"];
console.log("The array contains:- ", array);
console.log("The data type is:- ", typeof(array));

// b. Objects
let obj = {
    name: "Mohammed Bilal",
    age: 19,
    favourite: null
    // phone  ReferenceError: phone is not defined
}
console.log("The object is:- ", obj);
console.log("The data type is:- ", typeof(obj));

// c. Functions

function newfunc() {
    let display = "This is a variable created inside the function";
    console.log(display);
  }
  newfunc();
  function operations(a, b) {
    console.log(a*b, a-b, a+b, a%b);
    return a/b;
  }
  let num1 = 15;
  let num2 = 12;
  let ans = operations(num1, num2);
  console.log(ans);
  console.log("The data type is:- ", typeof(newfunc));

// d. Date
let date = new Date();
console.log("Today's day, date and time are :-", date);
console.log("The data type is:- ", typeof date);