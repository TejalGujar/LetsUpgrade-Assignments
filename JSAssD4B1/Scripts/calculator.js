console.log("Assignment 4");
console.log("Calculator Program...");

const ch = +prompt("Select the operation to perform\n1.Addition\n2.Substraction\n3.Multplication\n4.Division\n5.Square root\n6.Percentage", "eg.1 for Addition");


if (ch >= 7) {
    alert("Enter Valid option ");
} else {
    var num1 = +prompt("Enter the number 1");
    var num2 = +prompt("Enter the number 2");
}
let result = 0;
console.log(`Choice selected is ${ch} and numbers are ${num1} and ${num2}`);


switch (ch) {
    case 1:
        console.log("Addition is", result = num1 + num2);
        break;
    case 2:
        console.log("Substraction is", result = num1 - num2);
        break;
    case 3:
        console.log("Multiplication is", result = num1 * num2);
        break;
    case 4:
        console.log("Division is", result = num1 / num2);
        break;
    case 5:
        console.log(`Square root of number 1 is ${Math.sqrt(num1)} and number 2 is${(Math.sqrt(num2))}`);
        break;
    case 6:
        console.log("Percentage is", result = (num1 / num2 * 100));
        break;
}