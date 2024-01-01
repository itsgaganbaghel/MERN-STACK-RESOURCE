 
 // for in loop  [ Helps in accessing all keys and values ]

// step -01 - first we create an object 

let demoObject = {
    name: "John",
    age: 30
};

// step 02 - for in loop  - { we make a for loop in object i.e. for in loop }

// testObject - keys { keys majorly used } - u can take any name .
for(let testObject in demoObject){
    // console.log(`${testObject}: ${demoObject[testObject]}`);

    // console.log(testObject); // print the keys - name & age only 

    // console.slog(demoObject[testObject]); // print the values of keys - john & 30 

    console.log(testObject, demoObject[testObject]); // print both keys and values of the demoObject.


}