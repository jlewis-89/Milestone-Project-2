// UI feature to hide Intro
document.getElementById("intro-btn").addEventListener("click", function () {
    document.getElementById("intro").classList.add("hide");
});
// Game object to hold global variables that the game will access and update as needed
const gameObject = {
    bank: 1000,
    playerName: "",
    playerTime: 0,
    playerScore: 0,
    moveTime: 0,
    targetCard:"",
    boardLock: false,
    cardOne: null,
    cardTwo: null,
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
    gameObject.getPlayerName(); // uncomment after tesing
    gameObject.startGameTime();
    generateCards();
    shuffleCards();
    getTarget();
    timerFunc();
    // remove start button listener to avoid repeated clicks???
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
        cardElement.addEventListener("click", selectCards);
    }
};

// display a target
let getTarget = () => {
    let targetArr = ["TSLA", "AAPL", "MSFT"];
    let targetIndex = Math.floor(Math.random() * targetArr.length);
    document.getElementById("targetCo").innerHTML = targetArr[targetIndex];
    gameObject.targetCard = targetArr[targetIndex];
};

// shuffle the deck - Code from youtube resource - See ReadMe
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
function selectCards() {
    if (gameObject.boardLock) return;
    if (this === gameObject.cardOne) return;
    
    this.classList.add("flipped");
    
    if (!gameObject.cardOne){
        gameObject.cardOne = this;
        console.log({gameObject});
        return;
    }
    gameObject.cardTwo = this;
    gameObject.boardLock = true;  
};

// compare cards on execute button
document.getElementById("execute").addEventListener("click", () => {
    
    gameObject.moveTime === 0 ? (gameObject.bank -= 100, gameObject.updateBankDiv()) : compareCards();
    timerFunc();
    checkWin();
    shuffleCards();
    getTarget();
    timerFunc();
})

let compareCards = () =>{
    if (gameObject.cardOne.dataset.name !== gameObject.cardTwo.dataset.name || gameObject.cardTwo.dataset.name != gameObject.targetCard){
        gameObject.bank -= 100;
        gameObject.updateBankDiv();
        alert("Try Again");
        gameObject.cardOne.classList.remove("flipped");
        gameObject.cardTwo.classList.remove("flipped");
        gameObject.cardOne = null;
        gameObject.cardTwo = null;
        gameObject.boardLock = false;
    } else if (gameObject.cardOne.dataset.name === gameObject.cardTwo.dataset.name && gameObject.cardTwo.dataset.name == gameObject.targetCard){
        gameObject.bank += 100;
        gameObject.updateBankDiv();
        gameObject.cardOne.classList.remove("flipped");
        gameObject.cardTwo.classList.remove("flipped");
        gameObject.cardOne = null;
        gameObject.cardTwo = null;
        gameObject.boardLock = false;
    }
    console.log("compareCards Function Ran");
    shuffleCards();
};

// win loose
let checkWin = () => {
    if (gameObject.bank >= 2000) {
        alert("Congratualtions you Won in " + gameObject.playerTime + " seconds");
        updateScoreboard();
    }
    console.log("checkWin Function ran");
};

// update scoreboard
let updateScoreboard = () => {
    gameObject.playerScore = gameObject.playerTime * gameObject.bank; 
    document.getElementById("pName").innerHTML = `<td>${gameObject.playerName}</td>`;
    document.getElementById("pScore").innerHTML = `<td>${gameObject.playerScore}</td>`;
    console.log("updateScoreboard Function ran");
    sessionStorage.setItem(gameObject.playerName, gameObject.playerScore); // Feature to store highscores in window session only
};