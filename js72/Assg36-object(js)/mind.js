function mergeObjects(...objects) {
    return Object.assign({}, ...objects);
}

let obj1 = {1: 10, 2: 20};
let obj2 = {3: 30, 4: 40};
let obj3 = {5: 50, 6: 60};

let result = mergeObjects(obj1, obj2, obj3);
console.log(result);