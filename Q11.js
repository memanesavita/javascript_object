// You need to count the number of occurrences of each unique character of 
// a word "MISSISSIPPI" and store them in an object in key, value pairs.
const list1=[]
var k="MISSISSIPPI"
let p={}
for (var i of k){
    if (list1.includes(i)){
        p[i]=p[i]+1

    }
    else{
        list1.push(i);
        p[i]=1;
    }
}
console.log(p)








