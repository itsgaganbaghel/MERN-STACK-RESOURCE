console.log("Lecture  - 04")

// functions : a piece eof code / block of code that can be re-use for fulfillment of a specific Task
// why ? : Reducing the size of the code {buggy , bulky reduce}
// syntax:
// function declaration 
function run (){
    console.log("Function Syntax");
}
run(); // in declaration we can call in top or below the function 
// function : keyword 
// run : function name 
// () : an empty set of parenthesis which carries no value, used to call the function or pass as argument to another function

// Hoisting : it is a method or process in which all th declared function or variable automatically goes to the top of the code 

// function assignment  
var showMessage = function mssg(){
    console.log("Assignment Syntax");
}
showMessage(); // calling or invoking the function using its function name { calling of function is should be after the assigned th function }

// like in js {dynamic language } 
// let i = 1;
// i = "a";
// console.log(i); // a ;

// we try this in function 
// like 

function sum(a,b){
    return a + b;
}
console.log(sum(5,7)); // 12
console.log(sum(5)) ; // NaN
console.log(sum()); // NaN

// what if we give more than 2 values in the input 
function add(a,b){
    console.log(arguments);  // we make a function dynamic lik Js using keyword "arguments"
    return a + b;
}
let ans = add(1,2,3,4,5,6,7);  // object O/P.
console.log(ans);              // 3 { (1,2) rest of all parameters are excludes }

// what if i want sum of all input parameters 
function totalSum(a,b){
    let total = 0 ;
    for(let value of arguments){
        total += value;
    }
    return total ;
}

// let  randomValue = totalSum(1,2,3,4,5,6,7);
// let  randomValue = totalSum(1);
// let  randomValue = totalSum(1,3);
let  randomValue = totalSum(1,3,2,5);
console.log(randomValue);
// if to don't want  to use arguments  keyword then we have rest operator (.. .)
                // Rest Operator  syntax = (...)

// it is used for : 
// it will take all the remaining parameter and put into array.

// it is not a spread operator (...), it is used for concatenate of an array 
// Spread Operator  syntax = ...
// in this the output is an array  

// function addition(...arguments){
//     console.log(arguments);
// }

// let input = addition(1,2,3,4,5,6,76,5,4);

// if we have 2 input  and rest of all are arguments 
function addition(num ,value, ...arg ){ 
    // after ..arg we can't put any values in the parameters lik - function addition(num ,value, ...arg , demo1 ,demo ) // we get a error in this case 
    // console.log(arguments);
    // console.log("num " + num);
    // console.log("value " + value);
    let total = 0 ;
    for(let keys of arguments){
        total+=keys;
    }
    return total ;
}

let input = addition(1,2,3,4,5,6,76,5,4);
console.log(input);

// default parameters 
 function interest(p,r,t){
    return p* t * r/100;
 }

console.log(interest(100,5,10));

// if user didn't provide  all input - in that condition we can assign default values 

function interest(p,r=5,t=10){ // we start assigning default values from the r then we have to assigning the default value for t as well
    return p* t * r/100;
 }
 console.log(interest(200));

 let person = {
    fname : 'Gagan',
    lname : 'Baghel'
 }
 console.log(person);

                                                // {
 // this is the read only function
 function fullName(){
    return `${person.fname} ${person.lname}`;
 }
 console.log(fullName)
//  this is the read only function                 } 

// getter : access properties 
// setter : chnage or muted properties

// let person1 = {
//     fname : 'Gagan',
//     lname : 'Baghel',
//     get fullName(){
//         return `${person1.fname} ${person1.lname}`;
//     },
//     set fullName(value){
//         let parts = value.split(' ');
//         this.fname =parts[0];
//         this.lname =parts[1];
//     }
// };
// console.log(person1.fullName);  // getter call 

// console.log(person1.fullName['codebygagn']);  // not working - wrong way 

// person1.fullName = 'IG Codebygagan';
// console.log(person1.fullName);

                // Try and Catch -> Error handling 

// syntax:
// try {
//     // code  - it contains the code in which there is a change of occuring an error
// // }
// catch(e){
//     alert('you have sent a number in fullName ') ; // custom mssg 
//     // error handling code
// }

let person1 = {
    fname : 'Gagan',
    lname : 'Baghel',
    get fullName(){
        return `${person1.fname} ${person1.lname}`;
    },
    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error('You hav not sent a string ');
        }
        let parts = value.split(' ');
        this.fname =parts[0];
        this.lname =parts[1];
    }
};

try { // if there is any error occur in the try code then it goes to the catch code directly
    person1.fullName = 'IG Codebygagan' ; // print ig codebygagan 
    // person1.fullName = true; // alert - error 
}
catch(err) {
    alert(err) ; // err -  is the error that comes from the the get as a string 

}
// person1.fullName = 'IG Codebygagan';
console.log(person1.fullName);


                            // scope 

// let - scope is - local 
// var - scope is - global 

// in function  :
// let - scope is - local 
// var - scope is - global 
