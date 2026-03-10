
let string = prompt("string: ");
let letters = "";
let digits = "";


for (let i = 0; i < string.length; i++) {
    if (string[i] >= "a" && string[i] <= "z") {
        letters += string[i];
    } else {
        digits += string[i];
    }
}

console.log(`Letters : ${letters.length}\nDigits : ${digits.length}\n`);
