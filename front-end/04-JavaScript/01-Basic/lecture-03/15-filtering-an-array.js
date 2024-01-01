// Filtering Array
let filterArr = [1,2,3,4,5,0,-1,-2,-3,-4,-5];
let no = filterArr.filter(function(value){
    return value >= 0 ;
});
console.log(no);
// convert into arrow function
let num = filterArr.filter(value => value >0);
console.log(num);