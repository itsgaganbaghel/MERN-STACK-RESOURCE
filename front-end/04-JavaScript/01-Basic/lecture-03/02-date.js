// Date Object 
// date in js - we can directly refer from internet - mdn 
// in this , indexing is start from 0 for month
// get  - output
// Set - input 
// for example 
// let today = new Date();
// console.log(today);

let todaysDate = Date();
console.log("todaysDate is: " + todaysDate);

// new Date() creates a date object with the current date and time:

todaysDate = new Date();
console.log("todaysDate is: " + todaysDate);

todaysDate = new Date(2023,11,30);
console.log("todaysDate is: " + todaysDate);

todaysDate =  new Date("2023-12-30");   // here indexing of months start from 1 to 12 as normally used
console.log("todaysDate is : "+ todaysDate);

todaysDate  = new Date("October 13, 2014 11:13:00"); // create a date object from a date string 
todaysDate  = new Date("Oct 13, 2014 11:13:00"); // create a date object from a date string 
console.log("todaysDate is : "+ todaysDate);

todaysDate = new Date(2023,11,30,11,7,20)   // yyy,mm,dd,hr,min,s,ms - year-month-day-hours-mint.-second-millisecond 
console.log("todaysDate is : "+ todaysDate);

console.log(todaysDate.toString()); // normal date and time

console.log(todaysDate.toDateString());  // day + full date 
// returns a string representing the date portion of the Date object. The format of the string depends on the host environment's locale settings.

console.log(todaysDate.toTimeString()); // time only

console.log(todaysDate.toISOString());
console.log(todaysDate.toUTCString());
console.log(todaysDate.toJSON());
console.log(todaysDate.toLocaleString());
console.log(todaysDate.toLocaleDateString());
console.log(todaysDate.toLocaleTimeString());

// Get Method - accessing the values from the object or updated  object of date 
// todaysDate = new Date();
console.log("Year : "+todaysDate.getFullYear()) ; // returns year (4 digits)
console.log("Month : "+todaysDate.getMonth());
console.log("Day : "+todaysDate.getDay());
console.log("Hours : "+todaysDate.getHours());
console.log("Minutes "+todaysDate.getMinutes());
console.log("Seconds "+todaysDate.getSeconds());

// Set values - in the object  of date 
todaysDate.setFullYear(2025);    // sets year (4 digits)
console.log(todaysDate);

let birthday = new Date();
console.log(birthday);

// birthday.setFullYear(2003);
birthday.setYear(2003);
console.log(birthday);

birthday.setMonth(2); //march
console.log(birthday);

birthday.setDate(16);
console.log(birthday);

let demo = Date();
console.log(demo);

demo = new Date();
console.log("Today is : " + demo.getDate());
console.log("Today is : " + demo.getDay());  // week 0-6 {0-sunday ..... 6-saturday1}

