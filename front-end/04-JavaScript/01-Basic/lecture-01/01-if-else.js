let a = 5 , b=10;
console.log(a);
console.log(b);

if(a>b){
    let c = a+10;
    console.log(c);
}
else{
    c = b+10 ;
    console.log('output is ' + c);
}

// ternary operator 
console.log((a>b) ? a+10 : b+10 ); // 20
