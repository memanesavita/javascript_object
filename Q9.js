// Take 1 list and have some objects inside it 
// as sample data given below, and create a new 
// list with unique values and console the unique values list.

my_name=[
{"first":"1"},
{"second": "2"},
{"third": "1"},
{"four": "5"},
{"five":"5"},
{"six":"9"},
{"seven":"7"}
]


for(i of my_name){
    for(j in i){
        if(!my_name.includes(i[j])){
            my_name.push(i[j]);
        }
    }
}
console.log(my_name)



