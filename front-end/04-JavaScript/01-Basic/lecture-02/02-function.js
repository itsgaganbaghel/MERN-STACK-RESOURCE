function functionName (para , meters){
    // code here
    return para + meters ;
}
let results = functionName("Hello" ,"World");
console.log(results);              // Hello world 
results = functionName(2 ,5);      // 7 
console.log(results);

// now make a simple function of addition of 2 numbers in a proper way 

function add(a,b){
    return a+b;
}
console.log(add(3,8));

function multiple ( a ,  b ){
    // let ans = a * b ;
    console.log( a * b);
}

let ans = multiple(3,4);
console.log(ans);
console.log(multiple(4, 5));