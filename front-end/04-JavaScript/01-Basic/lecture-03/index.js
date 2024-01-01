//                          lecture - 03

// maths built in methods - max , mix abs , round etc 
// Math object 

// Properties 
// #1 - Euler Number 
console.log(Math.E);

// #2 - PI 
console.log(Math.PI);

// #3 - Log2E
console.log(Math.LOG2E);
    

// Methods 

// #1 - Round 
console.log(Math.round(12.79)); // 13
console.log(Math.round(12.49)); // 12

// #2 - Ceil 
console.log(Math.ceil(12.79)); //13

// #3 - Floor 
console.log(Math.floor(12.79)); //12

// #4 - Random 
console.log(Math.random()); //....................

// #5 - min 
console.log(Math.min(10,12)); //10

// #6 - Random 
console.log(Math.max(10,12)); //12

// #7 - pow 
console.log(Math.pow(2,10)); //1024


// Returning a random integer between two bounds
// LowerBound - 40 
// Upper Bound - 100
console.log(Math.round(Math.random() * (100 - 40)) + 40);


// Date Object 
// date in js - we can directly refer from internet - mdn 
// in this , indexing is start from 0 for month
// get  - output
// Set - input 
// for example 
// let today = new Date();
// console.log(today);

let date = Date(); //Date in a string formate
console.log(date);

date = new Date();
console.log(date);

date = new Date(10);
console.log(date);

date = new Date(2003,3,16); // indexing is start from 0 for month
console.log(date);

date = new Date("2003-05-20");
console.log(date);

date = new Date("2003-04-16T11:55:21Z");
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());


// Get MEthods 
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());


// Set Value 
let birthday = new Date();
console.log(birthday);

birthday.setYear(2003)
console.log(birthday);

birthday.setMonth(3);
console.log(birthday);

birthday.setDate(16);
console.log(birthday);



date = new Date(2003,3,16);
console.log(date);


// String - are of 2 types ie primitive and Object
// Primitive string is a sequence of characters enclosed by double or single quotes .
// Object type string has properties like charAt , indexOf , slice , substring , concat , replace , match , search , split , toLower

// There are String Object can be created by new keyword and String Constructor 
let str = new String("My name is Priyansh");
console.log(str);
console.log(typeof str);

// Properties
// #1 - Length 
console.log(str.length);

// Methods 
// #1 - lowercase 
console.log(str.toLocaleLowerCase());

// #2 - uppercase 
console.log(str.toUpperCase()); 

// #3 - at 
console.log(str.charAt(4));

// #4 - charCodeAt 
console.log(str.charCodeAt(4));

// #5 - startwith 
console.log(str.startsWith("My"));

// #6 - endsWith 
console.log(str.endsWith("Priyansh"));

// #7 - replace 
console.log(str.replace("Priy","Riy"));

let a = "  Devil  ";
// #8 - trim 
console.log(a);
console.log(a.trim());

// primitive string 
let name = 'gagan'; 
// primitive string convert into Object
// name. 
let lastname = new String('baghel');
// we can perform many functionalities in it that is ,
// lastname.length
// lastname.includes
// lastname.replace (before , after)
// lastname[index-No.]

let mssg1 = "this is my 3rd js video for learning basics of js."
let word = mssg1.split(' ');
console.log(word);

// Template literals - use for rearrange the sentence line patters, but we do not add \n , etc directly.
// we can ue '\' for new line  as well as we can use template literal by adding back slash. (` `)
let mssging = `This is a example for showing the use of 
template literals `;
console.log(mssging);

// Arrays 
// Adding new Elements 
// Finding Elements 
// Removing Elements 
// splitting Elements 
// combining Elements

// creation of array  
let numbers = [1, 2 ,4 ,5, 'gagan' ]
// ie in js array contain homo as well as hetero items 

// access item from Array
console.log(numbers)

// Insertion of an item in an array
// end - push 
numbers.push(9);
console.log(numbers)

// middle - splice 
// numbers.splice(index Node.  , delete ,insert )
numbers.splice(2 ,0, 10);
console.log(numbers)

// end - unshift 
numbers.unshift(7);
console.log(numbers)

