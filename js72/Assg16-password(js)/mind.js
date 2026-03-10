
let password = "cat dog";
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("password cannot include spaces");
    } else {
        console.log("Valid password!!")
    }
} else {
    console.log("password too short!");
}