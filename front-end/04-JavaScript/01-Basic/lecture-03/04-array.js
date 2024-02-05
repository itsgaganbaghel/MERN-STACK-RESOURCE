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

// start insertion - unshift 
numbers.unshift(20);
console.log(numbers)

// delete from starting 
numbers.shift();
console.log(numbers);

// delete from ending
numbers.pop();
console.log(numbers);


let arr = [1,2,3,4,5];
// finding the element in the array
console.log(arr);
console.log(arr[2]);

// find method returns the first occurance of that element
for  (let i=0;i<arr.length;i++){
    if(arr[i]==3){
        console.log("Element is at position "+i);
        break;
    }
}

// insertion 
arr.push(2)
console.log(arr);

arr.unshift(9);
console.log(arr);

// arr.splice(3,4);
// console.log(arr);

arr.splice(3,0,3);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2,1);
console.log(arr);