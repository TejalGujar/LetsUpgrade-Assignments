console.log("Code using Higher Order Functions");

num = Math.abs(prompt("Enter number you want the array till : "));
console.log("Positive Number : ", num);
arr = [];
for (let i = 0; i < num; i++) {
    arr[i] = i + 1;
}
console.log("Array List : ", arr);
let oddnum = arr.filter(e1 => e1 % 2 != 0);
console.log("Odd Numbers in the array : ", oddnum);
let cubenum = oddnum.map(e1 => Math.pow(e1, 3));
console.log("Cubes : ", cubenum);