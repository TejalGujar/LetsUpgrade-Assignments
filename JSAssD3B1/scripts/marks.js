// Using Conditional Statements

var marks = prompt("Enter the marks : ");

if (marks >= 70) 
    console.log(`Marks are ${marks} and Grade is A.`);
else if (marks >= 50) 
    console.log(`Marks are ${marks} and Grade is B.`);       
else if (marks >= 40)
    console.log(`Marks are ${marks} and Grade is C.`);
else
    console.log(`Marks are ${marks} and Grade is D(FAIL).`);

   
// Using Switch Case Statements   

switch (marks) {
   case 70:
       console.log(`Marks are ${marks} and Grade is A.`);
       break;
   case 50:
       console.log(`Marks are ${marks} and Grade is B.`);
       break;
   case 40:
       console.log(`Marks are ${marks} and Grade is C.`);
       break;
   default:
       console.log(`Marks are ${marks} and Grade is D(FAIL).`); 
       break;              
}

//Using Ternary Operator

console.log((marks >= 70) ? `Marks are ${marks} and Grade is A.` : 
           (marks >= 50) ? `Marks are ${marks} and Grade is B.` :
           (marks >= 40) ? `Marks are ${marks} and Grade is C.` :
           `Marks are ${marks} and Grade is D(FAIL).`);