function lifePhase(age) {
  if (age < 0 || age > 140) {
    return "This is not a valid age";
  } else if (age <= 3) {
    return "baby";
  } else if (age <= 12) {
    return "child";
  } else if (age <= 19) {
    return "teen";
  } else if (age <= 64) {
    return "adult";
  } else {
    return "senior citizen";
  }
}

let age = Number(prompt("Enter your age:"));
console.log(lifePhase(age));