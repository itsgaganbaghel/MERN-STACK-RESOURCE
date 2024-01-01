// Arrays 
// Adding new Elements { INSERTION }  // push
// Finding Elements     // index
// Removing Elements    
// splitting Elements 
// combining Elements

// creation of array  
let numbers = [1, 2 ,4 ,5, 'gagan' ]
// ie in js array contain homo as well as hetero items 

// access item from Array
console.log(numbers)     // access all values of an array
console.log(numbers[2]) // specific value by using index number 

// Insertion of an item in an array
// end - push 
numbers.push(9);
console.log(numbers)

// middle - splice 
// numbers.splice(index Node.  , delete ,insert )
numbers.splice(2 ,0, 10);
console.log(numbers)

// strat insertion - unshift 
numbers.unshift(7);
console.log(numbers)

// delete from starting 
numbers.shift();
console.log(numbers);

// delete from ending
numbers.pop();
console.log(numbers);