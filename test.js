let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let total = document.getElementById("total");
let timeview = document.getElementById("timeview");
let showOverlay = document.getElementById("showOverlay");
let gameoOver = document.getElementById("gameOver");
let close = document.getElementById("close");

let points = 0;
let display = null;
//let fiveMinutes = 10 ;
let timeleft = 5;

let showOverlayEvent = function(e) {
    e.preventDefault; // default behaviour chanceled
    overlay.classList.remove("layer-hidden");
    close.classList.remove("layer-hidden");
}

let clicker = function (e) {

    if (timeleft > 0) {

        points = points + 1;

        if (points === 1) {


            var downloadTimer = setInterval(function () {
                timeleft = timeleft - 1;
                document.getElementById("progressBar").value = timeleft;
                timeview.innerHTML = timeleft;

                if (timeleft <= 0) {
                    clearInterval(downloadTimer);

                    gameOver.classList.remove("layer-hidden");
                    total.innerHTML = points;

                    // end of game

                    let showOverlayEvent = function (e) {
                        e.preventDefault; // default behaviour chanceled
                        overlay.classList.remove("layer-hidden");
                        close.classList.remove("layer-hidden");

                    }
                }
            }, 1000);


        }
        counter.innerHTML = points;
    }
}

cookie.addEventListener("click", clicker);


window.onload = function () {
    display = document.querySelector('#time');


};