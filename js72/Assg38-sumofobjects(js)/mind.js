
let obj = {'data1': 100, 'data2': -54, 'data3': 247};
let sum = 0;

for (let key in obj) {
    sum += obj[key];
}

console.log(sum);