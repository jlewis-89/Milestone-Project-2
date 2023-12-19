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



});