console.log("Dom Lecture - 03");


/** 
** Performace : 
            - measure spee₫of code 
            - how to write effecient & performing code 
            - event loop
**/
// adding 100 para
const t1 = performance.now();  // for checking performance - time taken 

for(let i = 1 ; i<= 100 ; i++ ){
    let newElement = document.createElement('p');
    newElement.textContent = ' this is para ' + i ;
    
    document.body.appendChild(newElement) ;
}
const t2 = performance.now();  // time to end the code 


console.log("this took " + (t2-t1 ) + "ms");

// optimizing a bit 
const t3 = performance.now();  // for checking performance - time taken 
let myDiv = document.createElement('div');

for(let i =1 ; i <= 100 ; i++){
    let newPara = document.createElement('p');
    newPara.textContent = "This is Para " + i ;

    myDiv.appendChild(newPara);
}

document.body.appendChild(myDiv);

const t4 = performance.now();  // time to end the code 

console.log("this took " + (t4-t3 ) + "ms");

/* 
checking the code is optimize or not , 
for this we use performance.now() -  we add one in starting and one in the ending of the code 
*/


/*
--------- Reduce the time - optimizing - when we have to update dom multiple time / every iteration then we use this method -----
when we add first para in the document then 2 things occurrs - 
1. Reflow - new tag ya element ka ko add karte ha tab jo jo mathematical calculation hoti hai like , kaha rakhna ha kese rakhna hai 
2. Repaint - After update structure ko pixel by pixel represent karna display pr  - drawing pixel to the display 
for all para both step occurs all the time 

- Good Practise - Reduce or minimum number time of repaint  and reflow 

for this we use - Document Fragment  - light weight document object 

we first add all the the para in the document Fragment  i.e no repaint and reflow till now
*/

let  fragment = document.createDocumentFragment ();  // creating fragment in the document and assign to the fragment 

// loop for 100 para 
for( let i =1 ; i<=100 ; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is a para ' + i ; // adding text to the para with there count number i.e i.

    fragment.appendChild(newElement);  // adding newElement in the fragment 
}

document.body.appendChild(fragment); // now 1st Reflow and 1st Repaint occurs  - i.e., Optimize 

/* 
                --------------- Call Stack ---------------
It is a type of list that stores all the info. of number of functions , kab kon kese aya and exexute hoga 
Js is single threading Language - u can run only 1 command at a time 

*/

// create a function  1st
function addPara (){                          // function declaration - this will not execute untill it call 
    let para = document.createElement('p');  // creating new para 
    para.textContent = ' this is para FIRST ' ;   // assign value or text to the para 
    document.body.appendChild(para);       // add newly created para into document 
}

// create a function  2nd
function appendNewMessage (){                 // function declaration - this will not execute untill it call 
    let para = document.createElement('p');  // creating new para 
    para.textContent = ' this is para SECOND ' ;   // assign value or text to the para 
    document.body.appendChild(para);       // add newly created para into document 
}

addPara();              // function call / envoke 
appendNewMessage();     // function call / envoke 

/* 
whole the process goes / works  line by line -

--------------- Observation ----------------

1. Run_to_completion nature to code - complete task properly 
2. Js does not execute multiple lines/function at the same time 

and all we known this by call stack 
Now, we try to make a call stack illustration by own for that we take an another example 

 function a(){            // 1
    console.log('hi');
    b();
}
function b (){            // 2
    console.log('hello'); 
}

 a ();                    // 3

 call stack: 

 console.log('hello');  // 2. now thi will go to move out 
 b();                  // 3. then b(); move out / remove
 console.log('hi');  // 1. move out because a() call is done .
 a();                // 4. then a() ; move out 
 main ();

 - start from the 1 , ignore because it is function 
 - then we go to the 2  , ignore because it is function 
 - then we start from the 3 as it is a function call  

 practise question :
 function a(){               // 1 
    console.log('hi');
 }
 function b(){              // 2
    console.log('hello');
    a();
 }

 a();               // 3
 b();               // 4

 call stack :

 b();                      // out from the call stack 
 console.log('hi')        // print and go back to the 4 AND then b() get out from the call stck 
 a();                     // 1 - execute a();
 console.log('hello')    // print and move to the a();
 b();                   // 4 - execute b() ;
 console.log('hi');     // 1 - print  and then - move to the 3 and a() out from the stack 
 a();                   // 3 - starting from the  execution of a();
 main();
*/

/* 
------------------- Event Loop ----------------------
synchronous -> Occuring at the same time - line by line - same input -> same o/p .
asynchrnous -> not occuring at the same time - eg - addEventListener 
Event loop is used for managing asynchronous tasks in JavaScript. It uses a queue called the task
    
syntx of addeventListener 
            content.addEventListener('click' ,function(){
                console.log('hi');
            })
*/

console.log('hi');                                  // 01
setTimeout( function (){                            // 02
    console.log("I am here after 5 seconds")
} , 5000 );

console.log('hey');                                 // 03 

/* 
lets understand about event loop - 
call stack:                           browser                 queue node
01 ( print & go out )
02 ( come & go to browser  )            02          ---->          02
03 ( print & go out )
02 ( wait for 5 second and print )

*/