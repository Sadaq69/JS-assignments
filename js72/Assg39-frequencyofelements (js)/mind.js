
let my_list = [10, 10, 10, 10, 20, 20, 20, 20, 40, 40, 50, 50, 30];

let frequency = {};

for (let i = 0; i < my_list.length; i++) {
    let item = my_list[i];
    if (frequency[item]) {
        frequency[item] += 1;
    } else {
        frequency[item] = 1;
    }
}

console.log(frequency);