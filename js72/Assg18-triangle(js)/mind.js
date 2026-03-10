
let checker = prompt("Select the method to check the triangle?\nBy Angles.\nBy Sides.\nType 1 if you want to check by angles, or 2 if you want to check by sides.");
checker = Number(checker);


if (checker == 1 || checker == 2) {
    if (checker === 1) {
        alert("Check Triangle by Angles.\nAll three angles must be greather than 0 and cannot be negative.");
        let angleOne = prompt("Enter first angle:");
        angleOne = Number(angleOne);
        let angleSec = prompt("Enter second angle:");
        angleSec = Number(angleSec);
        let angleThr = prompt("Enter third angle:");
        angleThr = Number(angleThr);

        if (angleOne > 0 && angleSec > 0 && angleThr > 0) {
            let sum = angleOne + angleSec + angleThr;
            if (sum == 180) {
                console.log("This is a Triangle.");
            } else {
                console.log("This is Not a Triangle.");
            }
        } else {
            alert("Please! Enter Angles greather than 0 and Positive.")
        }

    } else {
        alert("Check Triangle by Sides.\nAll three Sides must be greather than 0 and cannot be negative.");
        let sideOne = prompt("Enter the first side of the Triangle.");
        sideOne = Number(sideOne);
        let sideTwo = prompt("Enter the second side of the Triangle.");
        sideTwo = Number(sideTwo);
        let sideThr = prompt("Enter the third side of the Triangle.");
        sideThr = Number(sideThr);

        if (sideOne > 0 && sideTwo > 0 && sideThr > 0) {
            if ((sideOne + sideTwo > sideThr) && (sideTwo + sideThr > sideOne) && (sideOne + sideThr > sideTwo)) {
                console.log("This is a Triangle.");
            } else {
                console.log("This is Not a Triangle.");
            }
        } else {
            alert("Please! Enter Sides greather than 0 and Positive.")
        }

    }
} else {
    alert("Please enter 1 or 2 to proceed  with checking the Triangle.");
}

