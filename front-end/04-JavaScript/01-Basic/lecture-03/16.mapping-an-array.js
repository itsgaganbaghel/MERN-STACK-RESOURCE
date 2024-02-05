// Mapping Arrays - agar apko map ki each element of array to something else. ie., somthing is connected with some value 
let mapArray = [20,35,60,78,10];
let items = mapArray.map(function(value){
    return 'student_marks: ' + value;
})
console.log(items);
// convert into arrow function
let item = mapArray.map(value => 'student-marks: ' + value);
console.log(item);

// value ki jaga - kuch bhi likh shakte hai . 
let num = [1,2,3,4,5]
let mapObjCreation = num.map(function(value){
    return {poitive_numbers : value ,
            double_numbers  : value * 2 };
}) ;
console.log(mapObjCreation);

// arrow function : 
let mapObjArrowFunction = num.map(value => {
    return {poitive_numbers : value ,
        double_numbers  : value * 2 };
});
console.log(mapObjArrowFunction);