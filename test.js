let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let total = document.getElementById("total");
let timeview = document.getElementById("timeview");
let gameOver = document.getElementById("gameOver");
let start = document.getElementById("start");
let startScreen = document.getElementById("startScreen");
let showOverlay = document.getElementById("showOverlay");
let restart = document.getElementById("restart");
let points = 0;
let timeleft = 5;


function mousedown() {
    console.log("MouseDown");
    document.getElementById("cookie").src = "./assets/bubble2.png";
}

function mouseup() {
    console.log("MouseUp");
    document.getElementById("cookie").src = "./assets/bubble1.png";
}

function showStartScreen(){
    startScreen.classList.remove("layer-hidden");
    showOverlay.classList.add("layer-hidden");
    gameOver.classList.add("layer-hidden");

}

function startGame(){
    startScreen.classList.add("layer-hidden");
    showOverlay.classList.remove("layer-hidden");
    gameOver.classList.add("layer-hidden");
    points = 0;
    timeleft = 5;
    timeview.innerHTML = timeleft;
}

function endGame(){
    startScreen.classList.add("layer-hidden");
    showOverlay.classList.add("layer-hidden");
    gameOver.classList.remove("layer-hidden");
}


function clicker(e){

    if (timeleft > 0) {

        points = points + 1;

        if (points === 1) {


            let gameTimer = setInterval(function () {
                timeleft = timeleft - 1;
                document.getElementById("progressBar").value = timeleft;
                timeview.innerHTML = timeleft;

                if (timeleft <= 0) {
                    clearInterval(gameTimer);

                    endGame();
                    total.innerHTML = points;

                }
            }, 1000);


        }
        counter.innerHTML = points;
    }
}

cookie.addEventListener("click", clicker);
cookie.addEventListener("mousedown", mousedown);
cookie.addEventListener("mouseup", mouseup);
start.addEventListener("click", startGame);
restart.addEventListener("click", startGame);


showStartScreen();

