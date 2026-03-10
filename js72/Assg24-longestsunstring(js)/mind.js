let string = "abcabcbb";
let longest = "";
let current = "";

for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let index = current.indexOf(char);

    if (index === -1) {
        current += char;
    } else {
        let newCurrent = "";
        for (let j = index + 1; j < current.length; j++) {
            newCurrent += current[j];
        }
        current = newCurrent + char;
    }

    if (current.length > longest.length) {
        longest = current;
    }
}

console.log(`Longest substring: "${longest}"`);
console.log(`Length = ${longest.length}`);