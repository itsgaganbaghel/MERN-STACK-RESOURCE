// select all - ctrl + A -> then press ctrl + / .

// Object
// let rectangle = {
//     length: 1,
//     width: 2 ,
//     // add behaviour
//     d raw: function () {
//         console.log("Drawing a Rectangle");
//     }
// }
//     this function is also known as method
//     the way of accessing the values are

//     o/p
// rectangle
// {Length: 1, width:2,draw:f}

//     rectangle. length
//     1

//     rectangle. width
//     2

// rectangle. draw
// f(){
// console. a Rectangle");
// }
// rectangle. draw( )
// Drawing a Rectangle

// };

// * factory function - use camelCase eg - gaganBaghl
// function createRectangle (length,width){
//     return rectangle = {
//         len:length ,
//         wd: width,

//         // add behaviour
//         draw: function () {
//             console.log("Drawing a Rectangle");
//         }
//     };
// }
// let rectangleObj = createRectangle(5,4) ;
// console.log(rectangleObj)

// * constructive function
// function RectangleObj(len,wd){
//     // this -> aap jish bhi state pr work kar rahe ho vo ushko reffer karta hai
//     this.len=len;
//     this.wd=wd;
//     this.draw=function(){
//         console.log('Drawing a Rectangle');
// }
// }
// object creation using constructive function
// new -> new keyword gives a blank object
// ? 
// let rectObject = new RectangleObj(6,7);
// console.log(rectObject)

// dynamic variable
// adding
// rectObject.color = 'yellow';
// console.log(rectObject);
// // deletion / remove
// delete rectObject.color;
// console.log(rectObject);

// constructor property -  koe bhi object ki poperty jo show karti hai ki object bana kes hai
// syntax
// rectObject.constructor

// // types in js
// // 1. primitive & 2. referance
// // primitive : number string boolean null undefined symbol bigint
// // referance : array objects functions regexp date

// // 1. primitive - copied by there values
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// b = b+2;
// console.log(b);

// 2. referance - copied by address i.e.., changes in both
// let objA = {name:'John',age:30};
// let objB = objA;
// console.log(objA);
// console.log(objB);

// objB.name='Jane';
// console.log(objA);
// console.log(objB);

// // loops : for-in-loop & for-of-loop
// // for-in-loop
// let rectangle = {
//     length : 2 ,
//     breadth : 4
// }
// for(let key in rectangle)
// {
//     // print keys
//     console.log(key);
//     // print key values
//     console.log(rectangle[key])
//     // print key values pair / both.
//     console.log(key , rectangle[key]);

// }

// // for-of-loop
// print only keys
// for(let key of Object.keys(rectangle))
// // print both key value pairs
// for(let key of Object.entries(rectangle))
// {
//     console.log(key);
// }

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key}: ${person[key]}`);
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//     };
// }
// const person1 = new Person('John', 30);
// console.log(person1);

// function createPerson(name, age) {
//     return {
//         name: name,
//         age: age,
//         greet: function() {
//             console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//         }
//     };
// }

// console.log(createPerson('John', 30))

// // object conning
// // iteration , assign , spread

// let rectangle = {
//     length : 2 ,
//     breadth : 4
// }

// for(let key in rectangle)
// {
//     console.log(key , rectangle[key]);
// }

// // iteration cloning
let src = {
    length : 2,
    width : 4
}
// // console.log(src);
// let dest ={} ;

// for(let key in src)
// {
//     dest[key] = src[key] ;
// }

// console.log(src);
// console.log(dest);

// dest.length = 3 ;
// console.log(src);
// console.log(dest);

// 2. Assign clonning
// let dest = Object.assign({} , src)
// console.log(dest);
// dest.length = 3 ;
// console.log(src);
// console.log(dest);

// // 3. spread clonning
// let dest ={...src};
// console.log(dest);
// dest.length = 3 ;
// console.log(dest);
// console.log(src);


const dest = Object.create(null)
console.log(dest)
dest.length = 3 ;
console.log(dest)
console.log(dest.length)
console.log(dest)
console.log('length' in dest ) // check an key value present in an object or not 

// singleton and object literal

// object literal

// create an array

// let mySymbol = Symbol('myArray')
// const juser = {
//     name : 'jsuer',
//     "full name" : 'gagan baghel' ,
    // ! mySymbol : 'jsuer symbol',
    //* [mySymbol] : "correct syntax"
// }

// // access values from an array
// juser.age = 22 ; // insertion
// console.log(juser.age);
// juser.age = 20 ; // updation
// console.log(juser.age);
// delete juser.age ; // deletion
// console.log(juser.age);
// console.log(juser.name);
// console.log(juser["full name"]);
// console.log(typeof juser["full name"]); // string

// // how to insert a symbol in a object and then how we access that
// // console.log( juser.mySymbol);  // juser symbol
// // console.log( typeof juser.mySymbol); // strinf

// console.log(juser[mySymbol]);  // correct symbol
// console.log( typeof  juser[mySymbol]);

// console.log(juser);

// juser.name = 'gagan baghel';
// console.log(juser.name);

// // Object.freeze(juser); // now no changes occur in this obejct

// // how to add function in the object
// juser.greeting = function(){
//     console.log("greeting");
// }
// console.log(juser.greeting);
// console.log(juser.greeting());

// let number = +prompt("Enter the number of key value pairs you want ");

// let obj = {};
// let obj1 = {};
// for (let i = 0; i < number; i++) {
//   let key = prompt(`Enter the ${i + 1} key`);
//   let value = prompt(`Enter the ${i + 1} value`);
//   if (typeof value === "string") {
//     obj[key] = value;
//   } else if (typeof value === "number") {
//     obj1[key] = value;
//   }
// }
// console.log(obj);
// console.log(obj1);
// console.log(typeof 2)

// let number = +prompt("Enter the number of key value pairs you want ");

// let obj = {};
// for (let i = 0; i < number; i++) {
//   let key = prompt(`Enter the ${i + 1} key`);
//   let value = prompt(`Enter the ${i + 1} value`);
//   obj[key] = value;
// }
// console.log(obj);
