
// 2. referance - copied by their address i.e.., changes in both  [array, object , function]

let objA = {name:'John',age:30};
let objB = objA;
console.log(objA);
console.log(objB);

objB.name='Jane';
console.log(objA);
console.log(objB);

// ie., in referance datatype we can't copy values directly as we copy in primitive dataype
// because in this datatype we get the address not the exact value 


