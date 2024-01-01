// Object
let rectangle = {
    length : 2 ,
    width : 3,
    // add features  or behaviour { known as method }
    // any function created in the object is known as method 
    draw : function(){
        console.log('this is a rectangle');

        console.log("This is a Rectangle with length of " + this.length +" units and width of "+this.width+" units ");
    }
}

console.log(rectangle);
console.log(rectangle.draw);
console.log(rectangle.draw());
