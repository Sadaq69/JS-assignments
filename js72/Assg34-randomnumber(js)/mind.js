
let num = prompt("Enter number :");
num = Number(num);

let value = Math.floor(Math.random()*9)+1;

if (num === value) {
  console.log("You find it,",num);
} else {
    alert("Try again:");
}