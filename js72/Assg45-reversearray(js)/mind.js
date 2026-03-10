function reverseArray(arr) {
    let newArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }

    return newArray;
}


const sentence = ['sense.', 'make', 'all', 'will', 'This'];

let result = reverseArray(sentence);
console.log(result); 