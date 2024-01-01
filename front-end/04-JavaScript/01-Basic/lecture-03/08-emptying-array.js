// Empty array 
let arrayNew = array ;
arrayNeww = [] ;
console.log(arrayNew)
// in this the array is declared to blank [] and the original values are remove by garbage collector . 
// this is not a appropriate method of empty the array 
// we use new method that is  
array.length=0;
console.log(array)

// We have another method that is splice();
array.splice(0,array.length)
console.log(array)
