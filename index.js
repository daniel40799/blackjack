
let player = {
    name: "Dan",
    chips: 100
}



let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i =0; i<cards.length; i++){
        cardsEl.textContent+= cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"


function newCard(){
    if(isAlive===true && hasBlackJack===false){
    console.log("Drawing a new card from the deck")
    let card = getRandomCard();
    sum+=card;
    cards.push(card)
    console.log(cards)
    renderGame();
    }
}



function getRandomCard(){
    let cardNumber = Math.floor(Math.random()*13)+1
    if(cardNumber===1){
        return 11
    }
    else if(cardNumber>10){
        return 10
    }
    else{
        return cardNumber
    }
}
