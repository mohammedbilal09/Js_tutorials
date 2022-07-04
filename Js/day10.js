// Fuunctions in JavaScript
console.log("Functions");
// Types of syntax for the functions.
// Type 1:-
function newFunction() {
    console.log("Created inside the function.");
}

// Calling the function.
newFunction();

/*
syntax of the function:-
function functionName(parameter) {
    statement 
}
*/
function printingMessage(message) { 
    console.log(`The message given by the user is: ${message}.`); // statement
}
printingMessage("Hello. How are you?"); // calling the function
// Output:- The message given by the user is Hello. How are you?

// Type 2:-
let funcName = () => {
    // statement
}

let newfunc = (number) => {
    console.log(`The input number given by the user is, ${number}.`);
}

newfunc(7);
// output:- The input given by the user is, 7.

let arithmetic_opertaion = function(num1, num2) {
    console.log(`The addition of the numbers is ${num1+num2}.`);
    console.log(`The multiplication of the numbers is ${num1*num2}.`);
    console.log(`The subtraction of the numbers is ${num1-num2}.`);
}
arithmetic_opertaion(4, 5);
/*
The addition of the numbers is 9.
day10.
The multiplication of the numbers is 20.
day10.
The subtraction of the numbers is -1.
day10.

*/
let timeTaken = function(distance, speed) {
    return distance/speed;
}
let ans = timeTaken(100,35);
console.log("The answer is:",ans);

// Output :- The answer is: 2.857142857142857
