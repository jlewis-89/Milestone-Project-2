// $(document).ready(function () {

//     $("#test").click(function () {
//         $("#test").html("TWO THREE FOUR");
//     });

//     // $("#intro").click(function () {
//     //     $("#intro").addClass("hide");
//     // });

// });

document.addEventListener("DOMContentLoaded", function () {

    let introHide = document.getElementById("intro");

    introHide.addEventListener("click", function () {
        introHide.classList.add("hide");
    });

    console.log("Hello World");

    // Game Core Logic
    let gameRun = false;
    let cardDeck = [];
    let coTicker = ["TSLA", "MSFT", "AAPL"];
    let startGame = document.getElementById("start");
    startGame.addEventListener("click", function () {
        gameRun = true;
        
        startGame.innerHTML = "Stop";
        let bank = document.getElementById("bank");
        bank.innerHTML = "10000";
    
        // Target Generator
        function newTarget(coTicker) {
            let targetIndex = Math.floor(Math.random() * coTicker.length);
            return coTicker[targetIndex];
        }
        let targetTicker = newTarget(coTicker);
        console.log(targetTicker);
        // Update Page with Ticker Target
        let targetCo = document.querySelector("#targetCo");
        targetCo.innerHTML = targetTicker;
        
        let executeBtn = document.getElementById("execute");
        executeBtn.addEventListener("click", function(){
            targetTicker = newTarget(coTicker); // call newTarget function and update target Ticker
            console.log(targetTicker); //testing function
            targetCo.innerHTML = targetTicker;

        });

        //while game is running set target ticker, wait for user select input, start timeout clock function,
        //compare user selections && if user selects pairs in time score ++ else score --
        //Update target ticker

        // while (gameRun) {
             setTimeout(console.log("Game Running"),10000);
        // };
    
    
    });

    // let coIcon = [assets/images/Tesla_Motors.png, assets/images/Microsoft_logo.png, assets/images/Apple_logo_black.png];


    

    

    





    // math rand select 1 coIcon, && math rand select 1 coTicker apply to card


    // let cardSelect = document.getElementsByClassName("card");
    // cardSelect.addEventListener("click", function(){
    //     cardSelect.classList.add("flip");
    // });

    // startGame()

    // resetGame()

    // updateBank()

    // generateValues()

});