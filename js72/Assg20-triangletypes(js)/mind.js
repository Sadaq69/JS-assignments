
alert("Check Type of Triangle by Sides.\nAll three Sides must be greather than 0 and cannot be negative.");

let sideOne = prompt("Enter the first side of the Triangle.");
sideOne = Number(sideOne);
let sideTwo = prompt("Enter the second side of the Triangle.");
sideTwo = Number(sideTwo);
let sideThr = prompt("Enter the third side of the Triangle.");
sideThr = Number(sideThr);

if (sideOne > 0 && sideTwo > 0 && sideThr > 0) {
    if ((sideOne + sideTwo > sideThr) && (sideTwo + sideThr > sideOne) && (sideOne + sideThr > sideTwo)) {
        if (sideOne == sideTwo && sideTwo == sideThr) {
            console.log("This is a Equilateral Triangle.");
        } else if (sideOne === sideTwo || sideTwo === sideThr || sideOne === sideThr) {
            console.log("This is a Isosceles Triangle.")
        } else if ( sideOne != sideTwo && sideTwo != sideThr && sideOne != sideThr) {
            console.log("This is a Scalene Triangle.")
        }
    } else {
        console.log("This is Not a Triangle. ")
    }
} else {
    alert("Please! Enter Sides greather than 0 and Positive.")
}