                
                // Constructive function 

// In this we follow on NOTATION - "PASCAL NOTATION" -> Every first letter of word should be capital 
// constructive function - property/method -> intialise / define . 
function Rect(len, wid){
    this.length = len ;
    this.width = wid ;
    this.text = 'demo' ;
    this.draw = function(){
        console.log("Drawing a rectangle with length : "+this.length+" and width: "+this.width);
    }
};
console.log(new Rect(3,5));

// object creation using constructive function
// new -> gives a blank Object 
let rect1 = new Rect(5,7) ;
console.log(rect1);
let rect2 = new Rect(9,8) ;
console.log(rect2);

// addition of values in created objects
rect1.txt ='Gagan ';
console.log(rect1);

rect2.name = 'Gagan Baghel';
console.log(rect2);

// deletion of values in the created objects 
delete rect1.text;
console.log(rect1);

delete rect2.name;
console.log(rect2);