numbers.shift();
console.log(numbers)

// Searching - 
// primitive  - we use indexof & includes
// console.log(numbers);
// o/p - 7 
// console.log(numbers.indexOf(15));
// o/p - -1 - if no. is not exit in the array 

// check whether a No. is exit in an array or not .No
// basic method is  
// if(numbers.indexOf(4) != -1)
// {
//     console.log("Present");
// }
// good practice 
console.log(numbers.includes(4)); 

// console.log(numbers.indexOf(9, 6) );

// for reference - we use callback function
let courses = [
    {no:1 , name:"gagan"} ,
    {no:2 , name:"baghel"}
]

console.log(courses);

console.log(courses.indexOf({no:1 , name:"gagan"}));
// o/p = -1 
console.log(courses.includes({no:1 , name:"gagan"}));
// o/p = false

// we use callback function - 
// callback function is a function passed into another function as an argument, which is then invoked
// inside the outer function to some kind Of routine action.

// normal way / notation 
let course = courses.find(function(course){
    return course.name === 'gagan'
})  

console.log(course);

// arrow function 
// remove function add => like (course) => 
// if i/p parameter is single then remove () like course =>
// if there is only single line of code then remove return & {} 
// like course => course.name === 'gagan'

let courseNew = courses.find(courseNew => course.name === 'gagan');

console.log(courseNew)

// Removing element 
let array = [1,2,3,4,5,6,7]
// end  - pop ()
array.pop();
console.log(array)

// begining - shift ()
array.shift();
console.log(array)

// middle - splice ()
array.splice(2,1);
console.log(array)

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
let slicedArray = array1.slice(1,3).concat(array2.slice(2,5));
// let slicedArray = array1.slice(1,3).concat(array2.slice(2)); // full slicing 
console.log(slicedArray)

// 2nd Method 
let slicedArray1 = array1.slice(2).concat([...array2].slice(2))
console.log(slicedArray1)

// in objects - H/w 
let obj1 = {
    No_ : 1,
    Name_ : "Priyansh"
};

let obj2 = {
    No : 2,
    Name : "Khushi"
};

let obj = Object.assign(obj1, obj2);
console.log(obj);

// Iterating an Array - we use for-of loop & for-each for iterating 
let arr = [3,5,6];
for(let key of arr){
    console.log(key*2)
};
arr.forEach(function(key){console.log(key/2);});

// convert into arrow function 
arr.forEach(value => console.log(value/2));

// Joining Arrays 
let joinArr = ['I','love', 'to','code'];
let joined = joinArr.join(' ');
console.log(joined)

// spilit an array 
let mssg = "Now I love to code in JS";
let splitMsg = mssg.split(" ");
console.log(splitMsg)

// join 
let joinMssg = splitMsg.join(' ');
console.log(joinMssg)

// Reverse an Array
let reverseArr = [1,2,3,4,5];
reverseArr.reverse()
console.log(reverseArr)

// sorting Arraay 
let sortArr = [5,7,8,9,1,3];
sortArr.sort();
console.log(sortArr);

// Filtering Array
let filterArr = [1,2,3,4,5,0,-1,-2,-3,-4,-5];
let no = filterArr.filter(function(value){
    return value >= 0 ;
});
console.log(no);
// convert into arrow function
let num = filterArr.filter(value => value >=0);
console.log(num);

// Mapping Arrays - agar apko map ki each element of array to something else. ie., somthing is connected with some value 
let mapArray = [20,35,60,78,10];
let items = mapArray.map(function(value){
    return 'student_marks: ' + value;
})
console.log(items);
// convert into arrow function
let item = mapArray.map(value => 'student-marks: ' + value);
console.log(item);

// value - kuch bhi likh shakte hai . 
let mapObjCreation = num.map(function(value){
    return {poitive_numbers : value ,
            double_numbers  : value * 2 };
}) ;
console.log(mapObjCreation);

// arrow function : 
let mapObjArrowFunction = num.map(value => {
    return {poitive_numbers : value ,
        double_numbers  : value * 2 };
});
console.log(mapObjArrowFunction);