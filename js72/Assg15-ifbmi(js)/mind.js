
let height = prompt("Enter your height in inches:");
height = Number(height);
let weight = prompt("Enter your weight in pounds:");
weight = Number(weight);

let bmi = (weight * 703) / (height * height);

let category = "";

if (bmi < 16.0) {
    category = "Severely Underweight";
} else if (bmi >= 16.0 && bmi <= 18.4) {
    category = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    category = "Overweight";
} else if (bmi >= 30.0 && bmi <= 34.9) {
    category = "Moderately Obese";
} else if (bmi >= 35.0 && bmi <= 39.9) {
    category = "Severely Obese";
} else {
    category = "Morbidly Obese";
}


alert(`Your BMI of ${bmi} makes you ${category}.`);