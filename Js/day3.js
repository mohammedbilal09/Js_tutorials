var name = "Mohammed"; // string
var age = 19; // number
var Student = true; // boolean
var address = null; // null
var channel; // undefined

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Student: ", Student);
console.log("Address: ", address);
console.log("Channel: ",channel);

/*
    Rules while declaring a variable in JavaScript
    1. The name of the variable must always start with a alphabet(between A to Z or a to z) or _(underscore) or $(dollor).
    2. The name of the variable cannot start with a number, but you can use the number in between the name of the variable. 
    3. The variable names are case sensitive. For example, variables starting with a and A aren't same.   
*/

let $age = 20;
let $name = "Siddharth"
let $TCAC = true;
let $location = null;
let $developer;
console.log($name , $age, $TCAC, $location, $developer);

$name = "Siddharth Kumar Shukla";
console.log($name);

const _name = "Mukul";
const _number = 135168479;
// const _location; // SyntaxError: Missing initializer in const declaration
const _task = null;
const _friend = true;
 
console.log(_name);
// _name = "Mukul Kumar Singh";  // TypeError: Assignment to constant variable.
console.log(_name);

/*
    The most common used programming case types used:-
    1. camelCase
    2. dash-case or kabab-case
    3. snake_case
    4. PascalCase
*/
