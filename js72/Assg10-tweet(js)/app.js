

let tweet = prompt("Enter your tweet:");
let length = tweet.length;

let extra = length - 140;

let worksMessage = " will work!";
let tooLongMessage = " is " + extra + " chars too long.";


let startIndex = worksMessage.length * (extra > 0);
let message = (worksMessage + tooLongMessage).slice(startIndex);

console.log("Your " + length + " char tweet" + message);