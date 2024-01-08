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

        // START OF GAME FUNCTION

        function gameFunc(coTicker){
            
            console.log("gameFunc ran")
            startGame.innerHTML = "Stop";
            bank.innerHTML = "10000";
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
    
     //test line

    // while (gameRun === true && startGame.innerHTML != "Start"){

    //     time = Math.floor(Math.random()*10);
    //     setTimeout(console.log(time),10000);
    // };

    // Scoreboard Functions

    // let scoreboard = document.querySelector("id","score");
    // let playerName = document.querySelector("id", "playerName");
    // let playerScore = document.querySelector("id", "playerScore");
    // playerScore.textContent = "Winner";
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
