const carakter = document.querySelector('.carakter');
const block = document.querySelector('#block');
const hole = document.querySelector('#hole');
let jumping = 0;
let counter = 0;
var loop = [];
Window.score = 0;

hole.addEventListener("animationiteration", function () {
    let random = -(Math.random() * 300 + 150);
    hole.style.top = random + "px";
    counter++

})

setInterval(() => {
    let caraktertop = parseInt(window.getComputedStyle(carakter).getPropertyValue("top"));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); let holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let ctop = -(500 - caraktertop)
    const holebotom = holetop + (150 - parseInt(window.getComputedStyle(carakter).getPropertyValue("height")))
    const score = document.getElementsByClassName("score")[0];
    if (jumping == 0) {
        carakter.style.top = caraktertop + 3 + 'px'
    }


    if ((caraktertop > 480) || ((blockleft < 20) && (blockleft > -50) && ((ctop < holetop) || (ctop > holebotom)))) {
        alert(`YOU DEAT!! \n youre score: ${+Window.score}`)
        window.location.reload();
        carakter.style.top = 100 + 'px'
        counter = 0
    }
    score.textContent = Window.score;
    Window.score++;

}, 10);

function jum() {
    jumping = 1
    let jumcount = 0
    let juminterval = setInterval(() => {
        let caraktertop = parseInt(window.getComputedStyle(carakter).getPropertyValue("top"));
        if ((caraktertop > 6) && (jumcount < 10)) {
            carakter.style.top = caraktertop - 0.01 + 'px'
        }

        if (jumcount >= 10) {
            clearInterval(juminterval)
            jumping = 0;
            jumcount = 0;
        }
        jumcount++
    }, 10);
}

window.addEventListener('keydown', function (e) {
    if (e.code == 'Space') {
        jum()
        loop.push(setInterval(() => {
            jum()
        }, 10))
    }
})

window.addEventListener('keyup', function (e) {
    if (e.code == 'Space') {
        loop.map(e => this.clearInterval(e))
    }
})