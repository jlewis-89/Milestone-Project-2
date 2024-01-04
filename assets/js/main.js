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
    let gameRun;
    let cardDeck = [];
    let coTicker = ["TSLA", "MSFT", "AAPL"];
    let startGame = document.getElementById("start");
    let bank = document.getElementById("bank");
    let targetCo = document.querySelector("#targetCo");
    let executeBtn = document.getElementById("execute");
    let stopGame = document.getElementById("stop");
    
    
    // Start Game Function
    function gameFunc(coTicker){
        console.log("gameFunc ran")
        startGame.innerHTML = "Stop";
        startGame.setAttribute("id","stop");   
        bank.innerHTML = "10000";
        

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

        setTimeout(console.log("Game Running"), 10000);
        // return gameRun = false;
    };

    startGame.addEventListener("click", () => {
        gameRun = true;
        console.log(gameRun);
        gameFunc(coTicker)
    });

    stopGame.addEventListener("click", () =>{
        this.location.reload();
    })


});
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

    // if (gameRun === true) {
    //     gameFunc(gameRun, coTicker);
    // } else {

    // };



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
