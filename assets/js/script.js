// UI feature to hide Intro
document.getElementById("intro-btn").addEventListener("click", function () {
    document.getElementById("intro").classList.add("hide");
});

const gameObject = {
    bank: 1000,
    playerName: "",
    playerTime: 0,
    updateBankDiv() {
        document.getElementById("bank").innerHTML = this.bank;
    },
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
    // setTimer();
    // setBank();
    getTarget();
})

// if (gameObject.playerName !=""){
//     document.getElementById("pName").appendChild(`<td>${gameObject.playerName}<td>`);}
// let cardData = [];
//generate cards
let cardData = [];

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

//set value in bank to 1000

// display a target
let getTarget = () => {
    let targetArr = ["TSLA", "AAPL", "MSFT"];
    let targetIndex = Math.floor(Math.random() * targetArr.length);
    document.getElementById("targetCo").innerHTML = targetArr[targetIndex];
};


// shuffle the deck

// start timer

// select cards

// compare cards

// update results