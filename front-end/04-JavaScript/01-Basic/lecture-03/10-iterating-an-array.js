// Iterating an Array - we use for-of loop & for-each for iterating 
let arr = [3,5,6];
for(let key of arr){
    console.log(key*2)
};
arr.forEach(function(key){console.log(key/2);});

// convert into arrow function 
arr.forEach(value => console.log(value/2));
