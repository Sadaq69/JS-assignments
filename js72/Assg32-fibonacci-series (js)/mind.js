let a = 0;
let b = 1;
while (a <= 50) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next
}


let d = 1;
for (let c = 0; c <= 50;) {
    console.log(c);
    let next = c + d;
    c = d;
    d = next;
}