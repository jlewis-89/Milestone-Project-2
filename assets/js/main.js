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

    let startGame = document.getElementById("start");
    startGame.addEventListener("click", function () {
        startGame.innerHTML = "Reset";
        let bank = document.getElementById("bank");
        bank.innerHTML = "10000";
    });

    // let cardSelect = document.getElementsByClassName("card");
    // cardSelect.addEventListener("click", function(){
    //     cardSelect.classList.add("flip");
    // });

    // startGame()

    // resetGame()

    // updateBank()

    // generateValues()

});