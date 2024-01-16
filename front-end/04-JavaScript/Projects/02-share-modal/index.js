// modal - social media 


// const modal = document.querySelector(".container");
const card = document.querySelector("#card") ;

console.log(card);
// console.log(overlay);

const openModal = () => {
    console.log("modal is open");
    card.classList.add("active")

    // card.style.scale = '1.1';
    // overlay.classList.add("overlay");
}

const closeModal = () => {
    console.log("modal is close ");
    // card.style.scale = '0';

    // overlay.classList.remove("overlay");
}