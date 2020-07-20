console.log("Assignment 2");
console.log("Destructuring of Objects...");
const Student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

// console.log(Student.age,Student.projects.diceGame);




const { name, age, projects: { diceGame } } = Student;
console.log(name, " ", age, " ", diceGame);