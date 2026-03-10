
let num = +prompt("Enter four digit number:");
console.log("4 digits = ", num);

let d1 = num % 10;
num = parseInt(num / 10);
let d2 = num % 10;
num = parseInt(num / 10);
let d3 = num % 10;
num = parseInt(num / 10);
let d4 = num % 10;
num = parseInt(num / 10);

console.log("Separately =" + d4 + "," + d3 + "," + d2 + "," + d1);
