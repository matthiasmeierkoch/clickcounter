let cookie = document.getElementById("cookie")
let counter = document.getElementById("counter")
let showOverlay = document.getElementById("showOverlay");
let gameoOver = document.getElementById("gameOver");

let points = 0;
let display = null;
//let fiveMinutes = 10 ;
let timeleft = 5;

let clicker = function (e) {

    if (timeleft > 0) {

        points = points + 1;

        if (points === 1) {


            var downloadTimer = setInterval(function () {
                timeleft = timeleft - 1;
                document.getElementById("progressBar").value = timeleft;
                if (timeleft <= 0) {
                    clearInterval(downloadTimer);

                    gameOver.classList.remove("layer-hidden");

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


// Progress bar timer Start Timer


/* Timer 2
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        if (timer === 0) {
            // alert("kkk")


        }


    }, 1000);
}
*/

window.onload = function () {
    display = document.querySelector('#time');


};