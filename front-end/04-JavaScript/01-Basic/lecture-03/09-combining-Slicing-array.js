// combining & SLicing Arrays - primitive 
let array1 =[1,2,3,4,5]
let array2 =[6,7,8,9,10]
// 1st method - .concat
let combinedArray = array1.concat(array2);
console.log(combinedArray)
// 2nd method - Spread operator  (...)
let combined = [...array1 , ...array2];
console.log(combined)

// slice - slice(starting index , ending index); // ending index -1 tak hi print hota hai 
// let slicedArray = array1.slice(1,3).concat(array2.slice(2,5));
let slicedArray = array1.slice(1,3).concat(array2.slice(2)); // full slicing 
console.log(slicedArray)

// 2nd Method 
// let slicedArray1 = array1.slice(2).concat([...array2].slice(2))
let slicedArray1 = array1.slice(2).concat(array2.slice(2))
console.log(slicedArray1)

// in objects - H/w 
let obj1 = {
    No_ : 1,
    Name_ : "Gagan"
};

let obj2 = {
    No : 2,
    Name : "Khushi"
};

let obj = Object.assign(obj2, obj1);
console.log(obj);