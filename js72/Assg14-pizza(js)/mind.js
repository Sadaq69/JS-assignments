
let smallPizza = 15;
let mediumPizza = 20;
let largePizza = 25;
let pfs = 2;
let pfmol = 3;
let eCheese = 1;
alert(`Welcome, JS Pizza Deliveries\nPizza Price: Small = ${smallPizza}$, Medium = ${mediumPizza}$, Large = ${largePizza}$.\nAdd Pepperoni Price: For Small Pizza ${pfs}$ and For Medium or Large ${pfmol}$.\nExtra Cheese Price: ${eCheese}$.\nThank you for Order.`)

let pizzaSize = prompt("Pizza size(s,m,l):");
pizzaSize = pizzaSize.toLowerCase();

let addPepperoni = prompt("Add pepperoni?(y/n):");
addPepperoni = addPepperoni.toLowerCase();

let extraCheese = prompt("Extra Cheese(y/n):");
extraCheese = extraCheese.toLowerCase();

let bill = 0

if (pizzaSize === "s"){
     bill = bill+smallPizza;
} else if (pizzaSize === "m"){
    bill = bill+mediumPizza;
} else {
    bill += largePizza;
};

if (addPepperoni === "y"){
    if (pizzaSize === "s"){
        bill += pfs;
    } else {
       bill += pfmol;
    }
}

if (extraCheese === "y"){
    bill += eCheese;
}

alert(`Thanks you for choosing JS Pizza Deliveries!\n Your final Bill is: ${bill}$.`);