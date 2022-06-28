// Arrays and objects in JavaScript
console.log("This is day-7 tutorial.");

// Arrays
let marks = [98,65,94,75,34,85,51];
let names = ["Bilal", "Siddharth", "Mukul"];
let mixedArray = ["Bilal", 19, true, null];
let array = new Array(454,64,4984,97,78);
console.log(mixedArray); // printing the mixed array
console.log(array); // printing the array.

// Functions on the arrays:-
// checking whether the given is array or not.
console.log(Array.isArray('454' )); 

// checking whether the elements exists or not in the array, if yes then giving the index of the element. 
console.log(marks.indexOf(24)); // -1 means not found
console.log(marks.indexOf(85)); // 5 means element is present in the array.

// checking the length of the array.
console.log(marks.length);

// changing the values in the array
let elementChange = 45;
marks[5] = elementChange;
console.log(marks);

// Mutating and modifying the array.
// adding the element at the last
marks.push(54);
console.log(marks);

// adding the element at the beginning 
marks.unshift(85);
console.log(marks);

// deleting from the beginning
marks.shift();
console.log(marks);

// deleting form the end 
marks.pop();
console.log(marks);

// splice method:- deleting a certain amount of number from the array
marks.splice(2, 4);
console.log(marks);

// reverse the array 
marks.reverse();
console.log(marks);

// concating the two arrays.
let marks2 = [45, 4, 648 , 89];
marks = marks.concat(marks2);
console.log(marks);

// Objects
let obj = {
    name: "Mohammed Bilal",
    age: 19, 
    developer: true, 
    location: undefined, 
    phone: null,
    'language learning': "JavaScript" 
};

console.log(obj); // printing the object
console.log(obj.name); // printing the object element data
console.log(obj['language learning']); // another way of printing the object element data