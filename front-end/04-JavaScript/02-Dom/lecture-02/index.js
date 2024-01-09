
// how to add event listener 
{/* <event_target>.addEventListener(<event to do for> , < function (){ */}
    // code here will be executed when the event is triggered.
// }); 
// document.addEventListener( 'click' , function(){
//     console.log ('I click on the display');
// });

// let content = document.querySelector('h1'); 

// content.addEventListener('click' , function(){
//     content.style.background = 'red'; });

// making function for multiple iteration 
// function eventFunction() {
//     // console.log('I have clicked on the document ');
//     let content = document.querySelector('h1'); 

//     content.addEventListener('click' , function(){
//     content.style.background = 'red'; });

// } 

// document.addEventListener('click' , eventFunction);

// remove addEventListener

// document.addEventListener( 'click' , function(){
//     console.log ('I click on the display');
// });
// document.removeEventListener( 'click' , function(){
//     console.log ('I click on the display');
// });

// by this we can't remove eventlistener because in js functions are also an objects 
 
// function print(){
    // console.log ('I click on the display');
// }
// document.addEventListener('click' , print) ;
// if you want to check or display the all EventListener by - monitor(document)
// document.removeEventListener('click' , print) ;

// - by this event listener is finally remove 

// remove event listner - for this we have to follow or satisfied all 3 condition  that is 
// 1- The event type must be the same as what you used to add it.
// 2- The callback must be the exact function object (not a copy)
// 3- If you added the event listener with options, then you need to include those options too.
// same type , same target , same function 

// the event object 
// const content  =  document.querySelector('#p1');
// content.addEventListener('click',function(event) {
//     console.log(event);
// })

// when addEventListener RUN  their function then addEventListener get an event object that content lots of information 

// let link = document.querySelectorAll('link') ;


// default event - preventDefault 
// let thirdLink = link[2];
// console.log(thirdLink)
// thirdLink.addEventListener('click' , function (event){
//     event.preventDefault();
//     console.log('maja aya ');
// });

// by this link number 3 doesn't work as a link 

let thirdLink = link[3];
console.log(thirdLink)
thirdLink.addEventListener('click' , function (event){
    event.preventDefault();
    console.log('maja aya ');
});