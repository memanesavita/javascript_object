
// Take 10 student inputs and marks and save them in an object.




var readline = require('readline-sync');
var students={}
for (let j = 0; j <10; j++){
var name =readline.question("Enter your name:");
var marks=readline.questionInt("Enter the marks");
students[name]=marks;
}
console.log(students);