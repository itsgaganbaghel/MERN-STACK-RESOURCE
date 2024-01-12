// console.log(monitorEvents(document));

// how to add event listener 
//  <event_target>.addEventListener(<event to do for> , < function (){ 
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
//     console.log('I have clicked on the document ');
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

let link = document.querySelectorAll('a') ;


// default event - preventDefault 
let thirdLink = link[2];
console.log(thirdLink)
thirdLink.addEventListener('click' , function (e){
    e.preventDefault();
    console.log('maja aya ');
});

// by this link number 3 doesn't work as a link 

// let thirdLink = link[2];
// console.log(thirdLink)
// thirdLink.addEventListener('click' , function (event){
//     event.preventDefault();
//     console.log('maja aya ');
// });

// let myDiv = document.createElement('div');

// for(let i=1 ; i<=100 ; i++ ){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is a para ' + i ;

//     newElement.addEventListener('click' , function(event){
//         console.log('I have clicked on para ');
//     } ) ;
//     myDiv.appendChild(newElement);
// }
// document.appendChild(myDiv); -- errror -
// document.body.appendChild(myDiv);  // because document can only have a html element  and nothing else . all other elements are child of <html> element 

// optimize the above code - in every iteration we make new object for eventlistener that take a space of memory 
// we make only one event listner and add them with DIV Because all p tag are child of div 

// let myDiv = document.createElement('div');

// function parastatus (event){
//     console.log('I have clicked on the Div ');
// }
// myDiv.addEventListener('click' , parastatus ) ;

// for(let i=1 ; i<=100 ; i++ ){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is paragraph ' + i ;

//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv);

// but by this we loose our individual access of the p tags  
// for this we use event.Target.textcontent

// let myDiv = document.createElement('div');

// function parastatus (event){
//     console.log('I have clicked on the ' + event.target.textContent );
// }
// myDiv.addEventListener('click' , parastatus ) ;

// for(let i=1 ; i<=100 ; i++ ){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'paragraph ' + i ;

//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper');
// element.addEventListener('click' , function(event){
//     console.log('hello ' + event.target.textContent)
// });

// if we click in the span - output - helloxyz 
// if we click in the p    - output - hello para - xyz

// if we want listener works only for  (filter) span then 

let element = document.querySelector('#wrapper');
element.addEventListener('click' , function(event){
    // if(event.target.tagName ==='SPAN') // tagName & NodeName - work same 
    if(event.target.nodeName ==='SPAN')
    {
    console.log('hello ' + event.target.textContent)
    }
});

// if u want to check the time taken to upload all html / document thn follow these steps 
// go to the web page -> press f12 -> go to network -> press ctrl + r -> in the bottom u get -> document load time  : ' ' 

// for safe practise we make 
// /* <script> */
    
// document. addEventListener('DOMContentLoaded', function(){
    // ------
    // ------
    // ------
// }
// </script> 
// but we not use this 
// best prctise is 

/* <body>
<!-- your content -->
after all code 
<script>

</script>
</body>  */

let btn = document.getElementById("btn");
console.log(btn);


// function for random
function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  
  function changeBody() {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
  }
  
  // add event listener
  btn.addEventListener("click", changeBody);