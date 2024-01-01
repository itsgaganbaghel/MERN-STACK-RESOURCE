
// Object creation for multiple useability - factory function and constructive function .

// this is a way of creating a function 

             // factory functions

function createRectangle(len, wid){
    return rectangle = {
        length: len,
        width: wid,
        draw: function(){
            console.log("Drawing Rectangle with length",this.length,"and width",this.width);
        }
    }
};
console.log(createRectangle(3,5));

let newRectangle = createRectangle(5,6);
console.log(newRectangle);

console.log(newRectangle.length);

newRectangle.color = 'skyblue';
console.log(newRectangle);

delete newRectangle.length;
console.log(newRectangle);