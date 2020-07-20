console.log("Assignment 6");
console.log("GREATER THAN 100...");

while (true) {
    let num = parseInt(prompt("Enter the number which is greater than 100 : "));
    if (num >= 101 || num < 0) {
        console.log("Greater Number : " + num);
        break;
    } else {
        console.log("Less  Number : " + num);
        continue;
    }
}