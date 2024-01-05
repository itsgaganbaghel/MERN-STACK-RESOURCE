            // Acces element 
// document.getElementById("heading")  
// document.getElementByClassName(".demo") 
// document.getElementsByTagName("h2");

// document.querySelector("h2")  
// document.querySelector("#heading")  
// document.querySelector(".demo")  

// - in thi the display all one ( id , clss, tag )
// for all we use 
// document.querySelectorAll(|"h2")


// Trick - hover on any part or section of the webisite and then if we write " $0; "
// then we directly get property  

// change th html & css  by js 
// html 
let lec = document.querySelector("h2");


lec.innerHTML = "Lecture number 01 "; 
console.log(lec);

// css
lec.style.backgroundColor ="  black ";
lec.style.color = " yellow ";

// innerHtml vs textcontent
// lec.innerHTML =  "<br>"// this will try to convert the tag for represeting the content 
// lec.textContent = "<br>" ;  // this will show as it is the tag written  between the tag.
console.log(lec)

// Adding new element / content in the html code by js ( directly ) - by using -.createElement


