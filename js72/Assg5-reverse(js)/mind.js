let num = +prompt("Enter four digits number:");

let d1 = num % 10;              
num = parseInt(num / 10);       

let d2 = num % 10;              
num = parseInt(num / 10);

let d3 = num % 10;              
num = parseInt(num / 10);

let d4 = num % 10;              

let reverse = d1 * 1000 + d2 * 100 + d3 * 10 + d4;

console.log(reverse);