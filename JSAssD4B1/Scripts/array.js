console.log("Assignment 3");

let shoppingList = ["Pasta", "Rice", "Garlic", "Fruits", "Vegitables"];
console.log("Old Shopping List : ", shoppingList);
let addList = ["Sugar", "Salt", "Onions"];
console.log(addList);
let shoppingBasket = [...shoppingList, ...addList];
console.log("Updated Shopping List : ", shoppingBasket);