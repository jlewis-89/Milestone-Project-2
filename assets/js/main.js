// Prevent Script from Running Before DOM Loaded
document.addEventListener("DOMContentLoaded", function () {
    // Hide Intro Paragraph to Imporve UI & UX
    let introHide = document.getElementById("intro");


    // Hide Instruction paragraph for better UX
    introHide.addEventListener("click", function () {
        introHide.classList.add("hide");
    });

    // Test Script Running
    console.log("Hello World");

    // Game Core Logic and Variables
    let gameRun = false;
    let cardDeck = [];
    let coTicker = ["TSLA", "MSFT", "AAPL"];
    let startGame = document.getElementById("start");
    let bank = document.getElementById("bank");
    let targetCo = document.getElementById("targetCo");
    let executeBtn = document.getElementById("execute");
    let inGame = document.getElementById("inGame");
    let counter = document.getElementById("counter");
    let moveTime = 0;
    let pScore = 10000;
    let gridContainer = document.querySelector(".gridContainer");
    let firstCard, secondCard;
    let locked = false;

    fetch("assets/cards.json")
        .then((response) => response.json())
        .then((data) => {
            cardDeck = [...data, ...data];
            console.log("fetch read json doc");
            console.log(typeof(data));
            console.log(data);
            console.log(cardDeck[0].name);
        });

    function shuffleDeck() {
        let currentIndex = cardDeck.length,
            randomIndex, temporaryValue;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cardDeck[currentIndex];
            cardDeck[currentIndex] = cardDeck[randomIndex];
            cardDeck[randomIndex] = temporaryValue;
            console.log("deck Shuffled");
        };
    };

    function generateCards() {
        for (let card of cardDeck) {
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
            cardElement.addEventListener("click", flipCard);
            console.log("cards generated");
        };
    };

    function flipCard() {
        if (locked) return;
        if (this === firstCard) return;

        this.classList.add("flipped"); // TypeError ???

        if (!firstCard) {
            firstCard = this;
            return console.log("testing card grab" + firstCard["data-name".value]);
        }
        secondCard = this;
        // locked = true;
        // checkMatch();
        console.log("flipcard called");
    };

    function checkMatch() {
        console.log(firstCard);
        console.log(firstCard.dataset["name"]);
        console.log(secondCard.dataset.name);
        // console.log(" firstCard dataset name is" + firstCard.dataset.name);
        console.log("check match called");
        // console.log(typeof(firstCard.dataset.name));
        if (firstCard.dataset.name === secondCard.dataset.name){
            if(secondCard.dataset.name === targetTicker){
                
                disableCards();
                shuffleDeck();
                pScore += 200;
                bank.innerHTML = pScore;
                console.log("cards Match target")
            };
        }else{
            unflipCards();
            console.log("cards dont match!")
        };  
    };

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
        console.log("cards removed");
    };

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            resetBoard();
        }, 500);
        console.log("unflip cards");
    };

    function resetBoard() {
        firstCard = null;
        secondCard = null;
        locked = false;
        console.log("reset board called");
    };
// Moved Out of Game Function
    // Target Generator
    function newTarget(coTicker) {
        let targetIndex = Math.floor(Math.random() * coTicker.length);
        return coTicker[targetIndex];
    }
    let targetTicker = newTarget(coTicker);
    console.log(targetTicker);

    // Update Page with Ticker Target
    targetCo.innerHTML = targetTicker;
    
    executeBtn.addEventListener("click", () => {
        targetTicker = newTarget(coTicker); // call newTarget function and update target Ticker
        console.log("tagetget is " + targetTicker); //testing function
        targetCo.innerHTML = targetTicker;

        executeButtonPressed();
    });

    function executeButtonPressed() {
        
        checkMatch();
        // resetBoard();
        
        updateTimer();
    };
   
    function gameFunc(coTicker){
            
        console.log("gameFunc ran")
        startGame.innerHTML = "Reset";
        bank.innerHTML = pScore;
        inGame.innerText = "Double Click to Reset";
        counter.innerHTML = moveTime;
        updateTimer();
        shuffleDeck();
        generateCards();
        // flipCard();
        // unflipCards();  

        console.log(targetTicker);

        setInterval(countDown, 1000); // Call countdown function every second
        console.log("Game State is " + gameRun)
     
    }; 
        
        // Generate Random Time, check its not 0 (if so make it 10)
    function updateTimer() {
        if (moveTime === 0){
            moveTime = 15;
        } else { moveTime = Math.floor(Math.random() * 100); }; // Prevent moveTime = 0
        counter.innerHTML = moveTime; // Update moveTime
        console.log("move time is " + moveTime);
    };

   
    
    // Countdown the Timer interval
    function countDown() {
        moveTime = typeof moveTime === 'number' ? moveTime : 0; //Check moveTime initailised at a number to fix NaN bug
        moveTime = Math.max(0, moveTime - 1); //minus 1 from moveTime up to a max of 0
        console.log("countDown called");
        counter.innerHTML = moveTime; // Update moveTime
    };


    // Call to start / stop game
    let startGameHandler = () => {
        gameRun = !gameRun;
        gameFunc(coTicker);
        console.log("startgame Event Clicked " + gameRun);
        setTimeout(toggleTest, 1500);  // test gameRun state every 1500ms
    };

    startGame.addEventListener("click", startGameHandler);

    let toggleTest = () =>{
        if (gameRun = !gameRun){
        // startGame.innerHTML = "Start";
        // bank.innerHTML = "";
        // targetCo.innerHTML = "";
        // inGame.innerText = "";
        // counter.innerHTML = "00s";
        this.location.reload()
        
        console.log("toggle func triggered");
        };
    };

    let userName = () => {
    let pName = prompt("Enter Player Name");
    console.log(pName);
    playerName.innerHTML = pName;
    pScore = document.getElementById("bank").innerHTML;
    };

    let playerName = document.getElementById("playerName");

    if (pScore === 0){
    gameOverLost();
    }else if (pScore === 20000){
    gameOverWin();
    };

    function gameOverLost (){
        alert("Game Over!! Better Luck Next Time")
    };

    function gameOverWin (){
        alert("Congratulations You WON!")
        userName();
    };

}); // End of DOM Loader

