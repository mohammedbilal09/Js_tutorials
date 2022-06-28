// Loops in JavaScript

// for loop
console.log('Printing the even number using the for loop');
for(let num = 1; num <= 10; num++) {
    if(num%2 == 0) {
        console.log(num);
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Printing the array elements using the for loop');
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// for…in loop (mainly used for objects)
let obj = {
    name: "Mohammed Bilal",
    age: 19, 
    developer: true, 
    location: undefined, 
    phone: null,
    'language learning': "JavaScript" 
};
for(let objData in obj) {
    console.log(`The ${objData} in the object is ${obj[objData]}`);
}

// forEach loop
console.log('Printing the array elements using the forEach loop');
arr.forEach(function(elements) {
    console.log(elements);
})

// while loop
console.log('Printing the numbers using the while loop');
let j = 1;
while(j <= 15) {
    if(j%2 != 0) {
        console.log(j);
    }
    j+=1;
}
// do…while loop
console.log('Printing the numbers using the do-while loop');
let x = 0;
do {
    if(x == 5) {
        x += 2;
        continue
    }
    console.log(x+1);
    x+= 1;
}
while(x < 8);