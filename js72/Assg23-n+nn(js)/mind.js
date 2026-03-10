
let num = prompt("Enter any integer:");
console.log("n is",num); 

console.log(`n+nn+nnn : ${num}+${num+num}+${num+num+num}`);
let fir = num;
fir = Number(fir);
let two = num+num
two = Number(two);
let three = num+num+num;
three = Number(three);
console.log(`Expected Result: ${fir+two+three}`);