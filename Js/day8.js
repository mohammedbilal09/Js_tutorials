// Condtional Statements

//If Else Statements
let age = 19;
if(age == 19) {
    console.log("Age is 19.");
}
else if(age == 28) {
    console.log("Age is 28.");
}
else {
    console.log("Age is not defined.");
}

let num = 65;
if(num !== 65) {
    console.log("The Number is not 65");
}
else if(num == 64) {
    console.log("The number is 64.");
}
else {
    console.log("the number is not knwon.");
}

let undef ;
if(undef == 35) {
    console.log("not defined");
}
else if(typeof undef !== 'undefined')
{
    console.log("It is defined.");
}
else{
    console.log("Not defined");
}

let canDrive = true;
if(canDrive || age > 18) {
    console.log("Can drive the bike.");
}
else {
    console.log("Can't drive the bike.");
}

// Switch cases 
let keyAge = 19;
switch(age) {
    case 18:
        console.log("Can Vote");
        break;
    case 19:
        console.log("Can appear for exams");
        break;
    
    default :
        console.log("Can't Vote");
}