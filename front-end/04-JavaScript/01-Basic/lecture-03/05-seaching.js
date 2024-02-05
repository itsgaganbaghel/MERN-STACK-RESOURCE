                                    // Searching - 
                        // primitive  - we use indexof & includes
// console.log(numbers);
// o/p - 7 
num = [1,20,30,40,50]
console.log(num.indexOf(15));
// o/p -> -1 -> if no. is not exit in the array 

// check whether a No. is exit in an array or not .No
// basic method is  
if(num.indexOf(3) != -1)
{
    console.log("Present");
}
// good practice 
console.log(num.includes(20));  // value present or not in the given array

console.log(num.indexOf(20, 1) ); // indexof(number , index no. ) in this given index no. is start from the next no. 

                        // for reference - we use callback function
let courses = [
    {no:1 , name:"gagan"} ,
    {no:2 , name:"baghel"}
]

console.log(courses);

console.log(courses.indexOf({no:1 , name:"gagan"}));
// o/p = -1 
console.log(courses.includes({no:1 , name:"gagan"})); 
// o/p = false

// we use callback function - 
// callback function is a function passed into another function as an argument, which is then invoked
// inside the outer function to some kind Of routine action.

// normal way / notation 
let course = courses.find(function(course){
    return course.name === 'gagan'
})  

console.log(course);

// sytnax - 
// variable  = arrayName.find(function(variable){
//     return vriable.(condition)
// })
let lname = courses.find(function(ln){
    return ln.name === "baghel";
})
console.log(lname);

let FName = courses.find(function(name){
    return name.no === 1;
})
console.log(FName);
