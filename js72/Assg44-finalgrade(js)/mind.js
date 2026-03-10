function finalGrade(g1, g2, g3) {
    
    if (g1 < 0 || g1 > 100 || g2 < 0 || g2 > 100 || g3 < 0 || g3 > 100) {
        return "You have entered an invalid grade.";
    }

    
    let avg = (g1 + g2 + g3) / 3;

    
    if (avg >= 90 && avg <= 100) {
        return "A";
    } else if (avg >= 80) {
        return "B";
    } else if (avg >= 70) {
        return "C";
    } else if (avg >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let grade1 = Number(prompt("Enter first grade:"));
let grade2 = Number(prompt("Enter second grade:"));
let grade3 = Number(prompt("Enter third grade:"));


let result = finalGrade(grade1, grade2, grade3);
alert("Final Grade: " + result);