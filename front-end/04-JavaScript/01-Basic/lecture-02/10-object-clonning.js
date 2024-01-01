
                    // Object Cloning 

// there are 3 ways of cloning the object in js 
// 1. iteration 2. assign 3. spread

let demoObj = {
    length : 3,
    width : 5
};
console.log("Object before modification: ",demoObj);

// 1. iteration method of object cloning 

// let object2 = {};

// for (let key in  demoObj){
//     object2[key] = demoObj[key];
// }

// console.log(object2);

// 2. assign method of object cloning 

let object2 = Object.assign({},demoObj);
console.log(object2);

// here,  
// {} -> blank object for a object2
// demoObj -> source object from which we want to clone

// 3. spread method of object cloning {...}

// let object2 = {... demoObj};
// console.log(object2);

object2.color = 'red';
console.log(object2);
console.log('Object after modification: ',demoObj ,' no changes - successful cloning  ');  // no changes - successful cloning 


