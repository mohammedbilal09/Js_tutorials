console.log("Day 5 tutorial");
// Type conversion
let myVar; 
myVar = 45; // number
console.log(myVar, (typeof myVar));

myVar = String(65); // number to string
console.log(myVar, (typeof myVar));

let booleanVar = true; // boolean
console.log(booleanVar, (typeof booleanVar));

booleanVar = String(true); // boolean to string
console.log(booleanVar, (typeof booleanVar));

let date = new Date(); // date
console.log(date, (typeof(date)));

date = String(date); // date to string
console.log(date, (typeof(date)));

let array = [651,654,65498,97,89]; // array 
console.log(array, typeof(array));
console.log(array.length, typeof(array));

array = String([654,655,984,8,87,9]); // array to string
console.log(array, typeof(array));
console.log(array.length, typeof(array));

let i = 9;
console.log(i.toString()); // another method to convert different data types to strings

let str = "123"; // string
console.log(str, (typeof(str)));
str = Number("1646"); // string to number
console.log(str, (typeof(str)));
str = Number(true); // boolean to number
console.log(str, (typeof(str)));
str = Number("654sd64"); // string but not a number
console.log(str, (typeof(str))); // NaN
str = Number([54,64,4,654,9,98]); // array to Number
console.log(str, (typeof(str))); // NaN

let num = parseInt("3545.654"); // float to int
console.log(num);
num = parseFloat("644.9849"); // displaying float number
console.log(num);
console.log(num, typeof(num));


console.log(num.toFixed(2), typeof(num)); // printing number upto fixed decimals

// Types of coercion i.e., concationation
let coercion = "6540";
let add = 54;
console.log(coercion + add); // concatinating string and number

coercion = Number("6540"); // converting string to number and then concatinating them and then display
console.log(coercion + add);