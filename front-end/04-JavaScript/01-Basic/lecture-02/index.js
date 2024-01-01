// select all - ctrl + A -> then press ctrl + / .


// Object
// let rectangle = {
//     length: 1,
//     width: 2 ,
//     // add behaviour  
//     draw: function () {
//         console.log("Drawing a Rectangle");
//     }
// }
//     this function is also known as method 
//     the way of acessing the values are 
   
//     o/p 
// rectangle
// {Length: 1, width:2,draw:f}

    // rectangle. length
    // 1

    // rectangle. width
    // 2

// rectangle. draw
// f(){
// console. a Rectangle");
// }
// rectangle. draw( )
// Drawing a Rectangle

// };

// factory function - use camlcase eg - gaganBaghl
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
// let rectangleobj = createRectangle(5,4) ;

// // constructive function 
// function RectangleObj(len,wd){
//     // this -> aap jish bhi state pr work kar rahe ho vo ushko reffer karta hai 
//     this.len=len;
//     this.wd=wd;
//     this.draw=function(){
//         console.log('Drawing a Rectangle');
// }
// }
// // object creation using constructive function 
// // new -> new keyword gives a blaank object 
// let rectObject = new RectangleObj(6,7);

// // dyanamic variable 
// // adding 
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
//     bredth : 4
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

// // iteration clonning 
// let src = {
//     length : 2,
//     width : 4
// }
// let dest ={} ;

// for(let key in src)
// {
//     dest[key] = src[key] ;
// }

// console.log(src);
// console.log(dest);

// // 2. Assign clonning 
// let dest = Object.assign({} , src)
// console.log(dest);

// // 3. spread clonning 
// let dest ={...src};
// console.log(dest);
