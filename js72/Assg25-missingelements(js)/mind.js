let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [6,4,3,2,5,8,1];

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
}

for (let i = 0; i < arr2.length; i++) {
    sum2 += arr2[i];
}

let missing = sum1 - sum2;

console.log("missing: "+missing);