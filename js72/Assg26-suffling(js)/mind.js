let arr1 = [1,2,3,4,5,6,7];
let k1 = 3;
for(let i = 0; i < k1; i++){
    let last = arr1.pop();      
    arr1.unshift(last);         
}
console.log(arr1);



let arr2 = [1,2,3,4,5,6,7];
let k2 = 3;
let part1 = arr2.slice(0, arr2.length - k2);
let part2 = arr2.slice(arr2.length - k2);
let result2 = part2.concat(part1);
console.log(result2); 



let arr3 = [1,2,3,4,5,6,7];
let k3 = 3;
arr3.reverse();
let first = arr3.slice(0,k3).reverse();
let second = arr3.slice(k3).reverse();
let result = first.concat(second);
console.log(result);