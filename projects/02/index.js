// const buttons = document.querySelectorAll('.btn')
// // console.log(buttons);

// const body = document.querySelector("body");

// // buttons.forEach( function (button)  {
// buttons.forEach( button => {
//     // console.log(button);
//     button.addEventListener("click" , function(e) {
//         // console.log(e);
//         // console.log(e.target);
        
//         if(e.target.id === 'pink') {
//             body.style.backgroundColor = e.target.id ;
//         }

//         if(e.target.id === 'Red') {
//             body.style.backgroundColor = e.target.id ;
//         }

//         if(e.target.id === 'Blue') {
//             body.style.backgroundColor = e.target.id ;
//         }

//         if(e.target.id === 'Green') {
//             body.style.backgroundColor = e.target.id ;
//         }

//         if(e.target.id === 'Yellow') {
//             body.style.backgroundColor = e.target.id ;
//         }

//         if(e.target.id === 'Orange') {
//             body.style.backgroundColor = e.target.id ;
//         }
//     })
// }) ;


const getColor = () => {
    const randomNumber =  Math.floor(Math.random() * 16777215) ;
    const randomCode = "#" + randomNumber.toString(16) ;
    console.log(randomNumber , randomCode);

    document.body.style.backgroundColor = randomCode ;

    document.getElementById("color_code").innerText = randomCode ;
    // navigator.clipboard.writeText(randomCode);
}
document.getElementById("btn").addEventListener('click', function () {
    getColor();
})

getColor ();

const copyColor = () => {
    const randomNumber =  Math.floor(Math.random() * 16777215) ;
    const randomCode = "#" + randomNumber.toString(16) ;
    console.log(randomNumber , randomCode);

    document.body.style.backgroundColor = randomCode ;

    document.getElementById("color_code").innerText = randomCode ;

    navigator.clipboard.writeText(randomCode);
}

document.querySelector('.copy').addEventListener('click' , function(){
    copyColor () ;
})

let btn = document.getElementById("btn");
// console.log(btn);

// // function for random
// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// function changeBody() {
//   let red = random(255);
//   let green = random(255);
//   let blue = random(255);
//   let color = `rgb(${red}, ${green}, ${blue})`;
//   document.body.style.backgroundColor = color;
// }

// // add event listener
// btn.addEventListener("click", changeBody);