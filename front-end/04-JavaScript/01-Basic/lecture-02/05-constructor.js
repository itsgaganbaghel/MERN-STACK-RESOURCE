// The constructor - is a Property that shows how object is made 

// koe bhi obbject ki Property jo show karta hai ki Object bana kese hai 


function Rect(len, wid){
    this.length = len ;
    this.width = wid ;
    this.text = 'demo' ;
    this.draw = function(){
        console.log("Drawing a rectangle with length : "+this.length+" and width: "+this.width);
    }
};


let rect3 = new Rect(50,70) ;
console.log(rect3);

// rect3.constructor;  // write this in console of the web browser 