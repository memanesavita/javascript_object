// Write a programme to find the 3 maximum values of an object and print them.


var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
}
var a=[]
for (i in my_dict.values()){
    if(!a.includes(i)){
        p=short(a)
        var u=[]
        var y=1
        while(y<=3){
            if(!u.includes(p(-y)))
            y++
        }
    }
}
console.log(u)
    













// a=[]
// for i in my_dict.values():
//     a.append(i)
// p=sorted(a)
// u=[]
// y=1
// while y<=3:
//     u.append(p[-y])
//     y+=1
// print(u)