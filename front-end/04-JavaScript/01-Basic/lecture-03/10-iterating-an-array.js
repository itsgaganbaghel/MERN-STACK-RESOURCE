// Iterating an Array - we use for-of loop & for-each for iterating 
let arr = [3,5,6];
for(let key of arr){
    console.log("first" ,key*2)
    console.log(key/2)
};
arr.forEach(function(key){
     console.log( "first " , key/2);
     console.log("second " , key+10);

});
// convert into arrow function 
// arr.forEach(value => console.log(value/2));
