            
            // for of loop  [ Apply at arrays ]
    
let demoRectangle = {
    length: 1,
    width : 2
};

// for(let key  of Object.keys(demoRectangle)){  // access only keys 
for(let key  of Object.entries(demoRectangle)){  // access both keys and values 

    console.log(key);
}

// Object.entries - > create an empty array of keys of the object (demoRectangle);