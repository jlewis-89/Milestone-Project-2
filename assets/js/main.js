// Prevent Script from Running Before DOM Loaded
document.addEventListener("DOMContentLoaded", function () {
    // Hide Intro Paragraph to Imporve UI & UX
    let introHide = document.getElementById("intro");

    introHide.addEventListener("click", function () {
        introHide.classList.add("hide");
    });
    // Test Script Running
    console.log("Hello World");

    // Game Core Logic
    let gameRun = false;
    let cardDeck = [];
    let coTicker = ["TSLA", "MSFT", "AAPL"];
    let startGame = document.getElementById("start");
    let bank = document.getElementById("bank");
    let targetCo = document.querySelector("#targetCo");
    let executeBtn = document.getElementById("execute");
    let inGame = document.getElementById("inGame");
    
        function gameFunc(coTicker){
        
            console.log("gameFunc ran")
            startGame.innerHTML = "Stop";
            bank.innerHTML = "10000";
            inGame.innerText = "Double Click Stop to Exit!"
            // startGame.setAttribute("id","stop");
            // startGame.removeEventListener("click", startGameHandler);

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
            });

            console.log("Game State is " + gameRun)
        };
    
    
    let startGameHandler = () => {
        gameRun = !gameRun;
        gameFunc(coTicker);
        console.log("startgame Event Clicked " + gameRun);
        setTimeout(toggleTest, 1500);  
    };

    startGame.addEventListener("click", startGameHandler);
    
    

    let toggleTest = () =>{
        if (gameRun = !gameRun){
        startGame.innerHTML = "Start";
        bank.innerHTML = "";
        targetCo.innerHTML = "";
        inGame.innerText = "";
        console.log("toggle func triggered");
        };
    };


    // let stopGameHandler = () => {
    //     gameRun = !gameRun;
    //     startGame.innerHTML = "Start";
    //     bank.innerHTML = "";
    //     targetCo.innerHTML = "";
    //     console.log("stop button clicked")
    // };

    
    // gameFunc(coTicker);
    
    // let stopGame = document.getElementById("stop");

    // stopGame.addEventListener("click", stopGameHandler);

    // setTimeout(gameRun,100);

    // function checkGameState(gameRun) {
    //     if (gameRun === true) {
    //         gameFunc(coTicker);
            
    //         } else {
            
    //     };
    // };

    //counter timing function
    let counter = document.getElementById("counter");
    counter.innerHTML = 1000 + "s" //test line

    // Scoreboard Functions

    // let scoreboard = document.querySelector("id","score");
    // let playerName = document.querySelector("id", "playerName");
    // let playerScore = document.querySelector("id", "playerScore");
    // playerScore.textContent = "WInner";
    // playerName.textContent = "namanam";


    

    

    

    


}); // End of DOM Loader

// start stop button --- event listener toggle ---???
    //while game is running set target ticker, wait for user select input, start timeout clock function,
    //compare user selections && if user selects pairs in time score ++ else score --
    //Update target ticker
    // let coIcon = {"tsla": "assets/images/Tesla_Motors.png",
    // "msft": "assets/images/Microsoft_logo.png", 
    // "aapl": "assets/images/Apple_logo_black.png"};
        // math rand select 1 coIcon, && math rand select 1 coTicker apply to card
    // let cardSelect = document.getElementsByClassName("card");
    // cardSelect.addEventListener("click", function(){
    //     cardSelect.classList.add("flip");
    // });

    // startGame()

    // resetGame()

    // updateBank()

    // generateValues()


    



// if (gameRun === false){
//     gameFunc(gameRun, coTicker);
// } else {stopGame.addEventListener("click", function () {
//     stopGame.removeEventListener;
//     gameRun = false;
//     startGame.innerHTML = "Start";
//     bank.innerHTML = "";
//     targetCo.innerHTML = "";
//     });
// }
