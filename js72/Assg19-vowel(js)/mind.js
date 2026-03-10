
let chr = prompt("Enter Single Alphabet:");
chr = chr.toUpperCase();

if ( chr.length === 1 && chr >= "A" && chr <= "Z" ) {
    if (chr == "A" || chr == "E" || chr == "I" || chr == "O" || chr == "U") {
            console.log("It is a vowel.")
    } else{
            console.log("It is a consonant.")
    }
} else {
   console.log("Invalid input! only letters are allowed.\nnumbers are not allowed");
}