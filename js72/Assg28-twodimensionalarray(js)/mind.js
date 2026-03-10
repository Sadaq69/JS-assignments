let m = 3;   
let n = 4;

let result = [];
for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
        row.push(i * j);
    }
    result.push(row);
}
console.log(result);