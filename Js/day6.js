// Strings: Properties, Methods & Template Literals in JavaScript 

let heading = "Day-6 Tutorial";
console.log(heading);

let name = "Mohammed Bilal";
let greetings; 
greetings = "Hello";
console.log(greetings + " " + name);

let html = "<h1> This is Day-6 Tutorial </h1>" + " <p> In Today we will learn about Strings </p>";

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

html = html.concat('today', 'new');
console.log(html);

console.log(html.indexOf("This"));
console.log(html.lastIndexOf("T"));
console.log(html[5]);
console.log(html.charAt(6));
console.log(html.includes('ab'));
console.log(html.endsWith("Strings"));
console.log(html.slice(4, 10));
console.log(html.substring(0, 3));
console.log(html.split(' '));
console.log(html.split('>'));
console.log(html.replace('This', 'Today'));


let name1 = 'Mango';
let name2 = 'Pine Apple';
let myHtml = `Hello ${name}
            <h1>This is the "heading" I gave </h1>
            <p>Do you like ${name1} and ${name2}? </p>`

document.body.innerHTML = myHtml;

