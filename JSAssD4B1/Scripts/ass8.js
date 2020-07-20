console.log("Assignment 8");


// function ask(question, yes, no) {
//     if (confirm(question))
//         yes();
//     else
//         no();
// }

// ask("Do you agree?", function() { alert("You agreed."); }, function() { alert("You canceled the execution."); });




//Replacing function expression with arrow function


let fun = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};

let asking = fun("Do you agree?", function() { alert("You agreed."); }, function() { alert("You canceled the execution."); });