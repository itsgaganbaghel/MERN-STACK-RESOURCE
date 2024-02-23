// // asyn code 
// setTimeout(() => {
//    console.log('third') 
// }, 3000);

// // synchoronus code 
// function syn(){
//     console.log("first");
// }
// syn();

// console.log("second");

// collectively the whole code is async code 

            /* ----------- API (Application Programming Interface) -----------------
 * Interface -  
            me <==> sbi wale uncle <==> locker -- The medium through which  2 software component communicate with each other

* Features of Asyn code  
1. clean & concise 
2. better error handling
3. Easier Bugging 
4. etc

* Promises - 
            promise can be full fill or not i.e., yes or no 
            we use promises when we want do/perform  multiple/parrlell function together
* Asyn Code - 
            ( giving task and do other work till given task is not full filled )

*/
// // Syn code 
// // 1. Accept 
// let maraPromise = new Promise(function(resolve , reject ){
//     console.log("promise that accept / resolve ");
//     resolve(1998);
// } ) ;

// // output - Promise {<fulfilled>: 1998}

// // 2. Reject 
// let myPromise = new Promise(function(resolve , reject){
//     console.log("promise that reject ")
//     reject("this promise is not resolve ")          // simple way 
//     reject(new Error("bhaiya error aya hai ") )     // best practise - because anything will rejected when there is an error in the code 
// })
// // output - Promise {<rejected>: 'this promise is not resolve '} 



// console.log("pahla ")

// Asyn Code 
// let meraPromise = new Promise(function(resolve , reject ){
//     setTimeout(() => {
//         console.log("time out text ")
//     }, 2000);
//     resolve(1998);  // explictely we mark that this promise is full filld and marked as resolve 
// } ) ;

// console.log("Asyn Code  ")

/* we use promise for parallaly/Background execution i.e., we give background call any function / piec of code 

* promise hav only  2 cases 
1. fail  - promise not fullfuilled   - handle by - catch ()
2. succes - promise is full filled   - handle by - then ()


*/
// 1. handle promise when it fullfilled 
// let meraPromise1 = new Promise(function(resolve , reject ){
//     setTimeout(() => 
//     {
//         console.log("Resolve set time out text ")
//     }, 
//     2000);
//     // resolve("this promise is full filled ");
//     resolve(13456789);
// });
// meraPromise1.then((value) => { console.log(`the value of the promsie is ${value}` );// console.log(value);
// }) ;


// // 2. handle when promise is not fullfilled 
// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("rejected set time out text ");
//     }, 3000 );
//     reject(new Error("promise is rejected")) ;
// }) ;
// meraPromise2.catch((error) => { console.log("promise is rejected")}) ; 


// we can use both directly 

// let meraPromise3 = new Promise( function ( resolve , reject){
//     setTimeout(() => {
//         console.log( "both together set time out text ");
//     }, 1000);
//     // resolve ("Both are resolved");
//     reject (new Error ("Promise are rejected"));
// });

// meraPromise3.then((value)  => { console.log(value)}, (error) => {console.log("Recieved an Error")});
 
// there are 3 task  t1,t2,t3 all 3 are depend with each oher t1 -> t2 -> t3 like this

// let wadaa1 = new Promise ( function ( resolve , reject) {
//     setTimeout(() => {
//         console.log("wada number 1 resovle ")
//     }, 1000);
//     resolve(true);
// })
 
// let output1 = wadaa1.then(() => {
//     let wadaa2 =  new Promise ( function ( resolve , reject ) {
//         setTimeout(() => {
//             console.log("wada number 2 resolve ")
//         }, 2000);
//         resolve("wadaa number 2 resolve ho gaya ");
//     });
//     return wadaa2;
// })
// output1.then((value) => {
//     console.log( "Wadaa number 3 resolve ")
//     // setTimeout(() => {
//     //     console.log(value)
//     // }, 3000);
// });

// if we  have to make 50 Promise then we have to use 50 then () -> no  , we use await 
// Aysn - await  - special system used to work with promises
// we used these method when , we want that t1 firstly complete then t2 complete and so on .

// // async function return always - promise 
// async function abc () {
//     return 7 ;

// }
// console.log(abc()) ;

// async function utility() {
// // make apromise for maharastraMausama - promise1
// let maharastraMausam = new Promise (( resolve , reject) => {
//     setTimeout(() => {
//         resolve("maharastra me garmi hai ");
//     },3000)
// });

// // make apromise for delhiMausam - promise2
// let delhiMausam = new Promise (( resolve , reject) => {
//     setTimeout(() => {
//         resolve("Delhi me winter  hai ");
//     },5000)
// });

// // assign Promise to the variable 
// let mM = maharastraMausam ;
// let dM = delhiMausam ;

// return [mM , dM ];

// }
// console.log(utility());
// for checking the output - type utility() in the console 

// Fetch API - send & retrieve info  -
         //  - it return promise in the output 

// make  an async function 

// fetch api call - get call / wale case me  - fetch (" url ")
// async function fetchUtility (){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json() ; // json() - js object notation
//     console.log(output);
// }
// fetchUtility();

/*
* JSON stands for JavaScript Object Notation
JSON is a lightweight format for storing and transporting data
JSON is often used when data is sent from a server to a web page
JSON is •self-describing" and easy to understand

* JSON Syntax Rules :
Data is in name/value pairs
Data is separated by commas
Curly braces hold Objects
Square brackets hold arrays

* fetch (" " , ( )) - get call
* fetch ("url" , (options))  - post call 
option - are the authentification key for id confirmation for  distingues between paid user from free user 

fetch("url" , )
*/

// let options = { 
// method: 'POST',
// body: JSON.stringify({
//     titte: 'foo',
//     body: 'bar' ,
//     userId : 1,
// }),
// headers : { 
// 'Content—type': 'application/json; charset=UTF-8 ' ,
// },
// } ;
// let content = fetch( 'https://jsonptacehotder.typicode.com/posts', options);


// async function helper () {
//     let options = { 
//         method: 'POST',
//         body: JSON.stringify({
//             titte: 'foo',
//             body: 'bar' ,
//             userId : 1,
//         }),
//         headers : { 
//         'Content—type': 'application/json; charset=UTF-8 ' ,
//         },
//         } ;

//         let content = await fetch('https://jsonplaceholder.typicode.com/todos/1', options);
//         let response = content.json() ;
//         return response ;        
// }

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }
// utility();


/* 
* closers - function  + surrounding environment / lexical environment ( jo jo date used ho raha ha function me ushka reference bhi store hota ha , for getting output after the termination of the whole function  whenever the inner function is called ) 
* whenever we have a case of nested loop then closer comes in the play they only work on the refernece values not copy of the original value;
*/
