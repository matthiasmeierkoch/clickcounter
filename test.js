let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let total = document.getElementById("total");
let timeview = document.getElementById("timeview");
let gameOver = document.getElementById("gameOver");
let close = document.getElementById("close");

let points = 0;
let timeleft = 5;


cookie.addEventListener("mousedown", mousedown);
cookie.addEventListener("mouseup", mouseup);

function mousedown() {
    console.log("MouseDown");
    document.getElementById("cookie").style.backgroundImage = "url('./assets/bubble2.png')";
}

function mouseup() {
    console.log("MouseUp");
    document.getElementById("cookie").style.backgroundImage = "url('./assets/bubble1.png')";
}

let clicker = function (e) {

    if (timeleft > 0) {

        points = points + 1;

        if (points === 1) {


            let gameTimer = setInterval(function () {
                timeleft = timeleft - 1;
                document.getElementById("progressBar").value = timeleft;
                timeview.innerHTML = timeleft;

                if (timeleft <= 0) {
                    clearInterval(gameTimer);

                    gameOver.classList.remove("layer-hidden");
                    total.innerHTML = points;

                }
            }, 1000);


        }
        counter.innerHTML = points;
    }
};

cookie.addEventListener("click", clicker);