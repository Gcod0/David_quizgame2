function result () {
    let score = 0;
    if (document.getElementById("correct1").checked) {
        score++;

    }
    if (document.getElementById("correct2").checked) {
        score++;

}
    if (document.getElementById("correct3").checked) {
        score++;

    } 

document.write("Your score is " + score + " out of 3");
console.log (score);

}

// set a countdown timer
// start timer on page load 


// stop timer on click of submit button

const startingMinutes = 10;
let time = startingMinutes * 60;

const countDownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}

