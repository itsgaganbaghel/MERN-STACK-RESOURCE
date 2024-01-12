let newElement = document.createElement('h1') //create h1 
// add content in h1 
let info = document.createTextNode("This is Heading");
// info.appendChild(newElement);
// document.body.appendChild(info);

newElement.appendChild(info);
document.body.appendChild(newElement);
console.log(newElement)