let cardContainer = document.querySelector(".card-container");
let originalCard = document.querySelector(".card");

function createCard() {
    for (let i = 0; i < 7; i++) {
        let newCard = originalCard.cloneNode(true);
        cardContainer.appendChild(newCard);
    }
}

createCard();