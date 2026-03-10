/*let password = prompt("Enter password");

if (password.length >= 6 && password.length <= 16) {

    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecial = /[@#$]/.test(password);

    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        console.log("Valid password");
    } else {
        alert("password is not vaild:")
    }

} else {
    alert("Password length must be between 6 to 16 characters");
}    
*/


let password = prompt("Enter password");

if (password.length >= 6 && password.length <= 16) {
    let hasUpper = false;
    let hasLower = false;
    let specialChr = false;
    let hasDigit = false;
    for (let i = 0; i <= password.length; i++) {
        let chr = password[i];
        if (chr >= "A" && chr <= "Z") { hasUpper = true; }
        else if (chr >= "a" && chr <= "z") { hasLower = true; }
        else if (chr >= 0 && chr <= 9) { hasDigit = true; }
        else if (chr === "@" || chr === "$" || chr === "$") { specialChr = true; }
    }

    if (hasUpper && hasLower && hasDigit && specialChr) {
        console.log("Valid password");
    } else {
        alert("password is not vaild:")
    }

} else {
    alert("Password length must be between 6 to 16 characters")
}