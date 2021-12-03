// Count the values of an object property; mostly they contain lists as values.
var dict = {

    'Alex': ['subj1', 'subj2', 'subj3'],
    
    'David': ['subj1', 'subj2']
    
}


var count=0;
for(k in dict){
    for(a in dict[k]){
        count++
    }
}
console .log(count)