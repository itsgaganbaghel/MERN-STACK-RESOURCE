
const get = (element) => document.getElementById(`${element}`);

let sum = get('#sum')
let sub = get('#sub')
let multi = get('#multi')
let div = get('#div')
let rem = get('#rem')
let ouptut = get('#display')
let tab = get('#table')
// let target = document.querySelectorAll('td')

function calculator(task, a, b) {
    return task(a, b);
}
sum = (m, n) => m + n;
sub = (m, n) => m - n;
multi = (m, n) => m * n;
div = (m, n) => m / n;
rem = (m, n) => m % n;

console.log(calculator(sum, 10, 5));

let val = " ";

// val += 

// tab.addEventListener('click' , (e)=>{
//     target.forEach(elem => {
//         if(elem == 1) 
//     });
// })

let targets = document.querySelectorAll('input')
let dis = get('#displayInput')
let chnage = () => {}

let f = get('#f')
f.addEventListener('click' , () => {
    targets.array.forEach(e => {
        dis.value += e.value ;
    });
})

