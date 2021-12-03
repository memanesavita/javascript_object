var prompt = require('readline-sync');
var n = prompt.questionInt('How many more times? ');
var a={}
for(var i=0;i<n;i++){
a[i]= i**2

}
console.log(a)