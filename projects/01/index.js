
const endDate = " 16 febuary 2024 8:30 AM";                 // create a varibale that holds the targeted date     
 
document.getElementById('end-date').innerText = endDate ;  // for changing the display text of the targeted date , we get that from id and set equal to the given targeted date 
const inputs = document.querySelectorAll('input') ;        //  select all inputs 


const clock = () => {                                      // make a function 
    const end = new Date(endDate);                         // create a variable that is equal to the object of the date that holds the targeted date 
    const now = new Date();                                // create a variable that holds the current value 
    // console.log(end,now) ;

    const diff = ( end - now ) / 1000 ;                    // find difference b/w targeted date and current date and divide by 100 for getting the value in seconds
    // console.log(diff);
    if (diff < 0 ) return ;                                // make a condition for a case in which the target date is achieved so, for stoping the proces / loop / calculation  else we get negative values  
    
    // console.log(Math.floor(diff / 3600 / 24 ));            // convert into days
    inputs[0].value =  Math.floor(diff / 3600 / 24 );      // set the days values 
    
    // console.log(Math.floor(diff / 3600 ) % 24 );           // convert into Hours 
    inputs[1].value =  Math.floor(diff / 3600 ) % 24;      // set the Hours values 

    // console.log(Math.floor(diff / 60 ) % 60 );             // convert into Minutes
    inputs[2].value =  Math.floor(diff / 60 ) % 60 ;       // set the Minutes values 
    
    // console.log(Math.floor(diff ) % 60  );                 // convert into Seconds
    inputs[3].value =  Math.floor(diff ) % 60 ;            // set the seconds values 


}
clock();                                                   // first call of the function 


// 1 day = 24 hrs
// 1 hr = 60 mins
// 60 min = 3600 sec

setInterval(                                               // for printing the values after every seconds 
    () => {
        clock();                                           // call clock function 
    }   
    , 1000                                                // set the duration after that this function call the clock funtion i,e., 1000 = 1 second
)