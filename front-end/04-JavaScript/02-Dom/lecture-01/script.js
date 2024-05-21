//  window object
// alert('window.console.log')
// window.alert('Alert');

// DOM
/*
Dom stand for the document object model 
this is the programming interface for the websites 
in which the html documents is represented in the form of tree 
and every node of the tree contains an object 
and we can access , update and delete that object as well as 
the details of the object  by using js 

*/
console.log(document);
window.console.log(document.body);

// Access element
// document.getElementById("heading")
// document.getElementByClassName(".demo")
// document.getElementsByTagName("h2");

// #1 - id
window.console.log(document.getElementById("heading"));

// #2 - class
console.log(document.getElementsByClassName("demo"));
console.log(document.getElementsByClassName("demo")[0]);

// #3 - TAg
console.log(document.getElementsByTagName("h3"));

/* #4 - $0 
  $0 returns the most recently selected element or
  JavaScript object, $1 returns the
  second most recently selected one, and so on.

  Trick - hover on any part or section of the website and then click on any section after that if we write " $0; "
  then we directly get property
*/
// let element = $0;
// console.log(element);

// document.querySelector("h2")
// document.querySelector("#heading")
// document.querySelector(".demo")

// #5 - query selector
console.log(document.querySelector("h2")); //tagname
console.log(document.querySelector(".demo")); //class
console.log(document.querySelector("#heading")); //id

// In this, they display only one ( id , class, tag ) out of all respectively
// for all we use
// document.querySelectorAll("h2")

// #6 - query selector All
console.log(document.querySelectorAll("h2")); //tagname
console.log(document.querySelectorAll(".demo")); //class
console.log(document.querySelectorAll("#heading")); //id

// ---------------&&&&&&&&&-----------------------

// change the html & css  by js  -
// Update existing content
// html

// #1 - innerHtml
let lec = document.querySelector("h2");
lec.innerHTML = " Inner Html Text - h2 ";
console.log(lec);

let h3 = document.querySelector("h3");
h3.innerHTML = "<h1> inserting inner text</h1> ";
console.log(h3.innerText);
console.log(h3.innerHTML);
console.log(h3.textContent);

let list_inner = document.querySelector("#list");
console.log(list_inner.innerHTML);

// #2 - outerHTML
let list_outer = document.querySelector("#list");
console.log(list_outer.outerHTML);

// #3 - textContent  - show hidden list / items as well
let list_textContent = document.querySelector("#list");
console.log(list_textContent.textContent); // item 1 , item 2 , item 3

// #4 - innerText - Don't show hidden list / item  - show only visible items
let list_innerText = document.querySelector("#list");
console.log(list_innerText.innerText); //  item 1 , item 2

// innerHtml vs textContent
// lec.innerHTML =  "<br>"// this will try to convert the tag for representing the content
// lec.textContent = "<br>" ;  // this will show as it is the tag written  between the tag.
// console.log(lec) ;

// Adding new element / content in the html code by js ( directly ) -
// first we create new element by using -.createElement
// for adding -- we use append

let newElement = document.createElement("h2"); // create New Element

// Adding text in the newly created element
let info = document.createTextNode(
  "This is a text node for adding text in the newElement "
);

newElement.appendChild(info); // appending the textNode to the created element
console.log(newElement); // print the element in the console
// now the newElement has the textNode inside of it .
// now we insert newElement into the document body
document.body.appendChild(newElement); // inserting at the end of the body - by default

/* 
Here, Newly Create element add in the end of the body or bottom of the body content 
if, we want to add in a specific location like -
1. before end
2. before begin
3. After end
4. After begin
*/

let child1 = document.createElement("p");
let content1 = document.createTextNode("Before hghghjgjh ");
child1.appendChild(content1);
document.body.appendChild(child1);
console.log(child1);
// newElement.insertAdjacentHTML('beforebegin', child1);
newElement.insertAdjacentHTML("beforebegin", "Before Begin ");
newElement.insertAdjacentHTML("afterbegin", "After Begin ");
newElement.insertAdjacentHTML("beforeend", "<h1> Before end </h1>");
newElement.insertAdjacentHTML("afterend", "After End ");

let child3 = document.createElement("p");
let content3 = document.createTextNode("this is a demo text for p tag");
child3.appendChild(content3);
// document.body.appendChild(content3);

// Remove Element
// #1 - removeChild()

// let Element_remove = document.querySelector("ul");
// let childElement = Element_remove.lastElementChild;
// Element_remove.removeChild(childElement);               // remove last li from the  ul

// css
lec.style.color = " yellow ";
lec.style.background = "Black ";
lec.style.cssText =
  "color : red; font-size : 20px ;background-color :yellow; border:2px solid black;";
lec.style.cssText +=
  "color : blue; background-color :yellow; border:2px solid black;";
lec.setAttribute(
  "style",
  "color:red ; background-color :yellow; border:2px solid black"
);
let container = document.querySelector("#demo");
container.classList.add("demo");
const result = container.classList.contains("demo");
console.log(result);
const replace = container.classList.replace("demo", "demo2");
console.log(replace);
// container.className = "demo2";
