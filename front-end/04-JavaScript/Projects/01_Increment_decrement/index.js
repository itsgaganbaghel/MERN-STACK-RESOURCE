/* 
button has a special attribute - onclick = "()"
fetching a value from the ui  by - querySelector
get string - > convert into int -> parseInt
increment - n++ 
set the value - > assign -> innerText / innerHtml
*/

const count = document.querySelector("#num");
// console.log(count);

const increment = () => {
    let value = parseInt(count.innerText);  // getting the vale 
    // value = value + 1 ;                                // update the value 
    value ++ ;
    count.innerText = value  ;              // assign the value 
}

const decrement = () => {
    let value = parseInt(count.innerText) ;
    // value = value - 1 ;
    value -- ;
    count.innerText = value
}