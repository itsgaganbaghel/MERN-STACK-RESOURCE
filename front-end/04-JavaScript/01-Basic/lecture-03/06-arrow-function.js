// arrow function 
// remove 'function' & add '=>' like -> ' (course) => '
// if i/p parameter is single then remove () like course =>
// if there is only single line of code then remove return & {} 
// like course => course.name === 'gagan'

let course = courses.find(function(course){
    return course.name === 'gagan'
})  

console.log(course);
// convert into arrow function 
let courseNew = courses.find(courseNew => course.name === 'gagan');

console.log(courseNew)