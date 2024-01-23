// ------------- Fixes and Bugs -------------- 
// Pressing execute with no cards selected should return an error to the user not the console - error handling?
//  Use JSHint.com to validate JS, select config for ES6 before running tests
//
// -------------------------------------------


// UI feature to hide Intro
document.getElementById("intro-btn").addEventListener("click", function () {
    document.getElementById("intro").classList.add("hide");
});
// Game object to hold global variables that the game will access and update as needed
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
        }, 1000)
    },
    getPlayerName() {
        this.playerName = prompt("Enter Player Name");
        console.log("player name set to " + this.playerName);
    },
}
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
    // remove start button listener to avoid repeated clicks???
}, {once: true});
// Intialise Empty Card data array to recieve fetch response data
let cardData = [];
// Code re-used from youtube resource see ReadMe
// fetch data from json file
fetch("./assets/cards.json")
    .then((response) => response.json())
    .then((data) => {
        cardData = [...data, ...data];
    })
// Generate card elements
let generateCards = () => {
    let gridContainer = document.querySelector(".gridContainer"); // Move inside thew function no need to be in the global space
    gridContainer.innerHTML = ""; // make empty container to remove old content
    console.log(cardData);
    for (const card of cardData) { // make const the the card variable is available in the global space for use and updating by other functions
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
// display a target
let getTarget = () => {
    let targetArr = ["TSLA", "AAPL", "MSFT"];
    let targetIndex = Math.floor(Math.random() * targetArr.length);
    document.getElementById("targetCo").innerHTML = targetArr[targetIndex];
    gameObject.targetCard = targetArr[targetIndex];
};
// shuffle the deck - Code from youtube resource amended to integrate - See ReadMe
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
}; // End of Code Re-use from YouTube Resource
// start timer
let timerFunc = () => {
    gameObject.moveTime = Math.floor(Math.random() * 100);
    document.getElementById("counter").innerHTML = gameObject.moveTime;
};
let reduceMoveTime = () => {
   // gameObject.moveTime === typeof "number" ? gameObject.moveTime : 0; // check is a number ---------- Discuss with Dave
    gameObject.moveTime = Math.max(0, gameObject.moveTime -1); // set limit to avoid negative numbers and reduce by 1
    document.getElementById("counter").innerHTML = gameObject.moveTime; // update HTML
    if (gameObject.gameStarted == true && gameObject.moveTime === 0){
        gameObject.bank -= 100;
        gameObject.updateBankDiv();
        checkWin();
    };
};
setInterval(reduceMoveTime,1000); // call function every second
// select cards
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
        console.log({gameObject});
        return;
        }
        gameObject.cardTwo = this;
        gameObject.boardLock = true;
    }
};
// compare cards on execute button
document.getElementById("execute").addEventListener("click", () => {
    compareCards();
    checkWin();
    shuffleCards();
    generateCards();
    getTarget();
    timerFunc();
})
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
    }catch (error) {
        if (error instanceof TypeError){
            alert("Please select two cards before clicking Execute");
            this.location.reload();
        };
    };
};
// Check for win or loose
let checkWin = () => {
    if (gameObject.bank >= 2000) {
        alert("Congratualtions you Won in " + gameObject.playerTime + " seconds");
        updateScoreboard();
    }else if (gameObject.bank === 0){
        alert("Game Over, Better Luck Next Time " + gameObject.playerName + "!")
        resetGame();
    }
};
// update scoreboard
let updateScoreboard = () => {
    gameObject.playerScore = gameObject.bank / gameObject.playerTime; 
    document.getElementById("pName").innerHTML = `<td>${gameObject.playerName}</td>`;
    document.getElementById("pScore").innerHTML = `<td>${gameObject.playerScore}</td>`;
    // resetGame()
    sessionStorage.setItem(gameObject.playerName, gameObject.playerScore); // Feature to store highscores in window session only
};
// Refresh page after game play finished
let resetGame = () => {
    this.location.reload();
}