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
    let targetCo = document.querySelector("#targetCo");
    let executeBtn = document.getElementById("execute");
    let inGame = document.getElementById("inGame");
    let counter = document.getElementById("counter");
    let moveTime = 0;
    let pScore = 10000;

        // START OF GAME FUNCTION

        function gameFunc(coTicker){
            
            console.log("gameFunc ran")
            startGame.innerHTML = "Stop";
            bank.innerHTML = "1000";
            inGame.innerText = "Double Click Stop to Exit!";
            counter.innerHTML = moveTime;
            updateTimer();
            

            
            
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
                console.log(targetTicker); //testing function
                targetCo.innerHTML = targetTicker;
                updateTimer();
                
            });

            setInterval(countDown, 1000); // Call countdown function every second

            console.log("Game State is " + gameRun)
        }; 
        
        // END OF GAMEFUNC
        
        // Generate Random Time, check its not 0 (if so make it 10)
        function updateTimer() {
        if (moveTime === 0){
            moveTime = 10;
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
        startGame.innerHTML = "Start";
        bank.innerHTML = "";
        targetCo.innerHTML = "";
        inGame.innerText = "";
        counter.innerHTML = "00s";
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
}

    function gameOverLost (){
        alert("Game Over!! Better Luck Next Time")
    };

    function gameOverWin (){
        alert("Congratulations You WON!")
        userName();
    };

// Initalise the Card Deck by grabbing the data from the json file holding tyhe card object and name - Youtube project
    fetch("assets/cards.json")
        .then((res) => res.json())
        .then((data) => {
            cardDeck = [...data, ...data];
        });

    

    

    

    


}); // End of DOM Loader

