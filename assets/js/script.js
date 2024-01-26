// Hide Instructions
document.getElementById("intro-btn").addEventListener("click", function () {
    document.getElementById("intro").classList.add("hide");
});
// Show Instructions
document.getElementById("showIntro").addEventListener("click", function() {
    document.getElementById("intro").classList.remove("hide");
});
// Game object hold global variables
const gameObject = {
    gameStarted: false,
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
        }, 1000);
    },
    getPlayerName() {
        this.playerName = prompt("Enter Player Name");
    },
};
//click startbutton
document.getElementById("start").addEventListener("click", () => {
    gameObject.updateBankDiv();
    gameObject.getPlayerName();
    gameObject.startGameTime();
    shuffleCards(); // Uncomment after testing
    generateCards();
    getTarget();
    timerFunc();
    gameObject.gameStarted = true;
}, {once: true});
// Intialise Empty Card data array
let cardData = [];
// Code re-used from youtube resource see ReadMe
// fetch data from json file
fetch("./assets/cards.json")
    .then((response) => response.json())
    .then((data) => {
        cardData = [...data, ...data];
    });
// Generate card elements
let generateCards = () => {
    let gridContainer = document.querySelector(".gridContainer");
    gridContainer.innerHTML = "";
    for (const card of cardData) {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
        <div class="front">
            <img class="front-image" alt="${card.name}" src=${card.image} />
            </div>
            <div class="back"></div>
        `;
        gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", selectCards);
    }
}; // End of Code Reuse from YouTube Resource
// Select target
let getTarget = () => {
    let targetArr = ["TSLA", "AAPL", "MSFT"];
    let targetIndex = Math.floor(Math.random() * targetArr.length);
    document.getElementById("targetCo").innerHTML = targetArr[targetIndex];
    gameObject.targetCard = targetArr[targetIndex];
};
// Shuffle deck - Code from youtube resource adapted for needs - See ReadMe
let shuffleCards = () => {
    let currentIndex = cardData.length,
        randomIndex, temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cardData[currentIndex];
        cardData[currentIndex] = cardData[randomIndex];
        cardData[randomIndex] = temporaryValue;
    }
}; // End of Code Re-use from YouTube Resource
// Start timer
let timerFunc = () => {
    gameObject.moveTime = Math.floor(Math.random() * 100);
    document.getElementById("counter").innerHTML = gameObject.moveTime;
};
let reduceMoveTime = () => {
    gameObject.moveTime = Math.max(0, gameObject.moveTime -1);
    document.getElementById("counter").innerHTML = gameObject.moveTime;
    if (gameObject.gameStarted == true && gameObject.moveTime === 0){
        gameObject.bank -= 100;
        gameObject.updateBankDiv();
        checkWin();
    }
};
let gameInterval = setInterval(reduceMoveTime,1000);
function selectCards() {
    if(this.classList.contains("flipped")){
        this.classList.remove("flipped");
        if(this === gameObject.cardOne){
            gameObject.cardOne = null;
        }else{
            gameObject.cardTwo = null;
        }
        gameObject.boardLock = false;
    }else{
        if (gameObject.boardLock) return;
        this.classList.add("flipped");
        if (this === gameObject.cardOne) return;   
        if (!gameObject.cardOne){
        gameObject.cardOne = this;
        return;
        }
        gameObject.cardTwo = this;
        gameObject.boardLock = true;
    }
}
// Execute button
document.getElementById("execute").addEventListener("click", () => {
    compareCards();
    checkWin();
    shuffleCards();
    generateCards();
    getTarget();
    timerFunc();
});
let compareCards = () =>{
    try{
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
    } catch (error) {
        if (error instanceof TypeError){
            alert("Please select two cards before clicking Execute");
            this.location.reload();
        }
    }
};
// Check win/loose
let checkWin = () => {
    if (gameObject.bank >= 2000) {
        alert("Congratualtions you Won in " + gameObject.playerTime + " seconds");
        updateScoreboard();
        clearInterval(gameInterval);
    }else if (gameObject.bank === 0){
        alert("Game Over, Better Luck Next Time " + gameObject.playerName + "!");
        resetGame();
    }
};
let updateScoreboard = () => {
    gameObject.playerScore = Math.floor(gameObject.bank *1000 / gameObject.playerTime); 
    document.getElementById("pName").innerHTML = `<td>${gameObject.playerName}</td>`;
    document.getElementById("pScore").innerHTML = `<td>${gameObject.playerScore}</td>`;
};
// Refresh game
let resetGame = () => {
    this.location.reload();
};