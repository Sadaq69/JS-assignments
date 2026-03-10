let nums = [1,2,3];
let result = [[]]; 

for (let num of nums) {
    let newResult = [];
    
    for (let perm of result) {
        for (let i = 0; i <= perm.length; i++) {
            let newPerm = perm.slice(0, i).concat([num], perm.slice(i));
            newResult.push(newPerm);
        }
    }
    result = newResult; 
}

console.log(result);