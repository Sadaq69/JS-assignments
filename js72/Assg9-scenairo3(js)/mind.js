
const MAXHEALTH = 1000;

let currentHealth = 850;

let isShieldActive = true;

let isPoisoned = false;

let incomingDamage = 150;

currentHealth = currentHealth - incomingDamage; 

console.log("Health: " + currentHealth + "/" + MAXHEALTH);