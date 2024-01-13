// UI feature to hide Intro
document.getElementById("intro-btn").addEventListener("click", function () {
    document.getElementById("intro").classList.add("hide");
});
// Game object to hold global variable that the game will edit as needed
const gameObject = {
    bank: 1000,
    playerName: "",
    playerTime: 0,
    moveTime: 0,
    updateBankDiv() {
        document.getElementById("bank").innerHTML = this.bank;
    }, // game object method
    startGameTime() {
        setInterval(() => {
            this.playerTime += 1;
        }, 1000)
    },
    getPlayerName() {
        this.playerName = prompt("Enter Player Name");
        console.log("player name set to " + this.playerName);
    }
}

//click startbutton
document.getElementById("start").addEventListener("click", () => {
    gameObject.updateBankDiv();
    gameObject.getPlayerName();
    gameObject.startGameTime();
    generateCards();
    shuffleCards();
    getTarget();
    timerFunc();
})

// Intialise Empty Card data array to recieve fetch response data
let cardData = [];

// fetch data from json file
fetch("./assets/cards.json")
    .then((response) => response.json())
    .then((data) => {
        cardData = [...data, ...data];
    })

let gridContainer = document.querySelector(".gridContainer");
let generateCards = () => {
    console.log(cardData);
    for (card of cardData) {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
        <div class="front">
            <img class="front-image" src=${card.image} />
            </div>
            <div class="back"></div>
        `;
        gridContainer.appendChild(cardElement);
    }
};

// display a target
let getTarget = () => {
    let targetArr = ["TSLA", "AAPL", "MSFT"];
    let targetIndex = Math.floor(Math.random() * targetArr.length);
    document.getElementById("targetCo").innerHTML = targetArr[targetIndex];
};

// shuffle the deck
let shuffleCards = () => {
    let currentIndex = cardData.length,
        randomIndex, temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardData[currentIndex];
        cardData[currentIndex] = cardData[randomIndex];
        cardData[randomIndex] = temporaryValue;
    };
};

// start timer
let timerFunc = () => {
    gameObject.moveTime = Math.floor(Math.random() * 100);
    document.getElementById("counter").innerHTML = gameObject.moveTime;
};

let reduceMoveTime = () => {
    gameObject.moveTime === typeof "number" ? gameObject.moveTime : 0; // check is a number
    gameObject.moveTime = Math.max(0, gameObject.moveTime -1); // set limit to avoid negative numbers and reduce by 1
    document.getElementById("counter").innerHTML = gameObject.moveTime; // update HTML
};

setInterval(reduceMoveTime,1000); // call function every second

// select cards

// compare cards

// update results

// win loose

// update scoreboard