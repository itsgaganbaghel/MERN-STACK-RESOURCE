// // Arrays
// // Adding new Elements { INSERTION }  // push
// // Finding Elements     // index
// // Removing Elements
// // splitting Elements
// // combining Elements

// // creation of array
// let numbers = [1, 2 ,4 ,5, 'gagan' ]
// // ie in js array contain homo as well as hetero items

// // access item from Array
// console.log(numbers)     // access all values of an array
// console.log(numbers[2]) // specific value by using index number

// // Insertion of an item in an array
// // end - push  : it is used to array element in the end of the array
// numbers.push(9);
// console.log(numbers)

// // middle - splice
// // numbers.splice(index Node.  , delete ,insert )
// numbers.splice(2 ,0, 10);
// console.log(numbers)

// // start insertion - unshift
// numbers.unshift(20);
// console.log(numbers)

// // delete from starting
// numbers.shift();
// console.log(numbers);

// // delete from ending
// numbers.pop();
// console.log(numbers);

// let arr = [1,2,3,4,5];
// // finding the element in the array
// console.log(arr);
// console.log(arr[2]);

// find method returns the first occurance of that element
// for  (let i=0;i<arr.length;i++){
//     if(arr[i]==3){
//         console.log("Element is at position "+i);
//         break;
//     }
// }

// // insertion
// arr.push(2)
// console.log(arr);

// arr.unshift(9);
// console.log(arr);

// // arr.splice(3,4);
// // console.log(arr);

// arr.splice(3,0,3);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.splice(2,1);
// console.log(arr);

// let myMovies = [];
// let bookMyShow = ["pk", "bahubali", "avengers", "all the best "];

// for (let i = 1; i < bookMyShow.length; i++) {
//   if (i % 2 !== 0) {
//     myMovies.push(bookMyShow[i]);
//   }
// }
// console.log(myMovies);

// console.log(myMovies.pop());
// console.log(typeof myMovies.pop());

let mov = [];
// mov.push(bookMyShow.pop())
// console.log(mov)

// for( let i =0 ; i< 2 ; i++){
//   mov.push(bookMyShow.pop())
// }
// console.log(mov)

let spliceArray = [1, 2, 3, 4, 5, 6, 7, 8];

// spliceArray.splice( 1,4,10)
// console.log( spliceArray)

// for( let i =0 ; i< 2 ; i++){
//  mov.unshift(spliceArray.pop())
// }
// console.log(mov)

// let courses = ["dataAnalyst", "MernStack", "python ", "java", "data science"];
// let notAvl = [];
// for (let i = 0; i < 2; i++) {
//   notAvl.push(courses.shift()); // - same order
//   // notAvl.unshift(courses.shift()); - reverse order
// }
// console.log(notAvl);

// let arrays = [1, 2, 3, 4, 5, 6];
// let newArr = [7, 8, 9, 10, 11];

// for (let i = 0; i < arrays.length; i++) {
//   arrays[arrays.length - 1 + i] = newArr[i];
// }
// for( let i = 0; i < arrays.length; i++) {
//   newArr[i] = arrays[arrays.length - i - 1];
// }
// console.log(newArr)


let arr = [ 12,3,4,5,33,88]
// let newarr = []
// let min = arr[0] ; 
// for( let i = 0; i < arr.length; i ++){
//  for( let j = 1; j < arr.length; j++){
//   if( arr[i] > arr[j] ){
//     arr[arr.length - i ] = arr[i]
//  }
// }
// }

console.log(first, last)
for( let i = 0; i < arr.length / 2; i){
  let first = arr[i];
  let last = arr[arr.length - 1 - i];
  if( first > last){
    arr[arr.length-1 -i] = first
  }
}
// console.log(arr)